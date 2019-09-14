package java0824_array;

public class Java042_array {

	public static void main(String[] args) {
		int[] jumsu = {90,80,40}; // int[] jumsu = new int[] {90,80,40};
		
		/*for(int i=0; i<jumsu.length; i++)
		{
			System.out.println(jumsu[i]);
		}*/
		
		for(int i=jumsu.length-1; i>=0; i--)
		{
			System.out.println(jumsu[i]);
		}
	}

}
