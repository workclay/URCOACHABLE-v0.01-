function showSidePanel() {
    sidePanel = document.getElementById('sidePanel');
    sideBlur = document.getElementById('backBlur');
    hamburgerButton = document.getElementById('flexor');
    fixThis = document.getElementById('fixThis');

    sidePanel.style.left = sidePanel.style.left === "0px" ? "-500px" : "0px";
    sideBlur.style.width = sideBlur.style.width === "100%" ? "0%" : "100%";
    sideBlur.style.opacity = sideBlur.style.opacity === "50" ? "0" : "50";
    // fixThis.style.position = fixThis.style.position === "fixed" ? "relative" : "fixed";

    // hamburgerButton.style.position = hamburgerButton.style.position === "fixed" ? "relative" : "fixed";

    // hamburgerButton.style.right = hamburgerButton.style.right === "10px" ? "10px" : "10px"
    // hamburgerButton.style.top = hamburgerButton.style.top === "10px"
}

const sideToggle = document.getElementById('flexor');
sideToggle.addEventListener('click', showSidePanel);


// function collapseItem() {
//   boxItem = document.getElementById('serv-item');

//   boxItem.style.height = boxItem.style.height === "0px" ? "100%" : "0px";
// }

// const itemToggle = document.getElementById('tagbtn');
// itemToggle.addEventListener('click', collapseItem);

