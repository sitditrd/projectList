package Semi_Project;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.*;
import javax.swing.table.*;
import javax.swing.border.*;

public class Total extends JFrame implements MouseListener {
	JLabel nameL, TypeL, PriceL;
	JTextField nameF, PriceF;
	JComboBox<String> type;
	JButton registerB, modifyB, deleteB;

	DefaultTableModel tableModel;
	JTable table;
	JScrollPane scroll;
	Main main;

	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	PaymentDAO dao;
	PaymentDTO dto;

	// 테이블 헤드
	Object[] cols = { "이름", "연락처", "차번호", "주차공간" };

	public Connection init() throws ClassNotFoundException, SQLException {
		Class.forName("oracle.jdbc.OracleDriver");

		String url = "jdbc:oracle:thin://@127.0.0.1:1521:xe";
		String username = "demiproject";
		String password = "a1234";
		return DriverManager.getConnection(url, username, password);
	}

	public void exit() throws SQLException {
		if (rs != null)
			rs.close();

		if (stmt != null)
			stmt.close();

		if (pstmt != null)
			pstmt.close();

		if (conn != null)
			conn.close();
	}

	public Total() {

		super("사용자 결제정보");
		getContentPane().setBackground(Color.BLACK);

		// JLabel
		nameL = new JLabel("티켓번호");
		PriceL = new JLabel("총 결제금액");
		TypeL = new JLabel("결제방식");

		Font font = new Font("sansSerif", 0, 12);

		nameL.setFont(font);
		PriceL.setFont(font);
		TypeL.setFont(font);

		// JTextField(디폴트사이즈)
		nameF = new JTextField(18);
		PriceF = new JTextField(8);

		// ComboBox
		String[] item = new String[] { "선택", "현금", "카드", "문화상품권" };
		type = new JComboBox<>(item);

		type.setPreferredSize(new Dimension(90, 21));

		// 테이블
		tableModel = new DefaultTableModel(cols, 1) {
			public boolean isCellEditable(int row, int col) {
				return false;
			}
		}; // 익명 inner class타입으로 오버라이딩하였음. 셀을 건드리지못하도록 하기 위해서이다.

		table = new JTable(tableModel);
		scroll = new JScrollPane(table);
		table.setRowHeight(60); // 라인의 높이
		table.getColumnModel().getColumn(0).setPreferredWidth(10); // 라인의 너비(전체250)
		table.getColumnModel().getColumn(1).setPreferredWidth(30);
		table.getColumnModel().getColumn(2).setPreferredWidth(10);
		table.getColumnModel().getColumn(3).setPreferredWidth(100);
		table.getTableHeader().setReorderingAllowed(false); // 컬럼이동불가능.
		table.setRowSelectionAllowed(false); // 기본 true
		table.setColumnSelectionAllowed(false); // 기본 false

		// 전체적인 배치
		JPanel labelP = new JPanel(new GridLayout(3, 1));
		labelP.add(nameL);
		labelP.add(PriceL);
		labelP.add(TypeL);

		JPanel nameP = new JPanel(new FlowLayout(FlowLayout.LEFT));
		nameP.add(nameF);

		JPanel telP = new JPanel(new FlowLayout(FlowLayout.LEFT));
		telP.add(type);

		JPanel panel3 = new JPanel(new FlowLayout(FlowLayout.LEFT));
		panel3.add(PriceF);

		JPanel top = new JPanel(new GridLayout(3, 1));
		top.add(nameP);
		top.add(panel3);
		top.add(telP);

		JPanel north = new JPanel(new BorderLayout());
		north.setBackground(Color.WHITE);
		north.setBorder(new TitledBorder("결제정보"));
		north.setForeground(Color.WHITE);
		north.add("West", labelP);
		north.add("Center", top);

		JPanel up = new JPanel(new BorderLayout(0, 5));
		up.add("Center", north);

		JPanel center = new JPanel(new BorderLayout(0, 5));
		center.setBounds(8, 15, 678, 209);
		center.setBackground(Color.BLACK);
		center.add("Center", scroll);
		center.add("North", up);
		getContentPane().setLayout(null);
		getContentPane().add(center);
		JLabel label = new JLabel("  ");
		label.setBounds(686, 15, 8, 246);
		getContentPane().add(label);
		JLabel label_1 = new JLabel("  ");
		label_1.setBounds(0, 15, 8, 246);
		getContentPane().add(label_1);
		JLabel label_2 = new JLabel("  ");
		label_2.setBounds(0, 261, 694, 15);
		getContentPane().add(label_2);
		JLabel label_3 = new JLabel("  ");
		label_3.setBounds(0, 0, 694, 15);
		getContentPane().add(label_3);

		registerB = new JButton("");
		registerB.setIcon(
				new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\결제등록.PNG"));
		registerB.setBounds(182, 234, 81, 27);
		getContentPane().add(registerB);
		registerB.setFont(font);
		modifyB = new JButton("");
		modifyB.setIcon(
				new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\등록수정.PNG"));
		modifyB.setBounds(296, 234, 81, 27);
		getContentPane().add(modifyB);
		modifyB.setFont(font);
		deleteB = new JButton("");
		deleteB.setIcon(
				new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\등록삭제.PNG"));
		deleteB.setBounds(409, 234, 81, 27);
		getContentPane().add(deleteB);
		deleteB.setFont(font);
		deleteB.addMouseListener(this);
		modifyB.addMouseListener(this);

		registerB.addMouseListener(this);

		confirm();

		setSize(700, 305);
		setVisible(true);
		setResizable(false);
	}

	public static void main(String[] args) {
		new Total();
	}

	public void showMessage(String Message) {
		JOptionPane.showMessageDialog(this, Message);
	}

	@Override
	public void mouseClicked(MouseEvent e) {
		Object obj = e.getSource();

		if (obj.equals(registerB)) {

			if (!type.getSelectedItem().toString().equals("선택")) {
				showMessage("결제되었습니다.");
				Main.TotalType = type.getSelectedItem().toString();

				// 싱글톤객체로 생성해놓았기 때문에 getInstance메소드를 호출하여 생성할때마다 new를 하지 않아도 된다.
				PaymentDAO dao = PaymentDAO.getInstance();
				dao.reserve();

				setVisible(false);
				Main mai = new Main();
			} else {
				JOptionPane.showMessageDialog(this, "결제방법을 선택하세요");
			}

			// modify와 delete의 차이점 : modify,delete는 Main에 flag값이 살아있기 때문에 Seat테이블에 다시 입력이
			// 가능하지만, delete는 seat으로 돌아가지 않고
			// main으로 돌아가서 Main의 flag값을 바꾸어서 입력할 수 있다. 즉 주차장 코드를 다르게 입력할 수 있다는 의미이다.
		} else if (obj.equals(modifyB)) {
			try {
				conn = init();

				String sql = "delete from Seat where Parking_UID = ? and Seat_UID = ?";
				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, Main.flag);
				pstmt.setString(2, Main.space);
				pstmt.executeUpdate();

			} catch (ClassNotFoundException | SQLException e1) {
				e1.printStackTrace();
			} finally {
				try {
					exit();
				} catch (SQLException e1) {
					e1.printStackTrace();
				}
			}

			Seat sea = new Seat();
			setVisible(false);
		} else if (obj.equals(deleteB)) {
			showMessage("해당 예약이 취소되었습니다.");
			try {
				conn = init();

				String sql = "delete from Seat where Parking_UID = ? and Seat_UID = ?";
				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, Main.flag);
				pstmt.setString(2, Main.space);
				pstmt.executeUpdate();

			} catch (ClassNotFoundException | SQLException e1) {
				e1.printStackTrace();
			} finally {
				try {
					exit();
				} catch (SQLException e1) {
					e1.printStackTrace();
				}
			}

			Main mai = new Main();
			setVisible(false);
		}
	}

	public void confirm() {
		Main.flag5 = 1;
		if (!type.getSelectedItem().equals("선택"))
			Main.flag6 = 1;

		// 티켓번호/////////////////////////////////////////////////////////////////////////////////
		try {
			conn = init();
			String sql = "select Ticket_UID from Ticket where Ticket_ID = ? ";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, Main.Id);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				Main.reservenum = rs.getInt("TICKET_UID");
			}

		} catch (ClassNotFoundException | SQLException e1) {
			e1.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e2) {
				e2.printStackTrace();
			}
		}

		nameF.setText(String.valueOf(Main.reservenum));
		// 티켓번호/////////////////////////////////////////////////////////////////////////////////

		// 총
		// 가격/////////////////////////////////////////////////////////////////////////////////
		try {
			conn = init();
			String sql = "select price from HourCharge where Company_UID = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, Main.flag);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				Main.TotalPrice2 = rs.getInt("Price");
			}

		} catch (ClassNotFoundException | SQLException e1) {
			e1.printStackTrace();
		} finally {
			try {
				exit();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}

		if (Main.TotalPrice.equals("3시간")) {
			Main.TotalPrice2 *= 3;
		} else if (Main.TotalPrice.equals("5시간")) {
			Main.TotalPrice2 *= 5;
		} else if (Main.TotalPrice.equals("24시간")) {
			Main.TotalPrice2 = 40000;
		}

		PriceF.setText(String.valueOf(Main.TotalPrice2));
		// 총가격/////////////////////////////////////////////////////////////////////////////////

		// 사용자
		// 정보출력/////////////////////////////////////////////////////////////////////////////////
		try {
			conn = init();

			stmt = conn.createStatement();
			String sql = "SELECT Customer_Name, Customer_Tel, Customer_CarNum FROM Customer WHERE Customer_Id = '"
					+ Main.Id + "'";

			rs = stmt.executeQuery(sql);

			while (rs.next()) {
				table.setValueAt(rs.getString("Customer_Name"), 0, 0);
				table.setValueAt(rs.getString("Customer_Tel"), 0, 1);
				table.setValueAt(rs.getString("Customer_CarNum"), 0, 2);
			}
			// 주차장 공간위치값 table에 setValueAt을 통하여 삽입
			table.setValueAt(main.space, 0, 3);

		} catch (ClassNotFoundException | SQLException e3) {
			e3.printStackTrace();
		}
		try {

		} finally {
			try {
				exit();
			} catch (SQLException e4) {
				e4.printStackTrace();
			}
		}
		// 사용자
		// 정보출력/////////////////////////////////////////////////////////////////////////////////
	}

	@Override
	public void mouseEntered(MouseEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void mouseExited(MouseEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void mousePressed(MouseEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void mouseReleased(MouseEvent e) {
		// TODO Auto-generated method stub

	}
}
