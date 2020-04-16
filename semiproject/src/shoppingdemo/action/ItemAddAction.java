package shoppingdemo.action;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import shoppingdemo.dao.ItemDAO;
import shoppingdemo.dto.ItemDTO;

public class ItemAddAction {
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {

		MultipartRequest multi = null;

		String saveDirectory = req.getRealPath("/");
		//C:\job\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps 까지의 주소가 req.getRealPath("/")로 받아온다.
		saveDirectory += "shopping/img";

		//String saveDirectory =
		//"C:/job/workspace/semiproject/WebContent/shopping/img";
		//이것을 주석처리한 이유는 자바에서 만든 폴더이기 때문이고 이 경로에 추가하면 서버에서 처리하는 이미지가 참조하는 영역이 아니다.
		
		//서버에서 이미지를 참조하는 영역은
		//req.getRealPath("/"); 로 //C:\job\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps 까지의 주소가 req.getRealPath("/")로 받아온다.
		//이것을 받아오면 된다. 

		File file = new File(saveDirectory);

		if (!file.exists())
			file.mkdir();

		int maxPostSize = 10000000; // 10mb
		String encoding = "UTF-8";

		try {
			multi = new MultipartRequest(req, saveDirectory, maxPostSize, encoding, new DefaultFileRenamePolicy());
		} catch (IOException e) {
			e.printStackTrace();
		}

		String fileName = multi.getParameter("fileName");

		saveDirectory += "/" + multi.getFilesystemName("item_image");

		File fileOld = new File(saveDirectory);

		BufferedImage image = ImageIO.read(fileOld);

		String changeDirectory = req.getRealPath("/");

		changeDirectory += "shopping/img/" + multi.getParameter("categoryName")
				+ "/" + fileName + "." + "GIF";

		File fileNew = new File(changeDirectory);

		ImageIO.write(image, "GIF", fileNew);

		if (fileOld.exists()) {
			fileOld.renameTo(fileNew);
			fileOld.delete();
		}

		ItemDTO dto = new ItemDTO();

		ItemDAO dao = ItemDAO.getInstance();

		dto.setCategory_id(Integer.parseInt(multi.getParameter("optionIndex")));
		dto.setItem_name(multi.getParameter("item_name"));
		dto.setItem_price(Integer.parseInt(multi.getParameter("item_price")));

		dao.insertMethod(dto);

	}// end execute()

}// end class
