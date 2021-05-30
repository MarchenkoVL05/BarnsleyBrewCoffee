'use strict';
window.addEventListener('DOMContentLoaded', () => {

    const packs = document.querySelector('.packs');
    const blocks = document.querySelectorAll('.pack-block');
    const images = document.querySelectorAll('.pack-image');
    const headers = document.querySelectorAll('.pack-header');
    const descrs = document.querySelectorAll('.pack-descr');
    const prices = document.querySelectorAll('.pack-price');

    function hideCard() {
        blocks.forEach(block => {
            block.classList.remove('active-block', 'more-smooth');
           });
           images.forEach(image => {
            image.classList.remove('active-img', 'smooth');
           });
           headers.forEach(header => {
            header.classList.remove('active-header', 'header-increase');
           });
           descrs.forEach(descr => {
            descr.classList.remove('active-descr', 'descr-increase');
           });
           prices.forEach(price => {
            price.classList.remove('active-price', 'emerge');
           });
    }

    function showCard(i = 0) {
        images[i].classList.add('active-img', 'smooth');
        blocks[i].classList.add('active-block', 'more-smooth');
        headers[i].classList.add('active-header', 'header-increase');
        descrs[i].classList.add('active-descr', 'descr-increase');
        prices[i].classList.add('active-price', 'emerge');
    }

    packs.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('pack-image') || e.target.classList.contains('pack-block') || e.target.classList.contains('pack-descr')) {
            images.forEach((item, i) => {
                if (e.target == item) {
                    hideCard();
                    showCard(i);
                }
            });
        }
    });

    showCard(0);

});



    

        

    

