package java0915_gui;
import java.awt.Button;
import java.awt.Color;
import java.awt.Frame;
import java.awt.GridLayout;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

class UserLayout extends Frame {
	
	Button northBtn, centerBtn, southBtn, eastBtn, westBtn;
	
	public UserLayout() {
		
		northBtn = new Button("North");
		centerBtn = new Button("Center");
		southBtn = new Button("South");
		eastBtn = new Button("East");
		westBtn = new Button("West");
		
		setLayout(new GridLayout(2, 3)); //값을 2행 3열로 준다는 의미이다. 
		
		this.add(northBtn);
		this.add(centerBtn);
		this.add(southBtn);
		this.add(eastBtn);
		this.add(westBtn);
		
		northBtn.setForeground(new Color(0,255,0)); //R,G,B / 0~255까지 지정한다. [모두 0-> 검정색 |  모두 255 -> 흰색 ]
		northBtn.setBackground(new Color(255,0,0));
		
		setBackground(Color.CYAN); //cyan은 대소문자 상관이 없다. 컴포넌트가 없는곳이 채워진다. 
		
		setSize(500, 400);
		setVisible(true);
		
		this.addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
	}
}

public class java216_gui {

	public static void main(String[] args) {
		new UserLayout();

	}

}
