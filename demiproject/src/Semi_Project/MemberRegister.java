package Semi_Project;

import java.awt.Button;
import java.awt.Checkbox;
import java.awt.CheckboxGroup;
import java.awt.Choice;
import java.awt.FlowLayout;
import java.awt.Frame;
import java.awt.Label;
import java.awt.Panel;
import java.awt.TextField;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPasswordField;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.UIManager;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.DefaultComboBoxModel;
import java.awt.Color;
import javax.swing.ImageIcon;

public class MemberRegister extends JFrame implements MouseListener {

	JLabel lblId, lblPwd, lblName, lblHp, lblGen, lbcarnum, title;
	JTextField txtId, txtName;
	// 비밀번호는 암호와가 되야 하므로 JTextField로 선언 x / JPasswordField로 선언 o
	JPasswordField txtPwd;
	JTextField txtHp1, txtHp2, txtHp3;
	JCheckBox cbMale, cbFeMale;
	JComboBox<String> phone;

	JTextField txtcarnum;
	JButton btnSubmit, btnCancel, btnconfirm;

	Connection conn = null;
	ResultSet rs = null;
	Statement stmt = null;
	private JTextField textField;

	public MemberRegister() {

		super("회원가입"); // Frame(String title)을 호출한다.
		getContentPane().setBackground(Color.BLACK);

		getContentPane().setLayout(null);

		title = new JLabel("회원가입");
		lblId = new JLabel("아이디");
		lblId.setForeground(Color.WHITE);
		lblId.setFont(UIManager.getFont("InternalFrame.titleFont"));
		lblPwd = new JLabel("패스워드");
		lblPwd.setForeground(Color.WHITE);
		lblPwd.setFont(UIManager.getFont("InternalFrame.titleFont"));
		lblName = new JLabel("이름");
		lblName.setForeground(Color.WHITE);
		lblName.setFont(UIManager.getFont("InternalFrame.titleFont"));
		lblHp = new JLabel("핸드폰");
		lblHp.setForeground(Color.WHITE);
		lblHp.setFont(UIManager.getFont("InternalFrame.titleFont"));
		lblGen = new JLabel("성별");
		lblGen.setForeground(Color.WHITE);
		lblGen.setFont(UIManager.getFont("InternalFrame.titleFont"));
		lbcarnum = new JLabel("차번호");
		lbcarnum.setForeground(Color.WHITE);
		lbcarnum.setFont(UIManager.getFont("InternalFrame.titleFont"));

		lblId.setBounds(107, 50, 100, 30);
		lblPwd.setBounds(107, 118, 100, 30);
		lblName.setBounds(107, 176, 100, 30);
		lblHp.setBounds(107, 243, 100, 30);
		lblGen.setBounds(107, 305, 100, 30);
		lbcarnum.setBounds(107, 368, 118, 30);

		Panel aa = new Panel(new FlowLayout(FlowLayout.CENTER));
		title.setBounds(0, 50, 100, 20);

		aa.add(title);

		getContentPane().add(lblId);
		getContentPane().add(lblPwd);
		getContentPane().add(lblName);
		getContentPane().add(lblHp);
		getContentPane().add(lblGen);
		getContentPane().add(lbcarnum);

		txtId = new JTextField(20);
		txtPwd = new JPasswordField();
		txtPwd.setEchoChar('*');
		txtName = new JTextField(20);
		Label lblhipen1 = new Label("-");
		Label lblhipen2 = new Label("-");

		txtHp2 = new JTextField();
		txtHp3 = new JTextField();
		txtcarnum = new JTextField();

		Panel panGen = new Panel(new FlowLayout(FlowLayout.LEFT));
		panGen.setBackground(Color.BLACK);

		JCheckBox group = new JCheckBox();
		cbMale = new JCheckBox("남자", true);
		cbMale.setForeground(Color.WHITE);
		cbFeMale = new JCheckBox("여자", false);
		cbFeMale.setForeground(Color.WHITE);

		panGen.add(cbMale);
		panGen.add(cbFeMale);
		panGen.setBounds(229, 305, 200, 30);

		txtId.setBounds(229, 53, 168, 30);
		txtPwd.setBounds(229, 121, 168, 30);
		txtName.setBounds(229, 179, 168, 30);

		lblhipen1.setBounds(295, 243, 10, 30);
		txtHp2.setBounds(306, 246, 60, 30);
		lblhipen2.setBounds(372, 243, 10, 30);
		txtHp3.setBounds(386, 246, 60, 30);
		txtcarnum.setBounds(229, 371, 168, 30);

		getContentPane().add(aa);
		getContentPane().add(txtId);
		getContentPane().add(txtPwd);
		getContentPane().add(txtName);

		getContentPane().add(lblhipen1);
		getContentPane().add(txtHp2);
		getContentPane().add(lblhipen2);
		getContentPane().add(txtHp3);
		getContentPane().add(panGen);
		getContentPane().add(txtcarnum);

		final JComboBox comboBox = new JComboBox();
		comboBox.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				textField.setText((String) comboBox.getSelectedItem());
			}
		});
		comboBox.setBackground(Color.WHITE);
		cbMale.setBackground(Color.BLACK);
		cbFeMale.setBackground(Color.BLACK);

		comboBox.setModel(new DefaultComboBoxModel(new String[] { "선택", "010", "011", "016", "017", "019" }));
		comboBox.setBounds(229, 245, 60, 30);

		getContentPane().add(comboBox);
		btnSubmit = new JButton("");
		btnSubmit.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\가입완료.PNG"));
		btnSubmit.setFont(UIManager.getFont("InternalFrame.titleFont"));
		btnSubmit.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
			}
		});
		btnSubmit.setBounds(136, 462, 115, 30);
		getContentPane().add(btnSubmit);

		btnCancel = new JButton("");
		btnCancel.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\취소.PNG"));
		btnCancel.setFont(UIManager.getFont("InternalFrame.titleFont"));
		btnCancel.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		btnCancel.setBounds(317, 462, 115, 30);
		getContentPane().add(btnCancel);
		btnconfirm = new JButton("");
		btnconfirm.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\아이디확인.PNG"));
		btnconfirm.setFont(new Font("굴림", Font.PLAIN, 15));
		btnconfirm.setLocation(422, 50);
		getContentPane().add(btnconfirm);
		btnconfirm.setSize(115, 30);

		textField = new JTextField();
		textField.setBounds(250, 255, 1, 1);

		getContentPane().add(textField);
		textField.setColumns(10);
		btnconfirm.addMouseListener(this);
		btnCancel.addMouseListener(this);

		btnSubmit.addMouseListener(this);

		setSize(570, 570);
		setResizable(false);

		setVisible(true);
	}

	public void showMessage(String message) {
		JOptionPane.showMessageDialog(this, message);
	}

	public static void main(String[] args) {
		new MemberRegister();
	}

	@Override
	public void mouseClicked(MouseEvent e) {
		Object obj = e.getSource();
		MemberDAO dao = new MemberDAO();

		String tempid = txtId.getText();
		String temppwd = txtPwd.getText();
		String tempname = txtName.getText();
		String temph2 = txtHp2.getText();
		String temph3 = txtHp3.getText();
		String phone2 = textField.getText() + "-" + temph2 + "-" + temph3;
		String tempsex = "";
		String tempsex1 = cbMale.getText();
		String tempsex2 = cbFeMale.getText();

		if (cbMale.isSelected())
			tempsex = cbMale.getText();
		else
			tempsex = cbFeMale.getText();
		String tempcarnum = txtcarnum.getText();

		MemberDTO dto = new MemberDTO(tempid, temppwd, tempname, phone2, tempsex, tempcarnum);

		if (obj.equals(btnconfirm)) {

			try {
				conn = dao.init();

				stmt = conn.createStatement();
				String sql = "SELECT Customer_Id FROM Customer where Customer_id='" + tempid + "'";
				rs = stmt.executeQuery(sql);
				if (rs.next() == true || tempid.isEmpty() == true) {
					showMessage("해당 ID는 사용이 불가능합니다!");
				} else {
					showMessage("사용가능한 ID입니다");
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

		// 등록버튼
		if (obj.equals(btnSubmit)) {
			dao.enroll(dto);
			if (tempid.length() < 1 || temppwd.length() < 1 || tempname.length() < 1 || temph2.length() < 1
					|| temph3.length() < 1) {
				showMessage("해당항목을 모두 입력하세주세요.");
				return;
			} else
				showMessage("가입완료");

			this.setVisible(false);
		} else if (obj.equals(btnCancel)) {
			this.setVisible(false);
		}
	}

	@Override
	public void mouseEntered(MouseEvent e) {

	}

	@Override
	public void mouseExited(MouseEvent e) {

	}

	@Override
	public void mousePressed(MouseEvent e) {

	}

	@Override
	public void mouseReleased(MouseEvent e) {

	}
}