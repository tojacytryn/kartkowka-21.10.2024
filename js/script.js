function one(){
    const div = document.createElement("button");
    const input = document.createElement("input");
    input.type = "color";
    div.style.width = "100px";
    div.style.height = "100px";
    document.body.appendChild(div);
    document.body.appendChild(input);
    input.addEventListener("input", ()=>{
        div.style.backgroundColor = input.value;
    })
}

function two(){
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.textContent = "Generuj";
    document.body.appendChild(input);
    document.body.appendChild(button);
    button.addEventListener("click", ()=>{
        const a = document.createElement("a");
        a.textContent = `https://${input.value}`; 
        a.setAttribute("href", `https://${input.value}`); 
        document.body.appendChild(a);
    })
}

function three(){
    const button = document.createElement("button");
    button.textContent = "Stwórz"
    const inputWidth = document.createElement("input");
    inputWidth.setAttribute("placeholder", "Szerokość");
    const inputHeight = document.createElement("input");
    inputHeight.setAttribute("placeholder", "Wysokość");
    document.body.appendChild(inputWidth);
    document.body.appendChild(inputHeight);
    document.body.appendChild(button);
    const div = document.createElement("div")
    div.style.border = "2px solid black"

    button.addEventListener("click", ()=>{
        document.body.appendChild(div)
        div.style.width = `${inputWidth.value}px`;
        div.style.height = `${inputHeight.value}px`;
    })
}

function four(){
    const input = document.createElement("input");
    const button = document.createElement("button");
    const ul = document.createElement("ul");
    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(ul);
    button.textContent = "Dodaj";
    button.addEventListener("click", ()=>{
        const li = document.createElement("li");
        li.textContent = input.value;
        const buttonRemove = document.createElement("button");
        buttonRemove.textContent = "DELETE";
        buttonRemove.addEventListener("click", function (){
            this.parentElement.style.display = "none";
        })
        ul.appendChild(li);
        li.appendChild(buttonRemove);
    })
}