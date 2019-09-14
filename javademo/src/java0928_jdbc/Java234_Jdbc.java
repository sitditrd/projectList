package java0928_jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Java234_Jdbc {

	public static void main(String[] args) {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			
			String url = "jdbc:oracle:thin://@127.0.0.1:1521:xe";
			String username = "hr";
			String password = "a1234";
			
			conn = DriverManager.getConnection(url, username, password);
			
			stmt = conn.createStatement();
			
			String sql = "SELECT * FROM JOBS ORDER BY job_id";
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				String job_id = rs.getString("job_id");
				String job_title = rs.getString("job_title");
				int min_salary = rs.getInt("min_salary");
				int max_salary = rs.getInt("max_salary");
				
				System.out.printf("%s %s %d %s\n", job_id, job_title, min_salary, max_salary);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(rs != null)
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			
			if(stmt != null)
				try {
					stmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			
			if(conn != null)
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
		}
		
	}

}
