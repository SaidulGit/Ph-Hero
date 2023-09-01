const handleCategory = async () => {

const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
const  data = await response.json();

const tabContainer = document.getElementById("tab-container");
data.data.forEach((items) => {
     const div = document.createElement("div");
    div.innerHTML = `
    <a class="tab bg-gray-200 text-base ">${items.category} </a>
    `;
    tabContainer.appendChild(div);




});



console.log(data.data);

};

handleCategory();