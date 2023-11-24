const canzoni = [
    {
        Titolo: "RUSH!(ARE YOU COMING?)",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "12 brani",
    },
    {
        Titolo: "Teatro d'ira-Vol.I",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "8 brani",
    },
    {
        Titolo: "Il ballo della vita",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "12 brani",
    },
    {
        Titolo: "Chosen'",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "7 brani",
    }
]


let title = document.querySelectorAll(".card-title")
let artist = document.querySelectorAll(".artist")
let genre = document.querySelectorAll(".genre")
let duration = document.querySelectorAll(".duration")

for (let i = 0; i < canzoni.length; i++) {
    title[i].innerHTML = canzoni[i].Titolo
    artist[i].innerHTML = canzoni[i].Artista
    genre[i].innerHTML = canzoni[i].Genere
    duration[i].innerHTML = canzoni[i].Durata
}

let body = document.querySelector("body")
body.style = `background-image: url(/assets/index.jpg);
background-size: 100%`