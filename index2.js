let main_div = `<main>
    <section>
        <div class="container-fluid" id="country-data">

        </div>
    </section>
</main>`
document.body.innerHTML += main_div;
async function country() {
    let URL = "https://restcountries.eu/rest/v2/all";
    let response = await fetch(URL);
    let result = await response.json();
    let countryData = document.getElementById("country-data");
    let div = document.createElement('div');
    for (let i = 0; i < result.length; i++) {
        div.setAttribute('class', 'row');
        let div1 = document.createElement('div');
        let Country = result[i].name.toString();
        let country_arr = Country.split(" ");
        let capital = result[i].capital.toString();
        let capital_arr = capital.split(" ");
        div1.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-3');
        let countries = "<div class='card card-custom-css'> <div class='card-header'>" + (i + 1) + ".)" + result[i].name + "</div><img src=" + result[i].flag + " class='card-img-top cust-card-img' alt='Image not found' id='img'><div class='card-body card-body-custom-css'><p class='card-text'>Capital: <span class='badge badge-success'>" + result[i].capital + "</span><br>Country Codes: <span class='badge'>" + result[i].alpha2Code + result[i].alpha3Code + "</span><br>Region: <span class='badge'>" + result[i].region + "</span></p></div><div class='card-body card-body-custom-css'><button class='btn btn-primary div1' onclick=weather('" + country_arr + "','" + capital_arr + "')>Current Weather</button></div></div>";
        div1.innerHTML = countries;
        div.appendChild(div1);
        countryData.appendChild(div);
    }
}
country();
async function weather(name, capital) {
    let str = "";
    for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) == ",") {
            str += " ";
        } else {
            str += name.charAt(i);
        }
    }
    let con_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + str + '&appid=5a457becd60a3cddf9f53f98a73fc7c5&units=metric';
    try {
        let result = "";
        let response = await fetch(con_URL);
        if (!response.ok)
            throw new Error("error");
        else {
            result = await response.json();
            alert("Temperature in " + str + " is: " + result.main.temp);
        }
    } catch (error) {
        weatherCapital(str, capital);
    }
}


async function weatherCapital(name, capital) {
    let str = "";
    for (let i = 0; i < capital.length; i++) {
        if (capital.charAt(i) == ",") {
            str += " ";
        } else {
            str += capital.charAt(i);
        }
    }
    let cap_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + str + '&appid=5a457becd60a3cddf9f53f98a73fc7c5&units=metric';
    try {
        let response = await fetch(cap_URL)
        let result = await response.json();
        alert("Temperature in " + name + " is: " + result.main.temp);
    } catch (error) {
        alert(error);
    }
} 