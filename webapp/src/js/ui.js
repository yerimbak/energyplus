window.addEventListener('DOMContentLoaded', () => {

	/** 
	* board-title-area 클릭시 
	*  - read 클래스 추가 (읽음 표시)
	*  - is-active 클래스 토글 (컨텐츠 슬라이드)
	*/
	const boardTitleAreas = document.querySelectorAll('.board-title-area');
	boardTitleAreas.forEach( boardTitleArea => { 
		boardTitleArea.addEventListener('click', event => {
			const currentActiveItem = document.querySelector('.board-title-area.is-active')
			if(currentActiveItem && currentActiveItem != boardTitleArea) {
				currentActiveItem.classList.remove('is-active')
			}
			boardTitleArea.classList.toggle('is-active');
			boardTitleArea.classList.add('read');
		});
	});

	/**
	 * 버튼 토글 스크립트
	 * btn-toggle 클릭시
	 * is-active 클래스 토글
	 */
	const toggleBtns = document.querySelectorAll('.btn-toggle');
	toggleBtns.forEach(toggleBtn => {
		toggleBtn.addEventListener('click', (event) => {
			toggleBtn.classList.toggle('is-active');
		});
	});
  console.log(toggleBtns);

	/**
	 * ==============================================
	 * Tag Item Toggle
	 * ==============================================
	 */
	const tagItems = document.querySelectorAll('.tag-item');
	tagItems.forEach(tagItem => {
		tagItem.addEventListener('click', event => {
			const selectedTagItem = document.querySelector('.tag-item.is-selected');

      // tagItem === .tag-item 
      // .tag-item.is-selected 
			if(selectedTagItem && selectedTagItem != tagItem) {
				selectedTagItem.classList.toggle('is-selected');
			}

			tagItem.classList.toggle('is-selected');
		});
	});

	/**
	 * gnb 스크립트
	 * btn-all 클릭시
	 * #gnb [is-active] 클래스 토글 / body [is-fixed] 클래스 토글
	 */
	 const $menuAll = document.querySelector('.menu-all');
	 const $gnb = document.querySelector('#gnb');
	 const $body = document.querySelector('body');
		if ($menuAll !== null) {
			$menuAll.addEventListener('click', event => {
				$gnb.classList.toggle('is-active');
				$body.classList.toggle('is-fixed');
			});
		}

	/**
	 * ==============================================
	 * 팝업 닫기 
	 * dim영역과 btn-close 버튼 클릭시 닫기 
	 * modal에 is-active 클래스 추가
	 * ==============================================
	 */
	
	const btnClose = document.querySelector('.btn-close'),
		modal = document.querySelector('.modal'),
		dim = document.querySelector('.modal-background'),
		body = document.querySelector('body');

		if (btnClose !== null) {
			btnClose.addEventListener('click', event => {
				modal.classList.remove('is-active');
				body.classList.remove('is-fixed');
			});
			dim.addEventListener('click', event => {
				modal.classList.remove('is-active');
				body.classList.remove('is-fixed');
			});
		}

	/**
	 * =====================================================
	 * 한글 자판보기 클릭시 keyboard-area에서 hide 클래스 제거
	 * =====================================================
	 */
	const viewKeyboard = document.querySelector('.view-keyboard');
	const keyboardArea = document.querySelector('.keyboard-area');
	
	if (viewKeyboard !== null) {
		viewKeyboard.addEventListener('click', () => {
			keyboardArea.classList.toggle('hide');
			viewKeyboard.classList.toggle('is-active');
		});
	}
  
	const inputId = document.querySelector('#id'),
	  inputPw = document.querySelector('#password'),
	  btnDelId = document.querySelector('#btn-del-id'),
	  btnDelPw = document.querySelector('#btn-del-password');
	  
	  if (inputId !== null) {
		// btn-del 버튼 나타남
		inputId.addEventListener('keyup', () => {
			btnDelId.classList.add('show')
		});
		inputPw.addEventListener('keyup', () => {
			btnDelPw.classList.add('show')
		});

		// btn-del클릭시 input value 초기화
		btnDelId.addEventListener('click', () => { 
			inputId.value = "";
			btnDelId.classList.remove('show');
		});
		btnDelPw.addEventListener('click', () => { 
			inputPw.value = "";
			btnDelPw.classList.remove('show');
		});
	  }

	  /**
	 * ===========================================
	 * 주유소 리뷰 rate : 클릭시 set-on 클래스 토글
	 * ===========================================
	 */
	const rateItem = document.querySelectorAll('.rate-item');
	rateItem.forEach(rateItem => {
		rateItem.addEventListener('mouseenter', event => {
			rateItem.classList.add('set-on');
			rateItem.previousElementSibling.classList.add('set-on');
		});
		rateItem.addEventListener('mouseleave', event => {
			rateItem.classList.remove('set-on');
			rateItem.nextElementSibling.classList.remove('set-on');
		});
	});

	/**
	 * ==================================================================
	 * 바로주유등록 : stepper-step-item 클릭시 is-active 클래스 추가 (임시)
	 * ==================================================================
	 */
	// const stepItem = document.querySelectorAll('.stepper-step-item');
	// stepItem.forEach(stepItem => {
	// 	stepItem.addEventListener('click', event => {
	// 		const currentlyStepItem = document.querySelector('.stepper-step-item.is-active');
	// 		if(currentlyStepItem && currentlyStepItem != stepItem) {
	// 		currentlyStepItem.classList.remove('is-active');
	// 		currentlyStepItem.style.maxHeight = 64;
	// 		}
			
	// 		stepItem.classList.add('is-active');
	// 		if(stepItem.classList.contains('is-active')) {
	// 		   stepItem.style.maxHeight = stepItem.scrollHeight + 'px';
	// 		}
	// 		else {
	// 			stepItem.style.maxHeight = 64;
	// 		}
	// 	});
	// });

}); // DOMContentLoaded