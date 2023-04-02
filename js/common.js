window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        HamburgerMenu; //ハンバーガーメニュー
        scrollUp(); //スクロールアップ
        
    },0);
});

//ハンバーガーメニュー
class hamburgerMenu {
    constructor (ob) {
        const trigger = document.querySelector(ob.navBtn); //メニューボタン
        const open = document.querySelector(ob.hamMenu); //メニュー画面
        const closeBg = document.querySelector(ob.hamClose); //メニュー画面背景
        const Logo = document.querySelector(ob.headerLogo); //ヘッダーロゴ
        const hamOpen = 'open';
        
        trigger.addEventListener('click', () => { 
            trigger.classList.toggle(hamOpen);
            open.classList.toggle(hamOpen);
            closeBg.classList.toggle(hamOpen);
            Logo.classList.toggle('close');
        });
        
        closeBg.addEventListener('click', () => {
            trigger.classList.remove(hamOpen);
            open.classList.remove(hamOpen);
            closeBg.classList.remove(hamOpen);
            Logo.classList.remove('close');
        });
    }
};
const HamburgerMenu = new hamburgerMenu({
    navBtn: '.header__navigation',
    hamMenu: '.top__hamburger',
    hamClose: '.top__hamburger-background',
    headerLogo: '.header__logo',
});

//スクロールアップ
const scrollUp = () => {

    const pagetopBtn = document.querySelector('.pageUpBtn');
    pagetopBtn.addEventListener('click', scroll_top);
    function scroll_top(){
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
};