package service;

import java.util.HashMap;
import java.util.List;

import dao.TicketDAO;
import dto.TicketDTO;
import dto.TicketPageDTO;

public class TicketServiceImp implements TicketService {
	private TicketDAO ticketdao;
	
	public void setTicketdao(TicketDAO ticketdao) {
		this.ticketdao = ticketdao;
	}
	
	public TicketServiceImp() {
	}
	
	@Override
	public int countProcess(HashMap<String, Object> map) {
		return ticketdao.count(map);
	}

	@Override
	public List<TicketDTO> listProcess(TicketPageDTO pv) {
		return ticketdao.listMethod(pv);
	}
}
