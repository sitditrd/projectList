package shoppingdemo.action;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import shoppingdemo.dao.NoticeDAO;
import shoppingdemo.dto.NoticeDTO;

public class NoticeWriteAction {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		MultipartRequest multi = null;
		
		String saveDirectory = "c:/temp";
		
		File file = new File(saveDirectory);

		if (!file.exists())
			file.mkdir();

		int maxPostSize = 10000000; // 10mb
		String encoding = "UTF-8";

		try {
			multi = new MultipartRequest(req, saveDirectory, maxPostSize, encoding, new DefaultFileRenamePolicy());
		} catch (IOException e) {
			e.printStackTrace();
		}

		NoticeDTO dto = new NoticeDTO();
		
		NoticeDAO dao = NoticeDAO.getInstance();
		
		dto.setNotice_subject(multi.getParameter("notice_subject"));
		dto.setNotice_content(multi.getParameter("notice_content"));
		dto.setNotice_upload(multi.getFilesystemName("notice_upload"));

		dao.insertMethod(dto);

	}// end execute()

}// end class
