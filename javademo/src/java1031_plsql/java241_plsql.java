package java1031_plsql;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/*
 * 프로시저 : proc06_othermode
 * sql > 
 * 	begin
 * 		proc06_othermode('정소라', '대전');
 *  end;
 *  /
 *  
 *  
 */

public class java241_plsql {

	private Connection conn;
	private CallableStatement cstmt;
	
	public java241_plsql() {
		process();
	}
	
	public void process() {
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			String url = "jdbc:oracle:thin://@127.0.0.1:1521:xe";
			String user = "hr";
			String password="a1234";
			conn = DriverManager.getConnection(url, user, password);
		
			String sql = "{call proc06_othermode(?, ?)}";
			
			cstmt = conn.prepareCall(sql);
			cstmt.setString(1, "정소라");
			cstmt.setString(2, "대전");
			cstmt.execute();
			
			System.out.println("program end");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	public static void main(String[] args) {
		new java241_plsql();
	}

}
