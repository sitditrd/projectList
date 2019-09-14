package dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

import dto.TicketDTO;
import dto.TicketPageDTO;

public class TicketDaoImp implements TicketDAO {
	private SqlSessionTemplate sqlSession;
	
	public TicketDaoImp() {
		
	}
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public int count(HashMap<String, Object> map) {
		return sqlSession.selectOne("ticket.count", map);
	}

	@Override
	public List<TicketDTO> listMethod(TicketPageDTO pv) {
		return sqlSession.selectList("ticket.list", pv);
	}
}
