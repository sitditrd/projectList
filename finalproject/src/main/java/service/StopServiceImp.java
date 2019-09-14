package service;

import dao.StopDAO;
import dto.StopoverDTO;

public class StopServiceImp implements StopService{
	private StopDAO stopdao;
	
	public void setStopdao(StopDAO stopdao) {
		this.stopdao = stopdao;
	}
	
	public StopServiceImp() {
		
	}

	@Override
	public StopoverDTO searchObjMethodProcess(int num) {
		return stopdao.searchObjMethod(num);
	}
}
