const canzoni = [
    {
        Titolo: "HONEY (ARE YOU COMING?)",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:47",
    },
    {
        Titolo: "VALENTINE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:36",
    },
    {
        Titolo: "OFF MY FACE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:29",
    },
    {
        Titolo: "THE DRIVER",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:08",
    },
    {
        Titolo: "TRASTEVERE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:02",
    },
    {
        Titolo: "OWN MY MIND",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:11",
    },
    {
        Titolo: "GOSSIP",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:48",
    },
    {
        Titolo: "TIMEZONE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:59",
    },
    {
        Titolo: "BLA BLA BLA",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:04",
    },
    {
        Titolo: "BABY SAID",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:44",
    },
    {
        Titolo: "GASOLINE",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "3:41",
    },
    {
        Titolo: "FEEL",
        Artista: "Måneskin",
        Genere: "Pop rock/Hard rock",
        Durata: "2:47",
    },
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