package Semi_Project;

import java.awt.FlowLayout;
import java.awt.Panel;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.ImageIcon;
import java.awt.Font;
import java.awt.Color;

public class Login extends JFrame implements MouseListener {

	JLabel lbId, lbPwd;
	JTextField txtId;
	JPasswordField txtPwd;
	JButton btnlogin, btnregister;

	Connection conn = null;
	ResultSet rs = null;
	Statement stmt = null;
	private JLabel lblNewLabel;
	private JLabel lblNewLabel_1;

	public Login() {

		super("주차 예매 프로그램");

		getContentPane().setLayout(null);

		lbId = new JLabel("ID");
		lbId.setForeground(new Color(240, 248, 255));
		lbId.setFont(new Font("굴림", Font.BOLD, 21));
		lbPwd = new JLabel("Password");
		lbPwd.setForeground(new Color(240, 248, 255));
		lbPwd.setFont(new Font("굴림", Font.BOLD, 21));

		// 아이디, 패스워드 라벨 위치조정
		lbId.setBounds(239, 508, 100, 30);
		lbPwd.setBounds(239, 560, 100, 30);

		getContentPane().add(lbId);
		getContentPane().add(lbPwd);

		txtId = new JTextField(20);
		txtPwd = new JPasswordField();
		txtPwd.setEchoChar('*');

		// 아이디 패스워드 텍스트필드 위치조정
		txtId.setBounds(383, 509, 170, 30);
		txtPwd.setBounds(383, 561, 170, 30);

		getContentPane().add(txtId);
		getContentPane().add(txtPwd);

		lblNewLabel = new JLabel("");
		lblNewLabel.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\parking-ikon.png"));
		lblNewLabel.setBounds(145, 10, 504, 456);

		getContentPane().add(lblNewLabel);

		btnlogin = new JButton("");
		btnlogin.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\로그인.PNG"));
		btnlogin.setBounds(216, 639, 162, 38);
		getContentPane().add(btnlogin);
		btnregister = new JButton("");
		btnregister.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\회원가입.png"));
		btnregister.setBounds(393, 639, 162, 38);
		getContentPane().add(btnregister);

		lblNewLabel_1 = new JLabel("");
		lblNewLabel_1.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\배경.png"));
		lblNewLabel_1.setBounds(0, 0, 744, 721);
		getContentPane().add(lblNewLabel_1);
		btnregister.addMouseListener(this);

		btnlogin.addMouseListener(this);

		setSize(750, 750);
		setResizable(false);
		setVisible(true);

	}

	public static void main(String[] args) {
		new Login();
	}

	public void showMessage(String message) {
		JOptionPane.showMessageDialog(this, message);
	}

	@Override
	public void mouseClicked(MouseEvent e) {

		MemberDAO dao = new MemberDAO();

		Main.Id = txtId.getText();
		String id = txtId.getText();
		String pwd = txtPwd.getText();

		Object obj = e.getSource();
		if (obj.equals(btnlogin)) {
			Main.Id = txtId.getText();
			try {

				conn = dao.init();
				stmt = conn.createStatement();
				String sql = "SELECT Customer_Id, Customer_Password FROM Customer where Customer_Id='" + id
						+ "'AND Customer_Password='" + pwd + "'";

				rs = stmt.executeQuery(sql);

				if (rs.next()) {
					showMessage("로그인 성공!!");
					Main m = new Main();
					setVisible(false);
				} else {
					showMessage("로그인 실패!!");
				}

			} catch (ClassNotFoundException e1) {
				e1.printStackTrace();
			} catch (SQLException e1) {
				e1.printStackTrace();
			} finally {
				try {
					dao.exit();
				} catch (SQLException e1) {
					e1.printStackTrace();
				}
			}
		}
		if (obj.equals(btnregister)) {
			MemberRegister m = new MemberRegister();
		}
	}

	@Override
	public void mouseEntered(MouseEvent arg0) {

	}

	@Override
	public void mouseExited(MouseEvent arg0) {

	}

	@Override
	public void mousePressed(MouseEvent arg0) {

	}

	@Override
	public void mouseReleased(MouseEvent arg0) {

	}
}
