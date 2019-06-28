$(document).ready(function (){
    $('.top-head ul > li').each(function(){
        var t = null;
        var li = $(this);
        li.hover(function(){
            t = setTimeout(function(){
                li.find("ul").fadeIn(200);
                t = null;
            }, 200);
        }, function(){
            if (t){
                clearTimeout(t);
                t = null;
            }
            else
                li.find("ul").fadeOut(200);
        });
    });
});

$(document).ready(function (){
    $('.gnb > li').each(function(){
        var t = null;
        var li = $(this);
        li.hover(function(){
            t = setTimeout(function(){
                li.find("ul").fadeIn(100);
                t = null;
            }, 200);
        }, function(){
            if (t){
                clearTimeout(t);
                t = null;
            }
            else
                li.find("ul").fadeOut(100);
        });
    });
}); 