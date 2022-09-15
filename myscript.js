$(document).ready(function(){
    $('.moreDescription').hide();
    $(".cards").click(function(){
        var card = $(".moreDescription", this).attr('id');
        var arrow = $(".show", this).attr('id');
        $('#'+card+'').toggle();
        $('#'+arrow+'').toggleClass('showReverse');
    });
  });