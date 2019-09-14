package dao;

import dto.PlaneDTO;

public interface PlaneDAO {
	public PlaneDTO searchMethod(int plane_code);
	public String find_airline_name_Method(String flight_name);
}
