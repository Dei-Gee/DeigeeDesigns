var loadingstrings = ["Web Design", "Web Development", "User Experience", "Graphic Design"];



$(document).ready(
    function()
    {
        var i = 0;
        $(".mainContainer").css("opacity", "1");
        setInterval
        (
            function()
            {
                
                if(i < loadingstrings.length)
                {
                   document.getElementById("loading-text").innerHTML = loadingstrings[i];
                   i++;
                }
                else
                {
                    i = 0;
                }
            }, 1800
        );

        $(".menu-btn-container").click(
            function()
            {
                $(".menu-container").fadeIn();
            }
        );

        $("#close-btn").click(
            function()
            {
                $(".menu-container").fadeOut();
            }
        );

        $("#close-btn").hover(
            function()
            {
                $(this).fadeIn().css({"background-color": "rgba(0,0,0,.3)"}, {"color" : "white"});
            }
        );

        //social media icons
        

        //menu links
        
        /*$(".menu-btn").click(function()
        {
            $(".links").css({"height": "100%"});
        });
        */

        
    }
);
