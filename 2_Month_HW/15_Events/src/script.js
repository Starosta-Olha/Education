window.addEventListener('DOMContentLoaded', () => {
    init();
})

function init(){
    const showAll = document.getElementById('showAll');
    const close = document.getElementById('close-slider');
    const mainImage = document.getElementById('mainImage');
    const allPhotos = document.querySelectorAll('.smallImg');
    const blockPhotos = document.getElementById('imgContainer');
    const slider = document.getElementById('slider')
    let sliderInterval;

    mainImage.src = allPhotos[0].src;

    blockPhotos.addEventListener('click', (event) => {
        const img = event.target;

        if(!(img.dataset.type === 'img')) {
            return;
        }

        mainImage.src = img.src;
    });

    showAll.addEventListener('click', () =>{
        openSlider();
        sliderPhotos();
    })

    close.addEventListener('click', () =>{
        closeSlider();
        clearTimeout(sliderInterval);
    })

    function sliderPhotos (){
        let i=0;
        slider.src = allPhotos[i].src;
        sliderInterval = setInterval(()=>{
            i++;
            slider.src = allPhotos[i].src;
        }, 1500)
    }
    function openSlider(){
        document.getElementById("content_slider").classList.toggle("show");
    }
    function closeSlider(){
        document.getElementById("content_slider").classList.remove("show");
    }
}

