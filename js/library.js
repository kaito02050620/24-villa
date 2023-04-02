//ライブラリイメージモーダル

const mq = window.matchMedia('(min-width: 500px)');
const iventBtn = document.querySelectorAll('.library__item > img');

if (mq.matches) {

	mediumZoom( iventBtn, {
		margin: 50,
		background: 'rgba(0, 0, 0, 0.8)',
		scrollOffset: 0,
	});
} 
