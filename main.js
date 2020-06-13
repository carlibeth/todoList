document.querySelector("#active").addEventListener("click", function(evento){
    let texto = document.querySelector("#añadir").value;
    let li = document.createElement("li")
    let boton = document.createElement("button")
    let ul = document.querySelector("#lista");

    li.innerHTML = texto;
    li.appendChild(boton);
    ul.appendChild(li);
    document.querySelector("#añadir").value = "";

    li.style.margin = "20px";
  


    boton.innerHTML = "X";
    boton.style.color= "gray"
    boton.style.border = "1px solid"
    boton.addEventListener("click", function(){
        this.parentElement.remove();
    });

   
});

