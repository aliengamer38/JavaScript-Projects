let doc = document.createElement("li")
doc.appendChild(document.createTextNode("Apple"));
document.querySelector(".list").appendChild(doc);
setTimeout(function () {
    document.querySelector(".list").removeChild(doc);
}, 1000);