package java0928_jdbc;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MemDAO {
	Connection conn;
	Statement stmt;
	PreparedStatement pstmt;
	ResultSet rs;

	private MemDAO() {

	}

	private static MemDAO dao = new MemDAO();

	public static MemDAO getInstance() {
		return dao;
	}

	private Connection init() throws ClassNotFoundException, SQLException { // 쿼리문을 실행할 때마다 메인에서 예외처리를 할 것이기 때문에
		// init()에서 발생한 예외를 메인으로 throws 처리한다.
		// 1.드라이버 로딩
		Class.forName("oracle.jdbc.OracleDriver"); // 대소문자를 구별안하면 java.lang.ClassNotFoundException 오류가 뜬다.

		// 2.서버연결
		String url = "jdbc:oracle:thin://@127.0.0.1:1521:xe";
		// url을 제대로 연결하지 않는다면 java.sql.SQLException: Listener refused the connection
		// with the following error:
		// ORA-12505, TNS:listener does not currently know of SID given in connect
		// descriptor의 오류가 뜬다.

		String username = "hr";
		String password = "a1234";

		return DriverManager.getConnection(url, username, password); // DriverManager.getConnection 이렇게 실행시킬 수 있는 이유는
		// getConnection에 static이 선언되어있기 때문이다.
	}

	private void exit() throws SQLException { // throws처리를 하여 아래의 3번의 if문을 예외처리 하지 않도록 한다.

		if (rs != null) // rs가 연결이 되어있으면
			rs.close(); // rs의 연결을 종료하라

		if (stmt != null)
			stmt.close();

		if (pstmt != null)
			pstmt.close();

		if (conn != null)
			conn.close();
	}
	
	public List<MemDTO> listMethod() {
		
		List<MemDTO> aList = new ArrayList<MemDTO>();
		try {
			conn = init();
			
			stmt = conn.createStatement();
			String sql = "SELECT * FROM mem ORDER BY num";
			
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				MemDTO dto = new MemDTO();
				dto.setNum(rs.getInt("num"));
				dto.setName(rs.getString("name"));
				dto.setAge(rs.getInt("age"));
				dto.setLoc(rs.getString("loc"));
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
	}
	
	public void insertMethod(MemDTO dto) { //하나의 쿼리문이라고 생각한다. 
		try {
			conn = init();
			/*stmt = conn.createStatement();
			//변수나 메소드는 ""(쌍다옴표)로 빼야 된다. 그리고 값을 연결하기 위해서 +로 묶는다.
			String sql="INSERT INTO mem VALUES(mem_num_seq.nextval, '"+dto.getName()+"' , "+dto.getAge()+" , '"+dto.getLoc()+"')";
			stmt.executeUpdate(sql); //insert, delete, update를 실행할때에는 executeUpdate를 사용한다.
			*/	
			
			//변수나 메소드를 이용해서 쿼리문에 값을 넣어주기 위해서는 statement를 이용해서 하면 복잡하므로 preparedstatement를 사용한다.
			/*
			 * 1. 반복되는 쿼리문의 수행에 사용한다.
			 * 2. 미리 정의된 SQL문을 수행하기 때문에 Statement에 비해 속도가 빠르다.
			 * 3. 위치표시자(placeholder)(?)를 사용하여 쿼리문을 간략하게 작성한다.
			 */
			//select는 변수나 메소드를 호출하는 경우가 없다. 하지만 insert는 변수나 메소드를 받아와서 쿼리문에 넣어줄 경우에는 복잡하기 때문에 prepared statement를 이용하는 것이 빠르다.
			//속도는 statement보다 느리다. sql이 들어가는 위치가 다르니 조심하도록 한다. 
			String sql = "INSERT INTO mem VALUES(mem_num_seq.nextval, ?, ?, ?)";
			pstmt = conn.prepareStatement(sql);
			
			//반복문 처리할 때는 이곳에서 처리하도록 한다. 
			pstmt.setString(1, dto.getName());
			pstmt.setInt(2, dto.getAge());
			pstmt.setString(3, dto.getLoc());
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
		
	}
	
	//jdbc API에서는 하나의 쿼리문이 실행되면 자동저장이 되어 table에 저장이된다. 
	public void updateMethod(HashMap<String, Object> map) {
		try {
			conn = init();
			
			String sql = "UPDATE mem SET name=? WHERE num=?";
			pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, (String)map.get("name")); //get은 오브젝트로 리턴이 되기 때문에 String으로 다운캐스팅을 한다.
			pstmt.setInt(2, (Integer)map.get("num")); //get은 오브젝트로 리턴이 되기 때문에 Integer로 다운캐스팅을 한다.
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
		
	}

	public void deleteMethod(int num) {
		try {
			conn= init();
			String sql = "DELETE FROM mem WHERE num=?";
			pstmt=conn.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.executeUpdate(); //select, insert, delete는 보통 executeUpdate를 쓴다.
			
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}
}












