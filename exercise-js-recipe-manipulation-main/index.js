
// Uppgift 1 : What is the name of the recipe?

const recipeName = document.querySelector("h1");
const nameCake = recipeName.innerText;
console.log(`The name of the recipie is: ${nameCake}`);

// Uppgift 2. What HTML tag is used to display the Recipe name?

const tag = recipeName.nodeName;
console.log(`The HTML tag used to display the recipi name is: ${tag}`);

// Uppgift 3. What is the font size of the paragraph tag with the class "description". (fick hjälp)

const description = document.querySelector(".description");
const atributes = window.getComputedStyle(description);

const fontSize = atributes.fontSize;
console.log(`The font size on the P with class name description is: ${fontSize}`)

// Uppgift 4. What is the value of the alt atrribute on the image?