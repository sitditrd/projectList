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
import shoppingdemo.dto.ItemDTO;
import shoppingdemo.dto.OrderDTO;
import shoppingdemo.dto.OrderDetailDTO;

public class AdminPriceDAO {
	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	private AdminPriceDAO() {
	}

	private static AdminPriceDAO dao = new AdminPriceDAO();

	public static AdminPriceDAO getInstance() {
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
	
	public List<OrderDTO> AdminCheckOrder() {
		List<OrderDTO> aList = new ArrayList<OrderDTO>();
		try {
			conn=init();
			String sql = "select * from list";
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				OrderDTO dto = new OrderDTO();
				dto.setNum(rs.getInt("list_id"));
				dto.setMember_id(rs.getString("member_id"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setList_total_price(rs.getInt("list_total_price"));
				dto.setList_date(rs.getString("list_date"));
				dto.setState(rs.getString("state"));
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

	public List<OrderDTO> listMethod(AdminPageDTO pdto) {
		List<OrderDTO> aList = new ArrayList<OrderDTO>();
		
		try {
			conn=init();
			String sql = "SELECT b.* " + 
					"FROM( SELECT rownum rm, a.* " + 
					"FROM (SELECT list_id, member_id, item_name, list_total_price, list_date, state " + 
					"FROM list ) a ) b " + 
					"WHERE b.rm >= ? and b.rm <= ?";
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, pdto.getStartRow());
			pstmt.setInt(2, pdto.getEndRow());
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				OrderDTO dto = new OrderDTO();
				dto.setNum(rs.getInt("list_id"));
				dto.setMember_id(rs.getString("member_id"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setList_total_price(rs.getInt("list_total_price"));
				dto.setList_date(rs.getString("list_date"));
				dto.setState(rs.getString("state"));
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

			String sql = "select count(*) from list";

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
	
}//end class
