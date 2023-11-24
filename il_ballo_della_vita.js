const canzoni = [
    {
        Titolo: "New Song",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:33",
    },
    {
        Titolo: "Torno a casa",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:50",
    },
    {
        Titolo: "L'altra dimensione",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:06",
    },
    {
        Titolo: "Sh*t Blvd",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:22",
    },
    {
        Titolo: "Fear for Nobody",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:30",
    },
    {
        Titolo: "Le parole lontane",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:24",
    },
    {
        Titolo: "Immortale",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:31",
    },
    {
        Titolo: "Lasciami stare",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:49",
    },
    {
        Titolo: "Are you ready?",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:33",
    },
    {
        Titolo: "Close to the top",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:18",
    },
    {
        Titolo: "Niente da dire",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:36",
    },
    {
        Titolo: "Morirò da re",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:37",
    },
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
    image[i].src = "./assets/il_ballo_della_vita.jpg"
}

let body = document.querySelector("body")
body.style = `background-image: url(/assets/il_ballo_della_vita.jpg);
background-size: 100%`