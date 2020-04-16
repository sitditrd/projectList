package dto;

import java.sql.Date;

import org.springframework.web.multipart.MultipartFile;

/*
 * form -> DTO MultiPartFile 저장
 * DTO -> board table에 저장할 때 String으로 저장
 * 
 */

public class NoticeDTO {
	private int notice_id;
	private String notice_subject, notice_content, notice_upload;
	private Date notice_date;

	// form 페이지에서 파일첨부를 받아 처리해주는 멤버변수
	private MultipartFile filename;
	
	public NoticeDTO() {
	}

	public int getNotice_id() {
		return notice_id;
	}

	public void setNotice_id(int notice_id) {
		this.notice_id = notice_id;
	}

	public String getNotice_subject() {
		return notice_subject;
	}

	public void setNotice_subject(String notice_subject) {
		this.notice_subject = notice_subject;
	}

	public String getNotice_content() {
		return notice_content;
	}

	public void setNotice_content(String notice_content) {
		this.notice_content = notice_content;
	}

	public String getNotice_upload() {
		return notice_upload;
	}

	public void setNotice_upload(String notice_upload) {
		this.notice_upload = notice_upload;
	}

	public Date getNotice_date() {
		return notice_date;
	}

	public void setNotice_date(Date notice_date) {
		this.notice_date = notice_date;
	}
	
	public MultipartFile getFilename() {
		return filename;
	}

	public void setFilename(MultipartFile filename) {
		this.filename = filename;
	}
	
}// end class
