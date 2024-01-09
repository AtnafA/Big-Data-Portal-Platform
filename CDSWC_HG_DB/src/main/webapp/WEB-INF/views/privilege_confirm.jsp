<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="net.codejava.fileupload.model.File"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="dist/tree.css">
<link rel="stylesheet" href="dist/table_spacing.css">
<link rel="shortcut icon" type="image/png" href="dist/img/log4.jpg"/>
<title>Confirm Privilege </title>
<style>
input[type=text] {
  width: 280px;
  padding-bottom: 0px;
  margin-left: auto;
  margin-right:auto;
  display: inline-block;
  border: 2px solid #b4b4b4;
  box-sizing: border-box; 
}
table.table_{
border: 1px solid black;
width: 95%;
white-space: nowrap; 
}
 tr.table_:nth-child(even) {
  background-color: #A3ADAC;
  border-top: 20px solid rgba(0,0,0,.3);
}
	.error {
    padding: 1px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #a94442;
    border-color: #ebccd1;
    margin-left:10%;
    width: 50%;
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
.noneexists{
 padding: 1px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #a94442;
    border-color: #ebccd1;
    margin-left:10%;
    width: 50%;
}
.msg {
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #31708f;
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
.existes1 {
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
</style>
<script type="text/javascript">
var stringpat="[A-Za-z]{0-9}@*[.com]";
function patternmatch(){
	if(!stringpat.matcher(uform.U_email).matches){
		alert("This is not standard Email Address!!");
		return false;
	}
		return(true)
}
function check_lis(){
	if(uformcreate.eli_sup.selectedIndex == 0){
		var aa='Note: Select User Type to Give the Access Privilege';
		alert(aa);
	return false;
	}
		if(document.getElementById("eli_sup").value == 110){
			if(confirm("Note: You Are Giving the Administrator Privilege For User! If it is Unnecessary, Please Cancel and Change User type!!")){
				return true;
				}
			else{
    			return false;
    		}
			return false;
		}
	return (true);
}
</script>
<%
	@SuppressWarnings("unchecked")
List<File>reg= (List<File>)request.getAttribute("data1");
%>
</head>
<body>
<nav class="titbarnav">
    <ul>
    <li> <a href="#">About Us</a> </li>
     <li> <a href="#">Contact</a> </li>
      <li id="cpr_logout"> <a href="#">Accounts</a> 
      <div id="pr_logout" style="display: none; float: right;">
      <ul>
      <li><a href="<c:url value="/logout" />">Logout</a></li>
      </ul>
      </div>
      </li>
    </ul>
	</nav>
	<%String centertype=(String)session.getAttribute("pr_typ");%>
	<h2 style="margin-left: -3%;">ECDSWC Data Portal (<%=centertype%>)</h2>
	<div class="content">
	<div class="sup_manger">
	<ul>
	<li id="ask_request"> <a data-li="ask_req" class="active_li" href="#">Requests Asked</a></li>
	<li> <a data-li="c_elite" href="#"> Create user</a></li>
	</ul>
	</div>
	</div>
	<div class="main-content">
	<div class="sup_manger item_co ask_req" style="margin-left: 1.5%;display: none;">
	<p style="text-align:center; width:80%;  margin-top:1.5%; margin-bottom:0.0%;font-weight: bold; font-size: 20px;">Requests Asked</p>
	<input id="usertype" name="usertype" value="<%=centertype%>" style="display: none;">
	 <table id="CoVrastar_id" class="table_">
           <thead>
           <tr>
        <th style="width: 15%;">
        <select class="form-control dropdown_size" name="processf" id="processf">
          <option class="option_css" value="0">Process</option>
        </select>
        </th>
       <th style="width: 50%;">
       <select class="form-control dropdown_size" name="pro_name" id="pro_name">
          <option class="option_css" value="0">Project Name</option>
        </select>
        </th>
        <th style="width: 13%;">Asked By</th>
        <th style="width: 10%;" >Asked Date</th>
        <th style="width: 5%;">Delegate</th>
           </tr>
           </thead>
           <tbody class="table_">	
           </tbody>
           </table>
           <ul id="design_superv1" style="margin-top: 0%; margin-left: 20%;"> </ul>
           <input id="hold_res1" name="hold_res_" value="" style="display: none;"/>
           <input id="hold_res2" name="hold_res_" value="" style="display: none;"/>
           <div id="hold_filename"></div>
            <ul id="hold_response" style="margin-left: 20%;"></ul>
	</div>
	<div class="sup_manger item_co c_elite" style="display: none;">
	<p style="text-align:center;margin-top:1.5%; margin-bottom:-1.0%;font-weight: bold; font-size: 20px;">Create Elite User or Super Admin</p>
	<form action="elit_super_pri" method="post" name="uformcreate" onsubmit="return(check_lis());">
<div class="formup">
<table border="0" style="text-align: center;">
<tr>
<td>Email:</td>
<td><input type="email" name="elitesu_email" placeholder="Enter users email" style="width: 280px; height: 20px;" required></td>
</tr>
<tr>
					<td class="td">User Type: </td>
					<td><select id="eli_sup" name="eli_sup" class="form-control">
					<option value="0">----------------Select User Type-------------</option>
					<option value="120">Elite User</option>
					<option value="110">Administrator</option>
					</select>
					</td>
				</tr>
<tr>
<td></td>
<td style="text-align:  center;"><input style="font-weight: bold; font-size: 16px;" type="submit" value="Confirm"></td>
</tr>
</table>
</div>
</form>
<c:if test="${not empty preved1}">
            <div class="msg">${preved1}</div>
        </c:if>
         <c:if test="${not empty existes1}">
            <div class="existes">${existes1}</div>
        </c:if>
         <c:if test="${not empty noneexists}">
            <div class="noneexists">Warning: ${noneexists}</div>
        </c:if>
        <c:if test="${not empty error1}">
            <div class="error">Error: ${error1}</div>
        </c:if>
	</div>
	<table id="hold_user_profile" style="text-align: center;margin-top: 1%;margin-left:  65%;width: 30%;"></table>
	</div>

<script type="text/javascript" src="dist/control_confrimation.js"></script>
<script type="text/javascript">
document.getElementById("cpr_logout").addEventListener("click", function(){
	var logout=document.getElementById("pr_logout");
	if(logout.style.display=="none"){
		logout.style.display="block";
	}
	else{
		logout.style.display="none";	
	}
})
var li_elements1 = document.querySelectorAll(".sup_manger a");
        var item_elements1 = document.querySelectorAll(".item_co");
        for (var i = 0; i < li_elements1.length; i++) {
          li_elements1[i].addEventListener("click", function() {
            li_elements1.forEach(function(li) {
              li.classList.remove("active_li");
            });
            this.classList.add("active_li");
            var li_value = this.getAttribute("data-li");
            item_elements1.forEach(function(item) {
              item.style.display = "none";
            });
            if (li_value == "ask_req") {
                document.querySelector("." + li_value).style.display = "block";
              }
            else if (li_value == "con_req") {
              document.querySelector("." + li_value).style.display = "block";
            } else if (li_value == "c_elite") {
              document.querySelector("." + li_value).style.display = "block";
            } 
            else {
              console.log("");
            }
          });
        }
        	document.getElementById("design_superv1").onclick=function(evnt){
            	var markedCheckbox = document.getElementsByName('c_class'); 
            	for (var checkbox=0; checkbox< markedCheckbox.length; checkbox++){  
            		//var value_check=markedCheckbox[checkbox]
            	    if (markedCheckbox[checkbox].checked){
            	    	if(markedCheckbox[checkbox].value=='Design'){
            	    		document.getElementById("hold_res1").value=markedCheckbox[checkbox].id;	
            	    	}
            	    	else if(markedCheckbox[checkbox].value=='Supervision'){
            	    		document.getElementById("hold_res2").value=markedCheckbox[checkbox].id;	
            	    	}
            	    } 
            	    else if (!markedCheckbox[checkbox].checked){
            	    	if(markedCheckbox[checkbox].value=='Supervision'){
            	    		document.getElementById("hold_res2").value='';
            	    	}
            	    	else if(markedCheckbox[checkbox].value=='Design'){
            	    		document.getElementById("hold_res1").value='';		
            	    	}
            	    }
            	    }	
        }
        
</script>
</body>
</html>