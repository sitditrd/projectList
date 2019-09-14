package java0918_gui;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import javax.swing.ButtonGroup;
import javax.swing.DefaultButtonModel;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.JTableHeader;
import javax.swing.table.TableColumnModel;

class Research2 extends JFrame implements ActionListener, MouseListener {
	JTextField nameTxt;
	JRadioButton manRad, womanRad;
	JComboBox<String> locBox;
	JButton regBtn, saveBtn, openBtn;
	JTable table;
	// table에서 사용되는 데이터를 관리해주는 객체이다.
	DefaultTableModel model;

	public Research2() {
		nameTxt = new JTextField(10);

		manRad = new JRadioButton("남", true);
		womanRad = new JRadioButton("여");
		ButtonGroup bg = new ButtonGroup();
		bg.add(manRad);
		bg.add(womanRad);

		String[] city = new String[] { "seoul", "jeuju", "busan", "daejon" };
		locBox = new JComboBox<String>(city);

		regBtn = new JButton("정보등록");
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
		jp4.add(regBtn);
		jp4.add(saveBtn);
		jp4.add(openBtn);

		JPanel top = new JPanel(new GridLayout(4, 1));
		top.add(jp1);
		top.add(jp2);
		top.add(jp3);
		top.add(jp4);

		// 테이블의 컬럼명을 배열에 저장한다.
		String[] columNames = { "이름", "성별", "지역" };
		// 테이블의 데이터를 관리해줄 model을 생성한다.
		// 생성자를 호출할 때 컬럼명, 행의 갯수를 넘겨준다.
		model = new DefaultTableModel(columNames, 0); // 2번째의 인자값은 테이블의 행의 개수를 의미한다.
		table = new JTable(model);

		// 테이블의 사이즈를 고정시킨다.
		table.setAutoResizeMode(0);

		// 테이블의 정보값을 가져온다.
		JTableHeader header = table.getTableHeader();

		// 테이블의 컬럼명을 고정시킬 때 사용한다.
		header.setReorderingAllowed(false);

		// 컬럼모델을 리턴한다.
		TableColumnModel columnModel = header.getColumnModel();

		// 컬럼별로 크기를 설정한다.
		columnModel.getColumn(0).setPreferredWidth(100);
		columnModel.getColumn(1).setPreferredWidth(50);
		columnModel.getColumn(2).setPreferredWidth(150);

		// 테이블의 행의 높이를 설정한다.
		table.setRowHeight(25);

		// 테이블 편집 불가
		table.setEnabled(false);

		// JFrame의 Layout을 GridLayout 2행 1열로 변경한다.
		setLayout(new GridLayout(2, 1));

		// JFrame에 컴포넌트를 연결한다.
		this.add(top);
		this.add(new JScrollPane(table)); // 이렇게 해주어야만 컬럼명이 보이게 된다. 그냥 테이블을 쓰면 안된다.

		saveBtn.addActionListener(this);
		openBtn.addActionListener(this);
		regBtn.addActionListener(this);

		regBtn.addMouseListener(this);
		saveBtn.addMouseListener(this);
		openBtn.addMouseListener(this);

		setSize(330, 330);
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
		} else if (obj == regBtn) {
			regMethod();
		}
	}

	private void regMethod() {
		String[] line = new String[3];
		line[0] = nameTxt.getText();
		line[1] = manRad.isSelected() ? "남" : "여";
		line[2] = (String) locBox.getSelectedItem(); // 아이템의 리턴타입은 오브젝트이나 스트링으로 다운캐스팅하여 loc에 넣는다.
		model.addRow(line);
	}

	private void saveMethod() {

		JFileChooser save = new JFileChooser();
		int chk = save.showSaveDialog(this);

		if (chk == JFileChooser.CANCEL_OPTION) // 취소옵션을 누른다면 현재 메소드를 빠져나간다.
			return;

		File file = save.getSelectedFile(); // 선택한 파일의 정보를 파일로 리턴해준다.
		FileWriter fw = null;

		try {
			fw = new FileWriter(file); // 두번째 인자값이 없으니 false이고 updata이다. true는 append

			for (int i = 0; i < table.getRowCount(); i++) { // 현재 테이블의 행의 개수
				String name = (String) table.getValueAt(i, 0); //가져올땐 getValueAt 쓸 때는 setValueAt
				String gen = (String) table.getValueAt(i, 1);
				String loc = (String) table.getValueAt(i, 2);

				fw.write(name + "/" + gen + "/" + loc + "\r\n");
			}
			fw.flush();
			JOptionPane.showMessageDialog(this, "저장되었습니다.");
			
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
		manRad.setSelected(true); // 처음에 남자가 선택되어 있었으므로
		locBox.setSelectedIndex(0); // 콤보박스 인덱스를 0으로 맞추어 준다.
		nameTxt.requestFocus();
	}

	private void openMethod() {
		JFileChooser open = new JFileChooser();
		int chk = open.showOpenDialog(this);

		if (chk == JFileChooser.CANCEL_OPTION)
			return;

		File file = open.getSelectedFile();

		Scanner sc = null;
		try {
			sc = new Scanner(file);
			model.setRowCount(0);
			
			while(sc.hasNextLine()) {
				String[] line = sc.nextLine().split("/");
				model.addRow(line); //model에다 넣어준다. 
			}
		}catch(FileNotFoundException ex) {
			ex.printStackTrace();
		}
	}

	@Override
	public void mouseClicked(MouseEvent e) {

	}

	@Override
	public void mouseEntered(MouseEvent e) { // 마우스가 들어갈 때
		Object obj = e.getSource();
		if (obj == regBtn) {
			regBtn.setText("REGISTER");
		} else if (obj == saveBtn) {
			saveBtn.setText("SAVE");
		} else if (obj == openBtn) {
			openBtn.setText("OPEN");
		}
	}

	@Override
	public void mouseExited(MouseEvent e) { // 마우스가 빠져나올 때
		Object obj = e.getSource();
		if (obj == regBtn) {
			regBtn.setText("정보등록");
		} else if (obj == saveBtn) {
			saveBtn.setText("파일저장");
		} else if (obj == openBtn) {
			openBtn.setText("파일열기");
		}
	}

	@Override
	public void mousePressed(MouseEvent e) {

	}

	@Override
	public void mouseReleased(MouseEvent e) {

	}
}

public class java223_gui {

	public static void main(String[] args) {
		new Research2();
	}

}
