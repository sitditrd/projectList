package java0928_jdbc;
import java.util.List;

/*
 * MVC 패턴 : 각각 과정을 나누어서 하는 방법이다. (실질적으로 Web할 때 많이 사용되는 용어이다.)
 * 
 * Model : 데이터에 관련된 작업을 한다.(DepartmentDTO, DepartmentDAO)  
 * View : 클라이언트에 보여줄 화면(Java233_Jdbc)
 * Controller : 클라이언트의 요청과 응답을 처리해 줄때 Controller에서 한다. (Java233_Jdbc)
 *  
 * 일반적으로 Table이 8개이면 DTO도 8개 필요하다. 
 */

/*
 * 싱글톤 패턴
 *  : 하나의 객체만을 생성해서 사용할 수 있도록 설계한 구조이다.
 * 1.생성자의 접근제어자는 private
 * 2.객체자신을 생성을 한다.
 * 3.생성된 객체를 넘져줄수 있는 메소드를 정의한다. 
 * 
 * 나중에 DAO객체를 통하여 웹 페이지를 구현할 때 로그인이나 정보수정의 페이지에 DAO객체가 각각 접근하여 Update, Delete를 적용한다. 
 *  
 */

public class java233_Jdbc {

	public static void main(String[] args) {
		//DepartmentDAO dao = new DepartmentDAO(); 이렇게 접근못한다. private이 선언되있기 때문이다.
		
		DepartmentDAO dao = DepartmentDAO.getInstance(); //미리 static객체 하나만 생성해 놓고 참조하면 된다. 
		
		//List<DepartmentDTO> aList = dao.listMethod(); //DAO는 DTO에 Access한다. 
		List<DepartmentDTO> aList = dao.searchMethod("man");
		
		for(int i=0; i<aList.size(); i++) {
			DepartmentDTO dto = aList.get(i); //리턴해주는 데이터 타입은
			System.out.printf("%d %s %d %d\n", 
					dto.getDepartment_id(),
					dto.getDepartment_name(),
					dto.getManager_id(),
					dto.getLocation_id());
		}
	}

}
