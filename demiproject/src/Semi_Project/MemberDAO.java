package Semi_Project;

import java.nio.channels.ShutdownChannelGroupException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

public class MemberDAO extends JFrame {

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

	public void enroll(MemberDTO dto) {

		try {
			conn = init();
			String sql = "INSERT INTO Customer values(Customer_num_Seq.nextval, ?, ?, ?, ?, ?, ?)";

			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, dto.getId());
			pstmt.setString(2, dto.getPwd());
			pstmt.setString(3, dto.getName());
			pstmt.setString(4, dto.getPhone());
			pstmt.setString(5, dto.getSex());
			pstmt.setString(6, dto.getCarnum());
			pstmt.executeUpdate();

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				setVisible(false);
				Seat sea = new Seat();
			}
		}
	}

	public void sector(MemberDTO dto) {
		try {
			conn = init();
			String sql = "INSERT INTO seat values(?,?,?)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, Main.flag);
			pstmt.setString(2, dto.getSector());
			pstmt.setInt(3, 1);
			pstmt.executeUpdate();

		} catch (ClassNotFoundException | SQLException e) {
			// e.printStackTrace(); 오류의 정보를 띄어주지 않기 위해서 주석처리함
			Main.flag2 = 1; // 오류의 정보를 띄우지 않고 이 때 제어변수값을 제어한다.
		} finally {
			try {
				exit();
			} catch (SQLException e) {
			}
		}

	}

	public void sector2(MemberDTO dto) {
		try {
			conn = init();
			String sql = "INSERT INTO seat values(?,?,?)";
			pstmt = conn.prepareStatement(sql);

			pstmt.setInt(1, Main.flag);
			pstmt.setString(2, dto.getSector());
			pstmt.setInt(3, 1);
			pstmt.executeUpdate();

		} catch (ClassNotFoundException | SQLException e) {
			Main.flag2 = 1;
		} finally {
			try {
				exit();
			} catch (SQLException e) {
			}
		}
	}

	public void sector3(MemberDTO dto) {
		try {
			conn = init();
			String sql = "INSERT INTO seat values(?,?,?)";
			pstmt = conn.prepareStatement(sql);

			pstmt.setInt(1, Main.flag);
			pstmt.setString(2, dto.getSector());
			pstmt.setInt(3, 1);
			pstmt.executeUpdate();

		} catch (ClassNotFoundException | SQLException e) {
			Main.flag2 = 1;
		} finally {
			try {
				exit();
			} catch (SQLException e) {
			}
		}

	}

	// Ticket 테이블 정보입력
	public void Ticketid(MemberDTO dto) {
		try {
			conn = init();
			String sql = "insert into Ticket values(Ticket_num_seq.nextval,?,?,?,?,?)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, Main.flag);
			pstmt.setInt(2, Main.flag);
			pstmt.setString(3, dto.getSector());
			pstmt.setInt(4, Main.flag);
			pstmt.setString(5, Main.Id);
			pstmt.executeUpdate();

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

	public MemberDTO getuserinfo2() {
		MemberDTO dto = new MemberDTO();

		try {
			conn = init();
			String sql = "select Customer_Id,Customer_Password,Customer_Name,Customer_Tel,Customer_Sex,Customer_CarNum from Customer where Customer_Id=?";
			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, Main.Id);

			rs = pstmt.executeQuery();
			if (rs.next()) {
				dto.setId(rs.getString("Customer_Id"));
				dto.setPwd(rs.getString("Customer_Password"));
				dto.setName(rs.getString("Customer_Name"));
				dto.setPhone(rs.getString("Customer_Tel"));
				dto.setSex(rs.getString("Customer_Sex"));
				dto.setCarnum(rs.getString("Customer_CarNum"));
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

	public void delete() {
		try {
			conn = init();
			String sql = "delete from customer where Customer_Id=?";
			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, Main.Id);
			pstmt.executeUpdate();
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
