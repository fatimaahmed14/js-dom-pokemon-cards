
console.log(data);
console.log(data[0]);

const cardsList = document.querySelector('ul')

for (i = 0; i < data.length; i++){

const pokemon = document.createElement('li')
pokemon.setAttribute('class', 'card')
cardsList.appendChild(pokemon)

const h2 = document.createElement('h2')
h2.innerText = data[i].name
pokemon.appendChild(h2)

const img = document.createElement('img')
img.setAttribute('class', 'card--img')
img.setAttribute('width', '256')
img.src = data[i].sprites.other['official-artwork'].front_default
pokemon.appendChild(img)

const skillLevels = document.createElement('ul')
skillLevels.setAttribute('class', 'card--text')
pokemon.appendChild(skillLevels)

for (j = 0; j < data[i].stats.length; j++){
    const skill = document.createElement('li')
    const name = data[i].stats[j].stat.name
    const base_stat = data[i].stats[j].base_stat
    skill.innerText = `${name}: ${base_stat}`
    
    skillLevels.appendChild(skill)}
}







// // const skillLevels = document.createElement('ul')
// // skillLevels.setAttribute('class', 'card--text')
// // pokemon.appendChild(skillLevels)

// const skill = document.createElement('li')
// skill.innerText = 'HP: 45'
// skillLevels.appendChild(skill)

