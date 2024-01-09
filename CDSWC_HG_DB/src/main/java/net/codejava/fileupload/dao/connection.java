package net.codejava.fileupload.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.swing.JOptionPane;

/**
 * Servlet implementation class connection
 */
public class connection {
	
	public static Connection conn=null;
	static{
		String url="jdbc:postgresql://localhost:5432/Hydro-Geo_Database";
		try {

			Class.forName("org.postgresql.Driver");
			DriverManager.getConnection(url, "postgres", "MmumDdostyab");
				  System.out.println("successfully Connected to PostgreSQL server");
			
		} catch (Exception e) {
			JOptionPane.showMessageDialog(null, "Connection to Database is Failed");
			
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
	public static Connection dbconnection() throws SQLException{
		     return  DriverManager.getConnection("jdbc:postgresql://localhost:5432/Hydro-Geo_Database","postgres","MmumDdostyab");
		}
	}
   
    
    


