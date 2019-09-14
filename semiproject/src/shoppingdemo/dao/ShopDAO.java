package shoppingdemo.dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import shoppingdemo.dto.ListDTO;
import shoppingdemo.dto.PageDTO;

public class ShopDAO {
	
	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	private int cateId;

	private ShopDAO() {
	}

	private static ShopDAO dao = new ShopDAO();

	public static ShopDAO getInstance() {
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
	
	public List<ListDTO> searchListMethod(PageDTO pdto) {
		List<ListDTO> aList = new ArrayList<ListDTO>();
		try {
			conn = init();
			
			if (pdto.getSearchKey().equals("0") && !(pdto.getSearchWord().equals(""))) {
				String sql = "select b.* from (select rownum as rm, a.* "
						+ "from (select c.category_name, i.item_id, i.item_name, i.item_price from item i, category c "
						+ "where i.category_id = c.category_id and i.item_name like ? )a )b "
						+ "where b.rm >= ? and b.rm <= ?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, "%" + pdto.getSearchWord().toLowerCase() + "%");
				pstmt.setInt(2, pdto.getStartNum());
				pstmt.setInt(3, pdto.getEndNum());
			} else {
				String sql = "select b.* from (select rownum as rm, a.* "
						+ "from (select c.category_name, i.item_id, i.item_name, i.item_price from item i, category c "
						+ "where i.category_id = c.category_id "
						+ "and c.category_id = ? and i.item_name like ? )a )b "
						+ "where b.rm >= ? and b.rm <= ?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, Integer.parseInt(pdto.getSearchKey()));
				pstmt.setString(2, "%" + pdto.getSearchWord().toLowerCase() + "%");
				pstmt.setInt(3, pdto.getStartNum());
				pstmt.setInt(4, pdto.getEndNum());
			}

			rs = pstmt.executeQuery();

			while (rs.next()) {

				ListDTO dto = new ListDTO();

				dto.setCategory_name(rs.getString("category_name"));
				dto.setItem_id(rs.getInt("item_id"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_price(rs.getInt("item_price"));
				
				System.out.println(dto.getItem_name());

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
	
	public int rowTotalCount(HashMap<String, String> map, int cateId) {

		int cnt = 0;

		this.cateId = cateId;

		try {
			conn = init();

			if (map == null) {
				String sql = "select count(*) from item where category_id = ?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, cateId);

			} else if (cateId == 0) {
				if (map.get("searchKey").equals("0")) {
					String sql = "select count(*) from item where item_name like ?";

					pstmt = conn.prepareStatement(sql);
					pstmt.setString(1, "%" + map.get("searchWord").toLowerCase() + "%");

				} else {
					String sql = "select count(*) from item where category_id = ? and item_name like ?";

					pstmt = conn.prepareStatement(sql);
					pstmt.setInt(1, Integer.parseInt(map.get("searchKey")));
					pstmt.setString(2, "%" + map.get("searchWord").toLowerCase() + "%");
				}
			}

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
	
	public List<ListDTO> listMethod(PageDTO pdto) {
		List<ListDTO> aList = new ArrayList<ListDTO>();
		try {
			conn = init();

			String sql = "select b.* from (select rownum as rm, a.* "
					+ "from (select c.category_name, i.item_id, i.item_name, i.item_price from item i, category c "
					+ "where i.category_id = c.category_id and c.category_id = ? )a )b "
					+ "where b.rm >= ? and b.rm <= ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, cateId);
			pstmt.setInt(2, pdto.getStartNum());
			pstmt.setInt(3, pdto.getEndNum());

			rs = pstmt.executeQuery();

			while (rs.next()) {

				ListDTO dto = new ListDTO();

				dto.setCategory_name(rs.getString("category_name"));
				dto.setItem_id(rs.getInt("item_id"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_price(rs.getInt("item_price"));

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

	
	public ListDTO viewMethod(String name) {

		ListDTO dto = null;
		try {
			conn = init();
			String sql = "select * from item where item_name=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, name);
			rs = pstmt.executeQuery();
			
			if (rs.next()) {
				
				dto = new ListDTO();
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_price(rs.getInt("item_price"));
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

}// end class
