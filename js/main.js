window.addEventListener('DOMContentLoaded', () => {
        initSwiper(); //ライブラリセクションのスライドショー
        observer(); //スクロール表示
});

//ライブラリセクションのスライドショー
const initSwiper = () => {
    const slideLength = document.querySelectorAll('.swiper-slide').length;
    const mySwiper = new Swiper('.swiper', {
        slidesPerView: 'auto',//スライド枚数
        loop: true,//スライド回数
        loopedSlides: slideLength,//スライド表示枚数
        speed: 8000,//スライド速度
        autoplay: {
        delay: 0,//アニメーション開始時間
        disableOnInteraction: false,//スライド選択機能
        reverseDirection: true,//スライド向き
    },
});
};

//スクロール表示
const observer = () => {

    let target = document.querySelectorAll('.fadeinSection');
    
    let op = {
        root: null,
        rootMargin: '-300px 0px -200px 0px'
    };

    let ob =  new IntersectionObserver (cb, op);

    for (let n = 0; n < target.length; n++) {
        ob.observe(target[n]);
      };
};

function cb(entries, ob) {
    entries.forEach((entry, n) => {
    const nowElement = entry.target;
      if (entry.isIntersecting) {
        nowElement.classList.add('inview');
      }
    });
  };