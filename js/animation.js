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

// モンスターのHPを削る処理
const button = document.getElementById('attack-button');
const monsterMeter = document.getElementById('monster-HP');
let monster_HP = Number(monsterMeter.value); // ボスの体力
let monster_HP_rest = document.getElementById('monster-HP__rest');

function meter_animation(fromValue, toValue) {
    const target = { value: fromValue };
    gsap.killTweensOf(target);
    gsap.to(target, {
        value: toValue,
        duration: 0.5,
        ease: 'power2.inOut',
        onUpdate: () => {
            const current = Math.round(target.value);
            monsterMeter.value = current;
            monster_HP_rest.textContent = current;
        },
        overwrite: 'auto',
    });
}

function attack() {
    let damage = Math.trunc(Math.random() * 101);
    const prev = monster_HP;
    monster_HP = Math.max(0, monster_HP - damage);
    meter_animation(prev, monster_HP);
    console.log(monster_HP);
}

button.addEventListener('click', () => {
	attack();
	if(monster_HP <= 0) {
		button.disabled = true;
		button.textContent = '倒した！';
	}
});
