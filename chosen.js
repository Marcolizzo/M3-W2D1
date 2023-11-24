const canzoni = [
    {
        Titolo: "Chosen",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:42",
    },
    {
        Titolo: "Recovery",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:55",
    },
    {
        Titolo: "Vengo dalla luna",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:04",
    },
    {
        Titolo: "Beggin'",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:31",
    },
    {
        Titolo: "Let's Get It Started",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:26",
    },
    {
        Titolo: "Somebody Told Me",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:41",
    },
    {
        Titolo: "You Need Me, I Don't Need You",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:30",
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
    image[i].src = "./assets/chosen.jpg"
}

let body = document.querySelector("body")
body.style = `background-image: url(/assets/chosen.jpg);
background-size: 100%`