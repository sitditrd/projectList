var data_value = 1;
var chkgender = '';	//성별 빈칸 확인

$(document).click(function() {

	/*
	 * $('#input-instance1').hide(); $('#input-instance2').hide();
	 */


	//이름, 성
	if ($('.ipt-surname').val() != '' && $('.ipt-givennames').val() != '') {
		$('#ipt-name-error').hide();
	}

	//여권번호
	if ($('.ipt-id-num').val() != '') {
		$('#ipt-password-error').hide();
	}

	
	//연락가능한사람이름
	if ($('.m-contact-dtl .ipt-name').val() != '') {
		$('#ipt-contact-error').hide();
	}

	//연락가능한사람이메일
	if ($('.ipt-mail').val() != '') {
		var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		$('#ipt-contactemail-error').hide();
		if(!regEmail.test($('.ipt-mail').val())) {
			$('#ipt-contactemailform-error').show();
		} else {
			$('#ipt-contactemailform-error').hide();
		}
   }
	
	//연락가능한사람 전화번호
	if ($('.ipt-number').val() != '') {
		$('#ipt-contactmobile-error').hide();
	}


	
	
});

/*
 * $(document).click(function(e) { if(e.target.id != '.ipt-surname')
 * $('#ipt-name-error').hide(); });
 */

$(document).ready(function() {
	/* $('#btn').click(function(){
	      var ITEM_CODE1 = $('#search').val();
	      console.log("DD?="+ITEM_CODE1);
	      
	      $.ajax({
	         type:'POST',
	         dataType:'json',
	         data: ITEM_CODE1,
	         contentType : "application/json; charset=UTF-8",
	         url:'exchange.do',
	         success:viewMessage2,
	         error:function(xhr, textStatus, error){
	            alert(xhr.status);
	         }
	      });
	   });*/

	
	$('.book-currency-list').click(function() {
		$('.book-currency-list').css('display', 'none');
	});
	
	$('.book-currency-list a').click(function() {
		var kor_div = korprice.split(",");
		var kor_price = '';
		for(var i=0;i<kor_div.length;i++)
			kor_price += kor_div[i];
		var ITEM_CODE1 = $(this).attr('id');
		console.log("item_code1=" + ITEM_CODE1);
		
		if (ITEM_CODE1 != '원') {
			$.ajax({
				type : 'POST',
				dataType : 'json',
				data : ITEM_CODE1,
				contentType : "application/json; charset=UTF-8",
				url : 'exchange.do',
				async : false, // 동기화
				success : viewMessage,
				error : function(xhr,textStatus,error) {
					alert(xhr.status);
					}
			});
			
		if (ITEM_CODE1 == '0000002'|| ITEM_CODE1 == '0000029'|| ITEM_CODE1 == '0000006'|| ITEM_CODE1 == '0000010') {
			data_value = data_value / 100;
		}
		} else {
			data_value = 1;
		}
		
		console.log('data_value:' + data_value);
		
		var totalprice = (kor_price / data_value).toFixed(2);
		var commasprice = '';
		if(ITEM_CODE1 == '원')
			commasprice = numberWithCommas(kor_price / data_value);
		else
			commasprice = numberWithCommas(totalprice);
		// alert("id:"+$(this).attr('id')+"name:"+$(this).attr('name')+"그price"+
		// kor_price +"환율" + data_value);
		
		$('.book-currency-list > a').attr('class', '');
		$(this).attr('class', 'active');
		$('.amount').html($(this).attr('data-currency'));
		$('#submitTotalPrice').html($('.amount').html()+ ' '+ commasprice);
	});
	
	//동의후계속
	$('.btn-xl').bind('click',function(){
		for(var i=1; i<=allper;i++){
			if ($('#surname_'+i).val() == ''){
				$('#ipt-name-error').show();
				alert('이름을 입력해 주세요.');
				$('#surname_'+i).focus();
				return false;
			} else if ($('#givennames_'+i).val() == ''){
				$('#ipt-name-error').show();
				alert('이름을 입력해 주세요.');
				$('#givennames_'+i).focus();
				return false;
			}
			else if ($('#ipt-id-num_'+i).val() == ''){
				$('#ipt-password-error').show();
				alert('여권 번호를 입력해 주세요.');
				$('#ipt-id-num_'+i).focus();
				return false;
			}else if (chkgender == ''){
				alert('성별을 체크해 주세요.');
				return false;
			}
			else if($('#sel-birth-year_'+i).val() == null){
				alert('생년월일을 선택해 주세요.');
				$('#sel-birth-year_'+i).focus();
				return false;
			} else if($('#sel-birth-month_'+i).val() == null){
				alert('생년월일을 선택해 주세요.');
				$('#sel-birth-month_'+i).focus();
				return false;
			} else if($('#sel-birth-day_'+i).val() == null){
				alert('생년월일을 선택해 주세요.');
				$('#sel-birth-day_'+i).focus();
				return false;
			} 
		}
		
		if ($('#txtContactName').val() == ''){
			$('#ipt-contact-error').show();
			alert('연락가능한 사람의 이름을 입력해주세요');
			$('#txtContactName').focus();
			return false;
		}
		else if($('#txtContactMobile').val() == ''){
			$('#ipt-contactmobile-error').show();
			alert('최소 하나의 전화번호를 입력해주세요');
			$('#txtContactMobile').focus();
			return false;
		}
		else if ($('#txtContactEMail').val() == ''){
			$('#ipt-contactemail-error').show();
			alert('이메일 주소를 입력해주세요');
			$('#txtContactEMail').focus();
			return false;
		}
		$('#frm').attr('action','okRes.do?price='+$("#submitTotalPrice").html()).submit();
		
	});
	
	//체크박스
	$('input[type="checkbox"]').bind('click',function() {
		chkgender = $(this).val();
		var chkbox = $(this).attr('class');
		$('.'+chkbox).not(this).prop("checked", false);
		
		var chkboxid = $(this).attr('id');
		//var label = $('#'+chkboxid).parent().attr('id');
		//var active = $('#'+label +' i:nth-child(1)').attr('id');
		//var passive = $('#'+label +' i:nth-child(2)').attr('id');
		

		var i = chkboxid.split("_");  
		//alert('chkbox:'+chkbox+'chkboxid'+chkboxid+'i'+i[2]);
		if($('#gender_m_'+i[2]).is(':checked') == true){
			$('.chk-female_'+i[2]).attr('class','tab chk-btn chk-female_'+i[2]);
			$('.chk-male_'+i[2]).attr('class','tab chk-btn chk-male_'+i[2]+' active');
		}
		if($('#gender_m_'+i[2]).is(':checked') == false){
			$('.chk-male_'+i[2]).attr('class','tab chk-btn chk-male_'+i[2]);
		}
		if($('#gender_f_'+i[2]).is(':checked') == false){
			$('.chk-female_'+i[2]).attr('class','tab chk-btn chk-female_'+i[2]);
		}
		if($('#gender_f_'+i[2]).is(':checked') == true) {
			$('.chk-female_'+i[2]).attr('class','tab chk-btn chk-female_'+i[2]+' active');
			$('.chk-male_'+i[2]).attr('class','tab chk-btn chk-male_'+i[2]);
		} 

		
	});
	
	
	
	

	
	
	// 여행자_성
	$('.ipt-surname').click(function() {
		$('#input-instance').show();
		if ($('.ipt-surname').val() == '')
			$('#ipt-name-error').show();
	});
	
	$('.ipt-surname').on('mouseout', function() {
		$('#input-instance').hide();
	});
	
	// 여행자_이름
	$('.ipt-givennames').click(function() {
		$('#input-instance2').show();
	});
	
	$('.ipt-givennames').on('mouseout', function() {
		$('#input-instance2').hide();
	});
	
	
	// 여권 번호
	$('.ipt-id-num').click(function() {
		if ($('.ipt-id-num').val() == '')
			$('#ipt-password-error').show();
	});
	
	
	// 연락처 이름
	$('.m-contact-dtl .ipt-name').click(function() {
		if ($('.m-contact-dtl .ipt-name').val() == '')
			$('#ipt-contact-error').show();
	});

	// 연락처 전화번호
	$('.ipt-number').click(function() {
		if ($('.ipt-number').val() == '')
			$('#ipt-contactmobile-error').show();
		});

	// 연락처 이메일
	$('.ipt-mail').click(function() {
		if ($('.ipt-mail').val() == '')
			$('#ipt-contactemail-error').show();
	});
			
	//키보드 자판 막기
	$('.ipt-surname').keyup(function() {
		$(this).val($(this).val().replace(/[0-9]|[^\!-z]/gi, ""));
	});

	$('.ipt-givennames').keyup(function() {
		$(this).val($(this).val().replace(/[0-9]|[^\!-z]/gi, ""));
	});

	$('.ipt-id-num').keyup(function() {
		/*$(this).val($(this).val().replace(/[^\!-z]/g, ""));*/
		 if (!(event.keyCode >=37 && event.keyCode<=40)) {
			    var inputVal = $(this).val();
			    $(this).val(inputVal.replace(/[^a-z0-9]/gi,''));
		 }
	});

	$('.m-contact-dtl .ipt-name').keyup(function() {
		form = /[~!@\#$%^&*\()\-=+_\|']/gi;
		var temp=$('.m-contact-dtl .ipt-name').val();
		
		if(form.test(temp))
			$('.m-contact-dtl .ipt-name').val(temp.replace(form,""));
	});
	
	$('.ipt-number').keyup(function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ""));
	});

	$('.flight-detail').click(function() {
		$('.flight-item-con').slideToggle();
	});

});

//이름 작성 팁
function showRules() {
	$('.pop-passport').css('display', 'block');
}

//환율
function viewMessage(res) {

	$.each(res.StatisticSearch.row, function(index, value) {
		data_value = value.DATA_VALUE;
	});
}

function showCurrency() {
	$('.book-currency-list').css('display', 'block');
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/*
function doOpenCheck(chk){
	alert($(this).val()+ $('.gender_1').attr('class'));
	var chkcount = 1;
	var obj = document.getElementsByClassName("gender_"+chkcount);
	
	for(var i=0; i<obj.length;i++){
		if(obj[i] != chk){
			obj[i].checked = false;
			
		}
	}
	
}*/
/*
function viewMessage2(res){
	   $('#wrap').empty();
	   $('#wrap').append('<p>test');
	   $('#wrap').append('<table><tr><td>item-code1</td><td>item-name1</td><td>data_value</td></tr></table>');   
	   
	   console.log(res);
	    
	   $.each(res.StatisticSearch.row, function(index,value){
	      $('#wrap table').append("<tr><td>"+value.ITEM_CODE1+"</td><td>"+value.ITEM_NAME1+"</td><td>"+value.DATA_VALUE+"</td></tr>");
	   });
	   
	   $('#wrap').append('<p>test2');
	}
*/
