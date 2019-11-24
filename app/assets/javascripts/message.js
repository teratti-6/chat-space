$(function(){
  function buildPost(message){
    var imgUrl = message.image.url ? `<img src=${message.image.url}>` : '';
      var html =  `<div class="main-message">
                    <div class="main-message__info">
                      <div class="main-message__info__user">
                        ${message.name}
                      </div>
                      <div class="main-message__info__time">
                        ${message.date}
                      </div>
                    </div>
                    <div class="main-message__talk">
                      <p class="lower-message__content">
                        ${message.message}
                      </p>
                      ${imgUrl}
                    </div>
                  </div>`
      return html
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url, 
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      var html = buildPost(message)
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.new-message') [0].reset();
    })
    .fail(function() {
      alert('error');
    })
    .always(function(data){
      $('.new-message__submit').prop('disabled', false);
    })
  })
});