package service;

import java.util.HashMap;

import dao.PlaneModelDAO;

public class PlaneModelServiceImp implements PlaneModelService{
	private PlaneModelDAO planemodeldao;
	
	public void setPlanemodeldao(PlaneModelDAO planemodeldao) {
		this.planemodeldao = planemodeldao;
	}
	
	public PlaneModelServiceImp() {
		
	}

	@Override
	public int find_Seat_Method_Process(HashMap<String, Object> map) {
		return planemodeldao.find_Seat_Method(map);
	}

	@Override
	public void update_seatcount_Method_Process(HashMap<String, Object> map) {
		planemodeldao.update_seatcount_Method(map);
	}
}
