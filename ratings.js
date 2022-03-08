fetch('127.0.0.1:8000/ratings/')
.then(response => response.text())
.then(text => {
    let oldelem = document.querySelector("script#ratings");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
