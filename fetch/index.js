console.log("hi sk!!!!!!");

const root = document.getElementById("container");
console.log(root);

async function getdata() {
    //alert("hi")
    const response = await fetch('https://fakestoreapi.com/products');
    const jasondata = await response.json();
    console.log(jasondata);
}
const button = document.getElementById("btn");
button.addEventListener("click", getdata);