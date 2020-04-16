import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

public class util {
	public static Connection createJdbcConn() throws Exception {
		Connection conn = null;
//		Class.forName("org.postgresql.Driver");
//		conn = DriverManager.getConnection("jdbc:postgresql://127.0.0.1/postgres", "postgres", "postgres");
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection("jdbc:oracle:thin:@14.63.224.112:1521:xe", "POC_MIRAE", "a1234");
		return conn;
	}
	public static DataSet getDataset(ResultSet rs, String dsID) throws Exception
	{
		int i;
		int iColCnt;
		String sColName;
		String sColType;;
		int ColType = 0; 
		int ColSize = 255; 
		
		DataSet ds = new DataSet(dsID);
		ResultSetMetaData rsmd = rs.getMetaData();

		iColCnt = rsmd.getColumnCount();
		for( i = 1 ; i <= iColCnt ; i++ )
		{
			sColName = rsmd.getColumnName(i).toUpperCase();		
			sColType = rsmd.getColumnTypeName(i);

			ColType = DataTypes.STRING;
			if(sColType.equals("int4"))	ColType = DataTypes.INT;
			if(sColType.equals("numeric"))	ColType = DataTypes.BIG_DECIMAL;
			
			ds.addColumn(sColName, ColType, ColSize);
			//ds.addColumn(sColName, ColType, rsmd.getColumnDisplaySize(i));
			
	/*
			switch (rsmd.getColumnType(i)) 
			{ 
				case Types.VARCHAR: 
				case Types.CHAR: 
				case Types.LONGVARCHAR: 
				case Types.CLOB: 
					ColType = DataTypes.STRING; 
					break; 
				case Types.INTEGER: 
				case Types.BIGINT: 
				case Types.SMALLINT: 
				case Types.TINYINT: 
				case Types.NUMERIC: 
					ColType = DataTypes.INT; 
					break; 
				case Types.FLOAT: 
					ColType = DataTypes.FLOAT; 
					break; 
				case Types.DOUBLE: 
				case Types.REAL: 
				case Types.DECIMAL: 
					ColType = DataTypes.DECIMAL; 
					break; 
				case Types.BINARY: 
				case Types.BLOB: 
				case Types.LONGVARBINARY: 
					ColType = DataTypes.BLOB; 
					break; 
				case Types.DATE: 
					ColType = DataTypes.DATE; 
					break; 
				case Types.TIME: 
				case Types.TIMESTAMP: 
					ColType = DataTypes.DATE_TIME; 
					break; 
				default: 
					ColType = DataTypes.STRING; 
					break; 
			} 
	*/		
		}
		while(rs.next())
		{
			int row = ds.newRow();
			for( i = 1 ; i <= iColCnt ; i++ )
			{
				sColName = rsmd.getColumnName(i).toUpperCase();
				ds.set(row, sColName, rsGet(rs, sColName));
			}
		}

	  return ds;
	}

	private static String rsGet(ResultSet rs, String id) throws Exception
	{
		if( rs.getString(id) == null ){
			return "";
		} 
		else {
			return rs.getString(id);
		}
	}
}
