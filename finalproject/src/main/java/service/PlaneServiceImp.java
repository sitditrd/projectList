package service;

import dao.PlaneDAO;
import dto.PlaneDTO;

public class PlaneServiceImp implements PlaneService{
	private PlaneDAO planedao;
	
	public void setPlanedao(PlaneDAO planedao) {
		this.planedao = planedao;
	}
	
	public PlaneServiceImp() {
		
	}

	@Override
	public PlaneDTO searchMethodProcess(int plane_code) {
		return planedao.searchMethod(plane_code);
	}

	@Override
	public String find_airline_name_Process(String flight_name) {
		return planedao.find_airline_name_Method(flight_name);
	}
}
