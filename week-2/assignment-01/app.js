//get

let listContainer = document.querySelector('.list-container');

//new elements

let listItemUl = document.createElement('ul');
listContainer.append(listItemUl);

//api 

let data =   {
    "id": 1,
    "name": "\"Dottie Minerva\"",
    "image": "https://bobsburgers-api.herokuapp.com/images/characters/1.jpg",
    "gender": "Female",
    "hairColor": "Blonde",
    "occupation": "Student at Wagstaff School",
    "firstEpisode": "\"The Kids Run the Restaurant\"",
    "voicedBy": "Wendy Molyneux",
    "url": "https://bobsburgers-api.herokuapp.com/characters/1"
  }

  //for in loop - for (let variable-name in object-name)
  for ( let prop in data ) {
    let listItemLi = document.createElement('li');
    listItemUl.append(listItemLi);
    listItemLi.textContent = `${prop}: ${data[prop]}`;
  }