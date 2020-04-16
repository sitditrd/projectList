package service;

import dto.PlaneDTO;

public interface PlaneService {
	public PlaneDTO searchMethodProcess(int plane_code);
	public String find_airline_name_Process(String flight_name);
}
