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
import javax.swing.border.TitledBorder;

public class ParkingList extends JPanel {
	
	public JLabel iconA1, iconB1, iconC1;
	public JButton iconA, iconB, iconC;
	private JLabel lblNewLabel_2;

	public ParkingList() {
		ImageIcon logo1 = new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\packing1.jpg");
		Image img = logo1.getImage();
		Image newimg1 = img.getScaledInstance(220, 110, java.awt.Image.SCALE_SMOOTH);
		logo1 = new ImageIcon(newimg1);

		ImageIcon logo2 = new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\packing2.jpg");
		Image img2 = logo2.getImage();
		
		Image newimg2 = img2.getScaledInstance(220, 110, java.awt.Image.SCALE_SMOOTH);
		logo2 = new ImageIcon(newimg2);

		ImageIcon logo3 = new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\packing3.jpg");
		Image img3 = logo3.getImage();
		Image newimg3 = img3.getScaledInstance(220, 110, java.awt.Image.SCALE_SMOOTH);
		logo3 = new ImageIcon(newimg3);
		setLayout(null);
				iconC = new JButton("교대점 주차장");
				iconC.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\교대.PNG"));
				iconC.setBounds(294, 343, 250, 55);
				add(iconC);
				iconC1 = new JLabel(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\IMG_0111.JPG"));
				iconC1.setBounds(37, 185, 220, 110);
				add(iconC1);
				iconB = new JButton("강남점 주차장");
				iconB.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\강남.PNG"));
				iconB.setBounds(296, 217, 250, 55);
				add(iconB);
				iconB1 = new JLabel(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\IMG_0110.JPG"));
				iconB1.setBounds(37, 315, 220, 110);
				add(iconB1);
				
				iconA = new JButton("역삼점 주차장");
				iconA.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\역삼.PNG"));
				iconA.setBounds(295, 92, 250, 55);
				add(iconA);
		
				iconA1 = new JLabel(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\parkinglist\\IMG_0112.JPG"));
				iconA1.setBounds(39, 55, 220, 110);
				add(iconA1);
		
		lblNewLabel_2 = new JLabel("New label");
		lblNewLabel_2.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\템플.PNG"));
		lblNewLabel_2.setBounds(-12, 0, 612, 39);
		add(lblNewLabel_2);
		
		setSize(600, 500);
		
		JLabel lblNewLabel = new JLabel("");
		lblNewLabel.setIcon(new ImageIcon("C:\\Users\\sitdi\\eclipse-workspace\\javademo\\src\\Semi_Project\\login\\배경2.png"));
		lblNewLabel.setBounds(0, 0, 600, 500);
		add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("New label");
		lblNewLabel_1.setIcon(new ImageIcon("C:\\job\\workspace\\javademo\\src\\Semi_Project\\login\\배경.png"));
		lblNewLabel_1.setBounds(0, 0, 600, 500);
		add(lblNewLabel_1);
		setVisible(true);
	}

	public static void main(String[] args) {
		ParkingList pak = new ParkingList();
		JFrame f = new JFrame();
		f.getContentPane().add(BorderLayout.CENTER, pak);
		f.setSize(600, 500);
		f.setVisible(true);
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
}
