$(document).ready(function() 
{


	var url = document.location;
	var isSimpleMode = true;
	var isModuleUrlView = true; // moduel url

	var filter = "win16|win32|win64|mac|macintel";
	var isMobile = false;

	if ( navigator.platform ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
			isMobile = true;
		}
	}

	function amIMobile() {
		const userAgent = navigator.userAgent.toLowerCase();
		const mobileKeywords = ["android", "webos", "iphone", "ipad", "ipod", "blackberry", "windows phone"];
		// const mobileKeywords = ["android", "webos", "blackberry", "windows phone"];
	  
		for (let keyword of mobileKeywords) {
		  if (userAgent.includes(keyword)) {
			return true;
		  }
		}
	  
		return false;
	}	  

	var form_modulename = ($('#mform1 input[name="modulename"]').length > 0) ? $('#mform1 input[name="modulename"]').val() : 'none';

	/** 
	 * 
	 * Made By #Jeenlee
	 * 1. 수정 시 기존에 사용된 방식과 동일하게 정리
	 * 2. 주석기재
	 * 
	 **/
	
	// *****************************************************************************************************************
	// 공통처리
	// *****************************************************************************************************************
	$('head').append('<style type="text/css">.mform .fitem .felement select, select.form-control { transition: none !important; -webkit-transition: none !important;}</style>');	// selectBox 개선 - #Jeenlee

	// navbar homeIcon
	if($('#page #page-container #page-content .page-content-navigation .breadcrumb').length > 0){
		$('#page #page-container #page-content .page-content-navigation .breadcrumb .breadcrumb-item a').eq(0).html('<img src="/theme/image.php/coursemos/theme_coursemos/1602649524/layout/course-home" style="position:relative; top:-2px;" alt="HOME" />');
	}

	if(url.pathname == '/course/modedit.php'){	// 강좌>모듈별설정

		// 동영상선택-공유 #Jeenlee
		$('#page-mod-vod-mod #share div#zclip-ZeroClipboardMovie_1').css('display','none');

		// 기타설정>'이용가능상태'
		// if($('body').hasClass('lang-ko')){
		// 	$('#id_modstandardelshdr #fitem_id_visible .col-form-label').text('보기/숨기기');
		// 	$('#id_visible').children().eq(0).text('보기');
		// 	$('#id_visible').children().eq(1).text('숨기기');
		// } else {
		// 	$('#id_modstandardelshdr #fitem_id_visible .col-form-label').text('Show/Hide');
		// 	$('#id_visible').children().eq(0).text('Show');
		// 	$('#id_visible').children().eq(1).text('Hide');
		// }
		
		

		// 모듈 : 과제, 게시판, 퀴즈, URL, 개요, VOD, 웹문서, 폴더, 설문조사, 위키, 토론, 파일, 투표, 화상강의
		if( $('#page-mod-assign-mod').length > 0 || $('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0 || $('#page-mod-quiz-mod').length > 0 || $('#page-mod-url-mod').length > 0 || $('#page-mod-label-mod').length > 0 || $('#page-mod-vod-mod').length > 0 || $('#page-mod-page-mod').length > 0 || $('#page-mod-folder-mod').length > 0 || $('#page-mod-feedback-mod').length > 0 || $('#page-mod-wiki-mod').length > 0 || $('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0 || $('#page-mod-resource-mod').length > 0 || $('#page-mod-choice-mod').length > 0 || $('#page-mod-zoom-mod').length > 0){
			$('#page #page-container #page-content .page-content-container h2 .btn-link').hide();	// '도움말'버튼
		}

		// 모듈 : 과제, 게시판, 퀴즈, URL, 개요, VOD, 웹문서, 이러닝콘텐츠, 콘텐츠제작도구, 폴더, 설문조사, 위키, 채팅, 토론, 파일, 투표, 팀플평가, 화상강의
		if($('#page-mod-assign-mod').length > 0 || $('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0 || $('#page-mod-quiz-mod').length > 0 || $('#page-mod-url-mod').length > 0 || $('#page-mod-label-mod').length > 0 || $('#page-mod-vod-mod').length > 0 || $('#page-mod-page-mod').length > 0 || $('#page-mod-econtents-mod').length > 0 || $('#page-mod-xncommons-mod').length > 0 || $('#page-mod-ubfile-mod').length > 0 || $('#page-mod-folder-mod').length > 0 || $('#page-mod-feedback-mod').length > 0 || $('#page-mod-wiki-mod').length > 0 || $('#page-mod-ubchat-mod').length > 0 || $('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0 || $('#page-mod-resource-mod').length > 0 || $('#page-mod-choice-mod').length > 0 || $('#page-mod-ubpeer-mod').length > 0 || $('#page-mod-zoom-mod').length > 0){
			$('#fitem_id_cmidnumber').hide();	// 기타설정>'식별번호'
		}

		// 모듈 : 과제, 게시판, 퀴즈, URL, 웹문서, 이러닝콘텐츠, 폴더, 설문조사, 위키, 채팅, 토론, 투표, 팀플평가, 화상강의
		if($('#page-mod-assign-mod').length > 0 || $('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0 || $('#page-mod-quiz-mod').length > 0 || $('#page-mod-url-mod').length > 0 || $('#page-mod-page-mod').length > 0 || $('#page-mod-econtents-mod').length > 0 || $('#page-mod-folder-mod').length > 0 || $('#page-mod-feedback-mod').length > 0 || $('#page-mod-wiki-mod').length > 0 || $('#page-mod-ubchat-mod').length > 0 || $('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0 || $('#page-mod-resource-mod').length > 0 || $('#page-mod-choice-mod').length > 0 || $('#page-mod-ubpeer-mod').length > 0 || $('#page-mod-zoom-mod').length > 0){

			$('#id_submitbutton2').hide();	// '저장후강좌로복귀' 버튼
			
			// 충북대(운영)
			if(url.hostname == 'lms.chungbuk.ac.kr' && $('#page-mod-assign-mod').length > 0 || url.hostname == 'lms.chungbuk.ac.kr' && $('#page-mod-quiz-mod').length > 0){
				$('#id_submitbutton2').show();	// '저장후강좌로복귀' 버튼  (수정자 : haileyy)
			}
		}
		
		//비메오   
        setTimeout(function(){
            // console.log("state : ", $(".atto_coursemosvimeo_button"))
            var vimeoBtn = $(".atto_coursemosvimeo_button").clone();
             // console.log("vimeoBtn : ", vimeoBtn);
            vimeoBtn.attr("class","btn_alert_vimeo");
            $(".files_group").append(vimeoBtn);
            $(".atto_coursemosvimeo_button").remove();    
            
            $(vimeoBtn).click(function(){
                window.open("https://support.coursemos.kr/ko/faq/lms/view/304", '_blank');         
            });
        }, 1000);  
	}

	if(url.pathname == '/course/completion.php' ) { // 이수기준관리
		if($('#page-course-completion').length > 0) {
			$('#page-content .page-content-container .nav-tabs li').eq(1).hide();
			$('#page-content .page-content-container .nav-tabs li').eq(2).hide();
		}
	}

	if(url.pathname == '/grade/report/user/index.php' ) { // 성적부 - 요약보고서(학생)
		if($('#page-grade-report-user-index').length > 0) {
			if(url.hostname !== 'lms.kongju.ac.kr'){ //공주대 제외
				$('#page-container .grade-navigation .nav-tabs li').eq(0).hide(); //탭
			}	
			$('#settingsnav .block_tree .type_container ul li').eq(0).hide(); //고급설정

		}
	}
	// 퀴즈 미리보기
	if(url.pathname=='/question/preview.php')
    {
        $('#techinfo').hide();
        $('form.mform').hide();
		$('#page-container a').each(function(idx, val){
			var text = $(this).text();
			if(text == "Download this question in Moodle XML format"){
				$(this).css("display","none");
			}
		});
    }

	//게시판
	if(url.pathname=='/mod/ubboard/write.php' || url.pathname=='/mod/ubboard/modify.php'){
		//비메오   
		setTimeout(function(){
			// console.log("state : ", $(".atto_coursemosvimeo_button"))
			var vimeoBtn = $(".atto_coursemosvimeo_button").clone();
			 // console.log("vimeoBtn : ", vimeoBtn);
			vimeoBtn.attr("class","btn_alert_vimeo");
			$(".files_group").append(vimeoBtn);
			$(".atto_coursemosvimeo_button").remove();    
				
			$(vimeoBtn).click(function(){
				window.open("https://support.coursemos.kr/ko/faq/lms/view/304", '_blank');         
			});
		}, 1200);  
	}	
		
	//토론방 글쓰기
	if(url.pathname=='/mod/forum/view.php' || url.pathname=='/mod/forum/post.php')
	{
		//비메오   
		setTimeout(function(){
			// console.log("state : ", $(".atto_coursemosvimeo_button"))
			var vimeoBtn = $(".atto_coursemosvimeo_button").clone();
			// console.log("vimeoBtn : ", vimeoBtn);
			vimeoBtn.attr("class","btn_alert_vimeo");
			$(".files_group").append(vimeoBtn);
			$(".atto_coursemosvimeo_button").remove();    
				
			$(vimeoBtn).click(function(){
				window.open("https://support.coursemos.kr/ko/faq/lms/view/304", '_blank');         
			});
		}, 1200);  
	}

	//과제 제출
	if(url.pathname=='/mod/assign/view.php' && url.search.indexOf('?id=')>-1 && url.search.indexOf('&action=editsubmission')>0){ 
        //비메오   
        setTimeout(function(){
            // console.log("state : ", $(".atto_coursemosvimeo_button"))
            var vimeoBtn = $(".atto_coursemosvimeo_button").clone();
             // console.log("vimeoBtn : ", vimeoBtn);
            vimeoBtn.attr("class","btn_alert_vimeo");
            $(".files_group").append(vimeoBtn);
            $(".atto_coursemosvimeo_button").remove();    
                    
            $(vimeoBtn).click(function(){
                window.open("https://support.coursemos.kr/ko/faq/lms/view/304", '_blank');         
            });
        }, 1000);        
    }

	if(url.pathname=='/mod/quiz/report.php')
    {
        //퀴즈>수동채점(ellena)
        if(url.search.indexOf('&mode=grading')>-1 ) {
            $("#questionstograde .header").each(function(idx, val){
                var questionstograde = $(this).text();
                // console.log(questionstograde);
                if(questionstograde == '채점할') {
                    $(this).text("채점 필요");		
                }
            });            
        }
    }

	// *****************************************************************************************************************
	// 단위처리
	// *****************************************************************************************************************
	switch (url.pathname)
	{
		// =====================================================================
		// MyPage>파일관리
		// =====================================================================
		case '/user/files.php':
			if($('#page-user-files').length > 0){
				// navbar
				// $('#page-user-files #page-container #page-content .page-content-navigation nav .breadcrumb .breadcrumb-item a').eq(0).addClass('fa fa-home').css('margin-top','3px');
				$('#page-user-files #page-container #page-content .page-content-navigation nav .breadcrumb .breadcrumb-item').eq(1).text('개인파일');
				$('#page-user-files #page-container #page-content .page-content-navigation nav .breadcrumb .breadcrumb-item').eq(3).remove();
			}
		break;

		// =====================================================================
		// 강좌>모듈별설정
		// =====================================================================
		case '/course/modedit.php' :

			// 모듈:과제
			if($('#page-mod-assign-mod').length > 0){
				if(url.hostname !== 'snowboard.sookmyung.ac.kr') {
					$('#id_feedbacktypes').hide();					// '피드백유형'
				}
				if(url.hostname == 'lms.chungbuk.ac.kr') {
					$('#id_feedbacktypes').show();					// '피드백유형'
					$('#fitem_id_assignfeedback_comments_commentinline').hide();	// '인라인 코멘트' (수정자 : haileyy)	
				}
				$('#fitem_id_requiresubmissionstatement').hide();	// 제출설정>'과제 제출에 대한 학습자의 동의 받기'
				$('#fitem_id_attemptreopenmethod').hide();			// 제출설정>'과제 재제출 설정'
				// 제출설정>'제출버튼보이기' 안내문구
				if($('body').hasClass('lang-ko')){
					$('#fitem_id_submissiondrafts').after('<div id="fitem_id_submissiondrafts_text" class="form-group row fitem"><div class="col-md-3"></div><div class="col-md-9"><ul><li>제출 버튼 보이기를 활성화(‘예’로 선택)하면 과제를 초안(Draft) 상태와 제출물(Final) 상태로 구분할 수 있습니다.</li><li>학습자는 과제를 업로드 후 ‘과제제출 완료하기’ 버튼을 클릭해야 ‘초안’에서 ‘제출물’ 상태로 변경됩니다.</li><li>초안 상태에서 과제를 자유롭게 수정할 수 있으며 제출물로 변경된 후에는 과제를 수정할 수 없습니다.<br>(중요: 학습자는 과제 기한 안에 "과제제출 완료하기" 버튼을 눌러 제출하지 않으면 늦은 제출 또는 미제출이 될 수 있습니다.)</li></ul></div></div>');
				} else {
					$('#fitem_id_submissiondrafts').after('<div id="fitem_id_submissiondrafts_text" class="form-group row fitem"><div class="col-md-3"></div><div class="col-md-9"><ul><li>If enabled, assignments can be sorted by Draft status and Final status.</li><li>Students should click on ‘Complete submission’ to change the assignment status to ‘Final’ from ‘Draft’.</li><li>Assignments can be modified freely in Draft status and students cannot modify after they are changed to submissions.<br>(Important : students may be marked as ‘Late’ or ‘Unsubmitted’ unless they submit by clicking ‘Complete submission’ before the deadline.)</li></ul></div></div>');
				}
				// 기타설정>'팀모드' 를 팀제출설정 항목으로
				$('#fitem_id_teamsubmission').after($('#fitem_id_restrictgroupbutton'));
				$('#fitem_id_teamsubmission').after($('#fitem_id_groupingid'));
				$('#fitem_id_teamsubmission').after($('#fitem_id_groupmode'));
				$('#fitem_id_restrictgroupbutton').hide();
				$("#id_advancedgradingmethod_submissions option:eq(1)").hide();	// 성적>채점방식>'채점가이드'
				$('#fitem_fgroup_id_assignsubmission_file_filetypes').hide();	// 제출 유형>‘허용되는 파일 유형'

			}

			// 모듈:퀴즈
			if($('#page-mod-quiz-mod').length > 0){
				$('#fitem_id_groupmode').hide();			// 기타설정>'팀모드'
				$('#fitem_id_restrictgroupbutton').hide();	// 기타설정>'팀모드'
				// 실시방식>'응시기록누적' 안내문구
				$('#id_attemptonlast').after('<div id="id_attemptonlast_text" class="col-md-12 col-lg-12" style="padding-top:10px">"응시 기록 누적"을 사용하면 새로운 응시에서 이전(최근)에 응시한 값이 자동으로 입력되어 나타납니다.</div>');
				
				if($('body').hasClass('lang-ko')){
					// 피드백표시 안내문구
					$('#fgroup_id_duringoptionsgrp').before('<div id="fgroup_id_duringoptionsgrp_text" style="padding-bottom:10px">응시 각 단계에서 학습자에게 제공할 정보를 선택할 수 있습니다.</div>');
				} else {
					$('#fgroup_id_duringoptionsgrp').before('<div id="fgroup_id_duringoptionsgrp_text" style="padding-bottom:10px">This section controls what information students will be shown when they review their past attempts at the quiz, and during the attempt in adaptive mode.</div>');
				}

				// 퀴즈 점수에 따른 피드백 안내문구
				$('#fitem_id_gradeboundarystatic1').before('<div id="fitem_id_gradeboundarystatic1_text" style="padding-bottom:10px">학습자의 퀴즈 성적(백분율 범위)에 따라 피드백을 제공할 수 있습니다.</div>');
				
				// 화면구성
				if(url.hostname !== 'snowboard.sookmyung.ac.kr') {
					$('#id_display').hide();					
				}

				$('#id_seb').hide();						// Safe Exam Browser

				if(url.hostname !== 'lms.chungbuk.ac.kr'){
					$('#id_security').hide();					// 응시에의추가제한
				}
				
				$('#fitem_id_graceperiod').hide();      	// 퀴즈기간설정>'제출 유예기간' (수정자:ellena)
				$('#id_preferredbehaviour option[value=deferredcbm]').remove();  //확신도 기반 응시후피드백 (수정자:ellena)
				$('#id_preferredbehaviour option[value=immediatecbm]').remove(); //확신도 기반 즉각적피드백 (수정자:ellena)
				$('#id_preferredbehaviour option[value=interactive]').remove();  //상호작용을 통한 다수시도 (수정자:ellena)

				// 퀴즈 > 응시에의 추가제한 > 비밀번호 숨김 (수정자: ellena)
				// $('#id_quizpassword').attr('disabled','disabled');
				// $('#fitem_id_quizpassword .fitemtitle').hide();
                // $('#fitem_id_quizpassword .fpassword').hide();
			} 

            // 모듈:URL
            if($('#page-mod-url-mod').length > 0){
				if(url.hostname !== 'snowboard.sookmyung.ac.kr') {
                	$('.visibleifjs').hide();           // 'URL링크선택'버튼
				}
                $('#id_optionssection').hide();     // 화면구성
				$('#id_parameterssection').hide();  // URL변수
            }

            // 모듈:VOD
            if($('#page-mod-vod-mod').length > 0){

				if($('body').hasClass('lang-ko')){
					//  성적>'학습인정범위'
					$('#fitem_id_completionprogress div label').text('학습 인정 범위');
					$('#id_error_completionprogress').after('<label>&nbsp; % 이상</label>');
				} else {
					$('#fitem_id_completionprogress div label').text('Completion point(%)');		
				}
				
				if(url.hostname !== 'kihalms.moodler.kr' && url.hostname !== 'edulms.kiha21.or.kr') {
                	$('#fitem_id_add_grade_item').hide();   // 성적>'성적항목추가'
				}

				if(url.hostname !== 'lms.chungbuk.ac.kr' && url.hostname !== 'smart.wsu.ac.kr') {
					$('#id_vod_popup').hide();				// '화면구성'
				}
			}
			
			// 모듈:웹문서
			if($('#page-mod-page-mod').length > 0){
				$('#id_appearancehdr').hide();		// '화면구성'
			}

			// 모듈:이러닝콘텐츠
			if($('#page-mod-econtents-mod').length > 0){
				if($('body').hasClass('lang-ko')){
					//  성적>'학습인정범위'
					$('#fitem_id_completionprogress div label').text('학습 인정 범위');
					$('#id_error_completionprogress').after('<label>&nbsp; % 이상</label>');
				} else {
					$('#fitem_id_completionprogress div label').text('Completion point(%)');		
				}

				$('#id_options').hide();			// '화면구성'
			}

			// 모듈:콘텐츠제작도구
			if($('#page-mod-xncommons-mod').length > 0){	
				$('#id_displayoption').hide();		// '팝업설정'
			}
			
			if(url.hostname == 'ncyber.kornu.ac.kr' && $('#page-mod-xncommons-mod').length > 0){
				$('#id_displayoption').show();		// '팝업설정'
			}


			// 모듈:파일
			if($('#page-mod-ubfile-mod').length > 0 || $('#page-mod-resource-mod').length > 0){
				// 내용>'허용되는파일형식'
				$('#id_files').next('p').hide();
				$('.form-filetypes-descriptions').hide();
			}

			// 모듈:폴더
			if($('#page-mod-folder-mod').length > 0){
				$('#id_showexpanded').parent().parent().parent().hide();		// 폴더첨부>'하위폴더보여주기'
				$('#id_showdownloadfolder').parent().parent().parent().hide();	// 폴더첨부>'폴더다운로드버튼보이기'
			}

			// 모듈:토론방
			if($('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0){
				if(url.hostname !== 'smart.wsu.ac.kr') { //우송대
					$('#id_availability').hide(); 											// 참여기간설정, 사용가능성
					$('#id_attachmentswordcounthdr').hide(); 								// 첨부파일 및 단어수 (수정자:ellena)
					$('#id_subscriptionandtrackinghdr').hide(); 							// 구독 및 추적 (수정자:ellena)
					$('#id_blockafterheader').hide(); 										// 게시한도 및 차단 (수정자:ellena)
					$('#id_modstandardratings').hide(); 									// 평가 (수정자:ellena)					
				}
				$('#id_discussionlocking').hide(); 										// 토론잠금 (수정자:ellena)
				$('#fitem_id_sendstudentnotifications_forum').remove(); 				// 성적>'학생에게 알림' (수정자:ellena)
				$('#id_subscriptionandtrackinghdr #fitem_id_forcesubscribe').hide();	// 구독및추적>'구독옵션'
				$('#fitem_id_type .col-form-label .help-icon').hide();					// 기본>'토론방유형' helpIcon
				
				if($('body').hasClass('lang-ko')){
					// 기본>'토론방유형' 안내문구
					$('#fitem_id_type').after('<div id="fitem_id_type_text" class="form-group row fitem"><div class="col-md-3"></div><div class="col-md-9"><ul><li>1인 1주제 형식 - 본 형식에서 학습자는 한 개의 주제글을 작성할 수 있습니다. 본인 또는 다른 사용자의 주제글에 답글을 작성하는 횟수에는 제한이 없습니다.</li><li>단독 주제 형식 -  지금 보고 있는 화면 상단 “설명"에 작성한 내용이 본 토론의 유일한 주제글이 됩니다. 학습자들은 답글로 의견을 작성하고 공유할 수 있습니다.</li><li>블로그 형식 - 이 토론은 첫 화면에 주제글들이 제목+본문(축약) 형태로 표시됩니다. 학습자는 블로그에서 글을 탐색하는 것처럼 제목과 축약된 텍스트를 활용할 수 있습니다.</li><li>일반 형식 - 가장 기본적인 형식의 토론입니다. 글 작성 횟수에 제한이 없고 첫 화면에서 다른 학습자의 주제글 제목을 클릭하여 열람하고 답글을 달 수 있습니다.</li><li>질의응답 형식 - 본 형식의 토론에서 학습자는 주제글을 작성하기 전까지 다른 학습자의 글을 읽을 수 없습니다.</li></ul></div></div>');
				} else {
					$('#fitem_id_type').after('<div id="fitem_id_type_text" class="form-group row fitem"><div class="col-md-3"></div><div class="col-md-9"><ul><li>Each person posts one discussion – This forum allows each person to start one discussion topic. There is no limit on the number of replies.</li><li>A single simple discussion – What you write on the description above becomes the only topic for the discussion. Students can reply and share their opinions.</li><li>Standard forum displayed in a blog-like format – Topics are displayed on the first page in a Title+Content(summarized) format. Students can use the titles and summarized text as in a blog.</li><li>Standard forum for general use – This is the most general type of discussion. There is no limit on the number of posts. Students can click on the title of the discussion on the first page, read its content and reply.</li><li>Q and A forum – This forum requires students to post once before viewing other students’ postings.</li></ul></div></div>');
				}
			}

			// 모듈:설문조사
			if($('#page-mod-feedback-mod').length > 0){
				$('#fitem_id_groupmode').hide();			// 기타설정>'팀모드'
				$('#fitem_id_restrictgroupbutton').hide();	// 기타설정> 팀모드 > '팀/팀 분류 접속제한 추가' 버튼
				$('#fitem_id_email_notification').hide();	// 설문조사방법>'응답결과이메일통지'
				$('#fitem_id_site_after_submit').hide();	// 설문조사제출후>'링크 주소'
			}

			// 모듈:위키
			if($('#page-mod-wiki-mod').length > 0){

				$('#id_wikifieldset').hide();				// 형식
			
				if(url.hostname !== 'plms.postech.ac.kr'){
					$('#fitem_id_groupmode').hide();			// 기타설정>'팀모드'
				}
				
				$('#fitem_id_restrictgroupbutton').hide();	// 기타설정>'팀/팀 분류 접속제한 추가' 버튼
			}

			// 모듈:채팅
			if($('#page-mod-ubchat-mod').length > 0){
				$('#fitem_id_restrictgroupbutton').hide();	// 기타설정>'팀/팀 분류 접속제한 추가' 버튼
			}

			// 모듈:게시판
			if($('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0){
				if(url.hostname !== 'snowboard.sookmyung.ac.kr') {
					// 기본>'게시판 타입' 안내문구 (수정자:ellena)
					if($('body').hasClass('lang-ko')){
						$('#fitem_id_type').after("<div id='fitem_id_type_text' class='form-group row fitem' style='line-height:180%'><div class='col-md-3'></div><div class='col-md-9'><ul><li>일반 게시판: 모든 사용자가 글을 쓰고 읽을 수 있는 게시판입니다. 옵션을 선택하여 '답글', '비밀글', '공지' 기능 등을 활성화 할 수 있습니다.</li><li>공지 게시판: 강의실의 교수자, 조교가 글을 작성할 수 있는 게시판입니다. 학습자(학생)는 글을 읽을 수 있습니다. 일방향 정보전달에 적합합니다.</li><li>Q&A 게시판: 참여자 간의 질의응답을 위해 운영하는 게시판으로 비밀글을 작성할 수 있습니다. 비밀글은 작성자와 교수 및 조교만 읽기가 가능합니다.</li><li>그룹 게시판: 팀(그룹) 활동을 위한 개방/폐쇄형 게시판을 생성할 때 사용합니다.<br/>- 먼저, 강의실에 팀(팀 분류 및 팀) 생성이 필요합니다.<br/>- 본 페이지 하단 '기타 설정' 영역의  '팀 모드'에서 팀 분류를 선택합니다.</li><li>1:1 게시판: 각 학습자와 개별 의사소통을 위해 사용할 수 있는 게시판입니다.<br/>- (학습자) 게시글 목록에 본인이 작성한 게시글(답글, 댓글 포함)만 나타납니다.<br/>- 교수자 및 조교는 모든 학습자의 글을 목록에서 확인할 수 있습니다.</li><li>익명 게시판: 모든 참여자가 글을 작성할 때 '닉네임'을 입력하여 글을 쓸 수 있습니다.<br/>- 모든 익명 게시글은 작성자를 식별할 수 없습니다(교수자/관리자 포함).</li></ul></div></div>");
					} else {
						$('#fitem_id_type').after("<div id='fitem_id_type_text' class='form-group row fitem' style='line-height:180%'><div class='col-md-3'></div><div class='col-md-9'><ul><li>Default Board : All users are allowed to read and write posts. Capabilities such as ‘Reply’, ‘Hidden post’, ‘Announcement’ could be activated by option.</li><li>Notice Board : Tutors and teaching assistants from the course can write posts and students are allowed to read. Suitable for one-way communication.</li><li>Q&A Board : Q&As among the course participants are held in this board. Hidden posts are only visible for the author, tutors and teaching assistants. </li><li>Group Board : Used for making Open-ended/Closed-ended boards.<br/>- First, Groups must be made in the course.<br/>- On this page below, select a group in the ‘Group mode’ under [Common module settings].</li><li>1:1 Board : Used for one-to-one communications among each students.<br/>- (Students) Only their own posts, including replies and comments, are shown in the list of posts.<br/>- Tutors and teaching assistant can check all students’ posts.</li><li>Anonymous Board : All participants can use their ‘nicknames’ when posting.<br/>- All anonymous posts cannot identify authors, including tutors and administrators.</li></ul></div></div>");
					}
				}
			}

			// 모듈:투표
			if($('#page-mod-choice-mod').length > 0){ 
				$('#fitem_id_showunanswered').hide(); 	// 결과>'응답없는항목보기' (수정자:ellena)
				$('#fitem_id_includeinactive').hide(); 	// 결과>'비활동중/유보된사용자의응답포함' (수정자:ellena)
			}
            
        break;

        // =====================================================================
		// 학습활동 > 과제물/path-mod-assign
		// =====================================================================


		// =====================================================================
		// 학습활동 > 투표/path-mod-choice
		// =====================================================================


		// =====================================================================
		// 학습활동 > 설문조사/피드백/path-mod-feedback
		// =====================================================================
		case '/mod/feedback/view.php':
			if($('#page-mod-feedback-view').length > 0){
				if(url.hostname !== 'snowboard.sookmyung.ac.kr') {
					$('#page-container #page-content .page-content-container h2 a i.fa-search-plus').hide(); //돋보기
				}
			}	
		break;

		case '/mod/feedback/edit.php':
			if($('#page-mod-feedback-edit').length > 0){
				$('#page-content .singleselect .custom-select option[value=info]').remove(); 		// 활동에질문추가>'안내'(수정자:ellena)
				$('#page-content .singleselect .custom-select option[value=captcha]').remove(); 	// 활동에질문추가>'캡차'(수정자:ellena)
			}	
		break;

		case '/mod/feedback/edit_item.php':
			if($('#page-mod-feedback-edit_item').length > 0) {
				if($('body').hasClass('lang-ko')){
					// '문항라벨' 안내문구(수정자:ellena)
					$('#fitem_id_label').after('<div id="fitem_id_type_text" class="form-group row fitem"><div class="col-md-3"></div><div class="col-md-9"><ul><li>문항 라벨은 응답자에게 보이지 않습니다.</li><li>이후 문항에서 본 문항과 연결하여 분기처리 할 때 식별값으로 사용합니다.</li></ul></div></div>');
				} else {
					$('#fitem_id_label').after('<div id="fitem_id_type_text" class="form-group row fitem"><div class="col-md-3"></div><div class="col-md-9"><ul><li>Question labels are not visible to respondents.</li><li>Labels are used as identifiers when branching by connecting this question with subsequent ones.</li></ul></div></div>');
				}
				
				$('#id_hidenoselect').val('1').prop("selected", true); // '없음' 옵션 숨기기(수정자:ellena)
			}
		break;

		// =====================================================================
		// 학습활동 > 토론/path-mod-forum
		// =====================================================================
		case '/mod/forum/view.php':
			if($('#page-mod-forum-view').length > 0){
				$('#page-content td.p-0 .d-flex .dropdown').hide(); // 더보기 아이콘 (수정자:ellena)
			}
		break;

		case '/mod/forum/discuss.php': 
			if($('#page-mod-forum-discuss').length > 0) {
				$('#page-content .d-flex .pl-1 .discussion-settings-menu').hide(); // settings (수정자:ellena)
			}
		break;

	

		// =====================================================================
		// 학습활동 > 퀴즈/path-mod-quiz
		// =====================================================================
		
		// 문제은행 > 문제 유형 추가
		case '/question/question.php':

			// 문제은행: OX형, 선다형, 짝찾기형, 단답형, 수치형, 서술형, All-or-Nothing, 설명, 계산선다형, 계산형, 단순계산형, 무작위단답짝착기형, 빈칸선택하기, 이미지드래그앤드롭, 텍스트드래그앤드롭, 표지드래그앤드롭
			if($('#page-question-type-truefalse').length > 0 || $('#page-question-type-multichoice').length > 0 || $('#page-question-type-match').length > 0 || $('#page-question-type-shortanswer').length > 0 || $('#page-question-type-numerical').length > 0 || $('#page-question-type-essay').length > 0 || $('#page-question-type-multichoiceset').length > 0 || $('#page-question-type-description').length > 0 || $('#page-question-type-calculatedmulti').length > 0 || $('#page-question-type-calculated').length > 0 || $('#page-question-type-calculatedsimple').length > 0 || $('#page-question-type-randomsamatch').length > 0 || $('#page-question-type-gapselect').length > 0 || $('#page-question-type-ddimageortext').length > 0 || $('#page-question-type-ddwtos').length > 0 || $('#page-question-type-ddmarker').length > 0){
				$('#page #page-container #page-content .page-content-container h2 .btn-link').hide();	// '도움말'버튼 (수정자:ellena)
			}

			// 문제은행: OX형, 선다형, 짝찾기형, 단답형, 수치형, 서술형, All-or-Nothing, 설명, 계산선다형, 계산형, 단순계산형, 무작위단답짝착기형, 빈칸선택하기, 이미지드래그앤드롭, 텍스트드래그앤드롭, 표지드래그앤드롭
			if($('#page-question-type-truefalse').length > 0 || $('#page-question-type-multichoice').length > 0 || $('#page-question-type-match').length > 0 || $('#page-question-type-shortanswer').length > 0 || $('#page-question-type-numerical').length > 0 || $('#page-question-type-essay').length > 0 || $('#page-question-type-multichoiceset').length > 0 || $('#page-question-type-description').length > 0 || $('#page-question-type-calculatedmulti').length > 0 || $('#page-question-type-calculated').length > 0 || $('#page-question-type-calculatedsimple').length > 0 || $('#page-question-type-randomsamatch').length > 0 || $('#page-question-type-gapselect').length > 0 || $('#page-question-type-ddimageortext').length > 0 || $('#page-question-type-ddwtos').length > 0 || $('#page-question-type-ddmarker').length > 0){
				$('#fitem_id_idnumber').hide(); // ID number (수정자:ellena)
			}	

			// 문제은행: OX형, 선다형, 짝찾기형, 단답형, 수치형, 서술형, All-or-Nothing, 설명
			if($('#page-question-type-truefalse').length > 0 || $('#page-question-type-multichoice').length > 0 || $('#page-question-type-match').length > 0 || $('#page-question-type-shortanswer').length > 0 || $('#page-question-type-numerical').length > 0 || $('#page-question-type-essay').length > 0 || $('#page-question-type-multichoiceset').length > 0 || $('#page-question-type-description').length > 0){
				// 기본점수 (수정자:ellena)
				$('#fitem_id_defaultmark').removeClass('fitem required fitem_ffloat form-group-row-fitem').addClass('form-group row  fitem');
				$('#fitem_id_defaultmark .fitemtitle').addClass('col-md-3 col-form-label d-flex justify-content-md-end');
				$('#fitem_id_defaultmark .felement').addClass('col-md-9 form-inline felement');
			}

			// 문제은행: OX형, 선다형, 짝찾기형, 단답형, 수치형, All-or-Nothing, 계산선다형, 계산형, 단순계산형, 무작위단답짝착기형, 빈칸선택하기, 이미지드래그앤드롭, 텍스트드래그앤드롭, 표지드래그앤드롭
			if($('#page-question-type-truefalse').length > 0 || $('#page-question-type-multichoice').length > 0 || $('#page-question-type-match').length > 0 || $('#page-question-type-shortanswer').length > 0 || $('#page-question-type-numerical').length > 0 || $('#page-question-type-multichoiceset').length > 0 || $('#page-question-type-calculatedmulti').length > 0 || $('#page-question-type-calculated').length > 0 || $('#page-question-type-calculatedsimple').length > 0 || $('#page-question-type-randomsamatch').length > 0 || $('#page-question-type-gapselect').length > 0 || $('#page-question-type-ddimageortext').length > 0 || $('#page-question-type-ddwtos').length > 0 || $('#page-question-type-ddmarker').length > 0){
				$('#id_multitriesheader').hide(); 	// 다수시도 (수정자:ellena)
			}

			// 문제은행: 선다형, 짝찾기형, 계산선다형, 무작위단답짝착기형, 빈칸선택하기, 이미지드래그앤드롭, 텍스트드래그앤드롭, 표지드래그앤드롭
			if($('#page-question-type-multichoice').length > 0 || $('#page-question-type-match').length > 0 || $('#page-question-type-calculatedmulti').length > 0 || $('#page-question-type-randomsamatch').length > 0 || $('#page-question-type-gapselect').length > 0 || $('#page-question-type-ddimageortext').length > 0 || $('#page-question-type-ddwtos').length > 0 || $('#page-question-type-ddmarker').length > 0){
				// 정답여부에 대한 피드백>옵션 (수정자:ellena)
				$('#id_combinedfeedbackhdr .fcontainer .form-group .col-md-3').removeClass('col-md-3').addClass('col-md-3 col-form-label d-flex justify-content-md-end'); 
			}

			// 선다형
			if($('#page-question-type-multichoice').length > 0){
				$('#fitem_id_showstandardinstruction').hide(); 	// Show standard instructions (수정자:ellena)
			}

			// 서술형
			if($('#page-question-type-essay').length > 0){
				$('#fitem_id_attachmentsrequired').remove(); 	// 답안선택사항>'필요 첨부파일수' (수정자:ellena)
				$('#fitem_fgroup_id_filetypeslist').hide(); 	// 답안선택사항>'허용가능한 파일유형' (수정자:ellena)
				$('#id_graderinfoheader').hide(); 				// 채점자정보 (수정자:ellena)
			}

			// All-or-Nothing
			if($('#page-question-type-multichoiceset').length > 0){
				// 정답여부에 대한 피드백>옵션 (수정자:ellena)
				$('#id_overallfeedbackhdr .fcontainer .form-group .col-md-3').removeClass('col-md-3').addClass('col-md-3 col-form-label d-flex justify-content-md-end'); 
			}

		break;

		// =====================================================================
		// 학습활동 > 이콘텐츠/path-mod-econtents
		// =====================================================================
		

		// =====================================================================
		// 학습활동 > 위키/path-mod-wiki
		// =====================================================================
		
		// 위키:새 페이지
		case '/mod/wiki/create.php':
			if($('#page-mod-wiki-create').length > 0) {
				// 클리오 포맷 (수정자:ellena)
				$('input[id="id_pageformat_creole"]').hide();
				$('label[for="id_pageformat_creole"]').hide();
				$('#id_general .text-nowrap .initialism').eq(1).hide();

				// NWiki 포맷 (수정자:ellena)
				$('input[id="id_pageformat_nwiki"]').hide();
				$('label[for="id_pageformat_nwiki"]').hide();
				$('#id_general .text-nowrap .initialism').eq(2).hide();
			}
		break;

		// 위키:보기
		case '/mod/wiki/view.php':
			if($('#page-mod-wiki-view').length > 0){
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(3).hide(); // 구조 (수정자:ellena)
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(4).hide(); // 파일 (수정자:ellena)
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(5).hide(); // 관리 (수정자:ellena)
			}
		break;

		// 위키:편집
		case '/mod/wiki/edit.php':
			if($('#page-mod-wiki-edit').length > 0){
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(3).hide(); // 구조 (수정자:ellena)
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(4).hide(); // 파일 (수정자:ellena)
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(5).hide(); // 관리 (수정자:ellena)
			}
		break;

		// 위키:이력
		case '/mod/wiki/history.php':
			if($('#page-mod-wiki-history').length > 0){
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(3).hide(); // 구조 (수정자:ellena)
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(4).hide(); // 파일 (수정자:ellena)
				$('#page-content .page-content-container .nav-coursemos li.nav-item').eq(5).hide(); // 관리 (수정자:ellena)
			}
		break;

		// =====================================================================
		// 학습활동 > 채팅/path-mod-ubchat
		// =====================================================================
		

		// =====================================================================
		// 학습자료 > 폴더/path-mod-folder
		// =====================================================================
		

		// =====================================================================
		// 학습자료 > 페이지/path-mod-page
		// =====================================================================
		

		// =====================================================================
		// 문제은행
		// =====================================================================
		
	
		// =====================================================================
		// 성적부
		// =====================================================================
		
		
		// =====================================================================
		// 그룹
		// =====================================================================
		

		// =====================================================================
		// 유비온 플러그인들
		// =====================================================================
		
		
		// =====================================================================
		// 완전학습 탭 - '학습결과' 추가
		// =====================================================================

			
	}
	
	// *****************************************************************************
	// 국민대학교(운영)
	// *****************************************************************************
	if(url.hostname == 'ecampus9.kookmin.ac.kr' || url.hostname == 'ecampus.kookmin.ac.kr') { 
		
		// (Made By #ellena)
		switch (url.pathname){

			// 퀴즈
			case '/mod/quiz/index.php':
				if($('#page-mod-quiz-index').length > 0){

					//퀴즈 문항 일괄등록 버튼
					var lesson_url = new URL(document.location.href);
					var lesson_id = lesson_url.searchParams.get("id");
					var result_url = '/local/ubquestion/index.php?id='+lesson_id;
					$('#page-content .page-content-container .div-btn-add .btn-add').before('<a class="btn btn-primary btn-add" style="margin-bottom:15px; color:white;" href="'+ result_url +'"> 퀴즈 문항 일괄등록 </a> &nbsp'); 
					
				}
			break;
			
			// 퀴즈 - 응시
			case '/mod/quiz/attempt.php':
				if($('#page-mod-quiz-attempt').length > 0){
					// [다음] 버튼 여백
					$('#page-content .page-content-container .submitbtns').css('margin-bottom', '20%');	
					
					//우클릭 이벤트 방지
					$(document).on('contextmenu', function() {
						return false;
					});
					
					// control 키 방지
					function CtrlAlt() {
						if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
							return false;
						}
					}
					document.onkeydown = CtrlAlt;
	
					//복붙 이벤트 방지 
					$('#page-mod-quiz-attempt').on("cut copy paste",function(e) {
						e.preventDefault();
					});
				}
			break;			

			// 팀플평가 > 평가하기
			case '/mod/ubpeer/evaluation.php':
				if($('#page-mod-ubpeer-evaluation').length > 0){
					$('#page-content .page-content-container .ubpeer .form-validate .text-center').css('margin-bottom', '20%'); // [저장] 버튼 야백
				}
			break;			

			// 게시판
			case '/mod/ubboard/view.php':
				if($('#page-mod-ubboard-view').length > 0){
					$('#page-content .page-content-container .ubboard').css('margin-bottom', '20%'); // [검색] 버튼 여백

					var mainText = $('#page-content h2').text();
	
					if(mainText == '원격수업개선 학생 의견 접수'){
						$('#page-content .ubboard').before('<div style="padding: 19px; border: 1px solid #e0e0e0;background-color:white;">원격 수업에서 다음에 해당하는 수업이 있는 경우 알려주시면 확인하고 조치하겠습니다.<br/><ul><li style="font-weight:bold;">수업일 기준으로 사전 공지 없이 강의(강의영상, 화상강의 등)가 등록되지 않은 경우</li><li>강의 영상에 오류가 발생하는 경우 (재생 안됨, 음질 또는 화질 개선 필요)</li><li>기타 원격 수업에서 개선이 필요한 경우</li></ul><br/>※ 게시글에는 <span style="font-weight:bold;">교과목 정보(과목명, 분반, 담당교수명)와 해당 주차를 반드시 포함하여 작성</span>해주시기 바랍니다.<br/>※ 본 게시판의 게시글은 모두 비공개이며, 글 작성자와 시스템 관리자, 학사담당자만 내용 확인이 가능합니다.</div><br/>');
					}
				}
			break;	

			case '/course/modedit.php':
				// 모듈: 링크, 개요, 웹문서, 폴더, 위키, 채팅방, 화상강의, 팀플평가, 투표, 토론방, 과제, 게시판, 파일, 콘텐츠저작도구, 이러닝콘텐츠, 퀴즈
				if($('#page-mod-url-mod').length > 0 || $('#page-mod-label-mod').length > 0 || $('#page-mod-page-mod').length > 0 || $('#page-mod-folder-mod').length > 0 || $('#page-mod-wiki-mod').length > 0 || $('#page-mod-ubchat-mod').length > 0 || $('#page-mod-zoom-mod').length > 0 || $('#page-mod-ubpeer-mod').length > 0 || $('#page-mod-choice-mod').length > 0 || $('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0 || $('#page-mod-assign-mod').length > 0 || $('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0 || $('#page-mod-ubfile-mod').length > 0 || $('#page-mod-resource-mod').length > 0 || $('#page-mod-xncommons-mod').length > 0 || $('#page-mod-econtents-mod').length > 0 || $('#page-mod-quiz-mod').length > 0) {
					$('#id_availabilityconditionsheader').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 	// 접근제한
				}

	            // VOD
				if($('#page-mod-vod-mod').length > 0){

					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607307&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/cGed7y45jzY" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
					$('#id_uploadcontentbtn').hide(); // 동영상 업로드

					// #Jeenlee
					$('#id_selectcontentbtn').on('click',function(){
						$('#vod-hd').parent().parent().parent().on('shown.bs.modal', function (e) {
							$('#vod-bd .vod_list .vod_upload .upload .btn-upload').hide();
						});
					})
				}			

				// 링크
				if($('#page-mod-url-mod').length > 0){

					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607304&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/I4Zf7ZIJoNY" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					
					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_general").after(objOriginal);
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

				// 개요
				if($('#page-mod-label-mod').length > 0){
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/MunT2YZgR34" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607301&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_generalhdr").after(objOriginal);

					$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 웹문서
				if($('#page-mod-page-mod').length > 0){
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/R0JLwy4qto4" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607300&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_contentsection").after(objOriginal);
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 이러닝콘텐츠
				if($('#page-mod-econtents-mod').length > 0) {
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607305&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="#"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');

					$('#id_modstandardgrade').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //성적
					
					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_modstandardgrade").after(objOriginal);

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 콘텐츠저작도구
				if($('#page-mod-xncommons-mod').length > 0) {
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607303&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/fJjevxIiBmQ" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');

					$('#id_modstandardgrade').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //성적

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_modstandardgrade").after(objOriginal);

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 파일
				if($('#page-mod-resource-mod').length > 0 || $('#page-mod-ubfile-mod').length > 0) {
					$('#id_optionssection').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //화면구성
				}
				if($('#page-mod-ubfile-mod').length > 0) {
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607302&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/HzxoZMGC_xM" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');

					// $('#id_display_4').attr('checked', false); 	//표시형식>자동다운로드
					// $('#id_display_6').attr('checked', true); 	//표시형식>팝업창으로

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_optionssection").after(objOriginal);

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수

					// 화면구성 > 표시 형식
					var fileText = '';
					fileText = $('#id_optionssection #fgroup_id_displays .col-md-9 .form-check .form-check-label[for="id_display_6"]').text().replace(' 팝업창으로 (문서 변환 가능 확장자 : hwp, doc, docx, xls, xlsx, ppt, pptx, pdf, html, htm)','팝업창으로');
					$('#id_optionssection #fgroup_id_displays .col-md-9 .form-check .form-check-label[for="id_display_6"]').text(fileText);
				}

				// 폴더
				if($('#page-mod-folder-mod').length > 0) {

					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607306&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/25PAcAvgdcE" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_content").after(objOriginal);

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

				// 게시판
				if($('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0){

					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607308&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/KCUllu16Kr0" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					
					$('#id_attachment_header').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //첨부파일

					// 카테고리 순서 변경
					var objOriginal = $("#id_board_setting").clone();
					$("#id_board_setting").remove();
					$("#id_general").after(objOriginal);
					var objOriginal2 = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_attachment_header").after(objOriginal2);

					$('#id_completion').val('0').prop("selected", true); // 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 			 // 활동이수 
				}

				// 과제
				if($('#page-mod-assign-mod').length > 0){
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/3eNahcRKg84" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607312&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');

					// 성적부>카테고리
					if((url.search.indexOf('?add=assign')>-1) || (url.search.indexOf('&add=assign')>-1)){	
						$('#id_submitbutton').click(function(){
							if($('#id_grade_modgrade_type option:selected').text() == '점수'){
								if($('#id_gradecat option:selected').text() == '범주 없음'){ 
									alert('"성적 > 카테고리 선택"에서 성적 카테고리를 반드시 선택해주세요. 카테고리가 없으면 "성적부 > 성적항목 관리"에서 카테고리를 먼저 생성 후 이용하세요.');
									return false;
								} else if($('#id_gradecat option:selected').text() == 'Uncategorised'){ 
									alert("Please select a category and register it. If you don't have a category, create a category first in the grade report and use it.");
									return false;
								}	
							}					
						});
					}

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
					// 학교 요청에 의해 과제모듈만 활동이수 보이도록 처리
					// $('#id_activitycompletionheader').hide(); 				// 활동이수

					$('#id_notifications').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 		// 알림 
					$('#id_modstandardgrade').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 	// 성적
					// $('#id_duedate_minute').val('59').prop("selected", true); 	 // 종료일시 
					// $('#id_cutoffdate_minute').val('59').prop("selected", true); // 제출차단일시 
					// $('#fitem_id_advancedgradingmethod_submissions').hide(); 	 // 채점 방식
					$('#id_grade_modgrade_type option[value=scale]').remove(); 	 //성적>유형>척도 
					setTimeout(function(){$('#id_modstandardgrade .moreless-actions .felement').remove(); }, 3000); //성적>더보기
					// $('#fitem_id_gradepass').hide(); 	// 성적>'통과점수' 

					// 제출기간설정 > 시작일시전부터 설명 표시
					$('#id_alwaysshowdescription').hide();
					$('#id_availability .fcontainer .form-group .col-md-9 .form-check label').eq(4).hide();
					$('#page #page-container #page-content .page-content-container .form-check .text-nowrap .btn-link').hide();
					$('#fitem_id_blindmarking').hide(); 	// 성적 > 블라인드 채점
					$('#fitem_id_hidegrader').hide();		// 성적 > 학습자에게 평가자 숨기기
					$('#fitem_id_markingworkflow').hide(); 	// 성적 > 평가(채점) 진행상태 사용 

					$('#id_submissionsettings').hide(); 	// 제출설정
									
					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_availability").after(objOriginal);
				}

				// 설문조사
				if($('#page-mod-feedback-mod').length > 0){ 
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="#"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607311&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					$('#id_timinghdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //이용기간 설정 
					$('#id_feedbackhdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //설문조사 방법 
					$('#id_aftersubmithdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //설문조사 제출후
					$('#id_availabilityconditionsheader').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //접근제한 

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_timinghdr").after(objOriginal);

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 위키
				if($('#page-mod-wiki-mod').length > 0){ 
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/U_oCpWE0YEo" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607310&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					
					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_general").after(objOriginal);

					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 채팅방
				if($('#page-mod-ubchat-mod').length > 0){ 

					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607309&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2').append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://www.youtube.com/embed/02Nop5ZYgR4" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_chat_setting").after(objOriginal);

					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 투표
				if($('#page-mod-choice-mod').length > 0){
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="#"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607314&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					// $('#id_timeopen_enabled').attr('checked', true); 	//이용기간설정 > 시작일시
					// $('#id_timeclose_enabled').attr('checked', true);	//이용기간설정 > 종료일시
					$('#id_availabilityhdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //이용기간설정 
					$('#id_resultshdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); // 결과

					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_availabilityhdr").after(objOriginal);

					$('#id_completion').val('2').prop("selected", true); // 활동이수>'이수과정추적' 
					// 활동이수>'열람필수' 
					$('#id_completionview').attr('checked', false);	
					$('#id_completionusegrade').attr('checked', true);
					$('#id_activitycompletionheader').hide(); 	// 활동이수
				}

				// 토론방
				if($('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0){
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="#"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607315&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					$('#id_grade_forum_header').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); //성적
					$('#id_grade_forum_modgrade_type option[value=scale]').remove(); // 성적>유형>척도
					$('#id_advancedgradingmethod_forum option[value=guide]').remove(); // 성적>채점방식>채점가이드
					$('#fitem_id_gradepass_forum').remove(); //성적>통과점수

					// 성적부>카테고리
					if((url.search.indexOf('?add=forum')>-1)|| (url.search.indexOf('&add=forum')>-1)){	
						$('#id_submitbutton').click(function(){
							if($('#id_grade_forum_modgrade_type option:selected').text() == '점수'){
								if($('#id_gradecat_forum option:selected').text() == '범주 없음'){ 
									alert('"성적 > 카테고리 선택"에서 성적 카테고리를 반드시 선택해주세요. 카테고리가 없으면 "성적부 > 성적항목 관리"에서 카테고리를 먼저 생성 후 이용하세요.');
									return false;
								} else if($('#id_gradecat_forum option:selected').text() == 'Uncategorised'){ 
									alert("Please select a category and register it. If you don't have a category, create a category first in the grade report and use it.");
									return false;
								}	
							}					
						});	
					}
					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_general").after(objOriginal);		
					
					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 퀴즈
				if($('#page-mod-quiz-mod').length > 0){ 
					$('#fitem_id_overduehandling').hide();      // 퀴즈기간설정>'응시중 제한시간 초과시'
					$('#fitem_id_preferredbehaviour').hide();	// 실시방식>'퀴즈제시방식'
					$('#fitem_id_gradepass').hide(); 			// 성적>'통과점수'
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="#"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607313&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					
					if((url.search.indexOf('?add=quiz')>-1)|| (url.search.indexOf('&add=quiz')>-1)){	
						// 성적부>카테고리
						
						$('#id_submitbutton').click(function(){
							if($('#id_gradecat option:selected').text() == '범주 없음'){ 
								alert('"성적 > 카테고리 선택"에서 성적 카테고리를 반드시 선택해주세요. 카테고리가 없으면 "성적부 > 성적항목 관리"에서 카테고리를 먼저 생성 후 이용하세요.');
								return false;
							} else if($('#id_gradecat option:selected').text() == 'Uncategorised'){ 
								alert("Please select a category and register it. If you don't have a category, create a category first in the grade report and use it.");
								return false;
							}					
						});
					}

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_completionusegrade').attr('checked', true);		// 활동이수>'성적필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 

					$('#id_timing').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 			//퀴즈기간설정
					$('#id_modstandardgrade').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 	//성적
					$('#id_layouthdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible');			//퀴즈서식
					$('#id_interactionhdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 	//실시방식
					$('#id_reviewoptionshdr').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 	//피드백표시
					setTimeout(function(){$('#id_timing .moreless-actions .felement').remove(); }, 3000);			//퀴즈기간설정>더보기
					setTimeout(function(){$('#id_interactionhdr .moreless-actions .felement').remove(); }, 3000);	//실시방식>더보기										

					// 퀴즈서식>한 페이지 당 문제 개수
					for(var i=21; i<51; i++){
						$('#id_questionsperpage option[value='+ i +']').remove();
					}
			
					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_timing").after(objOriginal);	
				}
				
				// 팀플평가
				if($('#page-mod-ubpeer-mod').length > 0) {
					// 카테고리 순서 변경
					var objOriginal = $("#id_availabilityconditionsheader").clone();
					$("#id_availabilityconditionsheader").remove();
					$("#id_time_setting").after(objOriginal);

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionevaluation').attr('checked', true);	// 활동이수>'동료평가참여' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 화상강의
				if($('#page-mod-zoom-mod').length > 0) {
					// 동영상 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="#"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/video.png" alt class="ml-2"></a>');
					// 문서 매뉴얼
					$('#page-container #page-content .page-content-container h2 .btn').after('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://ecampus.kookmin.ac.kr/local/ubdoc/?id=607316&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/doc.png" alt class="ml-2"></a>');
					$('#fgroup_id_meetingoptions .col-md-9 label').hide(); // 기본>회의옵션>허용
					$('#id_general .fcontainer .form-group .col-md-9 .form-check label').eq(7).hide(); // 기본>회의옵션>인증된사용자만

					// 기본>회의옵션>대기실활성화
					$('#id_general .fcontainer .form-group .col-md-9 .form-check label').eq(6).removeClass('col-md-9 checkbox').addClass('col-md-9 form-inline felement');
					var objOriginal2 = $('#id_general .fcontainer .form-group .col-md-9 .form-check label').eq(6).clone();
					$('#id_general .fcontainer .form-group .col-md-9 .form-check label').eq(6).remove();
					$("#fgroup_id_meetingoptions .col-md-3").after(objOriginal2);

					// 카테고리 순서 변경
					// var objOriginal = $("#id_availabilityconditionsheader").clone();
					// $("#id_availabilityconditionsheader").remove();
					// $("#id_general").after(objOriginal);

					$('#fitem_id_duration').nextAll().hide() 	//일정예약 > 재접속 하위메뉴 
					$('#id_security .fcontainer .form-group').last().hide();	//보안 > '보안 섹션 표시'
					$('#id_media .fcontainer .form-group').last().hide();	//미디어 > '미디어 섹션 표시'

					$('#id_availabilityconditionsheader').removeClass('clearfix collapsible').addClass('clearfix collapsible collapsed'); 	//접근제한
					$('#id_progress_management').removeClass('clearfix collapsible').addClass('clearfix collapsible collapsed'); 	//진도관리
					$('#id_schedule').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 	//일정예약

					$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

			break;
			
			case '/grade/edit/tree/index.php' :
				if($('#page-grade-edit-tree-index').length > 0) {
					
					//$(".d-inline-block").remove();
					$('#grade_edit_tree_table tbody tr').each(function(key, val){
						var categoryTitle = $(this).find('h4').text();
						var itemTitle = $(this).find('.gradeitemheader').text();
						if(categoryTitle != ""){
							if(categoryTitle.includes("출석")){
								$(this).find(".menubar").remove();
							}
						}
						if(itemTitle != ""){
							if(itemTitle.includes("출석")){
								$(this).find(".menubar").remove();
							}
						}
						
					});
				}
			break;

			case '/mod/ubboard/write.php' :
				if($('#page-mod-ubboard-view').length > 0) {
					//공유된 글 수정여부
					$('#id_shareedit option[value="0"]').attr('selected','selected');
				}
			break;

			case '/local/ubpage/course/management/logs.php' :
				if($('#page-ubpage-course-index').length > 0) {
					//강좌기록 - 활동상태 안내문구
					$('#page-content .tab-main-content .form-group').eq(1).after('<div style="margin-bottom:1rem;">※활동 로그 설명<br/>- 보기: 페이지 접근 시 발생하는 로그<br/>- 읽기: 게시글이나 토론글 등을 클릭했을 때 발생하는 로그<br/>- 다운로드: 클릭하여 다운로드 했을 때 발생하는 로그<br/>- 갱신: 서버에서 호출되는 정보를 업데이트할 때 발생하는 로그<br/>- 클릭: 화상강의 회의 시작하기 버튼 클릭했을 때 발생하는 로그</div>');
				}
			break;
			case '/user/edit.php' :
				if($('#page-user-edit').length > 0) {
					$("#id_firstname").attr('disabled',true);
					$("#id_lastname").attr('disabled',true);
					$("#id_email").attr('disabled',true);
				}
			break;
		}

	}

	// *****************************************************************************
	// 포항공과대학교(운영)
	// *****************************************************************************
	if(url.hostname == 'plms.postech.ac.kr') {

		// 웹엑스 숨김처리		
		if($('#module-activities li').eq(1).text() == 'WebEx Meeting추가'){
			$('#module-activities li').eq(1).hide();
		}
			
		// header 공통처리_#Jeenlee
		if($('#page-header .user-menus .nav-user .nav-item-userinfo .btn-userinfo .userpicture').attr('alt') !== undefined){
			var userHeadertxt = '';
			if($('body').hasClass('lang-en')){
				userHeadertxt = $('#page-header .user-menus .nav-user .nav-item-userinfo .btn-userinfo .userpicture').attr('alt').replace('Picture of ','');
			} else if($('body').hasClass('lang-ko')){
				userHeadertxt = $('#page-header .user-menus .nav-user .nav-item-userinfo .btn-userinfo .userpicture').attr('alt').replace(' 사진','');
			} else if($('body').hasClass('lang-ja')){
				userHeadertxt = $('#page-header .user-menus .nav-user .nav-item-userinfo .btn-userinfo .userpicture').attr('alt').replace('画像 ','');
			} else if($('body').hasClass('lang-zh_cn')){
				userHeadertxt = $('#page-header .user-menus .nav-user .nav-item-userinfo .btn-userinfo .userpicture').attr('alt').replace('的头像','');
			}
			$('#page-header .user-menus .nav-user .nav-item-userinfo .btn-userinfo .userpicture').before('<label style="color:white;">'+userHeadertxt+' &nbsp; &nbsp;</label>');
		}
		if($('#page-site-index').length > 0){
			// 강좌전체보기
			$('#page-content .course-lists .course-option .filter .custom-select option[value="IR"]').hide(); //비교과 강좌
		}

		// (Made By #ellena)
		if(url.pathname.includes("/local/ubion/index.php")){
			// 관리자모드 메뉴 명 공통처리_#ellena

			// 비정규 강좌
			var irregularrtxt = '';
			irregularrtxt = $('#coursemos-menu .menu-container .menu li .dropmenu .menu-text').eq(4).text().replace(' 비교과 과정','비정규 강좌');
			$('#coursemos-menu .menu-container .menu li .dropmenu .menu-text').eq(4).html('&nbsp'+irregularrtxt);

			// 오픈강좌 관리
			var irregularrtxt2 = '';
			irregularrtxt2 = $('#coursemos-content .content-breadcrumb h2').text().replace('비정규 강좌 관리', '오픈강좌 관리');
			$('#coursemos-content .content-breadcrumb h2').html('&nbsp'+irregularrtxt2);

			var irregularrtxt3 = '';
			irregularrtxt3 = $('#coursemos-content .content-breadcrumb .breadcrumb li').eq(1).text().replace('비정규 강좌 관리', '오픈강좌 관리');
			$('#coursemos-content .content-breadcrumb .breadcrumb li').eq(1).html('&nbsp'+irregularrtxt3);			

			var extraCurriculumtxt = '';
			extraCurriculumtxt = $('#coursemos-menu .menu-container .menu li .menu-text').eq(21).text().replace(' 비정규 강좌 관리','오픈강좌 관리');
			$('#coursemos-menu .menu-container .menu li .menu-text').eq(21).html('&nbsp'+extraCurriculumtxt);

			// 지식커뮤니티
			var knowledgetxt = '';
			knowledgetxt = $('#coursemos-menu .menu-container .menu li .menu-text').eq(29).text().replace(' e-Class관리','지식커뮤니티');
			$('#coursemos-menu .menu-container .menu li .menu-text').eq(29).html('&nbsp'+knowledgetxt);

			var knowledgetxt2 = '';
			knowledgetxt2 = $('#coursemos-content .content-breadcrumb h2').text().replace('e-Class관리', '지식커뮤니티');
			$('#coursemos-content .content-breadcrumb h2').html('&nbsp'+knowledgetxt2);
			
			var knowledgetxt3 = '';
			knowledgetxt3 = $('#coursemos-content .content-breadcrumb .breadcrumb li').eq(1).text().replace('e-Class관리', '지식커뮤니티');
			$('#coursemos-content .content-breadcrumb .breadcrumb li').eq(1).html('&nbsp'+knowledgetxt3);	
			
		}
		
		switch (url.pathname){

			case '/login/index.php' :
				$('#region-main .login-container .col-loginbox .col-loginbox-container .col-login .d-flex .remember-find').remove(); // 사용자 아이디...삭제
			break;

			case '/local/ubassistant/' :
				if($('#page-my-courses').length > 0) {
					// 강좌코드 숨김
					$('#keyword option[value=idnumber]').hide();
				}
			break;

			case '/course/modedit.php':
				// 과제
				if($('#page-mod-assign-mod').length > 0) {
					$('#id_grade_modgrade_type option[value=scale]').remove(); //성적>유형>척도

					if($('body').hasClass('lang-ko')){
						// 제출 유형 > 제출가능한 최대 파일 수
						$('#fitem_id_assignsubmission_file_maxfiles').after('<div class="form-group row fitem" style="color:red;"><div class="col-md-3"></div><div class="col-md-9">* 유사도 검사 시, 파일 개수 1개만 허용해주세요.</div></div>');
					} else {
						$('#fitem_id_assignsubmission_file_maxfiles').after('<div class="form-group row fitem" style="color:red;"><div class="col-md-3"></div><div class="col-md-9">* When detecting plagiarism, allow only 1 file.</div></div>');
					}

					// 팀제출설정 > 팀모드
					$('#fitem_id_groupmode').hide();

					// 유사도 검사 > 안내문구 (수정자 : haileyy)
					$("#fgroup_id_contentselector2").after('<div class="form-group row fitem" style="color:red;font-weight:bold;"><div class="col-md-3"></div><div class="col-md-9">※ 최초 과제 생성 시 유사도 검사를 미설정하면, 추후 해당 과제에 유사도 검사 다시 사용 불가능<br>※ 참고) PLMS에 연동된 표절검사 솔루션은 검사 가능한 파일크기가 50MB 까지 이며, 첨부파일 용량이 50MB를 초과할 경우 \'검사불가\'로 표시됩니다.</div></div>');
				}

				// 과제 - 모듈 추가 시
				if((url.search.indexOf('?add=assign')>-1) || (url.search.indexOf('&add=assign')>-1)){	
					if($('#page-mod-assign-mod').length > 0) {
						$('#id_gradingduedate_enabled').attr('checked',false); // 제출기간설정 > 채점일시
					}
				}

				// 퀴즈
				if($('#page-mod-quiz-mod').length > 0) {
					$('#id_overduehandling option[value=graceperiod]').remove(); //퀴즈 기간 설정 > 시간제한 초과시 > 유예기간내 제출버튼
					$('#id_overduehandling option[value=autoabandon]').remove(); //퀴즈 기간 설정 > 시간제한 초과시 > 종료 전 제출하지 않은
					$('#id_overallfeedbackhdr').hide(); // 퀴즈점수에 따른 피드백
				}

				// 토론방
				if($('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0){
					$('#id_grade_forum_modgrade_type option[value=scale]').remove(); //성적>유형>척도	
				}		

				// 파일
				if($('#page-mod-ubfile-mod').length > 0) {
					$('#id_showdescription').attr('checked', true); //기본 > 메인화면에 설명보이기
				}

				// 동영상
				if($('#page-mod-vod-mod').length > 0) {
					$('#id_showdescription').attr('checked', true); //기본 > 메인화면에 설명보이기
					//동영상 선택 하단 문구 추가
					$('#fgroup_id_contentselector .col-md-9 .w-100').after('<div style="margin-top:10px;color:red;font-weight:bold;">주의) 최초 1회 등록 후, 동영상을 교체할 경우 ‘온라인 출석부’의 데이터가 삭제되어 복구되지 않습니다.</div>');
				}

				// 화상강의(줌)
				if($('#page-mod-zoom-mod').length > 0) {
					$('#id_duration_timeunit option[value=604800]').hide(); //주
					$('#id_duration_timeunit option[value=86400]').hide(); 	//일
					$('#id_duration_timeunit option[value=1]').hide(); 		//초
					$('#id_useattend').val('0').prop("selected", true); //진도관리 - 온라인출석체크 옵션 '아니오' 로 고정
					$('#id_progress_management').hide(); //진도 관리
				}

				// 화상강의(웹엑스)
				if((url.search.indexOf('?add=webexactivity')>-1) || (url.search.indexOf('&add=webexactivity')>-1)){	// 모듈 추가 시
					if($('#page-mod-webexactivity-mod').length > 0) {
						$('#id_studentdownload').attr('checked',false); //추가설정 > 화상강의 녹화 파일 다운로드 허용
					}
				}

				// 게시판 - 공지게시판
				if(url.search.indexOf('?update') == -1){	// 업데이트 제외
					if($('#page-mod-ubboard-notice').length > 0) {
						$('#id_mailsend option[value=1]').attr('selected',true); 	//메일 전송 허용
						$('#id_sms option[value=1]').attr('selected',true); 		//SMS 전송 허용
					}
				}
			break;

			case '/group/index.php' :
				if($('#page-group-index').length > 0) {
					$('#page-content .page-content-container h3').hide(); //팀설정 > 팀
				}
			break;

			case '/group/overview.php' :
				if($('#page-group-overview').length > 0) {
					$('#page-content .page-content-container h3').hide(); //팀설정 > 개요
				}
			break;

			case '/local/ubion/user/index.php' :
				if($('#page-local-ubion-user-index').length > 0) {
					// 과거강좌 > 강좌코드/분반코드
					// $('#page-container .table-responsive table.table-coursemos tr th.c3').hide();
					// $('#page-container .table-responsive table.table-coursemos tbody tr td.c3').hide();
				}
			break;

			case '/local/ubsend/sms/send.php' :
				if($('#page-local-ubsend-sms-send').length > 0) {
					// SMS보내기 > SMS전송 - 발신번호
					if($('body').hasClass('lang-ko')){
						$('#form-send .form-group .col-sm-9 .row .col-lg-5 .mb-2').after('<div style="color:red;"> 발신번호 예시) 000-0000-0000(○), 01011119999(○), 279-0000(X)</div>');
					} else {
						$('#form-send .form-group .col-sm-9 .row .col-lg-5 .mb-2').after('<div style="color:red;"> Caller ID example) 000-0000-0000(○), 01011119999(○), 279-0000(X)</div>');
					}
					
					// 발신번호 정규식
					$("#form-send .form-group .offset-sm-3 .btn").click(function() {
						var inputtedPhoneNumber = $('#page-content #form-send .form-group .col-sm-9 .row .col-lg-5 .from input[name="sms_from"]').val();
						var phoneNumberRegex = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
						var repleaceTest = inputtedPhoneNumber.replaceAll('-','');

						if(!phoneNumberRegex.test(repleaceTest)) {
							alert("발신번호를 올바른 형식으로 입력하세요.");
							return false;
						}
					});
                }
			break;
			case '/mod/quiz/view.php':
				if($('#page-mod-quiz-view').length > 0){
					// 퀴즈편집 버튼 추가
					if($('#page-content .page-content-container .quizattempt .quizstartbuttondiv .btn-txt').text() == '바로 퀴즈에 응시' && $('#instance-20-header').text() == '고급 설정' ) {
						var lesson_id = $.GET('id');
						var result_url = '/mod/quiz/edit.php?cmid='+lesson_id;
						$('#page-content .page-content-container .quizattempt .quizstartbuttondiv').after('<div class="singlebutton"><a class="btn btn-secondary" href="'+ result_url +'">퀴즈 편집</a></div>');
					}
				}
			break;
			case '/mod/feedback/edit_item.php':
				//설문조사 > 설문편집 > 선다형/선다형(등급) > 정렬
				if(url.search.indexOf('?cmid=')>-1){	
					$('#id_horizontal option[value=1]').prop('selected', true);
				}
			break;
			case '/mod/quiz/attempt.php':
				if($('#page-mod-quiz-attempt').length > 0){
					// function CtrlAlt() {
                    //     if ((event.ctrlKey || event.metaKey) && event.keyCode == 90) {
					// 		// e.preventDefault();
					// 		console.log(event)
					// 		return false;
                    //     }
					// }
					// document.onkeydown = CtrlAlt;
					
				}
            break;
			case '/mod/quiz/report.php':
				// 수동채점
				if((url.search.indexOf('&grade=needsgrading')>-1) || (url.search.indexOf('&grade=manuallygraded')>-1) || (url.search.indexOf('&grade=all')>-1)){
					$('#page-header').removeClass('fixed-top'); // fixed-top 요소 제거
				}
			break;

			case '/local/ubion/course/syllabusV.php':
				// 강의계획서
				if($('#page-local-ubion-course-syllabusV').length > 0){
					$('#page-container .local-ubion-course-syllabus .card-body').removeClass('card');  // card 요소 제거
				}
			break;

			case '/local/ubion/course/lists.php':
				if($('#page-local-ubion-course-lists').length > 0){
					// 개설과목조회 언어변경 버튼 추가
					var url = window.location.href;

					if($('body').hasClass('lang-en')){
						if(url.includes('lang=')) {
							url = url.slice(0, -8);
						}
						if(url.includes('?year=')){
							var result_url = url +'&lang=ko';
							$("#page-content .page-content-container .local-ubion-course-lists .card .btn").after('<a href="'+ result_url +'"><div class="btn btn-default ml-1" style="background-color: #ca0464; color:white">한국어(ko)</div></a>');	
						}else{
							var result_url = url +'?lang=ko';
							$("#page-content .page-content-container .local-ubion-course-lists .card .btn").after('<a href="'+ result_url +'"><div class="btn btn-default ml-1" style="background-color: #ca0464; color:white">한국어(ko)</div></a>');	
						}
					} 
					
					else if($('body').hasClass('lang-ko')){
						if(url.includes('lang=')) {
							url = url.slice(0, -8);
						}
						if(url.includes('?year=')){
							var result_url = url +'&lang=en';
							$("#page-content .page-content-container .local-ubion-course-lists .card .btn").after('<a href="'+ result_url +'"><div class="btn btn-default ml-1" style="background-color: #ca0464; color:white">English(en)‎</div></a>');
						}else{
							var result_url = url +'?lang=en';
							$("#page-content .page-content-container .local-ubion-course-lists .card .btn").after('<a href="'+ result_url +'"><div class="btn btn-default ml-1" style="background-color: #ca0464; color:white">English(en)</div></a>');	
						}
					}
				}
			break;

			case '/local/ubassessment/consulting.php':
				if($('#page-local-ubassessment-consulting').length > 0){
					// 자가진단 > 기본설정 > 수신자 > 수동입력 숨김
					$('#fgroup_id_touserinfo .align-items-center label.form-check-inline').eq(1).hide();
					$('#id_touseremail').hide();	
				}
			break;

			case '/user/edit.php':
			case '/local/ubion/user/edit.php':
				if($('#page-user-edit').length > 0){
					// 사진 추가
					$('#fitem_id_imagefile').hide();
					// 삭제
					$('#id_moodle_picture .fcontainer .form-group').eq(1).hide();
				}
			break;
			case '/local/ubonattend/my_status.php':
				//온라인출석부 - 출석상태
				if($('#page-local-ubonattend-index').length > 0){
					$('#page-content .table-responsive ul li.mt-2').hide();
				}
			break;
			case '/mod/assign/view.php':
				//과제 - 보기
				if($('#page-mod-assign-editsubmission').length > 0){
					$('.copykiller_disclosure').append('<div style="color:red;font-weight:bold;">참고) PLMS에 연동된 표절검사 솔루션은 검사 가능한 파일크기가 50MB 까지 이며, 첨부파일 용량이 50MB를 초과할 경우 \'검사불가\'로 표시됩니다.</div>');
				}
			break;
		}
	}

	// *****************************************************************************
	// 광주대학교(개발)
	// *****************************************************************************
	if(url.hostname == 'gjulms.moodler.kr') { 
		
		// (Made By #ellena)
		switch (url.pathname){
	
			case '/course/modedit.php':
	            // VOD
				if($('#page-mod-vod-mod').length > 0){
					if((url.search.indexOf('?add=vod')>-1) || (url.search.indexOf('&add=vod')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}			

				// 링크
				if($('#page-mod-url-mod').length > 0){
					if((url.search.indexOf('?add=url')>-1) || (url.search.indexOf('&add=url')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
						$('#id_activitycompletionheader').hide(); 				// 활동이수
					}
				}

				// 개요
				if($('#page-mod-label-mod').length > 0){
					if((url.search.indexOf('?add=label')>-1) || (url.search.indexOf('&add=label')>-1)){
						$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 웹문서
				if($('#page-mod-page-mod').length > 0){
					if((url.search.indexOf('?add=page')>-1) || (url.search.indexOf('&add=page')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 이러닝콘텐츠
				if($('#page-mod-econtents-mod').length > 0) {
					if((url.search.indexOf('?add=econtents')>-1) || (url.search.indexOf('&add=econtents')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
						$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 콘텐츠저작도구
				if($('#page-mod-xncommons-mod').length > 0) {
					if((url.search.indexOf('?add=xncommons')>-1) || (url.search.indexOf('&add=xncommons')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
						$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				//파일
				if($('#page-mod-ubfile-mod').length > 0) {
					if((url.search.indexOf('?add=ubfile')>-1) || (url.search.indexOf('&add=ubfile')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
						$('#id_activitycompletionheader').hide(); 				// 활동이수
					}
				}

				// 폴더
				if($('#page-mod-folder-mod').length > 0) {
					if((url.search.indexOf('?add=folder')>-1) || (url.search.indexOf('&add=folder')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
						$('#id_activitycompletionheader').hide(); 				// 활동이수
					}
				}

				// 과제
				if($('#page-mod-assign-mod').length > 0){
					if((url.search.indexOf('?add=assign')>-1) || (url.search.indexOf('&add=assign')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
						$('#id_activitycompletionheader').hide(); 				// 활동이수
					}
				}

				// 설문조사
				if($('#page-mod-feedback-mod').length > 0){ 
					if((url.search.indexOf('?add=feedback')>-1) || (url.search.indexOf('&add=feedback')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 위키
				if($('#page-mod-wiki-mod').length > 0){ 
					if((url.search.indexOf('?add=wiki')>-1) || (url.search.indexOf('&add=wiki')>-1)){
						$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 채팅방
				if($('#page-mod-ubchat-mod').length > 0){ 
					if((url.search.indexOf('?add=ubchat')>-1) || (url.search.indexOf('&add=ubchat')>-1)){
						$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적' 
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 투표
				if($('#page-mod-choice-mod').length > 0){
					if((url.search.indexOf('?add=choice')>-1) || (url.search.indexOf('&add=choice')>-1)){
						$('#id_completion').val('2').prop("selected", true); // 활동이수>'이수과정추적' 
						// 활동이수>'열람필수' 
						$('#id_completionview').attr('checked', false);	
						$('#id_completionusegrade').attr('checked', true);
						$('#id_activitycompletionheader').hide(); 	// 활동이수
					}
				}

				// 토론방
				if($('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0){
					if((url.search.indexOf('?add=forum')>-1) || (url.search.indexOf('&add=forum')>-1)){
						$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 퀴즈
				if($('#page-mod-quiz-mod').length > 0){ 
					if((url.search.indexOf('?add=quiz')>-1) || (url.search.indexOf('&add=quiz')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
						$('#id_completionusegrade').attr('checked', true);		// 활동이수>'성적필수'
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}
				
				// 팀플평가
				if($('#page-mod-ubpeer-mod').length > 0) {
					if((url.search.indexOf('?add=ubpeer')>-1) || (url.search.indexOf('&add=ubpeer')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionevaluation').attr('checked', true);	// 활동이수>'동료평가참여' 
						$('#id_activitycompletionheader').hide(); 				// 활동이수 
					}
				}

				// 화상강의
				if($('#page-mod-zoom-mod').length > 0) {
					$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
					$('#id_modzoomcompletion').hide(); 						// 이수설정
				}

				// 게시판
				if($('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0){
					if((url.search.indexOf('?add=ubboard')>-1) || (url.search.indexOf('&add=ubboard')>-1)){
						$('#id_completion').val('0').prop("selected", true); // 활동이수>'이수과정추적' 
						$('#id_activitycompletionheader').hide(); 			 // 활동이수 
					}
				}
			break;

			case '/local/ubion/course/setting.php':
				if($('#page-local-ubion-course-setting').length > 0){
					// 오프라인 출석부
					// $('#fitem_id_offline').hide();
				}
			break;
		}

	}

	// *****************************************************************************
	// 광주대학교(운영)
	// *****************************************************************************
	if(url.hostname == 'elearn.gwangju.ac.kr') { 
		if($('#page-site-index').length > 0){
			// [강좌 추가] 버튼
			$('#page-content .buttons').hide();
		}
		
		// (Made By #ellena)
		switch (url.pathname){
	
			case '/course/modedit.php':		

				// 화상강의
				if($('#page-mod-zoom-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수'
					$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간 준수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}
				
				// 게시판
				if($('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0){
					$('#id_completion').val('0').prop("selected", true); // 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 			 // 활동이수 
				}

				// 과제
				if($('#page-mod-assign-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

				// 설문조사
				if($('#page-mod-feedback-mod').length > 0){ 
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 위키
				if($('#page-mod-wiki-mod').length > 0){ 
					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 채팅방
				if($('#page-mod-ubchat-mod').length > 0){ 
					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 퀴즈
				if($('#page-mod-quiz-mod').length > 0){ 
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_completionusegrade').attr('checked', true);		// 활동이수>'성적필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 토론방
				if($('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0){					
					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 투표
				if($('#page-mod-choice-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true); // 활동이수>'이수과정추적' 
					// 활동이수>'열람필수' 
					$('#id_completionview').attr('checked', false);	
					$('#id_completionusegrade').attr('checked', true);
					$('#id_activitycompletionheader').hide(); 	// 활동이수
				}
				// 팀플평가
				if($('#page-mod-ubpeer-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionevaluation').attr('checked', true);	// 활동이수>'동료평가참여' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
					
				}

				// 링크
				if($('#page-mod-url-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

				// 개요
				if($('#page-mod-label-mod').length > 0){
					$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 지웰콘텐츠
				if($('#page-mod-xncommons-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 웹문서
				if($('#page-mod-page-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 이러닝콘텐츠
				if($('#page-mod-econtents-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 파일
				if($('#page-mod-ubfile-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

				// 폴더
				if($('#page-mod-folder-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

			break;

			case '/local/ubion/course/setting.php':
				if($('#page-local-ubion-course-setting').length > 0){
					// 오프라인 출석부
					// $('#fitem_id_offline').hide();
				}
			break;
		}

	}

	// *****************************************************************************
	// 나사렛대(운영)
	// *****************************************************************************
	if(url.hostname == 'ncyber.kornu.ac.kr'){
		// 관리자모드 : 새창으로 열기 
		$('.btn-userinfo').click(function(){
			setTimeout(function(){ 
				$(".user-links .link-admin").attr('target','_blank');
			}, 1000);
		})

		switch (url.pathname){
			// 사용자 편집 > 개인정보 수정
			case '/user/editadvanced.php':
				if($("#page-user-editadvanced").length > 0){
					$("#fitem_id_moodlenetprofile").hide();  // MoodleNet profile
				}
			break;
			case '/course/modedit.php':
				// 파일
				if($("#page-mod-ubfile-mod").length > 0){
					$("#id_submitbutton").hide(); 		//저장 후 확인
				}
			break;
			case '/course/view.php':
				if($("#page-lnb .block_settings").length <= 0) { //학습자 화면만 적용
					$('#page-content .availabilityinfo').hide(); // [제한됨]내용 숨김
				}
			break;	
			
			// 관리자모드 > 과정관리
			case '/local/ubion/index.php/online/curriculum':
			// 관리자모드 > 기수관리
			case '/local/ubion/index.php/online/xth':
			//관리자모드 > 수강(결제)관리
			case '/local/ubion/index.php/online/enrol':
			//관리자모드 > 수료관리
			case '/local/ubion/index.php/online/cert':
				var dropdownOptions = ".dropdown-item";
			
				$(document).on("mouseover", dropdownOptions, function () {
					$(this).css("background-color", "#007bff");
					$(this).css("color", "#fff");
				});
			
				$(document).on("mouseout", dropdownOptions, function () {
					$(this).css("background-color", "#fff");
					$(this).css("color", "#212529");
				});
			break;
		}
	}

	// *****************************************************************************
	// 숙명여자대학교(운영)
	// *****************************************************************************
	if(url.hostname == 'snowboard.sookmyung.ac.kr') { 
		if($('#page-site-index').length > 0){
			// 강좌전체보기 - 문구
			$('#page-content .my-course-lists-progress .text-info').hide();

			// 강좌전체보기
			$('#page-content .course-lists .course-option .filter .custom-select option[value="CMS_O"]').hide(); //오픈 강좌
			$('#page-content .course-lists .course-option .filter .custom-select option[value="CMS_M"]').hide(); //기타

			// [조교/청강신청] 버튼
			$('#page-content .course-option .btn-default').eq(1).hide();

			// [>] 버튼
			$('.course-go').hide();

			// [강좌 추가] 버튼
			$('#page-content .buttons').hide();
		}

		// My페이지 
		$( "<style>.user-mycourses .userinfo-title{display:none;}</style>" ).appendTo( "head");

		// 알림 - 버튼 색상
		$( "<style>#tab-noti .tab-content-container .col .btn-sm{background-color:#335FA5;color:#fff;}</style>" ).appendTo( "head");
		// 고급설정 > 고급 강좌 관리
		$('#settingsnav ul li p.tree_item.root_node').attr("aria-expanded",false);
		$('#settingsnav ul li.type_course.depth_1 ul').attr("aria-hidden",true);

		/********************************************
			과제(activity_assign)
		*********************************************/
		// 고급설정 > 과제 관리 	
		if(url.pathname=='/mod/assign/view.php' || 
		url.pathname=='/grade/grading/manage.php' || 
		url.pathname.indexOf('/grade/grading/form/rubric/')>-1 || 
		url.pathname=='/grade/grading/pick.php'|| 
		url.pathname=='/mod/assign/overrides.php' ||
		((url.pathname=='/course/modedit.php' && $('#page-mod-assign-mod').length > 0)))
		{
			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) { 
				link=$(this).find('a').attr('href'); 
				if(link.indexOf('/admin/roles')>-1||link.indexOf('/filter/')>-1||link.indexOf('/report/log/')>-1||link.indexOf('/backup/')>-1) { $(this).html(''); }
			});

			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');
		}
		
		/********************************************
		 	퀴즈(activity_quiz)
		*********************************************/	
		// 고급설정 > 퀴즈 관리 	
		if(url.pathname=='/mod/quiz/view.php' || 
		url.pathname=='/mod/quiz/edit.php' || 
		url.pathname=='/mod/quiz/report.php' || 
		url.pathname=='/mod/quiz/review.php' ||  
		url.pathname=='/mod/quiz/attempt.php' || 
		url.pathname=='/mod/quiz/summary.php'  || 
		url.pathname=='/mod/quiz/overrides.php' || 
		url.pathname=='/question/edit.php' || 
		url.pathname=='/question/category.php' || 
		url.pathname=='/question/import.php' || 
		url.pathname=='/question/export.php' || 
		((url.pathname=='/course/modedit.php' && $('#page-mod-quiz-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');

			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				link=$(this).find('a').attr('href');
				if(link.indexOf('/admin/roles')>-1||link.indexOf('/filter/')>-1||link.indexOf('/report/log/')>-1||link.indexOf('/backup/')>-1) { $(this).html(''); }
			}); 
			$("a[href*='/mod/quiz/report.php'][href*=overview]",$("li.type_setting")).each(function() { $(this).attr("href",$(this).attr("href")+"&slotmarks=0"); });
		}

		/********************************************
		 	화상강의(ZOOM)
		*********************************************/
		// 고급설정 > 화상강의 관리 	
		if(url.pathname=='/mod/zoom/view.php' || 
		((url.pathname=='/course/modedit.php' && $('#page-mod-zoom-view').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');

			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				link=$(this).find('a').attr('href');
				if(link.indexOf('/admin/roles')>-1||link.indexOf('/filter/')>-1||link.indexOf('/report/log/')>-1||link.indexOf('/backup/')>-1) { $(this).html(''); }
			}); 
			$("a[href*='/mod/quiz/report.php'][href*=overview]",$("li.type_setting")).each(function() { $(this).attr("href",$(this).attr("href")+"&slotmarks=0"); });
		}

		/********************************************
		 	토론방(activity_forum)
		*********************************************/
		if(url.pathname=='/mod/forum/view.php' ||
		url.pathname=='/mod/forum/post.php' || 
		url.pathname=='/mod/forum/discuss.php' ||
		((url.pathname=='/course/modedit.php' && $('#page-mod-forum-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');

			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				if(i!=0) $(this).html('');
			});

			//Grade users
			$('#page-content .p-t-1 .btn-secondary').hide();
		}

		/********************************************
			게시판(activity_ubboard)
		*********************************************/
		if(url.pathname=='/mod/ubboard/view.php' || 
		url.pathname=='/mod/ubboard/article.php' || 
		url.pathname=='/mod/ubboard/modify.php' || 
		url.pathname=='/mod/ubboard/write.php' || 
		url.pathname=='/mod/ubboard/category.php' || 
		url.pathname=='/mod/ubboard/category_modify.php' || 
		((url.pathname=='/course/modedit.php' && $('#page-mod-ubboard-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');
	
			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				link=$(this).find('a').attr('href');
				if(link.indexOf('/admin/roles/assign.php')>-1||link.indexOf('/admin/roles/check.php')>-1||link.indexOf('/filter/')>-1||link.indexOf('/report/log/')>-1||link.indexOf('/backup/')>-1) { $(this).html(''); }
			});
		}

		/********************************************
			설문조사(activity_ubboard)
		*********************************************/
		if(url.pathname=='/mod/feedback/view.php' || 
		url.pathname=='/mod/feedback/complete.php' || 
		url.pathname=='/mod/feedback/edit_item.php' || 
		url.pathname=='/mod/feedback/edit.php' || 
		url.pathname=='/mod/feedback/edit.php' || 
		url.pathname=='/mod/feedback/analysis.php' || 
		url.pathname=='/mod/feedback/show_entries.php' || 
		((url.pathname=='/course/modedit.php' && $('#page-mod-feedback-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');
	
			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				link=$(this).find('a').attr('href');
				if(link.indexOf('/admin/roles/assign.php')>-1||link.indexOf('/admin/roles/check.php')>-1||link.indexOf('/filter/')>-1||link.indexOf('/report/log/')>-1||link.indexOf('/backup/')>-1) { $(this).html(''); }
			});
		}
		
		/********************************************
			위키(activity_wiki)
		*********************************************/
        if(url.pathname=='/mod/wiki/view.php' ||
		url.pathname=='/mod/wiki/edit.php' || 
		url.pathname=='/mod/wiki/comments.php' || url.pathname=='/mod/wiki/editcomments.php' || 
		url.pathname=='/mod/wiki/history.php' || url.pathname=='/mod/wiki/diff.php' || 
        url.pathname=='/mod/wiki/map.php' ||
        url.pathname=='/mod/wiki/files.php' || url.pathname=='/mod/wiki/filesedit.php' || 
		url.pathname=='/mod/wiki/admin.php' ||
		((url.pathname=='/course/modedit.php' && $('#page-mod-wiki-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');

            $($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
            var link;
            $("li",$('#settingsnav li.type_setting ul')).each(function(i) {
                if(i!=0) $(this).html('');
            });
        }

		/********************************************
			채팅방(activity_ubchat)
		*********************************************/
		if(url.pathname=='/mod/ubchat/view.php' ||
		((url.pathname=='/course/modedit.php' && $('#page-mod-ubchat-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');

			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				if(i!=0) $(this).html('');
			});
		}

		/********************************************
			투표(activity_choice)
		*********************************************/
		if(url.pathname=='/mod/choice/view.php' ||
		url.pathname=='/mod/choice/report.php' ||
		((url.pathname=='/course/modedit.php' && $('#page-mod-choice-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');

            $($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
            var link;
            $("li",$('#settingsnav li.type_setting ul')).each(function(i) {
                if(i!=0) $(this).html('');
            });
        }

		/********************************************
			웹문서(resource_page)
		*********************************************/
        if(url.pathname=='/mod/page/view.php' ||
		((url.pathname=='/course/modedit.php' && $('#page-mod-page-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');

                $($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
                var link;
                $("li",$('#settingsnav li.type_setting ul')).each(function(i) {
                        if(i!=0) $(this).html('');
                });
        }

		/********************************************
			폴더(resource_folder)
		*********************************************/
		if(url.pathname=='/mod/folder/view.php' ||
		((url.pathname=='/course/modedit.php' && $('#page-mod-folder-mod').length > 0)))
		{
			//학습활동 블록 숨김
			$('div.block-coursemos-activity').addClass('hidden');
	
			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				link=$(this).find('a').attr('href');
				if(link.indexOf('/admin/roles/')>-1||link.indexOf('/filter/')>-1||link.indexOf('/report/log/')>-1||link.indexOf('/backup/')>-1) { $(this).html(''); }
			});
			
			$('div.singlebutton input[type=submit]').css('color','#fff').css('background-color','#5bc0de ').css('border-color','#46b8da ').on("mouseover",function() { $(this).css('background-color','#31b0d5').css('border-color','#269abc');  }).on("mouseout",function() { $(this).css('background-color','#5bc0de').css('border-color','#46b8da');  });	
		}

		/********************************************
			성적부
		*********************************************/
		//보기
		if(url.pathname=='/grade/report/grader/index.php' ||
		url.pathname=='/grade/report/history/index.php' ||
		url.pathname=='/grade/report/singleview/index.php'||
		url.pathname=='/grade/report/user/index.php'
		)
		{
			$('#page-content .nav li.nav-item a.nav-link').eq(3).hide(); //문자등급
			$('#page-content .nav li.nav-item a.nav-link').eq(8).hide(); //학습성과 보고서
			$('#page-content .nav li.nav-item a.nav-link').eq(9).hide(); //요약 보고서
		}

		//성적항목관리, 척도
		if(url.pathname=='/grade/edit/tree/index.php' ||
		url.pathname=='/grade/edit/settings/index.php' ||
		url.pathname=='/grade/report/grader/preferences.php' ||
		url.pathname=='/grade/edit/scale/index.php'
		)
		{
			$('#page-content .nav li.nav-item a.nav-link').eq(3).hide(); //문자등급
		}

		//가져오기
		if(url.pathname=='/grade/import/csv/index.php' ||
		url.pathname=='/grade/import/direct/index.php'
		)
		{
			$('#page-content .nav li.nav-item a.nav-link').eq(3).hide(); //문자등급
			$('#page-content .nav li.nav-item a.nav-link').eq(8).hide(); //XML파일
		}

		//내보내기
		if(url.pathname=='/grade/export/xls/index.php')
		{
			$('#page-content .nav li.nav-item a.nav-link').eq(3).hide(); //문자등급
			$('#page-content .nav li.nav-item a.nav-link').eq(6).hide(); //OpenOffice 스프레드쉬트로 내보냄
			$('#page-content .nav li.nav-item a.nav-link').eq(7).hide(); //일반 문서파일로 내보냄
			$('#page-content .nav li.nav-item a.nav-link').eq(9).hide(); //XML 파일로 내보냄
		}
		if(url.pathname=='/grade/export/ods/index.php'){
			$("body").html('<div style="width:150px;margin:15% auto 0;color:#dfdfdf;"><i style="color:#dfdfdf;" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>');
			var id = $.GET('id');
			var redirect = "/grade/export/xls/index.php?id=" + id;
			window.location.href = redirect;	
			//console.log('id : ', id)
		}

		// 개인성적표, 성적항목관리
		if(url.pathname=='/grade/report/user/index.php' || url.pathname=='/grade/edit/tree/index.php')
		{
			$('.gradeitemdescription').hide();
		}		

		// (Made By #ellena)
		switch (url.pathname){

			case '/course/modedit.php':		

				// 링크
				if($('#page-mod-url-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

				// 개요
				if($('#page-mod-label-mod').length > 0){
					$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 웹문서
				if($('#page-mod-page-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 콘텐츠메이커
				if($('#page-mod-xncommons-mod').length > 0) {
					$('#id_activitycompletionheader').hide(); 				// 활동이수 

					$('#id_submitbutton, #id_submitbutton2').click(function(){
						//ko
						if($('#id_progress option:selected').text() == '아니오') {
							$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 
						} 
						if($('#id_progress option:selected').text() == '예') {
							$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
							$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
							$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
						}
							
						//en
						if($('#id_progress option:selected').text() == 'No') {
							$('#id_completion').val('0').prop("selected", true);	// 활동이수>'이수과정추적' 					
						} 
						if($('#id_progress option:selected').text() == "Yes") {
							$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
							$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
							$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
						}
						
					});


				}

				// 파일
				if($('#page-mod-ubfile-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
					$('#id_optionssection .fcontainer .form-group').eq(2).hide(); //파일용량 표시
					$('#id_optionssection .fcontainer .form-group').eq(3).hide(); //파일유형 표시
				}

				// 폴더
				if($('#page-mod-folder-mod').length > 0) {
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
				}

				// 게시판
				if($('#page-mod-ubboard-mod').length > 0 || $('#page-mod-ubboard-default').length > 0 || $('#page-mod-ubboard-anonymous').length > 0 || $('#page-mod-ubboard-notice').length > 0 ||
					$('#page-mod-ubboard-qna').length > 0 || $('#page-mod-ubboard-group').length > 0|| $('#page-mod-ubboard-onetoone').length > 0){

						$('#id_completion').val('0').prop("selected", true); // 활동이수>'이수과정추적' 
						$('#id_activitycompletionheader').hide(); 			 // 활동이수 
						$('#fitem_id_open').hide(); // 공개글 허용
				}

				// 익명게시판
				if($('#page-mod-ubboard-mod').length > 0){
					if((url.search.indexOf('?update=')>-1)){
						if($('#id_type option:selected').text() == '익명 게시판'){
							$('#id_type').after('<div style="color:red;margin-left:1rem;">* 익명 게시판의 경우, 게시판 타입 수정이 불가합니다.</div>');
						}
					}
				}

				// 과제
				if($('#page-mod-assign-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수
					$( "<style>#fgroup_id_assignsubmission_onlinetext_wordlimit_group{display:none}</style>").appendTo( "head"); // 제출유형 > '단어 수 제한'
					$('#id_submissionsettings').hide(); //제출설정
					$('#id_notifications').hide(); //알림
					setTimeout(function(){$('#id_modstandardgrade .moreless-actions .moreless-toggler').hide(); }, 5000); //성적 > '통과점수'
					$('#id_copykillerdesc .btn-copykillerbridge-setting').css('margin', '0.1rem 0.25rem 0.1rem 1rem'); //유사도검사	
					setTimeout(function(){ $("#fitem_id_assignfeedback_comments_commentinline").hide();}, 2000); 	// 피드백유형 > 인라인 코멘트
					$('#fgroup_id_feedbackplugins > div.col-md-9.form-inline.felement > fieldset > div > label:nth-child(7)').hide(); //표절률
					$('#fgroup_id_feedbackplugins > div.col-md-9.form-inline.felement > fieldset > div > a:nth-child(9)').hide(); //표절률
					var plagNotice = "<div id='fgroup_id_contentselector3' class='form-group row fitem femptylabel' data-groupname='contentselector3'><div class='col-md-3 col-form-label d-flex justify-content-md-end'><span class='ml-2 d-flex align-items-center align-self-start'></span></div><div class='col-md-9 form-inline felement' data-fieldtype='group'><label class='form-check fitem' style='color:red; font-weight:bold;'>※ 표절률 상세결과 공개 여부는 [검사 설정]의 학습자 권한에서 변경할 수 있습니다.</label></div></div>";
					$('#fgroup_id_contentselector2').after(plagNotice);

				}

				//과제 추가시
				if(url.search.indexOf('?add=assign') > -1 || url.search.indexOf('&add=assign') > -1){                                         
					$('#id_feedbacktypes').hide(); //피드백유형
				}

				// 설문조사
				if($('#page-mod-feedback-mod').length > 0){ 
					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 위키
				if($('#page-mod-wiki-mod').length > 0){ 
					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 채팅방
				if($('#page-mod-ubchat-mod').length > 0){ 
					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적' 
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 투표
				if($('#page-mod-choice-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true); // 활동이수>'이수과정추적' 
					// 활동이수>'열람필수' 
					$('#id_completionview').attr('checked', false);	
					$('#id_completionusegrade').attr('checked', true);
					$('#id_activitycompletionheader').hide(); 	// 활동이수
				}

				// 토론방
				if($('#page-mod-forum-mod').length > 0 || $('#page-mod-forum-general').length > 0){					
					$('#id_completion').val('0').prop("selected", true); 	// 활동이수>'이수과정추적'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 
				}

				// 퀴즈
				if($('#page-mod-quiz-mod').length > 0){

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
					$('#id_completionview').attr('checked', false);			// 활동이수>'열람필수' 
					$('#id_completionusegrade').attr('checked', true);		// 활동이수>'성적필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 

					// 화면구성
					setTimeout(function(){$('#id_display .moreless-actions').hide(); }, 5000);

					//실시방식
					setTimeout(function(){
						$('#fitem_id_canredoquestions').removeAttr('hidden'); 	//한 번 응시할 때 재시도 허용
						$('#fitem_id_attemptonlast').removeAttr('hidden'); 		//최종 결과에 응시 기록 누적
						$('#fitem_id_canredoquestions').show(); 				//한 번 응시할 때 재시도 허용
						$('#fitem_id_attemptonlast').show(); 					//최종 결과에 응시 기록 누적
						$('#id_attemptonlast_text').hide(); 					//최종 결과에 응시 기록 누적
					}, 3000);
					
					$('#id_overallfeedbackhdr').hide(); //전반적인 피드백
					// 피드백표시 - 전반적인피드백 삭제
					$('#fgroup_id_duringoptionsgrp fieldset div.review_option_item').eq(6).hide(); 		//응시중
					$('#fgroup_id_immediatelyoptionsgrp fieldset div.review_option_item').eq(6).hide(); //응시직후
					$('#fgroup_id_openoptionsgrp fieldset div.review_option_item').eq(6).hide(); 		//응시 후 퀴즈 마감 전
					$('#fgroup_id_closedoptionsgrp fieldset div.review_option_item').eq(6).hide();		//퀴즈 마감 이후


					$("#id_timing .fcontainer #fitem_id_overduehandling .felement #id_overduehandling option[value='autoabandon']").remove() 	//퀴즈 기간 설정 > 시간제한 초과 시: 옵션3

					// 실시방식 > 퀴즈 제시 방식 : 도움말
					var content = '<div class="no-overflow"><p>학습자는 다양한 방식으로 퀴즈를 응시할 수 있습니다.<br /></p><ul><li> 응시 후 피드백 제공: 퀴즈 제출 완료 후 피드백을 제공하는 유형으로, 피드백 유형 및 제시 시기는 선택할 수 있습니다.</li><li> 적응 모드: 학생이 퀴즈 응시 중에 [체크] 버튼을 클릭하여 각 문제에 대한 정답 여부를 확인하며, 여러 번 시도할 수 있습니다. 답이 틀린 경우 시도 횟수 만큼 감점됩니다.</li><li> 적응 모드(감점 없음): 적응 모드와 동일하며 여러 번 시도하여도 감점되지 않습니다.</li><li> 즉각적인 피드백: 학생이 퀴즈 응시 중 [체크] 버튼을 클릭하여 각 문제에 대한 피드백을 확인할 수 있습니다.</li></ul></div> <div class="helpdoclink"><a href="https://support.coursemos.kr/ko/manual/lms/professor/3.2/30dc75da012c42a083e921c8d561640f" target="_blank"><i class="icon fa fa-info-circle iconhelp icon-pre" aria-hidden="true"></i>도움글 더</a></div>'
					$("#id_interactionhdr .fcontainer #fitem_id_preferredbehaviour").find('a').attr('data-content',content);
					
					// 실시방식 > 퀴즈제시방식 안내문구 추가
					$("#fitem_id_preferredbehaviour #id_preferredbehaviour").on("change",function() {
						if( $(this).val() == 'immediatefeedback'){
							var immediatefeedback_str = "<div id='immediatefeedback_txt' class='form-group row fitem'><div class='col-md-3'><label></label></div><div class='col-md-9 form-inline felement' style='color:red;'><label>⚠즉각적인 피드백 유형에서는 학생이 응시 중 문제에 대한 피드백 확인이 가능합니다. (※ “피드백 표시 – 응시 중” 옵션에서 피드백 유형 선택 필요)</label></div></div>";
							$("#adaptive_txt").remove();
							$("#fitem_id_canredoquestions").before(immediatefeedback_str);
						} else if( $(this).val() == 'adaptive' || $(this).val() == 'adaptivenopenalty'){
							$("#fitem_id_preferredbehaviour .col-md-9.form-inline.felement").find('span').remove();
							var adaptive_str = "<div id='adaptive_txt' class='form-group row fitem'><div class='col-md-3'><label></label></div><div class='col-md-9 form-inline felement' style='color:red;'><label>⚠적응 모드에서는 학생이 응시 중 정답 여부 확인이 가능합니다.</label></div></div>";
							$("#immediatefeedback_txt").remove();
							$("#adaptive_txt").remove();
							$("#fitem_id_canredoquestions").before(adaptive_str);
						} else{
							$("#adaptive_txt").remove();
							$("#immediatefeedback_txt").remove();
						}
					});
					
					
				}

				// 화상강의
				if($('#page-mod-zoom-mod').length > 0) {
					// 이수설정 펼침
					$('#id_modzoomcompletion').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible');

					$('#fitem_id_duration').nextAll().hide() 	//일정예약 > 재접속 하위메뉴 

					$('#fitem_id_tardinessprogress').hide(); //지각인정 진도율(%)

					$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
					$('#id_completionview').attr('checked', false);			// 활동이수>'성적필수'
					$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'성적필수'
					$('#id_activitycompletionheader').hide(); 				// 활동이수 

					$('#id_security .fcontainer .form-group').last().hide();	//보안 > '보안 섹션 표시'
					$('#id_media .fcontainer .form-group').last().hide();	//미디어 > '미디어 섹션 표시'

					$('#id_progress_management').removeClass('clearfix collapsible').addClass('clearfix collapsible collapsed'); 	//진도관리
					$('#id_schedule').removeClass('clearfix collapsible collapsed').addClass('clearfix collapsible'); 	//일정예약
				}

			break;

			case '/local/ubion/user/edit.php':
				if($('#page-user-edit').length > 0){
					// 개인정보수정
					$('#fitem_id_edit_message .btn-usersync').hide();
					// $('#fitem_id_edit_message .col-md-9 .user_edit_message').hide();
				}
			break;

			case '/local/ubassistant/':
				if($('#page-my-courses').length > 0){
					// 조교/청강생 신청
					var a = '이 페이지에서는 스노우보드 강의실을 사용할 수 있도록 교수님께 스노우보드 강의실에 대한 이용 허락을 요청합니다.<br/><br/>';
					var b = '※ 해당 교과목에 대한 조교 임용과 무관하며, <span style="font-weight:bold;">반드시 교수님과 사전 협의 후에 진행</span>하시기 바랍니다.<br/><br/>';
					var c = '조교 신청은 선(先) 학생 신청 -> 후(後) 교수자 승인의 절차로 이루어집니다.<br/><br/>';
					var d = '<li>현재 페이지에서 강좌를 검색하여 조교 신청을 합니다.</li>';
					var e = '<li>교수님께서는 ‘조교 승인’ 메뉴를 클릭하여 확인할 수 있습니다.</li>';
					var f = '<li>해당 강좌의 조교로 신청한 사람의 성명과 정보가 표시되며 "승인"을 클릭하여 승인합니다.</li>';
					var g = '<li>교수님이 승인을 완료하여야 해당 강의실에서 조교 권한으로 참여가 가능합니다.</li>';
					var i = '<li>교수님과 사전협의를 하지 않은 신청자는 담당교수님이 승인하지 않거나 취소할 수 있습니다.</li>';
					var h = '<span style="color: red;"> ※ 청강은 2022. 08. 31.자로 서비스를 종료하여 더 이상 기능을 지원하지 않습니다. </span>';
					var result_url = 'https://snowboard.sookmyung.ac.kr/mod/ubboard/article.php?keyfield&keyword&ls=15&page=1&categoryid&bwid=1136740&id=2';
					var j = '<br/>(관련 공지사항: <a href="'+ result_url +'" title="게시글" target="_blank">스노우보드 강의실 청강생 신청 기능 종료 안내</a>)';

					$('#page-content .local_ubassistant').before('<div style="padding: 19px; border: 1px solid #e0e0e0;background-color:white;">' + a + b + c + '<ol>' + d + e + f + g + i + '</ol>'+ h + j + '</div><br/>');
				}
			break;

			case '/mod/ubboard/view.php':
				// 수업개선 학생 의견 접수 - 문구 추가
				if($('#page-mod-ubboard-view').length > 0){
					var mainText = $('#page-content h2').text();

					if(mainText == '수업개선 학생 의견 접수'){
						$('#page-content .ubboard').before('<div style="padding: 19px; border: 1px solid #e0e0e0;background-color:white;">원격 수업에서 다음에 해당하는 수업이 있는 경우 알려주시면 확인하고 조치하겠습니다.<br/><ul><li style="font-weight:bold;">수업일 기준으로 사전 공지 없이 강의(강의영상, 화상강의 등)가 등록되지 않은 경우</li><li>강의영상의 품질 개선이 필요한 경우</li><li>기타 원격 수업에서 개선이 필요한 경우</li></ul><br/>※ 게시글에는 <span style="font-weight:bold;">교과목 정보(과목명, 분반, 담당교수명)와 해당 주차를 반드시 포함하여 작성</span>해주시기 바랍니다.<br/>※ 본 게시판의 게시글은 모두 비공개이며, 글 작성자와 시스템 관리자, 학사담당자만 내용 확인이 가능합니다.<br/>※ 강의영상 재생 오류, 시스템 기능 오류 관련 사항은 이용안내 > ‘시스템 문의’ 게시판을 이용해주시기 바랍니다.</div><br/>');
					}
				}
			break;

			case '/course/view.php':
				// 강의실 버튼 위치 수정
				var objOriginal = $('#coursemos-common-buttons .share-button').clone();
				$('#coursemos-common-buttons .share-button').remove();
				$("#coursemos-common-buttons .page-heading-button").after(objOriginal);
				
				var objOriginal2 = $('#coursemos-common-buttons .page-heading-button').clone();
				$('#coursemos-common-buttons .page-heading-button').remove();
				$("#coursemos-common-buttons .btn-danger").before(objOriginal2);

				//[제한됨, 비공개]
				// $(".course-content .course-content-ubformat ul.ubformat li.section .content .badge").css('background-color',"rgba(0, 0, 0, 0)");
				// $(".course-content .course-content-ubformat ul.ubformat li.section .content .badge").css('color',"#335FA5");
				// [제한됨]
				$('#page-content .isfullinfo').css('color',"#17a2b8");
				// [비공개]
				$('#page-content .ishidden span.badge-info').css('background-color',"#8B8B8C");
				// 개요 - 들여쓰기
				$('.course-box .ubformat .modtype_label .mod-indent-outer').css('padding-left','0');

			break;

			case '/local/ubion/course/setting.php':
				// '강좌배경 설정' 닫힘
				$('#id_header-background').addClass('collapsed');
			break;

			case '/course/edit.php':
				// '강좌 종료 날짜' 
				$('#fitem_id_enddate').hide();
			break;

			//과제 - 보기
			case '/mod/assign/view.php':				
				$('#page-content .generalbox tbody .column-fullname .btn-default').css('border-color','rgba(0, 0, 0, 0)'); // 이름 박스 
				// $('#id_quickgrading').prop('checked', true); // 빠른채점
				$('#page-content .generalbox tbody .column-status .submissionstatussubmitted').css('margin-bottom','0.5rem'); //상태 - [제출완료] 마진 조정
				$('#page-content .generalbox tbody .column-grade .btn').css('margin-bottom','0.5rem'); //성적 - [성적]버튼 마진 조정
				$('#fitem_id_sendstudentnotifications').hide(); // 학습자들에게 통지
			break;

			case '/question/question.php':
				//문제은행 - 선다형 유형
				if($('#page-question-type-multichoice').length > 0){
					$('#id_single').after('<div style="color:red;margin-top:1rem;">※ 응시 내역이 있을 때, 단답만->다답허용, 혹은 다답허용->단답만으로 변경하면<br/>이미 응답한 학습자의 기록이 유실되오니 주의하시기 바랍니다.</div>');
					$('#id_single').css('margin-right','1rem');

					// 선다형 - 수정 페이지 > 정답개수 disabled 처리
					// if($('#page-content .page-content-container h2').text() == '선다형 문제 편집\n  \n'){
					// 	$('#id_single').prop('disabled', true);
					// }
				}
			break;

			//가져오기
			case '/backup/import.php':
				if($('#page-backup-import').length > 0){
					$('#id_setting_root_customfield').attr('checked', false); //Include custom fields
					$('#id_rootsettings .root_setting').eq(7).hide(); //Include custom fields
					$('#id_rootsettings .root_setting').eq(8).hide(); //Include content bank content
				}
			break;

			//백업
			case '/backup/backup.php':
				if($('#page-backup-backup').length > 0){
					$('#id_setting_root_customfield').attr('checked', false); //Include custom fields
					$('#id_rootsettings .root_setting').eq(16).hide(); //Include custom fields
					$('#id_rootsettings .root_setting').eq(17).hide(); //Include content bank content
				}
			break;

			// 퀴즈 - 요약(보기)
			case '/mod/quiz/view.php':
				if($('#page-mod-quiz-view').length > 0){
					//퀴즈 응시 버튼
					$('#page-content .page-content-container .quizattempt button.btn-secondary').css('border-color','#007bff');
					$('#page-content .page-content-container .quizattempt button.btn-secondary').css('background-color','#007bff');
					$('#page-content .page-content-container .quizattempt button.btn-secondary').css('color','#fff');
					
					//퀴즈 정보 박스처리
					$('#page-content .page-content-container .quizinfo').css('border','1px solid #e0e0e0').css('background-color','#fff').css('padding','2rem').css('text-align','left').css('margin-bottom','2rem');
				}
			break;

			// 퀴즈 - 응시
			case '/mod/quiz/attempt.php':
				if($('#page-mod-quiz-attempt').length > 0){
					$('#page-container .submitbtns input[name="previous"]').css('margin-right','2rem'); //버튼 마진
					
					//우클릭 이벤트 방지
					$(document).on('contextmenu', function() {
						return false;
					});
					
					// control 키 방지
					function CtrlAlt() {
						if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
							return false;
						}
					}
					document.onkeydown = CtrlAlt;
	
					//복붙 이벤트 방지 
					$('#page-mod-quiz-attempt').on("cut copy paste",function(e) {
						e.preventDefault();
					});
				}
			break;

			// 퀴즈 - 제출
			case '/mod/quiz/summary.php':
				if($('#page-mod-quiz-summary').length > 0){
					//퀴즈 응시 버튼
					$('button.btn-secondary').css('border-color','#007bff');
					$('button.btn-secondary').css('background-color','#007bff');
					$('button.btn-secondary').css('color','#fff');
				}
			break;

			// 문제은행
			case '/question/edit.php':
				if($('#page-question-edit').length > 0){
					// [문제/기타] 텍스트 간격조정 
					$( "<style>.choosercontainer #chooseform .moduletypetitle{padding-top:2rem;padding-bottom:0;margin-bottom:0;}</style>").appendTo( "head");
				}	
			break;
			
			// 화상강의
			case '/mod/zoom/view.php':
				if($('#page-mod-zoom-view').length > 0){
					// [화상강의 시작하기] 버튼 하단 문구
					$('#page-container .page-content-container .ubzoom_view table tbody tr th form input').after('<div style= "margin-top:1rem;color:red;">수업시간 10분 전부터 참여 가능</div>');
					// 화상강의 수업 시작 전 안내문구(관리자/교수)
					if($('#page-container .page-content-container .ubzoom_view table tbody tr td.c1').eq(12).text() == '화상강의가 시작되지 않음' || $('#page-container .page-content-container .ubzoom_view table tbody tr td.c1').eq(12).text() == 'Not started'){
						$('#page-container .page-content-container .ubzoom_view table tbody tr th span').after('<div style= "margin-top:1rem;color:red;">수업시간 10분 전부터 참여 가능</div>');
					}
					// 화상강의 수업 시작 전 안내문구(학생)
					if($('#page-container .page-content-container .ubzoom_view table tbody tr td.c1').eq(10).text() == '화상강의가 시작되지 않음' || $('#page-container .page-content-container .ubzoom_view table tbody tr td.c1').eq(10).text() == 'Not started'){
						$('#page-container .page-content-container .ubzoom_view table tbody tr th span').after('<div style= "margin-top:1rem;color:red;">수업시간 10분 전부터 참여 가능</div>');
					}
					// 강의진행 내역 안내문구
					$('#page-content .page-content-container h4').eq(0).after('<div style= "margin-top:1rem;color:blue;">수업 시간의 80% 이상 참여 시 출석으로 인정되며, 헤이영 캠퍼스 출석부에는 다음날 반영됩니다.</div>');
					// 참여 링크
					$("#page-content .ubzoom_view table tbody tr td.cell a").eq(0).css('color','#212529');
					$("#page-content .ubzoom_view table tbody tr td.cell a").eq(0).click(function () {return false;});
					// [[checkyourname]]
					$('#page-content .page-content-container .ubzoom_view table tbody tr td.wp-300 strong').hide();
				}	
			break;

			// 토론방 - 답변등록
			case '/mod/forum/post.php':
				if($('#page-mod-forum-post').length > 0){
					// 토론 구독하기
					$('#id_discussionsubscribe').prop('checked',false);
				}	
			break;

			// 설문조사
			case '/mod/feedback/view.php':
				if($('#page-mod-feedback-view').length > 0){
					// [설문에 참여하세요] 버튼
					$('#page-content .page-content-container .boxaligncenter .complete-feedback .btn').css('background-color','#007bff');
					$('#page-content .page-content-container .boxaligncenter .complete-feedback .btn').css('border-color','#007bff');
					$('#page-content .page-content-container .boxaligncenter .complete-feedback .btn').css('color','#fff');
				}	
			break;
			// 팀 설정 > 팀 자동 생성
			case '/group/autogroup.php':
				if($('#page-group-autogroup').length > 0){
					//그룹 메시지(Group messaging)
					$('#fitem_id_enablemessaging').hide();
					//활성화된 사용자만 포함
					$('#id_groupmembershdr .checkbox').eq(2).hide();
				}	
			break;
		}

	}

	// *****************************************************************************
	// 대한산업보건협회(개발/운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'kihalms.moodler.kr' || url.hostname == 'edulms.kiha21.or.kr' ){
		if($('#page-site-index').length > 0){
			// 강좌전체보기
			$('#page-content .filter').hide(); //강좌전체보기
			// $('#page-content .course-lists .course-option .filter .custom-select option[value="R"]').hide(); //교육 과정
			// $('#page-content .course-lists .course-option .filter .custom-select option[value="CMS_O"]').hide(); //오픈 강좌
			// $('#page-content .course-lists .course-option .filter .custom-select option[value="CMS_M"]').hide(); //기타

			$('.course-image').hide(); // 썸네일

			//수료증 발급 버튼
			var suprotUrl = 'https://edu.kiha21.or.kr/ko/mypage/certificate' ;
			$('.my-course-lists').before("<a class='btn btn-default' style='float:right;background-color: #3B3A99;color:#fff' href='"+suprotUrl+"' target='_blank'>수료증 발급 바로가기</a>");
		}

		switch (url.pathname){
			case '/mod/ubboard/write.php':
				if($('#page-mod-ubboard-view').length > 0){
					// if((url.search.indexOf('&bwid=') < 0 )){
						var categoryTitle = $('#id_general .text-md-right label[for=id_secret]').text();
						if(categoryTitle.includes("비밀글")){
							$(".ios-switch-control-input").prop("checked", true);
							$('#id_submitbutton').click(function(){
								$(".ios-switch-control-input").prop("checked", true);
							});
						}
					// }
				}				
			break;	
			
			case '/course/modedit.php':
				if($('#page-mod-vod-mod').length > 0){
					if((url.search.indexOf('?add=vod')>-1) || (url.search.indexOf('&add=vod')>-1)){
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
					}
				}	
				if($('#page-mod-quiz-mod').length > 0){
					if((url.search.indexOf('?add=quiz')>-1) || (url.search.indexOf('&add=quiz')>-1)){
						//$('#id_gradepass').attr('value','60'); //통과점수
						// $('#id_questionsperpage option[value=20]').attr('selected',true); //한 페이지 당 문제 개수
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
						$('#id_completionview').attr('checked', true);			// 활동이수>'열람필수'
						$('#id_completionusegrade').attr('checked', true);		// 활동이수>'성적필수'
						$('#id_completionpass').attr('checked', true);			// 활동이수>'통과 점수 획득 시 이수 완료'
						//$('#id_overallfeedbackhdr #id_feedbackboundaries_0').val('60%'); //퀴즈 점수에 따른 피드백 > 점수(백분율 환산)
						setTimeout(function(){ 
							$('#id_overallfeedbackhdr .editor_atto_content_wrap #id_feedbacktext_0editable p').text('본 과정을 통과하였습니다.'); //퀴즈 점수에 따른 피드백 > 피드백
							//$('#id_overallfeedbackhdr .editor_atto_content_wrap #id_feedbacktext_1editable p').text('본 과정을 통과하기 위해서 60점 이상의 점수가 필요합니다.'); //퀴즈 점수에 따른 피드백 > 피드백
						}, 3000);
					}
				}	
				if($('#page-mod-feedback-mod').length > 0){
					if((url.search.indexOf('?add=feedback')>-1) || (url.search.indexOf('&add=feedback')>-1)){
						$('#id_anonymous option[value="2"]').prop("selected", true); // 설문조사 방법 > 사용자 이름 기록
						$('#id_publish_stats option[value="1"]').prop("selected", true); //설문조사 제출 후 > 안내 페이지 보기
						setTimeout(function(){ 
							$('#id_page_after_submit_editoreditable p').text('시험을 응시해주세요.'); // 설문조사 제출 후 > 안내 내용
						}, 3000);
						$('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'  
					}
				}	
			break;

			case '/course/view.php':
				$('#page-content .availabilityinfo').hide(); // [제한됨]내용 숨김

				//동영상
				// $('.modtype_vod .activityinstance a').click(function(event) {
				// 	// iOS 기기 여부 확인
				// 	var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
							
				// 	if (isiOS) {
				// 		event.preventDefault(); // 기본 동작 중단

				// 		alert('iOS 기기에서는 동영상 재수강시 이어보기가 원활하지 않습니다.\n본인인증 완료 후 PC환경에서 동영상을 수강해주시기 바랍니다.');
				// 		window.close();	
							
				// 	} 
				// });
			break;	

			case '/mod/vod/viewer.php':
				
				//모바일 기기에서만 모달창 노출
				if(amIMobile()){
					
					var modal = '<div id="myModal" class="modal" tabindex="-1" role="dialog" >' +
									'<div class="modal-dialog" role="document">' +
									'<div class="modal-content">' +
										'<div class="modal-header">' +
										'<h5 class="modal-title">안전보건 교육 모바일 유의사항</h5>' +
										// '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
										// 	'<span aria-hidden="true">&times;</span>' +
										// '</button>' +
										'</div>' +
										'<div class="modal-body">' +
										'<p>• 산업안전보건교육 제5조 인터넷 원격훈련 규정에 따라 작업 또는 운전 시에는 모바일 학습을 하실 수 없습니다.</p>' +
										'<p>• 작업 또는 운전 시에 모바일 학습을 할 경우 산업안전보건교육 규정에 따라 교육 수강으로 인정되지 않습니다.</p>' +
										'<p>• 모바일 수강 학습 시 모든 책임은 교육생에게 있습니다.</p>' +
										'<p style="color:red;">※ 유의사항을 모두 확인하였고 현재 작업/운전 중이 아님을 확인합니다.</p>' +
										'</div>' +
										'<div class="modal-footer" >' +
										'<button style="margin:0 auto 0; margin-bottom:1rem; background-color: #4088C6; color: white;" id="btn-close-modal" type="button" class="btn btn-secondary">네 (작업/운전 중이 아닙니다.)</button>' +
										'<button style="margin:0 auto 0; background-color: red; color: white;" id="btn-close-window" type="button" class="btn btn-secondary">아니요 (작업/운전 중입니다.)</button>' +
										'</div>' +
									'</div>' +
									'</div>' +
								'</div>';

					var htmlModal = $.parseHTML(modal);
					$('#page-mod-vod-viewer').append(htmlModal);

					$(htmlModal).find('#btn-close-window').click(function(){
						window.close();	
					});

					$(htmlModal).find('#btn-close-modal').click(function(){
						$(htmlModal).modal('hide');
					});

					setTimeout(function(){
						$(htmlModal).modal({backdrop: 'static', keyboard: false}, 'show');
					},500);
						
				}
				
				// iOS 기기 여부 확인(2023.10 -잠시 해제)
				/*
				var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

				if (isiOS) {
					alert('iOS 기기에서는 동영상 수강시 이어보기가 원활하지 않습니다.\n본인인증 완료 후 PC환경에서 동영상을 수강해주시기 바랍니다.');
					window.close();	
				} else if(amIMobile()) {
					var modal = '<div id="myModal" class="modal" tabindex="-1" role="dialog" >' +
									'<div class="modal-dialog" role="document">' +
									'<div class="modal-content">' +
										'<div class="modal-header">' +
										'<h5 class="modal-title">안전보건 교육 모바일 유의사항</h5>' +
										// '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
										// 	'<span aria-hidden="true">&times;</span>' +
										// '</button>' +
										'</div>' +
										'<div class="modal-body">' +
										'<p>• 산업안전보건교육 제5조 인터넷 원격훈련 규정에 따라 작업 또는 운전 시에는 모바일 학습을 하실 수 없습니다.</p>' +
										'<p>• 작업 또는 운전 시에 모바일 학습을 할 경우 산업안전보건교육 규정에 따라 교육 수강으로 인정되지 않습니다.</p>' +
										'<p>• 모바일 수강 학습 시 모든 책임은 교육생에게 있습니다.</p>' +
										'<p style="color:red;">※ 유의사항을 모두 확인하였고 현재 작업/운전 중이 아님을 확인합니다.</p>' +
										'</div>' +
										'<div class="modal-footer" >' +
										'<button style="margin:0 auto 0; margin-bottom:1rem; background-color: #4088C6; color: white;" id="btn-close-modal" type="button" class="btn btn-secondary">네 (작업/운전 중이 아닙니다.)</button>' +
										'<button style="margin:0 auto 0; background-color: red; color: white;" id="btn-close-window" type="button" class="btn btn-secondary">아니요 (작업/운전 중입니다.)</button>' +
										'</div>' +
									'</div>' +
									'</div>' +
								'</div>';

					var htmlModal = $.parseHTML(modal);
					$('#page-mod-vod-viewer').append(htmlModal);

					$(htmlModal).find('#btn-close-window').click(function(){
						window.close();	
					});

					$(htmlModal).find('#btn-close-modal').click(function(){
						$(htmlModal).modal('hide');
					});

					setTimeout(function(){
						$(htmlModal).modal({backdrop: 'static', keyboard: false}, 'show');
					},500);
				}*/
			break;	

			//관리자모드 > 과정관리
			case '/local/ubion/index.php/online/curriculum/@edit':
				$('#id_week').val('1').prop("selected", true);
			break;	

			//백업
			case '/backup/import.php':
				// console.log('test');
				$('.ics-results tbody tr').each(function(key, val){
					var categoryTitle = $(this).find('td').text();
					// console.log(categoryTitle);
					if(categoryTitle.includes("[삭제됨]")){
						$(this).hide();
					}			
				});
			break;	

			//퀴즈응시
			case '/mod/quiz/view.php':
				if($('#page-mod-quiz-view').length > 0){
					if($('body').hasClass('lang-ko')){
						var $quizButton = $(".box.py-3.quizattempt .btn.btn-secondary:has(.btn-txt:contains('바로 퀴즈에 응시'), .btn-txt:contains('지난번 시도 계속'))");

						if ($quizButton.length) {
							$quizButton.prop('disabled', true);
							$('#page-content .box.py-3.quizattempt').before("<div style='text-align:center; color:red;'><span>대리시험 등 부정훈련의 사실이 적발 될 경우 미이수 처리됩니다. 동의(확인)하시는 경우에만 시험 응시가 가능합니다.</span><input style='margin-left: 0.5rem;' type='checkbox' id='quizconfirm'></div>");
	
							$('#quizconfirm').on('click', function() {
								$quizButton.prop('disabled', !this.checked);
							});
						}
					} else if($('body').hasClass('lang-en')){
						var $quizButton = $(".box.py-3.quizattempt .btn.btn-secondary:has(.btn-txt:contains('Attempt quiz now'), .btn-txt:contains('Continue the last attempt'))");

						if ($quizButton.length) {
							$quizButton.prop('disabled', true);
							$('#page-content .box.py-3.quizattempt').before("<div style='text-align:center; color:red;'><span>If cheating or any fraudulent activities during the exam are detected, it will result in non-completion of the course. Exam participation is only possible upon agreement (confirmation)</span><input style='margin-left: 0.5rem;' type='checkbox' id='quizconfirm'></div>");
	
							$('#quizconfirm').on('click', function() {
								$quizButton.prop('disabled', !this.checked);
							});
						}
					}
				}				
			break;

			//퀴즈편집
			case '/mod/quiz/edit.php':
				if($('#page-mod-quiz-edit').length > 0){
					$( "<style>#fitem_id_fromtags{display:none;}</style>" ).appendTo("head");	//랜덤 문제 추가 > 'Tags'
				}				
			break;

			//성적부 - 성적항목관리
			case '/grade/edit/tree/index.php':
				if($('#page-grade-edit-tree-index').length > 0){
					// console.log('test');			
				}				
			break;

			//문제은행 > 문제
			case '/question/edit.php':
				if($('#page-question-edit').length > 0){
					// shift 키 눌렀을때 체크박스 다중선택 되도록 (24.04.12 수정자 : haileyy)
					$(document).ready(function() {
						var $chkboxes = $("[id^='checkq']")
						var lastChecked = null;
					
						$chkboxes.click(function(e) {
							if (!lastChecked) {
								lastChecked = this;
								return;
							}
					
							if (e.shiftKey) {
								var start = $chkboxes.index(this);
								var end = $chkboxes.index(lastChecked);
					
								$chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);
							}
					
							lastChecked = this;
						});
					});		
				}				
			break;
			
		}
	}

	// *****************************************************************************
	// 한국식품안전인증원(운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'lms.haccp.or.kr' ){
		if($('#page-site-index').length > 0){
			$('#page-content .filter').hide(); //강좌전체보기
		}
	}	

	// *****************************************************************************
	// 국립공주대 특수교육종합연수원(운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'lms.kongju.ac.kr' ){
		if($('#page-site-index').length > 0){
			$('#page-content .filter').hide(); //강좌전체보기
		}

		//관리자 모드 > 회원관리 > 사용자 일괄 추가 메뉴
		if($('#page-local-ubion-index').length > 0){
			if($('.menu ul').find('li a.submenu').eq(3).text() == '사용자 일괄 추가'){
				$('.menu ul').find('li a.submenu').eq(3).hide();
			}
		}

		if(url.pathname=='/local/ubion/index.php/haksa/dashboard')
		{
			$(document).ready(function() {
				$(location).prop("href", "https://lms.kongju.ac.kr/local/ubion/index.php/online/xth"); //관리자모드 리다이렉팅
			});
		}
		


		switch (url.pathname){
			//이수기준관리
			case '/course/completion.php':
				$('#id_manualselfcompletion').hide(); //조건: 강좌이수 수동확인
			break;	

			//진도현황
			case '/local/ubonattend/report.php':
				$('#page-content .keyfield option[value = "username"]').prop("selected", true); //검색 '이름' 으로 기본 값
			break;	
			
		}

	}	
	// *****************************************************************************
	// 충북대(운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'lms.chungbuk.ac.kr' ){
		
		/********************************************
		 	퀴즈(activity_quiz)
		*********************************************/	
		// 고급설정 > 퀴즈 관리 	
		if(url.pathname=='/mod/quiz/view.php' || 
		url.pathname=='/mod/quiz/edit.php' || 
		url.pathname=='/mod/quiz/report.php' || 
		url.pathname=='/mod/quiz/review.php' ||  
		url.pathname=='/mod/quiz/attempt.php' || 
		url.pathname=='/mod/quiz/summary.php'  || 
		url.pathname=='/mod/quiz/overrides.php' || 
		url.pathname=='/question/edit.php' || 
		url.pathname=='/question/category.php' || 
		url.pathname=='/question/import.php' || 
		url.pathname=='/question/export.php' || 
		((url.pathname=='/course/modedit.php' && $('#page-mod-quiz-mod').length > 0)))
		{
			$($("li",$("#settingsnav ul")).get(0)).css('background-color','#F5EFD7');
			var link;
			$("li",$('#settingsnav li.type_setting ul')).each(function(i) {
				link=$(this).find('a').attr('href');
				if(link.indexOf('/admin/roles')>-1||link.indexOf('/filter/')>-1||link.indexOf('/report/log/')>-1||link.indexOf('/backup/')>-1) { $(this).html(''); }
			}); 
			$("a[href*='/mod/quiz/report.php'][href*=overview]",$("li.type_setting")).each(function() { $(this).attr("href",$(this).attr("href")+"&slotmarks=0"); });
		}

		switch (url.pathname){

			case '/course/modedit.php':
				//퀴즈
				if($('#page-mod-quiz-mod').length>0){
					setTimeout(function(){ 
						// $("#id_security .advanced").addClass("show");
						$("#id_security .moreless-toggler").remove();
					}, 2000);
				}

				//VOD
				if($('#page-mod-vod-mod').length > 0){
					if((url.search.indexOf('?add=vod')>-1) || (url.search.indexOf('&add=vod')>-1)){
						$('#id_completion').val('2').prop("selected",true);		//활동이수>'이수과정추적'
					}
				}
			break;	
			case '/mod/assign/view.php':
				//과제 평가
				if($('#page-mod-assign-view').length>0){
					if($("#page-lnb .block_settings").length > 0) {
						var lesson_id = $.GET('id');
						// console.log(lesson_id);
						var result_url = '/course/modedit.php?update='+lesson_id;
						// console.log(result_url);
						$('#page-content .submissionlinks button.btn-assign-best').after('<a href="'+ result_url +'" class="btn btn-primary update" style="color:#fff;margin-left:3px;background-color: #b9235a;border-color: #b9235a;">과제 설정</a>');
					}

				}
			break;

			case '/mod/quiz/view.php':
				//퀴즈 평가
				if($('#page-mod-quiz-view').length>0){
					if($("#page-lnb .block_settings").length > 0) {
						var lesson_id = $.GET('id');
						// console.log(lesson_id);
						var result_url = '/course/modedit.php?update='+lesson_id;
						// console.log(result_url);
						if($('#page-content .singlebutton').length > 0){
							$('#page-content .quizattempt .singlebutton button.btn-secondary').after('<a href="'+ result_url +'" class="btn btn-secondary update" style="color:#fff;margin-left:3px;background-color: #b9235a;border-color: #b9235a;">퀴즈 설정</a>');
						}else {
							$('#page-content .quizattempt .continuebutton button.btn-secondary').after('<a href="'+ result_url +'" class="btn btn-secondary update" style="color:#fff;margin-left:3px;background-color: #b9235a;border-color: #b9235a;">퀴즈 설정</a>');
						}
					}	
				}
			break;

			case '/mod/forum/export.php':
				//토론방
				if($('#page-mod-forum-export').length>0){
					$("#id_humandates").attr("checked", true);    
				}
			break;	

			// 퀴즈 - 응시
			case '/mod/quiz/attempt.php':
				if($('#page-mod-quiz-attempt').length > 0){
					
					//우클릭 이벤트 방지
					$(document).on('contextmenu', function() {
						return false;
					});
					
					// control 키 방지
					function CtrlAlt() {
						if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
							return false;
						}
					}
					document.onkeydown = CtrlAlt;
	
					//복붙 이벤트 방지 
					$('#page-mod-quiz-attempt').on("cut copy paste",function(e) {
						e.preventDefault();
					});
				}
			break;
			
			//성적부 > 성적항목관리 > 성적항목추가
			case '/grade/edit/tree/item.php':
				if($('#page-grade-edit-tree-item').length>0){
					var max_score = "<div id='fitem_id_grademax' class='form-group row  fitem'><div class='col-md-3 col-form-label d-flex justify-content-md-end'></div><div class='col-md-9 form-inline felement' style='color:red;'>최고성적은 100점 이하로 설정하셔야 합니다. 최고성적이 100점을 초과한 상태에서 가져오기 기능을 사용할 경우, 오류가 발생하며 가져오기 기능이 작동하지 않습니다.</div></div>";
					$('#fitem_id_grademax').after(max_score);
				}
			break;


		}

	}	

	// *****************************************************************************
	// 호서대(운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'learn.hoseo.ac.kr' ){
		if($('#page-site-index').length > 0){
			// 강좌전체보기
			$('#page-content .course-lists .course-option .filter .custom-select option[value="CMS_O"]').hide(); //오픈 강좌
			$('#page-content .course-lists .course-option .filter .custom-select option[value="CMS_M"]').hide(); //기타
		}


		switch (url.pathname){

			case '/course/modedit.php' :
				
				//퀴즈
				if($('#page-mod-quiz-mod').length > 0) {
					//응시에의 추가 제한
					$("#id_security").show();
					setTimeout(function(){ 
						$("#id_security .moreless-toggler").hide(); 	// 더보기 숨김	
						// 동시접속차단 문구 추가
						$('#id_security #form-advanced-div').after('<div class="form-group row fitem" style="color:red;"><div class="col-md-3"></div><div class="col-md-9">학생이 무선(wifi)연결 사용시, 인터넷 연결이 끊어지면 응시중이던 기기에서도 접속이 차단될 수 있습니다.</br>사용시, 학생들이 유선 연결을 이용해 응시하도록 안내 바랍니다.</div></div>')
                    }, 1000);
					$('#id_error_onesessionenabled').parent().parent().addClass('show');	//동시접속차단 보이기
				}

				//줌
                if($('#page-mod-zoom-mod').length > 0) {
					if((url.search.indexOf('?add=zoom')>-1) || (url.search.indexOf('&add=zoom')>-1)){
						$('#id_duration_timeunit').val("60").prop("selected",true);  //진행 시간
					}
                }

				//과제
                if($('#page-mod-assign-mod').length > 0) {
					$('#id_groupsubmissionsettings #fitem_id_groupingid').hide(); 	// 팀분류
					setTimeout(function(){ 
						$('#id_groupsubmissionsettings #id_groupmode').change(function () {
							$('#id_groupsubmissionsettings #fitem_id_groupingid').hide(); 	// 팀분류
						});
					}, 1000);
				}

				//VOD
				if($('#page-mod-vod-mod').length > 0){
					if((url.search.indexOf('?add=vod')>-1) || (url.search.indexOf('&add=vod')>-1)){
						$('#id_completion').val('2').prop("selected",true);		//활동이수>'이수과정추적'
						$('#id_completionview').attr('checked', true);	// 활동이수>'열람필수'
						$('#id_completiontimeenabled').attr('checked', true);	// 활동이수>'학습시간준수' 
					}
				}

			break;

			case '/local/ubonline/intro.php' :
				if($('#page-local_ubonline').length > 0) {
					//MOOC > 과정개설 방법 > 신청방법
					$('#page-content h3').eq(1).append('&nbsp <a class="manual1" style="color:blue; font-size:medium; text-decoration: underline;" href="https://learn.hoseo.ac.kr/local/ubdoc/?id=502430&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/hwp.png" alt class="ml-2"></a>');
					$('#page-content h3').eq(1).append('&nbsp <a class="manual2" style="color:blue; font-size:medium; text-decoration: underline;" href="https://learn.hoseo.ac.kr/local/ubdoc/?id=502432&tp=m&pg=ubfile" target="_blank"><img src="https://s3.ap-northeast-2.amazonaws.com/code.coursemos.co.kr/xls.png" alt class="ml-2"></a>');
				}
			break;

			case '/mod/ubboard/write.php':
				// 게시판 비밀글
				var lesson_id = $.GET('id');
				// console.log(lesson_id);
                if(lesson_id == '2'){
                    // console.log('testeee');
					$("#id_secret").attr("checked", true);            
                }
			break;

		}

	}	

	// *****************************************************************************
	// 제주도민대학(운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'lms.jejudomin.kr' ){
		switch (url.pathname){
			case '/login/index.php' :
				if($('#page-login-index').length > 0) {
					$('#page-content .loginfind').hide(); //사용자 아이디나..
				}
			break;
		}
	}

	// *****************************************************************************
	// KTR-컨소시엄(운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'hrdlms.ktr.or.kr' ){
		switch (url.pathname){
			case '/login/index.php' :
				if($('#page-login-index').length > 0) {
					$('#page-content .loginfind').hide(); //사용자 아이디나..
					$('#region-main .col-notice').hide(); //공지사항
				}
			break;
			
			
			case '/course/modedit.php':
                // *****************************************************************************
                // 활동이수 설정
                // *****************************************************************************  

                // 링크
                if($('#page-mod-url-mod').length > 0){
                    if((url.search.indexOf('?add=url')>-1) || (url.search.indexOf('&add=url')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', true);			// 활동이수>'열람필수'
                    }
                }

                // 동영상
                if($('#page-mod-vod-mod').length > 0){
                    if((url.search.indexOf('?add=vod')>-1) || (url.search.indexOf('&add=vod')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completiontimeenabled').prop('checked', true);	// 활동이수>'학습시간준수' 
                    }
                }	

                // 이러닝콘텐츠
                if($('#page-mod-econtents-mod').length > 0) {
                    if((url.search.indexOf('?add=econtents')>-1) || (url.search.indexOf('&add=econtents')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completiontimeenabled').prop('checked', true);	// 활동이수>'학습시간준수' 
                    }
                }

				//파일
                if($('#page-mod-ubfile-mod').length > 0) {
                    if((url.search.indexOf('?add=ubfile')>-1) || (url.search.indexOf('&add=ubfile')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', true);			// 활동이수>'열람필수'
                    }
                }

                // 폴더
                if($('#page-mod-folder-mod').length > 0) {
                    if((url.search.indexOf('?add=folder')>-1) || (url.search.indexOf('&add=folder')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', true);			// 활동이수>'열람필수'
                    }
                }				

                //과제
                if($('#page-mod-assign-mod').length > 0) {
                    //활동 이수
                    if((url.search.indexOf('?add=assign')>-1) || (url.search.indexOf('&add=assign')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completionusegrade').prop('checked', false);		// 활동이수>'성적필수':이활동..
                        $('#id_completionsubmit').prop('checked', true);		// 활동이수>'성적필수':과제가..
                    }
                }

                // 설문조사
                if($('#page-mod-feedback-mod').length > 0){
                    if((url.search.indexOf('?add=feedback')>-1) || (url.search.indexOf('&add=feedback')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수'
                        $('#id_completionsubmit').prop('checked', true);		// 활동이수>'열람필수'
                    }
                }

                //퀴즈
                if($('#page-mod-quiz-mod').length > 0){
                    //활동 이수
                    if((url.search.indexOf('?add=quiz')>-1) || (url.search.indexOf('&add=quiz')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completionusegrade').prop('checked', true);		// 활동이수>'성적필수'
                    }
				}

				// 투표
				if($('#page-mod-choice-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true); // 활동이수>'이수과정추적' 
					// 활동이수>'열람필수' 
					$('#id_completionview').attr('checked', false);	
					$('#id_completionusegrade').attr('checked', true);
				}				

            break;
			

		}
	}

	// *****************************************************************************
	// KTR-아카데미(운영)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'edulms.ktr.or.kr' ){
		switch (url.pathname){
			case '/login/index.php' :
				if($('#page-login-index').length > 0) {
					$('#page-content .loginfind').hide(); //사용자 아이디나..
					$('#region-main .col-notice').hide(); //공지사항
				}
			break;

			
			case '/course/modedit.php':
                // *****************************************************************************
                // 활동이수 설정
                // *****************************************************************************  

                // 링크
                if($('#page-mod-url-mod').length > 0){
                    if((url.search.indexOf('?add=url')>-1) || (url.search.indexOf('&add=url')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', true);			// 활동이수>'열람필수'
                    }
                }

                // 동영상
                if($('#page-mod-vod-mod').length > 0){
                    if((url.search.indexOf('?add=vod')>-1) || (url.search.indexOf('&add=vod')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completiontimeenabled').prop('checked', true);	// 활동이수>'학습시간준수' 
                    }
                }	

                // 이러닝콘텐츠
                if($('#page-mod-econtents-mod').length > 0) {
                    if((url.search.indexOf('?add=econtents')>-1) || (url.search.indexOf('&add=econtents')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completiontimeenabled').prop('checked', true);	// 활동이수>'학습시간준수' 
                    }
                }

				//파일
                if($('#page-mod-ubfile-mod').length > 0) {
                    if((url.search.indexOf('?add=ubfile')>-1) || (url.search.indexOf('&add=ubfile')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', true);			// 활동이수>'열람필수'
                    }
                }

                // 폴더
                if($('#page-mod-folder-mod').length > 0) {
                    if((url.search.indexOf('?add=folder')>-1) || (url.search.indexOf('&add=folder')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', true);			// 활동이수>'열람필수'
                    }
                }				

                //과제
                if($('#page-mod-assign-mod').length > 0) {
                    //활동 이수
                    if((url.search.indexOf('?add=assign')>-1) || (url.search.indexOf('&add=assign')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적'
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completionusegrade').prop('checked', false);		// 활동이수>'성적필수':이활동..
                        $('#id_completionsubmit').prop('checked', true);		// 활동이수>'성적필수':과제가..
                    }
                }

                // 설문조사
                if($('#page-mod-feedback-mod').length > 0){
                    if((url.search.indexOf('?add=feedback')>-1) || (url.search.indexOf('&add=feedback')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수'
                        $('#id_completionsubmit').prop('checked', true);		// 활동이수>'열람필수'
                    }
                }

                //퀴즈
                if($('#page-mod-quiz-mod').length > 0){
                    //활동 이수
                    if((url.search.indexOf('?add=quiz')>-1) || (url.search.indexOf('&add=quiz')>-1)){
                        $('#id_completion').val('2').prop("selected", true);	// 활동이수>'이수과정추적' 
                        $('#id_completionview').prop('checked', false);			// 활동이수>'열람필수' 
                        $('#id_completionusegrade').prop('checked', true);		// 활동이수>'성적필수'
                    }
				}

				// 투표
				if($('#page-mod-choice-mod').length > 0){
					$('#id_completion').val('2').prop("selected", true); // 활동이수>'이수과정추적' 
					// 활동이수>'열람필수' 
					$('#id_completionview').attr('checked', false);	
					$('#id_completionusegrade').attr('checked', true);
				}				

            break;	
				
		}
	}

	// *****************************************************************************
	// 우송대학교(운영)
	// *****************************************************************************
	
	// Made by #jiyun
	if(url.hostname == 'smart.wsu.ac.kr' ){
		switch (url.pathname){
			case '/course/modedit.php' :
				if($('#page-mod-forum-mod').length > 0) {
					$('#id_grade_forum_header').hide(); //성적
				}

				//동영상
				if($('#page-mod-vod-mod').length > 0){
					$('#fitem_id_popupwidth').hide();	//화면 구성 > '팝업창 너비'
					$('#fitem_id_popupheight').hide();	//화면 구성 > '팝업창 높이'
					$('#id_showsize').hide();				// 화면 구성 > '파일용량 표시'
					$('#id_showsize_description').hide();	// 화면 구성 > '파일용량 표시'
					$('#id_showplaytime').hide();			// 화면 구성 > '재생시간 표시'
					$('#id_showplaytime_description').hide();	// 화면 구성 > '재생시간 표시'
				}
			break;
		}
	}

	// *****************************************************************************
	// csms39(개발)
	// *****************************************************************************
	
	// Made by #ellena
	if(url.hostname == 'csms39.moodler.kr' ){
		switch (url.pathname){
			case '/mod/quiz/comment.php' :
				var lesson_id = $.GET('attempt');
				var lesson_slot = $.GET('slot');
                // console.log(typeof(lesson_id));
				// console.log(typeof(lesson_slot));	
				
				var box = '<div class="card mx-auto mt-4" style="width: 100%; margin-bottom: 1rem;">' +
								'<div class="card-body">' +
									'<h5 class="card-title">AI 평가결과</h5>' +
									'<p class="card-text">점수: 20/20점 (100%)</p><br/>' +
									'<p class="card-text">학생은 상담의 기본 기술인 \'반영\'과 \'명료화\'에 대해 탁월한 이해를 보여주었습니다.</p>' +
									'<p class="card-text">1. 개념 설명: 반영과 명료화 각각의 정의를 정확하고 상세하게 설명했습니다. 특히 반영을 "내담자의 감정이나 경험을 상담사가 자신의 말로 다시 표현하는 기술"로, 명료화를 "내담자의 불명확한 진술을 더 구체적이고 명확하게 만드는 기술"로 정의한 점이 인상적입니다.</p>' +
									'<p class="card-text">2. 예시 제시: 각 기술에 대해 적절하고 현실적인 예시를 제시했습니다. 직장에서의 불안감과 부모와의 관계 문제라는 일상적이면서도 중요한 주제를 다룬 점이 돋보입니다.</p>' +
									'<p class="card-text">3. 효과 설명: 각 기술의 효과를 깊이 있게 설명했습니다. 반영의 효과로 "내담자가 자신의 감정 상태를 더 깊이 들여다볼 수 있게 됨"을, 명료화의 효과로 "내담자가 자신의 생각이나 감정을 더 명확히 인식할 수 있게 됨"을 언급한 점이 우수합니다.</p>' +
									'<p class="card-text">4. 통합적 이해: 두 기술의 상호 보완적 사용이 "내담자의 자기이해를 촉진하고 상담의 효과성을 높일 수 있다"고 언급한 점에서 상담 기술의 통합적 적용에 대한 이해도 보여주었습니다.</p>' +
									'<p class="card-text">향후 발전을 위해, 이러한 기술들이 다양한 상담 상황(예: 위기 상담, 집단 상담 등)에서 어떻게 달리 적용될 수 있는지, 또는 문화적 배경이 다른 내담자와의 상담에서 어떤 점을 주의해야 하는지 등을 고려해 보면 좋을 것 같습니다.</p>' +
								'</div>' +
							'</div>';

				var htmlBox = $.parseHTML(box);

				var box2 = '<div class="card mx-auto mt-4" style="width: 100%; margin-bottom: 1rem;">' +
								'<div class="card-body">' +
									'<h5 class="card-title">AI 평가결과</h5>' +
									'<p class="card-text">점수: 20/20점 (100%)</p><br/>' +
									'<p class="card-text">학생은 Malcolm Knowles의 안드라고지 이론에 대한 탁월한 이해와 적용 능력을 보여주었습니다.</p>' +
									'<p class="card-text">1. 이론의 이해:</p>' +
									'<p class="card-text">- \'학습 준비도\'와 \'학습 동기\'라는 두 가지 주요 가정을 정확하게 선택하고 설명했습니다.</p>' +
									'<p class="card-text">- 각 가정에 대한 설명이 명확하고 깊이 있어, 성인 학습자의 특성을 잘 파악하고 있음을 보여줍니다.</p>' +
									'<p class="card-text">2. 적용 방안:</p>' +
									'<p class="card-text">- 각 가정에 대해 두 가지씩의 구체적인 적용 방안을 제시했습니다.</p>' +
									'<p class="card-text">- \'실제적인 문제 중심 학습\'과 \'맞춤형 학습 경로\' 등의 방안은 성인 학습자의 특성을 고려한 적절한 접근법입니다.</p>' +
									'<p class="card-text">- \'학습의 가치 명확화\'와 \'자기 성찰 활동\' 등은 성인 학습자의 내적 동기를 활용하는 효과적인 전략입니다.</p>' +
									'<p class="card-text">3. 예시:</p>' +
									'<p class="card-text">- 직장인 대상 영어 교육 프로그램과 리더십 개발 프로그램이라는 실제적이고 관련성 높은 예시를 제시했습니다.</p>' +
									'<p class="card-text">- 각 예시에서 구체적인 학습 활동(비즈니스 영어 상황 중심 커리큘럼, 자기 평가 도구 제공 등)을 언급한 점이 우수합니다.</p>' +
									'<p class="card-text">4. 통합적 이해:</p>' +
									'<p class="card-text">- 마지막 문장에서 이러한 적용이 \'성인 학습자의 현실적인 필요와 내적 동기를 고려한 효과적인 학습 환경을 조성할 수 있다\'고 언급한 점에서 이론의 실제적 의의를 잘 이해하고 있음을 보여줍니다.</p>' +
									'<p class="card-text">향후 발전을 위해, 다양한 교육 상황(예: 온라인 학습, 직업 훈련, 평생 교육 등)에서 이 이론을 어떻게 적용할 수 있을지, 또는 다른 학습 이론들과 어떻게 통합하여 사용할 수 있을지 고민해 보면 좋을 것 같습니다.</p>' +
								'</div>' +
							'</div>';

				var htmlBox2 = $.parseHTML(box2);

				var box3 = '<div class="card mx-auto mt-4" style="width: 100%; margin-bottom: 1rem;">' +
								'<div class="card-body">' +
									'<h5 class="card-title">AI 평가결과</h5>' +
									'<p class="card-text">점수: 12/20점 (60%)</p><br/>' +
									'<p class="card-text">학생은 상담의 기본 기술인 \'반영\'과 \'명료화\'에 대한 기초적인 이해를 보여주었습니다.</p>' +
									'<p class="card-text">1. 개념 설명: 반영과 명료화의 기본 개념을 간단히 설명했습니다. 반영을 "내담자가 말한 것을 다시 말해주는 것"으로, 명료화를 "내담자가 말한 것을 더 자세히 물어보는 것"으로 정의한 것은 기본적인 이해를 보여줍니다. 하지만 각 기술의 더 깊은 의미와 목적에 대한 설명이 부족합니다.</p>' +
									'<p class="card-text">2. 예시 제시: 각 기술에 대해 간단하지만 적절한 예시를 제시했습니다. "요즘 너무 힘들어요"와 "가족과 사이가 안 좋아요"라는 예시는 일상적인 상담 상황을 잘 반영하고 있습니다.</p>' +
									'<p class="card-text">3. 효과 설명: 각 기술의 효과에 대해 기본적인 설명을 제공했지만, 더 구체적이고 깊이 있는 설명이 필요합니다. "내담자가 이해받고 있다고 느낄 수 있다"와 "내담자의 상황을 더 잘 알 수 있다"는 언급은 올바르지만, 이러한 효과가 왜 중요한지, 상담 과정에 어떤 영향을 미치는지에 대한 설명이 부족합니다.</p>' +
									'<p class="card-text">4. 개선 필요 사항: 각 기술의 정의를 더 정확하고 상세하게 설명할 필요가 있습니다. 또한, 이 기술들이 어떻게 내담자의 자기 이해와 문제 해결을 돕는지, 상담사와 내담자 간의 관계 형성에 어떤 영향을 미치는지 등에 대한 이해를 깊게 할 필요가 있습니다.</p>' +
									'<p class="card-text">향후 학습을 위해, 각 기술의 목적과 원리에 대해 더 깊이 학습하고, 다양한 상담 사례를 통해 이 기술들이 실제로 어떻게 적용되는지 연습해 보는 것이 도움이 될 것 같습니다.</p>' +
								'</div>' +
							'</div>';
				
				var htmlBox3 = $.parseHTML(box3);

				var box4 = '<div class="card mx-auto mt-4" style="width: 100%; margin-bottom: 1rem;">' +
								'<div class="card-body">' +
									'<h5 class="card-title">AI 평가결과</h5>' +
									'<p class="card-text">점수: 9/20점 (45%)</p><br/>' +
									'<p class="card-text">총평:</p>' +
									'<p class="card-text">학생은 Malcolm Knowles의 안드라고지 이론의 기본적인 개념을 매우 단순화된 형태로 이해하고 있습니다. \'경험의 역할\'과 \'학습 준비도\'와 관련된 개념을 간단히 언급했으나, 정확한 용어 사용이나 깊이 있는 설명이 부족합니다.</p>' +
									'<p class="card-text">성인교육 현장 적용 방안에 대해서는 매우 기본적인 수준의 제안을 했습니다. "경험을 이야기하게 하기"와 "실제로 사용할 수 있는 것 가르치기"라는 제안은 올바른 방향이지만, 구체성과 다양성이 부족합니다.</p>' +
									'<p class="card-text">예시로 제시한 요리 수업은 성인교육과 관련이 있지만, 교육적 맥락에서의 구체적인 적용 방법이 부족합니다.</p>' +
									'<p class="card-text">향후 학습을 위해, 안드라고지 이론의 정확한 용어와 개념을 학습하고, 각 가정이 성인교육에 어떻게 적용될 수 있는지 더 깊이 있게 탐구할 필요가 있습니다. 또한, 다양한 성인교육 상황(예: 직업 훈련, 학위 과정, 평생 교육 등)에서 이 이론이 어떻게 적용될 수 있는지 구체적인 예시를 통해 이해를 넓히는 것이 도움이 될 것입니다.</p>' +
								'</div>' +
							'</div>';

				var htmlBox4 = $.parseHTML(box4);
				
				// 특정 서술형 코멘트(평가결과)
				if(lesson_id == '659' && lesson_slot == '1'){
					$('.que .comment').before(htmlBox);
				} else if(lesson_id == '659' && lesson_slot == '2'){
					$('.que .comment').before(htmlBox2);
				} else if(lesson_id == '660' && lesson_slot == '1'){
					$('.que .comment').before(htmlBox3);
				} else if(lesson_id == '660' && lesson_slot == '2'){
					$('.que .comment').before(htmlBox4);
				}
			break;
		}
	}	

});

$.GET = function(name){ // Don't Confuse between php = $_GET '[]' this $.GET '()' 
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}