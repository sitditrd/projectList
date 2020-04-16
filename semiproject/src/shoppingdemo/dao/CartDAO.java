package shoppingdemo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import shoppingdemo.dto.CartDTO;
import shoppingdemo.dto.CartPageDTO;
import shoppingdemo.dto.OrderDTO;

public class CartDAO {
	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;

	private CartDAO() {
	}

	private static CartDAO dao = new CartDAO();

	public static CartDAO getInstance() {
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
	
	public void InsertMethod(String member_id, String item_size, String item_name, String item_price, int item_id, String category_id, int item_amount) {
		try {
			conn=init();
			String sql = "insert into cart values(cart_id_seq.nextval, ?, ?, ?, ?, ?, ?, ?)";
			
			pstmt=conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setString(2, item_size);
			pstmt.setString(3, item_name);
			pstmt.setString(4, item_price);
			pstmt.setInt(5, item_id);
			pstmt.setString(6, category_id);
			pstmt.setInt(7, item_amount);
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
	
	public List<CartDTO> ViewMethod(String member_id) {
		
		List<CartDTO> aList = new ArrayList<CartDTO>();
		
		try {
			conn = init();
			String sql = "select * from cart where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				CartDTO dto = new CartDTO();
				dto.setMember_id(rs.getString("member_id"));
				dto.setItem_size(rs.getString("item_size"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_price(rs.getString("item_price"));
				dto.setItem_id(rs.getInt("item_id"));
				dto.setCategory_id(rs.getString("category_id"));
				dto.setItem_amount(rs.getString("item_amount"));
				
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
	
	public void TotalDeleteMethod(String member_id) {
		try {
			conn = init();
			String sql = "delete from cart where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
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
	
	public String ExtractItemNameMethod(String member_id, int index) {
		String item_name="";
		try {
			conn = init();
			String sql = "SELECT b.* FROM( SELECT rownum rm, a.* "
					+ " FROM(SELECT item_name "
					+ " FROM cart where member_id=?) a ) b "
					+ " WHERE b.rm >= ? and b.rm < ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setInt(2, index);
			pstmt.setInt(3, index+1);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				item_name = rs.getString("item_name");
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
		
		return item_name;
	}
	
	public String ExtractItemSizeMethod(String member_id, int index) {
		String item_size="";
		try {
			conn = init();
			String sql = "SELECT b.* FROM( SELECT rownum rm, a.* "
					+ " FROM(SELECT item_size "
					+ " FROM cart where member_id=?) a ) b "
					+ " WHERE b.rm >= ? and b.rm < ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setInt(2, index);
			pstmt.setInt(3, index+1);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				item_size = rs.getString("item_size");
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
		
		return item_size;
	}
	
	public int ExtractItemAmountMethod(String member_id, int index) {
		int item_amount = 0;
		try {
			conn = init();
			String sql = "SELECT b.* FROM( SELECT rownum rm, a.* "
					+ " FROM(SELECT item_amount "
					+ " FROM cart where member_id=?) a ) b "
					+ " WHERE b.rm >= ? and b.rm < ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setInt(2, index);
			pstmt.setInt(3, index+1);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				item_amount = rs.getInt("item_amount");
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
		
		return item_amount;
	}
	
	public void DeleteMethod(String member_id, String item_name, String item_size, int item_amount) {
		try {
			conn = init();
			
			String sql = "delete from cart where member_id = ? and item_name = ? and item_size = ? and item_amount = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setString(2, item_name);
			pstmt.setString(3, item_size);
			pstmt.setInt(4, item_amount);
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
	
	public CartDTO BuyMethod(String member_id, String item_name, String item_size, int item_amount) {
		CartDTO dto = null;
		try {
			conn = init();
			String sql = "select * from cart where member_id = ? and item_name = ? and item_size = ? and item_amount = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setString(2, item_name);
			pstmt.setString(3, item_size);
			pstmt.setInt(4, item_amount);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				dto = new CartDTO();
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_price(rs.getString("item_price"));
				dto.setItem_amount(rs.getString("item_amount"));
				dto.setItem_size(rs.getString("item_size"));
				dto.setCategory_id(rs.getString("category_id"));
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
	
	//페이지처리를 위한 DAO추가
	public int rowTotalCount(String member_id) {

			int cnt = 0;

			try {
				conn = init();

				String sql = "select count(*) from cart where member_id=?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, member_id);
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

	public List<CartDTO> listMethod(CartPageDTO pdto, String member_id) {
	
		List<CartDTO> aList = new ArrayList<CartDTO>();
		
			try {
				conn = init();
				String sql = "SELECT b.* " + 
						"FROM( SELECT rownum rm, a.* " + 
						"FROM (SELECT * " + 
						"FROM cart " + 
						"where member_id = ? ) a ) b " + 
						"WHERE b.rm >= ? and b.rm <= ? ";
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, member_id);
				pstmt.setInt(2, pdto.getStartRow());
				pstmt.setInt(3, pdto.getEndRow());
				
				rs = pstmt.executeQuery();
				
				while(rs.next()) {
					CartDTO dto = new CartDTO();
					dto.setNum(rs.getInt("cart_id"));
					dto.setMember_id(rs.getString("member_id"));
					dto.setItem_size(rs.getString("item_size"));
					dto.setItem_name(rs.getString("item_name"));
					dto.setItem_price(rs.getString("item_price"));
					dto.setItem_id(rs.getInt("item_id"));
					dto.setCategory_id(rs.getString("category_id"));
					dto.setItem_amount(rs.getString("item_amount"));
					
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

	public void SuperDeleteMethod(int index) {
		try {
			conn = init();
			
			String sql = "delete from cart where cart_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, index);
			pstmt.executeUpdate();
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} try {
			close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	public CartDTO SuperBuyMethod(int index) {
		CartDTO dto = null;
		try {
			conn = init();
			String sql = "select * from cart where cart_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, index);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				dto = new CartDTO();
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_price(rs.getString("item_price"));
				dto.setItem_amount(rs.getString("item_amount"));
				dto.setItem_size(rs.getString("item_size"));
				dto.setCategory_id(rs.getString("category_id"));
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
		
}

