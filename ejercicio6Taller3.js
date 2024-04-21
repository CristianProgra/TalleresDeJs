    //6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.
    
     let intervalo = parseInt(prompt("ingrese el numero de intervalo"))

     if(intervalo > 0){
     for(let num = 1;num <= 30;num += intervalo){        
     document.write(num +"<br>");
     }
     }
     else{
         document.write("el intervalo ingresado no es valido");
     }
