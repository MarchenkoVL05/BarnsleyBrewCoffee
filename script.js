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
            block.classList.remove('active-block');
           });
           images.forEach(image => {
            image.classList.remove('active-img', 'smooth');
           });
           headers.forEach(header => {
            header.classList.remove('active-header');
           });
           descrs.forEach(descr => {
            descr.classList.remove('active-descr');
           });
           prices.forEach(price => {
            price.classList.remove('active-price');
           });
    }

    function showCard(i = 0) {
        images[i].classList.add('active-img', 'smooth');
        blocks[i].classList.add('active-block');
        headers[i].classList.add('active-header');
        descrs[i].classList.add('active-descr');
        prices[i].classList.add('active-price');
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



    

        

    

