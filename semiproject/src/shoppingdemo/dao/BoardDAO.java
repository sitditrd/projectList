package shoppingdemo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import shoppingdemo.dto.BoardDTO;
import shoppingdemo.dto.PageDTO;
import shoppingdemo.controller.ShopController;
import shoppingdemo.dao.BoardDAO;

public class BoardDAO {

	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;

	private int searchOptionIdx;

	public BoardDAO() {
	}

	private static BoardDAO dao = new BoardDAO();

	public static BoardDAO getInstance() {
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

	// 검색했을 때 리스트 출력하는애
	public int rowTotalCount(int searchOptionIdx, int member_code) {

		int cnt = 0;

		this.searchOptionIdx = searchOptionIdx;

		try {
			conn = init();

			if (searchOptionIdx != 0 && member_code == 0) {
				String sql = "select count(*) from posts where class_code = ?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, searchOptionIdx);

			} else if (searchOptionIdx == 0 && member_code == 0) {
				String sql = "select count(*) from posts";

				pstmt = conn.prepareStatement(sql);

			} else if (member_code != 0) {
				String sql = "select count(*) from posts where member_code = ?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, member_code);

			}

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

	}// end rowTotalCount()

	// 리스트
	public List<BoardDTO> listMethod(PageDTO pdto) {
		List<BoardDTO> aList = new ArrayList<BoardDTO>();
		try {
			conn = init();

			String sql = "select b.* from (select rownum as rm, a.* "
					+ "from (select p.post_id, c.class_name, m.member_code, m.member_id, p.post_date, p.post_views, p.re_level "
					+ "from member m, posts p, classification c where m.member_code = p.member_code "
					+ "and p.class_code = c.class_code ";

			if (searchOptionIdx != 0) {
				sql += "and c.class_code = ? order by ref desc,re_step asc)a)b where b.rm>=? and b.rm<=?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, searchOptionIdx);
				pstmt.setInt(2, pdto.getStartNum());
				pstmt.setInt(3, pdto.getEndNum());

			} else {
				sql += "order by ref desc,re_step asc)a)b where b.rm>=? and b.rm<=?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, pdto.getStartNum());
				pstmt.setInt(2, pdto.getEndNum());
			}

			rs = pstmt.executeQuery();

			while (rs.next()) {

				BoardDTO dto = new BoardDTO();
				dto.setPost_id(rs.getInt("post_id"));
				dto.setClass_name(rs.getString("class_name"));
				dto.setMember_code(rs.getInt("member_code"));
				dto.setMember_id(rs.getString("member_id"));
				dto.setPost_date(rs.getDate("post_date"));
				dto.setPost_views(rs.getInt("post_views"));
				dto.setRe_level(rs.getInt("re_level"));

				aList.add(dto);
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

		return aList;

	}// end listMethod()

	// 글쓰기 메소드
	public void insertMethod(BoardDTO dto) {
		try {
			conn = init();

			if (dto.getRe_level() == 0) { // 일반글

				String sql = "insert into posts values(posts_num_seq.nextval, "
						+ "?, sysdate, 0, posts_ref_seq.nextval, 0, 0, ?, ?, ?)";

				pstmt = conn.prepareStatement(sql);

				pstmt.setString(1, dto.getPost_content());// post_content
				pstmt.setInt(2, dto.getMember_code());// member_code
				pstmt.setInt(3, dto.getClass_code()); // class_code, 인덱스
				pstmt.setString(4, dto.getPost_upload());

			} else { // 답글

				String sql = "insert into posts values(posts_num_seq.nextval, ?, sysdate, 0, ?, ?, ?, ?, ?, ?)";
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, dto.getPost_content());
				pstmt.setInt(2, dto.getRef());
				pstmt.setInt(3, dto.getRe_step());
				pstmt.setInt(4, dto.getRe_level());
				pstmt.setInt(5, dto.getMember_code());
				pstmt.setInt(6, dto.getClass_code());
				pstmt.setString(7, dto.getPost_upload());

			}

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
	}// end insertMethod()

	public void reStepMethod(HashMap<String, Integer> map) {

		try {
			conn = init();

			String sql = "update posts set re_step = re_step + 1 where ref = ? and re_step > ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, map.get("ref"));
			pstmt.setInt(2, map.get("re_step"));

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

	}// end reStepMethod()

	// 글 내용보기
	public BoardDTO viewMethod(BoardDTO dto) {

		BoardDTO viewDto = null;

		try {
			conn = init();

			String sql = "select p.*, m.member_id from posts p, member m "
					+ "where p.member_code = m.member_code and p.post_id = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, dto.getPost_id());

			rs = pstmt.executeQuery();

			if (rs.next()) {

				viewDto = new BoardDTO();

				viewDto.setClass_name(dto.getClass_name());
				viewDto.setClass_code(rs.getInt("class_code"));
				viewDto.setMember_id(rs.getString("member_id"));
				viewDto.setMember_code(rs.getInt("member_code"));
				viewDto.setPost_id(rs.getInt("post_id"));
				viewDto.setPost_date(rs.getDate("post_date"));
				viewDto.setPost_views(rs.getInt("post_views"));
				viewDto.setPost_content(rs.getString("post_content"));
				viewDto.setPost_upload(rs.getString("post_upload"));
				viewDto.setRef(rs.getInt("ref"));
				viewDto.setRe_step(rs.getInt("re_step"));
				viewDto.setRe_level(rs.getInt("re_level"));
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

		return viewDto;

	}// end viewMethod()

	public String classNameGet(int class_code) {

		String class_name = "";

		try {
			conn = init();

			String sql = "select class_name from classification where class_code = " + class_code;

			stmt = conn.createStatement();

			rs = stmt.executeQuery(sql);

			rs.next();

			class_name = rs.getString("class_name");

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return class_name;

	}// end classNameGet()

	public void readCountMethod(int post_id) {
		try {
			conn = init();

			String sql = "update posts set post_views = post_views + 1 where post_id = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, post_id);

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

	}// end readCountMethod()

	public void deleteMethod(int post_id) {

		try {
			conn = init();

			stmt = conn.createStatement();

			String sql = "delete from posts where ref = " + post_id;

			stmt.executeUpdate(sql);

		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

	}// end deleteMethod()

	public void editMethod(BoardDTO dto) {

		try {
			conn = init();

			String sql = "update posts set class_code = ?, post_content = ?, post_upload = ? where post_id = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, dto.getClass_code());
			pstmt.setString(2, dto.getPost_content());
			pstmt.setString(3, dto.getPost_upload());
			pstmt.setInt(4, dto.getPost_id());

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
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return filename;

	}// end fileCheck()

	public String fileMethod(int id, boolean chk) {

		String filename = null;

		try {
			conn = init();

			String sql = "";

			if (chk) {
				sql = "select notice_upload from notice where notice_id = ?";
			} else {
				sql = "select post_upload from posts where post_id = ?";
			}

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id);

			rs = pstmt.executeQuery();

			if (rs.next()) {
				filename = rs.getString(1);
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

		return filename;

	}// end fileMethod()

	public List<BoardDTO> MyWrite(PageDTO pdto) {
		List<BoardDTO> aList = new ArrayList<BoardDTO>();
		try {
			conn = init();

			String sql = "select b.* from (select rownum as rm, a.* "
					+ "from (select p.post_id, c.class_name, m.member_code, m.member_id, p.post_date, p.post_views, p.re_level "
					+ "from member m, posts p, classification c where m.member_code = p.member_code "
					+ "and p.class_code = c.class_code "
					+ "and p.member_code = ? order by ref desc,re_step asc)a)b where b.rm>=? and b.rm<=?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, ShopController.member_code);
			pstmt.setInt(2, pdto.getStartNum());
			pstmt.setInt(3, pdto.getEndNum());

			rs = pstmt.executeQuery();

			while (rs.next()) {

				BoardDTO dto = new BoardDTO();
				
				dto.setPost_id(rs.getInt("post_id"));
				dto.setClass_name(rs.getString("class_name"));
				dto.setMember_code(rs.getInt("member_code"));
				dto.setMember_id(rs.getString("member_id"));
				dto.setPost_date(rs.getDate("post_date"));
				dto.setPost_views(rs.getInt("post_views"));
				dto.setRe_level(rs.getInt("re_level"));

				aList.add(dto);
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

		return aList;

	}// end MyWrite()

}// end class
