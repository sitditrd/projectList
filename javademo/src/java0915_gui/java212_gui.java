package java0915_gui;

import java.awt.Frame;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

//Event가 발생될 컴포넌트를 구현하고(1번)
class Win2 extends Frame {
	public Win2() {

		// 윈도우창크기 가로 300, 세로 400 픽셀단위
		setSize(300, 400); // 픽셀단위로 처리된다.

		// 윈도우 값을 화면에 표시
		setVisible(true); // 원래값은 false이기 때문에 창이 보이려면 ture값으로 지정해야 한다.

		/*
		 * Exit exit = new Exit(); this.addWindowListener(exit); //2개를 연결해줄 add를 구현하면
		 * 된다.(3번)
		 */

		this.addWindowListener(new WindowAdapter() { // 익명클래스로 할 수 있다.
			public void windowClosing(WindowEvent e) {

			}
		});

		// 컴포넌트에서 이벤트 발생하면 처리할 Listener구현하고(2번)
		class Exit extends WindowAdapter { // Listener를 상속받아서 구현한 클래스는 Adapter로 끝난다.
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		}
	}
}

public class java212_gui {

	public static void main(String[] args) {
		new Win2();

	}

}
