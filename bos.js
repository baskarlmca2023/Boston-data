import {boston} from"./boston.js";
var newBoston=boston.data;
var element=" ";
for(let i=0;i<newBoston.length;i++)
{
    if(newBoston[i][11]>=200000)
    {
    element=element + "<h2>" + newBoston[i][8]+"</h2>" + "<h3>" + newBoston[i][11] + "</h3>";

    }
}
document.getElementById("app2").innerHTML="<ul>"+element+"</ul>";