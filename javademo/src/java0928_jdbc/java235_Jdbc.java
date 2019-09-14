package java0928_jdbc;
import java.util.HashMap;
import java.util.List;

public class java235_Jdbc {
	public static void main(String[] args) {
		MemDAO dao = MemDAO.getInstance();
		
		/*MemDTO md = new MemDTO("야옹이", 23, "부산");
		dao.insertMethod(md);*/
		
		//num컬럼의 값이 1일 때 name컬럼의 값을 "윤아"로 수정
		//MemDTO dto = new MemDTO();
		//dto.setNum(1);
		//dto.setName("윤아");
		
		//자료가 몇개 되지 않을 때 HashMap을 이용해서 넘기기도 한다.
		/*HashMap<String, Object> map = new HashMap<String, Object>(); //Key에 들어갈수있는것은 String이고, value는 Object로 되있게 설정.
		map.put("name", new String("윤아")); 
		map.put("num", new Integer(2));
		dao.updateMethod(map);*/ 
		
		dao.deleteMethod(3);
		
		List<MemDTO> aList = dao.listMethod();
		for(MemDTO dto : aList) 
			System.out.printf("%d %s %d %s\n", dto.getNum(), dto.getName(), dto.getAge(), dto.getLoc());
	}

}

