// index.js
const productSwiper = document.querySelectorAll('.container .list_container .swiper');

console.log(productSwiper);

/* const bestSwiper = new Swiper(productSwiper[0],{
    slidesPerView:'auto',
    spaceBetween:30,
    slidesPerGroup:4,
    pagination:{
        el:'.list_container .swiper .swiper-pagination',
    }
}) */

// index 제품 스와이퍼 JS
function initSwiper(target){
    return new Swiper(target, {
        slidesPerView:'auto',
        spaceBetween:30,
        slidesPerGroup:4,
        pagination:{
            el:'.list_container .swiper .swiper-pagination',
        },
    // swiper navigation
        navigation:{
            prevEl:'.swiper .control_bar .prev',
            nextEl:'.swiper .control_bar .next',
        },
    }
    )};

initSwiper(productSwiper[0]);
initSwiper(productSwiper[1]);
initSwiper(productSwiper[2]);


// best seller 카테고리 이벤트 JS
const bsCategory = document.querySelectorAll('.best_seller .title .list a');
const bsContents = document.querySelectorAll('.best_list .swiper');

console.log(bsCategory, bsContents);

// 전부 숨기기
for(let i=0; i < bsContents.length; i++) {
    bsContents[i].style.display = 'none';
}
// 첫번째(기초) 콘텐츠만 보이기
bsContents[0].style.display = 'block';

// 클릭 이벤트
for(let i=0; i < bsCategory.length; i++) {
    bsCategory[i].addEventListener('click', function(e){
        e.preventDefault(); // a href 속성 없애기
        for(let j = 0; j < bsContents.length; j++){
            bsContents[j].style.display='none';
            bsCategory[j].classList.remove('active'); // active 제거
        } // 전부 숨기기
        bsContents[i].style.display='block'; // 클릭한 것만 보이기
        bsCategory[i].classList.add('active'); // active 추가
    })
}

/* //초기 상태(기초 콘텐츠만 보이기)
bestSellerTitle[0].style.display = 'none';
bestSellerTitle[1].style.display = 'block';

bestSellerCate[1].addEventListener('click', cateShow);
function cateShow(){
    bestSellerTitle[0].style.display = 'none';
    bestSellerTitle[1].style.display = 'block';
}; */