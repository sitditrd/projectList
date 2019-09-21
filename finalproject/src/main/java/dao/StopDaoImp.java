package dao;

import org.mybatis.spring.SqlSessionTemplate;

import dto.StopoverDTO;

public class StopDaoImp implements StopDAO{
	
	private SqlSessionTemplate sqlSession;
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public StopDaoImp() {
		
	}

	@Override
	public StopoverDTO searchObjMethod(int num) {
		return sqlSession.selectOne("stopover.searchobj", num);
	}

}
