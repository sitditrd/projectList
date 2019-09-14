package java0920_network;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Scanner;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class java231_ChatClient implements Runnable, ActionListener{

	String userName;
	String host;
	int port;
	
	private JFrame frm;
	private JPanel pan;
	private JTextArea taOutput;
	private JLabel lbName;
	private JTextField tfInput;
	private DataInputStream dataIn;
	private DataOutputStream dataOut;
	
	Thread th;
	
	public java231_ChatClient() {
		
	}
	
	public java231_ChatClient(String host, int port) {
		System.out.print("사용자 이름을 입력하세요 : ");
		Scanner sc = null;
		sc = new Scanner(System.in);
		
		userName = sc.nextLine();
		
		if(userName.equals("")) 
			userName = "guest";
		
		this.host = host;
		this.port = port;
		
		initComponent();
	}
	
	private void initComponent() {
		frm = new JFrame("채팅프로그램 [ " + host + " : " + port + " ] "); //프레임창이 뜨면 제목으로 나온다.
		
		taOutput = new JTextArea();
		taOutput.setEditable(false); //편집하지 못하도록 설정한다. (false값을 주어)
		
		tfInput = new JTextField(10);
		pan = new JPanel();
		lbName = new JLabel("입력 : ");
		
		JScrollPane scroll = new JScrollPane(taOutput);
		
		//위의 생성된 것을 Frame에다 붙여주는 단계
		frm.add(BorderLayout.CENTER, scroll);
		frm.add(BorderLayout.SOUTH, pan);
		
		pan.setLayout(new BorderLayout());
		pan.add(lbName, BorderLayout.WEST);
		pan.add(tfInput, BorderLayout.CENTER);
		
		tfInput.addActionListener(this);
		
		frm.setSize(1000, 1000);
		frm.setVisible(true);
		frm.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
		frm.addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				stop();
			}
		});
	}
	
	private void stop() {
		if(th != null) {
			th.interrupt();
			th = null;
			try {
				dataOut.close();
			} catch (IOException e) {
				//e.printStackTrace();  이상있는거 출력할 필요가 없으니 이런식으로 해놓는다. 
			}
		}
		
		frm.setVisible(false);
		frm.dispose();
		System.exit(0);
	}
	
	private void initStart() {
		Socket socket = null;
		if(th == null) {
			try {
				socket = new Socket(host, port);
				InputStream is = socket.getInputStream();
				OutputStream os = socket.getOutputStream();
				dataIn = new DataInputStream(new BufferedInputStream(is));
				dataOut = new DataOutputStream(new BufferedOutputStream(os));
				
			} catch (IOException e) {
				//e.printStackTrace();
				try {
					socket.close(); //이상이 있을 때 socket을 닫는다. 
				} catch (IOException e1) {
					//e1.printStackTrace();
				}
			} 
			
			th = new Thread(this); //서버에서 데이터를 받아서 textarea에 처리하기 위해서 thread로 돌려서 처리한다.
								   //main에서는 inputdata만 처리한다. 
			th.start();
		}
	}
	
	public static void main(String[] args) {
		java231_ChatClient client = new java231_ChatClient("127.0.0.1", 7777);
		
		client.initStart();
	}

	@Override
	public void run() {
		System.out.println("메시지 수신 대기중\n");
		while(!Thread.interrupted()) { //(인터럽트가 발생하지 않았으면 == 이상이 없으면) 돌아가라는 의미이다.
			try {
				String line = dataIn.readUTF();
				taOutput.append(line+"\r\n");
			} catch (IOException e) {
				//e.printStackTrace();
			}
		}
	}

	@Override
	public void actionPerformed(ActionEvent event) {
		try {
			//Listener가 여러개 연결이 되어 있을때는 이것을 쓰는 데 하나만 연결됬을때는 아래처럼 쓴다.
			/*Object obj = event.getSource();
			obj.getText();*/
			
			dataOut.writeUTF(userName+":"+event.getActionCommand());
			dataOut.flush();
			tfInput.setText("");
			tfInput.requestFocus();
			
		} catch (IOException e) {
			handleIOException(e);
		}
	}
	
	private void handleIOException(IOException e) {
		if(th != null) { //thread가 돌아가는 상태이면
			tfInput.setVisible(false);
			
			frm.validate(); //메모리에서 제거시키기 위해서
			
			if(th != Thread.currentThread()) { 
				th.interrupt(); // 강제로 인터럽트 발생
				th = null;
				try {
					dataOut.close();
				} catch (IOException e1) {
					//e1.printStackTrace(); 이상있는거 출력할 필요가 없으니 이런식으로 해놓는다. 
				}
			}
		}
	}

}
