package service;

import java.util.HashMap;
import java.util.List;

import dto.TicketDTO;
import dto.TicketPageDTO;

public interface TicketService {
	public int countProcess(HashMap<String, Object> map);
	public List<TicketDTO> listProcess(TicketPageDTO pv);
	public List<TicketDTO> aListProcess();
	public void listInit(HashMap<String, Object> map);
}
