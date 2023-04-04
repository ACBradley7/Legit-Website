function displayVideo() {
    deleteButton();
    enlargePage();
    positionFooter();
    enlargeDiv();
    embedVideo();
    updateCounter();
}

function deleteButton() {
    var buttonElement = document.getElementById("theButton");
    buttonElement.remove();
}

function enlargePage() {
    var page = document.getElementById("pageDiv");
    page.style.height = "1100px";
}

function positionFooter() {
    var footer = document.getElementById("footerDiv");
    footer.style.backgroundColor = "aqua";
}

function enlargeDiv() {
    var bodyDiv = document.getElementById("bodyDiv");
    bodyDiv.style.height = "700px";
}

function embedVideo() {
    var videoFrame = document.getElementById("bodyDiv");
    var iFrame = document.createElement("iframe");
    iFrame.style.width = "100%";
    iFrame.style.height = "100%";
    iFrame.setAttribute("frameborder", "0");
    iFrame.setAttribute("id", "video");
    iFrame.setAttribute("src", "https://www.youtube.com/embed/xzpndHtdl9A");
    videoFrame.appendChild(iFrame);
}

function updateCounter() {
    var persistentCounter = 0;
    var counterDiv = document.getElementById("counterDiv")
    var counterString = document.getElementById("counterText");
    var counterText = counterString.textContent;
    var counterInt = parseInt(counterText);
    counterInt = counterInt + 1;
    counterString.innerHTML = counterInt;
    localStorage.setItem("persistentCounter", counterInt);
    console.log(counterInt);
}

function getCounter() {
    var counter = localStorage.getItem("persistentCounter");
    console.log(counter);
    counter = parseInt(counter);
    if (counter == "NaN") {
        counter = 0;
    }
    var counterString = document.getElementById("counterText");
    counterString.innerHTML = counter;
}
