package dao;

import java.util.HashMap;

import org.mybatis.spring.SqlSessionTemplate;

public class CancelDaoImp implements CancelDAO{
	private SqlSessionTemplate sqlSession;
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public CancelDaoImp() {
		
	}

	@Override
	public void InsertCancelMethod(HashMap<String, Object> map) {
		sqlSession.insert("cancel.insert", map);
	}

	@Override
	public String ExtractCancelWhyMethod(int reserve_code) {
		return sqlSession.selectOne("cancel.cancel_why", reserve_code);
	}
}
