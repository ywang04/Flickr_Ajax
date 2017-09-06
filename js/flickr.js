$('button').on('click',function(){
  $('button').removeClass('selected');
  $(this).addClass('selected');
  var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      animal = $(this).text(),
      flickerOptions = {
        tags: animal,  //filter data set
        format: "json"
      },
      displayPhotos = function(response){
        var statusHtml = '<ul>';
        $.each(response.items,function(index,photo){
          statusHtml += '<li class="grid-25 tablet-grid-50">';
          statusHtml += '<a href="' + photo.link + '"class ="image">';
          statusHtml += '<img src="' + photo.media.m + '"></a></li>';
        });
        statusHtml += '</ul>';
        $('#photos').html(statusHtml);
      };
  $.getJSON(flickerAPI,flickerOptions,displayPhotos);
});
