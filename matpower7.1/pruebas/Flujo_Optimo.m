function [Solucion_, Costo, Converge] = Flujo_Optimo(Vector_Interdiccion,Caso)

%Vector_Interdiccion=[1 1 0 0 1 1 0 0 0 1 0];

% Vector_Interdiccion(1:71)=0;
% Vector_Interdiccion(1,[1	7	10	15	17	18	19	25	26	28	36	37 59 60])=1;
 
Nn=size(Caso.bus,1);
Nl=size(Caso.branch,1);
Caso2=Caso;
Caso=load2disp(Caso);
Caso.gencost(:,7:10)=0;
Cargas=find(isload(Caso.gen));
Generadores=find(~isload(Caso.gen));
Ng=length(Generadores);

VI_Lineas=Vector_Interdiccion(1:Nl);
VI_Generadores=Vector_Interdiccion(Nl+1:end);

%%  Cambiar Costos de las cargas despachables
RD=Caso.RD;
S=find(RD(:,2)==0);
RD(S,2)=RD(S,2)+1E-6;

S=find(RD(:,2)==100);
RD(S,2)=RD(S,2)-1E-6;

D=Caso.D;

for i=1:length(Cargas)
    j=Cargas(i);
    Pmax=Caso.gen(j,10);
    Valor_RD=Pmax*(1-(RD(i,2)/100));
    Costo_RD=abs(Pmax*RD(i,2)*RD(i,3)/100);
    Costo_Deslastre=abs((Valor_RD*D(i,2)))+Costo_RD;
    Caso.gencost(j,:)=[1 0 0 3 Pmax 0 Valor_RD Costo_RD 0 Costo_Deslastre];
end
%% Eliminar Lineas y generadores atacados
for i=1:Nl
    if VI_Lineas(i)==1
        chgtab_L=[1 1 3 i 11 1 0];
        Caso = apply_changes(1, Caso, chgtab_L);
    end
end
for i=1:Ng
    if VI_Generadores(i)==1
        chgtab_G=[1 1 2 i 8 1 0];
        Caso = apply_changes(1, Caso, chgtab_G);
    end
end

%% Calculo de flujo optimo de potencia
mpopt = mpoption('out.all', 0);
mpopt = mpoption(mpopt, 'verbose', 0);
Converge=1;
Costo=0;
m=0;
Solucion_=cell(1,0);
Islas=find_islands(Caso);
if sum(VI_Lineas)<Nl
    Red=extract_islands(Caso);
    for m=1:size(Red,2)
        mpopt = mpoption(mpopt,'model','AC');
        SubRed=Red{1,m};
        Referencia=find(SubRed.bus(:,2)==3);
        if isempty (Referencia)
            SubRed.bus(1,2)=3;
        end
        SubRed=ext2int(SubRed);
        if ~isempty(SubRed.gen)
            Solucion=runopf(SubRed,mpopt);
            Solucion_{1,m}=Solucion;
            
            if Solucion.success==0
                Converge=0;
                mpopt = mpoption(mpopt,'model','DC');
                 Solucion=runopf(SubRed,mpopt);
                 if Solucion.success==1
                     Converge=1;
                 else 
                     Converge=0;
                 end
            end
            Costo=Solucion.f+Costo;
        end
    end
end
Islas=find_islands(Caso);
N_Visitados=zeros(1,Nn);
for i=1:size(Islas,2)
    for j=1:length(Islas{1,i})
        k=Islas{1,i}(j);
        N_Visitados(k)=1;
    end
end
Aislados=find(N_Visitados==0);
if ~isempty(Aislados)
    if sum(Caso2.bus(Aislados,3))
        Caso.bus(find(N_Visitados),2)=4;
        Caso_=ext2int(Caso);
        mpopt = mpoption(mpopt,'model','DC');
        Sol=runopf(Caso_,mpopt);
        Solucion_{1,m+1}=Sol;
        if Sol.success==0
            Converge=0;
        end
        Costo=Costo+Sol.f;
    end
end
end

