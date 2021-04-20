function Poblacion_Inicial = Generar_Poblacion(Tam,Nc,Recursos,Costos_ataque)
Poblacion_Inicial=zeros(Tam,Nc);
Posicion=2.^(0:Nc-1);
for i=1:Tam
    Individuo=randi([0 1],1,Nc);
    Costo_total=Individuo*Costos_ataque';
    Comparar=0;
    contador=0;
    while Costo_total>Recursos || ~isempty(Comparar)
       if contador<=10
        Individuo=randi([0 1],1,Nc);
       end
        Num1=Poblacion_Inicial*Posicion';
        Num2=Individuo*Posicion';
        Comparar=find(Num1==Num2, 1);
        contador=contador+1;
        if contador>10
            s=randi([1 Nc],1,round(Nc/4));
            Individuo(s)=0;
        end
        Costo_total=Individuo*Costos_ataque'; 
    end
    Poblacion_Inicial(i,:)=Individuo;
    
end
end



