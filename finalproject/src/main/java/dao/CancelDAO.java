package dao;

import java.util.HashMap;

public interface CancelDAO {
	public void InsertCancelMethod(HashMap<String, Object> map);
	public String ExtractCancelWhyMethod(int reserve_code);
}
