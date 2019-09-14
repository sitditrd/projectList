package service;

import java.util.List;

import dao.MemberDAO;
import dto.MemberDTO;
import dto.ReservePageDTO;;

public class MemberServiceImp implements MemberService{
	private MemberDAO dao;
	
	public MemberServiceImp() {

	}

	public void setDao(MemberDAO dao) {
		this.dao = dao;
	}

	@Override
	public void insProcess(MemberDTO dto) {
		dao.inserMethod(dto);
	}

	@Override
	public int memCheckProcess(MemberDTO dto) {
		return dao.memChkMethod(dto);
	}

	@Override
	public int searchProcess(String user_id) {
		return dao.searchMethod(user_id);
	}

	@Override
	public MemberDTO searchidProcess(MemberDTO dto) {
		return dao.searchIdMethod(dto);
	}

	@Override
	public MemberDTO searchPwdProcess(MemberDTO dto) {
		return dao.searchPwdMethod(dto);
	}
	@Override
	public MemberDTO searchContentProcess(String user_id) {
		return dao.searchContent(user_id);
	}

	@Override
	public void deleteProcess(String user_id) {
		dao.deleteMethod(user_id);
	}

	@Override
	public void updateProcess(MemberDTO dto) {
		dao.updateMethod(dto);
	}

	@Override
	public void reserveDeleteMethodProcess(String member_id) {
		dao.reserveDeleteMethod(member_id);
	}

	@Override
	public List<MemberDTO> memListMethodProcess() {
		return dao.memListMethod();
	}

	@Override
	public int countProcess() {
		return dao.count();
	}

	@Override
	public List<MemberDTO> pagememListMethodProcess(ReservePageDTO pv) {
		return dao.pagememListMethod(pv);
	}

	@Override
	public MemberDTO extractIdMethodProcess(int member_code) {
		return dao.extractInfoMethod(member_code);
	}
	
}
