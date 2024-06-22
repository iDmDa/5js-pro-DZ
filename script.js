let url = 'https://randomfox.ca/floof/';

async function siteLoad() {
    let response = await fetch(url);

    if (response.ok) {
        let json = await response.json();
        contentCreate(json);
    }
    else {
        console.log("Ошибка: " + response.status);
    }
}

function contentCreate(data) {
console.log(document.querySelector("#content"));
    if(!document.querySelector("#content")) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let button = document.createElement("button");

        div.id = "content";
        div.style.display = "flex";
        div.style.flexDirection = "column"
        div.style.alignItems = "center"

        img.style.marginBottom = "10px";
        img.style.maxWidth = "900px";
        img.style.maxHeight = "600px";
        button.textContent = "Другая картинка";

        document.querySelector("body").appendChild(div);
            div.appendChild(img);
            div.appendChild(button);

        button.addEventListener('click', function() {
            siteLoad();
        })
    }

    let img = document.querySelector("#content img");
    img.src = data.image;
}

let body = document.querySelector("body");
let h2 = document.createElement("h2");
let p = document.createElement("p");

h2.textContent = info.name;
p.textContent = info.site;

body.appendChild(h2);
body.appendChild(p);

siteLoad();
