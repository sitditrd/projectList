package dto;

public class TicketPageDTO {
	private int currentPage; // 현재페이지
	private int totalCount; // 총 레코드수
	private int blockCount = 8; // 한 페이지에 보여줄 레코드수
	private int blockPage = 3; // 한 블록에 보여줄 페이지수
	private int totalPage; // 총 페이지수
	private int startRow; // 시작 레코드 번호
	private int endRow; // 끝 레코드번호
	private int startPage; // 한 블록의 시작 페이지 번호
	private int endPage; // 한 블록의 끝페이지 번호
	private int number;

	private String searchKey;
	private String searchWord;
	private String flighttype; //왕복구분
	private String startDate; //가는날 
	private String endDate; //오는날
	private String adult; //성인
	private String children; //아동
	private String laporseat; //보호구분
	private String depart_region; //출발지
	private String arrive_region; //도착지
	private String airline_name; //항공사명
	
	
	public String getFlighttype() {
		return flighttype;
	}


	public void setFlighttype(String flighttype) {
		this.flighttype = flighttype;
	}


	public String getEndDate() {
		return endDate;
	}


	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}


	public String getAdult() {
		return adult;
	}


	public void setAdult(String adult) {
		this.adult = adult;
	}


	public String getChildren() {
		return children;
	}


	public void setChildren(String children) {
		this.children = children;
	}


	public String getLaporseat() {
		return laporseat;
	}


	public void setLaporseat(String laporseat) {
		this.laporseat = laporseat;
	}


	public String getStartDate() {
		return startDate;
	}


	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getAirline_name() {
		return airline_name;
	}


	public void setAirline_name(String airline_name) {
		this.airline_name = airline_name;
	}


	public String getDepart_region() {
		return depart_region;
	}


	public void setDepart_region(String depart_region) {
		this.depart_region = depart_region;
	}


	public String getArrive_region() {
		return arrive_region;
	}


	public void setArrive_region(String arrive_region) {
		this.arrive_region = arrive_region;
	}


	public TicketPageDTO() {

	}

	public TicketPageDTO(int currentPage, int totalCount) {
		this.currentPage = currentPage;
		this.totalCount = totalCount;

		// 시작레코드
		startRow = (currentPage - 1) * blockCount + 1;

		// 끝레코드
		endRow = startRow + blockCount - 1;

		// 총페이지수
		totalPage = totalCount / blockCount + (totalCount % blockCount == 0 ? 0 : 1);

		// 시작페이지
		startPage = (int) ((currentPage - 1) / blockPage) * blockPage + 1;

		// 끝페이지
		endPage = startPage + blockPage - 1;
		if (totalPage < endPage)
			endPage = totalPage;

		// 리스트페이지에 출력번호
		number = totalCount - (currentPage - 1) * blockCount;
	}

	public TicketPageDTO(int currentPage, int totalCount, String flighttype, String startDate, String endDate, String adult, String children, String laporseat, String depart_region, String arrive_region, String airline_name, String searchKey) {
		this(currentPage, totalCount);
		this.flighttype = flighttype;
		this.startDate = startDate;
		this.endDate = endDate;
		this.adult = adult;
		this.children = children;
		this.laporseat = laporseat;
		this.depart_region = depart_region;
		this.arrive_region = arrive_region;
		this.airline_name = airline_name;
		this.searchKey = searchKey;
	}
	
	public TicketPageDTO(int currentPage, int totalCount, String searchKey, String searchWord) {
		this(currentPage, totalCount);
		this.searchKey = searchKey;
		this.searchWord = searchWord;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getBlockCount() {
		return blockCount;
	}

	public void setBlockCount(int blockCount) {
		this.blockCount = blockCount;
	}

	public int getBlockPage() {
		return blockPage;
	}

	public void setBlockPage(int blockPage) {
		this.blockPage = blockPage;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}
	
	public String getSearchKey() {
		return searchKey;
	}

	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}

	public String getSearchWord() {
		return searchWord;
	}

	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}

}
