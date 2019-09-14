package shoppingdemo.action;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import shoppingdemo.dao.NoticeDAO;
import shoppingdemo.dto.NoticeDTO;

public class NoticeEditAction {

	public MultipartRequest execute(HttpServletRequest req, HttpServletResponse resp) {

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

		int notice_id = Integer.parseInt(multi.getParameter("notice_id"));

		// board테이블에 첨부파일의 저장여부 검색
		String filename = dao.fileCheck(notice_id);

		if (multi.getFilesystemName("notice_upload") != null) { // 수정 첨부파일이 있으면

			// board테이블에 첨부파일이 저장되어 있으면
			if (filename != null) {

				// board테이블의 첨부파일 삭제
				File oriFile = new File(saveDirectory, filename);
				oriFile.delete();
			}

			dto.setNotice_upload(multi.getFilesystemName("notice_upload"));

		} else { // 수정 첨부파일이 없으면

			if (filename != null) {
				dto.setNotice_upload(filename);
			}

		}

		dto.setNotice_id(Integer.parseInt(multi.getParameter("notice_id")));
		dto.setNotice_subject(multi.getParameter("notice_subject"));
		dto.setNotice_content(multi.getParameter("notice_content"));

		dao.editMethod(dto);

		return multi;

	}// end execute()

}// end class
