package service;

import dao.AdminDAO;
import dto.AdminDTO;

public class AdminServiceImp implements AdminService{
	private AdminDAO Admindao;
	
	public void setAdmindao(AdminDAO admindao) {
		Admindao = admindao;
	}
	
	public AdminServiceImp() {
		
	}

	@Override
	public int adminCheckProcess(AdminDTO dto) {
		return Admindao.adminCheck(dto);
	}
}
