package service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import dao.NoticeDAO;
import dto.NoticeDTO;
import dto.PageDTO;

public class NoticeServiceImp implements NoticeService {
	private NoticeDAO noticedao;

	public NoticeServiceImp() {

	}

	public void setNoticedao(NoticeDAO noticedao) {
		this.noticedao = noticedao;
	}

	@Override
	public List<NoticeDTO> listProcess(PageDTO pv) {
		return noticedao.listMethod(pv);
	}

	@Override
	public int countProcess() {
		return noticedao.count();
	}

	@Override
	public NoticeDTO contentProcess(int num) {
		return noticedao.content(num);
	}

	@Override
	public void DeleteProcess(int num, HttpServletRequest request) {
		
		String upload = noticedao.getFile(num);
		
		if(upload != null) { //첨부파일이 비어있지 않을 때
			String root = request.getSession().getServletContext().getRealPath("/");
			String saveDirectory =  root + "temp" + File.separator;
			File fe = new File(saveDirectory, upload);
			fe.delete();
		}
		
		noticedao.deleteMethod(num); //파일삭제
	}

	@Override
	public void insertProcess(NoticeDTO dto) {
		noticedao.insertMethod(dto);
	}

	@Override
	public void updateProcess(NoticeDTO dto, HttpServletRequest request) {
		// 기존 첨부파일
		String filename = noticedao.getFile(dto.getNotice_id());
		String root = request.getSession().getServletContext().getRealPath("/");
		String saveDirectory = root + "temp" + File.separator;

		// 수정할 첨부파일
		MultipartFile file = dto.getFilename();

		// 수정할 첨부파일이 있으면
		if (!file.isEmpty()) {
			// 중복파일명을 처리하기 위해 난수 발생
			UUID random = UUID.randomUUID();

			// 기존 첨부파일이 있으면.....삭제하라는 의미이다.
			if (filename != null) {
				File fe = new File(saveDirectory, filename);
				fe.delete();
			}

			// 수정할 첨부파일을 random과 연결지어준 fileName을 dto.Upload Column에 저장해라.
			String fileName = file.getOriginalFilename();
			dto.setNotice_upload(random + "_" + fileName);
			File ff = new File(saveDirectory, random + "_" + fileName);

			try {
				FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(ff));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		noticedao.update(dto);
	}

	@Override
	public NoticeDTO updateSelectProcess(int num) {
		return noticedao.content(num);
	}

}
