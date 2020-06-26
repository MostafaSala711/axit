/*global console, $, alert, prompt, plusplus*/

$(function () {
    
    "use strict";
    
    $(window).scroll(function () {
        
        var navbar = $(".navbar");
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass("scrolled");
            
        } else {
            
            navbar.removeClass("scrolled");
            
        }
        
    });
    
    // Navbar active item
    
    $("#navbar li").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
    });
    
    // Deal with Tabs 
    
    $(".tab-switch li").on("click", function () {
        
        $(this).addClass("selected").siblings().removeClass("selected");
        
        $(".tabs .tabs-content > div").hide();
        
        $($(this).data("class")).show();
        
    });
    
});




