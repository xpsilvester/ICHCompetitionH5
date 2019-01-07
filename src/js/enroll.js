let name = "";
let phone = "";
let code = "";
let province = "";
let city = "";
let school = "";
let grade = "";
let teacher = "";
let ok = false;

let getDay = () => {
    getDayAjax();
}

let setDay = (day) => {
    $(".header .time .time-word").html(day);
}

let getVerifyCode = () => {
    $(".code .yuko-textfield_textbtn").on("touchstart",function(){
        console.log('tag', '');
        let cellphone = $.trim($("#phone").val());
        if(cellphone == ""){
            alert("请填写手机号码");
        }
        else if(!/^(\+86)?1[0-9]{10}$/.test(cellphone)){
            alert("手机号码格式不正确");
        }
        else{
            getVerifyCodeAjax(cellphone);
        }
    });
}

let changeCodeStyle = () => {
    let time = 120;
    $(".code .yuko-textfield_textbtn").unbind();
    $(".code .yuko-textfield_textbtn").html("<p>重新发送("+time+"s)</p>");
    $(".code .yuko-textfield_textbtn").css("color","#ccc");
    let timer = setInterval(function(){
        if(time == 0){
            clearInterval(timer);
            $(".code .yuko-textfield_textbtn").css("color","#fc0");
            getVerifyCode();
        }
        else{
            time--;
            $(".code .yuko-textfield_textbtn").html("<p>重新发送("+time+"s)</p>");
        }
    },1000);
}

let initProvince = () => {
    $(".province .yuko-select_items").html("");
    for(let i = 0;i < zone.length;i++){
        $(".province .yuko-select_items").append('<div>' + zone[i].name + '</div>');
    }
    
    $(".province .yuko-select_items>div").on("touchstart",function(){
        province = $(this).html();
        $(".city .yuko-select_items>div").unbind();
        $(".city .yuko-select_items").html("");
        $(".city .yuko-select_selected").html("请选择");
        city = "";
        appendCity(province);
    });
}

let appendCity = (province) => {
    for(let i = 0;i < zone.length;i++){
        if(zone[i].name == province){
            for(let j = 0;j < zone[i].city.length;j++){
                $(".city .yuko-select_items").append('<div>' + zone[i].city[j].name + '</div>');
            }
        }
    }
    $(".city .yuko-select_items>div").on("touchstart",function(){
        city = $(this).html();
    });
}

let selectSchool = () => {
    $(".school .yuko-textfield_searchbtn").on("touchstart",function(){
        let word = $.trim($("#school").val());
        if(word == ""){
            alert("请填写学校");
        }
        else{
            selectSchoolAjax(word);
        }
    });
}

let schoolChoice = (data) => {
    $(".school .yuko-list_items").html("");
    for(let i = 0;i < data.length;i++){
        $(".school .yuko-list_items").append('<div>' + data[i] + '</div>');
    }
    $(".school .yuko-list_items").removeClass("yuko-list_hide");
    $(".school .yuko-list_items>div").on("click",function(){
        school = $(this).html();
        $("#school").val(school);
        $(".school .yuko-list_items").addClass("yuko-list_hide");
    });
}

let selectGrade = () => {
    $(".grade .yuko-select_items>div").on("touchstart",function(){
        grade = $(this).html();
    });
}

let confirmInfo = () => {
    $(".confirm1 .yuko-radio").on("touchstart",function(){
        ok = true;
    });
}

let submit = () => {
    $(".submit").on("touchstart",function(){
        name = $.trim($("#name").val());
        phone = $.trim($("#phone").val());
        code = $.trim($("#code").val());
        school = $.trim($("#school").val());
        teacher = $.trim($("#teacher").val());
        let flag = true;
        if(name == ""){
            alert("请填写孩子中文姓名");
            flag = false;
            return;
        }
        if(phone == ""){
            alert("请填写家长手机号码");
            flag = false;
            return;
        }
        else if(!/^(\+86)?1[0-9]{10}$/.test(phone)){
            alert("手机号码格式不正确");
            flag = false;
            return;
        }
        if(code == ""){
            alert("请填写手机验证码");
            flag = false;
            return;
        }
        if(province == ""){
            alert("请选择省");
            flag = false;
            return;
        }
        if(city == ""){
            alert("请选择市");
            flag = false;
            return;
        }
        if(school == ""){
            alert("请选择学校");
            flag = false;
            return;
        }
        if(grade == ""){
            alert("请选择年级");
            flag = false;
            return;
        }
        if(!ok){
            alert("请确认信息属实");
            flag = false;
            return;
        }
        if(flag){
            submitAjax(name,phone,code,province,city,school,grade,teacher,ok);
        }
    });
}

$(()=>{
    getDay();
    getVerifyCode();
    initProvince();
    selectSchool();
    selectGrade();
    confirmInfo();
    submit();
});