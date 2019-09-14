/*
    [JDBC 사용법]

	JDBC (Java DataBase Connectivity)
	 
	1 JDBC는 대부분이 인터페이스로 되어 있으며 이 인터페이스를 구현한 클래스 파일들의 
	  묶음을 드라이버(driver)라고 한다.
	2 자바에서 서로 다른 데이터베이스를 접속하기 위한 일관된 방식을 위해서 인터페이스로 만들고 
	   각 벤더에서는  실제 접속방법을 구현한 클래스 파일을 제공하는 형태이다
	3 따라서 벤더에서 제공한 데이터베이스의 드라이버를 반드시 사용해야  한다.
	
	
	1. 데이터베이스와 연결하는 드라이버 파일을 찾아서 로딩한다.
	   ​Class.forName("드라이버 이름")
	2. 연결을 관리하는 Connection 객체 생성
	​   Connection conn = DriverManager.getConnection("URL", "아이디","비밀번호" );
	
	3. sql 구문을 처리할 Statement, PreparedStatement 객체 생성
	   ​Statement stmt = conn.createStatement();
	   PreparedStatement pstmt=conn.prepareStatement("SELECT * FROM mem order by num");
	4. 구문 실행 - select 구문 인 경우 ResultSet 객체를 통한 sql 결과 처리
	    DML :  ​int cnt = stmt.executeUpdate("INSERT INTO Person(num, name, age, loc) VALUES(mem_num_seq.nextval,'김훈',40,'부산')");
	   SELECT문 : ResultSet rs = stmt.executeQuery("SELECT * FROM mem order by num");
	   
	   ResultSet rs=pstmt.executeQuery();​​
	
	5. 접속 종료
	   stmt.close();
	   pstmt.close();   
	   conn.close();​
	​
	
	​[DB별 드라이버 사용법] 
	[Oracle]
	
	-드라이버 이름: oracle.jdbc.OracleDriver
	
	-데이터베이스 이름: jdbc:oracle:thin:@ip:포트번호:데이터베이스이름
	
	-ip는 로컬 컴퓨터이면: 127.0.0.1
	
	-포트번호 기본:  1521
	
	-데이터베이스 이름은 기본:  xe
	
	 [MySql]
	
	-드라이버 이름: com.mysql.jdbc.Driver
	
	-데이터베이스 이름: jdbc:mysql://ip:포트번호/데이터베이스이름
	
	-ip는 로컬 컴퓨터이면: 127.0.0.1
	
	-포트번호 기본: 3306
	
	
	[MsSql]
	
	-드라이버 이름: com.microsoft.jdbc.sqlserver.SQLServerDriver
	
	-데이터베이스 이름: jdbc:microsoft:sqlserver://ip:포트번호/데이터베이스이름
	
	-ip는 로컬 컴퓨터이면: 127.0.0.1
	
	-포트번호 기본: 1433
 */

package java0928_jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

//JAVA와 DB연동 과정예제
public class java232_Jdbc {

	public static void main(String[] args) {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;

		try {
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

			conn = DriverManager.getConnection(url, username, password); //DriverManager.getConnection 이렇게 실행시킬 수 있는 이유는 
																		 //getConnection에 static이 선언되어있기 때문이다.

			// 3. 쿼리문을 실행하기 위한 Statement타입의 객체를 리턴
			stmt = conn.createStatement(); // 쿼리문을 실행하기위해서는 statement메소드가 필요해서 conn.createStatement으로 statement객체값을
											// 받아온다.

			// 4. 쿼리문을 실행한다.
			String sql = "SELECT * FROM departments ORDER BY department_id";
			rs = stmt.executeQuery(sql); // 쿼리문의 결과값은 ResultSet으로 받는다.

			// 5. DB를 읽어들인다.
			while (rs.next()) { // 커서를 DB테이블의 1행의 위치로 옮겨준다.(데이터를 읽어들이기 위해서)
				int departId = rs.getInt("department_id");
				String departName = rs.getString("department_name");
				int manId = rs.getInt("manager_id");
				int locID = rs.getInt("location_id");

				System.out.printf("%d %s %d %s\n", departId, departName, manId, locID);
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally { //close()는 역순으로 한다. 
			if (rs != null) //rs가 연결이 되어있으면
				try {
					rs.close(); //rs의 연결을 종료하라
				} catch (SQLException e) {
					e.printStackTrace();
				}
			
			if(stmt != null)
				try {
					stmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			
			if(conn != null)
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
		}

	}

}
