<%@page import="java.util.List"%>
<%@page import="net.codejava.fileupload.model.File"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <link rel="shortcut icon" type="image/png" href="dist/img/log4.jpg"/>
<%
    @SuppressWarnings("unchecked")
    List<File> files = (List<File>)request.getAttribute("files");
%>
<%for (File file: files) { %>
<tr>
<td>
    <label class="linklabel"
        onclick="return fileProcessor.downloadfile(<%=file.name%>)">
        <%=file.name%>
    </label>
</td>
<td><%=file.corpodata%></td>
<td>
    <label class="linklabel"
        onclick="return fileProcessor.deletefile(this, <%=File.catagory%>)">
        Delete
    </label>
</td>
</tr>
<%} %>