import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

public class servletDetailData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public servletDetailData() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PlatformData outpd = new PlatformData();

		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		StringBuffer sbSql = new StringBuffer();

		int nErrorCode = 0;
		String strErrorMsg = "SUCC";

		try {
			conn = util.createJdbcConn();
			sbSql.append(" SELECT * FROM xpush_grid3 ORDER BY \"COL1\"");
			pstmt = conn.prepareStatement(sbSql.toString());
			pstmt.setFetchSize(1000);
			rs = pstmt.executeQuery();

			DataSet ds = util.getDataset(rs, "output");

			outpd.addDataSet(ds);

		} catch (Exception e1) {
			nErrorCode = -1;
			strErrorMsg = e1.getMessage();
			e1.printStackTrace();
		}

		if (rs != null) try { rs.close(); } catch (SQLException e) { e.printStackTrace(); }
		if (pstmt != null) try { pstmt.close(); } catch (SQLException e) { e.printStackTrace(); }
		if (conn != null)  try { conn.close(); } catch (SQLException e) { e.printStackTrace(); }

		VariableList varList = outpd.getVariableList();
		varList.add("ErrorCode", nErrorCode);
		varList.add("ErrorMsg", strErrorMsg);

		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV, "utf-8");
		pRes.setData(outpd);
		
		try {
			pRes.sendData();
		} catch (PlatformException e) {
			e.printStackTrace();
		}
	}
}
