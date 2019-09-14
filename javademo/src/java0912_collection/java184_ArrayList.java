package java0912_collection;
import java.awt.List;
import java.util.ArrayList;

public class java184_ArrayList {

	public static void main(String[] args) {
		ArrayList<String> aList = new ArrayList<String>();
		
		aList.add("oracle");
		aList.add("mysql");
		aList.add("mssql");
		String[] arr = display(aList);
		for(String data : arr) {
			System.out.println(data);
		}
		
	}
	
	
	public static String[] display(ArrayList<String> aList) {
		
		/*String[] data = new String[aList.size()];
		for(int i=0; i<data.length; i++) {
			data[i] = aList.get(i);
		}
		return data;*/
		
		
		/*Object[] obj = aList.toArray();
		String[] sg = new String[obj.length];
		
		for(int i=0; i<sg.length; i++) {
			sg[i] = (String)obj[i];
		}
		
		return sg;*/
		
		
		/*String[] arr = new String[aList.size()];
		String[] line = aList.toArray(arr);
		return line;*/
		
		return aList.toArray(new String[aList.size()]);
	}

}
