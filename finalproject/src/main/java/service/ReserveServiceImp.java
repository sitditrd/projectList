package service;

import java.util.HashMap;
import java.util.List;

import dao.ReserveDAO;
import dto.ReserveDTO;
import dto.ReserveDetail2DTO;
import dto.ReserveDetailDTO;
import dto.ReservePageDTO;

public class ReserveServiceImp implements ReserveService{
	private ReserveDAO reservedao;
	
	public ReserveServiceImp() {
	}
	
	public void setReservedao(ReserveDAO reservedao) {
		this.reservedao = reservedao;
	}
	
	@Override
	public List<ReserveDTO> listMethodProcess(ReservePageDTO pv) {
		return reservedao.resListMethod(pv);
	}

	@Override
	public List<ReserveDetailDTO> detailMethodProcess(int reserve_code) {
		return reservedao.resDetailMethod(reserve_code);
	}

	@Override
	public int countProcess(HashMap<String, Object> map) {
		return reservedao.count(map);
	}

	@Override
	public void ReserveInsertMethodProcess(ReserveDTO dto) {
		reservedao.resReserveInsertMethod(dto);
	}

	@Override
	public int ExtractReserveCodeMethodProcess() {
		return reservedao.ExtractReserveCodeMethod();
	}

	@Override
	public void ReserveInsertDetailMethodProcess(ReserveDetailDTO dto) {
		reservedao.resReserveDetailInsertMethod(dto);
	}

	@Override
	public void ReserveInsertDetail2MethodProcess(ReserveDetail2DTO dto) {
		reservedao.resReserveDetail2InsertMethod(dto);
	}

	@Override
	public List<ReserveDetail2DTO> detailMethod2Process(int reserve_code) {
		return reservedao.resDetail2Method(reserve_code);
	}

	@Override
	public ReserveDTO resMethodProcess(int reserve_code) {
		return reservedao.resMethod(reserve_code);
	}

	@Override
	public void ReserveUpdateMethodProcess(int reserve_code) {
		reservedao.updateReserveMethod(reserve_code);
	}

	@Override
	public int admincountProcess(HashMap<String, Object> map) {
		return reservedao.admincount(map);
	}

	@Override
	public List<ReserveDTO> adminlistMethodProcess(ReservePageDTO pv) {
		return reservedao.adminresListMethod(pv);
	}

	@Override
	public String extractMemberIdMethodProcess(int reserve_code) {
		return reservedao.extractMemberIdMethod(reserve_code);
	}

	@Override
	public List<ReserveDTO> adminfullListMethodProcess(String reserve_state) {
		return reservedao.adminfullListMehod(reserve_state);
	}
}
