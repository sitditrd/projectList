package service;

import java.util.HashMap;
import java.util.List;

import dto.ReserveDTO;
import dto.ReserveDetail2DTO;
import dto.ReserveDetailDTO;
import dto.ReservePageDTO;

public interface ReserveService {
	public int countProcess(HashMap<String, Object> map); 
	public int admincountProcess(HashMap<String, Object> map);
	
	public List<ReserveDTO> listMethodProcess(ReservePageDTO pv);
	public List<ReserveDTO> adminlistMethodProcess(ReservePageDTO pv);
	public List<ReserveDTO> adminfullListMethodProcess(String reserve_state);
	
	public String extractMemberIdMethodProcess(int reserve_code);
	
	public List<ReserveDetailDTO> detailMethodProcess(int reserve_code);
	public List<ReserveDetail2DTO> detailMethod2Process(int reserve_code);
	public ReserveDTO resMethodProcess(int reserve_code);
	public int ExtractReserveCodeMethodProcess();
	public void ReserveInsertMethodProcess(ReserveDTO dto);
	public void ReserveInsertDetailMethodProcess(ReserveDetailDTO dto);
	public void ReserveInsertDetail2MethodProcess(ReserveDetail2DTO dto);
	public void ReserveUpdateMethodProcess(int reserve_code);
}
