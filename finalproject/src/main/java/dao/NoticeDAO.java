package dao;

import java.util.List;

import dto.NoticeDTO;
import dto.PageDTO;

public interface NoticeDAO {
	public int count();
	public List<NoticeDTO> listMethod(PageDTO pv);
	public NoticeDTO content(int num);
	public void deleteMethod(int num);
	public String getFile(int num);
	public void insertMethod(NoticeDTO dto);
	public void update(NoticeDTO dto);
}
