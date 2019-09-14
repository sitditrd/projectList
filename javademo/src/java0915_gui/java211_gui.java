package java0915_gui;

import java.awt.Frame;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

/*
 * 컴퓨터와 사용자 인터페이스
 * 1 CUI(Character User Interface) : 문자대화방식 - DOS, LINUX
 * 2 GUI(Graphics User Interface) : 그림대화방식 - WINDOW
 * 
 * 자바에서 GUI을 구현할 수 있도록 AWT, SWING을 제공한다.
 * 
 * Component(컴포넌트)
 * 1 비주얼 컴포넌트 : 자기 자신위에 다른 컴포넌트를 연결할 수 없는 컴포넌트이다. -> ex) checkbox, radiobutton
 * 2 컨테이너 : 자기 자신위에 다른 컴포넌트를 연결할 수 있는 컴포넌트이다. -> checkbox, radiobutton 등을 포함하는 창
 * 3 메뉴컴포넌트 : 메뉴에 관련된 컴포넌트이다.
 * 
 * Event(이벤트) : 컴포넌트에서 키보드로 입력하고, 클릭하고 하는 행동을 컴포넌트에
 *    사건이 발생된 것인데 이를 이벤트라 한다.
 * 
 * eventListener : 컴포넌트에서 이벤트가 발생되면 이를 해결해야 하는데 해결할
 *    메소드를 정의해놓은 인터페이스이다.
 *    
 *    Frame에서 마우스에 의해서 WindowEvent발생하고 이를 해결해 주는 것이 WindowListener이다. 
 *    Frame과 WindowListener를 연결해주는 것이 addWindowListener
 *    
 *    Button에서 ActionEvent가 발생하고 이를 해결해주는 것이 ActionListener이다.
 *     Button과 ActionListener를 연결해주는 것이 addActionListener
 *     
 *    Checkbox에서 ItemEvent가 발생하고 이를 해결해주는 것이  ItemListener이다.
 *     CheckBox와 ItemListener를 연결해주는 것이 addItemListener이다.
 */

class Win extends Frame {
	public Win() {

		// 윈도우창크기 가로 300, 세로 400 픽셀단위
		setSize(300, 400); // 픽셀단위로 처리된다.

		// 윈도우 값을 화면에 표시
		setVisible(true); // 원래값은 false이기 때문에 창이 보이려면 ture값으로 지정해야 한다.

		Exit exit = new Exit();
		this.addWindowListener(exit);
	}

	class Exit implements WindowListener {

		@Override
		public void windowActivated(WindowEvent e) {
			System.out.println("windowActivated");
		}

		@Override
		public void windowClosed(WindowEvent e) {
			System.out.println("windowClosed");
		}

		@Override
		public void windowClosing(WindowEvent e) {
			System.out.println("windowClosing");
			System.exit(0);
		}

		@Override
		public void windowDeactivated(WindowEvent e) {
			System.out.println("windowDeactivated");
		}

		@Override
		public void windowDeiconified(WindowEvent e) {

			System.out.println("windowDeiconified");
		}

		@Override
		public void windowIconified(WindowEvent e) {
			System.out.println("windowIconified");
		}

		@Override
		public void windowOpened(WindowEvent e) {
			System.out.println("windowOpened");
		}
	}
}

public class java211_gui {

	public static void main(String[] args) {
		new Win();
	}

}
