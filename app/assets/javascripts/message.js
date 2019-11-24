$(function(){
  function buildPost(message){
    if (message.image.url) {
      var html = `<div class="main-message">
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
                      <img src=${message.image.url}></img>
                    </div>
                  </div>`
      } else {
      var html = `<div class="main-message">
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
                    </div>
                  </div>`
      }
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
      $('#message_content').val('');
      $('.new-message__input-box__text__image__file').val('');
    })
    .fail(function() {
      alert('error');
    })
    .always(function(data){
      $('.new-message__submit').prop('disabled', false);
    })
  })
});