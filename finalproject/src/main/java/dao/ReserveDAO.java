package dao;

import java.util.HashMap;
import java.util.List;

import dto.ReserveDTO;
import dto.ReserveDetail2DTO;
import dto.ReserveDetailDTO;
import dto.ReservePageDTO;

public interface ReserveDAO {
	public int count(HashMap<String, Object> map);
	public List<ReserveDTO> resListMethod(ReservePageDTO pv);
	
	public int admincount(HashMap<String, Object> map);
	public List<ReserveDTO> adminresListMethod(ReservePageDTO pv);
	public List<ReserveDTO> adminfullListMehod(String reserve_state);
	
	public String extractMemberIdMethod(int reserve_code);
	
	public List<ReserveDetailDTO> resDetailMethod(int reserve_code);
	public List<ReserveDetail2DTO> resDetail2Method(int reserve_code);
	public ReserveDTO resMethod(int reserve_code);
	
	public int ExtractReserveCodeMethod();
	public void resReserveInsertMethod(ReserveDTO dto);
	public void resReserveDetailInsertMethod(ReserveDetailDTO dto);
	public void resReserveDetail2InsertMethod(ReserveDetail2DTO dto);
	
	public void updateReserveMethod(int reserve_code);
	
}
