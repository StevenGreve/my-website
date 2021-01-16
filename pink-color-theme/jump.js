//Smooth scroll effect for the "Read More" link — on the about page. (JQuery)
$(".btn").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 500);
    }

    else if(this.hash === "")
    {
        alert("Error: Missing ID! Fill the missing ID into the href attribute for the button class.");
    }
});
