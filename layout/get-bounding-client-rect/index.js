var $innerBox = $('.inner'),
    $dataBox = $('.data-box'),
    innerBox = $innerBox[0],
    clientRect = innerBox.getBoundingClientRect();


/* OUTPUT */
var text = 'info from <strong>innerBox.getBoundingClientRect()</strong> : <br/><ul>',
    i;

for(i in clientRect){
    text += '<li><strong>'+i+'</strong>: ' + clientRect[i] + '</li>';
}

$dataBox.html(text+'</ul>');
