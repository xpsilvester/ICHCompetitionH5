$(() => {
    $(".rule").on("touchstart",function(){
        try{
            $("#rule").contents().find(".rule-container").removeClass("not-display");
            $("body").css("overflow","hidden");
            $("#rule").css("z-index","10");
        }
        catch(error){
            alert("iframe跨域,需部署到网站");
            console.log(error);
            $("body").css("overflow","scroll");
            $("#rule").css("z-index","-1");
        }
    });
});