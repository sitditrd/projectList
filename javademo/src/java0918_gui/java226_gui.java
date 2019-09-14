package java0918_gui;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.FlowLayout;
import java.text.SimpleDateFormat;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.text.SimpleAttributeSet;

class TabTest extends JFrame implements Runnable {
	JTabbedPane tabPane;
	JLabel timeLbl;

	public TabTest() {

		tabPane = new JTabbedPane();

		JPanel jp1 = new JPanel();
		jp1.setBackground(new Color(255, 0, 0));
		jp1.add(new JLabel("red page입니다."));
		// red : 탭명, jp1 : 탭을 선택했을 때 화면에 보여줄 컴포넌트
		tabPane.addTab("red", jp1);

		JPanel jp2 = new JPanel();
		jp2.setBackground(new Color(0, 255, 0));
		jp2.add(new JLabel("green page입니다."));
		// green : 탭명, jp2 : 탭을 선택했을 때 화면에 보여줄 컴포넌트
		tabPane.addTab("green", jp2);

		JPanel jp3 = new JPanel();
		jp3.setBackground(new Color(0, 0, 255));
		jp3.add(new JLabel("blue page입니다."));
		// blue : 탭명, jp2 : 탭을 선택했을 때 화면에 보여줄 컴포넌트
		tabPane.addTab("blue", jp3);

		timeLbl = new JLabel(process());
		
		JPanel p = new JPanel(new FlowLayout(FlowLayout.RIGHT)); //시간 레이블을 오른쪽으로 정렬을 시키고자 할 때
		p.add(timeLbl);

		//초기화면에서 보여줄 탭을 지정함
		tabPane.setSelectedIndex(1);
		
		add(BorderLayout.CENTER, tabPane);
		add(BorderLayout.SOUTH, p);

		setSize(500, 400);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

	private String process() {
		long data = System.currentTimeMillis();
		String pattern = "yyyy-MM-dd hh:mm:ss";
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		return sdf.format(data);
	}

	@Override
	public void run() {
		while (true) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			timeLbl.setText(process());
		}
	}
}

public class java226_gui {

	public static void main(String[] args) {
		Thread th = new Thread(new TabTest());
		th.start();
	}

}
