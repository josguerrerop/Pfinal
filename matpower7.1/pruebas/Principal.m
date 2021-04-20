%% Algoritmo genetico
clear
clc
warning off
%% Cargar datos de entrada
Caso=loadcase(caso5);
%% Generar poblacion inicial
 % Caso 5
Tam=10;
Recursos=300;
Ataque_Lineas=[50 50 50 50 50 50];
Ataque_Generadores=[100 100 100 100 100];
%% Caso 24
% Tam=50;
% Recursos=800;
% Ataque_Lineas(1:38)=50;
% Ataque_Generadores(1:33)=100;
%%
Pc=0.8;
Pm=0.1;
Costo_ataque=[Ataque_Lineas,Ataque_Generadores];
Nc=length(Costo_ataque);
Poblacion_Inicial = Generar_Poblacion(Tam,Nc,Recursos,Costo_ataque);
%% Calcular funcion de adaptacion
Costo=zeros(Tam,1);
for i=1:Tam
    Vector_Interdiccion(:)=Poblacion_Inicial(i,:);
    [~,Costo(i),~]= Flujo_Optimo(Vector_Interdiccion,Caso);
end
Poblacion_Interdiccion_=[Poblacion_Inicial,Costo];
Poblacion_Interdiccion_= sortrows(Poblacion_Interdiccion_,Nc+1);
%% Seleccion
% Selección
itermax=1000;
Costo_Hijos=0;
Costo_Hijo1=0;
Costo_Hijo2=0;
contador=0;
t=0;
Poblacion_Interdiccion=Poblacion_Interdiccion_(:,1:Nc);
%for t=1:itermax
while contador<itermax
    contador=contador+1;
    t=t+1;    
        cumple=0;
        Penalizacion_Hijo1=0;
        Penalizacion_Hijo2=0; 
      while cumple==0 || Penalizacion_Hijo1~=0 || Penalizacion_Hijo2~=0 
        Tor = unique(randi([1 Tam],1,2));
        while (size(Tor,2) == 1) 
           Tor = unique(randi([1 Tam],1,2));
        end
        Padre1 = Poblacion_Interdiccion(Tor(1),:);
        Padre2 = Poblacion_Interdiccion(Tor(2),:);
        % Cruce
            if rand()<=Pc
                r=unique(randi([1 Nc],1 ,1));
                Hijo1=[Padre1(1:r),Padre2(r+1:end)];
                Hijo2=[Padre2(1:r),Padre1(r+1:end)];
            else
                Hijo1=Padre1;
                Hijo2=Padre2;
            end
        % Mutación
            Aleatorio= rand(1,Nc);
            Mutar=find(Aleatorio<=Pm);
            for i=1:length(Mutar)
                s=Mutar(i);
                    if Hijo1(s)==1
                        Hijo1(s)=0;
                    else
                        Hijo1(s)=1;
                    end    
            end
            
                        Mutar=find(Aleatorio<=Pm);
            for i=1:length(Mutar)
                s=Mutar(i);
                    if Hijo2(s)==1
                        Hijo2(s)=0;
                    else
                        Hijo2(s)=1;
                    end    
            end

            Costo_Hijo1=Hijo1*Costo_ataque';
            Penalizacion_Hijo1=min(0,(Recursos-Costo_Hijo1)); 

            Costo_Hijo2=Hijo2*Costo_ataque';
            Penalizacion_Hijo2=min(0,(Recursos-Costo_Hijo2));
            cumple=1;
            Penalizacion_Hijos=[Penalizacion_Hijo1;Penalizacion_Hijo2];
      end
        
%% Evaluar funcion fitness
Hijos=[Hijo1;Hijo2];
Costo_total_Hijos=zeros(2,1);
Registro_Hijos=zeros(2,1);
for i=1:2
    Vector_Interdiccion(:)=Hijos(i,:);
    [~,Costo,~]= Flujo_Optimo(Vector_Interdiccion,Caso);
    Costo_total_Hijos(i)=Costo;
end
 Poblacion_Hijos_Interdiccion_=[Hijos,Costo_total_Hijos];
 Poblacion_Hijos_Interdiccion_= sortrows(Poblacion_Hijos_Interdiccion_,Nc+1);
  %% Remplazar en la población
 Ganador=Poblacion_Hijos_Interdiccion_(end,:); 
 bandera=0;
 for i=1:Tam
     if isequal(Ganador(1:end-1),Poblacion_Interdiccion(i,:))
         bandera=1;
         break;
     end           
 end
 if Ganador(end)>Poblacion_Interdiccion_(1,end) && bandera==0
    Poblacion_Interdiccion_(1,:)=Ganador(:);
 end
 if Ganador(end)>Poblacion_Interdiccion_(end,end) && bandera==0   
    contador=0;
 end 
Poblacion_Interdiccion_= sortrows(Poblacion_Interdiccion_,Nc+1);
Poblacion_Interdiccion=Poblacion_Interdiccion_(:,1:Nc);
fprintf('Iteración %d, Función Objetivo %2.5f, contador %2.5f \n',t,Poblacion_Interdiccion_(end,end),contador);
end
Vector_Interdiccion=Poblacion_Interdiccion(i,:);
[Solucion,Costo_total]= Flujo_Optimo(Vector_Interdiccion,Caso);

