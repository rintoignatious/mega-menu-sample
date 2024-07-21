$(".btn").click(function(){
    $("#sidebar").toggleClass("collapsed");
    if($(".sidebar-item").find(".sidebar-dropdown").hasClass("show")){
        $(".sidebar-item").find(".sidebar-dropdown").removeClass("show");
        $(".sidebar-item").find(".sidebar-link").addClass("collapsed");
    }
})

$(".close-menu-item i").click(function(){
    if($(".sidebar-item").find(".sidebar-dropdown").hasClass("show")){
        $(".sidebar-item").find(".sidebar-dropdown").removeClass("show");
        $(".sidebar-item").find(".sidebar-link").addClass("collapsed");
    }else{
        $("#sidebar").addClass("collapsed");
    }
});

