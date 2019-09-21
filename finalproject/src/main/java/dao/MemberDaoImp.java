package dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

import dto.MemberDTO;
import dto.ReservePageDTO;

public class MemberDaoImp implements MemberDAO{
	private SqlSessionTemplate sqlSession;

	public MemberDaoImp() {

	}
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public void inserMethod(MemberDTO dto) {
		sqlSession.insert("member.register", dto);
	}

	@Override
	public int memChkMethod(MemberDTO dto) {
		return sqlSession.selectOne("member.memchk", dto);
	}

	@Override
	public int searchMethod(String user_id) {
		return sqlSession.selectOne("member.search", user_id);
	}

	@Override
	public MemberDTO searchIdMethod(MemberDTO dto) {
		return sqlSession.selectOne("member.searchid", dto);
	}

	@Override
	public MemberDTO searchPwdMethod(MemberDTO dto) {
		return sqlSession.selectOne("member.searchpwd", dto);
	}
	
	@Override
	public MemberDTO searchContent(String user_id) {
		return sqlSession.selectOne("member.searchcontent", user_id);
	}

	@Override
	public void deleteMethod(String user_id) {
		sqlSession.delete("member.delete", user_id);
	}

	@Override
	public void updateMethod(MemberDTO dto) {
		sqlSession.update("member.update", dto);
	}

	@Override
	public void reserveDeleteMethod(String member_id) {
		sqlSession.delete("member.reserve_delete", member_id);
	}

	@Override
	public List<MemberDTO> memListMethod() {
		return sqlSession.selectList("member.memlist");
	}

	@Override
	public int count() {
		return sqlSession.selectOne("member.count");
	}

	@Override
	public List<MemberDTO> pagememListMethod(ReservePageDTO pv) {
		return sqlSession.selectList("member.list", pv);
	}

	@Override
	public MemberDTO extractInfoMethod(int member_code) {
		return sqlSession.selectOne("member.extract_info", member_code);
	}
}
