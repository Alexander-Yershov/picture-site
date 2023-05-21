const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
        img.classList.remove('animated', 'fadeIn');
        img.classList.add('animated', 'fadeInUp');
    };

    function hideImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });

        img.classList.remove('animated', 'fadeInUp');
        img.classList.add('animated', 'fadeIn');
    };

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });


        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });



};

export default pictureSize;