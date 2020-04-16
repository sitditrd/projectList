package service;

import java.util.HashMap;

import dao.CancelDAO;

public class CancelServiceImp implements CancelService{
	
	public CancelServiceImp() {
		
	}
	
	private CancelDAO canceldao;
	
	public void setCanceldao(CancelDAO canceldao) {
		this.canceldao = canceldao;
	}

	@Override
	public void InsertCancelMethodProcess(HashMap<String, Object> map) {
		canceldao.InsertCancelMethod(map);
	}

	@Override
	public String ExtractCancelWhyMethodProcess(int reserve_code) {
		return canceldao.ExtractCancelWhyMethod(reserve_code);
	}
}
