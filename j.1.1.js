var yzgCommon = {
    init:function (){
        this.showMenu();
        this.selectMenu();
    },

    //鏄剧ず涓嬫媺鑿滃崟
    showMenu:function (){

        $("#menu li").mouseenter(function(){

            $(this).addClass("active");
            var obj = $(this).find(".menu-down");
            if(obj.length>0){
                obj.show();
            }
        }).mouseleave(function(){
            $("#menu .menu-down").hide();
            $("#menu li").removeClass("active")
        })
    },


    //閫変腑褰撳墠鑿滃崟
    selectMenu:function(){

        var url = document.location.href;
        if (url.indexOf("yzg_home.html")>0 || url.indexOf("index")>0){
            $("#yzg_home").addClass("select");
        }
        if (url.indexOf("yzg_join.html")>0 || url.indexOf("loginUserApp")>0){
            $("#yzg_join").addClass("select");
        }
        if (url.indexOf("yzg_question")>0 || url.indexOf("yzg_agreement")>0){
            $("#yzg_question").addClass("select");
        }
        if (url.indexOf("yzg_index.html")>0 || url.indexOf("yzg_phone")>0 || url.indexOf("yzgpc")>0  ){
            $("#yzg_tool").addClass("select");
        }
        if (url.indexOf("yzg_equip")>0){
            $("#yzg_equip").addClass("select");
        }
    }
}
$(document).ready(function(){
    yzgCommon.init();
    $('.header .topbar .dtbt').hover(function(){
        $(this).children('.dtbt-img').show();
    },function(){
        $(this).children('.dtbt-img').hide();
    });

    //澧炲姞閭帉鏌�4.0璇曠偣閾炬帴
    var $span = $('.dl_area .download4 span');
    var tempText = $span.html(); $span.html('');
    $('.dl_area .download4_link').hover(function(){
        $span.html(tempText);
    }, function(){
        $span.html('');
    });

    //閭姪鎵�
    var $helpLink = $('#header a.help');
    if($helpLink.length > 0) {
        $helpLink.attr('title', '閭姪鎵�');
        $helpLink.html('<i class="i-help">閭姪鎵嬪浘鏍�</i>閭姪鎵�');
    }
});