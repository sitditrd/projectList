package Semi_Project;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;
import javax.swing.plaf.TabbedPaneUI;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Frame;
import java.awt.Label;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JButton;
import java.awt.Color;
import javax.swing.UIManager;
import java.awt.SystemColor;
import javax.swing.ImageIcon;

public class Main extends JFrame implements ActionListener {
	// JTabbedPane생성
	JTabbedPane tabbedPane = new JTabbedPane();

	// JTabbedPane에 연결할 패널을 위해 맴버변수 선언
	Introduce Intro;
	ParkingList ParkList;
	JPanel reserve = new JPanel();
	MyList MyList;

	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	// 주차공간을 위한 제어변수 선언
	static int Total1 = 0;
	static int Total2 = 0;
	static int Total3 = 0;

	// Parking_UID 설정을 위한 제어변수 선언
	static int flag = 0;

	// Page 구현을 위한 제어변수 선언
	static int flag2 = 0;
	static int flag3 = 0;

	// 예약번호 구현을 위한 제어변수 선언
	static int reservenum;

	// ID및 총가격 구현을 위한 제어변수 선언
	static String space = "";
	static String Id = "";
	static String TotalPrice = "";
	static int TotalPrice2 = 0;

	// 결제방법 구현을 위한 제어변수 선언
	static String TotalType = "";

	// 예약번호 삭제구현을 위한 제어변수 선언
	static int reservenum2;

	// 결제 제어 구현을 위한 제어변수 선언
	static int flag5 = 0;
	static int flag6 = 0;

	public Main() {
		getContentPane().setBackground(new Color(0, 0, 0));
		getContentPane().setForeground(Color.BLUE);

		ParkList = new ParkingList();
		ParkList.iconB1.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\IMG_0110.JPG"));
		ParkList.iconC1.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\IMG_0111.JPG"));
		ParkList.iconA1.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\IMG_0112.JPG"));
		ParkList.iconC.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\교대.PNG"));
		ParkList.iconB.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\강남.PNG"));
		ParkList.iconA.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\역삼.PNG"));
		MyList = new MyList();

		// ParkList 버튼 연결
		ParkList.iconA.addActionListener(this);
		ParkList.iconB.addActionListener(this);
		ParkList.iconC.addActionListener(this);
		MyList.btnModify.addActionListener(this);
		MyList.btnLeave.addActionListener(this);
		MyList.btnlogout.addActionListener(this);

		// 전체적인 여백
		getContentPane().setLayout(new BorderLayout());
		getContentPane().add("North", new JLabel(" "));
		getContentPane().add("East", new JLabel("  "));
		getContentPane().add("West", new JLabel("  "));

		getContentPane().add("South", new JLabel("  "));
		getContentPane().add("Center", new JLabel("  "));
		Intro = new Introduce();

		tabbedPane.add("메인", Intro);
		tabbedPane.add("주차장", ParkList);
		tabbedPane.add("예약확인", reserve);
		tabbedPane.add("회원정보수정", MyList);
		
		tabbedPane.addChangeListener(new ChangeListener() {
			@Override
			public void stateChanged(ChangeEvent e) {

				if (e.getSource() instanceof JTabbedPane)
					tabbedPane = (JTabbedPane) e.getSource();

				if (tabbedPane.getSelectedIndex() == 2) {
					Reservation res = new Reservation();
					setVisible(false);
				}

			}
		});

		getContentPane().add(tabbedPane);

		setSize(600, 530);

		setTitle("주차장 예매 프로그램");
		setVisible(true);
		setResizable(false);
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
	}

	public static void main(String[] args) {
		new Main();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();

		if (obj.equals(ParkList.iconA)) {
			flag = 1;
			information inf = new information();
			setVisible(false);
		} else if (obj.equals(ParkList.iconB)) {
			flag = 2;
			information inf = new information();

			setVisible(false);
		} else if (obj.equals(ParkList.iconC)) {
			flag = 3;
			information inf = new information();

			setVisible(false);
		} else if (obj.equals(MyList.btnModify)) {
			try {

				String pwd = MyList.txtpwd.getText();
				String name = MyList.lbgetname.getText();
				String phone = (String) MyList.combobox.getSelectedItem();
				String phone2 = MyList.txtphone.getText();
				String phone3 = MyList.txtphone2.getText();
				String phonesum = phone + "-" + phone2 + "-" + phone3;
				String carnum = MyList.txtcarnum.getText();
				Class.forName("oracle.jdbc.OracleDriver");

				String url = "jdbc:oracle:thin://@127.0.0.1:1521:xe";
				String username = "demiproject";
				String password = "a1234";
				conn = DriverManager.getConnection(url, username, password);
				String sql = "update customer set Customer_Password=?, Customer_Name=?, Customer_Tel=?,Customer_CarNum=? where Customer_Id=?";

				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, pwd);
				pstmt.setString(2, name);
				pstmt.setString(3, phonesum);

				pstmt.setString(4, carnum);
				pstmt.setString(5, Main.Id);
				pstmt.executeUpdate();
			} catch (ClassNotFoundException e1) {
				e1.printStackTrace();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			JOptionPane.showMessageDialog(this, "회원정보가 수정되었습니다");
		} else if (obj.equals(MyList.btnLeave)) {
			MemberDAO dao = new MemberDAO();
			dao.delete();
			JOptionPane.showMessageDialog(this, "탈퇴되었습니다");
			setVisible(false);
			Login l = new Login();

		} else if (obj.equals(MyList.btnlogout)) {
			setVisible(false);
			Login log = new Login();
		}
	}
}
