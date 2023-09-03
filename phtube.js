const handleCategory = async () => {

const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
const  data = await response.json();

const tabContainer = document.getElementById("tab-container");
data.data.forEach((items) => {
     const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="loadNews('${items.category_id}')" class="tab bg-gray-200 text-base ">${items.category} </a>
    `;
    tabContainer.appendChild(div);

});


};

const loadNews = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data = response.json();

   let allData =[];
    await data.then((red)=>{
       allData = red.data
    } );
    const cardContainer = document.getElementById("card-container");
    console.log(allData);
    allData.forEach((news) => {

    const div = document.createElement("div");
    div.innerHTML= `
    <div class="card bg-base-100 shadow-xl">
    <figure><img src=${news.thumbnail} /></figure>
    <div class="card-body">
       <div class="flex flex-auto gap-2">
                <div class="avatar online">
                    <div class="w-9 rounded-full" >
                     <img src=${news.authors[0].profile_picture
                      } />
                   </div>
                </div>
          <div>
          <h2 class="card-title">
          ${news.title}
          </h2>
          </div>
       
       </div>
       <div class="flex flex-auto gap-2">
         <p>${news.authors[0].profile_name}</p>
                   <div class="card-actions justify-start">
                      <div class="badge badge-outline">${news.authors[0].verified}</div>
                 </div>
        </div>
      <p>${news.others.views}</p>
    </div>
  </div>
    `;
    cardContainer.appendChild(div);
    console.log();
   });
}

handleCategory();