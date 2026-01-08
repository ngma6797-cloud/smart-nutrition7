// حماية الصفحة
if(localStorage.getItem("loggedIn") !== "true"){
  window.location.href = "index.html";
}

let userKot = localStorage.getItem("userKot");

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    let kotData = data.kots[userKot];
    let contentDiv = document.getElementById("content");

    // الكتب
    let booksTitle = document.createElement("h2");
    booksTitle.textContent = "الكتب:";
    contentDiv.appendChild(booksTitle);

    kotData.books.forEach(book => {
      let div = document.createElement("div");
      div.textContent = book;
      contentDiv.appendChild(div);
    });

    // الصور
    let imagesTitle = document.createElement("h2");
    imagesTitle.textContent = "الصور:";
    contentDiv.appendChild(imagesTitle);

    kotData.images.forEach(img => {
      let image = document.createElement("img");
      image.src = img;
      image.style.width = "150px";
      image.style.margin = "5px";
      contentDiv.appendChild(image);
    });

    // الكلمات الإنجليزية
    let wordsTitle = document.createElement("h2");
    wordsTitle.textContent = "الكلمات الإنجليزية:";
    contentDiv.appendChild(wordsTitle);

    kotData.englishWords.forEach(word => {
      let p = document.createElement("p");
      p.textContent = word;
      contentDiv.appendChild(p);
    });
  });
