 //Variables
 var selector = document.getElementById('elegi');

 var your_choice = document.getElementById('your_choice');
 var your_score = document.getElementById('your_score');
 var cpu_score = document.getElementById('cpu_score');
 
 var piedra = document.getElementById('piedra'),
     papel = document.getElementById('papel'),
     tijera = document.getElementById('tijera');

var rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissor');

 var cpuHistory = [];

 var youHistory = [];

 var marcadorYou = 0;

 var marcadorCPU = 0;

 var resultado = document.getElementById('result');


 //Event listener
     selector.addEventListener('click', yourChoice)

 //Funciones

     function yourChoice(e){
         var valor = e.target;

         switch (valor.value){
             case 'piedra':
             your_choice.setAttribute('src','img/rock.png');
             cpuChoice();
             youHistory.push('piedra'); 
             results();                   
             break;

             case 'papel':
             your_choice.setAttribute('src','img/paper.png');
             cpuChoice();
             youHistory.push('papel');
             results(); 
             break;

             case 'tijera':
             your_choice.setAttribute('src','img/scissors.png');
             cpuChoice();
             youHistory.push('tijera');
             results(); 
             break;

             default:
             
             break;                    
         }

         

         youHistory.splice(0);
         cpuHistory.splice(0);
         
     }

     function results(){
        
         if(youHistory[0] == 'piedra' && cpuHistory[0] == 'piedra'){
             console.log('empate');
             resultado.innerHTML ='EMPATE';                    
         }
         if(youHistory[0] == 'piedra' && cpuHistory[0] == 'papel'){
             console.log('perdiste');
             resultado.innerHTML ='PERDISTE';
             marcadorCPU += 1;                      
         }
         if(youHistory[0] == 'piedra' && cpuHistory[0] == 'tijera'){
             console.log('ganaste');
             resultado.innerHTML ='GANASTE';
             marcadorYou += 1                     
         }
         if(youHistory[0] == 'papel' && cpuHistory[0] == 'papel'){
             console.log('empate');
             resultado.innerHTML ='EMPATE';   
         }
         if(youHistory[0] == 'papel' && cpuHistory[0] == 'piedra'){
             console.log('ganaste');
             resultado.innerHTML ='GANASTE';
             marcadorYou += 1                      
         }
         if(youHistory[0] == 'papel' && cpuHistory[0] == 'tijera'){
             console.log('perdiste');
             resultado.innerHTML ='PERDISTE';
             marcadorCPU += 1                     
         }
         if(youHistory[0] == 'tijera' && cpuHistory[0] == 'tijera'){
             console.log('empate');
             resultado.innerHTML ='EMPATE';   
         }
         if(youHistory[0] == 'tijera' && cpuHistory[0] == 'piedra'){
             console.log('perdiste');
             resultado.innerHTML ='PERDISTE';
             marcadorCPU += 1                     
         }
         if(youHistory[0] == 'tijera' && cpuHistory[0] == 'papel'){
             console.log('ganaste');
             resultado.innerHTML ='GANASTE';
             marcadorYou += 1                      
         }

     }


     function cpuChoice(){
         var cpu = Math.floor(Math.random() * 3) + 1;
        if(cpu == 1){
            cpu_choice.setAttribute('src','../img/rock.png');
            cpuHistory.push('piedra');
            rock.checked = true;
        }else if(cpu == 2){
            cpu_choice.setAttribute('src','../img/paper.png');
            cpuHistory.push('papel');
            paper.checked = true; 
        }else{
            cpu_choice.setAttribute('src','../img/scissors.png');
            cpuHistory.push('tijera');
            scissors.checked = true;
        }
          
     }

 
 
 