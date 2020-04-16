package shoppingdemo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import shoppingdemo.controller.ShopController;
import shoppingdemo.dto.MemberDTO;

public class MemberDAO {
	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	private MemberDAO() {

	}

	// 싱글톤객체생성
	private static MemberDAO dao = new MemberDAO();

	public static MemberDAO getInstance() {
		return dao;
	}

	private Connection init() throws ClassNotFoundException, SQLException {
		Class.forName("oracle.jdbc.OracleDriver");
		String url = "jdbc:oracle:thin://@14.63.224.112:1521:xe";
		String user = "semiproject";
		String password = "a1234";

		return DriverManager.getConnection(url, user, password);
	}

	private void exit() throws SQLException {
		if (rs != null)
			rs.close();
		if (stmt != null)
			stmt.close();
		if (pstmt != null)
			pstmt.close();
		if (conn != null)
			conn.close();
	}

	public void RegisterMethod(MemberDTO dto) {
		try {
			conn = init();

			String sql = "insert into member values(member_num_seq.nextval, ?, ?, ?, ?, ?, ?, ?)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, dto.getMember_id());
			pstmt.setString(2, dto.getMember_pwd());
			pstmt.setString(3, dto.getMember_name());
			pstmt.setString(4, dto.getMember_birth());
			pstmt.setString(5, dto.getMember_tel());
			pstmt.setString(6, dto.getMember_email());
			pstmt.setString(7, dto.getMember_addr());

			pstmt.executeUpdate();
		}

		catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}// end RegisterMethod()

	// 관리자 확인 및 관리자 로그인
	public boolean adminChk(MemberDTO dto) {

		boolean chk = false;

		try {
			conn = init();

			String sql = "select count(*) from admin where admin_id=? and admin_password=?";

			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, dto.getAdmin_id());
			pstmt.setString(2, dto.getAdmin_password());

			rs = pstmt.executeQuery();

			rs.next();
			if (rs.getInt(1) == 1)
				chk = true;

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return chk;

	}// end adminChk()

	public int memCheck(MemberDTO dto) { // id, password입력할 떄 memDTO에 담아서 올 것이다.
		int cnt = 0;

		try {
			conn = init();

			String sql = "select count(*) from member where member_id=? and member_pwd=?";

			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, dto.getMember_id());
			pstmt.setString(2, dto.getMember_pwd());

			rs = pstmt.executeQuery();

			if (rs.next())
				cnt = rs.getInt(1);

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return cnt;
	}// end memCheck()

	public Boolean searchMethod(String data) {
		Boolean chk = false;

		try {
			conn = init();

			String sql = "SELECT * FROM member WHERE member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, data);

			rs = pstmt.executeQuery();

			if (rs.next()) {
				chk = true;
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

		return chk;
	}// end searchMethod()

	public void updateMember(MemberDTO dto, String member_id) {
		try {
			conn = init();
			String sql = "update member set member_pwd=?, member_tel=?,member_email=?,member_addr=? where member_id=?";

			pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, dto.getMember_pwd());
			pstmt.setString(2, dto.getMember_tel());
			pstmt.setString(3, dto.getMember_email());
			pstmt.setString(4, dto.getMember_addr());
			pstmt.setString(5, member_id);

			pstmt.executeUpdate();

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}// end updateMember()

	public void MemberDelete(String member_id) {
		try {
			conn = init();
			String sql = "delete from member where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.executeUpdate();
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}// end MemberDelete()

	public MemberDTO MemberView() {

		MemberDTO dto = new MemberDTO();

		try {
			conn = init();

			String sql = "select member_tel, member_email, member_addr from member where member_code = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, ShopController.member_code);

			rs = pstmt.executeQuery();

			if (rs.next()) {
				
				dto.setMember_tel(rs.getString("member_tel"));
				dto.setMember_email(rs.getString("member_email"));
				dto.setMember_addr(rs.getString("member_addr"));
				
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

	}// end MemberView()

	public int memberCode(MemberDTO dto) {

		int member_code = 0;

		try {
			conn = init();

			String sql = "SELECT member_code FROM member WHERE member_id = ? and member_pwd=?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, dto.getMember_id());
			pstmt.setString(2, dto.getMember_pwd());

			rs = pstmt.executeQuery();

			if (rs.next())
				member_code = rs.getInt("member_code");

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return member_code;

	}// end memberCode()
}
