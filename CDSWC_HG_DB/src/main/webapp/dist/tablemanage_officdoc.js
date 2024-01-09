//Access project document table Surveying and Geo_spatial 
var pro_tableacces=document.getElementById("Tpro_id");
var protableacess_prsg=document.getElementById("prosepr_idsg");
var protable_request=new XMLHttpRequest();
document.getElementById("process_id").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_request != "undefined"){
		 protable_request= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_request = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_request == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var user1=document.getElementById("uxsg_name").value;
       var url1="select_byprocess?pro_id="+nonc_id+"&userId="+user1;
	protable_request.open("POST",url1, true);
	protable_request.onload= function () {
	var datanontypesg = JSON.parse(protable_request.responseText);	
	protableprsg(datanontypesg);
	Acccess_prsgheader(datanontypesg);
	};
	protable_request.send();
};
function Acccess_prsgheader(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= 0 && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_prsg.options.length=1;
		protableacess_prsg.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protableprsg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==19){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
	          '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
		      '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
	          '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
	          '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
	          '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
	          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
	          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
	          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
	          '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
	          '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
	          '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_id");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableacces.insertAdjacentHTML('beforeend',datadrop);
}
//Access project document table Surveying and Geo_spatial 
var pro_tableacces=document.getElementById("Tpro_id");
var protableacess_basinh=document.getElementById("prosel_id");
var protable_request=new XMLHttpRequest();
document.getElementById("prosepr_idsg").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_request != "undefined"){
		 protable_request= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_request = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_request == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var user1=document.getElementById("uxsg_name").value;
       var url1="select_byprojectname?pro_id="+nonc_id+"&userId="+user1;
	protable_request.open("POST",url1, true);
	protable_request.onload= function () {
	var datanontype = JSON.parse(protable_request.responseText);	
	protable(datanontype);
	Acccess_protableheader(datanontype);
	};
	protable_request.send();
};
function Acccess_protableheader(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!=0 && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_basinh.options.length=1;
		protableacess_basinh.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protable(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==19){
		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
		          '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
			      '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
		          '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
		          '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
		          '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
		          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
		          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
		          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
		          '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
		          '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
		          '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
	}}
var table1 = document.getElementById("Tpro_id");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableacces.insertAdjacentHTML('beforeend',datadrop);
}
//project document type Surveying and Geo_spatial
var prodocnon_table=document.getElementById("Tpro_id");
var prohold_catah=document.getElementById("procat_id");
var prodocnoncata_request=new XMLHttpRequest();
  document.getElementById("prosel_id").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnoncata_request != "undefined"){
		 prodocnoncata_request= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnoncata_request = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnoncata_request == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var user1=document.getElementById("uxsg_name").value;
	var url1="select_prodoctype?type_id="+nonc_id+"&UserIdp="+user1;
	prodocnoncata_request.open("POST", url1, true);
	prodocnoncata_request.onload= function () {
	var datanoncata = JSON.parse(prodocnoncata_request.responseText);	
	prodocCatScat(datanoncata);
	projdoccatheader(datanoncata);
	};
	prodocnoncata_request.send();
};
function projdoccatheader(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!=0 && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		prohold_catah.options.length=1;
		prohold_catah.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function prodocCatScat(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==19){
		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
		          '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
			      '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
		          '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
		          '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
		          '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
		          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
		          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
		          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
		          '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
		          '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
		          '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
	}}
var table1 = document.getElementById("Tpro_id");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
prodocnon_table.insertAdjacentHTML('beforeend',datadrop);	    
}   
//project by cluster Surveying and Geo_spatial
var Clupronon_table=document.getElementById("Tpro_id");
var cluprodoc_request=new XMLHttpRequest();
  document.getElementById("procat_id").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof cluprodoc_request != "undefined"){
		 cluprodoc_request= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   cluprodoc_request = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (cluprodoc_request == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var user1=document.getElementById("uxsg_name").value;
	var url1="select_cl?clu_id="+nonc_id+"&userIdcl="+user1;
	cluprodoc_request.open("POST", url1, true);
	cluprodoc_request.onload= function () {
	var datanoncata = JSON.parse(cluprodoc_request.responseText);	
	prodocclus(datanoncata);
	};
	cluprodoc_request.send();
};
function prodocclus(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==19){
		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
		          '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
			      '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
		          '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
		          '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
		          '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
		          '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
		          '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
		          '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
		          '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
		          '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
		          '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
	}}
var table1 = document.getElementById("Tpro_id");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
Clupronon_table.insertAdjacentHTML('beforeend',datadrop);	    
}
//project file access by date 
var prodate_table=document.getElementById("Tpro_id");
var pro_request_bydate=new XMLHttpRequest();
document.getElementById("rs-range-line-sgc").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bydate != "undefined"){
		 pro_request_bydate= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bydate = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bydate == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var user1=document.getElementById("uxsg_name").value;
	var url1="select_datepro?date_id="+nonc_id+"&userIddate="+user1;
	pro_request_bydate.open("POST", url1, true);
	pro_request_bydate.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bydate.responseText);	
	probydate(datanonbasin);
	};
	pro_request_bydate.send();
};
function probydate(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==19){
		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
        '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
	      '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
        '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
        '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
        '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
        '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
        '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
        '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
        '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
        '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
        '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_id");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
prodate_table.insertAdjacentHTML('beforeend',datadrop);	    
}
//project file access by name 
var pro_table=document.getElementById("Tpro_id");
var pro_request_byname=new XMLHttpRequest();
document.getElementById("pf1_name").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_byname != "undefined"){
		 pro_request_byname= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_byname = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_byname == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var user1=document.getElementById("uxsg_name").value;  
	var url1="select_prname?pfile_name="+nonc_id+"&userIdname="+user1;
	pro_request_byname.open("POST", url1, true);
	pro_request_byname.onload= function () {
	var datanonbasin = JSON.parse(pro_request_byname.responseText);	
	probyname(datanonbasin);
	};
	pro_request_byname.send();
};
function probyname(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==19){
		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
        '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
	      '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
        '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
        '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
        '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
        '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
        '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
        '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
        '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
        '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
        '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_id");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_table.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for GGUDSWS 
var pro_tableaccesgg=document.getElementById("Tpro_idgg");
var protableacess_prgg=document.getElementById("prosepr_idgg");
var protable_requestgg=new XMLHttpRequest();
document.getElementById("process_idgg").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_requestgg != "undefined"){
		 protable_requestgg= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestgg = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestgg == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var userId=document.getElementById("uxgg_name").value
       var url1="select_byprocess?pro_id="+nonc_id+"&userId="+userId;
	protable_requestgg.open("POST",url1, true);
	protable_requestgg.onload= function () {
	var datanontype = JSON.parse(protable_requestgg.responseText);	
	protableprgg(datanontype);
	Acccess_protableprgg(datanontype);
	};
	protable_requestgg.send();
};
function Acccess_protableprgg(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_prgg.options.length=1;
		protableacess_prgg.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protableprgg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==17){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idgg");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccesgg.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for GGUDSWS 
var pro_tableaccesgg=document.getElementById("Tpro_idgg");
var protableacess_basinhgg=document.getElementById("prosel_idgg");
var protable_requestgg=new XMLHttpRequest();
document.getElementById("prosepr_idgg").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_requestgg != "undefined"){
		 protable_requestgg= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestgg = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestgg == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var userId=document.getElementById("uxgg_name").value
       var url1="select_byprojectname?pro_id="+nonc_id+"&userId="+userId;
	protable_requestgg.open("POST",url1, true);
	protable_requestgg.onload= function () {
	var datanontype = JSON.parse(protable_requestgg.responseText);	
	protablegg(datanontype);
	Acccess_protableheadergg(datanontype);
	};
	protable_requestgg.send();
};
function Acccess_protableheadergg(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_basinhgg.options.length=1;
		protableacess_basinhgg.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protablegg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==17){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idgg");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccesgg.insertAdjacentHTML('beforeend',datadrop);	    
}
//project document type of GGUDSWS
var prodocnon_tablegg=document.getElementById("Tpro_idgg");
var prohold_catahgg=document.getElementById("procat_idgg");
var prodocnoncata_requestgg=new XMLHttpRequest();
  document.getElementById("prosel_idgg").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnoncata_request != "undefined"){
		 prodocnoncata_requestgg= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnoncata_requestgg = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnoncata_requestgg == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var userId=document.getElementById("uxgg_name").value;
	var url1="select_prodoctype?type_id="+nonc_id+"&UserIdp="+userId;
	prodocnoncata_requestgg.open("POST", url1, true);
	prodocnoncata_requestgg.onload= function () {
	var datanoncata = JSON.parse(prodocnoncata_requestgg.responseText);	
	prodocCatScatgg(datanoncata);
	projdoccatheadergg(datanoncata);
	};
	prodocnoncata_requestgg.send();
};
function projdoccatheadergg(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		prohold_catahgg.options.length=1;
		prohold_catahgg.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function prodocCatScatgg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].spa_id!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==17){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idgg");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
prodocnon_tablegg.insertAdjacentHTML('beforeend',datadrop);	    
}   
//project category GGUDSWS
var proclunon_tablegg=document.getElementById("Tpro_idgg");
var prohold_catheadergg=document.getElementById("pro_clustergg");
var prodocnonclu_requestgg=new XMLHttpRequest();
  document.getElementById("procat_idgg").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnonclu_requestgg != "undefined"){
		 prodocnonclu_requestgg= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnonclu_requestgg = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnonclu_requestgg == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var userId=document.getElementById("uxgg_name").value;
	var url1="select_procat?cat_id="+nonc_id+"&userIdc="+userId;
	prodocnonclu_requestgg.open("POST", url1, true);
	prodocnonclu_requestgg.onload= function () {
	var datanoncata = JSON.parse(prodocnonclu_requestgg.responseText);	
	catprodocCatScatgg(datanoncata);
	catprojdoccatheadergg(datanoncata);
	};
	prodocnonclu_requestgg.send();
};
function catprojdoccatheadergg(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		prohold_catheadergg.options.length=1;
		prohold_catheadergg.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function catprodocCatScatgg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].spa_id!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==17){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idgg");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
proclunon_tablegg.insertAdjacentHTML('beforeend',datadrop);	    
} 
//project by cluster GGUDSWS
var Clupronon_tablegg=document.getElementById("Tpro_idgg");
var cluprodoc_requestgg=new XMLHttpRequest();
  document.getElementById("pro_clustergg").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof cluprodoc_requestgg != "undefined"){
		 cluprodoc_requestgg= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   cluprodoc_requestgg = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (cluprodoc_requestgg == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var userId=document.getElementById("uxgg_name").value;
	var url1="select_cl?clu_id="+nonc_id+"&userIdcl="+userId;
	cluprodoc_requestgg.open("POST", url1, true);
	cluprodoc_requestgg.onload= function () {
	var datanoncata = JSON.parse(cluprodoc_requestgg.responseText);	
	prodocclusgg(datanoncata);
	};
	cluprodoc_requestgg.send();
};
function prodocclusgg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].spa_id!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==17){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idgg");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
Clupronon_tablegg.insertAdjacentHTML('beforeend',datadrop);	    
}
//project file access by name GGUDSWS
var pro_tabledategg=document.getElementById("Tpro_idgg");
var pro_request_bydategg=new XMLHttpRequest();
document.getElementById("rs-range-line-ggu").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bydategg != "undefined"){
		 pro_request_bydategg= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bydategg = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bydategg == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var userId=document.getElementById("uxgg_name").value;
	var url1="select_datepro?date_id="+nonc_id+"&userIddate="+userId;
	pro_request_bydategg.open("POST", url1, true);
	pro_request_bydategg.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bydategg.responseText);	
	probydategg(datanonbasin);
	};
	pro_request_bydategg.send();
};
function probydategg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==17){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idgg");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tabledategg.insertAdjacentHTML('beforeend',datadrop);	    
}

//project file access by name GGUDSWS
var pro_tablenamegg=document.getElementById("Tpro_idgg");
var pro_request_bynamegg=new XMLHttpRequest();
document.getElementById("pf1_namegg").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bynamegg != "undefined"){
		 pro_request_bynamegg= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bynamegg = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bynamegg == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var userId=document.getElementById("uxgg_name").value;
	var url1="select_prname?pfile_name="+nonc_id+"&userIdname="+userId;
	pro_request_bynamegg.open("POST", url1, true);
	pro_request_bynamegg.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bynamegg.responseText);	
	probynamegg(datanonbasin);
	};
	pro_request_bynamegg.send();
};
function probynamegg(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==17){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idgg");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tablenamegg.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Water and Energy 
var pro_tableacceswe=document.getElementById("Tpro_idwe");
var protableacess_prohwe=document.getElementById("prosepr_idwe");
var userprocess;
var protable_requestwe=new XMLHttpRequest();
document.getElementById("process_idwe").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_requestwe != "undefined"){
		 protable_requestwe= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestwe = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestwe == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       } 
       userprocess=document.getElementById("ux_name").value;
       var url1="select_byprocess?pro_id="+nonc_id+"&userId="+userprocess;
	protable_requestwe.open("POST",url1, true);
	protable_requestwe.onload= function () {
	var datanontype = JSON.parse(protable_requestwe.responseText);	
	protableprwe(datanontype);
	Acccess_prnameheaderwe(datanontype);
	};
	protable_requestwe.send();
};
function Acccess_prnameheaderwe(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!=0 && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_prohwe.options.length=1;
		protableacess_prohwe.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protableprwe(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!=null && getdata[i1].branch_name!= null && getdata[i1].na_id==15){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idwe");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableacceswe.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Water and Energy 
var pro_tableacceswe=document.getElementById("Tpro_idwe");
var protableacess_basinhwe=document.getElementById("prosel_idwe");
var userprocess;
var protable_requestwe=new XMLHttpRequest();
document.getElementById("prosepr_idwe").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_requestwe != "undefined"){
		 protable_requestwe= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestwe = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestwe == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       } 
       userprocess=document.getElementById("ux_name").value;
       var url1="select_byprojectname?pro_id="+nonc_id+"&userId="+userprocess;
	protable_requestwe.open("POST",url1, true);
	protable_requestwe.onload= function () {
	var datanontyped = JSON.parse(protable_requestwe.responseText);	
	protablewe(datanontyped);
	Acccess_protableheaderwe(datanontyped);
	};
	protable_requestwe.send();
};
function Acccess_protableheaderwe(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= 0 && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_basinhwe.options.length=1;
		protableacess_basinhwe.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protablewe(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==15){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idwe");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableacceswe.insertAdjacentHTML('beforeend',datadrop);	    
}
//project document type of Water and Energy
var prodocnon_tablewe=document.getElementById("Tpro_idwe");
var prohold_catahwe=document.getElementById("procat_idwe");
var prodocnoncata_requestwe=new XMLHttpRequest();
  document.getElementById("prosel_idwe").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnoncata_requestwe != "undefined"){
		 prodocnoncata_requestwe= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnoncata_requestwe = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnoncata_requestwe == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       userprocess=document.getElementById("ux_name").value;
	var url1="select_prodoctype?type_id="+nonc_id+"&UserIdp="+userprocess;
	prodocnoncata_requestwe.open("POST", url1, true);
	prodocnoncata_requestwe.onload= function () {
	var datanoncata = JSON.parse(prodocnoncata_requestwe.responseText);	
	prodocCatScatwe(datanoncata);
	projdoccatheaderwe(datanoncata);
	};
	prodocnoncata_requestwe.send();
};
function projdoccatheaderwe(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= 0 && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		prohold_catahwe.options.length=1;
		prohold_catahwe.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function prodocCatScatwe(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==15){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idwe");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
prodocnon_tablewe.insertAdjacentHTML('beforeend',datadrop);	    
}   
//project catagory Water and Energy
var proclunon_tablewe=document.getElementById("Tpro_idwe");
var prodocnonclu_requestwe=new XMLHttpRequest();
  document.getElementById("procat_idwe").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnonclu_requestwe != "undefined"){
		 prodocnonclu_requestwe= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnonclu_requestwe = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnonclu_requestwe == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       userprocess=document.getElementById("ux_name").value;
	var url1="select_cl?clu_id="+nonc_id+"&userIdcl="+userprocess;
	prodocnonclu_requestwe.open("POST", url1, true);
	prodocnonclu_requestwe.onload= function () {
	var datanoncata = JSON.parse(prodocnonclu_requestwe.responseText);	
	catprodocCatScatwe(datanoncata);
	};
	prodocnonclu_requestwe.send();
};
function catprodocCatScatwe(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!=null && getdata[i1].branch_name!= null && getdata[i1].na_id==15){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idwe");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
proclunon_tablewe.insertAdjacentHTML('beforeend',datadrop);	    
} 
//project file access by name Water and Energy
var pro_tabledatewe=document.getElementById("Tpro_idwe");
var pro_request_bydatewe=new XMLHttpRequest();
document.getElementById("rs-range-line-we").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bydatewe != "undefined"){
		 pro_request_bydatewe= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bydatewe = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bydatewe == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       userprocess=document.getElementById("ux_name").value;
	var url1="select_datepro?date_id="+nonc_id+"&userIddate="+userprocess;
	pro_request_bydatewe.open("POST", url1, true);
	pro_request_bydatewe.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bydatewe.responseText);	
	probydatewe(datanonbasin);
	};
	pro_request_bydatewe.send();
};
function probydatewe(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==15){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idwe");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tabledatewe.insertAdjacentHTML('beforeend',datadrop);	    
}
//project file access by name Water and Energy
var pro_tablenamewe=document.getElementById("Tpro_idwe");
var pro_request_bynamewe=new XMLHttpRequest();
document.getElementById("pf1_namewe").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bynamewe != "undefined"){
		 pro_request_bynamewe= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bynamewe = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bynamewe == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       userprocess=document.getElementById("ux_name").value;
	var url1="select_prname?pfile_name="+nonc_id+"&userIdname="+userprocess;
	pro_request_bynamewe.open("POST", url1, true);
	pro_request_bynamewe.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bynamewe.responseText);	
	probynamewe(datanonbasin);
	};
	pro_request_bynamewe.send();
};
function probynamewe(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==15){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idwe");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tablenamewe.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Transport and Design 
var pro_tableaccestd=document.getElementById("Tpro_idtd");
var protableacess_tdtd=document.getElementById("prosepr_idtd");
var protable_requesttd=new XMLHttpRequest();
document.getElementById("process_idtd").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_requesttd != "undefined"){
		 protable_requesttd= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requesttd = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requesttd == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var tduser=document.getElementById("uxtd_name").value;
       var url1="select_byprocess?pro_id="+nonc_id+"&userId="+tduser;
	protable_requesttd.open("POST",url1, true);
	protable_requesttd.onload= function () {
	var datanontype = JSON.parse(protable_requesttd.responseText);	
	protableprtd(datanontype);
	Acccess_protableprtd(datanontype);
	};
	protable_requesttd.send();
};
function Acccess_protableprtd(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_tdtd.options.length=1;
		protableacess_tdtd.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protableprtd(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==16){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idtd");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccestd.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Transport and Design 
var pro_tableaccestd=document.getElementById("Tpro_idtd");
var protableacess_basinhtd=document.getElementById("prosel_idtd");
var protable_requesttd=new XMLHttpRequest();
document.getElementById("prosepr_idtd").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof protable_requesttd != "undefined"){
		 protable_requesttd= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requesttd = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requesttd == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var tduser=document.getElementById("uxtd_name").value;
       var url1="select_byprojectname?pro_id="+nonc_id+"&userId="+tduser;
	protable_requesttd.open("POST",url1, true);
	protable_requesttd.onload= function () {
	var datanontype = JSON.parse(protable_requesttd.responseText);	
	protabletd(datanontype);
	Acccess_protableheadertd(datanontype);
	};
	protable_requesttd.send();
};
function Acccess_protableheadertd(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_basinhtd.options.length=1;
		protableacess_basinhtd.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protabletd(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==16){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idtd");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccestd.insertAdjacentHTML('beforeend',datadrop);	    
}
//project document type of Transport and Design
var prodocnon_tabletd=document.getElementById("Tpro_idtd");
var prohold_catahtd=document.getElementById("procat_idtd");
var prodocnoncata_requesttd=new XMLHttpRequest();
  document.getElementById("prosel_idtd").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnoncata_requesttd != "undefined"){
		 prodocnoncata_requesttd= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnoncata_requesttd = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnoncata_requesttd == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var tduser=document.getElementById("uxtd_name").value;
	var url1="select_prodoctype?type_id="+nonc_id+"&UserIdp="+tduser;
	prodocnoncata_requesttd.open("POST", url1, true);
	prodocnoncata_requesttd.onload= function () {
	var datanoncata = JSON.parse(prodocnoncata_requesttd.responseText);	
	prodocCatScattd(datanoncata);
	projdoccatheadertd(datanoncata);
	};
	prodocnoncata_requesttd.send();
};
function projdoccatheadertd(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		prohold_catahtd.options.length=1;
		prohold_catahtd.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function prodocCatScattd(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==16){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idtd");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
prodocnon_tabletd.insertAdjacentHTML('beforeend',datadrop);	    
}   
//project catagory Transport and Design
var proclunon_tabletd=document.getElementById("Tpro_idtd");
var prodocnonclu_requesttd=new XMLHttpRequest();
  document.getElementById("procat_idtd").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnonclu_requesttd != "undefined"){
		 prodocnonclu_requesttd= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnonclu_requesttd = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnonclu_requesttd == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var tduser=document.getElementById("uxtd_name").value;
	var url1="select_procat?clu_id="+nonc_id+"&userIdcl="+tduser;
	prodocnonclu_requesttd.open("POST", url1, true);
	prodocnonclu_requesttd.onload= function () {
	var datanoncata = JSON.parse(prodocnonclu_requesttd.responseText);	
	catprodocCatScattd(datanoncata);
	};
	prodocnonclu_requesttd.send();
};
function catprodocCatScattd(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==16){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idtd");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
proclunon_tabletd.insertAdjacentHTML('beforeend',datadrop);	    
} 
//project file access by date 
var pro_tabledatetd=document.getElementById("Tpro_idtd");
var pro_request_bydatetd=new XMLHttpRequest();
document.getElementById("rs-range-line-td").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bydatetd != "undefined"){
		 pro_request_bydatetd= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bydatetd = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bydatetd == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var tduser=document.getElementById("uxtd_name").value;
	var url1="select_datepro?date_id="+nonc_id+"&userIddate="+tduser;
	pro_request_bydatetd.open("POST", url1, true);
	pro_request_bydatetd.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bydatetd.responseText);	
	probydatetd(datanonbasin);
	};
	pro_request_bydatetd.send();
};
function probydatetd(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==16){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idtd");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tabledatetd.insertAdjacentHTML('beforeend',datadrop);	    
}
//project file access by name 
var pro_tablenametd=document.getElementById("Tpro_idtd");
var pro_request_bynametd=new XMLHttpRequest();
document.getElementById("pf1_nametd").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bynametd != "undefined"){
		 pro_request_bynametd= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bynametd = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bynametd == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var tduser=document.getElementById("uxtd_name").value;
	var url1="select_prname?pfile_name="+nonc_id+"&userIdname="+tduser;
	pro_request_bynametd.open("POST", url1, true);
	pro_request_bynametd.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bynametd.responseText);	
	probynametd(datanonbasin);
	};
	pro_request_bynametd.send();
};
function probynametd(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==16){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idtd");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tablenametd.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Building and Urban 
var pro_tableaccesbu=document.getElementById("Tpro_idbu");
var protableacess_prbu=document.getElementById("prosepr_idbu");
var protable_requestbu=new XMLHttpRequest();
document.getElementById("process_idbu").onchange = function(evnt){
	var process_id=evnt.target.value;
	 if (typeof protable_requestbu != "undefined"){
		 protable_requestbu= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestbu = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestbu == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Buser=document.getElementById("uxbu_name").value;
       var url1="select_byprocess?pro_id="+process_id+"&userId="+Buser;
	protable_requestbu.open("POST",url1, true);
	protable_requestbu.onload= function () {
	var datanontype = JSON.parse(protable_requestbu.responseText);	
	protableprbu(datanontype);
	Acccess_proprbu(datanontype);
	};
	protable_requestbu.send();
};
function Acccess_proprbu(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_prbu.options.length=1;
		protableacess_prbu.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protableprbu(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==20){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idbu");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccesbu.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Building and Urban 
var pro_tableaccesbu=document.getElementById("Tpro_idbu");
var protableacess_basinhbu=document.getElementById("prosel_idbu");
var protable_requestbu=new XMLHttpRequest();
document.getElementById("prosepr_idbu").onchange = function(evnt){
	var process_id=evnt.target.value;
	 if (typeof protable_requestbu != "undefined"){
		 protable_requestbu= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestbu = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestbu == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Buser=document.getElementById("uxbu_name").value;
       var url1="select_byprojectname?pro_id="+process_id+"&userId="+Buser;
	protable_requestbu.open("POST",url1, true);
	protable_requestbu.onload= function () {
	var datanontype = JSON.parse(protable_requestbu.responseText);	
	protablebu(datanontype);
	Acccess_protableheaderbu(datanontype);
	};
	protable_requestbu.send();
};
function Acccess_protableheaderbu(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_basinhbu.options.length=1;
		protableacess_basinhbu.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protablebu(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==20){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idbu");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccesbu.insertAdjacentHTML('beforeend',datadrop);	    
}
//project document type of Building and Urban
var prodocnon_tablebu=document.getElementById("Tpro_idbu");
var prohold_catahbu=document.getElementById("procat_idbu");
var prodocnoncata_requestbu=new XMLHttpRequest();
  document.getElementById("prosel_idbu").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnoncata_requestbu != "undefined"){
		 prodocnoncata_requestbu= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnoncata_requestbu = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnoncata_requestbu == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Buser=document.getElementById("uxbu_name").value;
	var url1="select_prodoctype?type_id="+nonc_id+"&UserIdp="+Buser;
	prodocnoncata_requestbu.open("POST", url1, true);
	prodocnoncata_requestbu.onload= function () {
	var datanoncata = JSON.parse(prodocnoncata_requestbu.responseText);	
	prodocCatScatbu(datanoncata);
	projdoccatheaderbu(datanoncata);
	};
	prodocnoncata_requestbu.send();
};
function projdoccatheaderbu(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		prohold_catahbu.options.length=1;
		prohold_catahbu.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function prodocCatScatbu(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==20){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idbu");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
prodocnon_tablebu.insertAdjacentHTML('beforeend',datadrop);	    
}   
//project catagory Building and Urban
var proclunon_tablebu=document.getElementById("Tpro_idbu");
var prodocnonclu_requestbu=new XMLHttpRequest();
  document.getElementById("procat_idbu").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnonclu_requestbu != "undefined"){
		 prodocnonclu_requestbu= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnonclu_requestbu = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnonclu_requestbu == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Buser=document.getElementById("uxbu_name").value;
	var url1="select_cl?clu_id="+nonc_id+"&userIdcl="+Buser;
	prodocnonclu_requestbu.open("POST", url1, true);
	prodocnonclu_requestbu.onload= function () {
	var datanoncata = JSON.parse(prodocnonclu_requestbu.responseText);	
	catprodocCatScatbu(datanoncata);
	catprojdoccatheaderbu(datanoncata);
	};
	prodocnonclu_requestbu.send();
};
function catprodocCatScatbu(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==20){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idbu");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
proclunon_tablebu.insertAdjacentHTML('beforeend',datadrop);	    
} 
//project file access by name for Building and Urban
var pro_tabledatebu=document.getElementById("Tpro_idbu");
var pro_request_bydatebu=new XMLHttpRequest();
document.getElementById("rs-range-line-bu").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bydatebu != "undefined"){
		 pro_request_bydatebu= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bydatebu = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bydatebu == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Buser=document.getElementById("uxbu_name").value;
	var url1="select_datepro?date_id="+nonc_id+"&userIddate="+Buser;
	pro_request_bydatebu.open("POST", url1, true);
	pro_request_bydatebu.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bydatebu.responseText);	
	probydatebu(datanonbasin);
	};
	pro_request_bydatebu.send();
};
function probydatebu(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==20){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idbu");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tabledatebu.insertAdjacentHTML('beforeend',datadrop);	    
}
//project file access by name for Building and Urban
var pro_tablenamebu=document.getElementById("Tpro_idbu");
var pro_request_bynamebu=new XMLHttpRequest();
document.getElementById("pf1_namebu").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bynamebu != "undefined"){
		 pro_request_bynamebu= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bynamebu = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bynamebu == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Buser=document.getElementById("uxbu_name").value;
	var url1="select_prname?pfile_name="+nonc_id+"&userIdname="+Buser;
	pro_request_bynamebu.open("POST", url1, true);
	pro_request_bynamebu.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bynamebu.responseText);	
	probynamebu(datanonbasin);
	};
	pro_request_bynamebu.send();
};
function probynamebu(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==20){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idbu");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tablenamebu.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Research and Laboratory 
var pro_tableaccesrl=document.getElementById("Tpro_idrl");
var protableacess_baprrl=document.getElementById("prosepr_idrl");
var protable_requestrl=new XMLHttpRequest();
document.getElementById("process_idrl").onchange = function(evnt){
	var process_id=evnt.target.value;
	 if (typeof protable_requestrl != "undefined"){
		 protable_requestrl= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestrl = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestrl == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Rluser=document.getElementById("uxrl_name").value;
       var url1="select_byprocess?pro_id="+process_id+"&userId="+Rluser;
	protable_requestrl.open("POST",url1, true);
	protable_requestrl.onload= function () {
	var datanontype = JSON.parse(protable_requestrl.responseText);	
	protableprrl(datanontype);
	Acccess_proprrl(datanontype);
	};
	protable_requestrl.send();
};
function Acccess_proprrl(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_baprrl.options.length=1;
		protableacess_baprrl.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protableprrl(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==18){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idrl");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccesrl.insertAdjacentHTML('beforeend',datadrop);	    
}
//Access project document table for Research and Laboratory 
var pro_tableaccesrl=document.getElementById("Tpro_idrl");
var protableacess_basinhrl=document.getElementById("prosel_idrl");
var protable_requestrl=new XMLHttpRequest();
document.getElementById("prosepr_idrl").onchange = function(evnt){
	var process_id=evnt.target.value;
	 if (typeof protable_requestrl != "undefined"){
		 protable_requestrl= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   protable_requestrl = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (protable_requestrl == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Rluser=document.getElementById("uxrl_name").value;
       var url1="select_byprojectname?pro_id="+process_id+"&userId="+Rluser;
	protable_requestrl.open("POST",url1, true);
	protable_requestrl.onload= function () {
	var datanontype = JSON.parse(protable_requestrl.responseText);	
	protablerl(datanontype);
	Acccess_protableheaderrl(datanontype);
	};
	protable_requestrl.send();
};
function Acccess_protableheaderrl(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		protableacess_basinhrl.options.length=1;
		protableacess_basinhrl.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function protablerl(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==18){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idrl");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tableaccesrl.insertAdjacentHTML('beforeend',datadrop);	    
}
//project document type of Research and Laboratory
var prodocnon_tablerl=document.getElementById("Tpro_idrl");
var prohold_catahrl=document.getElementById("procat_idrl");
var prodocnoncata_requestrl=new XMLHttpRequest();
  document.getElementById("prosel_idrl").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnoncata_requestrl != "undefined"){
		 prodocnoncata_requestrl= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnoncata_requestrl = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnoncata_requestrl == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Rluser=document.getElementById("uxrl_name").value;
	var url1="select_prodoctype?type_id="+nonc_id+"&UserIdp="+Rluser;
	prodocnoncata_requestrl.open("POST", url1, true);
	prodocnoncata_requestrl.onload= function () {
	var datanoncata = JSON.parse(prodocnoncata_requestrl.responseText);	
	prodocCatScatrl(datanoncata);
	projdoccatheaderrl(datanoncata);
	};
	prodocnoncata_requestrl.send();
};
function projdoccatheaderrl(getheader){
	 var datadrop='';
	for(var i=0; i< getheader.length; i++){
		if(getheader[i].spa_id!= null && getheader[i].cata_gory==null){
	datadrop+='<option class="option_css" value="' + getheader[i].spa_id + '">' + getheader[i].spatial_or_non + '</option>';	
		}
		prohold_catahrl.options.length=1;
		prohold_catahrl.insertAdjacentHTML('beforeend',datadrop);	
	}
}
function prodocCatScatrl(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==18){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idrl");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
prodocnon_tablerl.insertAdjacentHTML('beforeend',datadrop);	    
}   
//project catagory Research and Laboratory
var proclunon_tablerl=document.getElementById("Tpro_idrl");
var prodocnonclu_requestrl=new XMLHttpRequest();
  document.getElementById("procat_idrl").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof prodocnonclu_requestrl != "undefined"){
		 prodocnonclu_requestrl= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   prodocnonclu_requestrl = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (prodocnonclu_requestrl == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Rluser=document.getElementById("uxrl_name").value;
	var url1="select_cl?clu_id="+nonc_id+"&userIdcl="+Rluser;
	prodocnonclu_requestrl.open("POST", url1, true);
	prodocnonclu_requestrl.onload= function () {
	var datanoncata = JSON.parse(prodocnonclu_requestrl.responseText);	
	catprodocCatScatrl(datanoncata);
	catprojdoccatheaderrl(datanoncata);
	};
	prodocnonclu_requestrl.send();
};
function catprodocCatScatrl(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if( getdata[i1].cateid!= null && getdata[i1].branch_name!= null && getdata[i1].na_id==18){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idrl");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
proclunon_tablerl.insertAdjacentHTML('beforeend',datadrop);	    
} 
//project file access by name Research and Laboratory
var pro_tabledaterl=document.getElementById("Tpro_idrl");
var pro_request_bydaterl=new XMLHttpRequest();
document.getElementById("rs-range-line-rl").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bydaterl != "undefined"){
		 pro_request_bydaterl= new XMLHttpRequest();
     }
     else if (window.ActiveXObject){
    	 pro_request_bydaterl = new ActiveXObject("Microsoft.XMLHTTP");
     }
     if (pro_request_bydaterl == null){
     alert("Browser does not support XMLHTTP Request")
     return;
     }
     var Rluser=document.getElementById("uxrl_name").value;
	var url1="select_datepro?date_id="+nonc_id+"&userIddate="+Rluser;
	pro_request_bydaterl.open("POST", url1, true);
	pro_request_bydaterl.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bydaterl.responseText);	
	probydaterl(datanonbasin);
	};
	pro_request_bydaterl.send();
};
function probydaterl(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==18){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idrl");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
if(i>1) {
 row = table1.rows[i-1];
 row.parentNode.removeChild(row);
}
}
pro_tabledaterl.insertAdjacentHTML('beforeend',datadrop);	    
}
//project file access by name Research and Laboratory
var pro_tablenamerl=document.getElementById("Tpro_idrl");
var pro_request_bynamerl=new XMLHttpRequest();
document.getElementById("pf1_namerl").onchange = function(evnt){
	var nonc_id=evnt.target.value;
	 if (typeof pro_request_bynamerl != "undefined"){
		 pro_request_bynamerl= new XMLHttpRequest();
       }
       else if (window.ActiveXObject){
    	   pro_request_bynamerl = new ActiveXObject("Microsoft.XMLHTTP");
       }
       if (pro_request_bynamerl == null){
       alert("Browser does not support XMLHTTP Request")
       return;
       }
       var Rluser=document.getElementById("uxrl_name").value;
	var url1="select_prname?pfile_name="+nonc_id+"&userIdname="+Rluser;
	pro_request_bynamerl.open("POST", url1, true);
	pro_request_bynamerl.onload= function () {
	var datanonbasin = JSON.parse(pro_request_bynamerl.responseText);	
	probynamerl(datanonbasin);
	};
	pro_request_bynamerl.send();
};
function probynamerl(getdata){
var datadrop='';
for(var i1=0; i1< getdata.length; i1++){
	if(getdata[i1].na_id==18){
	datadrop+='<tr><td data-Eco="Spa"><div class="long">' + getdata[i1].process + '</div></td>'+
    '<td data-Eco="proName"><div class="long">' + getdata[i1].project_name + '</div></td>'+
    '<td data-Eco="Spa"><div class="long">' + getdata[i1].data_type + '</div></td>'+
    '<td data-Eco="Cat"><div class="long">' + getdata[i1].branch_name + '</div></td>'+
    '<td data-Eco="Clu"><div class="long">' + getdata[i1].sub_branch + '</div></td>'+
    '<td data-Eco="Bas"><div class="long">' + getdata[i1].project_id + '</div></td>'+
    '<td data-Eco="Yea">' + getdata[i1].date + '</td>'+
    '<td data-Eco="Fil"><div class="long">' + getdata[i1].name + '</div></td>'+
    '<td data-Eco="Con">' + getdata[i1].file_ext + ' file</td>'+
    '<td data-Eco="Dow"> <a href="downloadfile?file_id='+getdata[i1].name + 
    '&project_name='+ getdata[i1].project_name +'&project_id='+ getdata[i1].project_id +
    '&cat_name='+ getdata[i1].data_type +'">Download</a></td></tr>';
}}
var table1 = document.getElementById("Tpro_idrl");
for (var i = table1.rows.length; i>0 ; i--) {   //iterate through rows
 if(i>1) {
   row = table1.rows[i-1];
   row.parentNode.removeChild(row);
 }
}
pro_tablenamerl.insertAdjacentHTML('beforeend',datadrop);	    
}