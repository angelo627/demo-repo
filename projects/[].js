
        alert(document.documentElement.getAttribute("lang"));
        alert(document.head.firstElementChild.innerHTML);
        document.body.style.backgroundColor = "green";
        const body = document.getElementById("gp");
        body.style.color = "blue"
        const elements = document.getElementsByTagName("h3");
        for (let i = 0; i < elements.length; i++){
            elements[i].style.color = "gray";
        }

        const tin = document.getElementsByTagName("h4");
        for (let h = 0; h < tin.length; h++){
        tin[h].style.color = "red"}


        const game = document.getElementsByTagName("h5");
        for ( let y = 0; y < game.length; y++){
        game[y].style.color = "purple"}



        const t = document.getElementsByTagName("hr");
        for ( let i = 0; i < t.length; i++){
            t[i].style.backgroundColor = "brown"
            t[i].style.height = "2px";
            t[i].style.border = "none"; 
        }

const p = document.getElementsByTagName("h6")
    for (let i = 0; i < p.length; i++){
        p[i].style.color = "blue"
        p[i].style.fontSize = "15px"
        p[i].style.marginTop = "20px"
    } 

    const b = document.getElementsByTagName("h2")
    for ( let i = 0; i < b.length; i++){
        b[i].style.color = "gray"
    }

    const x = 5;
    const y = 6;
    const sum =x-y;
    console.log(sum)