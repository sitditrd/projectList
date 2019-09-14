package java0918_gui;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JToolBar;
import javax.swing.KeyStroke;

class MenuTest extends JFrame implements ActionListener {
	JMenu file, edit, align, help;
	
	JMenuItem fnew, open, save;
	JMenuItem copy, paste, cut;
	JMenuItem left, right, center;
	
	//JToolBar에 연결할 컴포넌트 선언
	JButton fnewBtn, openBtn, saveBtn;
	
	public MenuTest() {
		
		//메뉴바 생성 후
		JMenuBar menubar = new JMenuBar(); 
		
		//메뉴 생성
		file = new JMenu("File"); 
		edit = new JMenu("Edit");
		align = new JMenu("Align");
		help = new JMenu("Help");
		
		//메뉴바에 메뉴를 연결한다.
		menubar.add(file);
		menubar.add(edit);
		menubar.add(help);
		
		//프레임에 메뉴바를 연결한다.
		setJMenuBar(menubar);
		
		//메인메뉴안의 서브메뉴를 생성한다.
		fnew = new JMenuItem("New");
		open = new JMenuItem("Open");
		save = new JMenuItem("Save");
		
		//서브메뉴 특정문자에 언더바를 표시한다.
		fnew.setMnemonic('N');
		fnew.setMnemonic('O');
		fnew.setMnemonic('S');
		
		fnew.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_N, InputEvent.CTRL_DOWN_MASK)); //컨트롤 N의 단축키를 넣으란 소리이다.
		open.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_O, InputEvent.CTRL_DOWN_MASK)); 
		save.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_S, InputEvent.CTRL_DOWN_MASK)); 
		
		//file메뉴에 서브메뉴 연결
		file.add(fnew);
		file.addSeparator(); //구분선
		file.add(open);
		file.add(save);
		
		left = new JMenuItem("Left");
		right = new JMenuItem("Right");
		center = new JMenuItem("Center");
		
		//align메뉴에 서브메뉴를 연결한다.
		align.add(left);
		align.add(right);
		align.add(center);
		
		edit.add(align);
		
		//툴바 버튼에  이미지 삽입
		JToolBar toolBar = new JToolBar();
		fnewBtn = new JButton(new ImageIcon("src/java0918_gui/images/new.gif"));
		openBtn = new JButton(new ImageIcon("src/jaba0918_gui/images/open.gif"));
		saveBtn = new JButton(new ImageIcon("src/java0918_gui/images/save.gif"));
		
		toolBar.add(fnewBtn);
		toolBar.add(openBtn);
		toolBar.add(saveBtn);
		
		add(BorderLayout.NORTH,toolBar);

		open.addActionListener(this);
		openBtn.addActionListener(this);
		
		setSize(600,600);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		
		if(obj == open || obj == openBtn) {
			JFileChooser openFile =new JFileChooser();
			openFile.showOpenDialog(this);
		}
	}
}

public class java225_gui {

	public static void main(String[] args) {
		new MenuTest();
	}

}
