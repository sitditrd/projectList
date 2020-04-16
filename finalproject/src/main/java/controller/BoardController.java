package controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
	프로그램 오류 종류
	404에러 : 클라이언트 문제
	500에러 : 서버문제
*/

/*
	반환형이 String인 이유 :  ModelAndView에 담아서 보내는게 없기 때문에 String으로 쓴다.
	반환형이 ModelAndView인 이유 : 보여주는 View페이지에 객체를 전달해서 보내주어야 할 때 쓴다.
*/

//http://localhost:8090/myfinalproject/board.do

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import dto.BoardDTO;
import dto.BoardPageDTO;
import service.BoardService;

//http://localhost/myfinalproject/boardlist.do
@Controller
public class BoardController {
	static int totalPages;
	static int current;
	private BoardService service;
	private int currentPage;
	private BoardPageDTO pdto;

	public BoardController() {

	}

	public void setService(BoardService service) {
		this.service = service;
	}

	@RequestMapping("/boardlist.do")
	public ModelAndView listMethod(BoardPageDTO pv, HttpServletRequest req, HttpServletResponse resp) {
		ModelAndView mav = new ModelAndView();
		//현재 테이블에 저장되어 있는 레코드 수 -> 레코드 수를 기준으로 페이지 블록 처리를 하기 위해서
		
		if(pv.getSearchKey() == null) {
			pv.setSearchKey("all");
		}
	
		int totalRecord=service.countProcess(pv);

		if(totalRecord >= 1) {
			if(pv.getCurrentPage() == 0) { //Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
				current = 1;
			} else { //그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}
			
			pdto = new BoardPageDTO(currentPage, totalRecord, pv.getSearchKey());
			mav.addObject("pv", pdto);
			mav.addObject("aList", service.listProcess(pdto));
		} 
		
		mav.setViewName("board/boardlist");
		return mav;
	}

	@RequestMapping("/boardview.do")
	public ModelAndView viewMethod(int currentPage, int num, BoardPageDTO pv) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("pv", pdto);
		mav.addObject("dto", service.contentProcess(num));
		mav.addObject("currentPage", currentPage);
		mav.setViewName("board/boardview");
		return mav;
	}
	
	//글쓰기일 때(그냥 글쓰기일 경우  / 제목글에 대한 답변글을 쓸 경우)
	@RequestMapping(value="/boardwrite.do", method=RequestMethod.GET)
	public ModelAndView writeMethod(BoardPageDTO pv, BoardDTO dto) { 
		ModelAndView mav = new ModelAndView();
		
		if(dto.getRef() != 0) { //제목글에 대한 답변글일 경우
			mav.addObject("currentPage", pv.getCurrentPage());
			mav.addObject("dto", dto);
		}
		
		mav.setViewName("board/boardwrite");
		return mav;
	}
	
	//글쓰기에서 저장을 클릭했을 때
	@RequestMapping(value="/boardwrite.do", method=RequestMethod.POST)
	public ModelAndView writeMethod(BoardDTO dto, HttpServletRequest request, BoardPageDTO pv) { 
		
		ModelAndView mav = new ModelAndView();
		
		if(dto.getRef() != 0) {
			mav.addObject("currentPage", pv.getCurrentPage());
		}
		
		MultipartFile file = dto.getFilename(); //BoardDTO에 있는  upload에다가 첨부파일명을 저장시키기 위해서 MultipartFile선언.
		
		if(!file.isEmpty()) {
			String fileName = file.getOriginalFilename(); //선택된 첨부파일을 가지고 올 때 db table에 저장하기 위해.
			
			//중복파일명을 처리하기 위해 난수 발생
			UUID random = UUID.randomUUID();
			
			String root = request.getSession().getServletContext().getRealPath("/");
			//root(데이터가 실제로 저장되는 서버경로) : C:\job\workspace_spring\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\spring_07_board\
			System.out.println(root);
			
			//root + "temp/"
			//File.separator는 리눅스면 / 윈도우면 \를 추가해주는 구분자
			String saveDirectory = root + "temp" + File.separator;
			
			File fe = new File(saveDirectory);
			
			if(!fe.exists()) //파일이 존재하지 않으면 위 경로대로 directory를 생성하고 
				fe.mkdir(); 
			
			File ff = new File(saveDirectory, random + "_" + fileName); //발생된 난수번호 값으로 파일을 저장한다(이름만).
			
			try {
				//파일내용들을 버퍼에 저장 하는단계
				//file.getInputStream="파일의 내용", new FileOutputStream(파일이름에 해당하는 곳에 buffer에 저장되었던 파일 내용을 저장한다.) 
				FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(ff));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			//dto에 있는 upload에 첨부파일을 넣어주면 된다.
			dto.setUpload(random + "_" + fileName); //varchar2에 있는 컬럼에다가 String의 데이터를 넣을 수 있다.
		}
		
		//클라이언트의 ip주소를 넣어준다.
		dto.setIp(request.getRemoteAddr());
		
		//답변글이면
		if(dto.getRef() != 0) {
			service.reStepProcess(dto); //답변글일 때 reStep값을 증가시킨다.
		} else { //제목글이면
			service.insertProcess(dto);
		}
		
		mav.setViewName("redirect:/boardlist.do");
		
		return mav;
	}
	
	@RequestMapping(value="/boardcontentdownload.do")
	public ModelAndView downMethod(int num) {
		ModelAndView mav = new ModelAndView();
		
		/*
			mav.addObject("num", num);
			mav.setViewName("download");
			return mav;
			이것을 아래와 같이 처리 가능하다.
		*/
		
		return new ModelAndView("download2", "num", num); //인자값 순서대로 의미하는 것 : 뷰, 모델명, 모델값
	}
	
	@RequestMapping(value="/boardupdate.do", method=RequestMethod.GET) 
	public ModelAndView updateMethod(int num, int currentPage) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("dto", service.updateSelectProcess(num));
		mav.addObject("currentPage", currentPage);
		mav.setViewName("board/boardupdate");
		return mav;
	}
	
	@RequestMapping(value = "/boardupdate.do", method = RequestMethod.POST)
	public ModelAndView updateProc(BoardDTO dto, int currentPage, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		service.updateProcess(dto, request);
		mav.addObject("currentPage", currentPage);
		mav.setViewName("redirect:/boardlist.do");		
		return mav;
	}
	
	@RequestMapping(value="/boarddelete.do") 
	public ModelAndView deleteMethod(int num, int currentPage, HttpServletRequest request, BoardPageDTO pv2) {
		
		//searchKey값이 없을 때는 전체레코드를 뽑아와야 하기 때문에
		if(pv2.getSearchKey() == null) {
			pv2.setSearchKey("all");
		}
		
		ModelAndView mav = new ModelAndView();
		
		int total=0, ref=0, re_level=0;
		int totalRecord = service.countProcess(pv2);
		pdto = new BoardPageDTO(currentPage, totalRecord, pv2.getSearchKey());
		
		List<BoardDTO> alist = service.listProcess(pdto);
		BoardDTO dto = null;
		
		BoardPageDTO pv = new BoardPageDTO(currentPage, service.countProcess(pv2), pv2.getSearchKey());
		
		//searchKey값이 없을 때는 전체레코드를 뽑아와야 하기 때문에
		if(pv.getSearchKey() == null) {
			pv.setSearchKey("all");
		}
		
		//service.deleteProcess(num, request); //제목글만 삭제
		
		dto = service.contentProcess(num);
		
		if(dto.getRe_step() == 0 && dto.getRe_level() == 0) { //num에 해당하는 레코드가 제목글이라면 해당 제목글 및 답변글 모두 삭제
			service.getfileList(num, request);
		} else {
			for(int i=0; i<alist.size(); i++) {
				if(alist.get(i).getNum() == num) {
					dto = service.contentProcess(alist.get(i).getNum());
					if(dto.getRe_step() > 0) { //num에 해당하는 레코드가 답변글이라면 해당 답변글만 삭제하고 아래의 과정을 수행(답변에 대한 답변글도 지우기 위해서)
						service.deleterefProcess(num, request);
						ref = dto.getRef();
						re_level = dto.getRe_level();
					}
				}
			}
		}
		
		total = service.countProcess(pv2); //삭제한 후 다시 totalcount를 계산해야 한다. 
		pdto = new BoardPageDTO(current, total); //current는 currentPage가 1인 것을 의미하며 total은 삭제된후의 totalRecord를 의미하고
											//두 인자로 만들어진 BoardPageDTO 객체를 다시 생성. 페이징 기법을 다시 한 list가 필요하기 때문
		List<BoardDTO> alist2 = service.totalProcess(pdto);
		
		//re_level에서 >=가 아닌 >인 이유 :
		/*	num ref re_step re_level
		 *  1 	 1 	  0 	  0 (첫번째 제목글)
		 *  2 	 1 	  4 	  1 (첫번째 제목에 대한 첫번째 답글)
		 *  3 	 1 	  1 	  1 (첫번재 제목에 대한 두번째 답글)
		 *  4 	 1 	  2 	  2 (두번째 답글에 대한 첫번째 답글)
		 *  5 	 1 	  3 	  3 (두번째 답글에 대한 두번째 답글)
		 *  
		 *  re_level 부등호가 >= 인경우 두번째답글을 지웠을 때 두번째 답글에 대한 하위 답글만 지워져야 하나 첫번째 답글도 지워지기 때문에 
		 *  re_level 부등호가 >여야 한다.
		 */
		
		for(int i=0; i<total; i++) {
			try { //답변글의 답변글이 있는지 확인하고 모두 지운다.
				if(alist2.get(i).getRef() == ref && alist2.get(i).getRe_level() > re_level) {
					service.deleterefProcess(alist2.get(i).getNum(), request);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		pdto = new BoardPageDTO(currentPage, totalRecord, pv.getSearchKey());
		alist = service.listProcess(pdto);
		
		//여기서 그냥 매개변수로 받은 currentPage를 넘기면 레코드 한개가 들어있는 페이지를 삭제하고 넘어가려고 할때, 
		//빈레코드가 들어있는 currentPage가 뜨기 때문에 다시 pv.getTotalPage()-1를 구하여 mav에 추가하여 준다.
		//즉, 현재페이지의 레코드갯수가 0개이라면 마지막페이지-1한 페이지로 이동한다는 의미이다.
		if(alist.size() == 0) {
			mav.addObject("currentPage", pv.getTotalPage()-1);
		} else {
			mav.addObject("currentPage", currentPage);
		}
		
		mav.setViewName("redirect:/boardlist.do");
		
		return mav;
	}
}//end class