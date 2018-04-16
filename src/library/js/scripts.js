$(function(){

  $('#send').click(function(){
    // $('body .loading-window').addClass('shown');
    $('body').addClass('loading');
    $('body').append('<iframe src="http://natanmor11.tedsplans.hop.clickbank.net/?pid=10&tid=tracking" height="1000" width="1000"></iframe>');
  });
  
});