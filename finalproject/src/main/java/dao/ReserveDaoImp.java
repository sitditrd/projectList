package dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

import dto.ReserveDTO;
import dto.ReserveDetail2DTO;
import dto.ReserveDetailDTO;
import dto.ReservePageDTO;

public class ReserveDaoImp implements ReserveDAO{
	
	private SqlSessionTemplate sqlSession;
	
	public ReserveDaoImp() {
	}
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<ReserveDTO> resListMethod(ReservePageDTO pv) {
		return sqlSession.selectList("reservation.list", pv);
	}

	@Override
	public List<ReserveDetail2DTO> resDetail2Method(int reserve_code) {
		return sqlSession.selectList("reservation.detail2", reserve_code);
	}
	
	@Override
	public List<ReserveDetailDTO> resDetailMethod(int reserve_code) {
		return sqlSession.selectList("reservation.detail", reserve_code);
	}

	@Override
	public int count(HashMap<String, Object> map) {
		return sqlSession.selectOne("reservation.count", map);
	}

	@Override
	public void resReserveInsertMethod(ReserveDTO dto) {
		sqlSession.insert("reservation.insert_reserve", dto);
	}

	@Override
	public int ExtractReserveCodeMethod() {
		return sqlSession.selectOne("reservation.extract_reserve_code");
	}

	@Override
	public void resReserveDetailInsertMethod(ReserveDetailDTO dto) {
		sqlSession.insert("reservation.insert_reserve_detail", dto);
	}

	@Override
	public void resReserveDetail2InsertMethod(ReserveDetail2DTO dto) {
		sqlSession.insert("reservation.insert_reserve_detail2", dto);
	}

	@Override
	public ReserveDTO resMethod(int reserve_code) {
		return sqlSession.selectOne("reservation.detail3", reserve_code);
	}

	@Override
	public void updateReserveMethod(int reserve_code) {
		sqlSession.update("reservation.update", reserve_code);
	}

	@Override
	public int admincount(HashMap<String, Object> map) {
		return sqlSession.selectOne("reservation.admincount", map);
	}

	@Override
	public List<ReserveDTO> adminresListMethod(ReservePageDTO pv) {
		return sqlSession.selectList("reservation.adminlist", pv);
	}

	@Override
	public String extractMemberIdMethod(int reserve_code) {
		return sqlSession.selectOne("reservation.extract_member_id", reserve_code);
	}

	@Override
	public List<ReserveDTO> adminfullListMehod(String reserve_state) {
		return sqlSession.selectList("reservation.fullList", reserve_state);
	}
}
