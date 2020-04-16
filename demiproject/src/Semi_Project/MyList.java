package Semi_Project;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

import java.awt.BorderLayout;
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

import javax.swing.JTextField;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JButton;
import javax.swing.JComboBox;
import java.awt.Color;
import javax.swing.ImageIcon;

public class MyList extends JPanel {
	public JTextField txtpwd;
	public JTextField txtphone;
	public JTextField txtphone2;
	public JTextField txtcarnum;

	public JLabel lbpwd;
	public JLabel lbgetname;
	public JLabel lbcarnum;
	public JLabel lbgetsex;

	public JButton btnModify;
	public JButton btnLeave;
	public JComboBox<String> combobox;
	JButton btnlogout;

	Connection conn1 = null;
	Statement stmt1 = null;
	PreparedStatement pstmt1 = null;
	ResultSet rs1 = null;

	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	static String id;
	static String pwd;
	static String name;
	static String phone;
	static String sex;
	static String carnum;

	MemberDAO dao;
	MemberDTO dto;

	private JTextField textField;
	private JTextField textField_1;

	public MyList() {
	
		setBackground(Color.DARK_GRAY);
		String pwd;
		String name;
		String phone;
		String sex;
		String carnum;
		dao = new MemberDAO();
		dto = new MemberDTO();
		dto = dao.getuserinfo2();

		setLayout(null);
		JLabel lbid = new JLabel("아이디");
		lbid.setForeground(Color.WHITE);
		lbid.setBounds(90, 40, 57, 15);
		add(lbid);

		JLabel lbgetid = new JLabel(dto.getId());
		lbgetid.setForeground(Color.WHITE);
		lbgetid.setBounds(160, 40, 57, 15);
		add(lbgetid);

		JLabel lbpwd = new JLabel("비밀번호");
		lbpwd.setForeground(Color.WHITE);
		lbpwd.setBounds(90, 80, 57, 15);
		add(lbpwd);

		txtpwd = new JTextField(dto.getPwd());
		txtpwd.setForeground(Color.BLACK);
		txtpwd.setBounds(158, 77, 116, 21);
		add(txtpwd);
		txtpwd.setColumns(10);
		JLabel lbname = new JLabel("이름");
		lbname.setForeground(Color.WHITE);
		lbname.setBounds(90, 120, 57, 15);
		add(lbname);

		lbgetname = new JLabel(dto.getName());
		lbgetname.setForeground(Color.WHITE);
		lbgetname.setBounds(160, 120, 57, 15);
		add(lbgetname);
		JLabel lbcarnum = new JLabel("차번호");
		lbcarnum.setForeground(Color.WHITE);
		lbcarnum.setBounds(90, 239, 57, 15);
		add(lbcarnum);

		JLabel lbsex = new JLabel("성별");
		lbsex.setForeground(Color.WHITE);
		lbsex.setBounds(90, 160, 57, 15);
		add(lbsex);

		lbgetsex = new JLabel(dto.getSex());
		lbgetsex.setForeground(Color.WHITE);
		lbgetsex.setBounds(158, 161, 57, 15);
		add(lbgetsex);

		JLabel lbphone = new JLabel("핸드폰");
		lbphone.setForeground(Color.WHITE);
		lbphone.setBounds(90, 189, 57, 15);
		add(lbphone);

		String[] aa = dto.getPhone().split("-");
		String[] arr = { aa[0], "010", "011", "016", "017", "019" };
		combobox = new JComboBox<String>(arr);
		combobox.setBackground(Color.WHITE);
		
		txtphone = new JTextField();
		txtphone.setForeground(Color.BLACK);
		txtphone.setText(aa[1]);
		txtphone.setBounds(230, 186, 60, 21);
		add(txtphone);
		txtphone.setColumns(10);

		JLabel lblNewLabel = new JLabel("-");
		lblNewLabel.setBounds(300, 189, 12, 15);
		add(lblNewLabel);

		txtphone2 = new JTextField();
		txtphone2.setText(aa[2]);
		txtphone2.setBounds(319, 186, 60, 21);
		add(txtphone2);
		txtphone2.setColumns(10);
		combobox.setBounds(153, 186, 64, 21);
		add(combobox);

		btnModify = new JButton("");
		btnModify.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\회원정보.PNG"));
		btnModify.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
			}
		});
		btnModify.setBounds(90, 298, 110, 23);
		add(btnModify);

		btnLeave = new JButton("");
		btnLeave.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\회원탈퇴.PNG"));
		btnLeave.setBounds(206, 298, 110, 23);
		add(btnLeave);

		txtcarnum = new JTextField(dto.getCarnum());
		txtcarnum.setBounds(153, 236, 116, 21);
		add(txtcarnum);
		txtcarnum.setColumns(10);

		btnlogout = new JButton("");
		btnlogout.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\로그아웃.PNG"));
		btnlogout.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});

		btnlogout.setBounds(323, 298, 110, 23);
		add(btnlogout);

		pwd = txtpwd.getText();
		name = lbgetname.getText();
		phone = txtphone.getText();
		sex = lbgetsex.getText();
		carnum = txtcarnum.getText();

	}
}
