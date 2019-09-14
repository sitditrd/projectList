package view;

import java.io.File;
import java.io.FileInputStream;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.view.AbstractView;

import dao.NoticeDAO;

//다운로드 창을 띄우기 위한 뷰페이지
public class BoardDownLoadView  extends AbstractView{ //다운로드하려면 AbstractView을 상속해야 한다.
	private NoticeDAO dao;
	
	public BoardDownLoadView() {
		
	}

	public void setDao(NoticeDAO dao) {
		this.dao = dao;
	}

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		
		int num=Integer.parseInt(request.getParameter("num")); //request객체를 통해서 받을 때
		//System.out.println(num);		
		//System.out.println(model.get("num")); //model이라는 Map객체를 이용해서 받을 때
		
		String root = request.getSession().getServletContext().getRealPath("/");
		// root+"temp/"
		String saveDirectory = root + "temp" + File.separator;
		
		String upload=dao.getFile(num); //upload에는 첨부파일명을 받는다.
		
		String fileName=upload.substring(upload.indexOf("_")+1); //다운로드창에서는 실제파일명을 가져오기위해 UUID로 random한 것을 읽어오지 않고 파일명만 보인다.
		
		//파일명이 한글일때 인코딩 작업을 한다.
		String str=URLEncoder.encode(fileName,"UTF-8");
		
		//원본파일명에서 공백이 있을 때  +로 표시가 되므로 공백으로 처리해줌
		str=str.replaceAll("\\+", "%20");
		
		//컨텐트 타입
		response.setContentType("application/octet-stream"); //다운로드 창을 보여주기 위해서.
		
		//다운로드창에 보여줄 파일명을 지정한다.
		response.setHeader("Content-Disposition",
						    "attachment;filename="+str+";");
		
		//서버에 저장된 파일을 읽어와 클라이언트에 출력해 준다.
		FileCopyUtils.copy(new FileInputStream(new File(saveDirectory,upload)), response.getOutputStream());
		
	}//end renderMergedOutputModel()
	
	
}//end class



