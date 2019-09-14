package java1010_jdbc_gui;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

public class PersonInfo extends JFrame implements ActionListener, MouseListener {

	PersonMenu menu;
	PersonToolbar tool;
	PersonMain main;
	DefaultTableModel model;

	private int crow = -1; // 0으로 하면 안된다. 행 번호가 0부터 시작되기 때문이다.

	public PersonInfo() {
		menu = new PersonMenu();
		setJMenuBar(menu);

		tool = new PersonToolbar();
		main = new PersonMain();

		add(BorderLayout.NORTH, tool);
		add(BorderLayout.CENTER, main);

		/* registerB, modifyB, deleteB, clearB; */

		// actionListener연결
		main.registerB.addActionListener(this);
		main.modifyB.addActionListener(this);
		main.deleteB.addActionListener(this);
		main.clearB.addActionListener(this);

		// 저장하기위해 actionListener연결
		menu.fsave.addActionListener(this);
		tool.saveB.addActionListener(this);
		
		// 파일을 열기 위해 actionListener연결
		menu.fopen.addActionListener(this);
		tool.openB.addActionListener(this);

		// mouseListener연결
		main.table.addMouseListener(this);
		main.registerB.addMouseListener(this);
		main.modifyB.addMouseListener(this);
		main.deleteB.addMouseListener(this);
		main.clearB.addMouseListener(this);

		setSize(700, 700);
		setVisible(true);
		setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
		addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				String message = "정말로 종료하시겠습니까?";
				String title = "종료";
				if (getConfirmMessage(message, title) == JOptionPane.YES_OPTION) {
					System.exit(0);
				}
			}
		});
	}

	public static void main(String[] args) {
		new PersonInfo();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// JOptionPane.showMessageDialog(this, e.getSource()); //액션이 걸리는지 확인
		Object obj = e.getSource();
		if (obj == main.registerB) {
			setRegister(); // 등록
		} else if (obj == main.modifyB) {
			setModify(); // 수정
		} else if (obj == main.deleteB) {
			delete(); // 삭제
		} else if (obj == main.clearB) {
			init(); // 초기화
		} else if (obj == menu.fsave || obj == tool.saveB) {
			fileSave(); //파일저장
		} else if (obj == menu.fopen || obj == tool.openB) {
			fileOpen(); //파일열기
		}
	}

	public void setCrow(int crow) {
		this.crow = crow;
	}

	public int getCrow() {
		return crow;
	}

	private void init() {
		setClear();
		setTableClear();
	}
	
	private void fileOpen() {

		JFileChooser chooser = new JFileChooser();
		if(chooser.showOpenDialog(this) == JFileChooser.CANCEL_OPTION) {
			return;
		}
		setTableClear(); //취소버튼을 누르고 setTableClear가 되게 한다.
		
		File file = chooser.getSelectedFile(); //열 파일을 선택한다.
		Scanner sc = null;
		
		try {
			sc = new Scanner(file);
			//main.tableModel.setRowCount(0);
			int row=0;
			while(sc.hasNextLine()) {
				String[] line = sc.nextLine().split("/");
				//main.tableModel.addRow(line); //다지운상태에서 1행씩 추가하는 것. 
				main.table.setValueAt(line[0], row, 0);
				main.table.setValueAt(line[1], row, 1);
				main.table.setValueAt(line[2], row, 2);
				main.table.setValueAt(line[3], row, 3);
				main.table.setValueAt(line[4], row, 4);
				row++;
			}
		} catch(FileNotFoundException ex) {
			ex.printStackTrace();
		} finally {
			sc.close();
		}
	}

	private void fileSave() {
		JFileChooser chooser = new JFileChooser();

		if (chooser.showSaveDialog(this) == JFileChooser.CANCEL_OPTION)
			return;

		File file = chooser.getSelectedFile();
		FileWriter fw = null;

		try {
			fw = new FileWriter(file);
			for (int i = 0; i < main.table.getRowCount(); i++) {
				if (main.table.getValueAt(i, 0) == null)
					break;

				String num = main.table.getValueAt(i, 0).toString();
				String name = main.table.getValueAt(i, 1).toString();
				String sex = main.table.getValueAt(i, 2).toString();
				String tel = main.table.getValueAt(i, 3).toString();
				String email = main.table.getValueAt(i, 4).toString();
				fw.write(num + "/" + name + "/" + sex + "/" + tel + "/" + email + "/r\n");

			}
			fw.flush();
			setMessage("저장되었습니다.");
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

	private int getConfirmMessage(String message, String title) {
		int chk = JOptionPane.showConfirmDialog(this, message, title, JOptionPane.YES_NO_OPTION);

		return chk;
	}

	private void delete() {

		int row = main.table.getSelectedRow(); // 선택이 안되면 -1값이 나온다.

		if (row == -1 || main.table.getValueAt(row, 0) == null) { // 레코드가 비어있다는 소리이다.
			setMessage("삭제할 레코드를 확인하세요.");
			return;
		}

		String message = "선택한 레코드를 삭제하시겠습니까?";
		String title = "삭제";

		if (getConfirmMessage(message, title) == JOptionPane.NO_OPTION)
			return;

		// main.table.remove(row); //이거로 지우면 안된다.아래의 과정으로 지워야한다.
		main.tableModel.removeRow(row);

		if (main.table.getRowCount() < 50) {
			main.tableModel.setRowCount(50); // 만들어줄때는 tableModel로 해야한다.
		}

		// 새로운 번호 생성
		for (int i = 0; i < main.table.getRowCount(); i++) { // 테이블의 행의 개수를 가져와서 반복문을 돌린다.
			if (main.table.getValueAt(i, 0) == null)
				break;

			main.table.setValueAt(Integer.toString(i + 1), i, 0);

		}
	}

	// 테이블 레코드 초기화 및 생성
	private void setTableClear() {
		main.tableModel.setRowCount(0); // 테이블을 초기화시켜주기 위해서 (테이블 레코드 삭제)
		main.tableModel.setRowCount(50); // 테이블 레코드 생성
	}

	private void setModify() {
		// trim 불필요한 공백제거
		String name = main.nameF.getText().trim();
		String sex = main.manR.isSelected() ? "남" : "여";
		String tel1 = (String) main.telC.getSelectedItem(); // .toString();
		String tel2 = main.tel1F.getText().trim();
		String tel3 = main.tel2F.getText().trim();
		String email = main.emailF.getText().trim();

		// 모든 항목을 입력하지 않았을 때 경고...
		if (name.length() < 1 || tel2.length() < 1 || tel3.length() < 1 || email.length() < 1) {
			setMessage("모든 항목을 입력하십시오.");
			return; // 메소드를 완전히 빠져나갈 때 키워드
		}

		main.table.setValueAt(Integer.toString(1 + getCrow()), getCrow(), 0); // Integer값을 String으로 변환시키고 Object로 변환시킨다.
		main.table.setValueAt(name, getCrow(), 1); // 0번째행의 1컬럼
		main.table.setValueAt(sex, getCrow(), 2);
		main.table.setValueAt(tel1 + "-" + tel2 + "-" + tel3, getCrow(), 3);
		main.table.setValueAt(email, getCrow(), 4);

		setClear();
		setCrow(-1); // 사용자가 실수로 등록버튼을 눌렀을 때를 대비하기 위하여.
						// 한번 수정상태에서는 등록을 하면 안되기 때문이다. ]]
	}

	private void setRegister() {

		if (getCrow() > -1) { // 사용자가 수정버튼을 누른상태에서 수정을 하고있다는 중이므로 등록은 불가하다고 나와야 한다.
			setMessage("수정버튼을 누르세요");
			return;
		}

		// trim 불필요한 공백제거
		String name = main.nameF.getText().trim();
		String sex = main.manR.isSelected() ? "남" : "여";
		String tel1 = (String) main.telC.getSelectedItem(); // .toString();
		String tel2 = main.tel1F.getText().trim();
		String tel3 = main.tel2F.getText().trim();
		String email = main.emailF.getText().trim();

		// 모든 항목을 입력하지 않았을 때 경고...
		if (name.length() < 1 || tel2.length() < 1 || tel3.length() < 1 || email.length() < 1) {
			setMessage("모든 항목을 입력하십시오.");
			return; // 메소드를 완전히 빠져나갈 때 키워드
		}
		for (int i = 0; i < main.table.getRowCount(); i++) {
			// 이미 만들어진 테이블의 값을 가져올때는 getValueAt, 값을 저장해야 할 때는 setValueAt이다
			if (main.table.getValueAt(i, 0) == null) {
				main.table.setValueAt(Integer.toString(1 + i), i, 0); // Integer값을 String으로 변환시키고 Object로 변환시킨다.
				main.table.setValueAt(name, i, 1); // 0번째행의 1컬럼
				main.table.setValueAt(sex, i, 2);
				main.table.setValueAt(tel1 + "-" + tel2 + "-" + tel3, i, 3);
				main.table.setValueAt(email, i, 4);
				break;
			}
		}
		setClear();
	}

	private void setMessage(String message) {
		JOptionPane.showMessageDialog(this, message);

	}

	// 입력된 항목 초기화
	private void setClear() {
		main.nameF.setText("");
		main.tel1F.setText("");
		main.tel2F.setText("");
		main.emailF.setText("");

		main.telC.setSelectedIndex(0);
		main.manR.setSelected(true);

		// 커서위치를 이름에다 맞추어 놓은다.
		main.nameF.requestFocus();
	}

	private void setInputRecord() {
		// 더블 클릭한 테이블의 행의 번호를 리턴
		int row = main.table.getSelectedRow(); // 현재 이벤트가 발생이된(더블클릭이 된) 행의 번호를 가져온다.
												// 이 값은 수정버튼을 누를 때 필요하다.

		// setCrow(row); //이곳에 두면 안된다. 제대로된 행의 값을 받아와야 하는데 이곳은 위치검사 전이기 때문이다.

		if (row < 0 || main.table.getValueAt(row, 0) == null) {
			setMessage("빈 레코드를 선택하셨습니다.");
			return;
		}

		setCrow(row); // 이곳에 두어야 한다.

		main.nameF.setText((String) main.table.getValueAt(row, 1));

		String sex = main.table.getValueAt(row, 2).toString(); // 위의 다운캐스팅과정이랑 동일하다.
		if (sex.equals("남")) {
			main.manR.setSelected(true);
		} else
			main.womanR.setSelected(true);

		String[] data = main.table.getValueAt(row, 3).toString().split("-");
		main.telC.setSelectedItem(data[0]);
		main.tel1F.setText(data[1]);
		main.tel2F.setText(data[2]);

		main.emailF.setText(main.table.getValueAt(row, 4).toString());
	}

	@Override
	public void mouseClicked(MouseEvent e) {

		Object obj = e.getSource();
		if (obj == main.table && e.getClickCount() == 2) {// obj가 발생된 객체가 테이블이냐고 묻는다. 그리고 클릭은 2번이여야 한다.
			setInputRecord();
		}

	}

	@Override
	public void mouseEntered(MouseEvent e) {
		Object obj = e.getSource();
		if (obj == main.registerB) {
			main.registerB.setText("REGISTER");
		} else if (obj == main.modifyB) {
			main.modifyB.setText("Modify");
		} else if (obj == main.deleteB) {
			main.deleteB.setText("Delete");
		} else if (obj == main.clearB) {
			main.clearB.setText("Clear");
		}
	}

	@Override
	public void mouseExited(MouseEvent e) {
		Object obj = e.getSource();
		if (obj == main.registerB) {
			main.registerB.setText("등록");
		} else if (obj == main.modifyB) {
			main.modifyB.setText("수정");
		} else if (obj == main.deleteB) {
			main.deleteB.setText("삭제");
		} else if (obj == main.clearB) {
			main.clearB.setText("초기화");
		}
	}

	@Override
	public void mousePressed(MouseEvent e) {

	}

	@Override
	public void mouseReleased(MouseEvent e) {

	}

}
