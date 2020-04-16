package Semi_Project;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.Image;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.Color;

public class Introduce extends JPanel{
	
	public Introduce() {
		
		setSize(614, 460);
		setVisible(true);
		setLayout(null);
		
		JLabel label = new JLabel("주차장 소개글");
		label.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\템플2.PNG"));
		label.setBounds(-55, 0, 669, 39);
		add(label);
		JLabel label2 = new JLabel("<html>고객님!! 방문해주셔서 감사합니다.&nbsp<br><br> 저희 주차장은 고객님들께 항상 최선을 다하며<br> 최고의 "
				+ "서비스를 제공하는 회사가 되도록 노력<br>하고 있습니다.&nbsp<br> 앞으로도 고객님들의 많은 방문 부탁드립니다.!!^^");
		label2.setForeground(Color.WHITE);
		label2.setBounds(0, 207, 407, 201);
		add(label2);
		
		JLabel lblNewLabel = new JLabel("New label");
		lblNewLabel.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\depositphotos_86766538-stock-illustration-top-view-parking-lot-design.jpg"));
		lblNewLabel.setBounds(0, 38, 614, 422);
		add(lblNewLabel);
	}
	
	public static void main(String[] args) {
		Introduce intro = new Introduce();
		JFrame f = new JFrame();
		f.getContentPane().add(BorderLayout.CENTER, intro);
		f.setSize(500, 600);
		f.setVisible(true);
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

}
