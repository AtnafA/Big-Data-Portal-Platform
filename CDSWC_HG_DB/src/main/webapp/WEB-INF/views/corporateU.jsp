<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="java.time.Year"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.util.Collections"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.function.Function"%>
<%@page import="java.util.List"%>
<%@page import="net.codejava.fileupload.Reset.RestResponse"%>
<%@page import="net.codejava.fileupload.model.File" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src='dist/script.js' type='text/javascript'></script>
<link rel="stylesheet" href="dist/tree.css">
<link rel="stylesheet" href="dist/screen_sizesmall_mediacontroll.css">
<link rel="stylesheet" href="dist/table_spacing.css">
<link rel="shortcut icon" type="image/png" href="dist/img/log4.jpg"/>
<title>Home page</title>
 <STYLE type="text/css">
 th, td {
text-align: left;
padding-right: 6px;
padding-top:6px;
font-size: 13px;
}
</STYLE>   
</head>
<body>
<%
    @SuppressWarnings("unchecked")
    List<File>file= (List<File>)request.getAttribute("facc");
      @SuppressWarnings("unchecked")
    List<File>headfile= (List<File>)request.getAttribute("hdata");
      @SuppressWarnings("unchecked")
    List<File>nonsdata= (List<File>)request.getAttribute("nonsdata");
      @SuppressWarnings("unchecked")
      List<File>nonsheader= (List<File>)request.getAttribute("nonsheader");
      @SuppressWarnings("unchecked")
      List<File>projdata= (List<File>)request.getAttribute("projdoc");
      @SuppressWarnings("unchecked")
      List<File>corprojdoc= (List<File>)request.getAttribute("corpdoc");
      @SuppressWarnings("unchecked")
      List<File>reg= (List<File>)request.getAttribute("data1");	
    %>
    <nav class="titbarnav">
    <ul>
    <li> <a href="#">About Us</a> </li>
     <li> <a href="#">Contact</a> </li>
      <li id="c_logout"> <a href="#">Accounts</a> 
      <div id="dis_logout" style="display: none; float: right;">
      <ul>
      <li><a data-li="con_logout" href="<c:url value="/logout" />">Logout</a></li>
      </ul>
      </div>
      </li>
    </ul>
	</nav>
<h4 style="white-space: nowrap;">${U_auto}'s Home: Corporate User</h4>
   <div class="content">
     <ul class="tree" id="myUL">
     <li > 
  <span style="font: bold;">ECDSWC dKMS</span>
     <ul>
           <li><a>File Access</a>
           <div class="lis_change">
           <ul>
           <li> <a data-li= "All_rowData" href="#">Access Raw Data</a>
           <ul>
           <li ><a data-li= "Ps_con" href="#">Project Data</a></li>      
            <li ><a data-li= "S_con" class="active_l" href="#">Laboratory Data</a></li>      
           </ul>
           </li>
           <li><span>Access Processed Data</span>
           <ul>
           <li><p>Project Data</p></li>
           <li><p>Laboratory Data</p></li>
           </ul>
           </li>
           <li><span>Access Other Documents</span>
           <ul>
           <li ><a data-li= "Otb_con" href="#">Books</a>
           </li>
           <li><span class="caret">Project Report</span>
           <ul class="nested">
           <li><span class="caret">Access Project Report</span>
            <ul class="nested">
           <li id="pro_clearwe"><a data-li= "Otn_we" href="#">Water & Energy Design</a></li>
           <li id="pro_cleartd"><a data-li= "Otn_td" href="#">Transport Design</a></li>
           <li id="pro_clearbu"><a data-li= "Otn_bu" href="#">Building & Urban Planning</a></li>
           <li id="pro_cleargg"><a data-li= "Otn_gg" href="#">GGUDSWS</a></li>
           <li id="pro_clearrl"><a data-li= "Otn_rl" href="#">RLTC</a></li>
           <li id="pro_clear"><a data-li= "Otn_sg" href="#">SGCIC</a></li>
           </ul>
           </li> 
           <li id=""><a data-li= "Acc_wr" href="#">Request for Project Report</a></li>
           </ul>
           </li>
           </ul>
           </li>
           </ul>  
           </div>
           </li>
</ul>
     </li>
          </ul>       
        </div> 
        <div class="main-content">
        <div class="table_div item_li S_con" style="display: none;">
            <h1 style=" text-align: center; margin-top:0%; padding-right: 100px; position: relative; float: inherit;">
            Data set Available (Laboratory Data)</h1><input type="search" id="f1_name" name="f1_name" 
            placeholder="Search by File name" style="width: 200px; height:25px; border-bottom-color:gray; 
            position: relative; float: right; margin-top: -2%; margin-right: 0.5%;" class="form-control"/>  
            <table id="vetr_rasr" class="data_table">
            <thead>
           <tr>
        <th><select id="selc_id" name="selc_id" class="form-control dropdown_size">
              <option class="option_css" value="0">Thematic Area</option>
               <%
         if(headfile!=null){
        	 for(File fheader:headfile){
        		 if(fheader.spa_id!=0){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         
         %>
            </select>  
       </th>
        <th><select class="form-control dropdown_size" name="selefol_id" id="selefol_id">
          <option class="option_css" value="0">Classes</option>
        </select>
        </th>
       <th>
       <select class="form-control dropdown_size" name="fol_id" id="fol_id">
         <option class="option_css" value="0">Data Types</option>
        </select>
        </th>
        <th><select class="form-control dropdown_size" name="reg_id" id="reg_id">
         <option class="option_css" value="0">Region</option>
          <%
         if(file!=null){
        	 for(File fheader:file){
        		 if(fheader.regid!=0){
         %>
        <option class="option_css" value="<%=fheader.regid%>"><%=fheader.regnam %></option>
         <%} }}%>
        </select>
        </th>
        <th><select class="form-control dropdown_size" name="basin_id" id="basin_id">
         <option class="option_css" value="0">Basin</option>
        </select>
        </th>
        <th>
        <span id="rs-bullet" class="rs-label">0</span>
        <input class="dropdown_size" type="range" id="rs-range-line" name="rs-range-line" min="0" max="12"
         value="0">
         </th>
        <th>File Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>
           <%   if(file!=null){
             for(File files:file){
            	 if(files.cateid!=0 && files.na_id==21){
    	   if(files.spatial_or_non.equals("Vector")&& files.file_ext.equals("{shp}")){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=files.spatial_or_non%></div></td>
				<td data-Eco='Cat'><div class="long"><%=files.cata_gory%></div></td>
				<td data-Eco='Clu'><div class="long"><%=files.folder %></div></td>
				<td data-Eco='Reg'><div class="long"><%=files.regnam %></div></td>
				<td data-Eco='Bas'><div class="long"><%=files.basename %></div></td>
				<td data-Eco='Yea'><%=files.date %></td>
				<td data-Eco='Fil'><div class="long"><%=files.name %></div></td>
				<td data-Eco='Con'><%=files.file_ext %> file</td>
				<td data-Eco='Dow'><a href="download?file_id=<%=files.name%>&spa_id=<%=files.spatial_or_non%>">Download</a></td></tr>
				<% }
    	   else if(files.spatial_or_non.equals("Rastar")&& (files.file_ext.equals("{dwg}")||files.file_ext.equals("{tif}"))){
    		   %>
   			<tr> 
   			    <td data-Eco='Spa'><div class="long"><%=files.spatial_or_non%></div></td>
				<td data-Eco='Cat'><div class="long"><%=files.cata_gory%></div></td>
				<td data-Eco='Clu'><div class="long"><%=files.folder %></div></td>
				<td data-Eco='Reg'><div class="long"><%=files.regnam %></div></td>
				<td data-Eco='Bas'><div class="long"><%=files.basename %></div></td>
				<td data-Eco='Yea'><%=files.date %></td>
				<td data-Eco='Fil'><div class="long"><%=files.name %></div></td>
				<td data-Eco='Con'><%=files.file_ext %> file</td>
   				<td data-Eco='Dow'><a href="download?file_id=<%=files.name%>&spa_id=<%=files.spatial_or_non%>">Download</a></td></tr>
   				<%  
    	   }
       }}}
            	%>	
               </tbody>
              </table>  
           </div>
        <%--data table form spatial corporation project  --%>
        <div class="table_div item_li Ps_con" style="display: none;">
       <h1 style="text-align: center;">Data set Available (Project Data)</h1>
    <input type="search" id="Cof1_name" name="Cof1_name" placeholder="Search by File name" style="width: 200px; 
    height:25px; border-bottom-color:gray; position: relative; float: right; margin-top: -2%; margin-right: 0.5%;" 
            class="form-control"/>  
           <table id="CoVrastar_id" class="data_table">
           <thead>
           <tr>
        <th><select class="form-control dropdown_size" name="selCo_id" id="selCo_id">
        <option class="option_css" value="0">Project Name</option>
         <%
         if(headfile!=null){
        	 for(File fheader:headfile){
        		 if(fheader.spa_id!=0){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select> 
        </th>
        <th><select class="form-control dropdown_size" name="Cor_cat_id" id="Cor_cat_id">
          <option class="option_css" value="0">Thematic Area</option>
        </select>
        </th>
       <th>
       <select class="form-control dropdown_size" name="clCo_id" id="clCo_id">
          <option class="option_css" value="0">Classes</option>
        </select>
        </th>
        <th>
       <select class="form-control dropdown_size" name="dset_id" id="dset_id">
          <option class="option_css" value="0">Data Types</option>
        </select>
        </th>
        <th><select class="form-control dropdown_size" name="Cor_reid" id="Cor_reid">
         <option class="option_css" value="0">Region</option>
          <%
         if(file!=null){
        	 for(File fheader:file){
        		 if(fheader.regid!=0){
         %>
        <option class="option_css" value="<%=fheader.regid%>"><%=fheader.regnam %></option>
         <%} }}%>
        </select>
        </th>
        <th><select class="form-control dropdown_size" name="Cor_baid" id="Cor_baid">
          <option class="option_css" value="0">Basin</option>
           <%
         if(headfile!=null){
        	 for(File fheader:headfile){
        		 if(fheader.baseid!=0){		 
         %>
        <option class="option_css" value="<%=fheader.baseid%>"><%=fheader.basename %></option>
         <%  }}}
         %>
        </select>
        </th>
       <th>Station Name</th>
        <th>File Name</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>
           <%   if(file!=null){
             for(File files:file){
            	 if(files.cateid!=0){
            		 if(files.spatial_or_non.equals("Corporation Project")&&(files.file_ext.equals("{shp}")||files.file_ext.equals("{xlsx}")||files.file_ext.equals("{csv}")
            	          	 || files.file_ext.equals("{docx}")|| files.file_ext.equals("{pdf}") ||files.file_ext.equals("{png}")
                        	  || files.file_ext.equals("{jpg}") || files.file_ext.equals("{gif}") || files.file_ext.equals("{dwg}")
                        	  || files.file_ext.equals("{tif}")|| files.file_ext.equals("{tiff}")|| files.file_ext.equals("{tff}"))){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=files.cata_gory%></div></td>
				<td data-Eco='Cat'><div class="long"><%=files.datacl%></div></td>
				<td data-Eco='Clu'><div class="long"><%=files.folder %></div></td>
				<td data-Eco='Con'><div class="long"><%=files.file_gr %></div></td>
				<td data-Eco='Reg'><div class="long"><%=files.regnam %></div></td>
				<td data-Eco='Bas'><div class="long"><%=files.basename %></div></td>
				<td data-Eco='Yea'><div class="long"><%=files.station_name %></div></td>
				<td data-Eco='Fil'><div class="long"><%=files.name %></div></td>
				<td data-Eco='Dow'><a style="color: blue;" href="download?file_id=<%=files.name%>&pro_name=<%=files.cata_gory%>&pro_id=<%=files.project_id%>
				&typ_name=<%=files.datacl%>&cat_name=<%=files.folder%>">Download</a></td></tr>
    		  
   				<%  
            		 }}}}
            	%>	
               </tbody>
        </table>
            </div>
       <div class="table_div item_li Otb_con" style="display: none;">
       <h1 style="text-align: center;">Data set Available - Books</h1>
    <input type="search" id="bf1_name" name="bf1_name" placeholder="Search by Book Name, Book ID" style="width: 200px; 
    height:25px; border-bottom-color:gray; position: relative; float: right; margin-top: -2%; margin-right: 0.5%;" 
            class="form-control"/>  
           <table id="Tbo_id" class="data_table">
           <thead>
           <tr>
        <th><select class="form-control dropdown_size">
        <option class="option_css" value="0">Book Type</option>
         <%
         if(nonsdata!=null){
        	 for(File fheader:nonsdata){
        		 if(fheader.spa_id!=0){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select>
        </th>
        <th><select class="form-control dropdown_size">
          <option class="option_css" value="0">Category</option>
        </select>
        </th>
       <th>
       <select class="form-control dropdown_size">
          <option class="option_css" value="0">Branch</option>
        </select>
        </th>
        <th><select class="form-control dropdown_size">
         <option class="option_css" value="0">Region</option>
          <%
         if(file!=null){
        	 for(File fheader:file){
        		 if(fheader.regid!=0){
         %>
        <option class="option_css" value="<%=fheader.regid%>"><%=fheader.regnam %></option>
         <%} }}%>
        </select>
        </th>
        <th><select class="form-control dropdown_size">
          <option class="option_css" value="0">Basin</option>
        </select>
        </th>
        <th>
        <span id="rs-bullet-book" class="rs-label">0</span>
        <input class="dropdown_size" type="range" id="rs-range-line-book" name="rs-range-line-book" 
        min="0" max="200"
         value="0">
         </th>
        <th>Book Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>
           </tbody>
        </table>
            </div>
             <div id="pro_displwe" class="table_div item_li Otn_we" style="display: none;">
             <input type="text" name="ux_name" id="ux_name" value="${userid}" style="position: absolute; float: left; 
           margin-top: 0.5%;font-size:11px;  height:23px; width:120px; border: none;"/>
      <h1 style="text-align: center;">Data set Available - Project Document(Water & Energy)</h1>
       <input type="search" id="pf1_namewe" name="pf1_namewe" placeholder="Search by Project Id, File Name" 
        style="width: 245px; font-size:11px; height:25px; border-bottom-color:gray; position: relative; float: right; 
        margin-top: -2%; margin-right: 0.5%;" class="form-control"/>  
           <table id="Tpro_idwe" class="tab_project data_table"> 
           <thead>
           <tr>
           <th>
           <select class="form-control dropdown_size" name="process_idwe" id="process_idwe">
        <option class="option_css" value="0">Process</option>
         <%
         if(corprojdoc!=null){
        	 for(File fheader:corprojdoc){
        		 if(fheader.spa_id!=0 && fheader.na_id==15){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select>
        
        
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosepr_idwe" id="prosepr_idwe">
        <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosel_idwe" id="prosel_idwe">
        <option class="option_css" value="0">Design Sup</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="procat_idwe" id="procat_idwe">
          <option class="option_css" value="0">Branch</option>
        </select>
        </th>
        <th>Draft F</th>
        <th>Project Id</th>
        <th>
        <span id="rs-bullet-we" class="rs-label">2010</span>
        <input class="dropdown_size" type="range" id="rs-range-line-we" name="rs-range-line-we" min="2010"
         max="<%=Year.now()%>"
         value="2010">
         </th>
        <th>File Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>	
            <% if(corprojdoc!=null){
       for(File cofiles:corprojdoc){
    	   if(cofiles.filenameid!=0 && cofiles.na_id==15){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=cofiles.process%></div></td>
			    <td data-Eco='proName'><div class="long"><%=cofiles.project_name %></div></td>
				<td data-Eco='Clu'><div class="long"><%=cofiles.data_type %></div></td>
				<td data-Eco='Bas'><div class="long"><%=cofiles.branch_name %></div></td>
				<td data-Eco='Cat'><div class="long"><%=cofiles.sub_branch%></div></td>
				 <td data-Eco='Spa'><div class="long"><%=cofiles.project_id%></div></td>
				<td data-Eco='Yea'><%=cofiles.date %></td>
				<td data-Eco='Fil'><div class="long"><%=cofiles.name %></div></td>
				<td data-Eco='Con'><%=cofiles.file_ext %> file</td>
				<td data-Eco='Dow'><a href="downloadfile?file_id=<%=cofiles.name%>&project_name=<%=cofiles.project_name%>&project_id=<%=cofiles.project_id%>
				&cat_name=<%=cofiles.data_type%>">Download</a></td></tr>
				<%
       }}}
            	%>	
           </tbody>
        </table>
            </div>
            <div id="pro_displtd" class="table_div item_li Otn_td" style="display: none;">
            <input type="text" name="uxtd_name" id="uxtd_name" value="${userid}" style="position: absolute; float: left; 
           margin-top: 0.5%;font-size:11px;  height:23px; width:120px; border: none;"/>
            <h1 style="text-align: center;">Data set Available - Project Document(Transport & Design)</h1>
       <input type="search" id="pf1_nametd" name="pf1_nametd" placeholder="Search by Project Id, File Name" 
        style="width: 245px; font-size:11px; height:25px; border-bottom-color:gray; position: relative; float: right; 
        margin-top: -2%; margin-right: 0.5%;" class="form-control"/>
           <table id="Tpro_idtd" class="tab_project data_table"> 
           <thead>
           <tr>
           <th>
           <select class="form-control dropdown_size" name="process_idtd" id="process_idtd">
        <option class="option_css" value="0">Process</option>
         <%
         if(corprojdoc!=null){
        	 for(File fheader:corprojdoc){
        		 if(fheader.spa_id!=0 && fheader.na_id==16){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select> 
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosepr_idtd" id="prosepr_idtd">
        <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosel_idtd" id="prosel_idtd">
        <option class="option_css" value="0">Design Sup</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="procat_idtd" id="procat_idtd">
          <option class="option_css" value="0">Branch</option>
        </select>
        </th>
        <th>Draft F</th>
        <th>Project Id</th>
       <th>
        <span id="rs-bullet-td" class="rs-label">2010</span>
        <input class="dropdown_size" type="range" id="rs-range-line-td" name="rs-range-line-td" min="2010" 
        max="<%=Year.now()%>"
         value="2010">
         </th>
        <th>File Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>	
            <% if(corprojdoc!=null){
       for(File cofiles:corprojdoc){
    	   if(cofiles.filenameid!=0 && cofiles.na_id==16){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=cofiles.process%></div></td>
			    <td data-Eco='proName'><div class="long"><%=cofiles.project_name %></div></td>
				<td data-Eco='Clu'><div class="long"><%=cofiles.data_type %></div></td>
				<td data-Eco='Bas'><div class="long"><%=cofiles.branch_name %></div></td>
				<td data-Eco='Cat'><div class="long"><%=cofiles.sub_branch%></div></td>
				 <td data-Eco='Spa'><div class="long"><%=cofiles.project_id%></div></td>
				<td data-Eco='Yea'><%=cofiles.date %></td>
				<td data-Eco='Fil'><div class="long"><%=cofiles.name %></div></td>
				<td data-Eco='Con'><%=cofiles.file_ext %> file</td>
				<td data-Eco='Dow'><a href="downloadfile?file_id=<%=cofiles.name%>&project_name=<%=cofiles.project_name%>&project_id=<%=cofiles.project_id%>
				&cat_name=<%=cofiles.data_type%>">Download</a></td></tr>
				<%
       }}}
            	%>	
           </tbody>
        </table>
            </div>
            <div id="pro_displbu" class="table_div item_li Otn_bu" style="display: none;">
             <input type="text" name="uxbu_name" id="uxbu_name" value="${userid}" style="position: absolute; float: left; 
           margin-top: 0.5%;font-size:11px;  height:23px; width:120px; border: none;"/>
            <h1 style="text-align: center;">Data set Available - Project Document(Building & Urban)</h1>
       <input type="search" id="pf1_namebu" name="pf1_namebu" placeholder="Search by Project Id, File Name" 
        style="width: 245px; font-size:11px; height:25px; border-bottom-color:gray; position: relative; float: right; 
        margin-top: -2%; margin-right: 0.5%;" class="form-control"/>  
           <table id="Tpro_idbu" class="tab_project data_table"> 
           <thead>
           <tr>
           <th>
           <select class="form-control dropdown_size" name="process_idbu" id="process_idbu">
        <option class="option_css" value="0">Process</option>
         <%
         if(corprojdoc!=null){
        	 for(File fheader:corprojdoc){
        		 if(fheader.spa_id!=0 && fheader.na_id==20){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select> 
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosepr_idbu" id="prosepr_idbu">
        <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosel_idbu" id="prosel_idbu">
        <option class="option_css" value="0">Design Sup</option>
        </select> 
        </th>
        <th>
        <select class="form-control dropdown_size" name="procat_idbu" id="procat_idbu">
          <option class="option_css" value="0">Branch</option>
        </select>
        </th>
        <th>Draft F</th>
        <th>Project Id</th>
        <th>
        <span id="rs-bullet-bu" class="rs-label">2011</span>
        <input class="dropdown_size" type="range" id="rs-range-line-bu" name="rs-range-line-bu" min="2011"
         max="<%=Year.now()%>"
         value="2011">
         </th>
        <th>File Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>	
           <% if(corprojdoc!=null){
       for(File cofiles:corprojdoc){
    	   if(cofiles.filenameid!=0 && cofiles.na_id==20){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=cofiles.process%></div></td>
			    <td data-Eco='proName'><div class="long"><%=cofiles.project_name %></div></td>
				<td data-Eco='Clu'><div class="long"><%=cofiles.data_type %></div></td>
				<td data-Eco='Bas'><div class="long"><%=cofiles.branch_name %></div></td>
				<td data-Eco='Cat'><div class="long"><%=cofiles.sub_branch%></div></td>
				 <td data-Eco='Spa'><div class="long"><%=cofiles.project_id%></div></td>
				<td data-Eco='Yea'><%=cofiles.date %></td>
				<td data-Eco='Fil'><div class="long"><%=cofiles.name %></div></td>
				<td data-Eco='Con'><%=cofiles.file_ext %> file</td>
				<td data-Eco='Dow'><a href="downloadfile?file_id=<%=cofiles.name%>&project_name=<%=cofiles.project_name%>&project_id=<%=cofiles.project_id%>
				&cat_name=<%=cofiles.data_type%>">Download</a></td></tr>
				<%
       }}}
            	%>	
           </tbody>
        </table>
            </div>
            <div id="pro_displrl" class="table_div item_li Otn_rl" style="display: none;">
             <input type="text" name="uxrl_name" id="uxrl_name" value="${userid}" style="position: absolute; float: left; 
           margin-top: 0.5%;font-size:11px;  height:23px; width:120px; border: none;"/>
            <h1 style="text-align: center;">Data set Available - Project Document(Research and Laboratory)</h1>
       <input type="search" id="pf1_namerl" name="pf1_namerl" placeholder="Search by Project Id, File Name" 
        style="width: 245px; font-size:11px; height:25px; border-bottom-color:gray; position: relative; float: right; 
        margin-top: -2%; margin-right: 0.5%;" class="form-control"/>  
           <table id="Tpro_idrl" class="tab_project data_table"> 
           <thead>
           <tr>
           <th>
           <select class="form-control dropdown_size" name="process_idrl" id="process_idrl">
        <option class="option_css" value="0">Process</option>
          <%
         if(corprojdoc!=null){
        	 for(File fheader:corprojdoc){
        		 if(fheader.spa_id!=0 && fheader.na_id==18){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select> 
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosepr_idrl" id="prosepr_idrl">
        <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosel_idrl" id="prosel_idrl">
        <option class="option_css" value="0">Design Sup</option>
        </select> 
        </th>
        <th>
        <select class="form-control dropdown_size" name="procat_idrl" id="procat_idrl">
          <option class="option_css" value="0">Branch</option>
        </select>
        </th>
        <th>
       <select class="form-control dropdown_size" name="pro_clusterrl" id="pro_clusterrl">
          <option class="option_css" value="0">Draft F</option>
        </select>
        </th>
        <th>Project Id</th>
        <th>
        <span id="rs-bullet-rl" class="rs-label">2011</span>
        <input class="dropdown_size" type="range" id="rs-range-line-rl" name="rs-range-line-rl" min="2011" 
        max="<%=Year.now()%>"
         value="2011">
         </th>
        <th>File Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>	
           <% if(corprojdoc!=null){
       for(File cofiles:corprojdoc){
    	   if(cofiles.filenameid!=0 && cofiles.na_id==18){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=cofiles.process%></div></td>
			    <td data-Eco='proName'><div class="long"><%=cofiles.project_name %></div></td>
				<td data-Eco='Clu'><div class="long"><%=cofiles.data_type %></div></td>
				<td data-Eco='Bas'><div class="long"><%=cofiles.branch_name %></div></td>
				<td data-Eco='Cat'><div class="long"><%=cofiles.sub_branch%></div></td>
				 <td data-Eco='Spa'><div class="long"><%=cofiles.project_id%></div></td>
				<td data-Eco='Yea'><%=cofiles.date %></td>
				<td data-Eco='Fil'><div class="long"><%=cofiles.name %></div></td>
				<td data-Eco='Con'><%=cofiles.file_ext %> file</td>
				<td data-Eco='Dow'><a href="downloadfile?file_id=<%=cofiles.name%>&project_name=<%=cofiles.project_name%>&project_id=<%=cofiles.project_id%>
				&cat_name=<%=cofiles.data_type%>">Download</a></td></tr>
				<%
       }}}
            	%>	
           </tbody>
        </table>
            </div>
            <div id="pro_displgg" class="table_div item_li Otn_gg" style="display: none;">
            <input type="text" name="uxgg_name" id="uxgg_name" value="${userid}" style="position: absolute; float: left; 
           margin-top: 0.5%;font-size:11px;  height:23px; width:120px;border: none;"/>
            <h1 style="text-align: center;">Data set Available - Project Document(GGUDSWS)</h1>
       <input type="search" id="pf1_namegg" name="pf1_namegg" placeholder="Search by Project Id, File Name" 
        style="width: 245px; font-size:11px; height:25px; border-bottom-color:gray; position: relative; float: right; 
        margin-top: -2%; margin-right: 0.5%;" class="form-control"/>  
           <table id="Tpro_idgg" class="tab_project data_table"> 
           <thead>
           <tr>
           <th>
           <select class="form-control dropdown_size" name="process_idgg" id="process_idgg">
        <option class="option_css" value="0">Process</option>
         <%
         if(corprojdoc!=null){
        	 for(File fheader:corprojdoc){
        		 if(fheader.spa_id!=0 && fheader.na_id==17){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosepr_idgg" id="prosepr_idgg">
        <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosel_idgg" id="prosel_idgg">
        <option class="option_css" value="0">Design Sup</option>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="procat_idgg" id="procat_idgg">
          <option class="option_css" value="0">Branch</option>
        </select>
        </th>
        <th>
       <select class="form-control dropdown_size" name="pro_clustergg" id="pro_clustergg">
          <option class="option_css" value="0">Draft F</option>
        </select>
        </th>
        <th>Project Id</th>
        <th>
        <span id="rs-bullet-ggu" class="rs-label">2011</span>
        <input class="dropdown_size" type="range" id="rs-range-line-ggu" name="rs-range-line-ggu" min="2011" 
        max="<%=Year.now()%>"
         value="2011">
         </th>
        <th>File Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>	
            <% if(corprojdoc!=null){
       for(File cofiles:corprojdoc){
    	   if(cofiles.filenameid!=0 && cofiles.na_id==17){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=cofiles.process%></div></td>
			    <td data-Eco='proName'><div class="long"><%=cofiles.project_name %></div></td>
				<td data-Eco='Clu'><div class="long"><%=cofiles.data_type %></div></td>
				<td data-Eco='Bas'><div class="long"><%=cofiles.branch_name %></div></td>
				<td data-Eco='Cat'><div class="long"><%=cofiles.sub_branch%></div></td>
				 <td data-Eco='Spa'><div class="long"><%=cofiles.project_id%></div></td>
				<td data-Eco='Yea'><%=cofiles.date %></td>
				<td data-Eco='Fil'><div class="long"><%=cofiles.name %></div></td>
				<td data-Eco='Con'><%=cofiles.file_ext %> file</td>
				<td data-Eco='Dow'><a href="downloadfile?file_id=<%=cofiles.name%>&project_name=<%=cofiles.project_name%>&project_id=<%=cofiles.project_id%>
				&cat_name=<%=cofiles.data_type%>">Download</a></td></tr>
				<%
       }}}
            	%>	
           </tbody>
        </table>
            </div>
           <div id="pro_displ" class="table_div item_li Otn_sg" style="display: none;">
           <input type="text" name="uxsg_name" id="uxsg_name" value="${userid}" style="position: absolute; float: left; 
           margin-top: 0.5%;font-size:11px;  height:23px; width:120px;border: none;"/>
            <h1 style="text-align: center;">Data set Available - Project Document(SGCIC)</h1>
        <input type="search" id="pf1_name" name="pf1_name" placeholder="Search by Project Id, File Name" 
        style="width: 245px; font-size:11px; height:25px; border-bottom-color:gray; position: relative; float: right; 
        margin-top: -2%; margin-right: 0.5%;" class="form-control"/>  
           <table id="Tpro_id" class="tab_project data_table"> 
           <thead>
           <tr>
           <th><select class="form-control dropdown_size" name="process_id" id="process_id">
        <option class="option_css" value="0">Process</option>
         <%
         if(corprojdoc!=null){
        	 for(File fheader:corprojdoc){
        		 if(fheader.spa_id!=0 && fheader.na_id==19){		 
         %>
        <option class="option_css" value="<%=fheader.spa_id%>"><%=fheader.spatial_or_non %></option>
         <%  }}}
         %>
        </select>
        </th>
        <th>
        <select class="form-control dropdown_size" name="prosepr_idsg" id="prosepr_idsg">
        <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th><select class="form-control dropdown_size" name="prosel_id" id="prosel_id">
        <option class="option_css" value="0">Design Sup</option>
        </select>
        </th>
        <th ><select class="form-control dropdown_size" name="procat_id" id="procat_id">
          <option class="option_css" value="0">Branch</option>
        </select>
        </th>
        <th>Draft F</th>
        <th>Project Id</th>
        <th>
        <span id="rs-bullet-sgc" class="rs-label">2011</span>
        <input class="dropdown_size" type="range" id="rs-range-line-sgc" name="rs-range-line-sgc" min="2011" 
        max="<%=Year.now()%>"
         value="2011">
         </th>
        <th>File Name</th>
        <th>Content</th>
        <th>Download</th>
           </tr>
           </thead>
           <tbody>	
            <% if(corprojdoc!=null){
       for(File cofiles:corprojdoc){
    	   if(cofiles.filenameid!=0 && cofiles.na_id==19){
    	   %>
			<tr> 
			    <td data-Eco='Spa'><div class="long"><%=cofiles.process%></div></td>
			    <td data-Eco='proName'><div class="long"><%=cofiles.project_name %></div></td>
				<td data-Eco='Clu'><div class="long"><%=cofiles.data_type %></div></td>
				<td data-Eco='Bas'><div class="long"><%=cofiles.branch_name %></div></td>
				<td data-Eco='Cat'><div class="long"><%=cofiles.sub_branch%></div></td>
				 <td data-Eco='Spa'><div class="long"><%=cofiles.project_id%></div></td>
				<td data-Eco='Yea'><%=cofiles.date %></td>
				<td data-Eco='Fil'><div class="long"><%=cofiles.name %></div></td>
				<td data-Eco='Con'><%=cofiles.file_ext %> file</td>
				<td data-Eco='Dow'><a href="downloadfile?file_id=<%=cofiles.name%>&project_name=<%=cofiles.project_name%>&project_id=<%=cofiles.project_id%>
				&cat_name=<%=cofiles.data_type%>">Download</a></td></tr>
				<%
       }}}
            	%>	
           </tbody>
        </table>
            </div> 
             <div class="item_li All_rowData table_div" style="text-align: center;">
        <input type="search" id="search_fnkey" name="search_fnkey" placeholder="Search By Project Name" 
        style="width: 700px; font-size:16px; height:35px; border-bottom-color:gray; position: relative; 
        margin-top: 1%; margin-right: 0.5%;" class="form-control"/>  
        <ul id="Search_fn" style="text-align: left; width:30%; white-space:nowrap; position: absolute;
         background-color: white; height: 70%; overflow-x: auto; overflow-y: visible; margin-left: 5%;">
        </ul> 
        <div style="background-color: #f5f5f5; margin-left: 45%;  height: 25%; margin-top:1%; width:54%; text-align:left;overflow-x: auto; overflow-y: visible;
         position: relative;">
        <ul id="searched_item">
      </ul> 
      <ul id="pro_name_specific" style="display: none;">
      </ul>
       <ul id="type_name_specific" style="display: none;">
      </ul>
        </div>
        <div style="background-color: white; margin-left: 45%;  height: 62%; margin-top:0%; width:54%; text-align:left;overflow-x: auto; overflow-y: visible;
         position: relative;">
        <ul id="searched_specific">
      </ul> 
        </div>
  </div>
         <div id="" class="table_div item_li Acc_wr" style="display: none;">
            <h1 style="text-align: center;">Request for Project Document Reports</h1>
 <div style="position: absolute; width: 30%;">
  <table style="width: 100%; text-align: center; white-space: nowrap; table-layout: fixed;" border="0">
<tr style="background-color: white;">
<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 20%;border-right:none; border-collapse:separate;">Center:</td>
<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 70%; border-right:none; border-collapse:separate;">
<select id="usertype2" name="usertype2" class="form-control" style="width: 280px; height: 20%;">
<option value="0">-----------------------Select Center-------------------</option>
<% 
		if(reg!=null){
	      for(File files:reg){
	       if(files.na_id!=0)
		     {
	         %>
		<option value="<%=files.na_id%>"><%=files.na_name%></option>
		<% }}}%>
</select></td>
</tr>
<tr style="background-color: white;">
		<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 20%; border-right:none; border-collapse:separate;">Processes:</td>
		<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px;width: 70%; border-right:none; border-collapse:separate;">
				<select id="processf2" name="processf2" class="form-control" style="width: 280px; height: 25px;"
				onchange="showprofield(this.options[this.selectedIndex].value);">
	<option value="0" style="font-weight: bold;">-----------------------Select Process---------------------</option>
					</select>
				</td>
				</tr>
				<tr style="background-color: white;">
					<td class="td" style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width:20%; border-right:none; border-collapse:separate;">Project Name:</td>
					<td style="text-align: left;padding-right: 0px;padding-top:6px;font-size: 13px; width: 70%; border-right:none; border-collapse:separate;">
				<select id="pro_name2" name="pro_name2" class="form-control" style="width: 280px; height: 25px;">
	<option value="0" style="font-weight: bold;">-----------------------Select Name-------------------------</option>
					</select>
					</td>
				</tr>
</table>
 </div>
 <ul id="design_superv" style="position: relative; margin-left: 38%; margin-top: 8%;">
 </ul>
 <div style="position: relative; margin-left: 45%;margin-top: 0%;white-space:nowrap;height: 70%;overflow-x: auto; overflow-y: visible;">
  <input id="user_id" name="user_id" value="${userid}" style="display:none;">
 <input id="fname" name="fname" value="${U_auto}" style="display:none;">
 <input id="lname" name="lname" value="${U_lname}" style="display:none;">
 <ul id="Data_details" >
 </ul>
 <div id="hold_res">
 </div>
 </div>
        </div>
        </div>
        <%--Searches National data to the table using titles of the table--%>
        <script type="text/javascript" src="dist/tablemanage_nationaldoc.js"></script>
        <%--Searches corporation project data to the table using titles of the table--%>
        <script type="text/javascript" src="dist/tablemanage_corporationpro_doc.js"></script>
        <%--search control for other office doc table --%>
      <script type="text/javascript" src="dist/tablemanage_officdoc.js"></script>
        <%--Automatic table change control--%>
        <script type="text/javascript" src="dist/dynamic_page_display.js"></script>
    	    <%--controls table title --%>
         <script type="text/javascript" src="dist/jquery-3.4.1.min.js"></script>
     <script>
     /*selection option of Table header*/
    	 var toggler = document.getElementsByClassName("manage");
    	    var i;
    	    for (i = 0; i < toggler.length; i++) {
    	      toggler[i].addEventListener("click", function(){
    	      });
    	    }                    
        </script>
        <%--manages and controls tree content --%>
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
    })
    /*sliding dates*/
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
rangeSlider.addEventListener("input", showSliderValue, false);
function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 70) + "px";
}
//spatioal corporation
var rangeSlider_cor = document.getElementById("rs-range-line-cor");
var rangeBullet_cor = document.getElementById("rs-bullet-cor");
rangeSlider_cor.addEventListener("input", showSliderValue_cor, false);
function showSliderValue_cor(){
  rangeBullet_cor.innerHTML = rangeSlider_cor.value;
  var bulletPosition = (rangeSlider_cor.value /rangeSlider_cor.max);
  rangeBullet_cor.style.left = (bulletPosition * 70) + "px";
}
//nonspatial national
var rangeSlider_non = document.getElementById("rs-range-line-non");
var rangeBullet_non = document.getElementById("rs-bullet-non");
rangeSlider_non.addEventListener("input", showSliderValue_non, false);
function showSliderValue_non(){
  rangeBullet_non.innerHTML = rangeSlider_non.value;
  var bulletPosition = (rangeSlider_non.value /rangeSlider_non.max);
  rangeBullet_non.style.left = (bulletPosition * 70) + "px";
}
//nonspatial corporation
var rangeSlider_cnon = document.getElementById("rs-range-line-cnon");
var rangeBullet_cnon = document.getElementById("rs-bullet-cnon");
rangeSlider_cnon.addEventListener("input", showSliderValue_cnon, false);
function showSliderValue_cnon(){
  rangeBullet_cnon.innerHTML = rangeSlider_cnon.value;
  var bulletPosition = (rangeSlider_cnon.value /rangeSlider_cnon.max);
  rangeBullet_cnon.style.left = (bulletPosition * 70) + "px";
}
//book
var rangeSlider_book = document.getElementById("rs-range-line-book");
var rangeBullet_book = document.getElementById("rs-bullet-book");
rangeSlider_book.addEventListener("input", showSliderValue_book, false);
function showSliderValue_book(){
  rangeBullet_book.innerHTML = rangeSlider_book.value;
  var bulletPosition = (rangeSlider_book.value /rangeSlider_book.max);
  rangeBullet_book.style.left = (bulletPosition * 70) + "px";
}
//CGSC
var rangeSlider_sgc = document.getElementById("rs-range-line-sgc");
var rangeBullet_sgc = document.getElementById("rs-bullet-sgc");
rangeSlider_sgc.addEventListener("input", showSliderValue_sgc, false);
function showSliderValue_sgc(){
	rangeBullet_sgc.innerHTML = rangeSlider_sgc.value;
  var bulletPosition = ((rangeSlider_sgc.value-2010) /(rangeSlider_sgc.max-2010));
  rangeBullet_sgc.style.left = (bulletPosition * 60) + "px";
}
//GGUD
var rangeSlider_ggu = document.getElementById("rs-range-line-ggu");
var rangeBullet_ggu = document.getElementById("rs-bullet-ggu");
rangeSlider_ggu.addEventListener("input", showSliderValue_ggu, false);
var slidervalue_ggu;
var slidermax_ggu;
function showSliderValue_ggu(){
	rangeBullet_ggu.innerHTML = rangeSlider_ggu.value;
	slidervalue_ggu=rangeSlider_ggu.value-2010;
	slidermax_ggu=rangeSlider_ggu.max-2010;
  var bulletPosition = (slidervalue_ggu /slidermax_ggu);
  rangeBullet_ggu.style.left = (bulletPosition * 60) + "px";
}
//water and Energy
var rangeSlider_we = document.getElementById("rs-range-line-we");
var rangeBullet_we = document.getElementById("rs-bullet-we");
rangeSlider_we.addEventListener("input", showSliderValue_we, false);
var slidervalue;
var slidermax;
function showSliderValue_we(){
	rangeBullet_we.innerHTML = rangeSlider_we.value;
	slidervalue=rangeSlider_we.value-2010;
	slidermax=rangeSlider_we.max-2010;
  var bulletPosition = (slidervalue/slidermax);
  rangeBullet_we.style.left = (bulletPosition * 60) + "px";
}
//Transport and Design
var rangeSlider_td = document.getElementById("rs-range-line-td");
var rangeBullet_td = document.getElementById("rs-bullet-td");
rangeSlider_td.addEventListener("input", showSliderValue_td, false);
function showSliderValue_td(){
	rangeBullet_td.innerHTML = rangeSlider_td.value;
  var bulletPosition = ((rangeSlider_td.value-2010) /(rangeSlider_td.max-2010));
  rangeBullet_td.style.left = (bulletPosition * 60) + "px";
}
//building 
var rangeSlider_bu = document.getElementById("rs-range-line-bu");
var rangeBullet_bu = document.getElementById("rs-bullet-bu");
rangeSlider_bu.addEventListener("input", showSliderValue_bu, false);
function showSliderValue_bu(){
  rangeBullet_bu.innerHTML = rangeSlider_bu.value;
  var bulletPosition = ((rangeSlider_bu.value-2010) /(rangeSlider_bu.max-2010));
  rangeBullet_bu.style.left = (bulletPosition * 60) + "px";
}
//research and library 
var rangeSlider_rl = document.getElementById("rs-range-line-rl");
var rangeBullet_rl = document.getElementById("rs-bullet-rl");
rangeSlider_rl.addEventListener("input", showSliderValue_rl, false);
function showSliderValue_rl(){
	rangeBullet_rl.innerHTML = rangeSlider_rl.value;
  var bulletPosition = ((rangeSlider_rl.value-2010) /(rangeSlider_rl.max-2010));
  rangeBullet_rl.style.left = (bulletPosition * 60) + "px";
}
    </script> 
</body>
</html>