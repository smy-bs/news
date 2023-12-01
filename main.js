const API_KEY = `63f5f229f63e4668897bf96f197f7b39`;
let newsList = [];
const menus = document.querySelectorAll(".menus button");
 menus.forEach(menu =>
 menu.addEventListener("click", (event) => 
 getNewsByCategory(event))
 );

const getLatestNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );

  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
 };

const getNewsByCategory = async (event)=>{
    const category = event.target.textContent.toLowerCase();
     console.log("category", category);
     const url = new URL(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
         );
       const response = await fetch(url);
      const date = await response.json();
             newsList = data.articles;
         render();
       
};

const render = () => {
  const newsHTML = newsList.map(
    (news) => `<div class="row news">
     <div class="col-lg-4">
       <img
         class="new-img-size"
         src=${news.urlToImage}
         alt=""
       />
     </div>
     <div class="col-lg-8">
       <h2>${news.title}</h2>
       <p>
      ${news.description}
       </p>
     </div>
     <div>${news.source.name}*${news.publishedAt}</div>
   </div>`
  ).join('');
  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
