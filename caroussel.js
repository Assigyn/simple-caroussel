
      $(document).ready(function() {
        var i = 1;
        var nbImg = 5;
        var currentImage = $('img').attr('src').split('-');
        var img =$('.carrousel-img').find('img');

        function next(){
          i++;
          if (i > nbImg) i = 1;
          var nextImage = currentImage[0] + '-0' + i + '.jpg';
          img.attr({'src': nextImage, 'alt': nextImage});
        };

        $('.prev').on('click', function(){
          i--;
          if (i < 1) i = nbImg;
          var prevImage = currentImage[0] + '-0' + i + '.jpg';
          img.attr({'src': prevImage, 'alt': prevImage});
        });

        $('.next').on('click', function(){
          next();
        });

        setInterval(function(){
          next();
        }, 3000);

      });
