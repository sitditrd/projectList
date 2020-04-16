package service;

import java.util.List;

import dto.MemberDTO;
import dto.ReservePageDTO;

public interface MemberService {
	public void insProcess(MemberDTO dto);
	public int memCheckProcess(MemberDTO dto);
	public int searchProcess(String user_id);
	public MemberDTO searchidProcess(MemberDTO dto);
	public MemberDTO searchPwdProcess(MemberDTO dto);
	public MemberDTO searchContentProcess(String user_id);
	public void deleteProcess(String user_id);
	public void updateProcess(MemberDTO dto);
	public void reserveDeleteMethodProcess(String member_id);
	public List<MemberDTO> memListMethodProcess();
	public int countProcess();
	public List<MemberDTO> pagememListMethodProcess(ReservePageDTO pv);
	public MemberDTO extractIdMethodProcess(int member_code);
}
