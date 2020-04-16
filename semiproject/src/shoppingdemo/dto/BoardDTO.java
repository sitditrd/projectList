package shoppingdemo.dto;

import java.util.Date;

public class BoardDTO {

	private int post_id, post_views, ref, re_step, re_level, member_code, class_code;
	private String class_name, post_content, member_id, post_upload;
	private Date post_date;

	public BoardDTO() {

	}

	public int getPost_id() {
		return post_id;
	}

	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}

	public int getPost_views() {
		return post_views;
	}

	public void setPost_views(int post_views) {
		this.post_views = post_views;
	}

	public int getRef() {
		return ref;
	}

	public void setRef(int ref) {
		this.ref = ref;
	}

	public int getRe_step() {
		return re_step;
	}

	public void setRe_step(int re_step) {
		this.re_step = re_step;
	}

	public int getRe_level() {
		return re_level;
	}

	public void setRe_level(int re_level) {
		this.re_level = re_level;
	}

	public int getMember_code() {
		return member_code;
	}

	public void setMember_code(int member_code) {
		this.member_code = member_code;
	}

	public int getClass_code() {
		return class_code;
	}

	public void setClass_code(int class_code) {
		this.class_code = class_code;
	}

	public String getClass_name() {
		return class_name;
	}

	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}

	public String getPost_content() {
		return post_content;
	}

	public void setPost_content(String post_content) {
		this.post_content = post_content;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getPost_upload() {
		return post_upload;
	}

	public void setPost_upload(String post_upload) {
		this.post_upload = post_upload;
	}

	public Date getPost_date() {
		return post_date;
	}

	public void setPost_date(Date post_date) {
		this.post_date = post_date;
	}
	
}// end class
