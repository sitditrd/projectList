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
import shoppingdemo.dto.ListPageDTO;
import shoppingdemo.dto.OrderDTO;
import shoppingdemo.dto.OrderDetailDTO;
import shoppingdemo.dto.PageDTO;

public class OrderDAO {
	private Connection conn;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;

	private OrderDAO() {
	}

	private static OrderDAO dao = new OrderDAO();

	public static OrderDAO getInstance() {
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
	
	public void ListInsertMethod(String member_id, String item_name, int list_total_price, String list_date, String paymethod, String state) {
		try {
			conn = init();
			
			String sql = "insert into list values(list_num_seq.nextval, ?, ?, ?, ?, ?, ?)";
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setString(2, item_name);
			pstmt.setInt(3, list_total_price);
			pstmt.setString(4, list_date);
			pstmt.setString(5, paymethod);
			pstmt.setString(6, state);
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

	public int ExtractListIdMethod(String member_id, String item_name, int list_total_price, String list_date) {
		int list_id=0;
		try {
			conn = init();
			String sql = "select list_id from list where member_id=? and item_name=? and list_total_price=? and list_date =?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setString(2, item_name);
			pstmt.setInt(3, list_total_price);
			pstmt.setString(4, list_date);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				list_id = rs.getInt("list_id");
			}
			
			pstmt.executeQuery();
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace(); 
		} finally {
			try {
				close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list_id;
	}

	
	public void OrderDetailInsertMethod(int list_id, String category_id, String item_name, int item_total,
			String item_size, int item_price, String receive_person, String receive_email, String receive_phone,
			String receive_address) {
		try {
			conn = init();
			String sql = "insert into order_detail values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			pstmt=conn.prepareStatement(sql);
			pstmt.setInt(1, list_id);
			pstmt.setString(2, category_id);
			pstmt.setString(3, item_name);
			pstmt.setInt(4, item_total);
			pstmt.setString(5, item_size);
			pstmt.setInt(6, item_price);
			pstmt.setString(7, receive_person);
			pstmt.setString(8, receive_email);
			pstmt.setString(9, receive_phone);
			pstmt.setString(10, receive_address);
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
	
	public void OrderDetailInsertMethod2(int list_id, List<CartDTO> aList, String receive_person, String receive_email, 
			String receive_phone, String receive_address) {
			try {
				conn = init();
				String sql = "insert into order_detail values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
				pstmt=conn.prepareStatement(sql);
				
				for(int i=0; i<aList.size(); i++) {
					pstmt.setInt(1, list_id);
					pstmt.setString(2, (String)aList.get(i).getCategory_id());
					pstmt.setString(3, (String)aList.get(i).getItem_name());
					pstmt.setInt(4, Integer.parseInt(aList.get(i).getItem_amount()));
					pstmt.setString(5, (String)aList.get(i).getItem_size());
					pstmt.setInt(6, Integer.parseInt(aList.get(i).getItem_price()));
					pstmt.setString(7, receive_person);
					pstmt.setString(8, receive_email);
					pstmt.setString(9, receive_phone);
					pstmt.setString(10, receive_address);
					pstmt.executeUpdate();
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
	}
	
	public List<OrderDTO> viewMethod(String member_id) {
		
		List<OrderDTO> aList = new ArrayList<OrderDTO>();
		
		try {
			conn = init();
			String sql = "select * from list where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				OrderDTO dto = new OrderDTO();
				dto.setMember_id(rs.getString("member_id"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setList_total_price(rs.getInt("list_total_price"));
				dto.setList_date(rs.getString("list_date"));
				dto.setState(rs.getString("state"));
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
	
	public String ExtractOrderNameMethod(String member_id) {
		String name = "";
		
		try {
			conn=init();
			
			String sql = "select member_name from member where member_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				name = rs.getString("member_name");
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
		
		return name;
	}
	
	public String ExtractOrderDateMethod(int list_id) {
		String date = "";
		try {
			conn = init();
			String sql = "select list_date from list where list_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, list_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				date = rs.getString("list_date");
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
		return date;
	}
	
	public int ExtractListIdMethod2(String member_id, int index) {
		int list_id=0;
		
		try {
			conn = init();
			String sql = "SELECT b.* FROM( SELECT rownum rm, a.* "
					+ " FROM(SELECT list_id "
					+ " FROM list where member_id=?) a ) b "
					+ " WHERE b.rm >= ? and b.rm < ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setInt(2, index);
			pstmt.setInt(3, index+1);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				list_id = rs.getInt("list_id");
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
		
		return list_id;
	}
	
	public OrderDetailDTO ExtractOrderProductandReceiveInfoMethod(int list_id) {
		OrderDetailDTO dto = new OrderDetailDTO();
		try {
			conn = init();
			String sql = "select * from order_detail where list_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, list_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				dto.setReceive_person(rs.getString("receive_person"));
				dto.setReceive_email(rs.getString("receive_email"));
				dto.setReceive_phone(rs.getString("receive_phone"));
				dto.setReceive_address(rs.getString("receive_address"));
				dto.setCategory_id(rs.getString("category_id"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_total(rs.getInt("item_total"));
				dto.setItem_size(rs.getString("item_size"));
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
	
	
	public List<OrderDetailDTO> ExtractOrderProductandReceiveInfoMethod2(int list_id) {
		List<OrderDetailDTO> aList = new ArrayList<OrderDetailDTO>();
		try {
			conn = init();
			String sql = "select * from order_detail where list_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, list_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				OrderDetailDTO dto = new OrderDetailDTO();
				dto.setReceive_person(rs.getString("receive_person"));
				dto.setReceive_email(rs.getString("receive_email"));
				dto.setReceive_phone(rs.getString("receive_phone"));
				dto.setReceive_address(rs.getString("receive_address"));
				dto.setCategory_id(rs.getString("category_id"));
				dto.setItem_name(rs.getString("item_name"));
				dto.setItem_total(rs.getInt("item_total"));
				dto.setItem_size(rs.getString("item_size"));
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
	}
	
	public void BasketDeleteMethod(String member_id, String category_id, String item_amount, String item_size) {
		try {
			conn = init();
			String sql = "delete from cart where member_id = ? and category_id = ? and item_amount = ? and item_size = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setString(2, category_id);
			pstmt.setString(3, item_amount);
			pstmt.setString(4, item_size);
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
	
	public void BasketTotalDeleteMethod(String member_id) {
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
	
	public void OrderDeleteMethod(int list_id, String state) {
		try {
			conn = init();
			String sql = "update list set state=? where list_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, state);
			pstmt.setInt(2, list_id);
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
	
	public String ExtractStateMethod(int list_id) {
		String state="";
		try {
			conn = init();
			String sql = "select state from list where list_id=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, list_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				state = rs.getString("state");
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
		
		return state;
	}
	
	public String ExtractPaymethodMethod(int list_id) {
		String paymethod="";
		try {
			conn = init();
			String sql = "select paymethod from list where list_id =?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, list_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				paymethod = rs.getString("paymethod");
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
		
		return paymethod;
	}

	public String ExtractTotalPriceMethod(int list_id) {
		String total_price="";
		try {
			conn = init();
			String sql = "select list_total_price from list where list_id =?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, list_id);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				total_price = rs.getString("list_total_price");
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
		
		return total_price;
	}

	public void ListTotalDeleteMethod(String member_id) {
		try {
			conn = init();
			String sql = "delete from list where member_id = ?";
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
	
	public String ExtractMemberId(int index) {
		String member_id="";
		
		try {
			conn = init();
			String sql = "select member_id from list where list_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, index);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				member_id = rs.getString("member_id");
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
		
		return member_id;
	}
	
	//페이지처리를 위한 DAO추가
	public int rowTotalCount(String member_id) {

		int cnt = 0;

		try {
			conn = init();

			String sql = "select count(*) from list where member_id=?";

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

	public List<OrderDTO> listMethod(ListPageDTO pdto, String member_id) {
		
		List<OrderDTO> aList = new ArrayList<OrderDTO>();
		
		try {
			conn = init();
			String sql = "SELECT b.* "+ 
					"FROM( SELECT rownum rm, a.* "+ 
					"FROM (SELECT * "+ 
					"FROM list " + 
					"where member_id= ?) a ) b " + 
					"WHERE b.rm >= ? and b.rm <= ?";
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member_id);
			pstmt.setInt(2, pdto.getStartRow());
			pstmt.setInt(3, pdto.getEndRow());
			
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
		} finally {
			try {
				close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return aList;
	}
	
	
	
}// end class
