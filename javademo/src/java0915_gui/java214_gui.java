package java0915_gui;
import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Frame;
import java.awt.Panel;
import java.awt.TextArea;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

class FlowLayoutTest extends Frame {
	Button oneBtn, twoBtn, threeBtn;
	Panel pn;
	TextArea ta;
	
	public FlowLayoutTest() {
		oneBtn = new Button("one");
		twoBtn = new Button("two");
		threeBtn = new Button("three");
		
		pn = new Panel(); //Panel은 Frame의 안에서 종속되어서 사용되어야 한다. 
					      //Panel은 자기혼자 못열지만, Frame은 가능하기 때문
						  //패널은 컴포넌트들을 그룹지어주기 위해서 사용되는 것이다.
		
		//Panel의 기본 레이아웃은 FlowLayout이다.
		//FlowLayout()에 컴포넌트를 연결할때는 add해준 순서대로 왼쪽에서 오른쪽으로 연결된다. 
		pn = new Panel(); 
		pn.add(oneBtn);
		pn.add(twoBtn);
		pn.add(threeBtn);
		
		ta = new TextArea(10,20);
		
		this.add(BorderLayout.NORTH, pn); //BorderLayout의 북쪽에 3개의 버튼을 가진 패널이 붙는다.
		this.add(BorderLayout.CENTER, ta); //센터쪽에도 마찬가지이다. 
		
		setSize(500, 400);
		setVisible(true);
		
		this.addWindowListener(new WindowAdapter() { //내부클래스로 하지 말고 익명클래스로 한다. 
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
	}
}

public class java214_gui {

	public static void main(String[] args) {
		FlowLayoutTest fo = new FlowLayoutTest();
	}

}
