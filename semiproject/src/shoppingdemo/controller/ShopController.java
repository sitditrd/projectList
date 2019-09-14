package shoppingdemo.controller;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;

import shoppingdemo.action.AdminAction;
import shoppingdemo.action.AdminDeleteAction;
import shoppingdemo.action.AdminListCheckAction;
import shoppingdemo.action.AdminListCheckDetailAction;
import shoppingdemo.action.AdminPriceAction;
import shoppingdemo.action.AdminPriceDetailAction;
import shoppingdemo.action.BasketAction;
import shoppingdemo.action.BasketViewAction;
import shoppingdemo.action.BoardDeleteAction;
import shoppingdemo.action.BoardDetailAction;
import shoppingdemo.action.BoardEditAction;
import shoppingdemo.action.BoardEditFormAction;
import shoppingdemo.action.BoardListAction;
import shoppingdemo.action.BoardSearchAction;
import shoppingdemo.action.BoardWriteAction;
import shoppingdemo.action.BuyAction;
import shoppingdemo.action.DeleteAction;
import shoppingdemo.action.FileDownloadAction;
import shoppingdemo.action.ItemAddAction;
import shoppingdemo.action.ListAction;
import shoppingdemo.action.ListDetailAction;
import shoppingdemo.action.LoginAction;
import shoppingdemo.action.LogoutAction;
import shoppingdemo.action.MemberDeleteAction;
import shoppingdemo.action.ModifyAction;
import shoppingdemo.action.ModifyViewAction;
import shoppingdemo.action.MyWriteAction;
import shoppingdemo.action.NoticeDeleteAction;
import shoppingdemo.action.NoticeDetailAction;
import shoppingdemo.action.NoticeEditAction;
import shoppingdemo.action.NoticeEditFormAction;
import shoppingdemo.action.NoticeListAction;
import shoppingdemo.action.NoticeWriteAction;
import shoppingdemo.action.OnlyBuyAction;
import shoppingdemo.action.OrderAction;
import shoppingdemo.action.OrderDeleteAction;
import shoppingdemo.action.OrderDetailAction;
import shoppingdemo.action.OrderViewAction;
import shoppingdemo.action.RegisterAction;
import shoppingdemo.action.SearchListAction;
import shoppingdemo.action.TotalBuyAction;
import shoppingdemo.action.TotalDeleteAction;
import shoppingdemo.action.TotalOrderAction;

@WebServlet("/shop/*")
public class ShopController extends HttpServlet {

	// 로그인 완료시 회원의 코드번호 저장할 static변수
	public static int member_code;
	@Override
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		process(req, resp);
	}// end doGet()

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		process(req, resp);
	}// end doPost()

	protected void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String uri = req.getRequestURI();
		System.out.println(uri);
		String action = uri.substring(uri.lastIndexOf("/"));
		String path = "";

		if (action.equals("/*") || action.equals("/main.do")) {
			path = "/shopping/main.jsp";

		} else if (action.equals("/admin.do")) {
			path = "/shopping/adminform.jsp";

		} else if (action.equals("/adminLogin.do")) {
			AdminAction admin = new AdminAction();
			admin.execute(req, resp);

		} else if (action.equals("/adminpage.do")) { // 관리자 페이지
			path = "/shopping/adminpage.jsp";

		} else if (action.equals("/adminupload.do")) { // 관리자 상품 등록
			path = "/shopping/adminupload.jsp";

		} else if (action.equals("/itemUpload.do")) { // 관리자 상품 등록
			ItemAddAction itemAdd = new ItemAddAction();
			itemAdd.execute(req, resp);
			path = "/shopping/adminpage.jsp";

		} else if (action.equals("/admindelete.do")) { // 관리자 상품 삭제
			path = "/shopping/admindelete.jsp";

		} else if (action.equals("/admindeleteaction.do")) { // 관리자 상품 삭제
			AdminDeleteAction delete = new AdminDeleteAction();
			delete.execute(req, resp);

		} else if (action.equals("/adminlistcheck.do")) { // 회원목록출력
			AdminListCheckAction check = new AdminListCheckAction();
			check.execute(req, resp);
			path = "/shopping/adminlistcheck.jsp";

		} else if (action.equals("/adminorder.do")) { // User 전체 구매내역 확인
			AdminPriceAction price = new AdminPriceAction();
			price.execute(req, resp);
			path = "/shopping/adminorder.jsp";

		} else if (action.equals("/adminorderdetail.do")) {
			AdminPriceDetailAction price = new AdminPriceDetailAction();
			price.execute(req, resp);
			path = "/shopping/adminorderdetail.jsp";

		} else if (action.equals("/adminlistcheckdetail.do")) {
			AdminListCheckDetailAction check = new AdminListCheckDetailAction();
			check.execute(req, resp);
			path = "/shopping/adminlistcheckdetail.jsp";

		} else if (action.equals("/login.do")) { // 로그인
			path = "/shopping/loginform.jsp";

		} else if (action.equals("/signIn.do")) { // 로그인
			LoginAction login = new LoginAction();
			login.execute(req, resp);

		} else if (action.equals("/logout.do")) { // 로그아웃
			LogoutAction logout = new LogoutAction();
			logout.execute(req, resp);

		} else if (action.equals("/check.do")) { // 아이디중복체크
			path = "/shopping/idcheck.jsp";

		} else if (action.equals("/register.do")) { // 회원가입
			path = "/shopping/registerform.jsp";

		} else if (action.equals("/signUp.do")) { // 회원가입
			RegisterAction register = new RegisterAction();
			register.execute(req, resp);
			path = "/shopping/main.jsp";

		} else if (action.equals("/list.do")) { // 아아템목록 출력
			ListAction list = new ListAction();
			list.execute(req, resp);
			path = "/shopping/list.jsp";

		} else if (action.equals("/listdetail.do")) { // 아이템세부사항
			ListDetailAction detail = new ListDetailAction();
			detail.execute(req, resp);
			path = "/shopping/listdetail.jsp";

		} else if (action.equals("/search.do")) { // 검색
			path = "/shopping/search.jsp";

		} else if (action.equals("/searchList.do")) { // 검색
			SearchListAction searchList = new SearchListAction();
			searchList.execute(req, resp);
			path = "/shopping/search.jsp";

		} else if (action.equals("/basket.do")) { // 장바구니
			BasketAction basket = new BasketAction();
			basket.execute(req, resp);
			path = "/shopping/basket.jsp";

		} else if (action.equals("/basketview.do")) { // 메인페이지에서 바로 Cart를 클릭 할 때
			BasketViewAction basket = new BasketViewAction();
			basket.execute(req, resp);
			path = "/shopping/basket.jsp";

		} else if (action.equals("/delete.do")) { // 단품삭제
			DeleteAction delete = new DeleteAction();
			delete.execute(req, resp);
			resp.sendRedirect("basketview.do");

		} else if (action.equals("/totaldelete.do")) { // 전체삭제
			TotalDeleteAction totaldelete = new TotalDeleteAction();
			totaldelete.execute(req, resp);
			resp.sendRedirect("basketview.do");

		} else if (action.equals("/buy.do")) { // 단품주문
			BuyAction buy = new BuyAction();
			buy.execute(req, resp);
			path = "/shopping/payment.jsp"; // 단품주문시 사용자에게 보여주는 .jsp

		} else if (action.equals("/onlybuy.do")) { // 단품주문
			OnlyBuyAction buy = new OnlyBuyAction();
			buy.execute(req, resp);
			path = "/shopping/payment.jsp"; // 바로단품주문시 사용자에게 보여주는 .jsp

		} else if (action.equals("/totalbuy.do")) { // 전체주문
			TotalBuyAction totalbuy = new TotalBuyAction();
			totalbuy.execute(req, resp);
			path = "/shopping/totalpayment.jsp"; // 전체주문시 사용자에게 보여주는 .jsp

		} else if (action.equals("/order.do")) { // 주문
			OrderAction order = new OrderAction();
			order.execute(req, resp);
			path = "/shopping/order.jsp";

		} else if (action.equals("/orderdetail.do")) { // 주문세부사항
			OrderDetailAction order = new OrderDetailAction();
			order.execute(req, resp);
			path = "/shopping/orderdetail.jsp";

		} else if (action.equals("/orderview.do")) { // 주문만 보여주는 view
			OrderViewAction order = new OrderViewAction();
			order.execute(req, resp);
			path = "/shopping/order.jsp";

		} else if (action.equals("/totalorder.do")) { // 전체물품주문
			TotalOrderAction order = new TotalOrderAction();
			order.execute(req, resp);
			path = "/shopping/order.jsp";

		} else if (action.equals("/orderdelete.do")) { // 물품삭제
			OrderDeleteAction order = new OrderDeleteAction();
			order.execute(req, resp);
			path = "/shopping/cancel.jsp";

		} else if (action.equals("/mypage.do")) { // 마이페이지
			path = "/shopping/mypage.jsp";

		} else if (action.equals("/modify.do")) { // 회원정보수정
			ModifyViewAction modifyView = new ModifyViewAction();
			modifyView.execute(req, resp);
			path = "/shopping/modify.jsp";

		} else if (action.equals("/modifyUp.do")) { // 회원정보 수정
			ModifyAction modify = new ModifyAction();
			modify.execute(req, resp);
			path = "/shopping/main.jsp";

		}  else if (action.equals("/Mywrite.do")) { // 내가 쓴 글 보기
			MyWriteAction MyWrite = new MyWriteAction();
			MyWrite.execute(req, resp);
			path = "/shopping/mywrite.jsp";
			
		} else if (action.equals("/deleteUp.do")) { // 회원탈퇴
			MemberDeleteAction delete = new MemberDeleteAction();
			delete.execute(req, resp);
			path = "/shopping/main.jsp";

		} else if (action.equals("/find.do")) {// 로그인 화면에서 찾기 버튼 누를시
			path = "/shopping/find.jsp";

		} else if (action.equals("/gocheck.do")) { // 비밀번호 찾기 버튼 누를시
			path = "/shopping/findpwd.jsp";

		} else if (action.equals("/gofind.do")) {// 아이디 찾기 버튼 누를시
			path = "/shopping/findid.jsp";

		} else if (action.equals("/notice.do")) { // 공지사항
			NoticeListAction noticeList = new NoticeListAction();
			noticeList.execute(req, resp);
			path = "/shopping/notice.jsp";

		} else if (action.equals("/noticeDetail.do")) { // 공지사항
			NoticeDetailAction noticeDetail = new NoticeDetailAction();
			noticeDetail.execute(req, resp);
			path = "/shopping/noticedetail.jsp";

		} else if (action.equals("/noticeWriteForm.do")) { // 공지쓰기
			path = "/shopping/noticewrite.jsp";

		} else if (action.equals("/noticeWrite.do")) { // 공지쓰기
			NoticeWriteAction noticeWrite = new NoticeWriteAction();
			noticeWrite.execute(req, resp);
			resp.sendRedirect("notice.do");

		} else if (action.equals("/noticeEditForm.do")) { // 공지편집
			NoticeEditFormAction noticeEditForm = new NoticeEditFormAction();
			noticeEditForm.execute(req, resp);
			path = "/shopping/noticeedit.jsp";

		} else if (action.equals("/noticeEdit.do")) { // 공지편집
			NoticeEditAction noticeEdit = new NoticeEditAction();
			MultipartRequest multi = noticeEdit.execute(req, resp);
			resp.sendRedirect("noticeDetail.do?pageNum=" + multi.getParameter("pageNum") + "&notice_id="
					+ multi.getParameter("notice_id"));

		} else if (action.equals("/noticeDelete.do")) { // 공지삭제
			NoticeDeleteAction noticeDelete = new NoticeDeleteAction();
			noticeDelete.execute(req, resp);
			resp.sendRedirect("notice.do?pageNum=" + req.getParameter("pageNum"));

		} else if (action.equals("/board.do")) { // 게시판
			BoardListAction boardList = new BoardListAction();
			boardList.execute(req, resp);
			path = "/shopping/board.jsp";

		} else if (action.equals("/boardDetail.do")) {// write폼에서 글쓰기버튼 클릭했을때
			BoardDetailAction boarddetail = new BoardDetailAction();
			boarddetail.execute(req, resp);
			path = "/shopping/boarddetail.jsp";

		} else if (action.equals("/boardWirteForm.do")) { // 게시판폼쓰기
			path = "/shopping/boardwrite.jsp";

		} else if (action.equals("/boardWrite.do")) {// write폼에서 글쓰기버튼 클릭했을때
			BoardWriteAction boardWrite = new BoardWriteAction();
			boardWrite.execute(req, resp);
			resp.sendRedirect("board.do");

		} else if (action.equals("/boardEditForm.do")) { // 게시판폼편집
			BoardEditFormAction boardEditForm = new BoardEditFormAction();
			boardEditForm.execute(req, resp);
			path = "/shopping/boardedit.jsp";

		} else if (action.equals("/boardEdit.do")) { // 게시판폼편집
			BoardEditAction boardEdit = new BoardEditAction();
			MultipartRequest multi = boardEdit.execute(req, resp);
			resp.sendRedirect("boardDetail.do?pageNum=" + multi.getParameter("pageNum") + "&post_id="
					+ multi.getParameter("post_id") + "&optionIndex=" + multi.getParameter("optionIndex"));

		} else if (action.equals("/boardDelete.do")) { // 게시판삭제
			BoardDeleteAction boardDelete = new BoardDeleteAction();
			boardDelete.execute(req, resp);
			resp.sendRedirect("board.do?pageNum=" + req.getParameter("pageNum"));

		} else if (action.equals("/boardSearch.do")) { // 게시판검색
			BoardSearchAction boardSearch = new BoardSearchAction();
			boardSearch.execute(req, resp);
			path = "/shopping/board.jsp";

		} else if (action.equals("/download.do")) { // 다운로드
			FileDownloadAction download = new FileDownloadAction();
			download.execute(req, resp);
		}

		if (path != "") {
			RequestDispatcher dis = req.getRequestDispatcher(path);
			dis.forward(req, resp);
		}

	}// end process()

}// end class
