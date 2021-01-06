// Navbar Animation (for all pages)
const resume = document.getElementById("resume");
const about = document.getElementById("about");
const archive = document.getElementById("archive");
const contact = document.getElementById("contact");
const home = document.getElementById("home");

resume.onmouseover = getNavbarEffectResume;

function getNavbarEffectResume(){
    resume.classList.add("rotate-360");

    setTimeout(function(){
        resume.classList.remove("rotate-360");
    }, 2000);
}

about.onmouseover = getNavbarEffectAbout;

function getNavbarEffectAbout(){
    about.classList.add("rotate-360");

    setTimeout(function(){
        about.classList.remove("rotate-360");
    }, 2000);
}

archive.onmouseover = getNavbarEffectArchive;

function getNavbarEffectArchive(){
    archive.classList.add("rotate-360");

    setTimeout(function(){
        archive.classList.remove("rotate-360");
    }, 2000);
}

contact.onmouseover = getNavbarEffectContact;

function getNavbarEffectContact(){
    contact.classList.add("rotate-360");

    setTimeout(function(){
        contact.classList.remove("rotate-360");
    }, 2000);
}

home.onmouseover = getNavbarEffectHome;

function getNavbarEffectHome(){
    home.classList.add("rotate-360");

    setTimeout(function(){
        home.classList.remove("rotate-360");
    }, 2000);
}

// Footer Animation (for all pages)
const youtube = document.getElementById("youtube");
const github = document.getElementById("github");
const wordpress = document.getElementById("wordpress");
const codepen = document.getElementById("codepen");
const heart = document.getElementById("heart");

youtube.onmouseover = getFooterEffectYoutube;

function getFooterEffectYoutube(){
    youtube.classList.add("grow");  
}

github.onmouseover = getFooterEffectGithub;

function getFooterEffectGithub(){
    github.classList.add("grow");
}

wordpress.onmouseover = getFooterEffectWordpress;

function getFooterEffectWordpress(){
    wordpress.classList.add("grow");
}

codepen.onmouseover = getFooterEffectCodepen;

function getFooterEffectCodepen(){
    codepen.classList.add("grow");
}

heart.onmouseover = getFooterEffectHeart;

function getFooterEffectHeart(){
    heart.classList.add("grow");
}

// Archive — Arrow Animation
const arrow = document.getElementById("arrow-down");
arrow.onmouseover = getArrowEffect;

function getArrowEffect(){
    arrow.classList.add("rotate-360");

    setTimeout(function(){
        arrow.classList.remove("rotate-360");
    }, 2000);
};
