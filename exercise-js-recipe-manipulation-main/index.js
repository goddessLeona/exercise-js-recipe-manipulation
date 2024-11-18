
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

const imageTag = document.querySelector("img");
const url = imageTag.getAttribute("src");

/*{
  url: string
  height: number,
  width: number,
}*/

const topping = {
    url: url,
    height: hight,
    width: width,
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
// Each element in the array should be an object that looks like this: (fick hjälp med loopen)

/*{
  order: number;
  text: instruction;
}*/

const instruktionList = document.querySelector(".instructions-list");
const listchildren = instruktionList.children;

const arrayInstructions = [];

for( i = 0; i < listchildren.length; i++){
    const instructionObject = {
        order: i + 1,
        text: listchildren[i].innerText,
    };
    arrayInstructions.push(instructionObject);
}

console.log(arrayInstructions)


// Dom manipulation part 2

// Uppgift 1: The logo text of the site has the wrong color. Change it to the correct one.

const classLogo = document.querySelector("header > p");
classLogo.style.color = "black"


// Uppgift 2: The alignment of the elements inside the header element are wrong. 
// Change it to the correct one. Hint, check the flex properties for the correct alignment. 
// Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/


// Uppgift 3: The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

const header = document.querySelector("header")
header.style.borderBottomColor = "black";

// Uppgift 4: The recipe name is wrong, change it to the correct one.

const cakeName = document.querySelector("h1");
cakeName.innerText ="Frozen Cheescake"

// Uppgift 5: The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
// This can be fixed by adding a class to that element. 

const time = document.querySelector(".time-container > span");
const addClassTime = time.setAttribute("class", "material-icons");

// Uppgift 6: The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

const timeMin = document.querySelector(".time");
timeMin.innerText = "60+ min";

// Uppgift 7: The src path to the image is wrong, or atleast it's showing the wrong image. 
// Change it to the correct one. The available images can be found in the assets folder. (fick hjölp)

const imgcake = document.querySelector("img");
imgcake.src = "assets/frozen-cheesecake-slice.jpg"




