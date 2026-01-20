'use strict'

const category = document.querySelectorAll('.item')

console.log(`Number of categories: ${category.length}`)

category.forEach(element => {
    const catk = element.querySelector('h2');
    const cagt = element.querySelectorAll('li');

    console.log(`Category: ${catk.textContent}`);

    console.log(`Elements: ${cagt.length}`);
});