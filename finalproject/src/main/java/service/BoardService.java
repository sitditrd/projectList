package service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import dto.BoardDTO;
import dto.BoardPageDTO;

public interface BoardService {
	public int countProcess(BoardPageDTO pv); 
	public List<BoardDTO> listProcess(BoardPageDTO pv);
	public List<BoardDTO> totalProcess(BoardPageDTO pv);
	public void insertProcess(BoardDTO dto);
	public BoardDTO contentProcess(int num);
	public void reStepProcess(BoardDTO dto);
	public BoardDTO updateSelectProcess(int num);
	public void updateProcess(BoardDTO dto,HttpServletRequest request);
	public void deleteProcess(int num, HttpServletRequest request);
	public void getfileList(int num, HttpServletRequest request);
	public void deleterefProcess(int num, HttpServletRequest request);
	//public void delete
}//end interface
