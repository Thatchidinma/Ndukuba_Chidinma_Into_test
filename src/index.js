let buttonOnPage = document.getElementById('btn');
let footer = document.getElementById('footer');
let main = document.getElementById('main');
let addedColors =  document.getElementById('addedColors')

let arrOfColors= [
    ["#4ABDAC" , "lightseagreen"],
    ["#ffd700", "#ffbf00"],
    ["skyblue" , "#5bccf6"],
    ["#ea738dff" , "palevioletred"],
    ["#ff0000", "#c4281c" ],
    ["burlywood", "#c19a6b"],
]

function changeColor() {
    let color = arrOfColors[Math.floor(Math.random() * 6)]
    document.body.style.backgroundColor = color[0]
    footer.style.backgroundColor = color[1]
    main.style.backgroundColor = color[1]
    addedColors.style.border = `10px, whitesmoke, double`
    addedColors.style.borderRadius = `10px`
    addedColors.style.backgroundColor = color[0]
    document.getElementById('addedColors').innerHTML += color[0] + " and "+ color[1] + ', '
    console.log(color)
}

buttonOnPage.addEventListener('click', changeColor)

const listenOnce = (el, evt, fn) =>
  el.addEventListener(evt, fn, { once: true });

listenOnce(
buttonOnPage ,
  'click',
  function addStyle() {
    addedColors.style.padding = "10px"
    addedColors.style.margin = "10px"

}
)

if ((addedColors.offsetHeight = 200 && screen.width > 600) || (addedColors.offsetHeight  = 100 && screen.width <= 600)) {
    var styleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode("#addedColors::-webkit-scrollbar {-webkit-appearance: none;width: 10px;} #addedColors::-webkit-scrollbar-thumb {border-radius: 4px;background-color: rgba(250,250,250,.5);}"));
    document.getElementsByTagName("head")[0].appendChild(styleElement);	
}

 

