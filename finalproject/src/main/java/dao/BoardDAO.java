package dao;

import java.util.List;

import dto.BoardDTO;
import dto.BoardPageDTO;

public interface BoardDAO {
	public int count(BoardPageDTO pv);
	public List<BoardDTO> list(BoardPageDTO pv);
	public List<BoardDTO> total(BoardPageDTO pv);
	public void readCount(int num);
	public BoardDTO content(int num);
	public void reStepCount(BoardDTO dto);
	public void save(BoardDTO dto);
	public BoardDTO updateNum(int num);
	public void update(BoardDTO dto);
	public void delete(int num);
	public String getFile(int num);
	public List<String> getfileList(int num);
	public void deleteref(int num);
}
