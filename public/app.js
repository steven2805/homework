var app = function(){


  var ul = document.createElement('ul');
  ul.createList.add('cat');

  var lil = document.createElement("li");
  lil.innerText("Name : Testing");

  var li2 = document.createElement('li');
  li2.innerText = "Favourite food: Sock fluff"

  var li3 = document.createElement('li');
  var image = document.createElement('img')
  image.style.width ='500px'
  img.src = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?h=350&auto=compress&cs=tinysrgb"

  li3.appendChild(image);

  ul.appendChild(lil);
  ul.appendChild(li2);
  ul.appendChild(li3);

  var cats = document.querySelector('#cats');
  cats.appendChild(ul);

}

window.addEventListener("load", app);