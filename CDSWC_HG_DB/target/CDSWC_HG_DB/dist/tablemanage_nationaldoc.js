//search file name
        var searchtodiv=document.getElementById("Search_fn");
        var xmlhttpdatafn=new XMLHttpRequest();
        document.getElementById("search_fnkey").onchange = function(evnt){
        	var spa_key=evnt.target.value;
        	 if (typeof XMLHttpRequest != "undefined"){
        		 xmlhttpdatafn= new XMLHttpRequest();
                 }
                 else if (window.ActiveXObject){
                	 xmlhttpdatafn= new ActiveXObject("Microsoft.XMLHTTP");
                 }
                 if (xmlhttpdatafn==null){
                 alert("Browser does not support XMLHTTP Request")
                 return;
                 }	
        	 //organize data sets as spatial or vector
            var urlsearch="search_filen?search_key1="+spa_key;
            xmlhttpdatafn.open("POST", urlsearch, true);
            xmlhttpdatafn.onload= function () {
                	var datacata1 = JSON.parse(xmlhttpdatafn.responseText);	
                	acessvec_f(datacata1);
                	};
                	xmlhttpdatafn.send();
        };
            function acessvec_f(datafrom){
            	var flag=1;
            	var datadrop='<li id="'+flag+'"style="background-color:#E3E3F4;margin-top:14px;color: #0050A1;padding:10px;font-weight:600;font-size:19px;">Project Names:</li>';
            	for(var i=0; i< datafrom.length; i++){
           if (datafrom[i].class_name === "Corporation Project"){
    			datadrop+='<li id="'+datafrom[i].cata_gory+'" ><a href="#" style="font-size:17px;">'+datafrom[i].cata_gory+'</a></li>';
    		}
            	}
            	document.getElementById('Search_fn').innerHTML = ''
            	searchtodiv.insertAdjacentHTML('beforeend',datadrop);
            } 
//Search Engine 
            var hold_to=document.getElementById("pro_name_specific");
        var searchE_table=document.getElementById("searched_item");
        var xmlhttpdata1=new XMLHttpRequest();
        document.getElementById("Search_fn").onclick  = function(evnt){
        	var Pro_data=evnt.target.innerText;
    	   document.getElementById("pro_name_specific").innerHTML = '';
       	hold_to.insertAdjacentHTML('beforeend',Pro_data)   
        	 if (typeof XMLHttpRequest != "undefined"){
        		 xmlhttpdata1= new XMLHttpRequest();
                 }
                 else if (window.ActiveXObject){
                	 xmlhttpdata1= new ActiveXObject("Microsoft.XMLHTTP");
                 }
                 if (xmlhttpdata1==null){
                 alert("Browser does not support XMLHTTP Request")
                 return;
                 }	
            var url1="searchEngine?searchkey="+Pro_data;
            xmlhttpdata1.open("POST", url1, true);
            xmlhttpdata1.onload= function () {
                	var datacata1 = JSON.parse(xmlhttpdata1.responseText);	
                	acessvec_All(datacata1);
                	};
                	xmlhttpdata1.send();
        };
            function acessvec_All(datafrom){
            	 var pro_name=document.getElementById("pro_name_specific").innerText;
            	 var datadrop='';
            	 if(pro_name=='Project Names:'){
            		 datadrop+=''; 
            	 }
            	 else{
        datadrop+='<li style="background-color:#E3E3F4;margin-top:14px;color: #0050A1;padding:10px;font-weight:600;font-size:18px;">Thematic Area '+
                  ' of <label style="font-weight: normal;font-size: 16;color: #000000;">'+pro_name+'</label></li>';	 
            	 }
            	for(var i=0; i< datafrom.length; i++){
            	if (datafrom[i].class_name === "Corporation Project"){
            			datadrop+='<li id="'+datafrom[i].cata_gory+'" ><a href="#" style="font-size:17px;">'+datafrom[i].cata_gory+'</a></li>';
            		}
            	}
            		document.getElementById("searched_item").innerHTML = '';
                	searchE_table.insertAdjacentHTML('beforeend',datadrop);	
            }
            //Search Specific details
            var data_type_access=document.getElementById("type_name_specific");
            var searchE_item=document.getElementById("searched_specific");
            var xmlhttpdetail=new XMLHttpRequest();
            document.getElementById("searched_item").onclick  = function(evnt){
            	var spa_id=evnt.target.innerText;
            	 document.getElementById("type_name_specific").innerHTML = '';
            	data_type_access.insertAdjacentHTML('beforeend',spa_id);  
            	 if (typeof XMLHttpRequest != "undefined"){
            		 xmlhttpdetail= new XMLHttpRequest();
                     }
                     else if (window.ActiveXObject){
                    	 xmlhttpdetail= new ActiveXObject("Microsoft.XMLHTTP");
                     }
                     if (xmlhttpdetail==null){
                     alert("Browser does not support XMLHTTP Request")
                     return;
                     }
                     var pro_name=document.getElementById("pro_name_specific").innerText;
                var url1="search_detail?searchkey="+spa_id+"&pro_name="+pro_name;
                xmlhttpdetail.open("POST", url1, true);
                xmlhttpdetail.onload= function () {
                    	var datadetail = JSON.parse(xmlhttpdetail.responseText);	
                    	acessvec_detail(datadetail);
                    	};
                    	xmlhttpdetail.send();
            };
                function acessvec_detail(datafrom){
                	var type_name=document.getElementById("type_name_specific").innerText;
                	var datadrop='';
                	var regEx=new RegExp('Thematic Area.*$');
                	if(regEx.test(type_name)){
                	datadrop='';	
                	}
                	else{
                		datadrop='<P style="background-color:#E3E3F4;margin-top:14px;color: #0050A1;padding:10px;font-weight:600;font-size:18px;">Details:'+
                        '<label style="font-weight: normal;font-size: 16;color: #000000;">'+type_name+'</label></p>';
                	}
                	for(var i=0; i< datafrom.length; i++){
                		 if (datafrom[i].spatial_or_non === "Corporation Project"&& datafrom[i].file_gr === "Time Series Data"){
                			datadrop+='<li style="margin-left: 3.3em;">Project Id:&nbsp; '+datafrom[i].project_id+'</li>'
                  			+'<li style="margin-left: 1.8em;">Classification:&nbsp; '+datafrom[i].folder+'</li>'
                  			+'<li style="margin-left: 4.1em;">Data set:&nbsp; '+datafrom[i].file_gr+' from&nbsp; '+datafrom[i].station_no+' Stations</li>'
                  			+'<li class="long" style="margin-left: 0.4em;">Name of Stations:&nbsp; '+datafrom[i].station_name+'</li>'
                  			+'<li style="margin-left: 2.6em;">Stored Date:&nbsp; '+datafrom[i].date+'</li>'
                  			+'<li style="margin-left: 4.5em;">Region:&nbsp; '+datafrom[i].regnam+'</li>'
                  			+'<li style="margin-left: 5.1em;">Basin:&nbsp; '+datafrom[i].basename+'</li>'
                  			+'<li style="margin-left: 3.8em;">File Type:&nbsp; '+datafrom[i].file_ext+'</li>'
                  			+'<li style="margin-left: 8.2em; margin-top: 0.1em;"><a style="color: blue;" href="download?file_id=' 
                			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
                			+'&cat_name='+datafrom[i].folder+'">Download</a></li>';	}
                		 else if (datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}"
	||datafrom[i].file_ext === "{csv}" || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}" 
		||datafrom[i].file_ext === "{tif}" || datafrom[i].file_ext==="{tiff}"|| datafrom[i].file_ext==="{tff}" || datafrom[i].file_ext==="{zip}"
		||datafrom[i].file_ext === "{las}" || datafrom[i].file_ext==="{LAS}"|| datafrom[i].file_ext==="{laz}" || datafrom[i].file_ext==="{LAZ}"
                            	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}"){
               			datadrop+='<li style="margin-left: 3.3em;">Project Id:&nbsp; '+datafrom[i].project_id+'</li>'
                 			+'<li style="margin-left: 1.8em;">Classification:&nbsp; '+datafrom[i].folder+'</li>'
                 			+'<li style="margin-left: 4.1em;">Data set:&nbsp; '+datafrom[i].file_gr+'</li>'
                 			+'<li style="margin-left: 2.6em;">Stored Date:&nbsp; '+datafrom[i].date+'</li>'
                 			+'<li style="margin-left: 4.5em;">Region:&nbsp; '+datafrom[i].regnam+'</li>'
                 			+'<li style="margin-left: 5.1em;">Basin:&nbsp; '+datafrom[i].basename+'</li>'
                 			+'<li style="margin-left: 3.8em;">File Type:&nbsp; '+datafrom[i].file_ext+'</li>'
                 			+'<li style="margin-left: 8.2em; margin-top: 0.1em;"><a style="color: blue;" href="download?file_id=' 
               			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
               			+'&cat_name='+datafrom[i].folder+'">Download</a></li>';	
               		}
                	}
                		document.getElementById("searched_specific").innerHTML = '';
                		searchE_item.insertAdjacentHTML('beforeend',datadrop);		
                }
            //To ask Request
            /*Ask Request */
            var process_accessU2=document.getElementById("processf2");
            var xmlrequest= new XMLHttpRequest();
            document.getElementById("usertype2").onchange = function(evt){
            	var datatosend2 = evt.target.value;
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
                     var url1="Process?cen_id="+datatosend2;
                     xmlrequest.open("POST", url1,true);
                     xmlrequest.onload=function(){
                    var prodataU=JSON.parse(xmlrequest.responseText);
                    getprocessU2(prodataU);
                    	 }
                     xmlrequest.send();
                     }
            function getprocessU2(datap){
            var ret="";	
            for(var i=0; i<datap.length; i++){
            	ret+='<option value="' + datap[i].regid + '">' + datap[i].regnam + '</option>';
            }
            document.getElementById("processf2").options.length=1;
            process_accessU2.insertAdjacentHTML('beforeend',ret);
            	}
            /*Handle data from project name*/
            var proname_accessU2=document.getElementById("pro_name2");
            document.getElementById("processf2").onchange = function(evt){
            	var datatosend1 = evt.target.value;
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
                     var center_id1=document.getElementById("usertype2").value
              var url1="project_name?pro_id="+datatosend1+"&cen_id="+center_id1;
                     xmlrequest.open("POST", url1,true);
                     xmlrequest.onload=function(){
                    var prodataU=JSON.parse(xmlrequest.responseText);
                    getprojectnameU2(prodataU);
                    	 }
                     xmlrequest.send();
                     }
            function getprojectnameU2(datap){
            var ret="";	
            for(var i=0; i<datap.length; i++){
            	if(datap[i].regid!=0){
            		ret+='<option value="' + datap[i].regid + '">' + datap[i].regnam + '</option>';		
            	}
            		
            }
            document.getElementById("pro_name2").options.length=1;	
            proname_accessU2.insertAdjacentHTML('beforeend',ret);
            	}
          //design or supervision
            var desinsup_holder=document.getElementById("design_superv");
            document.getElementById("pro_name2").onchange = function(evt){
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
                     var process_key=document.getElementById("processf2").value
                     var center_key=document.getElementById("usertype2").value
              var url1="design_sup?proj_id="+proname_key;
                     xmlrequest.open("POST", url1,true);
                     xmlrequest.onload=function(){
                    var design_sudata=JSON.parse(xmlrequest.responseText);
                    design_superv(design_sudata);
                    	 }
                     xmlrequest.send();
                     } 
            function design_superv(datafrom){
            	var datadrop='';
            	for(var i=0; i< datafrom.length; i++){
            		if(datafrom[i].regid!=0){
            			if(datafrom[i].folder=='Supervision'){
                			
               			 datadrop+='<li id="'+datafrom[i].regid+'" ><input type="checkbox" id="sup_" name="c_class" value="'+datafrom[i].regid+'">'
               	           +' <label for="sup_"><a href="#" style="font-size:19px;">'+datafrom[i].regnam+'</a></label></li>';	
               		}
               		else{
               			 datadrop+='<li id="'+datafrom[i].regid+'" ><input type="checkbox" id="des_" name="c_class" value="'+datafrom[i].regid+'">'
               	          +' <label for="des_"><a href="#" style="font-size:19px;">'+datafrom[i].regnam+'</a></label></li>';
               		}	
            			
            		}
            		
     	
            	}
            	document.getElementById('design_superv').innerHTML = ''
            	desinsup_holder.insertAdjacentHTML('beforeend',datadrop);         	
            }
          //Data details
            var Detail_holder=document.getElementById("Data_details");
            var xmlhttpdetails=new XMLHttpRequest();
            document.getElementById("design_superv").onclick = function(evt){
            	var dessu_key = evt.target.innerText;
            	 //alert(dessu_key);
            	if (typeof xmlhttpdetails != "undefined"){
            		xmlhttpdetails= new XMLHttpRequest();
                     }
                     else if (window.ActiveXObject){
                    	 xmlhttpdetails= new ActiveXObject("Microsoft.XMLHTTP");
                     }
                     if (xmlhttpdetails==null){
                     alert("Browser does not support XMLHTTP Request")
                     return;
                     }
                     var project_key=document.getElementById("pro_name2").value
                     var process_key=document.getElementById("processf2").value
                     var center_key=document.getElementById("usertype2").value
              var urldes="detailsPro?de_su_key="+dessu_key+"&proj_id="+project_key+"&cen_id="+center_key+"&process_id="+process_key;
                     xmlhttpdetails.open("POST", urldes,true);
                     xmlhttpdetails.onload=function(){
                    var design_details=JSON.parse(xmlhttpdetails.responseText);
                    design_detail(design_details);
                    	 }
                     xmlhttpdetails.send();
                     } 
            function design_detail(datafrom){
            	var datadrop='';
            	for(var i=0; i< datafrom.length; i++){
            		datadrop+='<li>Center: '+datafrom[i].process+'</li>';	
            		datadrop+='<li>Process: '+datafrom[i].spatial_or_non+'</li>';	
            		datadrop+='<li>Project Name: '+datafrom[i].cata_gory+'</li>';	
        			datadrop+='<li>Discription: '+datafrom[i].datacl+'</li>';
        			datadrop+='<li style="margin-left: 4.7em;">: '+datafrom[i].folder+'</li>';
        			datadrop+='<li style="margin-left: 4.7em;">: '+datafrom[i].project_id+' File </li>';
        			datadrop+='<li>File Name: '+datafrom[i].name+'</li>';
        			datadrop+='<li style="margin-left: 2.7em;">--------------------------------------</li>';
            	}
            	datadrop+=' <li><a href="#" style="font-size: 20px; color: blue;">Send Request</a></li>';
            	document.getElementById('Data_details').innerHTML = ''
            	Detail_holder.insertAdjacentHTML('beforeend',datadrop);
            } 
            var hold_response=document.getElementById("hold_res");
            document.getElementById("Data_details").onclick=function(evnt){
            	var markedCheckbox = document.getElementsByName('c_class'); 
            	for (var checkbox=0; checkbox< markedCheckbox.length; checkbox++){  
            		//var value_check=markedCheckbox[checkbox]
            	    if (markedCheckbox[checkbox].checked) {
            		if (typeof xmlhttpdetails != "undefined"){
                		xmlhttpdetails= new XMLHttpRequest();
                         }
                         else if (window.ActiveXObject){
                        	 xmlhttpdetails= new ActiveXObject("Microsoft.XMLHTTP");
                         }
                         if (xmlhttpdetails==null){
                         alert("Browser does not support XMLHTTP Request")
                         return;
                         }
                         var UserId=document.getElementById("user_id").value
                         var Fname=document.getElementById("fname").value
                         var Lname=document.getElementById("lname").value
                         var project_key=document.getElementById("pro_name2").value
                         var process_key=document.getElementById("processf2").value
                         var center_key=document.getElementById("usertype2").value
       var urldes="Sendreqeust?de_su_key="+markedCheckbox[checkbox].value+"&proj_id="+project_key+"&cen_id="
           +center_key+"&pro_id="+process_key+"&userId="+UserId+"&fname="+Fname+"&lname="+Lname;
                         xmlhttpdetails.open("POST", urldes,true);
                         xmlhttpdetails.onload=function(){
                        var design_ask=JSON.parse(xmlhttpdetails.responseText);
                        response_rqu(design_ask);
                        	 } 
                         xmlhttpdetails.send();
            	    } 
            	    }
            	}
            	function response_rqu(datarespoded) {
            		var res='';
            		for(var i=0;i<datarespoded.length;i++){
            			res+='<p>'+datarespoded[i].folder+'</p>';
            		}
            		document.getElementById('hold_res').innerHTML = ''
                		hold_response.insertAdjacentHTML('beforeend',res);
				}
       //Non spatial data form access
       var non_table=document.getElementById("n_table");
       var hold_catah=document.getElementById("ncat_id");
       var noncata_request=new XMLHttpRequest();
         document.getElementById("selnc_id").onchange = function(evnt){
     	var nonc_id=evnt.target.value;
     	 if (typeof noncata_request != "undefined"){
     		noncata_request= new XMLHttpRequest();
              }
              else if (window.ActiveXObject){
            	  noncata_request = new ActiveXObject("Microsoft.XMLHTTP");
              }
              if (noncata_request == null){
              alert("Browser does not support XMLHTTP Request")
              return;
              }
     	var url1="nonsdata?data_id="+nonc_id;
     	noncata_request.open("POST", url1, true);
     	noncata_request.onload= function () {
     	var datanoncata = JSON.parse(noncata_request.responseText);	
     	nonScat(datanoncata);
     	accesscatheader(datanoncata);
     	};
     	noncata_request.send();
     };
     function accesscatheader(getheader){
    	 var datadrop='';
       	for(var i=0; i< getheader.length; i++){
       		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
       	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
       		}
       		hold_catah.options.length=1;
       		hold_catah.insertAdjacentHTML('beforeend',datadrop);	
       	}
     }
function nonScat(getdata){
	var datadrop='';
  	for(var i1=0; i1< getdata.length; i1++){
  		if( getdata[i1].spa_id!= null && getdata[i1].cata_gory!= null && getdata[i1].na_id==21){
  		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].spatial_or_non + '</div></td>'+
  		          '<td data-Eco="Cat"><div class="long">' + getdata[i1].cata_gory + '</div></td>'+
  		          '<td data-Eco="Clu"><div class="long">' + getdata[i1].folder + '</div></td>'+
  		          '<td data-Eco="Reg"><div class="long">' + getdata[i1].regnam + '</div></td>'+
  		          '<td data-Eco="Bas"><div class="long">' + getdata[i1].basename + '</div></td>'+
  		          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
  		          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
  		          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
  		          '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name+'&spa_id='+getdata[i1].spatial_or_non+'">Download</a></td></tr>';
	}}
  	var table1 = document.getElementById("n_table");
  	for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
  	  if(i>1) {
  	    row = table1.rows[i-1];
  	    row.parentNode.removeChild(row);
  	  }
  	}
  	non_table.insertAdjacentHTML('beforeend',datadrop);	    
}    
//search category
var non_table=document.getElementById("n_table");
var hold_typeh=document.getElementById("type_id");
var nontype_request=new XMLHttpRequest();
document.getElementById("ncat_id").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof noncata_request != "undefined"){
		 nontype_request= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   nontype_request = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (nontype_request == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
	var url1="select_ncat?cat_id="+nonc_id;
	nontype_request.open("POST", url1, true);
	nontype_request.onload= function () {
	var datanontype = JSON.parse(nontype_request.responseText);	
	nonStype(datanontype);
	accesstypeheader(datanontype);
	};
	nontype_request.send();
};
function accesstypeheader(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].folderid!=0){
	datadrop+='<option class="option_css" value="' + getheader[i].folderid + '">' + getheader[i].folder + '</option>';	
		}
		hold_typeh.options.length=1;
		hold_typeh.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function nonStype(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].folderid!= null && getdata[i1].cata_gory!= null && getdata[i1].na_id==21){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].spatial_or_non + '</div></td>'+
	          '<td data-Eco="Cat"><div class="long">' + getdata[i1].cata_gory + '</div></td>'+
	          '<td data-Eco="Clu"><div class="long">' + getdata[i1].folder + '</div></td>'+
	          '<td data-Eco="Reg"><div class="long">' + getdata[i1].regnam + '</div></td>'+
	          '<td data-Eco="Bas"><div class="long">' + getdata[i1].basename + '</div></td>'+
	          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
	          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
	          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
	          '<td data-Eco="Dow"> <a href="downloadfile?file_id=' + getdata[i1].name + '&spa_id='+ getdata[i1].spatial_or_non +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("n_table");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
non_table.insertAdjacentHTML('beforeend',datadrop);	    
}
//access by type or cluster
var non_table=document.getElementById("n_table");
var nons_request_bytype=new XMLHttpRequest();
document.getElementById("type_id").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof nons_request_bytype != "undefined"){
		 nons_request_bytype= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   nons_request_bytype = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (nons_request_bytype == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
	var url1="select_ntype?type_id="+nonc_id;
	nons_request_bytype.open("POST", url1, true);
	nons_request_bytype.onload= function () {
	var datanontype = JSON.parse(nons_request_bytype.responseText);	
	nonSbytype(datanontype);
	};
	nons_request_bytype.send();
};
function nonSbytype(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==21){
datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].spatial_or_non + '</div></td>'+
	          '<td data-Eco="Cat"><div class="long">' + getdata[i1].cata_gory + '</div></td>'+
	          '<td data-Eco="Clu"><div class="long">' + getdata[i1].folder + '</div></td>'+
	          '<td data-Eco="Reg"><div class="long">' + getdata[i1].regnam + '</div></td>'+
	          '<td data-Eco="Bas"><div class="long">' + getdata[i1].basename + '</div></td>'+
	          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
	          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
	          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
	          '<td data-Eco="Dow"> <a href="downloadfile?file_id=' + getdata[i1].name + '&spa_id='+ getdata[i1].spatial_or_non +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("n_table");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
non_table.insertAdjacentHTML('beforeend',datadrop);	    
}    
//access by region 
var non_table=document.getElementById("n_table");
var hold_basinh=document.getElementById("basn_id");
var regionn_request=new XMLHttpRequest();
document.getElementById("reg_nam").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof regionn_request != "undefined"){
		 regionn_request= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   regionn_request = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (regionn_request == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
	var url1="select_nregion?region_id="+nonc_id;
	regionn_request.open("POST", url1, true);
	regionn_request.onload= function () {
	var datanontype = JSON.parse(regionn_request.responseText);	
	nonSregion(datanontype);
	accesstregionheader(datanontype);
	};
	regionn_request.send();
};
function accesstregionheader(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].baseid!= null && getheader[i].spatial_or_non==null){
	datadrop+='<option class="option_css" value="' + getheader[i].baseid + '">' + getheader[i].basename + '</option>';	
		}
		hold_basinh.options.length=1;
		hold_basinh.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function nonSregion(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].regid!= null && getdata[i1].cata_gory!= null && getdata[i1].na_id==21){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].spatial_or_non + '</div></td>'+
	          '<td data-Eco="Cat"><div class="long">' + getdata[i1].cata_gory + '</div></td>'+
	          '<td data-Eco="Clu"><div class="long">' + getdata[i1].folder + '</div></td>'+
	          '<td data-Eco="Reg"><div class="long">' + getdata[i1].regnam + '</div></td>'+
	          '<td data-Eco="Bas"><div class="long">' + getdata[i1].basename + '</div></td>'+
	          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
	          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
	          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
	          '<td data-Eco="Dow"> <a href="downloadfile?file_id=' + getdata[i1].name + '&spa_id='+ getdata[i1].spatial_or_non +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("n_table");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
non_table.insertAdjacentHTML('beforeend',datadrop);	    
}
//access by basin 
var non_table=document.getElementById("n_table");
var nons_request_bybasin=new XMLHttpRequest();
document.getElementById("basn_id").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof nons_request_bybasin != "undefined"){
		 nons_request_bybasin= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   nons_request_bybasin = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (nons_request_bybasin == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
	var url1="select_nbasin?basin_id="+nonc_id;
	nons_request_bybasin.open("POST", url1, true);
	nons_request_bybasin.onload= function () {
	var datanonbasin = JSON.parse(nons_request_bybasin.responseText);	
	nonSbybasin(datanonbasin);
	};
	nons_request_bybasin.send();
};
function nonSbybasin(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==21){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].spatial_or_non + '</div></td>'+
	          '<td data-Eco="Cat"><div class="long">' + getdata[i1].cata_gory + '</div></td>'+
	          '<td data-Eco="Clu"><div class="long">' + getdata[i1].folder + '</div></td>'+
	          '<td data-Eco="Reg"><div class="long">' + getdata[i1].regnam + '</div></td>'+
	          '<td data-Eco="Bas"><div class="long">' + getdata[i1].basename + '</div></td>'+
	          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
	          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
	          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
	          '<td data-Eco="Dow"> <a href="downloadfile?file_id=' + getdata[i1].name + '&spa_id='+ getdata[i1].spatial_or_non +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("n_table");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
non_table.insertAdjacentHTML('beforeend',datadrop);	    
}
//access by date
var date_table=document.getElementById("n_table");
var nondate_request_byname=new XMLHttpRequest();
document.getElementById("rs-range-line-non").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof nondate_request_byname != "undefined"){
		 nondate_request_byname= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   nondate_request_byname = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (nondate_request_byname == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
	var url1="select_nonSdate?nonSdate_id="+nonc_id;
	nondate_request_byname.open("POST", url1, true);
	nondate_request_byname.onload= function () {
	var datanonbasin = JSON.parse(nondate_request_byname.responseText);	
	nondatebyname(datanonbasin);
	};
	nondate_request_byname.send();
};
function nondatebyname(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==21){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].spatial_or_non + '</div></td>'+
	          '<td data-Eco="Cat"><div class="long">' + getdata[i1].cata_gory + '</div></td>'+
	          '<td data-Eco="Clu"><div class="long">' + getdata[i1].folder + '</div></td>'+
	          '<td data-Eco="Reg"><div class="long">' + getdata[i1].regnam + '</div></td>'+
	          '<td data-Eco="Bas"><div class="long">' + getdata[i1].basename + '</div></td>'+
	          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
	          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
	          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
	          '<td data-Eco="Dow"> <a href="downloadfile?file_id=' + getdata[i1].name + '&spa_id='+ getdata[i1].spatial_or_non +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("n_table");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
date_table.insertAdjacentHTML('beforeend',datadrop);	    
}
//access by Non spatial by Name 
var non_table=document.getElementById("n_table");
var nons_request_byname=new XMLHttpRequest();
document.getElementById("nf1_name").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof nons_request_byname != "undefined"){
		 nons_request_byname= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   nons_request_byname = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (nons_request_byname == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
	var url1="select_nname?name_id="+nonc_id;
	nons_request_byname.open("POST", url1, true);
	nons_request_byname.onload= function () {
	var datanonbasin = JSON.parse(nons_request_byname.responseText);	
	nonSbyname(datanonbasin);
	};
	nons_request_byname.send();
};
function nonSbyname(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==21){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].spatial_or_non + '</div></td>'+
	          '<td data-Eco="Cat"><div class="long">' + getdata[i1].cata_gory + '</div></td>'+
	          '<td data-Eco="Clu"><div class="long">' + getdata[i1].folder + '</div></td>'+
	          '<td data-Eco="Reg"><div class="long">' + getdata[i1].regnam + '</div></td>'+
	          '<td data-Eco="Bas"><div class="long">' + getdata[i1].basename + '</div></td>'+
	          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
	          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
	          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
	          '<td data-Eco="Dow"> <a href="downloadfile?file_id=' + getdata[i1].name + '&spa_id='+ getdata[i1].spatial_or_non +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("n_table");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
non_table.insertAdjacentHTML('beforeend',datadrop);	    
}