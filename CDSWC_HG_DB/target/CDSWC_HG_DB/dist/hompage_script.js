/**
 * 
 */
     var xmlHttp=new XMLHttpRequest();
     var xmlhttpdata=new XMLHttpRequest();
     var basin_dropdown=document.getElementById("basinN");
     var GHMetrology=document.getElementById("Inv_id");
     var geotech=document.getElementById("f_id");
     var georegion=document.getElementById("fsource");
     document.getElementById("gtech_id").onclick = function(evt){
      		 if (typeof XMLHttpRequest != "undefined"){
      	         xmlHttp= new XMLHttpRequest();
      	         }
      	         else if (window.ActiveXObject){
      	         xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
      	         }
      	         if (xmlHttp==null){
      	         alert("Browser does not support XMLHTTP Request")
      	         return;
      	         }
      	       var user_id5=document.getElementById("u_id").value;
      	         var idfor_spa=document.getElementById("action").value;
      	       var idfor_cata=document.getElementById("vaal").value;
      	     var idfor_natio=document.getElementById("Na").value;
      	var urlt= "pro_doc?Na="+idfor_natio+"&vaal="+idfor_cata+"&action="+idfor_spa+"&user_id="+user_id5;
      	xmlhttpdata.open("POST", urlt, true);
      	xmlhttpdata.onload = function () {
      	var pro_name= JSON.parse(xmlhttpdata.responseText);
      	     getproname(pro_name);
      	     getregion(pro_name);
      	     getGHM(pro_name);
      	   renderingbasin(pro_name);
      	};
      	xmlhttpdata.send();		
     };	 
   function getproname(proname){
	var pro='';
	for(var i=0;i<proname.length;i++){
		if(proname[i].folderid!=0 && proname[i].raw_data_avialable=='YES'){
	pro+='<option value="' + proname[i].folderid + '">' + proname[i].folder + '</option>';	
		}
	}
	document.mform.f_id.options.length=2;	
	geotech.insertAdjacentHTML('beforeend',pro);	
   }  
   function getregion(proname){
		var pro='';
		for(var i=0;i<proname.length;i++){
			if(proname[i].regid!=0){
		pro+='<option value="' + proname[i].regid + '">' + proname[i].regnam + '</option>';	
			}
		}
		document.mform.fsource.options.length=2;	
		georegion.insertAdjacentHTML('beforeend',pro);	
	   } 
   function getGHM(proname){
		var pro='';
			for(var i=0;i<proname.length;i++){
				if(proname[i].baseid!=0){
				pro+='<option value="' + proname[i].baseid + '">' + proname[i].basename + '</option>';		
				}	
		}
		document.mform.Inv_id.options.length=1;	
		GHMetrology.insertAdjacentHTML('beforeend',pro);	
	   };
	   function renderingbasin(datab){
	     	var s='';
	     	for(var i=0; i<datab.length; i++){
	     		if(datab[i].class_id!=0){
	     			s+='<option value="' + datab[i].class_id + '">' + datab[i].class_name + '</option>';	
	     		}
	     	}
	     	document.mform.basinN.options.length=2;	
	     	basin_dropdown.insertAdjacentHTML('beforeend',s);
	     	} 
	   //Create new Region 
	     document.getElementById("fsource").onchange = function(evt){
	      	var datatosend = evt.target.value;
	      	if(datatosend==1){
	      document.getElementById("divpRname").innerHTML='Add Region: <input type="text" name="other1" style="width: 192px; '
	      	+'height: 25px;" required minlength="5" maxlength="30"/> <span class="validity"></span>';	
	      			  document.getElementById("divpRname").style.display="block";
	                   document.mform.basinN.options.length=2;			
	      		}
	      	else{
	      		document.getElementById("divpRname").style.display="none";		
	      	}
	      };
     /* Access Data Investigated by Project Id*/
     var GHM_selected=document.getElementById("Inv_id");
          var xml_getselectedGHM=new XMLHttpRequest();
       	document.getElementById("f_id").onchange = function(ghm_event){
       		var id_ghm=ghm_event.target.value;
       		//alert(id_ghm);
       		if(id_ghm==1){
       			document.getElementById("subv1").style.display="none";
       			document.getElementById("Sub_default").style.display="none";
       			document.mform.DTGHM.style.display='none';
       		document.getElementById('div1').innerHTML='<span style="margin-left: 1.0em;"> Add Name:</span> <input type="text" name="other" style="width: 200px; '
       	    +'height: 25px;" required minlength="10" maxlength="500"/> <span class="validity"></span>';
       		document.getElementById('div1').style.display="block";
       		document.getElementById('Id_div').innerHTML='<span style="margin-left: 2.5em;"> Add Id:</span> <input type="text" name="pro_id" style="width: 200px; '
       		+'height: 25px;" required minlength="6" maxlength="300"/> <span class="validity"></span>';
       		document.getElementById('Id_div').style.display="block";
       		document.getElementById('pr_sit').innerHTML='<span style="margin-left: 1.8em;"> Add Site:</span> <input type="text" name="pro_site" style="width: 200px; '
       	    +'height: 25px;" required minlength="10" maxlength="500"/> <span class="validity"></span>';
       		document.getElementById('pr_sit').style.display="block";
       		document.getElementById('pr_client').innerHTML='<span style="margin-left: 0.9em;"> Add Client:</span> <input type="text" name="pro_client" style="width: 200px; '
       		+'height: 25px;" required minlength="6" maxlength="300"/> <span class="validity"></span>';
       		document.getElementById('pr_client').style.display="block";
       		
       		document.mform.sub_id.options.length=1;
       		var user_id=document.getElementById("u_id").value;
       		var idfor_spa=document.getElementById("action").value;
   	       var idfor_cata=document.getElementById("vaal").value;
   	      var idfor_natio=document.getElementById("Na").value;
   	var urlt= "pro_doc?Na="+idfor_natio+"&vaal="+idfor_cata+"&action="+idfor_spa+"&user_id="+user_id;
   	xml_getselectedGHM.open("POST", urlt, true);
   	xml_getselectedGHM.onload = function () {
   	var pro_name= JSON.parse(xml_getselectedGHM.responseText);
   	get_GHMafter(pro_name);
   	};
   	xml_getselectedGHM.send();	
  }	 
       		else{
       			document.getElementById("Sub_default").style.display="none";
       			document.getElementById("subv1").style.display="none";	
       			document.getElementById("div1").style.display="none";	
       			document.getElementById("Id_div").style.display="none";
       			document.getElementById("pr_sit").style.display="none";	
       			document.getElementById("pr_client").style.display="none";
       			if (typeof xml_getselectedGHM!= "undefined"){
           			xml_getselectedGHM= new XMLHttpRequest();
           	         }
           	         else if (window.ActiveXObject){
           	        	xml_getselectedGHM= new ActiveXObject("Microsoft.XMLHTTP");
           	         }
           	         if (xml_getselectedGHM==null){
           	         alert("Browser does not support XMLHTTP Request")
           	         return;
           	         }
               	var urlt= "GHM_selected?cat="+id_ghm;
               	xml_getselectedGHM.open("POST", urlt, true);
               	xml_getselectedGHM.onload=function(){
           	        var prodata=JSON.parse(xml_getselectedGHM.responseText);
           	      getselectedGHM(prodata);
           	        	 }
               	xml_getselectedGHM.send();
           	         }
       		}
       	function getselectedGHM(datap){
       	var ret='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';	
       	for(var i=0; i<datap.length; i++){	
       		if(datap[i].baseid!=0){
       	ret+='<option value="' + datap[i].baseid + '">' + datap[i].basename + '</option>';			
       		}	
       	}
       	document.mform.Inv_id.options.length=1;
       	GHM_selected.insertAdjacentHTML('beforeend',ret);
       		};
       	function get_GHMafter(proname){
    		var pro='';
    			for(var i=0;i<proname.length;i++){
    				if(proname[i].baseid!=0){
    				pro+='<option value="' + proname[i].baseid + '">' + proname[i].basename + '</option>';		
    				}	
    		}
    		document.mform.Inv_id.options.length=1;	
    		GHM_selected.insertAdjacentHTML('beforeend',pro);	
    	   };
    	   //anonymose type data investigated
    	   document.getElementById("DTGHM").onchange=function(evnt){
    		   var GHM_inv=evnt.target.value;
    		    if(GHM_inv==2||GHM_inv==3||GHM_inv==4||GHM_inv==5||GHM_inv==6){
    		    	document.getElementById("Sub_default").style.display="none";	
    		    	document.getElementById("subv1").style.display="none";
    		      	var urlt="sample_branch?type_id="+GHM_inv;
    		      	xml_getcategory.open("POST", urlt, true);
    		      	xml_getcategory.onload=function(){
    		  	        var prodata=JSON.parse(xml_getcategory.responseText);
    		  	      GHM_catagory_sample(prodata);
    		  	        	 }
    		      	xml_getcategory.send();
    	   }
    		    };
    		    function GHM_catagory_sample(proname){
    				var pro='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';
    					for(var i=0;i<proname.length;i++){
    						if(proname[i].baseid!=0){
    						pro+='<option value="' + proname[i].baseid + '">' + proname[i].basename + '</option>';		
    						}	
    				}
    				document.mform.sub_id.options.length=1;	
    				Category_access.insertAdjacentHTML('beforeend',pro);	
    			   };
/* Access Category*/
var Hold_investigated_dat=document.getElementById("Sub_default");
var investigated_data=document.getElementById("DTGHM"); 
var Category_access=document.getElementById("sub_id");
     var xml_getcategory=new XMLHttpRequest();
  	document.getElementById("Inv_id").onchange = function(inv_event){
  		var id_inv=inv_event.target.value;
  		if (typeof xml_getcategory!= "undefined"){
  			xml_getcategory= new XMLHttpRequest();
  	         }
  	         else if (window.ActiveXObject){
  	        	xml_getcategory= new ActiveXObject("Microsoft.XMLHTTP");
  	         }
  	         if (xml_getcategory==null){
  	         alert("Browser does not support XMLHTTP Request")
  	         return;
  	         }
  		if(id_inv==1){
  			document.getElementById("Sub_default").style.display="none";
  			document.getElementById("subv1").style.display="none";	
  			document.mform.DTGHM.style.display='block';
  			document.mform.DTGHM.options.length=1;
  			document.mform.sub_id.options.length=1;
  			var user_id1=document.getElementById("u_id").value;
  			var idfor_spainv=document.getElementById("action").value;
    	    var idfor_catainv=document.getElementById("vaal").value;
    	    var idfor_natioinv=document.getElementById("Na").value;
    	var urlt= "pro_doc?Na="+idfor_natioinv+"&vaal="+idfor_catainv+"&action="+idfor_spainv+"&user_id="+user_id1;
    	xml_getcategory.open("POST", urlt, true);
    	xml_getcategory.onload = function () {
    	var pro_name= JSON.parse(xml_getcategory.responseText);
    	getInvest_data(pro_name);
    	};
    	xml_getcategory.send();	
  		}
  		else if(id_inv==2||id_inv==3||id_inv==4||id_inv==5||id_inv==6){
  			document.getElementById("subv1").style.display="none";
  			var urlt="sample_branch?type_id="+id_inv;
	      	xml_getcategory.open("POST", urlt, true);
	      	xml_getcategory.onload=function(){
	  	        var prodata=JSON.parse(xml_getcategory.responseText);
	  	      getcatagory_sample(prodata);
	  	        	 }
	      	xml_getcategory.send();	
  		}
  		else{
  			document.getElementById("Sub_default").style.display="none";
  			document.getElementById("subv1").style.display="none";	
  			document.mform.DTGHM.style.display='none';
  			var e = document.getElementById("Inv_id");
  	  		 var strText = e.options[e.selectedIndex].text; // will return the text
  			var project_id=document.getElementById("f_id").value;
  			var selected_hgm=document.getElementById("DTGHM_somdo");
	      	var urlt="GHM_con?cat="+id_inv+"&pro_id="+project_id+"&cat_name="+strText;
	      	xml_getcategory.open("POST", urlt, true);
	      	xml_getcategory.onload=function(){
	  	        var prodata=JSON.parse(xml_getcategory.responseText);
	  	    getcatagory(prodata);
	  	    subcatgory_specific(prodata);
	  	        	 }
	      	xml_getcategory.send();	
  		}
  		}
  	function getcatagory(datap){
  	var ret='<option value="1" style="font-weight: bolder;">-----------------( Add Option )-----------------</option>';	
  	for(var i=0; i<datap.length; i++){	
  		if(datap[i].baseid!=0){
  			ret+='<option value="' + datap[i].baseid + '">' + datap[i].basename + '</option>';			
  		}
  	}
  	document.mform.sub_id.options.length=1;
  	Category_access.insertAdjacentHTML('beforeend',ret);
  		} 
  	 //for sub category specific projects 
	   function subcatgory_specific(proname1){
			var pro='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';
				for(var i=0;i<proname1.length;i++){
					if(proname1[i].datrange_id!=0){
					pro+='<option value="' + proname1[i].datrange_id + '">' + proname1[i].date_range + '</option>';		
					}	
			}
			document.mform.Sub_default.options.length=1;	
			Hold_investigated_dat.insertAdjacentHTML('beforeend',pro);	
		   };
  	function getInvest_data(proname){
		var pro='';
			for(var i=0;i<proname.length;i++){
				if(proname[i].baseid!=0){
				pro+='<option value="' + proname[i].baseid + '">' + proname[i].basename + '</option>';		
				}	
		}
		investigated_data.insertAdjacentHTML('beforeend',pro);	
	   };   
		   function getcatagory_sample(proname){
				var pro='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';
					for(var i=0;i<proname.length;i++){
						if(proname[i].baseid!=0){
						pro+='<option value="' + proname[i].baseid + '">' + proname[i].basename + '</option>';		
						}	
				}
				document.mform.sub_id.options.length=1;	
				Category_access.insertAdjacentHTML('beforeend',pro);	
			   };
	   //category    
  	document.getElementById("sub_id").onchange=function(evt_sub){
  		var default_id=document.getElementById("Inv_id").value;
      var sub_cat=evt_sub.target.value;
  		if(sub_cat==1&&default_id>6){
  			document.getElementById("Sub_default").style.display="block";	
  		}
  		else if(sub_cat==1&&(default_id==2||default_id==3||default_id==4||default_id==5||default_id==6)){
  			document.getElementById('subv1').innerHTML='Add Branch: <input type="text" name="cat_name" style="width: 195px;'
				  +'height: 25px;" required minlength="6" maxlength="100"/> <span class="validity"></span>';
			document.getElementById("subv1").style.display="block";		
  		}
  		else if(sub_cat==1&&default_id==1){
  			document.getElementById('subv1').innerHTML='Add Branch: <input type="text" name="cat_name" style="width: 195px;'
				  +'height: 25px;" required minlength="6" maxlength="100"/> <span class="validity"></span>';
			document.getElementById("subv1").style.display="block";		
  		}
  		else{
  			document.getElementById("Sub_default").style.display="none";	
  			document.getElementById("subv1").style.display="none";
  	}
  	};
  	//add new option
  	document.getElementById("Sub_default").onchange=function(evnt){
  		var selected_new=evnt.target.value;
  		if(selected_new==1){
  			document.getElementById('subv1').innerHTML='Add Branch: <input type="text" name="cat_name" style="width: 195px;'
				  +'height: 25px;" required minlength="6" maxlength="100"/> <span class="validity"></span>';
			document.getElementById("subv1").style.display="block";		
  		}
  		else{
  			document.getElementById("subv1").style.display="none";		
  		}
  	}
     /* Get Access to center*/ 	
var center_access=document.getElementById("fcenter");
var proname_access=document.getElementById("drfin_fid");
     var xml_getcenter=new XMLHttpRequest();
  	document.getElementById("pro_repo_id").onclick = function(cen_event){
  		if (typeof xml_getcenter!= "undefined"){
  			xml_getcenter= new XMLHttpRequest();
  	         }
  	         else if (window.ActiveXObject){
  	        	xml_getcenter= new ActiveXObject("Microsoft.XMLHTTP");
  	         }
  	         if (xml_getcenter==null){
  	         alert("Browser does not support XMLHTTP Request")
  	         return;
  	         }
  	       var user_id2=document.getElementById("u_id").value;
  	         var idfor_spa4=document.getElementById("action1").value;
      	     var idfor_cata4=document.getElementById("vaal").value;
      	     var idfor_natio4=document.getElementById("Na1").value;
      	var urlt= "pro_center?Na="+idfor_natio4+"&vaal="+idfor_cata4+"&action="+idfor_spa4+"&user_id="+user_id2;
      	xml_getcenter.open("POST", urlt, true);
      	xml_getcenter.onload=function(){
  	        var prodata=JSON.parse(xml_getcenter.responseText);
  	        getcenter(prodata);
  	      getprojectname(prodata);
  	        	 }
      	xml_getcenter.send();
  	         }
  	function getcenter(datap){
  	var ret="";	
  	for(var i=0; i<datap.length; i++){	
  		if(datap[i].na_id!=0){
  			ret+='<option value="' + datap[i].na_id + '">' + datap[i].na_name + '</option>';			
  		}	
  	}
  	document.mform1.fcenter.options.length=1;
  	center_access.insertAdjacentHTML('beforeend',ret);
  		}
  	function getprojectname(datap){
  	 	var ret="";	
  	 	for(var i=0; i<datap.length; i++){	
  	 		if(datap[i].folderid!=0){
  	 			ret+='<option value="' + datap[i].folderid + '">' + datap[i].folder + '</option>';	
  	 		}		
  	 	}
  	 	document.mform1.drfin_fid.options.length=2;	
  	 	proname_access.insertAdjacentHTML('beforeend',ret);
  	 		}
 	/*Handle design and supervision data*/
 	var designsup_access=document.getElementById("ds_fid");
 	xmldesignsup=new XMLHttpRequest();
 	document.getElementById("drfin_fid").onchange = function(evt){
 		var datatosend = evt.target.value;
 		if(datatosend==1){
   		document.getElementById('div_pro').innerHTML='<span style="margin-left: 1.0em;"> Add Name:</span> <input type="text" name="repopro_name" style="width: 200px; '
   	    +'height: 25px;" required minlength="10" maxlength="500"/> <span class="validity"></span>';
   		document.getElementById('div_pro').style.display="block";
   		document.getElementById('Id_pro').innerHTML='<span style="margin-left: 2.55em;"> Add Id:</span> <input type="text" name="repopro_id" style="width: 200px; '
   		+'height: 25px;" required minlength="6" maxlength="300"/> <span class="validity"></span>';
   		document.getElementById('Id_pro').style.display="block";
   		document.getElementById('div_psite').innerHTML='<span style="margin-left: 1.8em;"> Add Site:</span> <input type="text" name="rep_site" style="width: 200px; '
   	    +'height: 25px;" required minlength="10" maxlength="500"/> <span class="validity"></span>';
   		document.getElementById('div_psite').style.display="block";
   		document.getElementById('div_pclient').innerHTML='<span style="margin-left: 0.9em;"> Add Client:</span> <input type="text" name="rep_client" style="width: 200px; '
   		+'height: 25px;" required minlength="6" maxlength="300"/> <span class="validity"></span>';
   		document.getElementById('div_pclient').style.display="block";
   		
   		document.mform1.br_fid.options.length=2;	
   		document.getElementById("super_default").style.display="none";
		document.mform1.super_desi.style.display='none';
		var user_id3=document.getElementById("u_id").value;
		var idfor_spa=document.getElementById("action").value;
	       var idfor_cata=document.getElementById("vaal").value;
	      var idfor_natio=document.getElementById("Na").value;
	var urlt= "pro_doc?Na="+idfor_natio+"&vaal="+idfor_cata+"&action="+idfor_spa+"&user_id="+user_id3;
	xmldesignsup.open("POST", urlt, true);
	xmldesignsup.onload = function () {
	var prodata= JSON.parse(xmldesignsup.responseText);
	 def_getsup_design(prodata);
	};
	xmldesignsup.send();	
 		}
 		else{
 			document.mform1.br_fid.options.length=2;
 			document.mform1.super_desi.style.display='none';
 			document.getElementById('Id_pro').style.display="none";
 			document.getElementById('div_pro').style.display="none";
 			document.getElementById('div_psite').style.display="none";
 			document.getElementById('div_pclient').style.display="none";
 			document.getElementById('Branchname').style.display="none";
 			document.getElementById("super_default").style.display="none";
 			if (typeof xmldesignsup != "undefined"){
 	 			xmldesignsup= new XMLHttpRequest();
 	 	         }
 	 	         else if (window.ActiveXObject){
 	 	        	xmldesignsup= new ActiveXObject("Microsoft.XMLHTTP");
 	 	         }
 	 	         if (xmldesignsup==null){
 	 	         alert("Browser does not support XMLHTTP Request")
 	 	         return;
 	 	         }	
 	 	         var url="pro_idreport?cen_id="+datatosend;
 	 	        xmldesignsup.open("POST", url,true);
 	 	       xmldesignsup.onload=function(){
 	 	        var prodata=JSON.parse(xmldesignsup.responseText);
 	 	       getdesignsup(prodata);
 	 	        	 }
 	 	      xmldesignsup.send();	
 		}
 	         }
 	function getdesignsup(datap){
 	var ret='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';	
 	for(var i=0; i<datap.length; i++){
 		ret+='<option value="' + datap[i].class_id + '">' + datap[i].class_name + '</option>';
 	}
 	document.mform1.ds_fid.options.length=1;	
 	designsup_access.insertAdjacentHTML('beforeend',ret);
 		}
 	function def_getsup_design(datap){
  	 	var ret='';	
  	 	for(var i=0; i<datap.length; i++){	
  	 		if(datap[i].datrange_id!=0){
  	 			ret+='<option value="' + datap[i].datrange_id + '">' + datap[i].date_range + '</option>';	
  	 		}		
  	 	}
  	 	document.mform1.ds_fid.options.length=1;	
  	 	designsup_access.insertAdjacentHTML('beforeend',ret);
  	 		}
 	/*Handle design and supervision sub branch data*/
 	var designsu_access=document.getElementById("super_desi");
 	var designsupbranch_access=document.getElementById("br_fid");
 	xmldesignsupbranch=new XMLHttpRequest();
 	document.getElementById("ds_fid").onchange = function(evt){
 		var Sub_datatosend = evt.target.value;
 		var s = document.getElementsByName('drfin_fid')[0];
        var pro_id1 = s.options[s.selectedIndex].value;
        //alert(pro_id1);
 		if (typeof xmldesignsupbranch != "undefined"){
	 			xmldesignsupbranch= new XMLHttpRequest();
	 	         }
	 	         else if (window.ActiveXObject){
	 	        	xmldesignsupbranch= new ActiveXObject("Microsoft.XMLHTTP");
	 	         }
	 	         if (xmldesignsupbranch==null){
	 	         alert("Browser does not support XMLHTTP Request")
	 	         return;
	 	         }
 		 if(Sub_datatosend==1){
 			document.getElementById("Branchname").style.display="none";	
  			document.mform1.super_desi.style.display='block';
  			var user_id4=document.getElementById("u_id").value;
  			var idfor_spa=document.getElementById("action").value;
  	       var idfor_cata=document.getElementById("vaal").value;
  	      var idfor_natio=document.getElementById("Na").value;
  	       // alert(idfor_natio);
  			var urlt= "pro_doc?Na="+idfor_natio+"&vaal="+idfor_cata+"&action="+idfor_spa+"&user_id="+user_id4;
  			xmldesignsupbranch.open("POST", urlt, true);
  			xmldesignsupbranch.onload = function () {
  	    	var pro_name1= JSON.parse(xmldesignsupbranch.responseText);
  	    	default_getsup_design(pro_name1);
  	    	};
  	    	xmldesignsupbranch.send();		 
  		 }
  		 else if(Sub_datatosend!=1 && pro_id1==1){
			//document.getElementById("super_default").style.display="none";	
 			document.getElementById("Branchname").style.display="none";	
 			document.mform1.super_desi.style.display='none';
 			document.mform1.br_fid.options.length=1;
 			var s = document.getElementsByName('ds_fid')[0];
            var ds_text = s.options[s.selectedIndex].text;
 	 	        var url="ds_subnewproject?ds_name="+ds_text;
 	 	        xmldesignsupbranch.open("POST", url,true);
 	 	       xmldesignsupbranch.onload=function(){
 	 	        var prodata=JSON.parse(xmldesignsupbranch.responseText);
 	 	      access_sup_des_fornewproject(prodata);
 	 	    //  subbranch_specific_pro(prodata);
 	 	        	 }
 	 	      xmldesignsupbranch.send();   
		   }
 		 else if(Sub_datatosend!=1){
 			document.mform1.br_fid.options.length=2;
 			document.mform1.super_desi.style.display='none';
 			document.getElementById("Branchname").style.display="none";	
 			document.getElementById("super_default").style.display="none";
	         var url="ds_branch?doc_id="+Sub_datatosend+"&pro_id="+pro_id1;
	        xmldesignsupbranch.open("POST", url,true);
	       xmldesignsupbranch.onload=function(){
	        var prodata=JSON.parse(xmldesignsupbranch.responseText);
	        getdesignsup_barnch_(prodata);
	        	 }
	      xmldesignsupbranch.send();	
 		}
 	         }
 	  function default_getsup_design(datap){
	  	 	var ret='';	
	  	 	for(var i=0; i<datap.length; i++){	
	  	 		if(datap[i].datrange_id!=0){
	  	 			ret+='<option value="' + datap[i].datrange_id + '">' + datap[i].date_range + '</option>';	
	  	 		}		
	  	 	}
	  	 	document.mform1.super_desi.options.length=1;	
	  	 	designsu_access.insertAdjacentHTML('beforeend',ret);
	  	 		}
 	function getdesignsup_barnch_(datap){
 	 	var ret='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';	
 	 	for(var i=0; i<datap.length; i++){
 	 			ret+='<option value="' + datap[i].folderid + '">' + datap[i].folder + '</option>';	
 	 	}
 	 	document.mform1.br_fid.options.length=1;	
 	 	designsupbranch_access.insertAdjacentHTML('beforeend',ret);
 	 		}
 		function access_sup_des_fornewproject(datap){
 	var ret='<option value="1" style="font-weight: bold;">--------------( Add New )-----------------</option>';	
 	for(var i=0; i<datap.length; i++){
 		if(datap[i].ds_id!=0){
	 			ret+='<option value="' + datap[i].ds_id + '">' + datap[i].ds_name + '</option>';	
	 		}
 	}
 	document.mform1.br_fid.options.length=1;	
 	designsupbranch_access.insertAdjacentHTML('beforeend',ret);
 		}
		 //create new design supervision branch
		   var subbranch_sppro_access=document.getElementById("super_default");
		   xml_getdesig_supsub_default=new XMLHttpRequest();
		 	document.getElementById("br_fid").onchange=function(evt_sub){
		 		 var sub_cat=evt_sub.target.value;
		 		//alert(sub_cat);
		 		if (typeof xml_getdesig_supsub_default != "undefined"){
		 			xml_getdesig_supsub_default= new XMLHttpRequest();
		 	         }
		 	         else if (window.ActiveXObject){
		 	        	xml_getdesig_supsub_default= new ActiveXObject("Microsoft.XMLHTTP");
		 	         }
		 	         if (xml_getdesig_supsub_default==null){
		 	         alert("Browser does not support XMLHTTP Request")
		 	         return;
		 	         }
		 	         var defualt_dsname=document.getElementsByName("ds_fid")[0];
		 	         var text_index=defualt_dsname.options[defualt_dsname.selectedIndex].text;
		 	        // alert(text_index);
		 		var defualt_desorSup=document.getElementById("ds_fid").value;
		 	  		if(sub_cat==1&&defualt_desorSup>4){
		 	  			document.getElementById("super_default").style.display="block";	
		 	  			var url="ds_subdefault?doc_id="+text_index;
		 	  			xml_getdesig_supsub_default.open("POST", url,true);
		 	  			xml_getdesig_supsub_default.onload=function(){
		 	 	        var prodata=JSON.parse(xml_getdesig_supsub_default.responseText);
		 	 	      subbranch_specific_pro(prodata);
		 	 	       }
		 	  			xml_getdesig_supsub_default.send();
		 	  		}
		 	  		else if(sub_cat==1&&(defualt_desorSup!=1)){
		 	  			document.getElementById('Branchname').innerHTML='Add Branch: <input type="text" name="br_name" style="width: 193px;'
		 	  				  +'height: 25px;" required minlength="6" maxlength="100"/> <span class="validity"></span>';
		 	  			document.getElementById("Branchname").style.display="block";		
		 	  		}
		 	  		else if(sub_cat==1&&defualt_desorSup==1){
		 	  			document.getElementById('Branchname').innerHTML='Add Branch: <input type="text" name="br_name" style="width: 193px;'
		 	  				  +'height: 25px;" required minlength="6" maxlength="100"/> <span class="validity"></span>';
		 	  			document.getElementById("Branchname").style.display="block";		
		 	  		}
		 	  		else{
		 	  			document.getElementById("super_default").style.display="none";	
		 	  			document.getElementById("Branchname").style.display="none";	
		 	  	}
		 	  	};
		 	 //for sub branch for specific projects documents 
		 	   function subbranch_specific_pro(proname_spac){
		 			var pro='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';
		 				for(var i=0;i<proname_spac.length;i++){
		 					if(proname_spac[i].addid_sub_sd!=0){
		 					pro+='<option value="' + proname_spac[i].addid_sub_sd + '">' + proname_spac[i].addname_sub_sd + '</option>';		
		 					}	
		 			}
		 			document.mform1.super_default.options.length=1;	
		 			subbranch_sppro_access.insertAdjacentHTML('beforeend',pro);	
		 		   };
		 	  	
		 	   //create new design supervision branch
			 	document.getElementById("super_default").onchange=function(evt_sub){
			 	      var sub_cat1=evt_sub.target.value;
			 	  		if(sub_cat1==1){
			 	  	document.getElementById('Branchname').innerHTML='Add Branch: <input type="text" name="br_name" style="width: 193px;'
			 	  				  +'height: 25px;" required minlength="6" maxlength="100"/> <span class="validity"></span>';
			 	  			document.getElementById("Branchname").style.display="block";	
			 	  		}
			 	  		else{
			 	  			document.getElementById("Branchname").style.display="none";	
			 	  	}
			 	  	};
 	//default design or Supervision branch 
 	var xml_addtional_supdes=new XMLHttpRequest();
 	var get_supdesdata=document.getElementById("br_fid");
 	document.getElementById("super_desi").onchange=function(evnt){
 	var get_id=evnt.target.value;
 	     document.mform1.br_fid.options.length=2;
 	document.getElementById("Branchname").style.display="none";	
 	 var pro_id=document.getElementById("drfin_fid").value;
       var url="default_ds_branch?doc_id="+get_id;
       xml_addtional_supdes.open("POST", url,true);
       xml_addtional_supdes.onload=function(){
      var prodata=JSON.parse(xml_addtional_supdes.responseText);
      getdesignsup_additional(prodata);
      	 }
       xml_addtional_supdes.send();
 	}
 	function getdesignsup_additional(datap){
 	 	var ret='<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>';	
 	 	for(var i=0; i<datap.length; i++){
 	 		if(datap[i].ds_subid!=0){
 	 			ret+='<option value="' + datap[i].ds_subid + '">' + datap[i].ds_subname + '</option>';	
 	 		}	
 	 	}
 	 	document.mform1.br_fid.options.length=1;	
 	 	get_supdesdata.insertAdjacentHTML('beforeend',ret);
 	 		}
 	/*Handle data from process*/
 	var process_access=document.getElementById("fprocess");
 	xmlprocesses=new XMLHttpRequest();
 	document.getElementById("fcenter").onchange = function(evt){
 		var datatosend = evt.target.value;
 		if (typeof xmlprocesses != "undefined"){
 			xmlprocesses= new XMLHttpRequest();
 	         }
 	         else if (window.ActiveXObject){
 	        	 xmlprocesses= new ActiveXObject("Microsoft.XMLHTTP");
 	         }
 	         if (xmlprocesses==null){
 	         alert("Browser does not support XMLHTTP Request")
 	         return;
 	         }	
 	         var url="Process?cen_id="+datatosend;
 	         xmlprocesses.open("POST", url,true);
 	         xmlprocesses.onload=function(){
 	        var prodata=JSON.parse(xmlprocesses.responseText);
 	       getprocess(prodata);
 	        	 }
 	         xmlprocesses.send();
 	         }
 	function getprocess(datap){
 	var ret='';	
 	for(var i=0; i<datap.length; i++){
 		ret+='<option value="' + datap[i].regid + '">' + datap[i].regnam + '</option>';
 	}
 	document.mform1.fprocess.options.length=2;	
 	process_access.insertAdjacentHTML('beforeend',ret);
 		}
 	/*Handle data from process*/
 	var access_del_modefy=document.getElementById("accessby_userId");
 	xmldelmod_access=new XMLHttpRequest();
 	document.getElementById("mange_rawdata").onclick = function(evt){
 		if (typeof xmldelmod_access != "undefined"){
 			xmldelmod_access= new XMLHttpRequest();
 	         }
 	         else if (window.ActiveXObject){
 	        	xmldelmod_access= new ActiveXObject("Microsoft.XMLHTTP");
 	         }
 	         if (xmldelmod_access==null){
 	         alert("Browser does not support XMLHTTP Request")
 	         return;
 	         }
 	         var access_user_id=document.getElementById("user_id").value;
 	         var url="access_mod_del?access_id="+access_user_id;
 	        xmldelmod_access.open("POST", url,true);
 	       xmldelmod_access.onload=function(){
 	        var prodata=JSON.parse(xmldelmod_access.responseText);
 	       access_dele_modefy(prodata);
 	        	 }
 	      xmldelmod_access.send();
 	         }
 	function access_dele_modefy(datafrom){
 		var ret='';
 	for(var i=0; i<datafrom.length; i++){
    	if(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
       	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
          	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}"){
    		ret+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].process + '</div></td>'+
   		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].project_name + '</div></td>'+
   		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].data_type + '</div></td>'+
   		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].branch_name + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].sub_branch + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].name + '</div></td>'+
   		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].user_name + '</div></td>'+
   		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].date + '</div></td>'+
   		          '<td><a href="#">Delete</a></td>'+
   		          '<td><a href="download?file_id=' 
         			+ datafrom[i].sub_branch+'&pro_name='+datafrom[i].process+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].project_name
           			+'&cat_name='+datafrom[i].data_type+'">Download</a></td></tr>';
   		}
 	}
 	var table = document.getElementById("accessby_userId");
	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
	  if(i>1) {
	    row = table.rows[i-1];
	    row.parentNode.removeChild(row);
	  }
	}
	access_del_modefy.insertAdjacentHTML('beforeend',ret);
 		}
 	//delete raw data file in the repository
 	addEventListener('click', rawData);
 	var access_del_respond=document.getElementById("accessby_userId");
 	var xml_delete=new XMLHttpRequest();
 	function rawData(){
 		var table1=document.getElementById('accessby_userId');
 	 	for(var i=0;i < table1.rows.length; i++){
 	 		table1.rows[i].onclick = function(){
 	 			getvale_rawdata(this)
 	 		};			
 	 	}	
 	};
 	function getvale_rawdata(row){
			row.cells[8].onclick=function(){	
				var file_name=document.getElementById("hold_filename").value=row.cells[4].innerText;
 	 			if(confirm("If you Click Ok,File with file name:.. "+file_name+" ... will be Deleted")){
 	 	 	 		//alert(this.rowIndex);
 	 	 			var access_user_id=document.getElementById("user_id").value;
 	 	 	 		
 	 	 	 		//alert(file_name);
 	 	 	 		var ulr_="delete_file?fil_id="+file_name+"&user_id="+access_user_id;
 	 	 	 		xml_delete.open("POST",ulr_,true);
 	 	 	 		xml_delete.onload=function(){
 	 	 	 			var dataget=JSON.parse(xml_delete.responseText);
 	 	 	 		access_dele_response(dataget);
 	 	 	 		}
 	 	 	 		xml_delete.send();
 					return true;
 					}
 				else{
 					return false;	
 				}
 				return false;
 		
		};	
	}
 	function access_dele_response(datafrom){
 		var ret='';
 	for(var i=0; i<datafrom.length; i++){
    	if(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
       	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
          	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}"){
    		ret+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].process + '</div></td>'+
   		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].project_name + '</div></td>'+
   		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].data_type + '</div></td>'+
   		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].branch_name + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].sub_branch + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].name + '</div></td>'+
   		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].user_name + '</div></td>'+
   		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].date + '</div></td>'+
   		          '<td><a href="#">Delete</a></td>'+
   		          '<td><a href="download?file_id=' 
       			+ datafrom[i].sub_branch+'&pro_name='+datafrom[i].process+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].project_name
       			+'&cat_name='+datafrom[i].data_type+'">Download</a></td></tr>';
   		}
 	}
 	var table = document.getElementById("accessby_userId");
	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
	  if(i>1) {
	    row = table.rows[i-1];
	    row.parentNode.removeChild(row);
	  }
	}
	access_del_respond.insertAdjacentHTML('beforeend',ret);
 		}
 	/*Handle data from process*/
 	var access_del_prodata=document.getElementById("projectData_id");
 	xmlprodata_access=new XMLHttpRequest();
 	document.getElementById("mange_otherdoc").onclick = function(evt){
 		if (typeof xmlprodata_access != "undefined"){
 			xmlprodata_access= new XMLHttpRequest();
 	         }
 	         else if (window.ActiveXObject){
 	        	xmlprodata_access= new ActiveXObject("Microsoft.XMLHTTP");
 	         }
 	         if (xmlprodata_access==null){
 	         alert("Browser does not support XMLHTTP Request")
 	         return;
 	         }
 	         var access_user_id=document.getElementById("user_idpro").value;
 	         var url="access_mod_pro?access_id="+access_user_id;
 	        xmlprodata_access.open("POST", url,true);
 	       xmlprodata_access.onload=function(){
 	        var prodata=JSON.parse(xmlprodata_access.responseText);
 	       access_dele_prodata(prodata);
 	        	 }
 	      xmlprodata_access.send();
 	         }
 	function access_dele_prodata(datafrom){
 		var ret='';
 	for(var i=0; i<datafrom.length; i++){
    	if(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
       	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
          	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}"){
    		ret+='<tr><td data-Eco="Spa" style="width: 9%;"><div class="long">' + datafrom[i].process + '</div></td>'+
   		          '<td data-Eco="Cat" style="width: 18%;"><div class="long">' + datafrom[i].project_name + '</div></td>'+
   		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].data_type + '</div></td>'+
   		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].branch_name + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].sub_branch + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].name + '</div></td>'+
   		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].user_name + '</div></td>'+
   		          '<td data-Eco="Fil">' + datafrom[i].date + '</td>'+
   		          '<td><a href="#">Delete</a></td>'+
   		          '<td><a href="downloadfile?file_id=' 
          			+ datafrom[i].user_name+'&project_name='+datafrom[i].project_name+'&project_id='+datafrom[i].data_type
        			+'&cat_name='+datafrom[i].branch_name+'">Download</a></td></tr>';
   		}
 	}
 	var table = document.getElementById("projectData_id");
	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
	  if(i>1) {
	    row = table.rows[i-1];
	    row.parentNode.removeChild(row);
	  }
	}
	access_del_prodata.insertAdjacentHTML('beforeend',ret);
 		}
 	//delete raw data file in the repository
 	onclick=function(){prodata()};
 	var access_del_prodataresponse=document.getElementById("projectData_id");
 	var xml_delete_proj=new XMLHttpRequest();
 	function prodata(){
 		var table_project=document.getElementById('projectData_id');
 	 	for(var i=1;i < table_project.rows.length; i++){
 	 				table_project.rows[i].onclick = function(){
 	 	 					getvale(this);	
 	 			};					
 	 	}	
 	};
 	function getvale(row){
 			row.cells[8].onclick=function(){	
				    var file_name=document.getElementById("hold_project_filename").value=row.cells[6].innerText;
	 				if(confirm("If you Click Ok,File with file name:.. "+file_name+" ... will be Deleted")){
	 					var access_user_id=document.getElementById("user_idpro").value;
	 		 	 		
	 		 	 		//alert(file_name);
	 		 	 		var ulr_="delete_profile?file_id="+file_name+"&user_id="+access_user_id;
	 		 	 	xml_delete_proj.open("POST",ulr_,true);
	 		 	    xml_delete_proj.onload=function(){
	 		 	 			var dataget=JSON.parse(xml_delete_proj.responseText);
	 		 	 		access_dele_prodata_response(dataget);
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
 	function access_dele_prodata_response(datafrom){
 		var ret='';
 	for(var i=0; i<datafrom.length; i++){
    	if(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
       	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
          	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}"){
    		ret+='<tr><td data-Eco="Spa" style="width: 9%;"><div class="long">' + datafrom[i].process + '</div></td>'+
   		          '<td data-Eco="Cat" style="width: 18%;"><div class="long">' + datafrom[i].project_name + '</div></td>'+
   		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].data_type + '</div></td>'+
   		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].branch_name + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].sub_branch + '</div></td>'+
   		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].name + '</div></td>'+
   		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].user_name + '</div></td>'+
   		          '<td data-Eco="Fil">' + datafrom[i].date + '</td>'+
   		          '<td><a href="#">Delete</a></td>'+
   		          '<td><a href="downloadfile?file_id=' 
          			+ datafrom[i].user_name+'&project_name='+datafrom[i].project_name+'&project_id='+datafrom[i].data_type
        			+'&cat_name='+datafrom[i].branch_name+'">Download</a></td></tr>';
   		}
 	}
 	var table = document.getElementById("projectData_id");
	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
	  if(i>1) {
	    row = table.rows[i-1];
	    row.parentNode.removeChild(row);
	  }
	}
	access_del_prodataresponse.insertAdjacentHTML('beforeend',ret);
 		}
 	/*process name*/
 	var hold_process=document.getElementById("process_id");
 	xml_forgrantprocess=new XMLHttpRequest();
 	document.getElementById("center_id").onchange = function(evt){
 		var datatosend = evt.target.value;
 		if (typeof xml_forgrantprocess != "undefined"){
 			xml_forgrantprocess= new XMLHttpRequest();
 	         }
 	         else if (window.ActiveXObject){
 	        	xml_forgrantprocess= new ActiveXObject("Microsoft.XMLHTTP");
 	         }
 	         if (xml_forgrantprocess==null){
 	         alert("Browser does not support XMLHTTP Request")
 	         return;
 	         }	
 	         var url="grant_pro?cent_id="+datatosend;
 	        xml_forgrantprocess.open("POST", url,true);
 	       xml_forgrantprocess.onload=function(){
 	        var prodata=JSON.parse(xml_forgrantprocess.responseText);
 	       grant_holdprocess(prodata);
 	        	 }
 	      xml_forgrantprocess.send();
 	         }
 	function grant_holdprocess(datap){
 	var ret='';	
 	for(var i=0; i<datap.length; i++){
 		ret+='<option value="' + datap[i].regnam + '">' + datap[i].regnam + '</option>';
 	}
 	document.getElementById("process_id").options.length=1;	
 	hold_process.insertAdjacentHTML('beforeend',ret);
 		}
 	/*Handle data from process*/
 	var hold_user=document.getElementById("User_togrant");
 	var hold_projectname=document.getElementById("pro_name7");
 	xml_forgrantuser=new XMLHttpRequest();
 	document.getElementById("process_id").onchange = function(evt){
 		var datatosend = evt.target.value;
 		if (typeof xml_forgrantuser != "undefined"){
 			xml_forgrantuser= new XMLHttpRequest();
 	         }
 	         else if (window.ActiveXObject){
 	        	xml_forgrantuser= new ActiveXObject("Microsoft.XMLHTTP");
 	         }
 	         if (xml_forgrantuser==null){
 	         alert("Browser does not support XMLHTTP Request")
 	         return;
 	         }	
 	         var user_id=document.getElementById("user_id").value;
 	         var url="process_granted?process_id="+datatosend+"&user_id="+user_id;
 	        xml_forgrantuser.open("POST", url,true);
 	       xml_forgrantuser.onload=function(){
 	        var prodata=JSON.parse(xml_forgrantuser.responseText);
 	       grant_holduser(prodata);
 	      grant_holdproject(prodata);
 	        	 }
 	      xml_forgrantuser.send();
 	         }
 	function grant_holduser(datap){
 	var ret='';	
 	for(var i=0; i<datap.length; i++){
 		if(datap[i].regid!=0 && datap[i].class_id==0){
 		ret+='<option value="' + datap[i].regid + '">' + datap[i].regnam + '</option>';	
 		}
 	}
 	document.getElementById("User_togrant").options.length=1;	
 	hold_user.insertAdjacentHTML('beforeend',ret);
 		}
 	function grant_holdproject(datap){
 	 	var ret='';	
 	 	for(var i=0; i<datap.length; i++){
 	 		if(datap[i].class_id!=0 && datap[i].class_name=='YES'){
 	 		ret+='<option value="' + datap[i].class_id + '">' + datap[i].cata_gory + '</option>';	
 	 		}
 	 	}
 	 	document.getElementById("pro_name7").options.length=1;	
 	 	hold_projectname.insertAdjacentHTML('beforeend',ret);
 	 		}
 	/*fire button to grant project*/
 	var hold_response=document.getElementById("response_id");
 	xml_forgrantresponse=new XMLHttpRequest();
 	document.getElementById("fire_button_id").onclick = function(evt){
 		if (typeof xml_forgrantresponse != "undefined"){
 			xml_forgrantresponse= new XMLHttpRequest();
 	         }
 	         else if (window.ActiveXObject){
 	        	xml_forgrantresponse= new ActiveXObject("Microsoft.XMLHTTP");
 	         }
 	         if (xml_forgrantresponse==null){
 	         alert("Browser does not support XMLHTTP Request")
 	         return;
 	         }	
 	        var user_togrant=document.getElementById("User_togrant").value;
 	        var project_id=document.getElementById("pro_name7").value;
 	         var url="granted_pro?pro_id="+project_id+"&user_id="+user_togrant;
 	        xml_forgrantresponse.open("POST", url,true);
 	       xml_forgrantresponse.onload=function(){
 	        var prodata=JSON.parse(xml_forgrantresponse.responseText);
 	       get_reponse(prodata);
 	        	 }
 	      xml_forgrantresponse.send();
 	         }
 	function get_reponse(datap){
 	var ret='';	
 	for(var i=0; i<datap.length; i++){
 		ret+='<p>' + datap[i].regnam + '</p>';
 	}
 	document.getElementById("response_id").innerHTML='';	
 	hold_response.insertAdjacentHTML('beforeend',ret);
 		}