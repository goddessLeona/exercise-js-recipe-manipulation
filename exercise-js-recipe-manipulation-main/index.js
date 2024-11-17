
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

const image = document.querySelector("img");
const altTag = image.getAttribute("alt");
console.log(`The value on the alt atribute on the image is: ${altTag}`);

// Uppgift 5: What is the dimensions and the url of the image? 

const width = image.scrollWidth
const hight = image.scrollHeight

console.log(`The dementions of the iamge is, Hight: ${hight} pixels and Width ${width} pixels`)

// Create an object that looks like this, and log it to the console:

/*{
  url: string
  height: number,
  width: number,
}*/

const topping = {
    url: "string",
    height: 13,
    width: 15,
}

console.log(topping);

// Uppgift 6: How many ingredients has the paste?

const allIngridiens = document.querySelector(".ingredients-list-bottom");
const nringribotton = allIngridiens.childElementCount;

const allIngridiens2 = document.querySelector(".ingredients-list-paste");
const nringridow = allIngridiens2.childElementCount;

console.log("There are", nringribotton + nringridow , "ingridents for the paste");

// Uppgift 7: Which is the forth element in the list containing the ingredients for the paste?

const allLiTags = document.querySelectorAll("li");
const ingr4 = allLiTags[3];
const ing4text = ingr4.innerText;
console.log(ing4text)

// Uppgift 8: Create an an array of objects from the instructions. 
// Each element in the array should be an object that looks like this:

/*{
  order: number;
  text: instruction;
}*/