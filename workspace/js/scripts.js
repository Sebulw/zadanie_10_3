var span = $("span");
    span.each(function(index, element) {
        if (index % 2 == 0) {
            $(element).css('color', 'red');
        }
});
var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' +index + '">Click me</button>';
    $(element).append(button);
});
$('button').click(function() {
    console.log($(this));
    console.log($(this).attr('data-tmp'));
    alert($(this).attr('data-tmp'));
});