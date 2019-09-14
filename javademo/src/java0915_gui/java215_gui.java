package java0915_gui;
import java.awt.Button;
import java.awt.Frame;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

class UserSize extends Frame {
	
	Button btn;
	
	public UserSize() {
		
		//Frame컨테이너의 Layout을 null로 초기화 한다.
		
		this.setLayout(null); //이렇게 하면 Layout을 백지로 쓸 수 있다. 
		btn = new Button("button");
		
		btn.setBounds(50, 50, 200, 150); //가로위치, 세로위치, 가로크기, 세로크기를 순서대로 지정한다. 
		
		this.add(btn);
		
		setSize(300, 300);
		setVisible(true);
		
		this.addWindowListener(new WindowAdapter() { //내부클래스로 하지 말고 익명클래스로 한다. 
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
	}
}

public class java215_gui {

	public static void main(String[] args) {
		UserSize us = new UserSize();

	}

}
