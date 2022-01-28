// function clickImg() {
//     const bigImg = document.querySelectorAll('.img-img')
//     bigImg.forEach(btn => btn.addEventListener('click', big))
//     function big() {
//         // this.closest('.img-img').remove()
//         bigImg.classList.toggle('')
//     }
//     // bigImg.forEach(btn =>)
// }
// clickImg()


let switchMode = document.getElementById("switchMode")
switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/dark-theme-style.css") {
        theme.href = "css/light-theme-style.css";
    }
    else {
        theme.href = "css/dark-theme-style.css";
    }
}




$(".img-img").magnificPopup({
    type: "image",
    gallery: {
        enabled: true
    },
    removaDelay: 300,
    mainClass: 'mfp-fade',
    midClick: true,
});






// function modal(){
//     const slider = document.querySelector('.img-img')
//     const modal = document.querySelector('.modal-img')
//     slider.addEventListener('click', function(e){
//         modal.classList.toogle('modal-img-active')
//     })
// }
// modal();










// function themesD() {
//     const lightTheme = document.querySelector('.header-theme-circle')
//     const header = document.querySelector('.header-theme')
//     header.addEventListener('click', function () {
//         lightTheme.classList.toggle('header-theme-circle-deactive')
//     })
// }
// themesD()
// function themesL() {
//     const DarkTheme = document.querySelector('.header-theme-circle')
//     DarkTheme.addEventListener('click', function () {
//         lightTheme.classList.toggle('header-theme-circle-deactive')

//     })
// }
// themesL()





$('.img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    draggable: false,
    prevArrow: "<img class= 'prev' src='images/arrL.svg'>",
    nextArrow: "<img class= 'next' src='images/arrR.svg'>",
});






// const arrActive = document.querySelectorAll('.accardion-title');
// arrActive.addEventListener('click', clickArrow)
// function clickArrow(event) {
//     event.preventDefault()
//     for (let active of arrActive) {
//         this.closest('accardion-title').remove()
//         active.classList.add('accardion-title-active')
//     }





// 1 вариант accardion
// function accardion() {
//     document.querySelectorAll('.accardion-title').forEach((el) => {
//         el.addEventListener('click', () => {
//             let content = el.nextElementSibling;
//             if (content.style.maxHeight) {
//                 document.querySelectorAll('.accardion-img').forEach((el) => el.style.maxHeight = null)
//                 el.classList.toggle('accardion-title-active')
//             } else {
//                 document.querySelectorAll('.accardion-img').forEach((el) => el.style.maxHeight = 1)
//                 content.style.maxHeight = content.scrollHeight + 'px'
//                 el.classList.toggle('accardion-title-active')
//             }
//         })
//     })
// }
// accardion()





// 2 вариант accardion (сломанный)
+ function () {
    document.querySelector('.accardion-section').classList.add('accardion-img-active')
    document.querySelector('.accardion-title').classList.toggle('accardion-title-active')

    const secTion = document.querySelectorAll('.accardion-section').forEach(function (section) {
        section.addEventListener('click', function (e) {



            e.target.closest('.accardion-section').classList.toggle('accardion-img-active')
            e.target.closest('.accardion-title').classList.toggle('accardion-title-active')
        })
    })
}()
