let respuesta  = prompt ("Queres saber que juegos hay en la tienda?: Si , No").toUpperCase();

while(respuesta === "SI") {
    let genero = prompt("Elegi un genero que te guste 1-rpg 2-survival 3-fps 4-roguelike").toUpperCase();

    function buscador(genero){
        switch(genero){
            case "1" :
                alert("Te recomiendo: Mu, Zelda, Wow")
                break;
            case "2":
                alert("Te recomiendo: Minecraft, Rust, Ark")
                break;
            case "3":
                alert("Te recomiendo: CS, Call of Duty,Battlefield 20")
                break;
            case "4":
                alert("Te recomiendo: Isaac, Hades, Rogue Legacy")
                break;
                default :
                    alert('elegiste un valor no asignado, elegí un número')


            }
        }
        buscador(genero)
        respuesta = prompt("Queres saber que juegos hay en la tienda?: Si , No").toUpperCase()
}

alert ("Hasta la proxima")
