package java0911_stream;

/*
 * 선형리스트(Liner List)
 * 1. 순서리스트(Ordered List)
 * 2. 자료들 간에 순서를 갖는 리스트
 * 3. 선형 리스트에서 원소를 나열한 순서는 원소들의 순서가 된다.
 */

class UserList {
	
	int sale[] = new int[3];
	int point = 0;
	
	public void add(int data) {
		int[] arr;
		
		sale[point++] = data;
		if(sale.length == point) { //더이상 추가할 공간이 없을 때 생성을 한다.
			arr = new int[sale.length*2];
			System.arraycopy(sale, 0, arr, 0, sale.length);
			sale=arr; //이렇게 하는 이유는 sale의 2배를 한 arr배열을 생성한 후 기존의 sale배열을 arr에 초기화한 후 
					  //sale에 다시 연결시키면 모두 값이 들어가 있다.
		}
	}
	
	public int get(int index) {
		return sale[index];
	}

	public int size() {
		return point;
	}
	
	public void remove(int index) {
		for(int i=index; i<point-1; i++) {
			sale[i] = sale[i+	1];
		}
		point--;
	}
}
public class java176_List {
	
	
	public static void main(String[] args) {

		/*sale[0] = 10;
		sale[1] = 20;
		sale[2] = 30;*/
		
		UserList uList = new UserList();
		
		uList.add(10);
		uList.add(20);
		uList.add(30);
		uList.add(40);
		uList.remove(1);
		
		for(int i=0; i<uList.size(); i++) {
			System.out.println(uList.get(i));
		}
	}
	
}
