// function fillScreen() {
//     try {document.documentElement.requestPointerLock();} catch (error) {}
//     try {document.documentElement.webkitRequestPointerLock();} catch (error) {}
//     try {document.documentElement.mozRequestPointerLock();} catch (error) {}
//     try {document.documentElement.msRequestPointerLock();} catch (error) {}
//     try {document.documentElement.requestFullScreen();} catch (error) {}
//     try {document.documentElement.webkitRequestFullScreen();} catch (error) {}
//     try {document.documentElement.mozRequestFullScreen();} catch (error) {}
//     try {document.documentElement.msRequestFullScreen();} catch (error) {}

//     document.body.classList.add("filled");
// }

function getActive() {
    return document.getElementsByClassName("active")[0];
}

function setActive(item) {
    getActive().classList.remove("active");
    item.classList.add("active");
}

function getSelectedTab() {
    return document.getElementsByClassName("selected")[0];
}

function setSelectedTab(tab) {
    getSelectedTab().classList.remove("selected");
    tab.classList.add("selected");
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
     return;
     // Do nothing if the event was already processed
    }

    switch(event.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
            
            break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            if (getActive().parentElement.classList.contains("item-list") && getActive().parentElement.classList.contains("horizontal") && getActive().parentElement.firstElementChild != getActive())
                setActive(getActive().previousElementSibling);
                if (getActive().parentElement.id == "header-list")
                    setSelectedTab(getActive());
            break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            if (getActive().parentElement.classList.contains("item-list") && getActive().parentElement.classList.contains("horizontal") && getActive().parentElement.lastElementChild != getActive())
                setActive(getActive().nextElementSibling);
                if (getActive().parentElement.id == "header-list")
                        setSelectedTab(getActive());
            break;
        case "Enter":
            break;
        case "Esc": // IE/Edge specific value
        case "Escape":
            break;
        default:
            return;
    }
    
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);