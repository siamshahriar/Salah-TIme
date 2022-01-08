const fajr = document.querySelector('#fajr');
const sunrise = document.querySelector('#sunrise');
const dhuhr = document.querySelector('#dhuhr');
const asr = document.querySelector('#asr');
const sunset = document.querySelector('#sunset');
const maghrib = document.querySelector('#maghrib');
const isha = document.querySelector('#isha');
const button = document.querySelector('#get');
const date = document.querySelector('#date');

// const selectedCity =document.getElementById("city");
// const dhaka = selectedCity[1].innerText;
// const chittagong = selectedCity[2].innerText;
// const khulna = selectedCity[3].innerText;
// const sylhet = selectedCity[4].innerText;
// const borishal = selectedCity[5].innerText;
// const rajshahi = selectedCity[6].innerText;

let selectCity = document.querySelector('#city');
// let changeH5 = document.querySelector('#cityH5');


let madhab = document.querySelector('#school');

// let shohor = '';
// let hok = '';


// selectCity.addEventListener('change', () => {
//     city = selectCity.options[selectCity.selectedIndex].value;
//     shohor = city;

// })

// madhab.addEventListener('change', () => {
//      way = madhab.options[madhab.selectedIndex].value;
//     hok = way ;

// })

// console.log(hok);
// console.log(shohor);

selectCity.addEventListener('change', () => {
    return city = selectCity.options[selectCity.selectedIndex].value;


})

madhab.addEventListener('change', () => {
    return way = madhab.options[madhab.selectedIndex].value;


})





// button.addEventListener('click', () => {
//     console.log(way);
//     console.log(city);
//     if(city !== "3" && way === "3"){
//         alert("Select madhab!")
//     }
//     else if(city === "3" && way !== "3" ){
//         alert("Select City!")
//     }
//     else{
//     fetchAPI();
//     }
// })


button.addEventListener('click', () => {
    console.log(way);
    console.log(city);

    // judge();

    fetchAPI();

})

// function judge() {
//     if (city !== "3" && way === "3") {
//     alert("Select madhab!")
// }
// else if (city === "3" && way !== "3") {
//     alert("Select City!")
// }
// else{
//     fetchAPI();
// }
// } 



async function fetchAPI() {
    const baseURL = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Bangladesh&method=4&school=${way}`;
    // const config = { params: { q: searchQuery } }
    const response = await fetch(baseURL);
    const res = await response.json();

    genHTML(res.data);
    // console.log(res.data.data);

}

function genHTML(results) {
    try {
        fajr.innerText = results.timings.Fajr;
        sunrise.innerText = results.timings.Sunrise;
        dhuhr.innerText = results.timings.Dhuhr;
        asr.innerText = results.timings.Asr;
        sunset.innerText = results.timings.Sunset;
        maghrib.innerText = results.timings.Maghrib;
        isha.innerText = results.timings.Isha;
        date.innerText = results.date.readable;

    } catch (error) {
        console.log(error)
    }
}
