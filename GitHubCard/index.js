/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
axios.get('https://api.github.com/users/msinnema33')
    .then(e => {
        //console.log('data: ', data);
        const myInfo = e.data;
        //console.log('User info: ', myInfo);

        const cards = document.querySelector('.cards');
        const card = createCard(myInfo);
        cards.appendChild(card);
    })


const followersArray = [
    'elijahdaniel',
    'GuytonOriji',
    'fireblastdaniel',
    'shawnpatel96',
    'rofstudios',
];

followersArray.forEach(user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(e => {
            const card = createCard(e.data);
            const cards = document.querySelector('.cards');
            cards.appendChild(card);
        })

})



const cards = document.querySelector('.cards');
console.log(cards);

// followersArray.forEach(data => {
//     cards.appendChild(createCard(data));
// });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createCard(data) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardinfo = document.createElement('div');
    const name = document.createElement('h3');
    const uname = document.createElement('p');
    const loc = document.createElement('p');
    const prof = document.createElement('p');
    const anchor = document.createElement('a');
    const flwr = document.createElement('p');
    const flwg = document.createElement('p');
    const bio = document.createElement('p');

    card.appendChild(img);
    card.appendChild(cardinfo);
    cardinfo.appendChild(name);
    cardinfo.appendChild(uname);
    cardinfo.appendChild(loc);
    cardinfo.appendChild(prof);
    cardinfo.appendChild(anchor);
    cardinfo.appendChild(flwr);
    cardinfo.appendChild(flwg);
    cardinfo.appendChild(bio);

    card.classList.add('card');
    cardinfo.classList.add('card-info');
    name.classList.add('username');

    img.src = data.avatar_url;
    name.textContent = data.name;
    uname.textContent = data.login;
    loc.textContent = data.location;
    prof.textContent = "Profile: ";
    anchor.textContent = data.html_url;
    flwr.textContent = data.followers;
    flwg.textContent = data.following;
    bio.textContent = data.bio;


    return card;

}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/