fetch('46.114.161.16:8000/ratings/')
.then(response => response.text())
.then(text => {
    let oldelem = document.querySelector("script#ratings");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
