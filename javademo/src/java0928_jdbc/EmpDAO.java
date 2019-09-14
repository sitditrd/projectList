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

public class EmpDAO {
	Connection conn;
	Statement stmt;
	PreparedStatement pstmt;
	ResultSet rs;

	private EmpDAO() {

	}
	
	private static EmpDAO dao = new EmpDAO();

	public static EmpDAO getInstance() {
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
	
	public List<EmpDTO> rangeMethod(HashMap<String, Integer> map) {
		
		List<EmpDTO> aList = new ArrayList<EmpDTO>();
		
		try {
			conn = init();
			
			/*stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
			String sql = "SELECT * FROM EMPLOYEES ORDER BY employee_id";
			rs = stmt.executeQuery(sql);
	
			int index=0;
			index = (Integer)map.get("start");
			
			while(true) {
				EmpDTO dto = new EmpDTO();
				rs.absolute(index);
				
				dto.setEmployee_id(rs.getInt("employee_id"));
				dto.setFirst_name(rs.getString("first_name"));
				dto.setSalary(rs.getInt("salary"));
				dto.setHire_date(rs.getDate("hire_date"));
				aList.add(dto);
				
				index++;
				
				if(index == (Integer)map.get("end"))
					break;
			}*/
			
			//선생님 풀이
			//다음 문장마다 공백으로 구분해주어야 한다. db에서는 자동으로 잡아주는데 java에서는 아니기 때문이다.
			//;(세미콜론)이랑, 공백을 특히 주의한다 .
			
			String sql = "SELECT test.* FROM " + 
					"(SELECT rownum as rm, emp.* FROM " + 
					"(SELECT * FROM EMPLOYEES ORDER BY employee_id)emp)test " + 
					"WHERE test.rm>=? and test.rm<=?";
			
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, (Integer)map.get("start"));
			pstmt.setInt(2, (Integer)map.get("end"));
			
			rs=pstmt.executeQuery();
			
			while(rs.next()) {
				EmpDTO dto = new EmpDTO();
				
				dto.setEmployee_id(rs.getInt("employee_id"));
				dto.setFirst_name(rs.getString("first_name"));
				dto.setSalary(rs.getInt("salary"));
				dto.setHire_date(rs.getDate("hire_date"));
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
	
	public List<EmpDTO> searchMethod(String data) {
		List<EmpDTO> aList = new ArrayList<EmpDTO>();
		
		try {
			conn=init();
			stmt = conn.createStatement();
			
			String sql = "SELECT * FROM Employees WHERE lower(first_name) like lower('%"+data+"%')";

			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				EmpDTO dto = new EmpDTO();
				dto.setEmployee_id(rs.getInt("employee_id"));
				dto.setFirst_name(rs.getString("first_name"));
				dto.setSalary(rs.getInt("salary"));
				dto.setHire_date(rs.getDate("hire_date"));
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
	
}
