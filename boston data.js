import{boston}from "./boston.js";
var newboston=boston.data
var ele="";
for(let i=0;i<newboston.length;i++){
  for(let j=i+1;j<newboston.length;j++){
    if(newboston[i][11]>20000){
       console.log(newboston [i][11]>20000)
    }
            if(newboston[i][11]<newboston[j][11]){
            let data=newboston[i];
            newboston[i]=newboston[j];
            newboston[j]=data;
    
    
            }
            }
        }
            var result=newboston.slice(0,5);
            for(let i=0;i<5;i++){
        ele=ele+"<h1>" + result[i][8] + "</h1>"+"<h1>"+result[i][11]+"</h1>"
    
        }
    
document.getElementById("app1").innerHTML=ele;
    

   

