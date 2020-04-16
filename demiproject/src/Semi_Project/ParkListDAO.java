package Semi_Project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ParkListDAO {
	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

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

	public ParkListDTO show() {
		ParkListDTO dto = new ParkListDTO();

		try {
			conn = init();

			String sql = "select Total_Seat_Number, Parking_BrandName, Parking_Location, Parking_HourOfUse_Weekdays,"
					+ " Parking_HourOfUse_Weekend, Parking_Tel, Parking_Manager, Parking_Manager_Phone from Parking where Parking_UID = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, Main.flag);
			pstmt.executeUpdate();

			rs = pstmt.executeQuery();

			while (rs.next()) {
				dto.setTotal_Seat_Number(rs.getInt("Total_Seat_Number"));
				dto.setParking_BrandName(rs.getString("Parking_BrandName"));
				dto.setParking_Location(rs.getString("Parking_Location"));
				dto.setParking_HourOfUse_Weekdays(rs.getString("Parking_HourOfUse_Weekdays"));
				dto.setParking_HourOfUse_Weekend(rs.getString("Parking_HourOfUse_Weekend"));
				dto.setParking_Tel(rs.getString("Parking_Tel"));
				dto.setParking_Manager(rs.getString("Parking_Manager"));
				dto.setParking_Manager_Phone(rs.getString("Parking_Manager_Phone"));
			}

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return dto;
	}

	public ParkListDTO show2() {
		ParkListDTO dto = new ParkListDTO();

		try {
			conn = init();

			String sql = "select Schedule_date from Schedule where Parking_UID = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, Main.flag);
			pstmt.executeUpdate();

			rs = pstmt.executeQuery();

			while (rs.next()) {
				dto.setSchedule_Date(rs.getString("Schedule_date"));
			}

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return dto;
	}
}
