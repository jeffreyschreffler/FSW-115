

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/',true);

xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        console.log(data)
        showData(data.results)
    } else if(xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText)
    }
};

function showData(data){
    for(let i = 0; i < data.length; i++) {
        let display = document.querySelector('#display')
        let charName = document.createElement('h1');
        display.append(charName);
        charName.textContent = data[i].name
    }
}

