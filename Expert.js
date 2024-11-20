function myfunction1(){
    let here = document.getElementById("londonaction");
        here.classList.remove("ghost")
   
    let here2 = document.getElementById("parisaction");
        here2.classList.add("ghost")

    let here3 = document.getElementById("tokyoaction");
        here3.classList.add("ghost")


    const select = document.getElementById("london12");
        select.classList.add("selected1")

     const select1 = document.getElementById("paris12");
         select1.classList.remove("selected2")

     const select2 = document.getElementById("tokyo12");
         select2.classList.remove("selected3")
}




function myfunction2(){
    let here = document.getElementById("londonaction");
    here.classList.add("ghost")

    let here2 = document.getElementById("parisaction");
        here2.classList.remove("ghost")

    let here3 = document.getElementById("tokyoaction");
        here3.classList.add("ghost")
    
        
    const select = document.getElementById("paris12");
        select.classList.add("selected2")

    const select1 = document.getElementById("london12");
        select1.classList.remove("selected1")

    const select2 = document.getElementById("tokyo12");
         select2.classList.remove("selected3")
}


function myfunction3(){
    let here = document.getElementById("londonaction");
    here.classList.add("ghost")

    let here2 = document.getElementById("tokyoaction");
        here2.classList.remove("ghost")

    let here3 = document.getElementById("parisaction");
        here3.classList.add("ghost")
        

    const select = document.getElementById("tokyo12");
        select.classList.add("selected3")

    const select1 = document.getElementById("paris12");
        select1.classList.remove("selected2")

    const select2 = document.getElementById("london12");
        select2.classList.remove("selected1")
}

