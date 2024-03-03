document.addEventListener("DOMContentLoaded", function() {

    var logo = document.querySelector('.logo img');

    logo.addEventListener('click', function() {
        // Stop animation
        logo.style.animationPlayState = 'paused';


        logo.style.animation = 'bounceOffAndDisappear 1s forwards';

        var shoeImages = [
            ["Assets/images/front/front01.jpg", "Assets/images/side/side01.jpg", "Assets/images/top/top01.jpg", "Assets/images/back/back01.jpg", "Assets/images/bottom/bottom01.jpg", "Assets/images/other/other01.jpg"],
            ["Assets/images/front/front02.jpg", "Assets/images/side/side02.jpg", "Assets/images/top/top02.jpg", "Assets/images/back/back02.jpg", "Assets/images/bottom/bottom02.jpg", "Assets/images/other/other02.jpg"],
            ["Assets/images/front/front03.jpg", "Assets/images/side/side03.jpg", "Assets/images/top/top03.jpg", "Assets/images/back/back03.jpg", "Assets/images/bottom/bottom03.jpg", "Assets/images/other/other03.jpg"],
            ["Assets/images/front/front04.jpg", "Assets/images/side/side04.jpg", "Assets/images/top/top04.jpg", "Assets/images/back/back04.jpg", "Assets/images/bottom/bottom04.jpg", "Assets/images/other/other04.jpg"],
            ["Assets/images/front/front05.jpg", "Assets/images/side/side05.jpg", "Assets/images/top/top05.jpg", "Assets/images/back/back05.jpg", "Assets/images/bottom/bottom05.jpg", "Assets/images/other/other05.jpg"],
            ["Assets/images/front/front06.jpg", "Assets/images/side/side06.jpg", "Assets/images/top/top06.jpg", "Assets/images/back/back06.jpg", "Assets/images/bottom/bottom06.jpg", "Assets/images/other/other06.jpg"]
        ];
    

        var boxes = document.querySelectorAll('.box');
        boxes.forEach(function(box, index) {
            // Initialize
            var currentIndex = 0;
    
            box.addEventListener('click', function() {
                var currentImage = box.querySelector('img');
                var currentSrc = currentImage.src;   
                var currentImages = shoeImages[index];
                for (var i = 0; i < currentImages.length; i++) {
                    if (currentImages[i] === currentSrc) {
                        currentIndex = i;
                        break;
                    }
                }
    
                currentIndex = (currentIndex + 1) % currentImages.length;
                currentImage.src = currentImages[currentIndex];
    
            });
        });
    });
});
