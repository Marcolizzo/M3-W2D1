const canzoni = [
    {
        Titolo: "ZITTI E BUONI",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:14",
    },
    {
        Titolo: "CORALINE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "5:00",
    },
    {
        Titolo: "LIVIDI SUI GOMITI",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:45",
    },
    {
        Titolo: "I WANNA BE YOUR SLAVE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:53",
    },
    {
        Titolo: "IN NOME DEL PADRE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:39",
    },
    {
        Titolo: "FOR YOUR LOVE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:50",
    },
    {
        Titolo: "LA PAURA DEL BUIO",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:29",
    },
    {
        Titolo: "VENT'ANNI",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "4:13",
    }
]

let title = document.querySelectorAll(".card-title")
let artist = document.querySelectorAll(".artist")
let genre = document.querySelectorAll(".genre")
let duration = document.querySelectorAll(".duration")
let image = document.querySelectorAll(".card.m-3 img")

for (let i = 0; i < canzoni.length; i++) {
    title[i].innerHTML = canzoni[i].Titolo
    artist[i].innerHTML = canzoni[i].Artista
    genre[i].innerHTML = canzoni[i].Genere
    duration[i].innerHTML = canzoni[i].Durata
    image[i].src = "./assets/teatro_d_ira.jpg"
}

let body = document.querySelector("body")
body.style = `background-image: url(/assets/teatro_d_ira.jpg);
background-repeat:no-repeat;
background-size: 100%`