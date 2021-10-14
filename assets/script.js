var date = moment().format('dddd, MMM, Do YYYY')
$('#currentDay').text(date)
var saveBtn = $('.saveBtn')

saveBtn.on('click', function () {
    var content = $(this).siblings('.content')
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, content);
})