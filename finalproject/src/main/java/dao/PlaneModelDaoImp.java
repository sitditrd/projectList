package dao;

import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;

public class PlaneModelDaoImp implements PlaneModelDAO{
	private SqlSessionTemplate sqlSession;
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public PlaneModelDaoImp() {
		
	}

	@Override
	public int find_Seat_Method(HashMap<String, Object> map) {
		return sqlSession.selectOne("planemodel.find_seat", map);
	}

	@Override
	public void update_seatcount_Method(HashMap<String, Object> map) {
		sqlSession.update("planemodel.seat_count", map);
	}
}
