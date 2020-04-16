package shoppingdemo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class AdminDeleteDAO {
	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	private AdminDeleteDAO() {
	}

	private static AdminDeleteDAO dao = new AdminDeleteDAO();

	public static AdminDeleteDAO getInstance() {
		return dao;
	}// end getInstance()

	private Connection init() throws ClassNotFoundException, SQLException {
		// 드라이버 연결
		Class.forName("oracle.jdbc.OracleDriver");

		String url = "jdbc:oracle:thin://@14.63.224.112:1521:xe";
		String user = "semiproject";
		String password = "a1234";

		return DriverManager.getConnection(url, user, password);
	}// end init()

	public void close() throws SQLException { // 연결종료

		if (rs != null)
			rs.close();

		if (stmt != null)
			stmt.close();

		if (pstmt != null)
			pstmt.close();

		if (conn != null)
			conn.close();

	}// end close()
	
	public void AdminDeleteMethod(int category_id, String item_name, int item_price) {
		try {
			conn = init();
			String sql = "delete from item where category_id = ? and item_name = ? and item_price = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, category_id);
			pstmt.setString(2, item_name);
			pstmt.setInt(3, item_price);
			pstmt.executeUpdate();
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	public int ExtractCategoryId(String category_name) {
		int category_id=0;
		try {
			conn = init();
			
			String sql = "select category_id from category where category_name = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, category_name);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				category_id = rs.getInt("category_id");
			}
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		return category_id;
	}
}
