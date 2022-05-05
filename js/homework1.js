let firstname = prompt("Adınız nedir?")

let info = document.querySelector("#info")
let day = new Date().getDay()

switch(day) {
    case 1:
        day = "Pazartesi"
        break
    case 2:
        day = "Salı"
        break
    case 3:
        day = "Çarşamba"
        break
    case 4:
        day = "Perşembe"
        break
    case 5:
        day = "Cuma"
        break
    case 6:
        day = "Cumartesi"
        break
    case 7:
        day = "Pazar"
        break
}

if (firstname) {
    info.innerHTML = `
    <img src="https://cdn.sanity.io/images/9kdepi1d/production/65c832d202a503b15d99e628f4313782f3ef50db-300x62.png" class="h-10"><br>
    Merhaba, <b>${firstname}</b>! Hoş geldin!<br>
    ${new Date().getHours()}:${new Date().getMinutes()} ${day}<br>
    tarihinde <b>Kodluyoruz Frontend Web Development Patikası</b>'nın Javascript<br>
    bölümü 1. Ödevindesiniz.
    `
}
