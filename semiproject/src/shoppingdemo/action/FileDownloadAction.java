package shoppingdemo.action;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import shoppingdemo.dao.BoardDAO;

public class FileDownloadAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		BoardDAO dao = BoardDAO.getInstance();
		
		String filename = "";

		if (req.getParameter("notice_id") != null) {
			
			int notice_id = Integer.parseInt(req.getParameter("notice_id"));
			boolean noticeChk = true;
			
			filename = dao.fileMethod(notice_id, noticeChk);

		} else if (req.getParameter("post_id") != null) {
			
			int post_id = Integer.parseInt(req.getParameter("post_id"));
			boolean postChk = false;
			
			filename = dao.fileMethod(post_id, postChk);
		}

		try {
			// 파일명 한글처리
			String convName = URLEncoder.encode(filename, "UTF-8");
			convName = convName.replace("+", " ");

			// 컨텐트 타입
			resp.setContentType("application/octet-stream");

			// 다운로드 파일명
			resp.setHeader("Content-Disposition", "attachment;filename=" + convName + ";");

			// String saveDirectory = req.getRealPath("/");
			// File file = new File(saveDirectory + "/temp/" + filename);
			File file = new File("c:/temp/" + filename);

			// 서버의 파일첨부 읽어오기

			FileInputStream is = new FileInputStream(file);
			BufferedInputStream bs = new BufferedInputStream(is);

			// 클라이언트에 파일내용보내기
			BufferedOutputStream bo = new BufferedOutputStream(resp.getOutputStream());

			byte buffer[] = new byte[1024];
			int len = 0;
			while ((len = bs.read(buffer)) > 0) {
				bo.write(buffer, 0, len);
				bo.flush();
			}

			// 스트림 연결 종료
			bs.close();
			is.close();
			bo.close();

		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}// end execute()

}// end class