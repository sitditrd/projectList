package service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import dto.NoticeDTO;
import dto.PageDTO;

public interface NoticeService {
	public int countProcess();
	public List<NoticeDTO> listProcess(PageDTO pv);
	public NoticeDTO contentProcess(int num);
	public void DeleteProcess(int num, HttpServletRequest request);
	public void insertProcess(NoticeDTO dto);
	public NoticeDTO updateSelectProcess(int num);
	public void updateProcess(NoticeDTO dto,HttpServletRequest request);
}
