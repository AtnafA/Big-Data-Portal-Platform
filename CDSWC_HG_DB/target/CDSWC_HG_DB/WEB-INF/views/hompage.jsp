<%@page import="java.util.zip.ZipEntry"%>
<%@page import="java.util.ArrayList"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="java.nio.file.Files"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@page import="net.codejava.fileupload.Reset.RestResponseStatusCode"%>
<%@page import="net.codejava.fileupload.Reset.RestResponseStatus"%>
<%@page import="net.codejava.fileupload.model.File"%>
<%@page import="net.codejava.fileupload.Reset.RestResponse"%>
<%@page import="java.util.List"%>
<%String baseUrl = getServletContext().getInitParameter("BaseUrl");%>
<html>
<head>
<meta name="viewport" http-equiv="Content-Type" content="text/html; charset=UTF-8; width=device-width; initial-scale=1.0"/> 
<link rel="stylesheet" href="dist/tree.css">
<link rel="stylesheet" href="dist/screen_sizesmall_mediacontroll.css">
<link rel="shortcut icon" type="image/png" href="dist/img/log4.jpg"/>
 <%
    @SuppressWarnings("unchecked")
    List<File>reg= (List<File>)request.getAttribute("msg1");
 @SuppressWarnings("unchecked")
 List<File>request_asked= (List<File>)request.getAttribute("msg1");	
 @SuppressWarnings("unchecked")
 List<File>grant_pro= (List<File>)request.getAttribute("gr_pro");	
					 %>					 
<STYLE type="text/css">
td{
white-space: nowrap;
}
.table_ {
white-space: nowrap; 
table-layout: fixed;
left: 0px;
top: 0px;
width: 99.5%;
}
.table_ thead {
text-align: center;
background-color: #28527b;
color: white;
z-index: 2;
}
.table_ thead tr {
  padding-right: 17px;
  box-shadow: 0 4px 6px rgba(0,0,0,.6);
  z-index: 2;
}
.table_ th {
  border-right: 1px solid rgba(0,0,0,.3);
  font-size: 1.5rem;
  font-weight: normal;
}
.table_ tbody {
  display: block;
  min-height: calc(280px + 1 px);
  max-height: 355px;
  /*use calc for fixed ie9 & <*/
  overflow-y:scroll;
  color: #000;
}
.table_ tr{
  display: block;
  overflow: hidden;
}
.table_ tr:nth-child(even) {
  background-color: #A3ADAC;
}
.table_{
border: 1px solid black;
}
.table_ th,.table_ td {
border-right: 1px solid rgba(0,0,0,.3);
border-collapse: collapse;
text-align: left;
padding-right: 6px;
padding-top:6px;
font-size: 13px;
width: 0%;
float:left;
}
.table_ td:nth-child(1),.table_ th:nth-child(1){
width: 20%;
}
.table_ td:nth-child(2),.table_ th:nth-child(2){
width: 7%;
}
.table_ td:nth-child(3),.table_ th:nth-child(3){
width: 9%;
}
.table_ td:nth-child(4),.table_ th:nth-child(4){
width: 8%;
}
.table_ td:nth-child(5),.table_ th:nth-child(5){
width: 13%;
}
.table_ td:nth-child(6),.table_ th:nth-child(6){
width: 7%;
}
.table_ td:nth-child(7),.table_ th:nth-child(7){
width: 7%;
}
.table_ td:nth-child(8),.table_ th:nth-child(8){
width: 6%;
}
.table_ td:nth-child(9),.table_ th:nth-child(9){
width: 3.5%;
}
.table_ td:nth-child(10),.table_ th:nth-child(10){
width: 4.5%;
}
.long{
  display: inline-block;
  position: relative;
  width: 99%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.long:hover {
   z-index: 1;
  width: auto;
  background-color: #FFFFCC;

}  
.table_div{
	margin-left: 1.5%;
    margin-top: -1.37%;
	}	
		.error1 {
    padding: 1px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #a94442;
    border-color: #ebccd1;
    margin-left:10%;
    width: 50%;
}

.msg1 {
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #d9edf7;
    border-color: #bce8f1;
    margin-left:10%;
    width: 60%;
}
.existes {
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: black;
    background-color: #d9edf7;
    border-color: #bce8f1;
    margin-left:10%;
    width: 60%;
}
	form {
  width: 60%;
  border: 3px solid #f1f1f1;
  margin-left: -0.5%;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: center;
}
	
</STYLE>
<script type="text/javascript">  
var data="Drowing Data";
var datarsa="Spatial (shape) files";
var ltr="Laboratory Test Result";
var Othes_="Other files Except project reports";
var zip_Alert="ZIP Files";
var point_cloud="Point Cloud Data";
var timeSeries="Time Series data";
var report_doc="Project Report";
var dataraster="Raster Files";
var allowEx=[".shp",".shx",".dbf",".sbn",".sbx",".prj",".CPG",".xml",".atx",".fbn",".fbx",".ain",".ixs",".mxs",".aih"];
var rexp= new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+allowEx.join('|')+")$");
var vector=["{.shp}","{.shx}","{.dbf}"];
var atleast=[".shp", ".shx",".dbf"];
var ZIp_file=[".zip"];
var point_cl=[".LAS",".LAZ",".LASX",".las",".laz",".lasx"];
var PCD_rexpre=new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+point_cl.join('|')+")$");
var atleast_exp= new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+atleast.join('|')+")$");
var zip_rexpre=new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+ZIp_file.join('|')+")$");
var all_timeseries=[".xlsx", ".csv","docx"];
var rexpr_timeseries= new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+all_timeseries.join('|')+")$");
var all_timeS=["{.xlsx}", "{.csv}","{.docx}"];
var allowRas=[".tif", ".tfw", ".prj",".img",".asc",".tiff",".ovr",".rst",".rdc",".shp.xml",".aux"];
var rexpras= new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+allowRas.join('|')+")$");
var allowdr=[".dwg", ".dxf", ".dwt",".dws"];
var rexpdr= new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+allowdr.join('|')+")$");
var darwing=["{.dwg}","{.dxf}","{.dwt}","{.dws}"];
var all_ltr=[".xlsx", ".csv",".docx",".pdf",".png",".jpg",".gif"];
var rexpr_ltr= new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+all_ltr.join('|')+")$");
var all_ltrcon=["{.xlsx}", "{.csv}","{.docx}","{.pdf}"];
var all_ltrcon2=["{.png}","{.jpg}","{.gif}"];
var all_other=[".xlsx", ".csv",".png",".jpg",".gif"];
var rexpr_others= new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+all_other.join('|')+")$");
var all_other1=["{xlsx}","{csv}","{png}","{jpg}","{gif}"];
//for project report
var pro_repo=[".pdf",".docx"]
var pro_validator=new RegExp("([a-zA-Z0-9\S_\\.\-:])+("+pro_repo.join('|')+")$")
var val_popup_proreport=["{.pdf}","{.docx}"]
function checkproform(check_pro){
	if(mform1.indrfile.files.length===0 && mform1.inffile.files.length===0){
		alert("Please: Upload Project Documents.... ");
		return false;
		}
	if(mform1.indrfile.files.length != 0){
		for(var i=0;i<mform1.indrfile.files.length;i++){
			if(!pro_validator.test(mform1.indrfile.files.item(i).name)){	
		alert("Note: Documents with file types <<"+ val_popup_proreport.join(' or, ') +">> is Allowed to Upload!!")
							return false;
				}
			}
		if(mform1.in_dr.checked == false){
			alert("Check List for Draft Document is Not Checked! Please, check It before uploading the file ");
			mform1.in_dr.focus();
			return false;
			}
	}
	if(mform1.inffile.files.length != 0){
		for(var i=0;i<mform1.inffile.files.length;i++){
			if(!pro_validator.test(mform1.inffile.files.item(i).name)){	
				alert("Note: Documents with file types <<"+ val_popup_proreport.join(' or ') +">> is Allowed to Upload!!")
			return false;
				}
			}
		if(mform1.in_fn.checked == false){
			alert("Check List for Final Document is Not Checked! Please, check It before uploading the file ");
			mform1.in_fn.focus();
			return false;
			}
	}
		if(mform1.in_dr.checked == true){
			if(mform1.indrfile.files.length===0){
				alert("Please: Upload file for Draft Documents")
				return false;	
			}
		}
		 if(mform1.in_fn.checked == true){
	     if(mform1.inffile.files.length===0){
	 alert("Please: Upload files for Final Documents");
				return false;		
			}
		 }
	if(mform1.fcenter.selectedIndex == 0){
		alert("Center is not Selected ! Please Select Center");
		return false;
		}
	if(document.getElementById('fprocess').selectedIndex == 0){
		alert("Process is not Selected ! Please Select Process");
		return false;
		}
	if(document.getElementById('drfin_fid').selectedIndex == 0){
		alert("Create Project Name OR Select the Project name!!");
		return false;
		}
	if((document.getElementById('ds_fid').selectedIndex == 0)&& (document.getElementById('super_desi').selectedIndex == 0)){
		alert("Please: Select OR Create the Supervision or the Design!!");
		return false;
		}
	if((document.getElementById('br_fid').selectedIndex == 0)&& (document.getElementById('super_default').selectedIndex == 0)){
		alert("Please: Select OR Create Sub Branches of Supervision or Design!!");
		return false;
		}
	return true;
}
function chechform(check_){
	if((mform.file.files.length === 0) && (mform.file1.files.length === 0) && (mform.file2.files.length === 0) && 
			(mform.file3.files.length === 0) && (mform.file4.files.length === 0)&&(mform.file5.files.length === 0)
			&&(mform.file6.files.length === 0)&&(mform.file7.files.length === 0)){
	alert("Upload atleast one of File types from File source.... ");
	return false;
	}
	if(mform.file1.files.length != 0){
		for(var i=0;i<mform.file.files.length;i++){
			if(!rexpdr.test(mform.file1.files.item(i).name)){	
		alert("Note: You can only Upload AutoCAD drawing files; Such as <<"+ darwing.join(' or ') +">> file types for "+data)
			//alert("Note: You can only Upload: <<"+ vector.join(', ') +">> file and Its Supportive file Types for "+datarsa)
				return false;
				}
			}
		if(mform.log2.checked == false){
			alert("Check List for Drawing Data is Not Checked! Please, check It before uploading your file ");
			mform.file1.focus();
			return false;
			}
		
	}
	if(mform.file.files.length!=0){
		for(var i=0;i<mform.file.files.length;i++){
		if(!rexp.test(mform.file.files.item(i).name)){	
		alert("Note: You can only Upload Shape files Such as: <<"+ vector.join(' or ') +">> file types and Its Supportive file Types for "+datarsa)
			return false;
			}
		}
		if(mform.log1.checked == false){
			alert("Check List for Shape file is Not Checked! Please, check It before uploading file ");
			mform.file.focus();
			return false;	
		}
	}
	if(mform.file4.files.length!=0){
		for(var i=0;i<mform.file4.files.length;i++){
		if(!rexpras.test(mform.file4.files.item(i).name)){	
		alert("Note: You can only Upload Raster files Such as: <<"+ allowRas.join(' or ') +">> file types and Its Supportive file Types for "+dataraster)
			return false;
			}
		}
		if(mform.log5.checked == false){
			alert("Check List for Raster file is Not Checked! Please, check It before uploading file ");
			mform.file4.focus();
			return false;	
		}
	}
	if(mform.file2.files.length != 0){
		for(var i=0;i<mform.file2.files.length;i++){
			if(!rexpr_ltr.test(check_.file2.files.item(i).name)){	
alert("Note: You can only Upload files like <<"+ all_ltrcon.join(' or ') +">> file Types OR Scanned Documents like <<"+all_ltrcon2.join(' or ')+">>  for "+ltr);
				return false;
				}
			}
		if(mform.log3.checked == false){
			alert("Check List for Laboratory Test Result(LTR) is Not Checked! Please, check It before uploading your file ");
			mform.file2.focus();
			return false;
			}
	}
	if(mform.file3.files.length != 0){
		for(var i=0;i<mform.file3.files.length;i++){
			if(!rexpr_others.test(mform.file3.files.item(i).name)){	
				alert("Note: You don't have to Upload Project report Here. You can Upload files types Such as <<"+all_other1.join('  or ')+">> for "+Othes_)				
				return false;
				}
			}
		if(mform.log4.checked == false){
			alert("Check List for Others Files is Not Checked! Please, check It before uploading your file ");
			mform.file3.focus();
			return false;
		}
	}
	
	if(mform.file7.files.length != 0){
		for(var i=0;i<mform.file7.files.length;i++){
			if(!PCD_rexpre.test(mform.file7.files.item(i).name)){	
				alert("Note: You can Upload files types Such as <<"+point_cl.join('  or, ')+">> for "+point_cloud)				
				return false;
				}
			}
		if(mform.log8.checked == false){
			alert("Check List for GPS or TS is Not Checked! Please, check It before uploading your file ");
			mform.file7.focus();
			return false;
		}
	}
	
	if(mform.file6.files.length != 0){
		for(var i=0;i<mform.file6.files.length;i++){
			if(!zip_rexpre.test(mform.file6.files.item(i).name)){	
				alert("Note: You can Upload files types Such as <<"+ZIp_file.join('  or, ')+">> for "+zip_Alert)				
				return false;
				}
			}
		if(mform.log7.checked == false){
			alert("Check List for GPS or TS Files is Not Checked! Please, Make it Checked before uploading your file ");
			mform.file6.focus();
			return false;
		}
	}
	
	if(mform.file5.files.length != 0){
		for(var i=0;i<mform.file5.files.length;i++){
			if(!rexpr_timeseries.test(mform.file5.files.item(i).name)){	
				alert("Note: You can Upload data types like "+all_timeS.join(' or, ')+" for "+timeSeries)				
				return false;
				}
			}
		if(mform.log6.checked == false){
			alert("Check List for Time Series data is Not Checked! Please, check It before uploading file ");
			mform.file5.focus();
			return false;
		}
	}
	if(document.getElementById('f_id').selectedIndex == 0){
		alert("Project Name is not Selected Or Created ! Please Select from Project name or Use Add New Option....");
		return false;
		}
	if((document.getElementById('Inv_id').selectedIndex == 0)&& (document.getElementById('DTGHM').selectedIndex == 0)){
		alert("Data type is not Selected Or Created ! Please Select from the Listed name or Use Add New Option....");
		return false;
		}
	if((document.getElementById('sub_id').selectedIndex == 0)){
		alert("Branch Name is not Selected Or Created ! Please Select from the Listed name or Use Add New Option....");
		return false;
		}
	if(document.mform.U_id.vlue == ""){
		alert("Dont clear User Id number");
		return false;
		}
	for(var i=0;i<mform.log.length;i++){
	if(mform.log2.checked == true){
		if(!rexpdr.test(mform.file1.value.toLowerCase())){
			alert("Note: You can only Upload AutoCAD drawing files; Such as <<"+ darwing.join(' or, ') +">> file types for "+data)
			return false;	
		}
	}
	 if(mform.log1.checked == true){
		if(!rexp.test(mform.file.value.toLowerCase())){
			alert("Please: Upload Shape files like <<"+ vector.join(', ') +">> file types and Its Supportive file for "+datarsa)
			return false;	
		}
		if(mform.file.files.length<3){
			alert("Note: You can Upload atleast three file types such as: <<"+ vector.join(', ') +">> for the "+datarsa)
			return false;		
		}
		if(mform.file.files.length==3){
			var files_=document.getElementById("file");
			for(var i1=0;i1<files_.files.length;i1++){
		if(!atleast_exp.test(files_.files.item(i1).name)){
				 alert("Note: You can Upload Shape files and Must include Its Supportive files such as: <<"+ vector.join(', ') +">> file Types for the "+datarsa)
						return false;
					}
			}
	}
	}
	 if(mform.log5.checked == true){
	     if(!rexpras.test(mform.file4.value.toLowerCase())){
	 alert("Please: Upload Documents for "+dataraster);
				return false;		
			}
		 }
	 if(mform.log3.checked == true){
     if(!rexpr_ltr.test(mform.file2.value.toLowerCase())){
 alert("Please: Upload Documents for "+ltr);
			return false;		
		}
	 }
	 
	 if(mform.log8.checked == true){
	     if(!PCD_rexpre.test(mform.file7.value.toLowerCase())){
	 alert("Please: Upload Documents for "+point_cloud);
				return false;		
			}
		 }
	 
	 if(mform.log4.checked == true){
	    if(mform.file3.files.length==0){
		        alert("Please:Upload Documents for "+Othes_)
					return false;	
				}
		 }
	 if(mform.log6.checked == true){
		    if(mform.file5.files.length==0){
			        alert("Please:Upload Documents for "+timeSeries)
						return false;	
					}
		    var validate_array=document.getElementById("st_name");
			var stno=document.getElementById("st_no").value;
				if(validate_array.value.split(",").length!=stno){
					alert("The Number of Station Name, and Station Number is not Equivalent !! Please make them Equivalent.")
					return false;	
				}
			 }
	 if(mform.log7.checked == true){
		    if(mform.file6.files.length==0){
			        alert("Please:Upload Documents for "+zip_Alert)
						return false;	
					}
			if(mform.TS_data.checked == false && mform.gps_data.checked==false){
				alert("Please Make One from GPS data Check List Or Total Station data Check List is Checked!");
				return false;
			}
			if(mform.TS_data.checked == true & mform.gps_data.checked==true){
				alert("Note: Only One from GPS data Check List Or Total Station Data Check List is Checked! But not Both!");
				return false;
			}
			 }
	 
	}
		if(document.getElementById('fsource').selectedIndex == 0){
			if(confirm("If you Click Ok, Your Upload will be without Region")){
				return true;
				}
			else{
				return false;	
			}
			return false;
			}
		if(document.getElementById('basinN').selectedIndex == 0){
			if(confirm("If you Click Ok, Your Upload will be without Basin defintion")){
				return true;
				}
			else{
				return false;	
			}
			return false;
			}
	   return (true);
	}
function winOpen(url,title,w,h)
{
	 var left = (w/2)-185;
	  var top = (h/2)-40;
       window.open(url,title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', '+
    		   'height='+h+', left='+left+', top='+top);
}
/*Create text inpute for Basin*/
function showBefield(name){
	  if(name=='1')document.getElementById('div3').innerHTML='Add Basin: <input type="text" name="other2" style="width: 201px;'
	  +'height: 25px;" required minlength="5" maxlength="30"/> <span class="validity"></span>';
	  else document.getElementById('div3').innerHTML='';
	}
/*Create text inpute for process*/
function showprofield(name){
	  if(name=='1')document.getElementById('div5').innerHTML='Process Name: <input type="text" name="other4" style="width: 190px;'
	  +'height: 25px;" required minlength="5" maxlength="30"/> <span class="validity"></span>';
	  else document.getElementById('div5').innerHTML='';
	}
/*Create text inpute for Basin*/
function showproIdfield(name){
	  if(name=='1')document.getElementById('div8').innerHTML='Project ID: <input type="text" name="u_proid" style="width: 190px;'
	  +'height: 25px;" required minlength="5" maxlength="30"/> <span class="validity"></span>';
	  else document.getElementById('div8').innerHTML='';
	}
function showusergroup(name){
	 if(name=='1')document.getElementById('divU').innerHTML='Project Group: <input type="text" name="u_group" style="width: 190px;'
		  +'height: 25px;" required minlength="5" maxlength="30"/> <span class="validity"></span>';
		  else document.getElementById('divU').innerHTML='';
		}
 </script>    
<title>Home page</title>
</head>
<body>
    <nav class="titbarnav">
    <ul>
    <li> <a href="#">About Us</a> </li>
     <li> <a href="#">Contact</a> </li>
      <li id="c_logout"> <a href="#">Accounts</a> 
      <div id="dis_logout" style="display: none;float: right; ">
      <ul>
      <li><a href="<c:url value="/logout" />">Logout</a></li>
      </ul>
      </div> 
      </li>
    </ul>
	</nav>
	<%int choice= (Integer)session.getAttribute("U_id1"); %>
<h4 style="white-space: nowrap;"><%= session.getAttribute("U_auto")%>: Elite User</h4>
<div class="content">
     <ul class="tree" id="myUL">
     <li> 
  <span style="font: bold;">ECDSWC dKMS</span>
<ul>
      <li><a> File Upload</a>
         <ul>
           <li style="font-size: 16px;"> <a>Raw Data</a>
           <div class="dy_change">
            <ul>  
                 <li id="gtech_id"><a data-li="geo_tech" href="#">Add Project Data </a></li>
                 <li id=""><a data-li="" href="#">Laboratory Data </a></li>
                </ul></div>
                 </li>
                  <li style="font-size: 16px;"><a>Processed Data</a>
                   <ul> 
                   <li><a href="#">Project Data</a></li>
                   <li><span class=""><a href="#">Laboratory Data</a></span>
                   <ul class="nested">
                           <li style="font-size: 14.5px;"><span class="caret"><a>Miscellaneous Data</a> </span>
                        <ul class="nested" id="list">
                 <li><a><i> Not Ready</i></a></li>
                 </ul> 
                  </li>        
              <li style="font-size: 14.5px;"><span class="caret"><a>Data from Field</a> </span>
                        <ul class="nested" id="list">
                 <li><a><i>Not Ready</i> </a></li>
                 </ul> 
                          </li> 
                   </ul>
                   </li>
            
               </ul>
                 </li>
                <li style="font-size: 16px;"><a>Other Documents</a>
                     <ul> 
                 <li style="font-size: 15px;"> <span class="caret"><a>Books </a></span>
                 <ul class="nested">
                 <li style="font-size: 14.5px;"><span class="caret"><a>Text Book</a></span>
                 <div class="dy_change">
                 <ul class="nested">
                 <li><a href="#" onclick= "winOpen('uploadF?action=Geological Data&vaal=Text Book','web',950,340);"><i>Geological data</i> </a></li>
                 <li><a href="#"  onclick= "winOpen('uploadF?action=Hydrological Data&vaal=Text Book','web',950,340);"><i>Hydrological data</i> </a></li>
                 <li><a href="#"  onclick= "winOpen('uploadF?action=Geotechnical Data&vaal=Text Book','web',950,340);"><i>Geotechnical data</i> </a></li>
                 <li><a href="#"  onclick= "winOpen('uploadF?action=Metrological Data&vaal=Text Book','web',950,340);"><i>Metrological data</i> </a></li>
                 </ul>
                 </div>
                 </li>
                  <li style="font-size: 14.5px;"><span class="caret"><a>Reference</a></span>
                 <div class="dy_change">
                 <ul class="nested">
                 <li><a href="#" onclick= "winOpen('uploadF?action=Geological Data&vaal=Reference','web',950,340);">
                 <i>Geological data</i></a></li>
                 <li><a href="#" onclick= "winOpen('uploadF?action=Hydrological Data&vaal=Reference','web',950,340);">
                 <i>Hydrological data</i></a></li>
                 <li><a href="#" onclick= "winOpen('uploadF?action=Geotechnical Data&vaal=Reference','web',950,340);">
                 <i>Geotechnical data</i></a></li>
                 <li><a href="#" onclick= "winOpen('uploadF?action=Metrological Data&vaal=Reference','web',950,340);">
                 <i>Metrological data</i></a></li>
                 </ul>
                 </div>
                 </li>
                 </ul>
                 </li>
                 <li style="font-size: 15px;" id="pro_repo_id">
                 <div class="dy_change"><a data-li="pro_report" href="#">Add Project Report</a></div>
                 </li>
                
                </ul>
                </li>
                </ul> 
                </li>
           <li><a>Manage Repository</a>
           <div class="dy_change">
           <ul>
           <li id="grant_pro" style="font-size: 16px;"><a data-li= "grant_proj" href="#">Grant Project</a></li>
           <li id="mange_rawdata" style="font-size: 16px;"><a data-li= "corpo_data" href="#">Manage Raw Data</a></li>
           <li id="mange_otherdoc" style="font-size: 16px;"><a data-li= "spa_data" class="active_li" href="#">Manage Project Reports</a></li>  
           </ul>
           </div>
           </li>
           
           </ul>
 <a data-li="return_error" href="#"><i></i> </a>
 <a data-li="return_result" href="#"><i></i> </a>
     </li>
          </ul> 
</div>
          <div class="main-content">
         <div class="table_div item_li spa_data" style="display: none;">
       <p style="text-align: center;margin-top: 1.5%; margin-bottom: -0.5%; font-weight: bold; font-size: 17px;">Manage Project Reports</p>
    <input type="search" id="bf1_name" name="bf1_name" placeholder="Search by File name" style="width: 200px; 
    height:25px; border-bottom-color:gray; position: relative; float: right; margin-top: 2%; margin-right: 0.5%;" 
            class="form-control"/>  
             <input type="text" id="hold_project_filename" value="" style="display: none;">
             <input type="text" id="user_idpro" name="user_idpro" value="<%=choice%>" style="height: 25px; display: none;" />
           <table id="projectData_id" class="table_ tab_projectr">
           <thead>
           <tr>
           <th style="width: 9%;">
        <select class="form-control dropdown_size" name="selCo_id" id="selCo_id">
        <option class="option_css" value="0">Process</option>
        </select> 
        </th>
       <th style="width: 18%;">
       <select class="form-control dropdown_size" name="clCo_id" id="clCo_id">
          <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th>Project Id</th>
        <th>
       <select class="form-control dropdown_size" name="dset_id" id="dset_id">
          <option class="option_css" value="0">Design/Supervision(DS)</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="Cor_cat_id" id="Cor_cat_id">
          <option class="option_css" value="0">Branch of DS</option>
        </select>
        </th>
        <th>Draft Final</th>
        <th>File Name</th>
        <th>Date</th>
        <th>Delete</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>	
           </tbody>
           </table>
            </div>
           <div class="table_div item_li corpo_data" style="display: none;">
       <p style="text-align: center;margin-top: 1.5%; margin-bottom: -0.5%; font-weight: bold; font-size: 17px;">Manage Projects Raw Data</p>
    <input type="search" id="bf1_name" name="bf1_name" placeholder="Search by File name" style="width: 200px; 
    height:25px; border-bottom-color:gray; position: relative; float: right; margin-top: 2%; margin-right: 0.5%;" 
            class="form-control"/>  
            <input type="text" id="user_id" name="user_id" value="<%=choice%>" style="height: 25px; display: none;" />
            <input type="text" id="hold_filename" value="" style="display: none;">
            <table id="accessby_userId" class="table_ tab_projectr">
           <thead>
           <tr>
       <th>
       <select class="form-control dropdown_size" name="clCo_id" id="clCo_id">
          <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
         <th>
        <select class="form-control dropdown_size" name="selCo_id" id="selCo_id">
        <option class="option_css" value="0">Thematic Area</option>
        </select> 
        </th>
        <th>
        <select class="form-control dropdown_size" name="Cor_cat_id" id="Cor_cat_id">
          <option class="option_css" value="0">Class</option>
        </select>
        </th>
        <th>Dataset</th>
        <th>File Name</th>
        <th>Region</th>
        <th>Basin</th>
        <th>Date</th>
        <th>Delete</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>
           </tbody>
           </table>
            </div> 
        <div class="table_div item_li grant_proj" style="display: none;">
       <p style="text-align: center;margin-top: 1.5%; margin-bottom: -0.5%; font-weight: bold; font-size: 17px;">Grant Project</p>
            <input type="text" id="user_id" name="user_id" value="<%=choice%>" style="height: 25px; display: none;" />
            <input type="text" id="hold_filename" value="" style="display: none;"> 
 <table style="width: 100%; text-align: center; white-space: nowrap; table-layout: fixed;" border="0">
<tr style="background-color: white;">
<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 20%;border-right:none; border-collapse:separate;">Center:</td>
<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 70%; border-right:none; border-collapse:separate;">
<select id="center_id" name="center_id" class="form-control" style="width: 280px; height: 20%;">
<option value="0">-----------------------Select Center-------------------</option>
<% 
		if(grant_pro!=null){
	      for(File files:grant_pro){
	         %>
		<option value="<%=files.regnam%>"><%=files.regnam%></option>
		<% }}%>
</select></td>
</tr>
<tr style="background-color: white;">
		<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 20%; border-right:none; border-collapse:separate;">Processes:</td>
		<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px;width: 70%; border-right:none; border-collapse:separate;">
				<select id="process_id" name="process_id" class="form-control" style="width: 280px; height: 25px;"
				onchange="showprofield(this.options[this.selectedIndex].value);">
	<option value="0" style="font-weight: bold;">-----------------------Select Process---------------------</option>
					</select>
				</td>
				</tr>
				<tr style="background-color: white;">
		<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 20%; border-right:none; border-collapse:separate;">User Name:</td>
		<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px;width: 70%; border-right:none; border-collapse:separate;">
				<select id="User_togrant" name="User_togrant" class="form-control" style="width: 280px; height: 25px;"
				onchange="showprofield(this.options[this.selectedIndex].value);">
	<option value="0" style="font-weight: bold;">-----------------------Select User---------------------</option>
					</select>
				</td>
				</tr>
				<tr style="background-color: white;">
					<td class="td" style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width:20%; border-right:none; border-collapse:separate;">Project Name:</td>
					<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 70%; border-right:none; border-collapse:separate;">
				<select id="pro_name7" name="pro_name7" class="form-control" style="width: 280px; height: 25px;">
	<option value="0" style="font-weight: bold;">-----------------------Select Name-------------------------</option>
					</select>
					</td>
				</tr>
             </table>
             <input type="submit" id="fire_button_id" value="Submit" style="text-align: center;margin-left: 30%;color: blue;font-size: 20px;">
             <div id="response_id" style="text-align: center;font-size: 18px;"></div>
            </div>
            
            <div class="table_div item_li geo_tech" style="display: none;">
            <p style="text-align: center;margin-top: 1.5%; margin-bottom:-1.0%; margin-left:-32%; font-weight: bold; font-size: 17px;">
              Add Project's Raw Data </p>
              		<form method="post" action="Upload" enctype="multipart/form-data"
			name="mform" onsubmit="return(chechform(this));">
			 <input id="action" name="action" type="text" value="Geotechnical" style="display: none;">
             <input id="vaal" name="vaal" type="text" value="Corporation Project" style="display: none;">
              <input id="Na" name="Na" type="text" value="Defualt" style="display: none;">
               <input id="u_id" name="u_id" type="text" value="<%=choice%>" style="display: none;">
			<div class="formup">
			<table border="0" class="xxxx">
			 <tr>
					<td class="td" style="white-space: nowrap;">Project Detail(<span  style="color:red;"> *</span>):</td>
					<td style="white-space: nowrap;"><select id="f_id" name="f_id" class="form-control" style="width: 280px; height: 25px;">
					<option value="0" style="font-weight: bold;">-------Select Project or Add New Project------</option>
					<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>
					</select>
						<div id="div1"></div>
						<div id="Id_div"></div>
						<div id="pr_sit"></div>
						<div id="pr_client"></div>
						</td>
				</tr>
				<tr>
					<td class="td" style="white-space: nowrap;"> Thematic Area(<span  style="color:red;"> *</span>):</td>
					<td><select id="Inv_id" name="Inv_id" class="form-control" style="width: 280px; height: 25px;"
						onchange="showfieldInv(this.options[this.selectedIndex].value)">
						<option value="0" style="font-weight: bold;">------- Select Data Type------</option>
				     </select>
						<div id="Inv1"></div>
						<select style="display: none;" id="DTGHM" name="DTGHM" class="form-control">
						<option value="0" style="font-weight: bold;">------- Select Data Type------</option>
						</select>
						</td>
				</tr>
				<tr>
					<td class="td" style="white-space: nowrap;"> Classes(<span  style="color:red;"> *</span>):</td>
					<td><select id="sub_id" name="sub_name" class="form-control" style="width: 280px; height: 25px;">
					<option value="0" style="font-weight: bold;">-------Select Sub Branch or Add New Sub Branch------</option>
					</select>
						<select style="display: none;" id="Sub_default" name="default_sub_name" class="form-control">
						<option value="0" style="font-weight: bold;">------- Select Data types Sub Branch ------</option>
						</select>
						<div id="subv1"></div>
						</td>
						
				</tr>
				<tr>
					<td class="td" id="control_check" style="white-space: nowrap;">Data Types(<span  style="color:red;"> *</span>):</td>
					<td style="width: 180px; white-space: nowrap;"><input type="checkbox" id="log1" name="log" value="shape file"/> <span style="margin-left: 0.0em;"> Vector (Shape) Files: </span>
					<input type="file" name="fileupload" multiple="multiple" id="file" /></td>
					</tr>
					<tr>
					<td class="td"></td>
					<td style="white-space: nowrap;"><input type="checkbox" id="log5" name="log" value="Raster file"/> <span style="margin-left: 3.4em;"> Raster Files: </span><input type="file" name="fileupload4" multiple="multiple" id="file4" /></td>
				</tr>
				<tr>
					<td class="td"></td>
					<td style="white-space: nowrap;"><input type="checkbox" id="log2" name="log" value="Drawing Files"/><span style="margin-left: 2.5em;"> Drawing Files: </span><input type="file" name="fileupload1" multiple="multiple" id="file1" /></td>
				</tr>
				<tr>
					<td class="td"></td>
					<td style="white-space: nowrap;"><input type="checkbox" id="log8" name="log" value="Point Cloud Files"/><span style="margin-left: 1.2em;"> Point Cloud Data: </span><input type="file" name="fileupload7" multiple="multiple" id="file7" /></td>
				</tr>
				<tr>
				<td class="td"></td>
				<td style="white-space: nowrap;"><input type="checkbox" id="log7" name="log" value="GPS and O_tools" onclick="Gps_checkbx(this)"/> <span style="margin-left: 1.7em;"> GPS or TS Data: </span><input type="file" name="fileupload6" multiple="multiple" id="file6" />
				<div id="GPS_file"></div>
				<div id="TS_file"></div>
				</td>
				</tr>
				
				<tr>
					<td class="td"></td>
					<td style="white-space: nowrap;"><input type="checkbox" id="log6" name="log" value="Time Series Data" onclick="get_check(this)"/><span style="margin-left: 3.4em;"> Time Series: </span><input type="file" name="fileupload5" multiple="multiple" id="file5" />
					<div id="no_station"></div>
					<div id="name_station"></div>
					</td>
				</tr>
				
				<tr>
					<td class="td"></td>
					<td style="white-space: nowrap;"><input type="checkbox" id="log3" name="log" value="Laboratory Test Result"/><span style="margin-left: 2.5em;"> Lab.test result: </span><input type="file" name="fileupload2" multiple="multiple" id="file2" /></td>
				</tr>
				<tr>
					<td class="td"></td>
					<td style="white-space: nowrap;"><input type="checkbox" id="log4" name="log" value="other file"/> <span style="margin-left: 5.6em;"> Others: </span><input type="file" name="fileupload3" multiple="multiple" id="file3" /></td>
				</tr>
				<tr>
					<td class="td">Region:</td>
					<td>
					<select id="fsource" name="fsource" class="form-control" style="width: 280px; height: 25px;">
							<option value="0" style="font-weight: bold;">-----Select Region or Add New Region------</option>
							<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>
					</select>
					<div id="divpRname"></div>
					</td>
				</tr>
				<tr>
					<td class="td">Basin:</td>
					<td>
					<select id="basinN" name="basinN" class="form-control" style="width: 280px; height: 25px;"
						onchange="showBefield(this.options[this.selectedIndex].value)">
							<option value="0" style="font-weight: bold;">-------Select Basin or Add New Basin-------</option>
							<option value="1" style="font-weight: bolder;">-----------------( Add new )-----------------</option>
					</select>
						<div id="div3"></div>
					</td>

				</tr>
				<tr style="display:none;">
					<td class="td">Prepared by:</td>
					<td><input type="text" id="U_id" name="U_id" value="<%=choice%>" style="height: 25px;" /></td>
				</tr>
				<tr>
				<td></td>
	<td class="td"><input id="reset" type="reset" style="height: 20px; width: 100px; margin-left: 0px; margin-top: 2px;"/>
     <input type="submit" value="Upload"
       style="height: 20px; width: 100px; margin-left: 5px;"id="click_me"/></td>
				</tr>
			</table>
			</div>
		 </form>
            </div>
              <div class="table_div item_li pro_report" style="display: none;">
              <p style="text-align: center;margin-top: 1.5%;margin-left:-32%; margin-bottom:-1.0%;font-weight: bold; font-size: 17px;">
              Add Project's Report </p>
             <form method="post" action="Upload" enctype="multipart/form-data"
			name="mform1" onsubmit="return(checkproform(this));">
			<input id="action1" name="action1" type="text" value="Geotechnical" style="display: none;">
             <input id="vaal" name="vaal" type="text" value="Corporation Project" style="display: none;">
              <input id="Na1" name="Na1" type="text" value="Defualt" style="display: none;">
              <input id="u_id" name="u_id" type="text" value="<%=choice%>" style="display: none;">
			<div class="formup">
			<table border="0" align="center" class="xxxx">
				<tr>
				<td>Sector/Center(<span  style="color:red;"> *</span>):</td>
				<td>
				<select id="fcenter" name="fcenter" class="form-control" style="width: 280px; height: 25px;">
				<option value="0" style="font-weight: bold;">--------------------Select Center----------------------</option>
					</select>
				</td>
				</tr>
				<tr>
				<td>Processes(<span  style="color:red;"> *</span>):</td>
				<td>
				<select id="fprocess" name="fprocess" class="form-control" style="width: 280px; height: 25px;"
				onchange="showprofield(this.options[this.selectedIndex].value);">
				<option value="0" style="font-weight: bold;">-----Select Process or Use Add New option---------</option>
				<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>
					</select>
						<div id="div5"></div>
				</td>
				</tr>
				<tr>
					<td class="td">Project Detail(<span  style="color:red;"> *</span>):</td>
					<td>
				<select id="drfin_fid" name="drfin_fid" class="form-control" style="width: 280px; height: 25px;">
			<option value="0" style="font-weight: bold;">-------Select Project or Add New Project------</option>
			<option value="1" style="font-weight: bolder;">-----------------( Add New )-----------------</option>
					</select>
					    <div id="div_pro"></div>
						<div id="Id_pro"></div>
						<div id="div_psite"></div>
						<div id="div_pclient"></div>
					</td>
				</tr>
				<tr>
					<td class="td">Design/Supervision(DS)(<span  style="color:red;"> *</span>):</td>
					<td style="white-space: nowrap;">
				<select id="ds_fid" name="ds_fid" class="form-control" style="width: 280px; height: 25px;">
			<option value="0" style="font-weight: bold;">-----Select Name or Use Add New option--------</option>
					</select>
					<div id="add_des_sup"></div>
						<select style="display: none;" id="super_desi" name="super_desi" class="form-control">
						<option value="0" style="font-weight: bold;">------- Select Data Type------</option>
						</select>
					</td>
				</tr>
				<tr>
					<td class="td">DS Branches(<span  style="color:red;"> *</span>):</td>
					<td style="white-space: nowrap;">
				<select id="br_fid" name="br_def" class="form-control" style="width: 280px; height: 25px;">
			<option value="0" style="font-weight: bold;">-----Select Name or Use Add New option--------</option>
					</select>
					<select style="display: none;" id="super_default" name="br_id_defualt" class="form-control">
						<option value="0" style="font-weight: bold;">------- Select Data Types Sub Branch------</option>
						</select>
					 <div id="Branchname" style="width:280px;"></div>
					</td>
				</tr>
               <tr>
					<td class="td" id="control_check">Document Available(<span  style="color:red;"> *</span>): </td>
					<td style="white-space: nowrap;"><input type="checkbox" id="in_dr" name="log" value="Draft"/>
					<span style="margin-left: 0.0em;"> Draft: </span>
					<input type="file" name="fileuploaddr" multiple="multiple" id="indrfile" /></td>
				</tr>
				<tr>
					<td class="td"></td>
					<td style="white-space: nowrap;"><input type="checkbox" id="in_fn" name="log" value="Final"/> 
					<span style="margin-left: 0.0em;"> Final: </span>
					<input type="file" name="fileuploadfin" multiple="multiple" id="inffile" /></td>
				</tr>
				<tr>
				<td>Prepared Date:</td>
				<td> <input type="date" id="start" name="pr_date" value="2018-07-22" min="1980-01-01" max="2050-12-31"></td>
				</tr>
				<tr style="display: none;">
					<td class="td">Prepared by:</td>
					<td><input type="text" id="U_id" name="U_id" value="<%=choice%>" style="height: 25px;" /></td>
				</tr>
				<tr>
				<td></td>
					<td class="td"><input id="reset" type="reset" style="height: 20px; width: 100px; margin-left: 0px; margin-top: 2px;"/>
					<input type="submit" value="Upload" style="height: 20px; width: 100px; margin-left: 5px;"/></td>
				</tr>
			</table>
			</div>
		</form>
            </div>
             <%
            String return_rpo="";
             String defualt_vaalue="";
 	 if(reg!=null){
 		 for(File getfile:reg){
 			 if(getfile.regid!=0 && getfile.filenameid==0){
 		 return_rpo+=" "+getfile.regnam+",  ";
 		 defualt_vaalue="Is Already in Data Repository !!";	
 			 }
 			 else if(getfile.filenameid!=0){
 				return_rpo+=""+getfile.name+" "; 
 				defualt_vaalue="Is Successfully Stored in Data Repository !!";	
 			 }
 		 }
 		 %>
 		 <ul id="hold_response" style="margin-left: 5%;">
 		 <li class="msg1"> <p style="font-weight: bold; text-decoration: underline;font-size: 18px;">Files With File name...<br>
 		 <p style="font-weight: normal;"> <%=return_rpo%><br> <%=defualt_vaalue %></li>
 		 </ul>
 		 <%
 	 }
 	 %>
           </div>           
        <script type="text/javascript" src="dist/homepag_dynamic_tabledisplay.js"></script>
        <script type="text/javascript" src="dist/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="dist/hompage_script.js"></script>
     <script>
     var pro_dataResponse=document.getElementById("gtech_id");
     if (pro_dataResponse.addEventListener) {
    	 pro_dataResponse.addEventListener("click", function() {
	      document.getElementById("hold_response").style.display='none';	
	        }, false);}
     var pro_reportResponse=document.getElementById("pro_repo_id");
     if (pro_reportResponse.addEventListener) {
    	 pro_reportResponse.addEventListener("click", function() {
	      document.getElementById("hold_response").style.display='none';	
	        }, false);}
     var mange_otherdoc=document.getElementById("mange_otherdoc");
     if (mange_otherdoc.addEventListener) {
    	 mange_otherdoc.addEventListener("click", function() {
	      document.getElementById("hold_response").style.display='none';	
	        }, false);}
     var manage_rawdata=document.getElementById("mange_rawdata");
     if (manage_rawdata.addEventListener) {
    	 manage_rawdata.addEventListener("click", function() {
	      document.getElementById("hold_response").style.display='none';	
	        }, false);}
     
     /*Total station or GPS file Checke box controller */
      function Gps_checkbx(check_gps){
    	  check_gps=document.getElementById("log7");
    if(check_gps.checked == true){
		document.getElementById('GPS_file').innerHTML='<span style="margin-left: 5.3em;"> GPS data:</span>'
		+' <input type="checkbox" id="gps_data" name="ts_gps" value="GPS Data"/>'
	    +' <span class="validity"></span>';
	    document.getElementById('GPS_file').style.display="block";
	    document.getElementById('TS_file').innerHTML='<span style="margin-left: 2.0em;"> Total Station data:</span>'
		+' <input type="checkbox" id="TS_data" name="ts_gps" value="Total Station Data"/>'
		+' <span class="validity"></span>';
		document.getElementById('TS_file').style.display="block";	
	} 
    else{
    	document.getElementById('TS_file').innerHTML='';
    	document.getElementById('GPS_file').innerHTML='';
    	document.getElementById('GPS_file').style.display="none";
    	document.getElementById('TS_file').style.display="none";
    }
     }		
     
     function get_check(checkme){
    checkme=document.getElementById("log6");
    if(checkme.checked == true){
		document.getElementById('no_station').innerHTML='<span style="margin-left: 1.8em;"> Number of Station:</span>'
		+' <input type="number" id="st_no" name="st_no" style="width: 180px;height: 20px;" required min="1" max="999"/>'
	    +' <span class="validity"></span>';
	    document.getElementById('no_station').style.display="block";
	    document.getElementById('name_station').innerHTML='<span style="margin-left: 2.7em;"> Name of Station:</span>'
		+' <input type="text" id="st_name" name="st_name" style="width: 180px;height: 20px;" required minlength="6" maxlength="1000"/>'
		+' <span class="validity"></span>';
		document.getElementById('name_station').style.display="block";	
	} 
    else{
    	document.getElementById('name_station').innerHTML='';
    	document.getElementById('no_station').innerHTML='';
    	document.getElementById('no_station').style.display="none";
    	document.getElementById('name_station').style.display="none";
    }
     }		
     /*selection option clicking on button*/
    	 var toggler = document.getElementsByClassName("manage");
    	    var i;
    	    for (i = 0; i < toggler.length; i++) {
    	      toggler[i].addEventListener("click", function() {
    	        this.parentElement.querySelector(".sel1").classList.toggle("actives");
    	      });
    	    }
    	    </script>
         <script type="text/javascript" src="dist/jquery-3.4.1.min.js"></script>
    <script>
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
    document.getElementById("c_logout").addEventListener("click", function(){
    	var logout=document.getElementById("dis_logout");
    	if(logout.style.display=="none"){
    		logout.style.display="block";
    	}
    	else{
    		logout.style.display="none";	
    	}
    });
    </script> 

    <script type="text/javascript" src="scripts/scripts.js"></script>
</body>
</html>