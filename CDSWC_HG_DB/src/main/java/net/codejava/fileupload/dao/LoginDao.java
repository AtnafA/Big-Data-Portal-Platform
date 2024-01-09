package net.codejava.fileupload.dao;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.lang.reflect.InvocationTargetException;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import org.postgresql.largeobject.LargeObject;
import org.postgresql.largeobject.LargeObjectManager;
import net.codejava.fileupload.model.File;
public class LoginDao {
	static Connection conn = null;
	static PreparedStatement pst = null;
	public static int User_id;
	public static int UserLo;
	public static long sizecheck=0;
 // validate Elite User
	public static boolean validateElite(String name,String pass) {
		
		boolean status = false;
		// to login into login11 table........
		try {
			conn=connection.dbconnection();	
			pst = conn.prepareStatement("select * from hydrogeos.login11 where user1=? and pass=?");
			pst.setString(1, name);
			pst.setString(2, pass);
			ResultSet rs = pst.executeQuery();
				if(status=rs.next()){
               User_id=rs.getInt("l_id");  
                     
                	}	   	
		} catch (Exception ee) {
			System.out.println("Error connection "+ee.getMessage());
            ee.printStackTrace();
		} 
		
		return status;
	}
	//validate corporate User
	public static List<File> validatecor(String name,String user_name) {	
		List<File>username=new ArrayList<File>();
		// to login into login11 table........
		try {
			conn=connection.dbconnection();
			pst = conn.prepareStatement("select * from hydrogeos.login11 where f_name='"+name+"' and "
					+ "user1='"+user_name+"'");
			ResultSet rs = pst.executeQuery();
				while(rs.next()){
               UserLo=rs.getInt("l_id");
                	}	   	
		} catch (Exception ee) {
			System.out.println("Error connection "+ee.getMessage());
            ee.printStackTrace();
		} 
		
		return username;
	}
	//validate corporate User
		public static List<File> Userdetails(String user_name) {	
			List<File>username=new ArrayList<File>();
			// to login into login11 table........
			try {
				conn=connection.dbconnection();
				pst = conn.prepareStatement("select f_name,pr_type,l_name from hydrogeos.login11 where user1='"+user_name+"'");
				ResultSet rs = pst.executeQuery();
					while(rs.next()){
	               String name=rs.getString(1);
	               String center=rs.getString(2);
	               String process=rs.getString(3);
	               File filen=new File(0,name, center, process);
	               username.add(filen);
	                	}	   	
			} catch (Exception ee) {
				System.out.println("Error connection "+ee.getMessage());
	            ee.printStackTrace();
			} 
			
			return username;
		}
	
	public static List<File> folder(String vecra, String catago,String draft_name,int user_id) throws Throwable{
		List<File> files = new ArrayList<File>();
		try {
			conn=connection.dbconnection();
		if(vecra.equals("Corporation Project")){
			String query="select prd.raw_data_avialable,prd.pro_def_id,prd.pro_name from hydrogeos.project_data as prd,hydrogeos.internal as Int,"
		    + "hydrogeos.login11 as Ln1,hydrogeos.grant_project as Gp where ((Int.int_id=prd.int_id and Ln1.l_id=prd.l_id) or (Ln1.l_id=Gp.user_id and "
		    + "prd.pro_def_id=Gp.pro_id)) and Ln1.l_id="+user_id+" group by prd.pro_name,prd.raw_data_avialable,prd.pro_def_id";
				   Statement statmnt = conn.createStatement();
					ResultSet rs = statmnt.executeQuery(query);
					while(rs.next()){
						String raw_dataava=rs.getString(1);	
						int folid=rs.getInt(2);
						String folname=rs.getString(3);	
						
						File ff=new File("",0,raw_dataava,folid,folname);
						files.add(ff);
					}
					String query_sup="select su.sup_id,su.sub_name from hydrogeos.su_des_sample as su";
						   Statement statmnt_su = conn.createStatement();
							ResultSet rs_sup = statmnt_su.executeQuery(query_sup);
							while(rs_sup.next()){
								int folid=rs_sup.getInt(1);
								String folname=rs_sup.getString(2);	
								InputStream ii = null,ll = null;
								File ff=new File(folid,ii,ll,folname);
								files.add(ff);
							}	
		}
			String query2="select region_id,rname from hydrogeos.region where region_id!=9";
			Statement statmnt = conn.createStatement();
			ResultSet rs = statmnt.executeQuery(query2);
			while(rs.next()){
				int regid=rs.getInt("region_id");
				String regname=rs.getString("rname");
				File ff=new File(regid, regname);
				files.add(ff);
		} 
			Statement statmnt1=conn.createStatement();
			String querybas="select Ba.besin_id,Ba.bname from hydrogeos.basin as Ba where "
					+ "Ba.besin_id!=8";
			ResultSet rs1 = statmnt1.executeQuery(querybas);
			while(rs1.next()){
				int basin_id=rs1.getInt(1);
				String basin_name=rs1.getString(2);
				File ff=new File(basin_id,basin_name,"","");
				files.add(ff);
			}
			String quercenter="select na_id,na_name from hydrogeos.national_cor_center where order_no=2";
			 statmnt = conn.createStatement();
			rs = statmnt.executeQuery(quercenter);
			while(rs.next()){
				int na_id=rs.getInt("na_id");
				String na_name=rs.getString("na_name");
				Integer jj=0;
				File ff=new File(na_id, na_name,jj);
				files.add(ff);
		} 
			String query="select GH.g_id,GH.ghm_name from hydrogeos.geo_hydro_metro as GH";
			rs = statmnt.executeQuery(query);
			while(rs.next()){
				int basin_id=rs.getInt(1);
				String basin_name=rs.getString(2);
				File ff=new File(basin_id,basin_name,0);
				files.add(ff);
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}
		return files;
	}
	public static List<File> data_investigated(int cat_name){
		List<File> files=new ArrayList<File>();
		try {
			conn= connection.dbconnection();
			Statement statmnt=conn.createStatement();
		String query="select Dinv.inv_id,Dinv.inv_name from hydrogeos.data_types_inv as Dinv,hydrogeos.project_data as Pd "
				+ "where Pd.pro_def_id=Dinv.pro_id and Dinv.pro_id="+cat_name+"";
			ResultSet rs = statmnt.executeQuery(query);
			while(rs.next()){
				int basin_id=rs.getInt(1);
				String basin_name=rs.getString(2);
				File ff=new File(basin_id,basin_name,0);
				files.add(ff);
			}
		}catch(Exception ee){
		ee.printStackTrace();	
		}
		return files;
	}
	//access sample category
	public static List<File> Catagory_sample(int pro_id){
		List<File> files=new ArrayList<File>();
		try {
			conn= connection.dbconnection();
			Statement statmnt=conn.createStatement();
		String query="select sb.sb_id,sb.sb_name from hydrogeos.samplebranch_ghm as sb,"
				+ "hydrogeos.geo_hydro_metro as ghm where ghm.g_id=sb.g_id and sb.g_id="+pro_id+"";
			ResultSet rs = statmnt.executeQuery(query);
			while(rs.next()){
				int basin_id=rs.getInt(1);
				String basin_name=rs.getString(2);
				File ff=new File(basin_id,basin_name,0);
				files.add(ff);
			}
		}catch(Exception ee){
		ee.printStackTrace();	
		}
		return files;
	}
	
	public static List<File> Catagory_ofGHM(int cat_id,int pro_id,String cat_name){
		int sampe_idhgm=0;
		List<File> files=new ArrayList<File>();
		try {
			conn= connection.dbconnection();
			Statement statmnt=conn.createStatement();
		String query="select Inc.cat_id,Inc.cat_name from hydrogeos.inv_catagory as Inc,hydrogeos.data_types_inv as Dinv,"
				+ "hydrogeos.project_data as Pd where Pd.pro_def_id=Dinv.pro_id and Dinv.inv_id=Inc.inv_id and "
				+ "Inc.inv_id="+cat_id+" and Dinv.pro_id="+pro_id+"";
			ResultSet rs = statmnt.executeQuery(query);
			while(rs.next()){
				int basin_id=rs.getInt(1);
				String basin_name=rs.getString(2);
				File ff=new File(basin_id,basin_name,0);
				files.add(ff);
			}
			String query1="select ghm.g_id from hydrogeos.geo_hydro_metro as ghm where ghm.ghm_name='"+cat_name+"'";
				ResultSet rs1 = statmnt.executeQuery(query1);
				if(rs1.next()){
					sampe_idhgm=rs1.getInt(1);
					String queryafter="select sb.sb_id,sb.sb_name from hydrogeos.samplebranch_ghm as sb,"
							+ "hydrogeos.geo_hydro_metro as ghm where ghm.g_id=sb.g_id and sb.g_id="+sampe_idhgm+"";
						ResultSet rsafter = statmnt.executeQuery(queryafter);
						while(rsafter.next()){
							InputStream ii = null,iii = null;
							int basin_id=rsafter.getInt(1);
							String basin_name=rsafter.getString(2);
							File ff=new File(basin_id,ii,iii,basin_name);
							files.add(ff);	
						}
					
				}
		}catch(Exception ee){
		ee.printStackTrace();	
		}
		return files;
	}
	// design or Supervision
			public static List<File> Project_idtoaccess(int pro_id){
				List<File> files=new ArrayList<File>();
				try{
					conn=connection.dbconnection();
					Statement statmnt=conn.createStatement();
		String center="select dc.cat_id,dc.cat_name from hydrogeos.doc_cat as dc,hydrogeos.project_data as Pr,hydrogeos.internal as Int"
					+ " where Int.int_id=Pr.int_id and Pr.pro_def_id=dc.pro_id and Pr.pro_def_id="+pro_id+"";
					statmnt = conn.createStatement();
					ResultSet rs = statmnt.executeQuery(center);
					while(rs.next()){
						int na_id=rs.getInt(1);
						String na_name=rs.getString(2);
						File ff=new File(na_id, na_name,"","");
						files.add(ff);
								} 
				}catch(Exception e){
					e.printStackTrace();	
				}
				return files;
			}
			public static List<File>branch(int project_id, int doc_id) throws SQLException{
				int clrid=0;
				int supdes_id=0;
				List<File> file=new ArrayList<File>();
				conn=connection.dbconnection();
	String query3="select Odb.db_id,Odb.db_name from hydrogeos.office_doc_branch as Odb,hydrogeos.doc_cat as dc,hydrogeos.project_data as Pr,hydrogeos.internal as Int"
					+ " where Int.int_id=Pr.int_id and Pr.pro_def_id=dc.pro_id and dc.cat_id=Odb.cat_id and Pr.pro_def_id="+project_id+" and dc.cat_id="+doc_id+"";
							Statement statmnt = conn.createStatement();
							ResultSet rs = statmnt.executeQuery(query3);
								while(rs.next()){
								clrid=rs.getInt(1);
								String clrname=rs.getString(2);
								File ff=new File("", 0,"",clrid,clrname);
								file.add(ff);
											}
			String query="select sam.spec_id,sam.spec_name from hydrogeos.su_des_spacific as sam,hydrogeos.su_des_sample as su where su.sup_id=sam.sup_id and"
					+ " su.sup_id="+doc_id+"";
			Statement statmntdef = conn.createStatement();
			ResultSet rse = statmntdef.executeQuery(query);
			while(rse.next()){
				int basin_id=rse.getInt(1);
				String basin_name=rse.getString(2);
				File ff=new File(basin_id,basin_name,0);
				file.add(ff);
			}
				return file;
			}
			public static List<File>default_dsbranch(int doc_id){
				List<File>file=new ArrayList<File>();
				String query="select sam.spec_id,sam.spec_name from hydrogeos.su_des_spacific as sam,hydrogeos.su_des_sample as su where su.sup_id=sam.sup_id and"
				+ " su.sup_id="+doc_id+"";
				try {
					Statement statmntdef = conn.createStatement();
					ResultSet rse = statmntdef.executeQuery(query);
					while(rse.next()){
						int basin_id=rse.getInt(1);
						String basin_name=rse.getString(2);
						File ff=new File(basin_id,0,0,basin_name);
						file.add(ff);	
				}
				
				}
				catch(Exception e){
					e.printStackTrace();	
				}
				return file;
			}
		//get default sub branches of design or supervision	
			public static List<File>sub_of_defualt_dessup(String supdes_name){
				List<File>file=new ArrayList<File>();
				int DesSup_id=0;
				try{
					conn=connection.dbconnection();
					Statement statmnt=conn.createStatement();
	String query="select su.sup_id,su.sub_name from hydrogeos.su_des_sample as su where"
			+ " su.sub_name='"+supdes_name+"'";
	Statement statmntdef = conn.createStatement();
	ResultSet rse = statmntdef.executeQuery(query);
	while(rse.next()){
		DesSup_id=rse.getInt(1);
		//System.out.println("ID of sub of SUP or DES accessed: "+DesSup_id);
	}
String queryafter="select sam.spec_id,sam.spec_name from hydrogeos.su_des_spacific as sam,hydrogeos.su_des_sample as su where "
		+ "su.sup_id=sam.sup_id and su.sup_id="+DesSup_id+"";
		ResultSet rsafter = statmnt.executeQuery(queryafter);
		while(rsafter.next()){
			int basin_id=rsafter.getInt(1);
			String basin_name=rsafter.getString(2);
			//System.out.println("name of Sub of SUP or DES default: "+basin_name);
			File ff=new File(basin_id,0,0,0,basin_name);
			file.add(ff);
						}
				}catch(Exception e){
					e.printStackTrace();	
				}
				return file;
			}
			//get default sub branches of design or supervision	
			public static List<File>ds_for_newproject(String supdes_name){
				List<File>file=new ArrayList<File>();
				int DesSup_id=0;
				try{
					conn=connection.dbconnection();
					Statement statmnt=conn.createStatement();
	String query="select su.sup_id,su.sub_name from hydrogeos.su_des_sample as su where"
			+ " su.sub_name='"+supdes_name+"'";
	Statement statmntdef = conn.createStatement();
	ResultSet rse = statmntdef.executeQuery(query);
	while(rse.next()){
		DesSup_id=rse.getInt(1);
		//System.out.println("ID of sub of SUP or DES accessed: "+DesSup_id);
	}
String queryafter="select sam.spec_id,sam.spec_name from hydrogeos.su_des_spacific as sam,hydrogeos.su_des_sample as su where "
		+ "su.sup_id=sam.sup_id and su.sup_id="+DesSup_id+"";
		ResultSet rsafter = statmnt.executeQuery(queryafter);
		while(rsafter.next()){
			int basin_id=rsafter.getInt(1);
			String basin_name=rsafter.getString(2);
			//System.out.println("name of Sub of SUP or DES default: "+basin_name);
			File dffile=new File(basin_id, 0,basin_name); 
			file.add(dffile);
						}
				}catch(Exception e){
					e.printStackTrace();	
				}
				return file;
			}
	public static List<File>usertype(){
		List<File>files=new ArrayList<File>();
		try {
			conn=connection.dbconnection();
			String quercenter="select na_id,na_name from hydrogeos.national_cor_center where order_no=2";
			 Statement statmnt = conn.createStatement();
			ResultSet rs = statmnt.executeQuery(quercenter);
			while(rs.next()){
				int na_id=rs.getInt("na_id");
				String na_name=rs.getString("na_name");
				Integer jj=0;
				File ff=new File(na_id, na_name,jj);
				files.add(ff);
		} 
		} catch (Exception e) {
		e.printStackTrace();
		}
		return files;
	}
	public static List<File> accessbasin(String id){
		List<File> files=new ArrayList<File>();
		try {
			conn= connection.dbconnection();
		}catch(Exception ee){
		ee.printStackTrace();	
		}
		return files;
	}
	//To access data in process level from DB to page content only but not to browser
	public static List<File>process_ofcenter(String id) throws SQLException{
		System.out.println("Center ID from DAO= "+id);
		List<File> file=new ArrayList<File>();
		conn=connection.dbconnection();
		String quercenter="select Pr.pro_id,Pr.pro_name from hydrogeos.national_cor_center as Na,hydrogeos.eco_process"
				+ " as Pr where Na.na_id=Pr.na_id and Na.na_id="+id+"";
		Statement statmnt=conn.createStatement();
		ResultSet rs = statmnt.executeQuery(quercenter);
		while(rs.next()){
			int pro_id=rs.getInt(1);
			String pro_name=rs.getString(2);
			File ff=new File(pro_id,pro_name);
			System.out.println("Center ID replay= "+pro_name);
			file.add(ff);
	}
		return file;
	}
	//To access data in process
	public static List<File>process_Askrequest(String id) throws SQLException{
		System.out.println("Ceter Name from DAO= "+id);
		List<File> file=new ArrayList<File>();
		conn=connection.dbconnection();
		String quercenter="select Pr.pro_id,Pr.pro_name from hydrogeos.national_cor_center as Na,hydrogeos.eco_process"
				+ " as Pr where Na.na_id=Pr.na_id and Na.refer='"+id+"'";
		Statement statmnt=conn.createStatement();
		ResultSet rs = statmnt.executeQuery(quercenter);
		while(rs.next()){
			int pro_id=rs.getInt(1);
			String pro_name=rs.getString(2);
			File ff=new File(pro_id,pro_name);
			System.out.println("Project Name = "+pro_name);
			file.add(ff);
	}
		return file;
	}

	//To access data in process level from DB to page content only but not to browser
		public static List<File>projectname_ofprocess(int id) throws SQLException{
			List<File> file=new ArrayList<File>();
			conn=connection.dbconnection();
			String quercenter="select Pro.pro_def_id,Pro.pro_name from hydrogeos.project_data as Pro,hydrogeos.national_cor_center as Na,"
					+ "hydrogeos.eco_process as Pr,hydrogeos.doc_cat as Cat where Na.na_id=Pr.na_id and Pro.pro_def_id=Cat.pro_id and "
					+ "Pr.pro_id=Cat.process_id and Pr.pro_id="+id+" GROUP BY Pro.pro_def_id,Pr.pro_name,Pro.pro_name";
			Statement statmnt=conn.createStatement();
			ResultSet rs = statmnt.executeQuery(quercenter);
			while(rs.next()){
				int pro_id=rs.getInt(1);
				String pro_name=rs.getString(2);
				File ff=new File(pro_id,pro_name);
				file.add(ff);
		}
			String queprocess="SELECT Pr.pro_name,Pro.pro_name,dc.cat_name,Ln1.user1,Pri.asked_date from hydrogeos.askprivlage Pri,"
					+ "hydrogeos.login11 as Ln1,hydrogeos.doc_cat as dc,hydrogeos.project_data as Pro,hydrogeos.eco_process as Pr,"
					+ "hydrogeos.national_cor_center as Na where Na.na_id=Pr.na_id and Pr.pro_id=Pri.process_id and Pro.pro_def_id=dc.pro_id and "
					+ "dc.cat_id=Pri.cat_id and Ln1.l_id=Pri.l_id and Pr.pro_id="+id+" ORDER BY Pri.asked_date DESC";
			Statement statmntpr=conn.createStatement();
			ResultSet rsp = statmntpr.executeQuery(queprocess);
			while(rsp.next()){
				String center="";
				String process=rsp.getString(1);
				String project_name=rsp.getString(2);
				String branch=rsp.getString(3);
				String user_email=rsp.getString(4);
				String date_asked=rsp.getString(5);
				File ff=new File(center, process, project_name, branch, user_email, date_asked);
				file.add(ff);
			}
			return file;
		}
		//To access data in process level from DB to page content only but not to browser
				public static List<File>design_supervision(int id) throws SQLException{
					List<File> file=new ArrayList<File>();
					conn=connection.dbconnection();
					String quercenter="select Cat.cat_id,Cat.cat_name from hydrogeos.project_data as Pro,hydrogeos.doc_cat as Cat where Pro.pro_def_id=Cat.pro_id "
							+ "and Pro.pro_def_id="+id+"";
					Statement statmnt=conn.createStatement();
					ResultSet rs = statmnt.executeQuery(quercenter);
					while(rs.next()){
						int pro_id=rs.getInt(1);
						String pro_name=rs.getString(2);
						File ff=new File(pro_id,pro_name);
						file.add(ff);
				}
					String queprocess="SELECT Pr.pro_name,Pro.pro_name,dc.cat_name,Ln1.user1,Pri.asked_date from hydrogeos.askprivlage Pri,"
							+ "hydrogeos.login11 as Ln1,hydrogeos.doc_cat as dc,hydrogeos.project_data as Pro,hydrogeos.eco_process as Pr,"
							+ "hydrogeos.national_cor_center as Na where Na.na_id=Pr.na_id and Pr.pro_id=Pri.process_id and Pro.pro_def_id=dc.pro_id and "
							+ "dc.cat_id=Pri.cat_id and Ln1.l_id=Pri.l_id and Pro.pro_def_id="+id+" ORDER BY Pri.asked_date DESC";
					Statement statmntpr=conn.createStatement();
					ResultSet rsp = statmntpr.executeQuery(queprocess);
					while(rsp.next()){
						String center="";
						String process=rsp.getString(1);
						String project_name=rsp.getString(2);
						String branch=rsp.getString(3);
						String user_email=rsp.getString(4);
						String date_asked=rsp.getString(5);
						File ff=new File(center, process, project_name, branch, user_email, date_asked);
						file.add(ff);
					}
					return file;
				}
				//To access data in process level from DB to page content only but not to browser
				public static List<File>askedprivilage() throws SQLException{
					List<File> file=new ArrayList<File>();
					conn=connection.dbconnection();
					String quercenter="SELECT Pr.pro_name,Pro.pro_name,dc.cat_name,Ln1.user1,Pri.asked_date from hydrogeos.askprivlage Pri,"
							+ "hydrogeos.login11 as Ln1,hydrogeos.doc_cat as dc,hydrogeos.project_data as Pro,hydrogeos.eco_process as Pr,"
							+ "hydrogeos.national_cor_center as Na where Na.na_id=Pr.na_id and Pr.pro_id=Pri.process_id and Pro.pro_def_id=dc.pro_id and "
							+ "dc.cat_id=Pri.cat_id and Ln1.l_id=Pri.l_id ORDER BY Pri.asked_date DESC";
					Statement statmnt=conn.createStatement();
					ResultSet rs = statmnt.executeQuery(quercenter);
					while(rs.next()){
						String center="";
						String process=rs.getString(1);
						String project_name=rs.getString(2);
						String branch=rs.getString(3);
						String user_email=rs.getString(4);
						String date_asked=rs.getString(5);
						File ff=new File(center, process, project_name, branch, user_email, date_asked);
						file.add(ff);
				}
					return file;
				}
		//Search Engine 
		public static List<File> searchEngine(String searchkey) throws Throwable {
			List<File> files = new ArrayList<File>();
			try{
				if(searchkey!=""){
					conn=connection.dbconnection();		
					Statement stmt = conn.createStatement();
 String query2="select Intr.int_name,Pr.pro_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,hydrogeos.project_data as Pr where "
			    		+ "CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and Pr.raw_data_avialable='YES' and Pr.pro_name ~*'"+searchkey+"'";
						ResultSet rsser = stmt.executeQuery(query2);
			            while (rsser.next()) {
			            	String cor_data=rsser.getString(1);
			                String proj_name = rsser.getString(2);
			          File ff= new File(0,cor_data,proj_name,"");
			                files.add(ff);  
			                System.out.println("Project Name is "+ proj_name+" and Data int ex = "+cor_data); 
			            }
						} 
					conn.close();
		    }catch(Exception ee){
		    ee.printStackTrace();	
		    }
		    return files; 
		}	
		//Search data types 
				public static List<File> searchdatatype(String searchkey) throws Throwable {
					List<File> files = new ArrayList<File>();
					try{
						if(searchkey!=""){
							conn=connection.dbconnection();		
							Statement stmt = conn.createStatement();
String query2="select Intr.int_name,Inv.inv_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,hydrogeos.project_data as Pr,"
		+ "hydrogeos.data_types_inv as Inv where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and Pr.pro_def_id=Inv.pro_id and Pr.pro_name='"+searchkey+"'";
								ResultSet rsser = stmt.executeQuery(query2);
					            while (rsser.next()) {
					            	String cor_data=rsser.getString(1);
					                String proj_name = rsser.getString(2);
					          File ff= new File(0,cor_data,proj_name,"");
					                files.add(ff);  
					                System.out.println("Project Name is "+ proj_name+" and Data int ex = "+cor_data); 
					            }
								} 
							conn.close();
				    }catch(Exception ee){
				    ee.printStackTrace();	
				    }
				    return files; 
				}	
		//search details
		public static List<File> Listdetails(String searchkey, String pro_id) throws Throwable {
			List<File> files = new ArrayList<File>();
			try{
				if(searchkey!=""){
					 conn.close();	
					conn=connection.dbconnection();		
					Statement stmt = conn.createStatement();
					String sqlfext2 = "select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id and "
			    	+ "Inv.inv_name='"+searchkey+"' and Pr.pro_name='"+pro_id+"'";
				            ResultSet rs3 = stmt.executeQuery(sqlfext2);
				            while (rs3.next()) {
				            	int file_id=rs3.getInt(1);
				            	String corp_data = rs3.getString(2);
				                String inter_name = rs3.getString(3);
				                String proj_name = rs3.getString(4);
				                String type_name=rs3.getString(5);
				                String cat_name=rs3.getString(6);
				                String region = rs3.getString(7);
				                String basin = rs3.getString(8);
				                String fil_name=rs3.getString(9);
				                String date=rs3.getString(10);
				                String file_Ext=rs3.getString(11);
				                String project_id=rs3.getString(12);
				                String file_gr=rs3.getString(13);
				                String station_no=rs3.getString(14);
				                String station_name=rs3.getString(15);
				          File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name, region, basin,fil_name,date,file_Ext,project_id,
				        		  file_gr,station_no,station_name);
				          files.add(ff);  
				            }
			            conn.close();	
				}
		    }catch(Exception ee){
		    ee.printStackTrace();	
		    }
		    return files;
		}
	public static List<File> ListAllFile() throws Throwable {
		List<File> files = new ArrayList<File>();
		try{
			conn=connection.dbconnection();		
			Statement stmt = conn.createStatement();
	        String query2="select region_id,rname from hydrogeos.region where region_id!=9";
				ResultSet rst = stmt.executeQuery(query2);
				while(rst.next()){
					int regid=rst.getInt(1);
					String regname=rst.getString(2);
					File ff=new File(regid, regname);
					files.add(ff);
				}
String sql = "select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id";
	            rst = stmt.executeQuery(sql);
	            while (rst.next()) {
	            	int file_id=rst.getInt(1);
	            	String corp_data = rst.getString(2);
	                String inter_name = rst.getString(3);
	                String proj_name = rst.getString(4);
	                String type_name=rst.getString(5);
	                String cat_name=rst.getString(6);
	                String region = rst.getString(7);
	                String basin = rst.getString(8);
	                String fil_name=rst.getString(9);
	                String date=rst.getString(10);
	                String file_Ext=rst.getString(11);
	                String project_id=rst.getString(12);
	                String file_gr=rst.getString(13);
	                String station_no=rst.getString(14);
	                String station_name=rst.getString(15);
	                File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
	                		file_gr,station_no,station_name);
	                files.add(ff);     
	            }
	    }catch(Exception ee){
	    ee.printStackTrace();	
	    }
	    return files;
	}
	public static List<File> selectAFile(String Pro_name,String pro_id,String type_name,
			String cat_name, String filnamed)
			throws Throwable {
        List<File> file = new ArrayList<File>();
        conn=connection.dbconnection();	
        conn.setAutoCommit(false);
        LargeObjectManager lom=((org.postgresql.PGConnection)conn).getLargeObjectAPI();
        Statement stafile=conn.createStatement();  
        Statement stmn=conn.createStatement();
        String name="";
    	String contentType="";
        long size1=0;
  String sql1 = "select Fn.file_name,Fn.file_extension,Fn.file_size,Fn.file_content from hydrogeos.internal as Intr,"
  		+ "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,hydrogeos.file_archive as Fn "
  		+ "where Intr.int_id=Pr.int_id and Pr.pro_def_id=Inv.pro_id and "
  		+ "Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Pr.pro_name='"+Pro_name+"' and Pr.pro_id='"+pro_id+"' and "
+ "Inv.inv_name='"+type_name+"' and Cat.cat_name='"+cat_name+"' and Fn.file_name like '"+filnamed+"%'";
            ResultSet rs=stafile.executeQuery(sql1);
              while (rs.next()) {
                  name = rs.getString(1);
                  contentType = rs.getString(2);
                  size1 = rs.getLong(3);
                  long oid=rs.getInt(4);
                  int buffsize=0x8FFFFFF;
                  byte[] buff=new byte[buffsize];
                  LargeObject obj=lom.open(oid,LargeObjectManager.READ);
                  InputStream input=obj.getInputStream();
                  if(rs.getLong(3)>1990000000){
                 	  java.io.File storefile=new java.io.File("E:/LargeData/"+name);
                 	      if(!storefile.exists()){
                 		  storefile.createNewFile();
                 	      //System.out.println("Size = "+rs.getLong(3));
                 		 // System.out.println("OID = "+rs.getInt(4));
        String sql_data="SELECT lo_export("+rs.getInt(4)+", '"+storefile+"')";
                           stmn.execute(sql_data); 
                 }
                	  }
                	   else{
                	    	  buff=new byte[obj.size()];
                              input.read(buff); 
                        	  }
                 file.add(new File(buff,name,contentType,size1));           
       conn.commit();
		}    
    conn.close();
    return file;
}
	static void unmap(FileChannel fc,MappedByteBuffer mbb){
		Class<?>fclass=fc.getClass();
		try{
			java.lang.reflect.Method unmapmethod=fclass.getDeclaredMethod("unmap", 
					new Class[]{java.nio.MappedByteBuffer.class});
			unmapmethod.setAccessible(true);
			unmapmethod.invoke(null, new Object[]{mbb});
			System.out.println("UnMapped Done");
		}catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
static void readWrit(InputStream ios, BufferedOutputStream bos, long numBytes) throws IOException{
	byte[] buff=new byte[(int) numBytes];
	int val=ios.read(buff);
	if(val!=-1){
		bos.write(buff);
	}	
}
public static List<File>headerfile(){
	List<File> files= new ArrayList<File>();
	try {
		conn=connection.dbconnection();	
		Statement statmnt = conn.createStatement();
			String sqlqu="select Pr.pro_def_id,Pr.pro_name from hydrogeos.project_data as Pr where Pr.raw_data_avialable='YES'";
			ResultSet rs = statmnt.executeQuery(sqlqu);
			while(rs.next()){
				int scata_id=rs.getInt(1);
				String scat_name=rs.getString(2);
				byte []bb=null;
				File ff=new File(0,scata_id,bb,scat_name);
				files.add(ff);
			}
			String query="select Ba.besin_id,Ba.bname from hydrogeos.basin as Ba where "
					+ "Ba.besin_id!=8";
	 rs = statmnt.executeQuery(query);
	while(rs.next()){
		int basin_id=rs.getInt(1);
		String basin_name=rs.getString(2);
		File ff=new File(basin_id,basin_name,0);
		files.add(ff);
	}
		}catch (Exception e) {
			e.printStackTrace();
		}
	return files;
}
public static List<File> ListFilebyprojectName(int id) throws Throwable {
	List<File> files = new ArrayList<File>();
    String sql = "select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id and "
		+ "Pr.pro_def_id="+id+"";
    try{ 
    	conn=connection.dbconnection();	
        Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
            	int file_id=rs.getInt(1);
            	String corp_data = rs.getString(2);
                String inter_name = rs.getString(3);
                String proj_name = rs.getString(4);
                String type_name=rs.getString(5);
                String cat_name=rs.getString(6);
                String region = rs.getString(7);
                String basin = rs.getString(8);
                String fil_name=rs.getString(9);
                String date=rs.getString(10);
                String file_Ext=rs.getString(11);
                String project_id=rs.getString(12);
                String file_gr=rs.getString(13);
                String station_no=rs.getString(14);
                String station_name=rs.getString(15);
                File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
                		file_gr,station_no,station_name);
                files.add(ff);   
            }
        }catch (Exception e) {
			e.printStackTrace();
		}
    return files; 
}
 public static List<File> selectdatatype_Header(int id){
	 List<File> selef=new ArrayList<File>();
	 try {
		 conn=connection.dbconnection();	
	Statement statmnt=conn.createStatement();
	String sql="select Inv.inv_id,Inv.inv_name from hydrogeos.data_types_inv as Inv,hydrogeos.project_data as Pr "
			+ "where Pr.pro_def_id=Inv.pro_id and Pr.pro_def_id="+id+"";
	ResultSet rs = statmnt.executeQuery(sql);
	while(rs.next()){
		int scata_id=rs.getInt(1);
		String scat_name=rs.getString(2);
		byte []bb=null;
		File ff=new File(bb,scata_id,scat_name);
		selef.add(ff);
	}
	} catch (Exception e) {
		e.printStackTrace();
	}
	 return selef;
 }
 public static List<File> select_datatype(int id){
	 List<File> selef=new ArrayList<File>();
	 try {
		 conn=connection.dbconnection();	
	Statement statmnt=conn.createStatement();
	String query="select Cat.cat_id,Cat.cat_name from hydrogeos.inv_catagory as Cat,hydrogeos.data_types_inv as Inv,hydrogeos.project_data as Pr "
			+ "where Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Inv.inv_id="+id+"";
	ResultSet rs = statmnt.executeQuery(query);
	while(rs.next()){
		int scata_id=rs.getInt(1);
		String scat_name=rs.getString(2);
		File ff=new File("",0,"",scata_id,scat_name);
		selef.add(ff);
	}
	String querybycat="select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id and "
		+ "Inv.inv_id="+id+"";
	     rs=statmnt.executeQuery(querybycat);
	while(rs.next()){
		int file_id=rs.getInt(1);
    	String corp_data = rs.getString(2);
        String inter_name = rs.getString(3);
        String proj_name = rs.getString(4);
        String type_name=rs.getString(5);
        String cat_name=rs.getString(6);
        String region = rs.getString(7);
        String basin = rs.getString(8);
        String fil_name=rs.getString(9);
        String date=rs.getString(10);
        String file_Ext=rs.getString(11);
        String project_id=rs.getString(12);
        String file_gr=rs.getString(13);
        String station_no=rs.getString(14);
        String station_name=rs.getString(15);
        File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
        		file_gr,station_no,station_name);
         selef.add(ff);   
         System.out.println("Name of branch is = "+type_name);
	}
	} catch (Exception e) {
		e.printStackTrace();
	}
	 return selef;
 }
 public static List<File> select_branch(int id) throws SQLException{
	 List<File> file=new ArrayList<File>();
	 conn=connection.dbconnection();	
		Statement statmnt=conn.createStatement();
	 try {

	 String querybyfol="select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id "
		+ "and Cat.cat_id="+id+"";	
	ResultSet rs=statmnt.executeQuery(querybyfol);
	while(rs.next()){
		int file_id=rs.getInt(1);
    	String corp_data = rs.getString(2);
        String inter_name = rs.getString(3);
        String proj_name = rs.getString(4);
        String type_name=rs.getString(5);
        String cat_name=rs.getString(6);
        String region = rs.getString(7);
        String basin = rs.getString(8);
        String fil_name=rs.getString(9);
        String date=rs.getString(10);
        String file_Ext=rs.getString(11);
        String project_id=rs.getString(12);
        String file_gr=rs.getString(13);
        String station_no=rs.getString(14);
        String station_name=rs.getString(15);
        File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
        		file_gr,station_no,station_name);
         file.add(ff);   
	}
	} catch (Exception e) {
		e.printStackTrace();
	}
	 return file;
 }
 public static List<File> select_byregion(int id){
	 List<File> selef=new ArrayList<File>();
	 try {
		 conn=connection.dbconnection();	
	Statement statmnt=conn.createStatement();
	String querybycat="select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id and "
		+ "Rg.region_id="+id+"";
	ResultSet rs=statmnt.executeQuery(querybycat);
	while(rs.next()){
		int file_id=rs.getInt(1);
    	String corp_data = rs.getString(2);
        String inter_name = rs.getString(3);
        String proj_name = rs.getString(4);
        String type_name=rs.getString(5);
        String cat_name=rs.getString(6);
        String region = rs.getString(7);
        String basin = rs.getString(8);
        String fil_name=rs.getString(9);
        String date=rs.getString(10);
        String file_Ext=rs.getString(11);
        String project_id=rs.getString(12);
        String file_gr=rs.getString(13);
        String station_no=rs.getString(14);
        String station_name=rs.getString(15);
        File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
        		file_gr,station_no,station_name);
         selef.add(ff);   
	}
	} catch (Exception e) {
		e.printStackTrace();
	}
	 return selef;
 }
 public static List<File> selectbybasin(int bas_id) throws SQLException{
	 List<File>file= new ArrayList<File>();
	 try{
		 conn=connection.dbconnection();	
		 Statement statmnt=conn.createStatement();
	 String querybyfol="select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id and "
		+ "Fn.basin_id="+bas_id+"";
	 ResultSet rs=statmnt.executeQuery(querybyfol);
	 while (rs.next()) {
		 int file_id=rs.getInt(1);
	    	String corp_data = rs.getString(2);
	        String inter_name = rs.getString(3);
	        String proj_name = rs.getString(4);
	        String type_name=rs.getString(5);
	        String cat_name=rs.getString(6);
	        String region = rs.getString(7);
	        String basin = rs.getString(8);
	        String fil_name=rs.getString(9);
	        String date=rs.getString(10);
	        String file_Ext=rs.getString(11);
	        String project_id=rs.getString(12);
	        String file_gr=rs.getString(13);
	        String station_no=rs.getString(14);
	        String station_name=rs.getString(15);
	        File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
	        		file_gr,station_no,station_name);
         file.add(ff);
	}
	 }catch(Exception ee){
		 ee.printStackTrace();
	 }
	 return file; 
 }
 public static List<File> selectbydate(String fdate) throws SQLException{
	 int nomaccepted=Integer.parseInt(fdate);
	 String datetosearch;
	 if(nomaccepted<10){
		datetosearch="0"+fdate; 
	 }
	 else {
		datetosearch=fdate;
	}
	 List<File>file= new ArrayList<File>();
	 try{
		 conn=connection.dbconnection();	
		 Statement statmnt=conn.createStatement();
	 String querybyfol="select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id and "
		+ "SUBSTRING(Fn.prepa_date,6,2)='"+datetosearch+"'";
	 ResultSet rs=statmnt.executeQuery(querybyfol);
	 while (rs.next()) {
		 int file_id=rs.getInt(1);
	    	String corp_data = rs.getString(2);
	        String inter_name = rs.getString(3);
	        String proj_name = rs.getString(4);
	        String type_name=rs.getString(5);
	        String cat_name=rs.getString(6);
	        String region = rs.getString(7);
	        String basin = rs.getString(8);
	        String fil_name=rs.getString(9);
	        String date=rs.getString(10);
	        String file_Ext=rs.getString(11);
	        String project_id=rs.getString(12);
	        String file_gr=rs.getString(13);
	        String station_no=rs.getString(14);
	        String station_name=rs.getString(15);
	        File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
	        		file_gr,station_no,station_name);
         file.add(ff);
	}
	 }catch(Exception ee){
		 ee.printStackTrace();
	 }
	 return file;
	 
 }
 public static List<File> selectbyname(String fname) throws SQLException{
	 List<File>file= new ArrayList<File>();
	 try{
		 conn=connection.dbconnection();	
		 Statement statmnt=conn.createStatement();
	 String querybyfol="select Fn.file_id,Co.data_type,Intr.int_name,Pr.pro_name,Inv.inv_name,Cat.cat_name,Rg.rname,Bs.bname,LEFT(Fn.file_name,POSITION('.' IN RIGHT"
	    		+ "(Fn.file_name, POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),"
	    		+ "Pr.pro_id,Fn.file_gr,Fn.station_no,Fn.station_name from hydrogeos.corporate_data as Co,hydrogeos.internal as Intr,"
		        + "hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,hydrogeos.inv_catagory as Cat,"
	    		+ "hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn where CO.c_id=Intr.cc_id and Intr.int_id=Pr.int_id and "
		+ "Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Rg.region_id=Fn.reg_id and Bs.besin_id=Fn.basin_id and "
		+ "Fn.file_name ~*'"+fname+"'";
	 ResultSet rs=statmnt.executeQuery(querybyfol);
	 while (rs.next()) {
		 int file_id=rs.getInt(1);
	    	String corp_data = rs.getString(2);
	        String inter_name = rs.getString(3);
	        String proj_name = rs.getString(4);
	        String type_name=rs.getString(5);
	        String cat_name=rs.getString(6);
	        String region = rs.getString(7);
	        String basin = rs.getString(8);
	        String fil_name=rs.getString(9);
	        String date=rs.getString(10);
	        String file_Ext=rs.getString(11);
	        String project_id=rs.getString(12);
	        String file_gr=rs.getString(13);
	        String station_no=rs.getString(14);
	        String station_name=rs.getString(15);
	        File ff= new File(file_id,corp_data,inter_name,proj_name,type_name,cat_name,region,basin,fil_name,date,file_Ext,project_id,
	        		file_gr,station_no,station_name);
         file.add(ff);
	}
	 }catch(Exception ee){
		 ee.printStackTrace();
	 }
	 conn.close();
	 return file;	 
 }
	 //Download project doc
public static File selectproFile(String project_name,String pro_id,String type_name,String file_name) throws Throwable {
	     File file = new File(0, "");
	     conn = connection.dbconnection();
	     Statement statmnt=conn.createStatement();
	  String sql = "select Otn.file_name,Otn.file_type,Otn.dsize,Otn.file_content from hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pro,"
	  		+ "hydrogeos.project_data as Pr,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,hydrogeos.o_office_doc_archive as Otn where "
	  		+ "Na.na_id=Pro.na_id and Pro.pro_id=dc.process_id and Pr.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id and "
	  		+ "Pr.pro_name='"+project_name+"' and Pr.pro_id='"+pro_id+"' and dc.cat_name='"+type_name+"' and Otn.file_name like '"+file_name+"%'";
	     ResultSet rs=statmnt.executeQuery(sql);
	             while (rs.next()) {
	                 String name = rs.getString(1);
	                 String contentType = rs.getString(2);
	                 int size = rs.getInt(3);
	                 byte[] data = rs.getBytes(4);
	                 file= new File(0,data, name, contentType, size);
	             }
	     return file;
	 }
	 //access project doc in process level
	 public static List<File> AllprojectDoc(String prepared_by,String Pass) throws SQLException{
		 int user_code = 0;
	List<File> files=new ArrayList<File>(); 
	conn=connection.dbconnection();
	Statement statmnt=conn.createStatement();
String sqlqu="select Pr.na_id,Pr.pro_id,Pr.pro_name from hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr where "
+ "Na.na_id=Pr.na_id";
	ResultSet rs = statmnt.executeQuery(sqlqu);
	while(rs.next()){
		int na_id=rs.getInt(1);
		int scata_id=rs.getInt(2);
		String scat_name=rs.getString(3);
		byte []bb=null;
		File fileh=new File(na_id,scata_id,bb,scat_name);
		files.add(fileh);
	}
String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
		+ "Prv.l_id=Ln.l_id and Ln.user1='"+prepared_by+"'";
						rs = statmnt.executeQuery(Accessuser);
						while(rs.next()){
						    user_code=rs.getInt(1);
						}
String sql="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+"";
			rs=statmnt.executeQuery(sql);
			while(rs.next()){
				 int file_id=rs.getInt(1);
				 String process = rs.getString(2);
				 String projectname = rs.getString(3);
				 String Project_id = rs.getString(4);
		         String datatype = rs.getString(5);
		         String databranch = rs.getString(6);
		         String datasubbranch = rs.getString(7);
		         String dataname=rs.getString(8);
		         String date=rs.getString(9);
		         String file_ext=rs.getString(10);
		         int na_id=rs.getInt(11);
File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
		         files.add(ff);
			}
			return files;
		 }
	 //Refresh project doc
	 public static List<File> Referesh(int id, String prepared_by) throws SQLException{
		 int user_code = 0;
	List<File> files=new ArrayList<File>(); 
	conn=connection.dbconnection();
	Statement statmnt=conn.createStatement();
String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
		+ "Prv.l_id=Ln.l_id and Ln.user1='"+prepared_by+"'";
						ResultSet rs = statmnt.executeQuery(Accessuser);
						while(rs.next()){
						    user_code=rs.getInt(1);
						}		
String sql="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+"";
			rs=statmnt.executeQuery(sql);
			while(rs.next()){
				 int file_id=rs.getInt(1);
				 String process = rs.getString(2);
				 String projectname = rs.getString(3);
				 String Project_id = rs.getString(4);
		         String datatype = rs.getString(5);
		         String databranch = rs.getString(6);
		         String datasubbranch = rs.getString(7);
		         String dataname=rs.getString(8);
		         String date=rs.getString(9);
		         String file_ext=rs.getString(10);
		         int na_id=rs.getInt(11);
File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
		         files.add(ff);
			}
			return files;
		 }
	//access Project document
	 public static List<File> process_projectDoc(int id,String Prepaby) throws SQLException{
			List<File> files=new ArrayList<File>(); 
			int user_code=0;
			conn=connection.dbconnection();
			Statement statmnt=conn.createStatement();
			String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
					+ "Prv.l_id=Ln.l_id and Ln.user1='"+Prepaby+"'";
									ResultSet rs = statmnt.executeQuery(Accessuser);
									while(rs.next()){
									    user_code=rs.getInt(1);
									}
String sqlqu="select Pro.pro_def_id,Pro.pro_name from hydrogeos.project_data as Pro,hydrogeos.doc_cat as Cat,hydrogeos.national_cor_center as Na,"
		+ "hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln1,hydrogeos.privileged as Prv where Na.na_id=Pr.na_id and Pro.pro_def_id=Cat.pro_id and"
		+ " Pr.pro_id=Cat.process_id and Ln1.l_id=Prv.l_id and Cat.cat_id=Prv.pr_id and Pr.pro_id="+id+" and Ln1.l_id="+user_code+" "
				+ "GROUP BY Pro.pro_def_id,Pr.pro_name,Pro.pro_name";
			rs = statmnt.executeQuery(sqlqu);
			while(rs.next()){
				int scata_id=rs.getInt(1);
				String scat_name=rs.getString(2);
				byte []bb=null;
				File fileh=new File(0,scata_id,bb,scat_name);
				files.add(fileh);
			}				
		String sql="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+" and Pr.pro_id="+id+"";
			rs=statmnt.executeQuery(sql);
			while(rs.next()){
				 int file_id=rs.getInt(1);
				 String process = rs.getString(2);
				 String projectname = rs.getString(3);
				 String Project_id = rs.getString(4);
		         String datatype = rs.getString(5);
		         String databranch = rs.getString(6);
		         String datasubbranch = rs.getString(7);
		         String dataname=rs.getString(8);
		         String date=rs.getString(9);
		         String file_ext=rs.getString(10);
		         int na_id=rs.getInt(11);
File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
		         files.add(ff);
			}
			return files;
		 }
	//project document by project category
	 public static List<File> proname_projectDoc(int id,String prepaby) throws SQLException{
		 int user_code=0;
			List<File> files=new ArrayList<File>(); 
			conn=connection.dbconnection();
			Statement statmnt=conn.createStatement();
			String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
					+ "Prv.l_id=Ln.l_id and Ln.user1='"+prepaby+"'";
									ResultSet rs = statmnt.executeQuery(Accessuser);
									while(rs.next()){
									    user_code=rs.getInt(1);
									}
String sqlqu="select dc.cat_id,dc.cat_name from hydrogeos.doc_cat as dc,hydrogeos.project_data as Pr where Pr.pro_def_id=dc.pro_id and Pr.pro_def_id="+id+"";
			rs = statmnt.executeQuery(sqlqu);
			while(rs.next()){
				int scata_id=rs.getInt(1);
				String scat_name=rs.getString(2);
				byte []bb=null;
				File fileh=new File(0,scata_id,bb,scat_name);
				files.add(fileh);
			}			
			String sql="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+" and Pro.pro_def_id="+id+"";
			rs=statmnt.executeQuery(sql);
			while(rs.next()){
				 int file_id=rs.getInt(1);
				 String process = rs.getString(2);
				 String projectname = rs.getString(3);
				 String Project_id = rs.getString(4);
		         String datatype = rs.getString(5);
		         String databranch = rs.getString(6);
		         String datasubbranch = rs.getString(7);
		         String dataname=rs.getString(8);
		         String date=rs.getString(9);
		         String file_ext=rs.getString(10);
		         int na_id=rs.getInt(11);
File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
		         files.add(ff);
			}
			return files;
		 }
	//project doc type
		 public static List<File> doctype_projectDoc(int id, String Prepby) throws SQLException{
			 int user_code=0;
				List<File> files=new ArrayList<File>(); 
				conn=connection.dbconnection();
				Statement statmnt=conn.createStatement();
	String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
			+ "Prv.l_id=Ln.l_id and Ln.user1='"+Prepby+"'";
							ResultSet rs = statmnt.executeQuery(Accessuser);
							while(rs.next()){
							    user_code=rs.getInt(1);
							}	
	String sqlqu="select db.db_id,db.db_name from hydrogeos.office_doc_branch as db,hydrogeos.doc_cat as dc where "
			+ "dc.cat_id=db.cat_id and dc.cat_id="+id+"";
				rs = statmnt.executeQuery(sqlqu);
				while(rs.next()){
					int scata_id=rs.getInt(1);
					String scat_name=rs.getString(2);
					byte []bb=null;
					File fileh=new File(0,scata_id,bb,scat_name);
					files.add(fileh);
				}			
	String sql="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+" and dc.cat_id="+id+"";
				rs=statmnt.executeQuery(sql);
				while(rs.next()){
					int file_id=rs.getInt(1);
					 String process = rs.getString(2);
					 String projectname = rs.getString(3);
					 String Project_id = rs.getString(4);
			         String datatype = rs.getString(5);
			         String databranch = rs.getString(6);
			         String datasubbranch = rs.getString(7);
			         String dataname=rs.getString(8);
			         String date=rs.getString(9);
			         String file_ext=rs.getString(10);
			         int na_id=rs.getInt(11);
	File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
			         files.add(ff);
				}
				return files;
			 }
		//project doc Cluster
		 public static List<File> cluster_projectDoc(int id,String Prepby) throws SQLException{
			 int user_code=0;
				List<File> files=new ArrayList<File>(); 
				conn=connection.dbconnection();
				Statement statmnt=conn.createStatement();
				String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
						+ "Prv.l_id=Ln.l_id and Ln.user1='"+Prepby+"'";
										ResultSet rs = statmnt.executeQuery(Accessuser);
										while(rs.next()){
										    user_code=rs.getInt(1);
										}				
	String sql="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+" and db1.db_id="+id+"";
				rs=statmnt.executeQuery(sql);
				while(rs.next()){
					int file_id=rs.getInt(1);
					 String process = rs.getString(2);
					 String projectname = rs.getString(3);
					 String Project_id = rs.getString(4);
			         String datatype = rs.getString(5);
			         String databranch = rs.getString(6);
			         String datasubbranch = rs.getString(7);
			         String dataname=rs.getString(8);
			         String date=rs.getString(9);
			         String file_ext=rs.getString(10);
			         int na_id=rs.getInt(11);
	File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
			         files.add(ff);
				}
				return files;
			 }
	 public static List<File> accessprobasin(String U_ID,String perby){
		 int user_code=0;
		 List<File>file= new ArrayList<File>();
		 try{
			 conn=connection.dbconnection();
			 Statement statmnt=conn.createStatement();
			 String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
						+ "Prv.l_id=Ln.l_id and Ln.user1='"+perby+"'";
										ResultSet rs = statmnt.executeQuery(Accessuser);
										while(rs.next()){
										    user_code=rs.getInt(1);
										}		
		 String querybyfol="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+" and Pro.pro_id ~*'"+U_ID+"'";
		 rs=statmnt.executeQuery(querybyfol);
		 while (rs.next()) {
			 int file_id=rs.getInt(1);
			 String process = rs.getString(2);
			 String projectname = rs.getString(3);
			 String Project_id = rs.getString(4);
	         String datatype = rs.getString(5);
	         String databranch = rs.getString(6);
	         String datasubbranch = rs.getString(7);
	         String dataname=rs.getString(8);
	         String date=rs.getString(9);
	         String file_ext=rs.getString(10);
	         int na_id=rs.getInt(11);
File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
	         file.add(ff);
		}
		 }catch(Exception ee){
			 ee.printStackTrace();
		 }
		 return file;
		 
	 }
	//search project data by Name
		 public static List<File> accessprobydate(String fdate,String Prepby) throws SQLException{
			 int user_code=0;
			 List<File>file= new ArrayList<File>();
			 conn=connection.dbconnection();
			 Statement statmnt=conn.createStatement();
			 String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
						+ "Prv.l_id=Ln.l_id and Ln.user1='"+Prepby+"'";
										ResultSet rs = statmnt.executeQuery(Accessuser);
										while(rs.next()){
										    user_code=rs.getInt(1);
										}	
			 try{
			 String querybyfol="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+" and EXTRACT(YEAR from Otn.prepared_date)='"+fdate+"'";
			 rs=statmnt.executeQuery(querybyfol);
			 while (rs.next()) {
				 int file_id=rs.getInt(1);
				 String process = rs.getString(2);
				 String projectname = rs.getString(3);
				 String Project_id = rs.getString(4);
		         String datatype = rs.getString(5);
		         String databranch = rs.getString(6);
		         String datasubbranch = rs.getString(7);
		         String dataname=rs.getString(8);
		         String date=rs.getString(9);
		         String file_ext=rs.getString(10);
		         int na_id=rs.getInt(11);
	File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
		         file.add(ff);
			}
			 }catch(Exception ee){
				 ee.printStackTrace();
			 }
			 return file; 
		 }
	 //search project data by Name
	 public static List<File> accessprobyname(String fname,String prepby) throws SQLException{
		 int user_code=0;
		 List<File>file= new ArrayList<File>();
		 conn=connection.dbconnection();
		 Statement statmnt=conn.createStatement();
		 String Accessuser="select Prv.l_id from hydrogeos.privileged as Prv,hydrogeos.login11 as Ln where "
					+ "Prv.l_id=Ln.l_id and Ln.user1='"+prepby+"'";
									ResultSet rs = statmnt.executeQuery(Accessuser);
									while(rs.next()){
									    user_code=rs.getInt(1);
									}	
		 try{
		 String querybyfol="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$'),Na.na_id from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln,hydrogeos.privileged as Prv "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Prv.l_id and dc.cat_id=Prv.pr_id and Prv.l_id="+user_code+" and Otn.file_name ~*'"+fname+"'";
		 rs=statmnt.executeQuery(querybyfol);
		 while (rs.next()) {
			 int file_id=rs.getInt(1);
			 String process = rs.getString(2);
			 String projectname = rs.getString(3);
			 String Project_id = rs.getString(4);
	         String datatype = rs.getString(5);
	         String databranch = rs.getString(6);
	         String datasubbranch = rs.getString(7);
	         String dataname=rs.getString(8);
	         String date=rs.getString(9);
	         String file_ext=rs.getString(10);
	         int na_id=rs.getInt(11);
File ff= new File(file_id,process,projectname, Project_id,datatype, databranch,datasubbranch,dataname,date,file_ext,na_id);
	         file.add(ff);
		}
		 }catch(Exception ee){
			 ee.printStackTrace();
		 }
		 conn.close();
		 return file; 
	 }
	 //project details
	 public static List<File> projdetails(int center_id,int process_id, int pro_id,String des_su_id) throws SQLException{
		 
		 List<File>file= new ArrayList<File>();
		 conn=connection.dbconnection();
		 Statement statmnt=conn.createStatement();							
									
		 try{
		 String querybyfol="select Otn.file_id,Na.na_name,Pr.pro_name,Pro.pro_name,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),"
	+ "Otn.prepared_date,regexp_matches(Otn.file_name,'\\.(\\w+)$') from "
	+ "hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,"
	+ "hydrogeos.eco_process as Pr where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and "
	+ "dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id and Na.na_id="+center_id+" and "
	+ "Pr.pro_id="+process_id+" and Pro.pro_def_id="+pro_id+" and dc.cat_name='"+des_su_id+"'";
		 ResultSet rs=statmnt.executeQuery(querybyfol);
		 while (rs.next()) {
			 int file_id=rs.getInt(1);
         	String center = rs.getString(2);
             String process = rs.getString(3);
             String proj_name = rs.getString(4);
             String cat_name=rs.getString(5);
             String branch_name=rs.getString(6);
             String draft_final=rs.getString(7);
             String fil_name=rs.getString(8);
             String date=rs.getString(9);
             String file_Ext=rs.getString(10);
             String file_gr="";
             String station_no="";
             String station_name="";
             String region = "";
             String basin = "";
       File ff= new File(file_id,center,process,proj_name,cat_name,branch_name,region, basin,fil_name,date,file_Ext,draft_final,
     		  file_gr,station_no,station_name); 
	         file.add(ff);
		}
		 }catch(Exception ee){
			 ee.printStackTrace();
		 }
		 conn.close();
		 return file; 
	 }
	 public static List<File> access_modify_delete(String fname) throws SQLException{
		 List<File> files=new ArrayList<File>();
		 conn=connection.dbconnection();
		 String sql ="select Fn.file_id,Pr.pro_name,Inv.inv_name,Cat.cat_name,Fn.file_gr,"
		 		+ "LEFT(Fn.file_name,POSITION('.' IN RIGHT(Fn.file_name,POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Rg.rname,Bs.bname,"
					+ "Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),Pr.pro_id from hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,"
					+ "hydrogeos.inv_catagory as Cat,hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn,hydrogeos.login11 as Ln "
					+ "where Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Fn.prepared_by=Ln.l_id and Fn.reg_id=Rg.region_id "
					+ "and Fn.basin_id=Bs.besin_id and Fn.prepared_by="+fname+" order by Fn.prepa_date desc";
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				int id=rs.getInt(1);
			    String project_name = rs.getString(2);
			    String data_type = rs.getString(3);
			    String barnch_name = rs.getString(4);
			    String dataset=rs.getString(5);
			    String fil_name=rs.getString(6);
			    String region=rs.getString(7);
			    String basin=rs.getString(8);
			    String date_ = rs.getString(9);
			    String file_extension=rs.getString(10);
			    String pro_id=rs.getString(11);
			 File ff= new File(id,project_name,data_type,barnch_name,dataset,fil_name,region,basin,date_,file_extension,pro_id);
			   files.add(ff);
			}
		 return files;
	 } 
	 public static List<File> _deleteFile(String pro_name,String data_type1,String fname,String prepared_by){
		 List<File> files=new ArrayList<File>();
		 System.out.println("User id is = "+prepared_by);
		 try {
			conn=connection.dbconnection();
			String deletef="delete from hydrogeos.file_archive as Fn USING hydrogeos.login11 as Ln1 where "
					+ "Fn.prepared_by=Ln1.l_id and Fn.file_name like '"+fname+"%' and Fn.prepared_by="+prepared_by+"";
			        Statement prep_delete=conn.createStatement();
					    boolean whathappened= prep_delete.execute(deletef);
					     System.out.println(whathappened);
					       prep_delete.close();
					 String sql ="select Fn.file_id,Pr.pro_name,Inv.inv_name,Cat.cat_name,Fn.file_gr,"
					 		+ "LEFT(Fn.file_name,POSITION('.' IN RIGHT(Fn.file_name,POSITION('/' IN REVERSE(Fn.file_name)) - 1))),Rg.rname,Bs.bname,"
								+ "Fn.prepa_date,regexp_matches(Fn.file_name,'\\.(\\w+)$'),Pr.pro_id from hydrogeos.project_data as Pr,hydrogeos.data_types_inv as Inv,"
								+ "hydrogeos.inv_catagory as Cat,hydrogeos.basin as Bs,hydrogeos.region as Rg,hydrogeos.file_archive as Fn,hydrogeos.login11 as Ln "
								+ "where Pr.pro_def_id=Inv.pro_id and Inv.inv_id=Cat.inv_id and Cat.cat_id=Fn.foll_id and Fn.prepared_by=Ln.l_id and Fn.reg_id=Rg.region_id "
								+ "and Fn.basin_id=Bs.besin_id and Fn.prepared_by="+prepared_by+" order by Fn.prepa_date desc";
					 Statement stmt = conn.createStatement();
						ResultSet rs = stmt.executeQuery(sql);
						while (rs.next()) {
							int id=rs.getInt(1);
						    String project_name = rs.getString(2);
						    String data_type = rs.getString(3);
						    String barnch_name = rs.getString(4);
						    String dataset=rs.getString(5);
						    String fil_name=rs.getString(6);
						    String region=rs.getString(7);
						    String basin=rs.getString(8);
						    String date_ = rs.getString(9);
						    String file_extension=rs.getString(10);
						    String pro_id=rs.getString(11);
						 File ff= new File(id,project_name,data_type,barnch_name,dataset,fil_name,region,basin,date_,file_extension,pro_id);
						   files.add(ff);
						}
					 return files;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		 return files;
	 }
	 public static List<File> access_modify_prodata(String fname) throws SQLException{
		 List<File> files=new ArrayList<File>();
		 conn=connection.dbconnection();
		 String sql ="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$') from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Otn.stored_by and Otn.stored_by="+fname+" order by Otn.stored_date desc";
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				int id=rs.getInt(1);
			    String project_name = rs.getString(2);
			    String data_type = rs.getString(3);
			    String barnch_name = rs.getString(4);
			    String dataset=rs.getString(5);
			    String fil_name=rs.getString(6);
			    String region=rs.getString(7);
			    String basin=rs.getString(8);
			    String date_ = rs.getString(9);
			    String file_extension=rs.getString(10);
			 File ff= new File(id,project_name,data_type,barnch_name,dataset,fil_name,region,basin,date_,file_extension,"");
			   files.add(ff);
			}
		 return files;
	 }
	 public static List<File> project_deleteFile(String pro_name,String data_type1,String fname,String prepared_by){
		 List<File> files=new ArrayList<File>();
		 System.out.println("User id is = "+prepared_by);
		 try {
			conn=connection.dbconnection();
			String deletef="delete from hydrogeos.o_office_doc_archive as Otn USING hydrogeos.login11 as Ln1 where "
					+ "Otn.stored_by=Ln1.l_id and Otn.file_name like '"+fname+"%' and Otn.stored_by="+prepared_by+"";
			        Statement prep_delete=conn.createStatement();
					    boolean whathappened= prep_delete.execute(deletef);
					     System.out.println(whathappened);
					       prep_delete.close();
					 String sql ="select Otn.file_id,Pr.pro_name,Pro.pro_name,Pro.pro_id,dc.cat_name,db1.db_name,Otn.drf_final,"
	+ "LEFT(Otn.file_name,POSITION('.' IN RIGHT(Otn.file_name,POSITION('/' IN REVERSE(Otn.file_name)) - 1))),Otn.prepared_date,"
	+ "regexp_matches(Otn.file_name,'\\.(\\w+)$') from hydrogeos.project_data as Pro,hydrogeos.doc_cat as dc,hydrogeos.office_doc_branch as db1,"
	+ "hydrogeos.o_office_doc_archive as Otn,hydrogeos.national_cor_center as Na,hydrogeos.eco_process as Pr,hydrogeos.login11 as Ln "
	+ "where Na.na_id=Pr.na_id and Pr.pro_id=dc.process_id and Pro.pro_def_id=dc.pro_id and dc.cat_id=db1.cat_id and db1.db_id=Otn.db_id "
	+ "and Ln.l_id=Otn.stored_by and Otn.stored_by="+prepared_by+" order by Otn.stored_date desc";
					 Statement stmt = conn.createStatement();
						ResultSet rs = stmt.executeQuery(sql);
						while (rs.next()) {
							int id=rs.getInt(1);
						    String project_name = rs.getString(2);
						    String data_type = rs.getString(3);
						    String barnch_name = rs.getString(4);
						    String dataset=rs.getString(5);
						    String fil_name=rs.getString(6);
						    String region=rs.getString(7);
						    String basin=rs.getString(8);
						    String date_ = rs.getString(9);
						    String file_extension=rs.getString(10);
						 File ff= new File(id,project_name,data_type,barnch_name,dataset,fil_name,region,basin,date_,file_extension,"");
						   files.add(ff);
						}
					 return files;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		 return files;
	 }
}