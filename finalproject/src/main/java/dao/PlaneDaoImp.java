package dao;

import org.mybatis.spring.SqlSessionTemplate;

import dto.PlaneDTO;

public class PlaneDaoImp implements PlaneDAO{
	private SqlSessionTemplate sqlSession;
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public PlaneDaoImp() {

	}

	@Override
	public PlaneDTO searchMethod(int plane_code) {
		return sqlSession.selectOne("plane.search", plane_code);
	}

	@Override
	public String find_airline_name_Method(String flight_name) {
		return sqlSession.selectOne("plane.find_airline_name", flight_name);
	}
	
}
