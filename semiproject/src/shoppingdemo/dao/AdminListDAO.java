package shoppingdemo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import shoppingdemo.dto.AdminPageDTO;
import shoppingdemo.dto.MemberDTO;
import shoppingdemo.dto.OrderDTO;

public class AdminListDAO {
	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	private AdminListDAO() {
	}

	private static AdminListDAO dao = new AdminListDAO();

	public static AdminListDAO getInstance() {
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
	
	public List<MemberDTO> AdminListCheckMethod() {
		List<MemberDTO> aList = new ArrayList<MemberDTO>();
		
		try {
			conn = init();
			String sql = "select * from member";
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				MemberDTO dto = new MemberDTO();
				dto.setNum(rs.getInt("member_code"));
				dto.setMember_id(rs.getString("member_id"));
				dto.setMember_name(rs.getString("member_name"));
				
				aList.add(dto);
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
		
		return aList;
	}
	
	public MemberDTO AdminListCheckDetailMethod(String member_id) {
		
		MemberDTO dto = new MemberDTO();

		try {
			conn = init();
			String sql = "select * from member where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				dto.setMember_name(rs.getString("member_name"));
				dto.setMember_addr(rs.getString("member_addr"));
				dto.setMember_birth(rs.getString("member_birth"));
				dto.setMember_email(rs.getString("member_email"));
				dto.setMember_tel(rs.getString("member_tel"));
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
		
		return dto;
	}

	public List<MemberDTO> listMethod(AdminPageDTO pdto) {
		List<MemberDTO> aList = new ArrayList<MemberDTO>();
		
		try {
			conn=init();
			String sql = "SELECT b.* " + 
					"FROM( SELECT rownum rm, a.* " + 
					"FROM (SELECT * " + 
					"FROM member ) a ) b " + 
					"WHERE b.rm >= ? and b.rm <= ?";
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, pdto.getStartRow());
			pstmt.setInt(2, pdto.getEndRow());
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				MemberDTO dto = new MemberDTO();
				dto.setNum(rs.getInt("member_code"));
				dto.setMember_id(rs.getString("member_id"));
				dto.setMember_name(rs.getString("member_name"));
				dto.setMember_addr(rs.getString("member_addr"));
				dto.setMember_birth(rs.getString("member_birth"));
				dto.setMember_email(rs.getString("member_email"));
				dto.setMember_tel(rs.getString("member_tel"));
				aList.add(dto);	
			}
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return aList;
	}

	public int rowTotalCount() {
		int cnt = 0;

		try {
			conn = init();

			String sql = "select count(*) from member";

			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();

			if (rs.next())
				cnt = rs.getInt(1);

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return cnt;
	}
}
