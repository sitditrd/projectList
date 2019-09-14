package Semi_Project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Calendar;

public class PaymentDAO {
	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	Reservation res;

	// 싱글톤 객체로 PaymentDAO()생성한다.
	private PaymentDAO() {

	}

	private static PaymentDAO dao = new PaymentDAO();

	public static PaymentDAO getInstance() {
		return dao;
	}

	public Connection init() throws ClassNotFoundException, SQLException {
		Class.forName("oracle.jdbc.OracleDriver");
		String url = "jdbc:oracle:thin://@127.0.0.1:1521:xe";
		String username = "demiproject";
		String password = "a1234";
		return DriverManager.getConnection(url, username, password);
	}

	public void exit() throws SQLException {
		if (rs != null)
			rs.close();

		if (stmt != null)
			stmt.close();

		if (pstmt != null)
			pstmt.close();

		if (conn != null)
			conn.close();
	}

	public void reserve() {
		Calendar cal = Calendar.getInstance();
		String time = "";

		int year = cal.get(Calendar.YEAR);
		time = String.valueOf(year);
		time += "-";

		int month = cal.get(Calendar.MONTH) + 1;
		time += String.valueOf(month);
		time += "-";

		int date = cal.get(Calendar.DATE);
		time += String.valueOf(date);
		time += " ";

		int hour = cal.get(Calendar.HOUR_OF_DAY);
		time += String.valueOf(hour);
		time += ":";

		int minute = cal.get(Calendar.MINUTE);
		time += String.valueOf(minute);
		time += ":";

		int second = cal.get(Calendar.SECOND);
		time += String.valueOf(second);

		try {
			conn = init();
			String sql = "insert into Payment values(Payment_num_seq.nextval, ?,?,?,?,?,?)";

			pstmt = conn.prepareStatement(sql);

			pstmt.setInt(1, Main.TotalPrice2);
			pstmt.setString(2, Main.TotalType);
			pstmt.setString(3, time);

			if (Main.flag == 1) {
				pstmt.setString(4, "역삼점 주차장");
			} else if (Main.flag == 2) {
				pstmt.setString(4, "강남점 주차장");
			} else if (Main.flag == 3) {
				pstmt.setString(4, "교대점 주차장");
			}

			pstmt.setString(5, Main.space);
			pstmt.setString(6, Main.Id);

			pstmt.executeUpdate();

		} catch (ClassNotFoundException | SQLException e1) {
			e1.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}
	}
}
