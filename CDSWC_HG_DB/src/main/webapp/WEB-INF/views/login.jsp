<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String baseUrl = getServletContext().getInitParameter("BaseUrl");%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="dist/tree.css">
<link rel="shortcut icon" type="image/png" href="dist/img/log4.jpg"/>
<title>ECDSWC Digital Knowledge Management System</title>

<style>
.clickable{
    display: block;
}
.error {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
}

.msg {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
}
</style>
</head>
<body>
<nav class="titbarnav">
    <ul>
    <li> <a href="#">About Us</a> </li>
     <li><a href="#">Contact</a> 
     </li>
      <li id="cliclit"><a href="#">Accounts</a> 
      <div class="fire_login" id="list_it" style="display: none; float: right;">
     <ul>
     <li><a data-li="con_list" class="active_log" href="#">Login</a></li>
     <li><a data-li="con_disc"></a></li>
     </ul>
     </div>
      </li>
    </ul>
	</nav>
	<%if(response.getStatus()==500){ 
	%>
	<p style="color: red; text-align: center;">Connection Error! Please, Try again or Report to System Administrator team!</p><%} %>
	<h2 style="margin-left:0%;margin-top:1%;text-align: center;">ECDSWC Digital Knowledge Management System (dKMS)</h2>
	<div class="item_service con_list" style="display: none;">
	 <c:if test="${not empty error}">
            <div class="error">${error}</div>
        </c:if>
        <c:if test="${not empty msg}">
            <div class="msg">${msg}</div>
        </c:if>
		<form name='loginForm'
          action="<c:url value='login' />" method="post">
  <div class="container">
   <div class="imgcontainer">
    <img src="dist/img/log4.jpg" alt="Avatar" class="avatar">
  </div>
    <label for="username" style="margin-left: auto; margin-right: auto;"><b>User name</b></label>
    <input type="text" placeholder="Enter Username" name="username" required>
     <br>
    <label for="userpass" style="margin-left: auto; margin-right: auto;"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required>
    <br>
    <button type="submit">Login</button>
     <div>
    <button type="button" class="cancelbtn">Cancel</button>
  </div>
  </div>
	</form>
	</div>
	<div class="item_service con_disc" style="margin-top:-1%;">
	<div class="slideshow-container">
	<div class="mySlides fade">
	<img src="dist/img/slide_img/headqc.jpg">
	</div>
	<div class="mySlides fade">
	<img src="dist/img/slide_img/buildingc.jpg">
	</div>
	<div class="mySlides fade">
	<img src="dist/img/slide_img/surveyc.jpg">
	</div>
	<div class="mySlides fade">
	<img src="dist/img/slide_img/tcdc.jpg">
	</div>
	<div class="mySlides fade">
	<img src="dist/img/slide_img/labc.jpg">
	</div>
	<div class="mySlides fade">
	<img src="dist/img/slide_img/geoc.jpg">
	</div>
	<div class="mySlides fade">
	<img src="dist/img/slide_img/waterc.jpg">
	</div>
	</div>
	<br>
<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span>
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>
	</div>
	<script>
		 document.getElementById("cliclit").addEventListener("click", function(){
			 var item_ser=document.getElementById("list_it");
			 if(item_ser.style.display == "none"){
				 item_ser.style.display='block'; 
			 }
			 else{
				 item_ser.style.display='none';  
			 }
		 });
		 /*login display*/
		 var li_elements1 = document.querySelectorAll(".fire_login a");
	        var item_elements1 = document.querySelectorAll(".item_service");
	        for (var i = 0; i < li_elements1.length; i++) {
	          li_elements1[i].addEventListener("click", function() {
	            li_elements1.forEach(function(li) {
	              li.classList.remove("active_log");
	            });
	            this.classList.add("active_log");
	            var li_value = this.getAttribute("data-li");
	            item_elements1.forEach(function(item) {
	              item.style.display = "none";
	            });
	            if (li_value == "con_list") {
	              document.querySelector("." + li_value).style.display = "block";
	            } 
	            else  if (li_value == "con_disc") {
	              document.querySelector("." + li_value).style.display = "block";
	            } 
	            else {
	              console.log("");
	            }
	          });
	        }
	        /*slid controll*/
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
	  slideIndex = 1
	  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active_slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_slide";
  setTimeout(showSlides, 6000); // Change image every 3 seconds
}
	</script> 
</body>
<footer>
	<script type="text/javascript" src="hdfoter/foot.js"></script>
	</footer>  
</html>
 