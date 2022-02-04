let listWrap = document.querySelector(".list-wrapper");

let caseLoad = {
    
            "confirmed": 162926,
            "recovered": 0,
            "deaths": 7414,
            "country": "Afghanistan",
            "population": 35530081,
            "sq_km_area": 652090,
            "life_expectancy": "45.9",
            "elevation_in_meters": null,
            "continent": "Asia",
            "abbreviation": "AF",
            "location": "Southern and Central Asia",
            "iso": 4,
            "capital_city": "Kabul",
            "lat": "33.93911",
            "long": "67.709953",
            "updated": "2022-02-01 04:21:11"
        }


for(let cases in caseLoad) {
    let newItem = document.createElement('li');
    listWrap.append(newItem);
    newItem.textContent = `${cases}: ${caseLoad[cases]}`
}