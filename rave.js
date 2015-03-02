$(function()
{
	var bd = $('body');

	var classname = "invertimg";

	var i = 0;
	var next = i + 1;
	setInterval(function()
	{
		
		if(i === 9)
			next = 0;
		else
			next = i + 1;
		bd.switchClass(classname + i, classname + (next));
		i++;
		if(i === 10)
		{
			i = 0;
		}

	}, 100);

});

var p = chrome.extension.getURL('ss.ogg');

$("<audio></audio>").attr({
	
    'src': p,
    'autoplay':'autoplay',
    'loop' : 'loop',
    'type' :'audio/mpeg'
}).appendTo("body");