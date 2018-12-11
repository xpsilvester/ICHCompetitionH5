let name = "";
let phone = "";
let code = "";
let province = "";
let city = "";
let grade = "";
let teacher = "";

let initProvince = () => {
    for(let i = 0;i < zone.length;i++){
        $(".province .yuko-select_items").append('<div>' + zone[i].name + '</div>');
    }
    setTimeout(function(){
        // $(".province .yuko-select_items").delegate('div', 'click', function(ev){
        //     province = $(this).html();
        //     console.log(111,$(this).html());
        //     appendCity(province);
        // });
        $(".province .yuko-select_items>div").on("click",function(){
            province = $(this).html();
            console.log(111,$(this).html());
            $(".city .yuko-select_items>div").unbind();
            $(".city .yuko-select_items").html("");
            appendCity(province);
        });
    },1000);
    
    // $(".province .yuko-select_items>div").on("click",function(){
    //     province = $(this).html();
    //     console.log(111,$(this).html());
    //     $(".city .yuko-select_items>div").unbind();
    //     $(".city .yuko-select_items").html("");
    //     appendCity(province);
    // });
}

let appendCity = (province) => {
    for(let i = 0;i < zone.length;i++){
        if(zone[i].name == province){
            for(let j = 0;j < zone[i].city.length;j++){
                $(".city .yuko-select_items").append('<div>' + zone[i].city[j].name + '</div>');
            }
        }
    }
    $(".city .yuko-select_items>div").on("click",function(){
        city = $(this).html();
    });
}

$(()=>{
    initProvince();

});