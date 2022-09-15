$(document).ready(function () {
    $('.moreDescription').hide();
    $(".cards").click(function (e) {
        e.preventDefault();
        var card = $(".moreDescription", this).attr('id');
        var arrow = $(".show", this).attr('id');
        $('#' + card + '').toggle();
        $('#' + arrow + '').toggleClass('showReverse');
    });
});