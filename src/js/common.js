let ruleClick = () => {
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
}

let hideCheerGuide = () => {
    try{
        $("#cheer-guide").contents().find(".cheer-guide").click();
    }
    catch(error){
        alert("iframe跨域,需部署到网站");
        console.log(error);
        $("body").css("overflow","hidden");
        $("#cheer-guide").css("z-index","10");
    }
}

let showCheerGuide = () => {
    try{
        $("#cheer-guide").contents().find(".cheer-guide").removeClass("not-display");
        $("body").css("overflow","scroll");
        $("#cheer-guide").css("z-index","10");
        $("#cheer-guide").css('height',$("body").height()+'px');
    }
    catch(error){
        alert("iframe跨域,需部署到网站");
        console.log(error);
        $("body").css("overflow","scroll");
        $("#cheer-guide").css("z-index","-1");
    }
}

$(() => {
    ruleClick();
});