$(document).ready(function(){
    $('.moreDescription').hide();
    $(".cards").click(function(){
        var card = $(".moreDescription", this).attr('id');
        $('#'+card+'').toggle();
        var arrow = $(".show", this).attr('id');
        $('#'+arrow+'').toggleClass('showReverse');
    });
  });