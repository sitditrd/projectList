package Semi_Project;

import java.awt.BorderLayout;
import java.awt.Checkbox;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Panel;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JCheckBoxMenuItem;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.border.Border;

public class Seat extends JFrame implements MouseListener {
	Connection conn = null;
	Statement stmt = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	JRadioButton j[] = new JRadioButton[30];
	JRadioButton j1[] = new JRadioButton[30];
	JRadioButton j2[] = new JRadioButton[30];
	JComboBox<String> time;
	JButton btnchoose, btncancle;

	public void add() {
		for (int i = 0; i < 30; i++) {
			j[i] = new JRadioButton("A" + (i + 1));
			j[i].setBackground(Color.black);
			j[i].setForeground(Color.white);
		}
	}

	public void add2() {
		for (int i = 0; i < 30; i++) {
			j1[i] = new JRadioButton("B" + (i + 1));
			j1[i].setBackground(Color.black);
			j1[i].setForeground(Color.white);
		}
	}

	public void add3() {
		for (int i = 0; i < 30; i++) {
			j2[i] = new JRadioButton("C" + (i + 1));
			j2[i].setBackground(Color.black);
			j2[i].setForeground(Color.white);
		}
	}

	public Seat() {

		super("사용자 주차공간 선택");
		getContentPane().setBackground(Color.BLACK);
		getContentPane().setLayout(new BorderLayout(30, 10));

		btnchoose = new JButton("선택");
		btnchoose.setFont(new Font("맑은고딕", Font.BOLD, 15));
		btncancle = new JButton("취소");
		btncancle.setFont(new Font("맑은고딕", Font.BOLD, 15));

		add();
	    add2();
		add3();

		ButtonGroup group = new ButtonGroup();
		for (int i = 0; i < 30; i++) {
			group.add(j[i]);
			group.add(j1[i]);
			group.add(j2[i]);
		}

		JPanel p7 = new JPanel(new GridLayout(6, 5));
		p7.setBackground(Color.BLACK);
		for (int i = 0; i < 30; i++) {
			p7.add(j[i]);
		}

		JPanel p8 = new JPanel(new GridLayout(6, 5));
		p8.setBackground(Color.BLACK);
		for (int i = 0; i < 30; i++) {
			p8.add(j1[i]);
		}

		JPanel p9 = new JPanel(new GridLayout(6, 5));
		p9.setBackground(Color.BLACK);
		for (int i = 0; i < 30; i++) {
			p9.add(j2[i]);
		}

		String[] item = new String[] { "선택", "1시간", "3시간", "5시간", "24시간" };
		time = new JComboBox<>(item);
		time.setBackground(Color.WHITE);
		
		JPanel p4 = new JPanel();
		p4.add(time);
		p4.add(btnchoose);
		p4.add(btncancle);

		JLabel sector1 = new JLabel("A구역");
		sector1.setForeground(Color.WHITE);
		JLabel sector2 = new JLabel(
				"                                                                                   B구역                                                                                                    ");
		sector2.setForeground(Color.WHITE);
		JLabel sector3 = new JLabel("C구역");
		sector3.setForeground(Color.WHITE);
		
		JPanel jp = new JPanel();
		GridLayout layout = new GridLayout(1, 3);
		jp.add(sector1);
		jp.add(sector2);
		jp.add(sector3);

		btnchoose.addMouseListener(this);
		btncancle.addMouseListener(this);

		
		jp.setBackground(Color.black);
		p4.setBackground(Color.black);
		
		getContentPane().add(jp, BorderLayout.NORTH);
		getContentPane().add(p7, BorderLayout.WEST);
		getContentPane().add(p8, BorderLayout.CENTER);
		getContentPane().add(p9, BorderLayout.EAST);
		getContentPane().add(p4, BorderLayout.SOUTH);

		
		setSize(850, 650);
		setResizable(false);
		setVisible(true);
	}

	public void showMessage(String message) {
		JOptionPane.showMessageDialog(this, message);
	}

	public static void main(String[] args) {
		new Seat();
	}

	@Override
	public void mouseClicked(MouseEvent e) {
		Object obj = e.getSource();
		MemberDAO dao = new MemberDAO();
		MemberDTO dto = new MemberDTO();

		if (obj.equals(btnchoose)) {

			String temptime = time.getSelectedItem().toString();
			Main.TotalPrice = temptime;
			Main.flag2 = 0;
			Main.flag3 = 0;

			if (Main.TotalPrice.equals("선택")) {
				setVisible(false);
				JOptionPane.showMessageDialog(this, "시간을 선택해 주세요");
				Main.flag2 = 1;
				Main.flag3 = 1;
				Seat seat = new Seat();
			}

			if (Main.flag3 == 0) {
				for (int i = 0; i < 90; i++) {
					if (j[i].isSelected()) {
						Main.space = j[i].getText();
						dto.setSector(j[i].getText());
						showMessage(j[i].getText() + "을 선택하였습니다.");
						MemberDTO se = new MemberDTO(j[i].getText());
						dao.sector(se);
						dao.Ticketid(se);

						if (Main.flag2 == 0) {
							Total total = new Total();
							setVisible(false);
						} else if (Main.flag2 == 1) {
							JOptionPane.showMessageDialog(this, "이미 선택된 주차공간입니다.");
							Main.flag2 = 0;
						}

						return;
					}

					if (j1[i].isSelected()) {
						Main.space = j1[i].getText();
						dto.setSector(j1[i].getText());
						showMessage(j1[i].getText() + "을 선택하였습니다.");
						MemberDTO se = new MemberDTO(j1[i].getText());
						dao.sector2(se);
						dao.Ticketid(se);

						if (Main.flag2 == 0) {
							Total total = new Total();
							setVisible(false);
						} else if (Main.flag2 == 1) {
							JOptionPane.showMessageDialog(this, "이미 선택된 주차공간입니다.");
							Main.flag2 = 0;
						}

						return;
					}

					if (j2[i].isSelected()) {
						Main.space = j2[i].getText();
						dto.setSector(j[2].getText());
						showMessage(j2[i].getText() + "을 선택하였습니다.");
						MemberDTO se = new MemberDTO(j2[i].getText());
						dao.sector3(se);
						dao.Ticketid(se);

						if (Main.flag2 == 0) {
							Total total = new Total();
							setVisible(false);
						} else if (Main.flag2 == 1) {
							JOptionPane.showMessageDialog(this, "이미 선택된 주차공간입니다.");
							Main.flag2 = 0;
						}

						return;
					}
				}
			}

		}

		if (obj.equals(btncancle)) {
			Main main = new Main();
			setVisible(false);
		}

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