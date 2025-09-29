const slide_circle = document.getElementById('trigger-button');

slide_circle.addEventListener('click', () => {
	// スライドボタンを押した後の処理
	if(slide_circle.classList.contains('slide-on')){
		gsap.to('.slide-circle', {
			x: 0, // 水平方向
			duration: 0.5,
		});
		slide_circle.classList.remove('slide-on');
	} else {
		// スライドボタンを押す前の処理
		gsap.to('.slide-circle', {
			x: 70, // 水平方向
			duration: 0.5,
		});
		slide_circle.classList.add('slide-on');
	};
});