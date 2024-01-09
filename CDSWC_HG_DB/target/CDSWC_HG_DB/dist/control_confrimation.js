/**
 * 
 */
/*Handle data from process*/
var hold_allrequested=document.getElementById("CoVrastar_id");
var process_accessU=document.getElementById("processf");
xmlprocessesU=new XMLHttpRequest();
document.getElementById("ask_request").onclick = function(evt){
	if (typeof xmlprocessesU != "undefined"){
		xmlprocessesU= new XMLHttpRequest();
         }
         else if (window.ActiveXObject){
        	 xmlprocessesU= new ActiveXObject("Microsoft.XMLHTTP");
         }
         if (xmlprocessesU==null){
         alert("Browser does not support XMLHTTP Request")
         return;
         }
         var center_name=document.getElementById("usertype").value;
         var url="Process_asked?cen_id="+center_name;
         xmlprocessesU.open("POST", url,true);
         xmlprocessesU.onload=function(){
        var prodataU=JSON.parse(xmlprocessesU.responseText);
        getprocessU(prodataU);
        gettable_requesteddata(prodataU);
        	 }
         xmlprocessesU.send();
         }
function getprocessU(datap){
var ret="";	
for(var i=0; i<datap.length; i++){
	if(datap[i].regid!=0){
		ret+='<option value="' + datap[i].regid + '">' + datap[i].regnam + '</option>';	
	}	
}
document.getElementById("processf").options.length=1;	
process_accessU.insertAdjacentHTML('beforeend',ret);
	}
function gettable_requesteddata(data_) {
	var tbvalue='';
	for(var i=0;i<data_.length;i++){
		if(data_[i].process!=null){
		tbvalue+='<tr><td data-Eco="proName" style="width: 15%;">'+data_[i].process+'</td>'
			+'<td data-Eco="Clu" style="width: 50%;">'+data_[i].project_name+'</td>'
			+'<td data-Eco="Cat" style="width: 13%;cursor: pointer;">'+data_[i].user_email+'</td>'
			+'<td data-Eco="Spa" style="width: 10%;">'+data_[i].date_asked+'</td>'
			+'<td style="width: 5%; cursor: pointer;font-weight: bold;font-size: 16px;">Confirm</td></tr>'	
		}	
	}
	var table1 = document.getElementById("CoVrastar_id");
  	for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
  	  if(i>1) {
  	    row = table1.rows[i-1];
  	    row.parentNode.removeChild(row);
  	  }
  	}
  	hold_allrequested.insertAdjacentHTML('beforeend',tbvalue);	
	
}
/*Handle data from project name*/
var hold_requestable=document.getElementById("CoVrastar_id");
var proname_accessU=document.getElementById("pro_name");
document.getElementById("processf").onchange = function(evt){
	var datatosend = evt.target.value;
	if (typeof xmlprocessesU != "undefined"){
		xmlprocessesU= new XMLHttpRequest();
         }
         else if (window.ActiveXObject){
        	 xmlprocessesU= new ActiveXObject("Microsoft.XMLHTTP");
         }
         if (xmlprocessesU==null){
         alert("Browser does not support XMLHTTP Request")
         return;
         }
         var center_id=document.getElementById("usertype").value
  var url="project_name?pro_id="+datatosend;
         xmlprocessesU.open("POST", url,true);
         xmlprocessesU.onload=function(){
        var prodataU=JSON.parse(xmlprocessesU.responseText);
        getprojectnameU(prodataU);
        getdatatotable(prodataU);
        	 }
         xmlprocessesU.send();
         }
function getprojectnameU(datap){
var ret="";	
for(var i=0; i<datap.length; i++){
	if(datap[i].regid!=0){
	ret+='<option value="' + datap[i].regid + '">' + datap[i].regnam + '</option>';	
	}
			
}
document.getElementById("pro_name").options.length=1;
proname_accessU.insertAdjacentHTML('beforeend',ret);
	}
function getdatatotable(datato_){
	var tbvalue='';
	for(var i=0;i<datato_.length;i++){
		if(datato_[i].process!=null){
		tbvalue+='<tr><td data-Eco="proName" style="width: 15%;">'+datato_[i].process+'</td>'
			+'<td data-Eco="Clu" style="width: 50%;">'+datato_[i].project_name+'</td>'
			+'<td data-Eco="Cat" style="width: 13%;cursor: pointer;">'+datato_[i].user_email+'</td>'
			+'<td data-Eco="Spa" style="width: 10%;">'+datato_[i].date_asked+'</td>'
			+'<td style="width: 5%; cursor: pointer;font-weight: bold;font-size: 16px;">Confirm</td></tr>'	
		}	
	}
	var table1 = document.getElementById("CoVrastar_id");
  	for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
  	  if(i>1) {
  	    row = table1.rows[i-1];
  	    row.parentNode.removeChild(row);
  	  }
  	}
  	hold_requestable.insertAdjacentHTML('beforeend',tbvalue);	    	
}
//design or supervision
var xmlrequest=new XMLHttpRequest();
var desinsup_holder=document.getElementById("design_superv1");
document.getElementById("pro_name").onchange = function(evt){
	var proname_key = evt.target.value;
	if (typeof xmlrequest != "undefined"){
		xmlrequest= new XMLHttpRequest();
         }
         else if (window.ActiveXObject){
        	 xmlrequest= new ActiveXObject("Microsoft.XMLHTTP");
         }
         if (xmlrequest==null){
         alert("Browser does not support XMLHTTP Request")
         return;
         }
  var url1="design_sup?proj_id="+proname_key;
         xmlrequest.open("POST", url1,true);
         xmlrequest.onload=function(){
        var design_sudata=JSON.parse(xmlrequest.responseText);
        design_superv1(design_sudata);
        	 }
         xmlrequest.send();
         } 
function design_superv1(datafrom){
	var datadrop='';
	for(var i=0; i< datafrom.length; i++){
		if(datafrom[i].folder=='Supervision' ){
			if(datafrom[i].regid!=0){
				 datadrop+='<li id="'+datafrom[i].regid+'" ><input type="checkbox" id="'+datafrom[i].regid+'" name="c_class" value="'+datafrom[i].regnam+'">'
		           +' <label for="sup_"><a href="#" style="font-size:19px;">'+datafrom[i].regnam+'</a></label></li>';			
			}
			
		}
		else{
			if(datafrom[i].regid!=0){
				datadrop+='<li id="'+datafrom[i].regid+'" ><input type="checkbox" id="'+datafrom[i].regid+'" name="c_class" value="'+datafrom[i].regnam+'">'
		          +' <label for="des_"><a href="#" style="font-size:19px;">'+datafrom[i].regnam+'</a></label></li>';	
			}
			 
		}
	}
	document.getElementById('design_superv1').innerHTML = ''
	desinsup_holder.insertAdjacentHTML('beforeend',datadrop);         	
}
onclick=function(){prodata()};
	var xml_delete_proj=new XMLHttpRequest();
	var hold_response=document.getElementById("hold_response");
function prodata(){
		var table_project=document.getElementById('CoVrastar_id');
	 	for(var i=1;i < table_project.rows.length; i++){
	 				table_project.rows[i].onclick = function(){
	 					getvale1(this);	
	 					getUser_profile(this);
	 			};					
	 	}	
	};
 	function getvale1(row){
			row.cells[4].onclick=function(){	
			    var file_name=document.getElementById("hold_filename").value=row.cells[1].innerText;
 				if(confirm("If you Click Ok,  "+file_name+" Document Will be Granted")){
 					 var username=row.cells[2].innerText;
 					var des=document.getElementById("hold_res1").value;
 					var sup=document.getElementById("hold_res2").value;
 					var url1="grantdessup_pro?userN="+username+"&dse="+des+"&sup="+sup;
 		 	 	xml_delete_proj.open("POST",url1,true);
 		 	    xml_delete_proj.onload=function(){
 		 	    	var hold_respo=JSON.parse(xml_delete_proj.responseText);
 		 	  	      getreport(hold_respo);
 		 	 		}
 		 	    xml_delete_proj.send();
 					return true;
 					}
 				else{
 					return false;	
 				}
 				return false;		
		};	
	}
function getreport(datareport){
	var hold='';
	for(var i=0;i<datareport.length;i++){
	hold+='<li>'+datareport[i].regnam+'</li>';	
	}
	document.getElementById("hold_response").innerHTML='';
	hold_response.insertAdjacentHTML('beforeend', hold)
}
var hold_user_profile=document.getElementById("hold_user_profile");
var holduser_xml=new XMLHttpRequest();
function getUser_profile(row) {
	row.cells[2].onclick=function(){
			var user_profile=row.cells[2].innerText;
			var url_user='userholder?email='+user_profile;
			holduser_xml.open('POST', url_user,true);
			holduser_xml.onload=function(){
				var data_user=JSON.parse(holduser_xml.responseText);
				userdetail(data_user);
			}
			holduser_xml.send();	
	}	
	}
function userdetail(detail){
	var data_container='';
	for(var i=0;i<detail.length;i++){
		data_container+='<tr><td style="width: 40%;">Employe Name:  </td><td style="width: 50%;">'+detail[i].class_name+'</td></tr>'
		+'<tr><td style="width: 40%;">Center:  </td><td style="width: 50%;">'+detail[i].cata_gory+'</td></tr>'
		+'<tr><td style="width: 40%;">Process:  </td><td style="width: 50%;">'+detail[i].process+'</td></tr>';
	}
	document.getElementById("hold_user_profile").innerHTML='';
	hold_user_profile.insertAdjacentHTML('beforeend', data_container)
}