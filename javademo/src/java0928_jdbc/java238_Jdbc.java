package java0928_jdbc;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import org.omg.CORBA.OBJECT_NOT_EXIST;

class DesignTest extends JFrame implements ActionListener{
	JTextField inputTxt;
	JButton searchBtn;
	JTable table;
	DefaultTableModel model;
	
	public DesignTest() {
		
		inputTxt = new JTextField(20);
		searchBtn = new JButton("검색");
		
		//BorderLayOut의 North에 붙여주기 위해 panel을 생성
		JPanel jp = new JPanel();
		jp.add(inputTxt);
		jp.add(searchBtn);
		
		//테이블 헤드
		Object[] obj = {"사원번호", "사원명", "연봉", "입사일"};
		
		//컬럼명, 행의갯수
		model = new DefaultTableModel(obj, 0) {
			
			//셀 편집 불가능
			@Override
			public boolean isCellEditable(int row, int column) {
				return false; //cell편집을 못하도록 막기위해서 false값을 준다. 
			}
		};
		
		table=new JTable(model); //model에 저장되는 값을 보여주는 곳이 table이다.
		
		//컬럼의 이동이 불가능하게 막는다. 
		table.getTableHeader().setReorderingAllowed(false);
		
		//라인의 높이
		table.setRowHeight(20);
		
		add(BorderLayout.NORTH, jp);
		add(BorderLayout.CENTER, new JScrollPane(table));
		
		searchBtn.addActionListener(this);
		
		setSize(500,400);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		String data = inputTxt.getText(); //텍스트 필드에 입력되어 있는 문자열 값을 가져온다. 
		
		inputTxt.requestFocus(); //포커스를 inputTxt로 다시 맞춘다.
		inputTxt.select(0, data.length()); //0번째 인덱스부터 문자열의 길이만큼 드래그 하라
		
		//테이블 초기화
		model.setRowCount(0);
		
		EmpDAO dao = EmpDAO.getInstance(); 
		List<EmpDTO> aList = dao.searchMethod(data);
		
		if(aList.size() == 0) { //data에 검색되는 문자열이 없을때의 조건이다.
			JOptionPane.showMessageDialog(this, "검색어가 데이터가 없습니다.");
			return; //현재메소드를 더이상 수행하지 않도록 메소드를 빠져나오는 return 키워드를 사용한다.
		}
		
		//이제 List에 저장되어 있는 값을 테이블에 넣어주어야 한다.(반복문을 이용해서)
		for(EmpDTO dto : aList) {
			Object[] line = new Object[4]; //컬럼 4개가 필요하므로 4개의 배열을 생성한다.
			line[0] = dto.getEmployee_id();
			line[1] = dto.getFirst_name();
			line[2] = dto.getSalary();
			line[3] = dto.getHire_date();
			
			//이제 이데이터를 table에 넣어주어야 한다.
			model.addRow(line);
		}
		
	}
}

public class java238_Jdbc {

	public static void main(String[] args) {
		new DesignTest();
	}

}
