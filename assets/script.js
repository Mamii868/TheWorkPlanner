var date = moment().format('dddd, MMM, Do YYYY')
$('#currentDay').text(date)
var saveBtn = $('.saveBtn')

saveBtn.on('click', function () {
    var content = $(this).siblings('.content').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, content);
    window.alert("saved")
});

$('#9am .content').val(localStorage.getItem("9am")) 
$('#10am .content').val(localStorage.getItem("10am")) 
$('#11am .content').val(localStorage.getItem("11am")) 
$('#12pm .content').val(localStorage.getItem("12pm")) 
$('#1pm .content').val(localStorage.getItem("1pm")) 
$('#2pm .content').val(localStorage.getItem("2pm")) 
$('#3pm .content').val(localStorage.getItem("3pm")) 
$('#4pm .content').val(localStorage.getItem("4pm")) 
$('#5pm .content').val(localStorage.getItem("5pm")) 