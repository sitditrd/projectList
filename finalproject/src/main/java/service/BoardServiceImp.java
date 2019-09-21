package service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import dao.BoardDAO;
import dto.BoardDTO;
import dto.BoardPageDTO;

public class BoardServiceImp implements BoardService {
	private BoardDAO boarddao;

	public BoardServiceImp() {

	}

	public void setBoarddao(BoardDAO boarddao) {
		this.boarddao = boarddao;
	}

	@Override
	public int countProcess(BoardPageDTO pv) {
		return boarddao.count(pv);
	}

	
	@Override
	public BoardDTO contentProcess(int num) {
		boarddao.readCount(num);
		return boarddao.content(num);
	}

	@Override
	public List<BoardDTO> listProcess(BoardPageDTO pv) {
		return boarddao.list(pv);
	}
	
	@Override
	public void insertProcess(BoardDTO dto) {
		//제목글일 때 처리하는 것
		boarddao.save(dto);
	}
	
	@Override
	//답변글일 때 처리하는 것
	public void reStepProcess(BoardDTO dto) {
		boarddao.reStepCount(dto);
		dto.setRe_step(dto.getRe_step() + 1);
		dto.setRe_level(dto.getRe_level() + 1);
		boarddao.save(dto);
	}

	@Override
	public BoardDTO updateSelectProcess(int num) {
		return boarddao.updateNum(num);
	}

	@Override
	public void updateProcess(BoardDTO dto, HttpServletRequest request) {
		//기존 첨부파일
		String filename = boarddao.getFile(dto.getNum());
		String root = request.getSession().getServletContext().getRealPath("/");
		String saveDirectory = root + "temp" + File.separator;
		
		//수정할 첨부파일
		MultipartFile file = dto.getFilename();
		
		//수정할 첨부파일이 있으면
		if(!file.isEmpty()) {
			//중복파일명을 처리하기 위해 난수 발생
			UUID random = UUID.randomUUID();
			
			//기존 첨부파일이 있으면.....삭제하라는 의미이다.
			if(filename != null) {
				File fe = new File(saveDirectory, filename);
				fe.delete();
			}
			
			//수정할 첨부파일을 random과 연결지어준 fileName을 dto.Upload Column에 저장해라.
			String fileName = file.getOriginalFilename();
			dto.setUpload(random + "_" + fileName);
			File ff = new File(saveDirectory, random + "_" + fileName);
			
			try {
				FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(ff));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		//ip주소를 받아와 dto.setIp Column에 저장해라.
		dto.setIp(request.getRemoteAddr());
		boarddao.update(dto);
	}

	@Override
	public void deleteProcess(int num, HttpServletRequest request) {
		String upload = boarddao.getFile(num);
		
		if(upload != null) { //첨부파일이 비어있지 않을 때
			String root = request.getSession().getServletContext().getRealPath("/");
			String saveDirectory =  root + "temp" + File.separator;
			File fe = new File(saveDirectory, upload);
			fe.delete();
		}
		
		boarddao.delete(num); //파일삭제
	}

	@Override
	public void getfileList(int num, HttpServletRequest request) {
		List<String> aList = boarddao.getfileList(num);
		
		for(int i=0; i<aList.size(); i++) {
			if(aList.get(i) != null) {
				String root = request.getSession().getServletContext().getRealPath("/");
				String saveDirectory =  root + "temp" + File.separator;
				File fe = new File(saveDirectory, aList.get(i));
				fe.delete();
			}
		}
		
		boarddao.delete(num);
	}

	@Override
	public void deleterefProcess(int num, HttpServletRequest request) {
		String upload = boarddao.getFile(num);
		
		if(upload != null) { //첨부파일이 비어있지 않을 때
			String root = request.getSession().getServletContext().getRealPath("/");
			String saveDirectory =  root + "temp" + File.separator;
			File fe = new File(saveDirectory, upload);
			fe.delete();
		}
		
		boarddao.deleteref(num); //파일삭제
	}

	@Override
	public List<BoardDTO> totalProcess(BoardPageDTO pv) {
		return boarddao.total(pv);
	}

}//end class
