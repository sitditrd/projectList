package dao;

import java.util.HashMap;
import java.util.List;

import dto.TicketDTO;
import dto.TicketPageDTO;

public interface TicketDAO {
	public int count(HashMap<String, Object> map);
	public List<TicketDTO> listMethod(TicketPageDTO pv);
	public List<TicketDTO> aList();
	public void listInit(HashMap<String, Object> map);
}
