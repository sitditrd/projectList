package java0928_jdbc;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/*
 * 1. ClassNotFoundException 
*  해결) JRE System Library에서 ojdbc14.jar파일 확인
 *      Class.forName(): 경로확인
 *      
 * 2. java.sql.SQLException: 
 *     IO예외 상황:  The Network Adapter...
 *                 Listener refused.....  
 *                 
 *     해결) 제어판->관리도구->서비스->OracleServiceXE,
 *            OracleXETNSListener을 다시 시작한다.
 *            
* java.sql.PreparedStatement
 * 1 반복되는 쿼리문의 수행에 사용한다.
 * 2 미리 정의된 SQL문을 수행하기 때문에 Statement에 비해 속도가 빠르다.
 * 3 위치표시자(placeholder)(?)를 사용하여 쿼리문을 간략하게 작성한다.
 */  

//DAO(Data Access Object) : 데이터 접근을 위한 객체
public class DepartmentDAO {
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	PreparedStatement pstmt = null; //경우에 따라서 Statement와 PreparedStatement를 선택해서 하도록 한다.
	
	static DepartmentDAO dao = new DepartmentDAO();
	
	private DepartmentDAO() { //생성자의 접근제어자를 private으로 잡는다. Singleton객체로 만들기 위해서
							  //싱글톤은 하나의 객체만 생성하여 계속 사용한다. 싱글톤을 생성할 때는 객체를 사용하는 패턴이 같을 때 생성한다. 
		
	}
	
	public static DepartmentDAO getInstance() {
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

	private void exit() throws SQLException { //throws처리를 하여 아래의 3번의 if문을 예외처리 하지 않도록 한다.

		if (rs != null) // rs가 연결이 되어있으면
				rs.close(); //rs의 연결을 종료하라
			
		if (stmt != null)
				stmt.close();

		if(pstmt != null)
			pstmt.close();
		
		if (conn != null)
				conn.close();
			
	}

	//DTO는 데이터베이스에 접근해서 쿼리문을 실행하고 그 결과값을 받는 작업만 해야한다.
	public List<DepartmentDTO> listMethod() {
		List<DepartmentDTO> aList = new ArrayList<DepartmentDTO>();
		try {
			conn=init();
			stmt=conn.createStatement();
			
			String sql = "SELECT * FROM departments ORDER BY department_id";
			
			//rs변수에 담지 않으면 Java.lang.NullPointException 예외가 발생한다. 
			rs = stmt.executeQuery(sql);
			
			//프로그램에서 Query문을 날리는 과정(java개발자에게 중요한 과정이다.)
			while(rs.next()) {
				//각각 행의 열에 있는 값을 DTO에 담기 위해 DTO를 생성한다. DTO는 나중에 aList에 add로 계속 추가될 것이다. 그래서 최종적으로 aList가 반환되는 것이다. 
				DepartmentDTO dto = new DepartmentDTO();
				dto.setDepartment_id(rs.getInt("department_id"));
				dto.setDepartment_name(rs.getString("department_name"));
				dto.setManager_id(rs.getInt("manager_id"));
				dto.setLocation_id(rs.getInt("location_id"));
				aList.add(dto); //총 27행의 자료의 DTO값이 List에 저장이 된다. 이 과정이 제일 중요하다. 
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
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
	
	public List<DepartmentDTO> searchMethod(String data) {
		List<DepartmentDTO> aList = new ArrayList<DepartmentDTO>();
		
		try {
			conn=init();
			stmt = conn.createStatement();
			//대소문자 상관없이 하려면 lower()을 쓴다.
			String sql = "SELECT * FROM departments WHERE lower(department_name) like lower('%"+data+"%')";
			//data는 값으로 사용되는 것이 아니라 변수로 사용되는 것이기 때문에 ""(쌍따옴표)로 빼도록 한다.
			
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				DepartmentDTO dto = new DepartmentDTO();
				dto.setDepartment_id(rs.getInt("department_id"));
				dto.setDepartment_name(rs.getString("department_name"));
				dto.setManager_id(rs.getInt("manager_id"));
				dto.setLocation_id(rs.getInt("location_id"));
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















