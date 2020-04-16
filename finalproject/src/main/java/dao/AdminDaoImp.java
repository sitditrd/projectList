package dao;

import org.mybatis.spring.SqlSessionTemplate;

import dto.AdminDTO;

public class AdminDaoImp implements AdminDAO{
	private SqlSessionTemplate sqlSession;
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public AdminDaoImp() {
		
	}

	@Override
	public int adminCheck(AdminDTO dto) {
		return sqlSession.selectOne("admin.search", dto);
	}
}
