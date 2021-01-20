// Navigation Bar Animation 
const resume = document.getElementById("resume");
const about = document.getElementById("about");
const archive = document.getElementById("archive");
const home = document.getElementById("home");
const changelog = document.getElementById("changelog");

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

changelog.onmouseover = getNavbarEffectChangelog;

function getNavbarEffectChangelog(){
    changelog.classList.add("rotate-360");

    setTimeout(function(){
        changelog.classList.remove("rotate-360");
    }, 2000);
}

home.onmouseover = getNavbarEffectHome;

function getNavbarEffectHome(){
    home.classList.add("rotate-360");

    setTimeout(function(){
        home.classList.remove("rotate-360");
    }, 2000);
}

// Footer Animation 
const youtube = document.getElementById("youtube");
const github = document.getElementById("github");
const wordpress = document.getElementById("wordpress");
const codepen = document.getElementById("codepen");
const knight = document.getElementById("knight");

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

knight.onmouseover = getFooterEffectKnight;

function getFooterEffectKnight(){
    knight.classList.add("grow");
}

//Mobile Menu
const openMenu = document.getElementById("open-menu");
const navUL = document.getElementById("navigation-list");

openMenu.addEventListener("click", () => {
    navUL.classList.toggle("show");
});

// Archive Animation
const arrow = document.getElementById("arrow-down");
arrow.onmouseover = getArrowEffect;

function getArrowEffect(){
    arrow.classList.add("rotate-360");

    setTimeout(function(){
        arrow.classList.remove("rotate-360");
    }, 2000);
};
