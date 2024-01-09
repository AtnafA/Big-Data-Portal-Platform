var  pageCount =0;
function   addCount() {
 pageCount+=1;
 document.write('<center><p>This site has been visited '+pageCount+' times.</p></center>');
 addCount();
 }
 
