package java0915_gui;
import java.awt.BorderLayout;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

class MessageTest extends JFrame {
	JButton btn;
	
	public MessageTest() {
		
		btn = new JButton("click");
		add(btn, BorderLayout.CENTER);
		setSize(300,300);
		setVisible(true);
		//setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE); //x 버튼을 누르면 아무것도 안한다. 
		//이 상태에서 켜서 x버튼 누르면 화면에서만 안보이는 거지 계속 실행되는 것이다. (setVisible(false))와 같은 것이다.
		setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
		addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				exit();
			}
		});
	}
	
	public void exit() {
		//JOptionPane.showMessageDialog(this, "정말로 종료하시겠습니까?"); //이렇게 하면 메시지만 띄우는 것이다. 
		//JOptionPane.showConfirmDialog(this, "정말로 종료하시겠습니까?"); //이렇게 실행하면 기본 버튼 3개가 뜬다.
		//알림창을 띄우기 위해서 JOptionPane을 사용한다.
		int chk = JOptionPane.showConfirmDialog(this, "정말로 종료하시겠습니까?", "", JOptionPane.YES_NO_OPTION); //제목을 넣지 않으려면 ""을 하면된다.
		
		if(chk == JOptionPane.YES_OPTION) {
			System.exit(0);
		} 
		
	}
}
public class java221_gui {

	public static void main(String[] args) {
		new MessageTest();
	}

}
