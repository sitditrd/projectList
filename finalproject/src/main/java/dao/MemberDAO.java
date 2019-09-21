package dao;

import java.util.HashMap;
import java.util.List;

import dto.MemberDTO;
import dto.ReservePageDTO;

public interface MemberDAO {
	public void inserMethod(MemberDTO dto);
	public int memChkMethod(MemberDTO dto);
	public int searchMethod(String user_id);
	public MemberDTO searchIdMethod(MemberDTO dto);
	public MemberDTO searchPwdMethod(MemberDTO dto);
	public MemberDTO searchContent(String user_id);
	public void deleteMethod(String user_id);
	public void updateMethod(MemberDTO dto);
	public void reserveDeleteMethod(String member_id);
	public List<MemberDTO> memListMethod();
	public int count();
	public List<MemberDTO> pagememListMethod(ReservePageDTO pv);
	public MemberDTO extractInfoMethod(int member_code);
}
