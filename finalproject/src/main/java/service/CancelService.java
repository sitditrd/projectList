package service;

import java.util.HashMap;

public interface CancelService {
	public void InsertCancelMethodProcess(HashMap<String, Object> map);
	public String ExtractCancelWhyMethodProcess(int reserve_code);
}
