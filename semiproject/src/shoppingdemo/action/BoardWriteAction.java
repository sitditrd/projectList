package shoppingdemo.action;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import shoppingdemo.dao.BoardDAO;
import shoppingdemo.dto.BoardDTO;

public class BoardWriteAction {

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

		BoardDTO dto = new BoardDTO();

		BoardDAO dao = BoardDAO.getInstance();

		dto.setMember_code(Integer.parseInt(multi.getParameter("member_code")));

		if (multi.getParameter("class_code") == null)
			dto.setClass_code(Integer.parseInt(multi.getParameter("optionIndex"))); // 제목
		else
			dto.setClass_code(Integer.parseInt(multi.getParameter("class_code"))); // 제목
			
		dto.setPost_content(multi.getParameter("post_content"));// 내용
		dto.setPost_upload(multi.getFilesystemName("post_upload")); // 첨부파일
		
		// 답글일때
		if (multi.getParameter("re_level") != null) {
			
			HashMap<String, Integer> map = new HashMap<String, Integer>();

			map.put("ref", Integer.parseInt(multi.getParameter("ref")));
			map.put("re_step", Integer.parseInt(multi.getParameter("re_step")));

			dao.reStepMethod(map);

			dto.setRef(Integer.parseInt(multi.getParameter("ref")));
			dto.setRe_step(Integer.parseInt(multi.getParameter("re_step")) + 1);
			dto.setRe_level(Integer.parseInt(multi.getParameter("re_level")) + 1);

		}

		dao.insertMethod(dto);

	}// end execute()

}// end class
