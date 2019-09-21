package dao;

import java.util.HashMap;

public interface PlaneModelDAO {
	public int find_Seat_Method(HashMap<String, Object> map);
	public void update_seatcount_Method(HashMap<String, Object> map);
}
