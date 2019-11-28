$(function(){
  function buildPost(message){
    var imgUrl = message.image ? `<img src=${message.image}>` : '';
    var content = message.content ? `${message.content}` : '';
      var html =  `<div class="main-message" data-id=${message.id}>
                    <div class="main-message__info">
                      <div class="main-message__info__user">
                      ${message.name}
                      </div>
                      <div class="main-message__info__time">
                      ${message.created_at}
                      </div>
                    </div>
                    <div class="main-message__talk">
                      <p class="lower-message__content">
                      ${content}
                      </p>
                      ${imgUrl}
                    </div>
                  </div>`
      return html;
    };
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
  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.main-message:last').data("id");
      console.log(last_message_id)
      group_id = $(".messages").data("group-id");
      $.ajax({
        url: `/groups/${group_id}/api/messages`,
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id }
      })
      .done(function (messages) {
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildPost(message);
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 7000);
});