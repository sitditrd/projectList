package java0918_gui;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;
import javax.swing.JTextField;

class Research extends JFrame implements ActionListener {
	JTextField nameTxt;
	JRadioButton manRad, womanRad;
	JComboBox<String> locBox;
	JButton saveBtn, openBtn;
	JTextArea multiLine;

	public Research() {
		nameTxt = new JTextField(10);

		manRad = new JRadioButton("남", true);
		womanRad = new JRadioButton("여");
		ButtonGroup bg = new ButtonGroup();
		bg.add(manRad);
		bg.add(womanRad);

		String[] city = new String[] { "seoul", "jeuju", "busan", "daejon" };
		locBox = new JComboBox<String>(city);

		saveBtn = new JButton("파일 저장");
		openBtn = new JButton("파일 열기");

		JPanel jp1 = new JPanel();
		jp1.add(new JLabel("이름 : "));
		jp1.add(nameTxt);

		JPanel jp2 = new JPanel();
		jp2.add(new JLabel("성별"));
		jp2.add(manRad);
		jp2.add(womanRad);

		JPanel jp3 = new JPanel();
		jp3.add(new JLabel("지역"));
		jp3.add(locBox);

		JPanel jp4 = new JPanel();
		jp4.add(saveBtn);
		jp4.add(openBtn);

		JPanel top = new JPanel(new GridLayout(4, 1));
		top.add(jp1);
		top.add(jp2);
		top.add(jp3);
		top.add(jp4);

		multiLine = new JTextArea(10, 20);

		// JFrame의 Layout을 GridLayout 2행 1열로 변경한다.
		setLayout(new GridLayout(2, 1));

		// JFrame에 컴포넌트를 연결한다.
		this.add(top);
		add(multiLine);

		saveBtn.addActionListener(this);
		openBtn.addActionListener(this);

		setSize(500, 500);
		setLocation(400, 200);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// 현재 이벤트가 발생된 컴포넌트 정보를 리턴한다.
		Object obj = e.getSource();

		if (obj == saveBtn) {
			saveMethod();
		} else if (obj == openBtn) {
			openMethod();
		}
	}

	private void saveMethod() {
		String name = nameTxt.getText();
		String gen = manRad.isSelected() ? "남" : "여";
		String loc = (String) locBox.getSelectedItem(); // 아이템의 리턴타입은 오브젝트이나 스트링으로 다운캐스팅하여 loc에 넣는다.
		JFileChooser save = new JFileChooser();
		int chk = save.showSaveDialog(this);
		
		if(chk == JFileChooser.CANCEL_OPTION) //취소옵션을 누른다면 현재 메소드를 빠져나간다. 
			return;
	
		File file = save.getSelectedFile(); // 선택한 파일의 정보를 파일로 리턴해준다.
		FileWriter fw = null;
		
		try {
			fw = new FileWriter(file, true); //두번째 인자값이 없으니 false이고 updata이다. true는 append
			fw.write(name + "/" + gen + "/" + loc + "\r\n");
			fw.flush();
			init(); //입력이 모두 끝날 때 초기화시킨다.  
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				fw.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	private void init() { 
		nameTxt.setText("");
		manRad.setSelected(true); //처음에 남자가 선택되어 있었으므로
		locBox.setSelectedIndex(0); //콤보박스 인덱스를 0으로 맞추어 준다.
		nameTxt.requestFocus();
	}
	
	private void openMethod() {
		JFileChooser open = new JFileChooser();
		int chk = open.showOpenDialog(this);
		
		if(chk == JFileChooser.CANCEL_OPTION) 
			return;
		
		File file = open.getSelectedFile();
		Scanner sc = null;
		multiLine.setText("");
		
		try {
			sc = new Scanner(file);
			while(sc.hasNextLine()) {
				multiLine.append(sc.nextLine()+"\r\n");
			}
		}catch(FileNotFoundException ex) {
			ex.printStackTrace();
		}finally {
			sc.close();
		}
	}
}

public class java222_gui {

	public static void main(String[] args) {
		new Research();
	}

}
