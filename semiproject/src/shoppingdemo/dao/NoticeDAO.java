package shoppingdemo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import shoppingdemo.dto.NoticeDTO;
import shoppingdemo.dto.PageDTO;

public class NoticeDAO {

	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;

	private NoticeDAO() {
	}

	private static NoticeDAO dao = new NoticeDAO();

	public static NoticeDAO getInstance() {
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

	public int rowTotalCount() {

		int cnt = 0;

		try {
			conn = init();

			String sql = "select count(*) from notice";

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

	}// end rowTotalCount()

	public List<NoticeDTO> listMethod(PageDTO pdto) {

		List<NoticeDTO> aList = new ArrayList<NoticeDTO>();

		try {
			conn = init();

			String sql = "select b.* from (select rownum as rm, a.* "
					+ "from (select notice_id, notice_subject, notice_date "
					+ "from notice order by notice_id desc)a )b where b.rm >= ? and b.rm <= ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, pdto.getStartNum());
			pstmt.setInt(2, pdto.getEndNum());

			rs = pstmt.executeQuery();

			while (rs.next()) {

				NoticeDTO dto = new NoticeDTO();

				dto.setNotice_id(rs.getInt("notice_id"));
				dto.setNotice_subject(rs.getString("notice_subject"));
				dto.setNotice_date(rs.getDate("notice_date"));

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

	}// end listMethod()

	public NoticeDTO viewMethod(int notice_id) {

		NoticeDTO dto = null;

		try {
			conn = init();

			String sql = "select * from notice where notice_id = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, notice_id);

			rs = pstmt.executeQuery();

			if (rs.next()) {
				dto = new NoticeDTO();

				dto.setNotice_id(rs.getInt("notice_id"));
				dto.setNotice_subject(rs.getString("notice_subject"));
				dto.setNotice_content(rs.getString("notice_content"));
				dto.setNotice_date(rs.getDate("notice_date"));
				dto.setNotice_upload(rs.getString("notice_upload"));

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

	}// end viewMethod()

	public void insertMethod(NoticeDTO dto) {

		try {

			conn = init();

			String sql = "insert into notice values(notice_num_seq.nextval, ?, ?, sysdate, ?)";

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, dto.getNotice_subject());
			pstmt.setString(2, dto.getNotice_content());
			pstmt.setString(3, dto.getNotice_upload());

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

	}// end insertMethod()
	
	public void deleteMethod(int notice_id) {

		try {
			conn = init();

			stmt = conn.createStatement();

			String sql = "delete from notice where notice_id = " + notice_id;

			stmt.executeUpdate(sql);

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}// end deleteMethod()

	public void editMethod(NoticeDTO dto) {

		try {
			conn = init();

			String sql = "update notice set notice_subject = ?, notice_content = ?, notice_upload = ? where notice_id = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, dto.getNotice_subject());
			pstmt.setString(2, dto.getNotice_content());
			pstmt.setString(3, dto.getNotice_upload());
			pstmt.setInt(4, dto.getNotice_id());

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

	}// end editMethod()

	public String fileCheck(int notice_id) {

		String filename = null;

		try {
			conn = init();

			String sql = "select notice_upload from notice where notice_id = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, notice_id);

			rs = pstmt.executeQuery();

			if (rs.next()) {
				filename = rs.getString("notice_upload");
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

		return filename;

	}// end fileCheck()

}// end class
