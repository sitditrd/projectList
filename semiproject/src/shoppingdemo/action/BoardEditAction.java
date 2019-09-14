package shoppingdemo.action;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import shoppingdemo.dao.BoardDAO;
import shoppingdemo.dto.BoardDTO;

public class BoardEditAction {

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

		BoardDTO dto = new BoardDTO();
		BoardDAO dao = BoardDAO.getInstance();

		int post_id = Integer.parseInt(multi.getParameter("post_id"));

		// board테이블에 첨부파일의 저장여부 검색
		String filename = dao.fileCheck(post_id);

		if (multi.getFilesystemName("post_upload") != null) { // 수정 첨부파일이 있으면

			// board테이블에 첨부파일이 저장되어 있으면
			if (filename != null) {

				// board테이블의 첨부파일 삭제
				File oriFile = new File(saveDirectory, filename);
				oriFile.delete();
			}

			dto.setPost_upload(multi.getFilesystemName("post_upload"));

		} else { // 수정 첨부파일이 없으면

			if (filename != null) {
				dto.setPost_upload(filename);
			}

		}

		dto.setPost_id(Integer.parseInt(multi.getParameter("post_id")));
		dto.setClass_code(Integer.parseInt(multi.getParameter("optionIndex")));
		dto.setPost_content(multi.getParameter("post_content"));

		dao.editMethod(dto);

		return multi;

	}// end execute()

}// end class