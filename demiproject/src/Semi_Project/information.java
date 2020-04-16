package Semi_Project;
import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.Frame;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import java.awt.Color;
import javax.swing.SwingConstants;
import javax.swing.ImageIcon;

public class information extends Frame implements ActionListener{
	
	JLabel parkingNum = new JLabel("주차공간수");
	JLabel CustomerName = new JLabel("공휴일");
	JLabel Gps = new JLabel("매장위치");
	JLabel BrandPhoneNumber = new JLabel("매장 전화번호");
	JLabel WeekDay = new JLabel("주중 이용시간");
	JLabel Weekend = new JLabel("주말 이용시간");
	JLabel AdminName = new JLabel("관리자 성명");
	JLabel AdminPhoneNumber = new JLabel("관리자 전화번호");
	
	JTextField TparkingNum = new JTextField();
	JTextField TScheduledate = new JTextField();
	JTextField Tgps = new JTextField();
	JTextField TBrandPhoneNumber = new JTextField();
	JTextField TWeekDay = new JTextField();
	JTextField TWeekend = new JTextField();
	JTextField TAdminName = new JTextField();
	JTextField TAdminPhoneNumber = new JTextField();

	JButton okBtn = new JButton("");
	JButton cancelBtn = new JButton("");
	
	ParkListDAO dao, dao2;
	ParkListDTO dto, dto2;
	
	public information() {
		
		super("주차장 정보");
		setBackground(new Color(0, 0, 0));
		GridLayout grid = new GridLayout(9,2, 10,5);
		grid.setVgap(5);
		setLayout(grid);
		
		dao = new ParkListDAO();
		dto = new ParkListDTO();
		
		dao2 = new ParkListDAO();
		dto2 = new ParkListDTO();
		
		dto = dao.show();
		dto2 = dao2.show2();
		parkingNum.setForeground(Color.WHITE);
		
		add(parkingNum);
		TparkingNum.setBackground(Color.WHITE);
		add(TparkingNum);
		CustomerName.setForeground(Color.WHITE);
		add(CustomerName);
		add(TScheduledate);
		Gps.setForeground(Color.WHITE);
		add(Gps);
		add(Tgps);
		BrandPhoneNumber.setForeground(Color.WHITE);
		add(BrandPhoneNumber);
		add(TBrandPhoneNumber);
		WeekDay.setForeground(Color.WHITE);
		add(WeekDay);
		add(TWeekDay);
		Weekend.setForeground(Color.WHITE);
		add(Weekend);
		add(TWeekend);
		AdminName.setForeground(Color.WHITE);
		add(AdminName);
		add(TAdminName);
		AdminPhoneNumber.setForeground(Color.WHITE);
		add(AdminPhoneNumber);
		add(TAdminPhoneNumber);
		okBtn.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\예약하기.PNG"));
		add(okBtn);
		cancelBtn.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\뒤로가기.PNG"));
		add(cancelBtn);
		
		TparkingNum.setText(String.valueOf(dto.getTotal_Seat_Number()));
		TScheduledate.setText(dto2.getSchedule_Date());
		Tgps.setText(dto.getParking_Location());
		TBrandPhoneNumber.setText(dto.getParking_Tel());
		TWeekDay.setText(dto.getParking_HourOfUse_Weekdays());
		TWeekend.setText(dto.getParking_HourOfUse_Weekend());
		TAdminName.setText(dto.getParking_Manager());
		TAdminPhoneNumber.setText(dto.getParking_Manager_Phone());
		
		setSize(600, 600);
		setVisible(true);
		
		okBtn.addActionListener(this);
		cancelBtn.addActionListener(this);

		this.addWindowListener(new WindowAdapter() {
			@Override
			
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
	}
	public static void main(String[] args) {
		new information();	
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		
		if(obj.equals(okBtn)) {
			Seat sea = new Seat();
			setVisible(false);
		} else if(obj.equals(cancelBtn)) {
			Main mai = new Main();
			setVisible(false);
		} 
	}
}
