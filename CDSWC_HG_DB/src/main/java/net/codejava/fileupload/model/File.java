package net.codejava.fileupload.model;

import java.io.InputStream;
import java.io.OutputStream;

public final class File{
	private String title;
	public byte[] ddat;
	public byte[] LDdat;
    public String corpodata;
    public String name;
    public String spatial_or_non;
    public static String catagory;
    public static String na_cor;
    public String folder;
    public String prepared_by,center_name,user_email,date_asked;
    public String cata_gory;
    public String date, ds_name,ds_subname, addname_sub_sd;
    public int folderid,ds_id,ds_subid, addid_sub_sd;
    public static String vecra;
    public String regnam, basename,class_name, branch_name,sub_branch,datacl,na_name,process,file_gr,user_name;
    public int size1,spa_id,scat_id,regid,baseid,class_id, date_id,dataformid,filenameid,cateid,na_id,datrange_id;
    public String contentType, file_ext,date_range,project_name,project_id,data_type,station_no,station_name,raw_data_avialable;
    public int user_id,Lname,Userdetail;
    public long size;//For file size greater than 2GB
    
    public File(int id){
    this.user_id=id;

    }
    public File(int addid_sub_sd, int def_value,int def_val, int def_va,String addname_sub_sd){
        this.addid_sub_sd=addid_sub_sd;
        this.addname_sub_sd=addname_sub_sd;
        }
    public File(int ds_subid, int def_value,int def_val, String ds_subname){
        this.ds_subid=ds_subid;
        this.ds_subname=ds_subname;
        }
    public File(int ds_id, int novalue_needed, String ds_name){
        this.ds_id=ds_id;
        this.ds_name=ds_name;
        }
    public File(byte[] id, long sizelarge){
        this.ddat=id;
        this.size=sizelarge;

        }
    public File(int file_id,String process,String project_name,String project_id,String data_type,String brachname,String subbranch,
    		String dname,String datenow,String file_ext,int na_id) {
        this.filenameid=file_id;
    	this.process = process;
        this.project_name = project_name;
        this.project_id = project_id;
        this.data_type=data_type;
        this.branch_name = brachname;
        this.sub_branch=subbranch;
        this.name=dname;
        this.date=datenow;
        this.file_ext=file_ext;
        this.na_id=na_id;
    }
    public File(int id,InputStream ii,InputStream i1,String dat){
    this.datrange_id=id;
    this.date_range=dat;	
    }
	public File(String spa_name, int cat_id,String raw_data,int folid,String folname) { 
		this.raw_data_avialable=raw_data;
		this.folderid=folid;
    	this.folder=folname;
	}
	public File(int reid, String rename) { 
		this.regid=reid;
    	this.regnam=rename;
	}
	public File(int na_id, String na_name, Integer ii) { 
		this.na_id=na_id;
    	this.na_name=na_name;
	}
	public File(int besid, String bnamee,int sss) { 
		this.baseid=besid;
    	this.basename=bnamee;
	}
	public File(int claid, String clasname,String sss,String process) { 
		this.class_id=claid;
    	this.class_name=clasname;
    	this.cata_gory=sss;
    	this.process=process;
	}
	//File Access controller
  public File(int fil_id,String corporation,String project_name,String datatype,String branch,String subbranch,String dname,String user,String date_,
		  String fil_ext,String pro_id){
		this.filenameid=fil_id;
	   this.process = corporation;
        this.project_name = project_name;
        this.data_type = datatype;
        this.branch_name=branch;
        this.sub_branch=subbranch;
        this.name=dname;
        this.user_name=user;
        this.date=date_;
        this.file_ext=fil_ext;
        this.project_id=pro_id;
       
    } 
   public File(byte aa[],String filename,String contenttyipe, long file_size){
	this.ddat=aa;
	this.name =filename;
	this.contentType=contenttyipe;
	this.size=file_size;
   }
   public File(int zero_,byte aa[],String filename,String contenttyipe, int file_size){
		this.ddat=aa;
		this.name =filename;
		this.contentType=contenttyipe;
		this.size1=file_size;
	   }
   public File(String center, String process,String project_name,String branch,String user_email,String date_asked) { 
			this.center_name=center;
			this.process=process;
			this.project_name=project_name;
			this.branch_name=branch;
			this.user_email=user_email;
			this.date_asked=date_asked;
		}
		public File(int folid,String folname,byte[]aa) {
			this.folderid=folid;
	    	this.folder=folname;
		}
		public File(byte[]aa,int cat_id,String cata) {
			this.cateid=cat_id;
			this.cata_gory=cata;
		}
		public File(int na_id,int spa_id,byte[]aa,String spa_name) {
			this.na_id=na_id;
			this.spa_id=spa_id;
			this.spatial_or_non=spa_name;
		}
		
		public File(int cl_id,InputStream io,String cl_name) {
			this.class_id=cl_id;
			this.class_name=cl_name;
		}	
		public File(int re_id,String re_name,InputStream io) {
			this.regid=re_id;
			this.regnam=re_name;
		}		
		public File(InputStream io,int be_id,String be_name) {
			this.baseid=be_id;
			this.basename=be_name;
		}		
	  public File (int file_id,String corpo_data,String inter_name,String proj_name,String data_typename, String branch_name,String region, String basin,String 
			  fil_name,String date,String file_ext,String Project_id,String file_group,String sta_no,String sta_name){
	this.cateid=file_id;	
	this.process=corpo_data;
	this.spatial_or_non = inter_name;
    this.cata_gory = proj_name;
    this.datacl=data_typename;
    this.folder=branch_name;
    this.regnam = region;
    this.basename=basin;
    this.name=fil_name;
    this.date=date;
    this.file_ext=file_ext;
    this.project_id=Project_id;
    this.file_gr=file_group;
    this.station_no=sta_no;
    this.station_name=sta_name;
	}
	    public void setTitle(String title) {
	        this.title = title;
	    }
	    public String getTitle() {
	        return this.title;
	    }	
	
		
		
}