package Semi_Project;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.ButtonGroup;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.border.TitledBorder;
import javax.swing.table.DefaultTableModel;
import java.awt.Color;
import javax.swing.ImageIcon;

public class Reservation extends JFrame implements ActionListener {
	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	JButton registerB, deleteB, BackB;
	DefaultTableModel tableModel;
	JTable table;
	JScrollPane scroll;

	// 테이블 헤드
	Object[] cols = { "Index", "예약번호", "결제방법", "결제가격", "결제일자", "주차장", "주차공간번호" };

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

	public Reservation() {
		super("주차장 예매 프로그램");
		getContentPane().setBackground(Color.BLACK);

		Font font = new Font("sansSerif", 0, 12);

		// 테이블
		tableModel = new DefaultTableModel(cols, 50) {
			public boolean isCellEditable(int row, int col) {
				return false;
			}
		}; // 익명 inner class타입으로 오버라이딩. 셀을 건드리지못하도록

		table = new JTable(tableModel);
		scroll = new JScrollPane(table);
		table.setRowHeight(60); // 라인의 높이

		table.getColumnModel().getColumn(0).setPreferredWidth(10);
		table.getColumnModel().getColumn(1).setPreferredWidth(30);
		table.getColumnModel().getColumn(2).setPreferredWidth(90);
		table.getColumnModel().getColumn(3).setPreferredWidth(90);
		table.getColumnModel().getColumn(4).setPreferredWidth(90);
		table.getColumnModel().getColumn(5).setPreferredWidth(90);
		table.getColumnModel().getColumn(6).setPreferredWidth(90);
		table.getTableHeader().setReorderingAllowed(false); // 컬럼이동불가능.
		getContentPane().setLayout(null);
		table.setRowSelectionAllowed(false); // 기본 true
		table.setColumnSelectionAllowed(false); // 기본 false
		//
		JPanel up = new JPanel(new BorderLayout(10, 5));
		up.setBackground(Color.BLACK);
		//
		JPanel center = new JPanel(new BorderLayout(0, 40));
		center.setBounds(8, 98, 778, 459);
		center.setBackground(Color.BLACK);
		center.add("Center", scroll);
		center.add("North", up);
		getContentPane().add(center);

		registerB = new JButton("");
		registerB.setIcon(
				new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\예약확인.PNG"));
		registerB.setBounds(172, 39, 83, 28);
		getContentPane().add(registerB);

		registerB.setFont(font);

		registerB.addActionListener(this);
		deleteB = new JButton("");
		deleteB.setBounds(334, 39, 83, 29);
		getContentPane().add(deleteB);
		deleteB.setIcon(
				new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\예약취소.PNG"));
		deleteB.setFont(font);
		deleteB.addActionListener(this);
		BackB = new JButton("");
		BackB.setIcon(
				new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\뒤로가기2.PNG"));
		BackB.setBounds(491, 39, 82, 28);
		getContentPane().add(BackB);
		BackB.setFont(font);
		BackB.addActionListener(this);
		JLabel label = new JLabel("  ");
		label.setBounds(786, 15, 8, 542);
		getContentPane().add(label);
		JLabel label_1 = new JLabel("  ");
		label_1.setBounds(0, 15, 8, 542);
		getContentPane().add(label_1);
		JLabel label_2 = new JLabel("  ");
		label_2.setBounds(0, 557, 794, 15);
		getContentPane().add(label_2);
		JLabel label_3 = new JLabel("  ");
		label_3.setBounds(0, 0, 794, 15);
		getContentPane().add(label_3);

		setSize(800, 600);
		setVisible(true);
		setResizable(false);
	}

	public static void main(String[] args) {
		Reservation rs = new Reservation();
	}

	public int getConfirmMessage(String message, String title) {
		int chk = JOptionPane.showConfirmDialog(this, message, title, JOptionPane.YES_NO_OPTION);

		return chk;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();

		if (obj.equals(registerB)) {

			int row = 0;
			try {
				conn = init();
				stmt = conn.createStatement();
				String sql = "select Payment_UID, Payment_Option, Total_Price, Payment_Date, Payment_SpaceName, Payment_SpaceCode from Payment where Payment_Id = '"
						+ Main.Id + "' Order by Payment_UID ";
				rs = stmt.executeQuery(sql);

				while (rs.next()) {
					table.setValueAt((row + 1), row, 0);
					table.setValueAt(rs.getInt("Payment_UID"), row, 1);
					table.setValueAt(rs.getString("Payment_Option"), row, 2);
					table.setValueAt(rs.getInt("Total_Price"), row, 3);
					table.setValueAt(rs.getString("Payment_Date"), row, 4);
					table.setValueAt(rs.getString("Payment_SpaceName"), row, 5);
					table.setValueAt(rs.getString("Payment_SpaceCode"), row, 6);
					row++;
				}

			} catch (ClassNotFoundException | SQLException e2) {
				e2.printStackTrace();
			} finally {
				try {
					exit();
				} catch (SQLException e1) {
					e1.printStackTrace();
				}
			}

			// 삭제하면 예약했던 좌석을 다시 고를 수 있게 만들어야 한다. (아래의 순서 명시할 것.)
		} else if (obj.equals(deleteB)) {

			int row = table.getSelectedRow();
			int column = table.getSelectedColumn();

			if (column != 1) {
				JOptionPane.showMessageDialog(this, "예약번호(열)을 취소하실 곳을 선택하고 예약을 취소하실 주차장을 고르세요.");
				return;
			}

			try {
				conn = init();

				String sql = "select Payment_SpaceName, Payment_SpaceCode from Payment where Payment_Id = ? and Payment_UId = ?";
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, Main.Id);
				pstmt.setInt(2, (Integer) table.getValueAt(row, column));
				pstmt.executeUpdate();
				rs = pstmt.executeQuery();

				while (rs.next()) {
					if (rs.getString("Payment_SpaceName").equals("역삼점 주차장")) {
						Main.flag = 1;
					} else if (rs.getString("Payment_SpaceName").equals("강남점 주차장")) {
						Main.flag = 2;
					} else if (rs.getString("Payment_SpaceName").equals("교대점 주차장")) {
						Main.flag = 3;
					}

					Main.space = rs.getString("Payment_SpaceCode");
				}
			} catch (ClassNotFoundException | SQLException e1) {
				e1.printStackTrace();
			}

			try {
				conn = init();
				String sql = "delete from Payment where Payment_UID = ?";
				pstmt = conn.prepareStatement(sql);

				pstmt.setInt(1, (Integer) table.getValueAt(row, column));
				pstmt.executeUpdate();

			} catch (ClassNotFoundException | SQLException e1) {
				e1.printStackTrace();
			}

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

			JOptionPane.showMessageDialog(this, "삭제되었습니다.");
			setVisible(false);
			Main main = new Main();

		} else if (obj.equals(BackB)) {
			setVisible(false);
			Main main = new Main();
		}

	}

}
