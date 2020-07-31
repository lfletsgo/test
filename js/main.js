$(document).off('click','#abc').on('click','#abc',function(){
var that = $(this);
that.css({background:'green'});
});
