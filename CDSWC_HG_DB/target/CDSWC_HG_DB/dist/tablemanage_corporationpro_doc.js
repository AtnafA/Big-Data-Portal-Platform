///Corporation Project Data
var Cocat_id2=document.getElementById("CoVrastar_id");
var Ccat_id1=document.getElementById("Cor_cat_id");
var xmlhttpCordata=new XMLHttpRequest();
var xmlhttpCodata1=new XMLHttpRequest();
document.getElementById("selCo_id").onchange = function(evnt){
	var spa_id=evnt.target.value;
	 if (typeof xmlhttpCordata != "undefined"){
		 xmlhttpCordata= new XMLHttpRequest();
         }
         else if (window.ActiveXObject){
        	 xmlhttpCordata= new ActiveXObject("Microsoft.XMLHTTP");
         }
         if (xmlhttpCordata==null){
         alert("Browser does not support XMLHTTP Request")
         return;
         }	
	var url1="Cat_haed?selc_id="+spa_id;
	xmlhttpCordata.open("POST", url1, true);
	xmlhttpCordata.onload= function () {
	var datacata = JSON.parse(xmlhttpCordata.responseText);	
	Cdataaccessing(datacata);
	};
	xmlhttpCordata.send();
	 //organize dataset as spatial or vector
    var url1="Sel_pro?selc_id1="+spa_id;
    xmlhttpCodata1.open("POST", url1, true);
    xmlhttpCodata1.onload= function () {
        	var datacata1 = JSON.parse(xmlhttpCodata1.responseText);	
        	Cacessvec_ras(datacata1);
        	};
        	xmlhttpCodata1.send();
};
function Cdataaccessing(datafrom){
	var datadrop='';
	for(var i=0; i< datafrom.length; i++){
		datadrop+='<option class="option_css" value="' + datafrom[i].cateid + '">' + datafrom[i].cata_gory + '</option>';
	}
	Ccat_id1.options.length=1;
	Ccat_id1.insertAdjacentHTML('beforeend',datadrop);
}
    function Cacessvec_ras(datafrom){
    	var datadrop='';
    	for(var i=0; i< datafrom.length; i++){
    	if(datafrom[i].spatial_or_non === "Corporation Project"&&(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
        	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
           	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}")){
    		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].cata_gory + '</div></td>'+
    		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].datacl + '</div></td>'+
    		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].folder + '</div></td>'+
    		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].file_gr + '</div></td>'+
    		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].regnam + '</div></td>'+
    		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].basename + '</div></td>'+
    		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].station_name + '</div></td>'+
    		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].name + '</div></td>'+
    		          '<td data-Eco="Dow"> <a href="download?file_id=' 
          			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
        			+'&cat_name='+datafrom[i].folder+'">Download</a></td></tr>';
    		}
    	}
    	var table = document.getElementById("CoVrastar_id");
    	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
    	  if(i>1) {
    	    row = table.rows[i-1];
    	    row.parentNode.removeChild(row);
    	  }
    	}
    	Cocat_id2.insertAdjacentHTML('beforeend',datadrop);	
    }     
//data type searching
    var Cocatgory = document.getElementById("CoVrastar_id");
        var Cosearch_cat=document.getElementById("clCo_id");
        var Cocatdata_request=new XMLHttpRequest();
        document.getElementById("Cor_cat_id").onchange = function(evnt){
        	var spa_id=evnt.target.value;
        	 if (typeof Cocatdata_request != "undefined"){
        		 Cocatdata_request= new XMLHttpRequest();
                 }
                 else if (window.ActiveXObject){
                	 Cocatdata_request = new ActiveXObject("Microsoft.XMLHTTP");
                 }
                 if (Cocatdata_request == null){
                 alert("Browser does not support XMLHTTP Request")
                 return;
                 }	
        	var url1="select_cat?cat_id="+spa_id;
        	Cocatdata_request.open("POST", url1, true);
        	Cocatdata_request.onload= function () {
        	var datacata = JSON.parse(Cocatdata_request.responseText);	
        	Cocata_dataacess(datacata);
        	Cogetdatatype(datacata);
        	};
        	Cocatdata_request.send();
        }; 
        function Cocata_dataacess(datafrom){
        	var datadrop='';
        	for(var i1=0; i1< datafrom.length; i1++){
        		if(datafrom[i1].folderid != 0){
        	datadrop+='<option class="option_css" value="' + datafrom[i1].folderid + '">' + datafrom[i1].folder + '</option>';	
        		}
        		Cosearch_cat.options.length=1;
        		Cosearch_cat.insertAdjacentHTML('beforeend',datadrop);	
        	}
        }
        function Cogetdatatype(datafrom){
        	var datadrop='';
            	for(var i=0; i< datafrom.length; i++){
            		if(datafrom[i].spatial_or_non === "Corporation Project"&&(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
                   	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
                      	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}")){
               		    datadrop+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].cata_gory + '</div></td>'+
               		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].datacl + '</div></td>'+
               		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].folder + '</div></td>'+
               		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].file_gr + '</div></td>'+
               		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].regnam + '</div></td>'+
               		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].basename + '</div></td>'+
               		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].station_name + '</div></td>'+
               		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].name + '</div></td>'+
               		          '<td data-Eco="Dow"> <a href="download?file_id=' 
                     			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
                   			+'&cat_name='+datafrom[i].folder+'">Download</a></td></tr>';
               		}
            	}	
            	var table = document.getElementById("CoVrastar_id");
            	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
            	  if(i>1) {
            	    row = table.rows[i-1];
            	    row.parentNode.removeChild(row);
            	  }
            	}
            	Cocatgory.insertAdjacentHTML('beforeend',datadrop);	
            }
        //Branch searching
        var Cocluster = document.getElementById("CoVrastar_id");
       var Cotype_request=new XMLHttpRequest();
       document.getElementById("clCo_id").onchange = function(evnt){
       	var spa_id=evnt.target.value;
       	 if (typeof Cotype_request != "undefined"){
       		Cotype_request= new XMLHttpRequest();
                }
                else if (window.ActiveXObject){
                	Cotype_request = new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (Cotype_request == null){
                alert("Browser does not support XMLHTTP Request")
                return;
                }	
       	var url1="select_type?type_id="+spa_id;
       	Cotype_request.open("POST", url1, true);
       	Cotype_request.onload= function () {
       	var datacata = JSON.parse(Cotype_request.responseText);	
       	Cogettabledata(datacata);
       	};
       	Cotype_request.send();
       }; 
       function Cogettabledata(datafrom){
       	var datadrop='';
           	for(var i=0; i< datafrom.length; i++){
           		if(datafrom[i].spatial_or_non === "Corporation Project"&&(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
                  	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
                     	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}")){
              		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].cata_gory + '</div></td>'+
              		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].datacl + '</div></td>'+
              		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].folder + '</div></td>'+
              		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].file_gr + '</div></td>'+
              		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].regnam + '</div></td>'+
              		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].basename + '</div></td>'+
              		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].station_name + '</div></td>'+
              		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].name + '</div></td>'+
              		          '<td data-Eco="Dow"> <a href="download?file_id=' 
                    			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
                  			+'&cat_name='+datafrom[i].folder+'">Download</a></td></tr>';
              		}
           	}	
           	var table = document.getElementById("CoVrastar_id");
           	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
           	  if(i>1) {
           	    row = table.rows[i-1];
           	    row.parentNode.removeChild(row);
           	  }
           	}
           	Cocluster.insertAdjacentHTML('beforeend',datadrop);	
           }
        //search by name
        var Cofnamecat=document.getElementById("CoVrastar_id");
       var Coname_request=new XMLHttpRequest();
           document.getElementById("Cof1_name").onchange = function(evnt){
              	var spa_id=evnt.target.value;
              	 if (typeof Coname_request != "undefined"){
              		Coname_request= new XMLHttpRequest();
                       }
                       else if (window.ActiveXObject){
                    	   Coname_request = new ActiveXObject("Microsoft.XMLHTTP");
                       }
                       if (Coname_request == null){
                       alert("Browser does not support XMLHTTP Request")
                       return;
                       }
              	var url1="select_name?name_id="+spa_id;
              	Coname_request.open("POST", url1, true);
              	Coname_request.onload= function () {
              	var datacata = JSON.parse(Coname_request.responseText);	
              	Cogettbyname(datacata);
              	};
              	Coname_request.send();
              };    	   
 
       function Cogettbyname(datafrom){
       	var datadrop='';
           	for(var i=0; i< datafrom.length; i++){
           		if(datafrom[i].spatial_or_non === "Corporation Project"&&(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
                	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
                   	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}")){
            		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].cata_gory + '</div></td>'+
            		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].datacl + '</div></td>'+
            		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].folder + '</div></td>'+
            		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].file_gr + '</div></td>'+
            		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].regnam + '</div></td>'+
            		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].basename + '</div></td>'+
            		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].station_name + '</div></td>'+
            		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].name + '</div></td>'+
            		          '<td data-Eco="Dow"> <a href="download?file_id=' 
                  			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
                			+'&cat_name='+datafrom[i].folder+'">Download</a></td></tr>';
            		}
           	}	
           	var table = document.getElementById("CoVrastar_id");
           	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
           	  if(i>1) {
           	    row = table.rows[i-1];
           	    row.parentNode.removeChild(row);
           	  }
           	}
           	Cofnamecat.insertAdjacentHTML('beforeend',datadrop);	
           } 
        // search by region 
                var Coregion=document.getElementById("CoVrastar_id");
                var Coregion_request=new XMLHttpRequest();
           document.getElementById("Cor_reid").onchange = function(evnt){
              	var reg_id=evnt.target.value;
              	 if (typeof Coregion_request != "undefined"){
              		Coregion_request= new XMLHttpRequest();
                       }
                       else if (window.ActiveXObject){
                    	   Coregion_request = new ActiveXObject("Microsoft.XMLHTTP");
                       }
                       if (Coregion_request == null){
                       alert("Browser does not support XMLHTTP Request")
                       return;
                       }
              	var url1="select_region?region_id="+reg_id;
              	Coregion_request.open("POST", url1, true);
              	Coregion_request.onload= function () {
              	var dataregion = JSON.parse(Coregion_request.responseText);	
              	Cogetbyregion(dataregion);
              	};
              	Coregion_request.send();
              };    	   
       function Cogetbyregion(datafrom){
       	var datadrop='';
           	for(var i=0; i< datafrom.length; i++){
           		if(datafrom[i].spatial_or_non === "Corporation Project"&&(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
               	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
                  	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}")){
           		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].cata_gory + '</div></td>'+
           		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].datacl + '</div></td>'+
           		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].folder + '</div></td>'+
           		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].file_gr + '</div></td>'+
           		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].regnam + '</div></td>'+
           		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].basename + '</div></td>'+
           		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].station_name + '</div></td>'+
           		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].name + '</div></td>'+
           		          '<td data-Eco="Dow"> <a href="download?file_id=' 
                 			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
               			+'&cat_name='+datafrom[i].folder+'">Download</a></td></tr>';
           		}
           	}	
           	var table = document.getElementById("CoVrastar_id");
           	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
           	  if(i>1) {
           	    row = table.rows[i-1];
           	    row.parentNode.removeChild(row);
           	  }
           	}
           	Coregion.insertAdjacentHTML('beforeend',datadrop);	
           }
       // search by basin 
       var Corbasin=document.getElementById("CoVrastar_id");
       var Cobasin_request=new XMLHttpRequest();
  document.getElementById("Cor_baid").onchange = function(evnt){
     	var reg_id=evnt.target.value;
     	 if (typeof Cobasin_request != "undefined"){
     		Cobasin_request= new XMLHttpRequest();
              }
              else if (window.ActiveXObject){
            	  Cobasin_request = new ActiveXObject("Microsoft.XMLHTTP");
              }
              if (Cobasin_request == null){
              alert("Browser does not support XMLHTTP Request")
              return;
              }
     	var url1="select_basin?basin_id="+reg_id;
     	Cobasin_request.open("POST", url1, true);
     	Cobasin_request.onload= function () {
     	var dataregion = JSON.parse(Cobasin_request.responseText);	
     	Coaccess_basin(dataregion);
     	};
     	Cobasin_request.send();
     };    	   
function Coaccess_basin(datafrom){
	var datadrop='';
  	for(var i=0; i< datafrom.length; i++){
  		if(datafrom[i].spatial_or_non === "Corporation Project"&&(datafrom[i].file_ext === "{shp}"||datafrom[i].file_ext === "{xlsx}" ||datafrom[i].file_ext === "{csv}"
          	 || datafrom[i].file_ext === "{docx}" || datafrom[i].file_ext === "{pdf}" || datafrom[i].file_ext === "{png}"||datafrom[i].file_ext === "{tif}"
             	  || datafrom[i].file_ext === "{jpg}" || datafrom[i].file_ext === "{gif}" || datafrom[i].file_ext === "{dwg}")){
      		datadrop+='<tr><td data-Eco="Spa"><div class="long">' + datafrom[i].cata_gory + '</div></td>'+
      		          '<td data-Eco="Cat"><div class="long">' + datafrom[i].datacl + '</div></td>'+
      		          '<td data-Eco="Clu"><div class="long">' + datafrom[i].folder + '</div></td>'+
      		          '<td data-Eco="Reg"><div class="long">' + datafrom[i].file_gr + '</div></td>'+
      		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].regnam + '</div></td>'+
      		          '<td data-Eco="Bas"><div class="long">' + datafrom[i].basename + '</div></td>'+
      		          '<td data-Eco="Yea"><div class="long">' + datafrom[i].station_name + '</div></td>'+
      		          '<td data-Eco="Fil"><div class="long">' + datafrom[i].name + '</div></td>'+
      		          '<td data-Eco="Dow"> <a href="download?file_id=' 
            			+ datafrom[i].name+'&pro_name='+datafrom[i].cata_gory+'&pro_id='+datafrom[i].project_id+'&typ_name='+datafrom[i].datacl
          			+'&cat_name='+datafrom[i].folder+'">Download</a></td></tr>';
      		}
  	}	
  	var table = document.getElementById("CoVrastar_id");
  	for (var i = table.rows.length; i>0 ; i--) {   //iterate through rows
  	  if(i>1) {
  	    row = table.rows[i-1];
  	    row.parentNode.removeChild(row);
  	  }
  	}
  	Corbasin.insertAdjacentHTML('beforeend',datadrop);	
  } 