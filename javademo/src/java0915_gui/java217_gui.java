package java0915_gui;
import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Frame;
import java.awt.Panel;
import java.awt.TextArea;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

//Button -> click -> ActionEvent -> ActionListener
//TextField -> Enter -> ActionEvent -> ActionListener

class TextInput extends Frame implements ActionListener {
	TextField inputTxt;
	Button clickBtn;
	TextArea multiTra;
	Panel pn;

	public TextInput() {

		inputTxt = new TextField(20);
		clickBtn = new Button("input");
		pn = new Panel();

		pn.add(inputTxt);
		pn.add(clickBtn);

		multiTra = new TextArea(10, 10);

		// TextArea에서 편집 불가능
		multiTra.setEditable(false); // multiTra = new TextArea(10,10); 이처럼 객체를 생성하고 호출해야 한다.

		add(pn, BorderLayout.NORTH);
		add(multiTra, BorderLayout.CENTER);

		// Button에 ActionListener를 연결한다.
		clickBtn.addActionListener(this);
		
		//TextField에 ActionListener를 연결
		inputTxt.addActionListener(this); //Enter를 치면 문자열이 입력가능하다. 

		setSize(500, 500);
		setVisible(true);

		this.addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});

	}

	@Override // ActionListener를 상속받게 되면 아래의 메소드 하나만 오버라이딩하면 된다. ActionListener는 Adapter()가
				// 없다. 메소드가 한개이기 때문이다.
	public void actionPerformed(ActionEvent e) {

		//TextField에 입력된 문자열을 리턴한다.
		String line = inputTxt.getText(); // text 필드의 입력되어 있는 문자열값을 가져오는 것.
		
		if (line.length() == 0) {
			inputTxt.requestFocus(); // 커서가 input으로 바로 간다.
			return;
		}
		
		//TextArea에 TextField에 입렫된 문자열을 추가한다.
		multiTra.append(line + "\r\n");
		
		//TextField을 초기화한다.
		inputTxt.setText("");
		
		//TextField로 포커스를 이동한다.
		inputTxt.requestFocus(); // 커서가 input으로 바로 간다.
	}

}

public class java217_gui {

	public static void main(String[] args) {
		new TextInput();

	}

}
