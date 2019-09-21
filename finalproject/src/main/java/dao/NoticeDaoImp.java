package dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

import dto.NoticeDTO;
import dto.PageDTO;

public class NoticeDaoImp implements NoticeDAO{
	private SqlSessionTemplate sqlSession;
	
	public NoticeDaoImp() {
		
	}
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public List<NoticeDTO> listMethod(PageDTO pv) {
		return sqlSession.selectList("notice.list", pv);
	}

	@Override
	public int count() {
		return sqlSession.selectOne("notice.count");
	}

	@Override
	public NoticeDTO content(int num) {
		return sqlSession.selectOne("notice.content", num);
	}

	@Override
	public void deleteMethod(int num) {
		sqlSession.delete("notice.delete", num);
	}

	@Override
	//올렸던 첨부파일을 다운로드 할때 첨부파일명을 넘겨준다.
	public String getFile(int num) {
		return sqlSession.selectOne("notice.uploadFile", num);
	}

	@Override
	public void insertMethod(NoticeDTO dto) {
		sqlSession.insert("notice.insert", dto);
	}

	@Override
	public void update(NoticeDTO dto) {
		sqlSession.update("notice.update", dto);
	}

}
