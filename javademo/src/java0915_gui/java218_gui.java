package java0915_gui;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

/*
 * AWT			SWING
 * Frame		JFrame
 * TextField	JTextField
 * Button		JButton
 * 
 * awt는 운영체제에 종속적이고, Swing은 운영체제에 독립적이다.
 */

//JButton -> click -> ActionEvent -> ActionListener
//JTextField -> Enter -> ActionEvent -> ActionListener



class TextInput2 extends JFrame implements ActionListener {
	JTextField inputTxt;
	JButton clickBtn;
	JTextArea multiTra;
	JPanel pn;

	public TextInput2() {

		inputTxt = new JTextField(20);
		clickBtn = new JButton("input");
		pn = new JPanel();

		pn.add(inputTxt);
		pn.add(clickBtn);

		multiTra = new JTextArea(10, 10);

		// TextArea에서 편집 불가능하게 한다.
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

public class java218_gui {

	public static void main(String[] args) {
		new TextInput2();
	}

}
