package controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import dto.NoticeDTO;
import dto.PageDTO;
import service.NoticeService;

//http://localhost/myfinalproject/notice.do
@Controller
public class NoticeController {
	static int current;
	private NoticeService service;
	private int currentPage;
	private PageDTO pdto;
	
	public void setService(NoticeService service) {
		this.service = service;
	}
	
	public NoticeController() {
		
	}
	
	@RequestMapping(value="/notice.do")
	public ModelAndView NoticeViewProcess(PageDTO pv) {
		ModelAndView mav = new ModelAndView();
		//현재 테이블에 저장되어 있는 레코드 수 -> 레코드 수를 기준으로 페이지 블록 처리를 하기 위해서
		int totalRecord = service.countProcess();
		
		if(totalRecord >= 1) {
			if(pv.getCurrentPage() == 0) { //Controller를 실행시켜 처음 게시판에 들어왔다는 의미이다.
				currentPage = 1;
				current=1;
			} else { //그 다음부터 만족하는 조건
				currentPage = pv.getCurrentPage();
			}
			
			pdto = new PageDTO(currentPage, totalRecord);
			mav.addObject("pv", pdto);
			mav.addObject("aList", service.listProcess(pdto));
		} 
		
		mav.setViewName("notice/notice");
		return mav;
	}
	
	@RequestMapping(value="/noticedetail.do")
	public ModelAndView NoticeDetailProcess(int num, int currentPage) {
		ModelAndView mav = new ModelAndView();
		
		//noticedetail.jsp에서 dto로 notice columu에 접근할 수 있다.
		mav.addObject("dto", service.contentProcess(num));
		//noticedetail.jsp에서 매개변수로 받은 currentPage값을 mav영역의 currentPage에 담아서 noticedetai.jsp에서 currentPage값을 담은 currentPage변수를 쓸 수 있다. 
		mav.addObject("currentPage", currentPage);
		
		mav.setViewName("notice/noticedetail");
		return mav;
	}
	
	@RequestMapping(value="/noticewriteform.do", method=RequestMethod.GET)
	public String NoticeWriteViewProcess() {
		return "notice/noticewrite";
	}
	
	@RequestMapping(value="/noticewrite.do", method=RequestMethod.POST) 
	public ModelAndView NoticeWriteActionProcess(NoticeDTO dto, PageDTO pv, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		
		MultipartFile file = dto.getFilename(); //NoticeDTO에 있는  notice_upload에다가 첨부파일명을 저장시키기 위해서 MultipartFile선언.
		
		if(!file.isEmpty()) {
			String fileName = file.getOriginalFilename(); //선택된 첨부파일을 가지고 올 때 db table에 저장하기 위해.
			
			//중복파일명을 처리하기 위해 난수 발생
			UUID random = UUID.randomUUID();
			
			String root = request.getSession().getServletContext().getRealPath("/");
			//root(데이터가 실제로 저장되는 서버경로) : C:\Users\sitdi\Documents\workspace-sts-3.9.2.RELEASE\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps\finalproject\
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
			dto.setNotice_upload(random + "_" + fileName); //varchar2에 있는 컬럼에다가 String의 데이터를 넣을 수 있다.
			
		}
			service.insertProcess(dto);
			mav.setViewName("redirect:/notice.do");
			return mav;
	}
	
	@RequestMapping(value="/noticeeditform.do", method=RequestMethod.GET)
	public ModelAndView NoticeEditProcess(int num, int currentPage) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("dto", service.contentProcess(num));
		mav.addObject("currentPage", currentPage);
		mav.setViewName("notice/noticeedit");
		return mav;
	}
	
	@RequestMapping(value="/noticeedit.do", method = RequestMethod.POST)
	public ModelAndView NoticeUpdateProcess(NoticeDTO dto, int currentPage, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		service.updateProcess(dto, request);
		mav.addObject("currentPage", currentPage);
		mav.setViewName("redirect:/notice.do");
		return mav;
	}
	
	@RequestMapping(value="/contentdownload.do")
	public ModelAndView downMethod(int num) {
		ModelAndView mav = new ModelAndView();
		/*
			mav.addObject("num", num);
			mav.setViewName("download");
			return mav;
			이것을 아래와 같이 처리 가능하다.
		*/
		return new ModelAndView("download", "num", num); //인자값 순서대로 의미하는 것 : 뷰, 모델명, 모델값
	}
	
	@RequestMapping(value="/noticedelete.do") 
	public ModelAndView NoticeDeleteProcess(int num, int currentPage, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		
		//pv.getTotalPage()을 사용하기 위해서 pv를 선언한다.
		PageDTO pv = new PageDTO(currentPage, service.countProcess());
		
		//notice_id에 해당하는 컬럼을 지운다. 
		service.DeleteProcess(num, request);
		
		int totalRecord = service.countProcess();
		pdto = new PageDTO(currentPage, totalRecord); //list를 구하기 위해서 PageDTO를 다시생성.
		
		List<NoticeDTO> alist = service.listProcess(pdto);
		
		/*
		 * size가 0일 경우 마지막 페이지에서 마지막 컬럼을 지웠을 때 비어있는 마지막 페이지로 가지 않고 전 페이지로 움직이기 위해서  pv.getTotalPage()-1를 해준다.
		 * size가 0이 아닐 경우 currentPage값을 mav의 currentPage영역에 저장한다. 
		 */
		
		if(alist.size() == 0) {
			mav.addObject("currentPage", pv.getTotalPage()-1);
		} else {
			mav.addObject("currentPage", currentPage);
		}
		
		mav.setViewName("redirect:/notice.do");
		return mav;
	}
}
