package java0915_gui;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

import javax.swing.ButtonGroup;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;

class EventTest extends JFrame implements ActionListener, ItemListener{
	JRadioButton topBtn, midBtn, botBtn;
	JTextArea ta;
	
	public EventTest() {
		topBtn = new JRadioButton("상", true); // 3중 상을 선택한 의미이다. (생략하면 기본은 false값을 같는다.)
		midBtn = new JRadioButton("중");
		botBtn = new JRadioButton("하");
		ta = new JTextArea(10,10);
		
		//라디오버튼을 그룹으로 묶어준다.
		ButtonGroup bg = new ButtonGroup();
		bg.add(topBtn);
		bg.add(midBtn);
		bg.add(botBtn);

		JPanel p1 = new JPanel();
		p1.add(topBtn);
		p1.add(midBtn);
		p1.add(botBtn);
		
		add(BorderLayout.NORTH, p1);
		add(BorderLayout.CENTER, ta);
		
	    topBtn.addActionListener(this);
		midBtn.addActionListener(this);
		botBtn.addActionListener(this);
		
		topBtn.addItemListener(this);
		midBtn.addItemListener(this);
		botBtn.addItemListener(this);
		
		setSize(400,300);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // 창닫기효과
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		
		/*Object obj = e.getSource();
		if(obj == topBtn) {
			ta.setText("top");
		}else if(obj == midBtn) {
			ta.setText("mid");
		}else if(obj == botBtn) {
			ta.setText("bot");
		}*/
		
		Object obj = e.getSource();
		if(obj==topBtn)
			ta.append(topBtn.getText());
		if(obj==midBtn) 
			ta.append(midBtn.getText());
		if(obj==botBtn) 
			ta.append(botBtn.getText());
	}

	@Override
	public void itemStateChanged(ItemEvent e) { //itemEvent는 중복이 되고 ActionEvent는 현재 찍힌거 이벤트가 처리된다.
		//ta.setText("");
		
		/*Object obj = e.getSource();
		if(obj==topBtn)
			ta.append(topBtn.getText());
		if(obj==midBtn) 
			ta.append(midBtn.getText());
		if(obj==botBtn) 
			ta.append(botBtn.getText());*/
	}
}
public class java220_gui {

	public static void main(String[] args) {
		new EventTest();
	}

}
