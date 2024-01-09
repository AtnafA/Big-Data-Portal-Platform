var currentDate = new Date();
var dayname=currentDate.getDay();
if(dayname==1){
  dayname="Monday"  
}
else if(dayname==2){
 dayname="Teusday"     
}
else if(dayname==3){
 dayname="Wednesday"     
}
else if(dayname==4){
 dayname="Thrusday"     
}
else if(dayname==5){
 dayname="Friday"     
}
else if(dayname==6){
 dayname="Saturday"     
}
else if(dayname==0){
 dayname="Sunday"     
}
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
document.write('<center><p> Copyright &copy;  '+dayname+", "+day + "/" + month + "/" + year+' By ECDSWCo. All Rights Reserved <br>ECDSWC dKMS</p></center>');
