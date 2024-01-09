package net.codejava.fileupload.dao;

import net.codejava.fileupload.model.File;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.tools.JavaFileObject;

import org.postgresql.largeobject.LargeObject;
import org.postgresql.largeobject.LargeObjectManager;
public class uploadDao {
	static InputStream ion;
static private Connection conn=null;
//save users
public static File saveusers(String username,String Psw, String pr_code,String Center_type,String Fname,String Lname
		,int centerno,int cl_code){
	String pushdata="insert into hydrogeos.login11(user1,pass,pr_code,pr_type,f_name,l_name,center,gr_id)"
			+ "values(?,?,?,?,?,?,?,?)";
	try{
conn=connection.dbconnection();
PreparedStatement prestatment=conn.prepareStatement(pushdata);
prestatment.setString(1, username);
prestatment.setString(2, Psw);
prestatment.setString(3, pr_code);
prestatment.setString(4, Center_type);
prestatment.setString(5, Fname);
prestatment.setString(6, Lname);
prestatment.setInt(7, centerno);
prestatment.setInt(8, cl_code);
prestatment.executeUpdate();
conn.close();
	}catch(Exception ex){
		ex.printStackTrace();
	}
	File ff=null;
	return ff;
}
//Access Center
public static List<File> center_name(){
	List<File>files=new ArrayList<File>();
	String pushdata="select pr_type from hydrogeos.login11 group by pr_type";
	try{
conn=connection.dbconnection();
Statement stmnt=conn.createStatement();
ResultSet rs=stmnt.executeQuery(pushdata);
while(rs.next()){
	//int user_id=rs.getInt(1);
String c_name=rs.getString(1);	
File ff=new File(0, c_name);
files.add(ff);
}
	}catch(Exception ex){
		ex.printStackTrace();
	}
	
	return files;
}
//Access process
public static List<File> process_name(String center_name){
	List<File>files=new ArrayList<File>();
	String pushdata="select l_name from hydrogeos.login11 where pr_type='"+center_name+"' group by l_name";
	try{
conn=connection.dbconnection();
Statement stmnt=conn.createStatement();
ResultSet rs=stmnt.executeQuery(pushdata);
while(rs.next()){
	//int user_id=rs.getInt(1);
String c_name=rs.getString(1);	
File ff=new File(0, c_name);
files.add(ff);
}
	}catch(Exception ex){
		ex.printStackTrace();
	}
	
	return files;
}
//Access user and project
public static List<File> username_project(String process_name,int user_id){
	List<File>files=new ArrayList<File>();
	String pushdata="select l_id,f_name from hydrogeos.login11 where l_name='"+process_name+"' and pr_code='120' and l_id!="+user_id+"";
	try{
conn=connection.dbconnection();
Statement stmnt=conn.createStatement();
ResultSet rs=stmnt.executeQuery(pushdata);
while(rs.next()){
int user_id_db=rs.getInt(1);
String c_name=rs.getString(2);	
File ff=new File(user_id_db,c_name);
files.add(ff);
}
String query="select prd.pro_def_id,prd.raw_data_avialable,prd.pro_name from hydrogeos.project_data as prd,hydrogeos.internal as Int,"
		+ "hydrogeos.login11 as Ln1 where Int.int_id=prd.int_id and Ln1.l_id=prd.l_id and Ln1.l_id="+user_id+"";
	   Statement statmnt = conn.createStatement();
		ResultSet rs_user = statmnt.executeQuery(query);
		while(rs_user.next()){
			int folid=rs_user.getInt(1);
			String raw_dataava=rs_user.getString(2);
			String folname=rs_user.getString(3);	
			
			File ff=new File(folid,raw_dataava,folname,"");
			files.add(ff);
		}
	}catch(Exception ex){
		ex.printStackTrace();
	}
	return files;
}
//grant project
public static List<File> grant_project(String username, String[]sup_desi_id){
	System.out.println("Requester Name = "+username);
	List<File>files=new ArrayList<File>();
	int user_id = 0;
	try {
	conn=connection.dbconnection();
	Statement stmnt=conn.createStatement();
String sqlsearch="select l_id from hydrogeos.login11 where user1='"+username+"'";
ResultSet rs=stmnt.executeQuery(sqlsearch);
while(rs.next()){
user_id=rs.getInt("l_id");	
}
List<String>desi_super=Arrays.asList(sup_desi_id);
for(String dessuplist_: desi_super){
	System.out.println("Name of Supervision or Design is = "+dessuplist_);
	if(dessuplist_!=""){
		String checkprivilage="select l_id,pr_id from hydrogeos.privileged where l_id="+user_id+" and pr_id="+dessuplist_+"";
		rs=stmnt.executeQuery(checkprivilage);
		if(rs.next()){
			File ff=new File(0,"<font color=#FF0000>File is Already Granted!! </font>");
			files.add(ff);
		}
		else{
			String queryInsert="insert into hydrogeos.privileged(l_id,pr_id)values("+user_id+","+dessuplist_+")";
			stmnt.executeUpdate(queryInsert);
			File ff=new File(0,"<font color=#31708f>File is Successfully Granted!! </font>");
			files.add(ff);
		}		
	}
	
}
conn.close();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return files;
}
//granted project
public static List<File> granted_project(int user_id,int project_id){
	List<File>files=new ArrayList<File>();
	String getvalue="select Gp.user_id,Gp.pro_id from hydrogeos.grant_project as Gp,hydrogeos.login11 as Ln,hydrogeos.project_data as Pr where "
			+ "Ln.l_id=Gp.user_id and Pr.pro_def_id=Gp.pro_id and Gp.user_id="+user_id+" and Gp.pro_id="+project_id+"";
	try{
conn=connection.dbconnection();
Statement stmnt=conn.createStatement();
ResultSet rs=stmnt.executeQuery(getvalue);
if(rs.next()){
String defintion="Project is Already Granted !!";	
File ff=new File(0,"<font color=#FF0000>"+defintion+"</font>");
files.add(ff);
}else{
	String pushdata="insert into hydrogeos.grant_project(user_id,pro_id)values("+user_id+","+project_id+")";
	conn=connection.dbconnection();
	PreparedStatement prstmnt=conn.prepareStatement(pushdata);
	prstmnt.executeUpdate();
	String defintion="You are Succefully granted the project !!";
	File ff=new File(0,"<font color=#31708f>"+defintion+"</font>");
	files.add(ff);
}
	}catch(Exception ex){
		ex.printStackTrace();
	}
	return files;
}
//spatial data save
public static List<File> savespatialfile(int folid,int prepared_by,InputStream filen,String fname,String fileextension,long file_size,
		String date,int reid,int basid,String file_gr,int station_no,String station_name) throws Throwable{
	String f_name="";
	List<File> files=new ArrayList<File>();
	conn=connection.dbconnection();
	try {
		String re_sult="select Fn.file_id,Fn.file_name from hydrogeos.file_archive as Fn where Fn.file_name='"+fname+"'";
		Statement stmnt=conn.createStatement();
		ResultSet rs1=stmnt.executeQuery(re_sult);
		if(rs1.next()){
			int fi_id=rs1.getInt(1);
			f_name=rs1.getString(2);
       File ff= new File(fi_id,"<font color=#FF0000>"+f_name+"</font>");
		files.add(ff);
		}
		else{
			byte buff[]= new byte[0x8FFFFFF];
			if(file_size > 10737418240l){
				System.out.println("Size of File: "+file_size);
				java.io.File filename=new java.io.File("E:/LargeData/"+fname);
				if(!filename.exists()){
					filename.createNewFile();
					FileOutputStream out= new FileOutputStream(filename);
					long LOdata=0;
					while(true){
						int i=filen.read(buff);
						if(i==-1)break;
						else LOdata+=i;
						out.write(buff);
					}
					out.close();
				}
			}
			else{
				conn.setAutoCommit(false);
				LargeObjectManager lom=((org.postgresql.PGConnection)conn).getLargeObjectAPI();
				int oid= lom.create(LargeObjectManager.READ | LargeObjectManager.WRITE);
				LargeObject lo= lom.open(oid,LargeObjectManager.WRITE);
				int buffsize=0x8FFFFFF;
				buff= new byte[buffsize];
				int s,l=0;
				while((s=filen.read(buff, 0, buffsize))>0){
				lo.write(buff);
				l+=s;
				}
				lo.close();
	PreparedStatement	prestatment=conn.prepareStatement("insert into hydrogeos.file_archive(foll_id,prepared_by,file_name,file_extension,"
	+ "file_size,prepa_date,reg_id,basin_id,file_gr,station_no,station_name,file_content)values(?,?,?,?,?,?,?,?,?,?,?,?)");
					prestatment.setInt(1, folid);
					prestatment.setInt(2, prepared_by);
					prestatment.setString(3, fname);
					prestatment.setString(4, fileextension);
					prestatment.setString(6, date);
					System.out.println("the Size of file: "+file_size);
					prestatment.setLong(5, file_size);
					if(reid==0){
						reid=9;
					}
					prestatment.setInt(7, reid);
					if(basid==0){
						basid=8;
					}
				    prestatment.setInt(8, basid);
					prestatment.setString(9, file_gr);
					prestatment.setInt(10, station_no);
					if(station_name==""){
						station_name="Not needed";
					}
					prestatment.setString(11,station_name);
					prestatment.setLong(12, oid);
					prestatment.executeUpdate();
					prestatment.getUpdateCount();
					prestatment.close();
					conn.commit();
	String sql ="select Fn.file_id,Co.data_type,Pr.pro_name,Inv.inv_name,Cat.cat_name,Fn.file_gr,Fn.file_name,Ln.user1,"
			+ "Fn.prepa_date from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
			+ "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
			+ "hydrogeos.file_archive as Fn,hydrogeos.login11 as Ln where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
			+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Fn.prepared_by=Ln.l_id and "
			+ "Fn.file_name='"+fname+"' and Fn.prepa_date='"+date+"'";
	//Statement stmt = conn.createStatement();
	ResultSet rs = stmnt.executeQuery(sql);
	while (rs.next()) {
		int id=rs.getInt(1);
	    String corp_data = rs.getString(2);
	    String proj_name = rs.getString(3);
	    String type_name = rs.getString(4);
	    String cat_name=rs.getString(5);
	    String acc_file_gr=rs.getString(6);
	    String fil_name=rs.getString(7);
	    String user_name=rs.getString(8);
	    String date_ = rs.getString(9);
	 File ff= new File(id,corp_data,proj_name,type_name,cat_name,acc_file_gr,"<font color=#31708f>"+fil_name+"</font>",user_name,date_,"","");
	   files.add(ff);
	}		
			}		
		}
		stmnt.close();
		conn.close();
	} catch (Exception e) {
		System.out.println("Error...."+e);
	}
	  
	return files; 
}
//save other doc
public static List<File> saveotherofficefile(int cl_id,InputStream file,String fname,String fileextension,int prepared_by,
String date,java.sql.Date dddate,long size,String dr_final){
	String f_name="";
	List<File> files=new ArrayList<File>();
	try {
		conn=connection.dbconnection();
		String re_sult="select Otn.file_id,Otn.file_name from hydrogeos.o_office_doc_archive as Otn where Otn.file_name='"+fname+"'";
		Statement stmnt=conn.createStatement();
		ResultSet rs1=stmnt.executeQuery(re_sult);
		if(rs1.next()){
			int fi_id=rs1.getInt(1);
			f_name=rs1.getString(2);
       File ff= new File(fi_id,"<font color=#FF0000>"+f_name+"</font>");
		files.add(ff);
		}
		else{
		PreparedStatement prestatment=conn.prepareStatement("insert into hydrogeos.o_office_doc_archive(db_id,file_content,file_name,file_type,"
+ "stored_by,stored_date,prepared_date,dsize,drf_final)values(?,?,?,?,?,?,?,?,?)");
		prestatment.setInt(1, cl_id);
		if(file!=null){
		prestatment.setBinaryStream(2,file);
		}
		prestatment.setString(3, fname);
		prestatment.setString(4, fileextension);
		prestatment.setInt(5, prepared_by);
		prestatment.setString(6, date);
		prestatment.setDate(7, dddate);
		prestatment.setLong(8, size);
		prestatment.setString(9, dr_final);
		prestatment.executeUpdate();
		prestatment.getUpdateCount();		 
String sql="select Otn.file_id,Pr.pro_name,Pro.pro_name,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Ln.user1,Otn.stored_date"
+ " from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln "
+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id and "
+ "Otn.stored_by=Ln.l_id and Otn.file_name='"+fname+"' and Otn.stored_date='"+date+"'";
	Statement stmt = conn.createStatement();
	 ResultSet rs = stmt.executeQuery(sql);
	  while (rs.next()) {
		  int id=rs.getInt(1);
		  String corp_process = rs.getString(2);
		    String proj_name = rs.getString(3);
		    String type_name = rs.getString(4);
		    String cat_name=rs.getString(5);
		    String acc_file_gr=rs.getString(6);
		    String fil_name=rs.getString(7);
		    String user_name=rs.getString(8);
		    String date_ = rs.getString(9);
		    File filess= new File(id,corp_process,proj_name,type_name,cat_name,acc_file_gr,"<font color=##31708f>"+fil_name+"</font>",user_name,date_,"",""); 
     files.add(filess);
  }
	  conn.close();
		}
	}catch (Exception e) {
			System.out.println("Error...."+e);
		}
	return files; 
}
//ask request
public static List<File>ask_request(int center,int process,int projcet_n,String Desi,String userId,String fname,String lname){
		List<File>files=new ArrayList<File>();
		try {
			int user_id=0;
			int doc_id=0;
			 byte []bb = null;
			// String doc_name="";
								conn=connection.dbconnection();
					String user="select Ln.l_id from hydrogeos.login11 as Ln where Ln.user1='"+userId+"' and Ln.f_name='"+fname+"'";
								Statement stmn=conn.createStatement();
								ResultSet rs1=stmn.executeQuery(user);
								while(rs1.next()){
									user_id=rs1.getInt(1);
								}
			String sql="select As1.cat_id,dc.cat_name,As1.l_id,Ln.user1 from hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.project_data as Cl,"
					+ "hydrogeos.doc_cat as dc,hydrogeos.login11 as Ln,hydrogeos.askprivlage as As1 where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and "
					+ "Cl.pro_def_id=dc.pro_id and dc.cat_id=As1.cat_id and Ln.l_id=As1.l_id and Na.na_id="+center+" and Pr.pro_id="+process+" and "
							+ "Cl.pro_def_id="+projcet_n+" and dc.cat_id="+Desi+" and Ln.user1='"+userId+"' and Ln.f_name='"+fname+"'";
						Statement stmt = conn.createStatement();
						 ResultSet rs = stmt.executeQuery(sql);
						  if(rs.next()) {
							  doc_id=rs.getInt(1);
							  //doc_name=rs.getString(2);
							  user_id=rs.getInt(3);
							  //String username=rs.getString(4); 
	File ffile=new File(doc_id, "<font color=#FF0000>"+"Documents Request is Already Sent !! "+ " </font>", bb); 
							  files.add(ffile);							  
		//System.out.println("Request is Already Asked with Id= "+doc_id+" and name= "+doc_name+" and UserId= "+user_id+" and Username= "+username);  
						  }
						  else{	 
							  LocalDateTime now;
							  DateTimeFormatter timeformat;
							  timeformat= DateTimeFormatter.ofPattern("yyyy/MM/dd");
							  now=LocalDateTime.now();	
String quercenter="insert into hydrogeos.askprivlage(process_id,cat_id,l_id,asked_date)values("+process+","+Desi+","+user_id+",'"+timeformat.format(now)+"')";
				 PreparedStatement statmnt = conn.prepareStatement(quercenter);
				 statmnt.executeUpdate(); 
				 File ffile=new File(doc_id, "Your request is Succefully sent!!", bb);
				  files.add(ffile);	
							  }
		        
		} catch (Exception e) {
		e.printStackTrace();
		}
		return files;
	}

}
