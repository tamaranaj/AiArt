
// Script for top Carousel
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (index + totalSlides) % totalSlides;
    // slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// Script for Most Popular Creator Pics

function scrollGallery(distance) {
  const container = document.getElementById('mz-gallery');
  if (container) {
    container.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  } else {
    console.error('Element with ID "mz-gallery" not found.');
  }
}

function scrollR() {
  scrollGallery(500);
}

function scrollL() {
  scrollGallery(-300);
}



document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.getElementById("mz-gallery");

  fetch('imgIndex.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(images => {
          const firstTwentyImages = images.slice(0, 30);

          firstTwentyImages.forEach(image => {
              const figure = document.createElement("figure");

              const img = document.createElement("img");
              img.src = image.imageUrl;
              img.width = 700;
              img.height = 700;

              img.addEventListener("click", function() {
                window.location.href = "templates/categoryPage.html";
            });

              figure.appendChild(img);

              const figcaption = document.createElement("figcaption");
              figcaption.textContent = image.description;
              figure.appendChild(figcaption);

              gallery.appendChild(figure);
          });
      })
      .catch(error => {
          console.error('Error fetching images:', error);
      });
});

// Script for Rotating Cube

document.addEventListener("DOMContentLoaded", function() {
  const category = "Art & Designs";
  const cubeContainer = document.querySelector('.cube-container');
  const photoCube = cubeContainer.querySelector('.photo-cube');

  fetch('imgIndex.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(images => {

          const categoryImages = images.filter(image => image.category === category);

          for (let i = categoryImages.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [categoryImages[i], categoryImages[j]] = [categoryImages[j], categoryImages[i]];
          }

          const selectedImages = categoryImages.slice(0, 3);

          photoCube.querySelectorAll('img').forEach(img => img.remove());

          if (selectedImages.length >= 3) {
              selectedImages.forEach((image, index) => {
                  const img = document.createElement('img');
                  img.src = image.imageUrl;
                  img.className = ['front', 'left', 'right'][index];
                  photoCube.appendChild(img);
              });
          } else {
              console.error('Not enough images in the specified category.');
          }
      })
      .catch(error => {
          console.error('Error fetching images:', error);
      });
});


document.addEventListener("DOMContentLoaded", function() {
  const category = "Portraits";
  const cubeContainer = document.querySelector('.cubeContainer2');
  const photoCube = cubeContainer.querySelector('.photo-cube');

  fetch('imgIndex.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(images => {

          const categoryImages = images.filter(image => image.category === category);

          for (let i = categoryImages.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [categoryImages[i], categoryImages[j]] = [categoryImages[j], categoryImages[i]];
          }

          const selectedImages = categoryImages.slice(0, 3);

          photoCube.querySelectorAll('img').forEach(img => img.remove());

          if (selectedImages.length >= 3) {
              selectedImages.forEach((image, index) => {
                  const img = document.createElement('img');
                  img.src = image.imageUrl;
                  img.className = ['front', 'left', 'right'][index];
                  photoCube.appendChild(img);
              });
          } else {
              console.error('Not enough images in the specified category.');
          }
      })
      .catch(error => {
          console.error('Error fetching images:', error);
      });
});


document.addEventListener("DOMContentLoaded", function() {
  const category = "Landscapes";
  const cubeContainer = document.querySelector('.cubeContainer3');
  const photoCube = cubeContainer.querySelector('.photo-cube');

  fetch('imgIndex.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(images => {
          const categoryImages = images.filter(image => image.category === category);

          for (let i = categoryImages.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [categoryImages[i], categoryImages[j]] = [categoryImages[j], categoryImages[i]];
          }

          const selectedImages = categoryImages.slice(0, 3);

          photoCube.querySelectorAll('img').forEach(img => img.remove());

          if (selectedImages.length >= 3) {
              selectedImages.forEach((image, index) => {
                  const img = document.createElement('img');
                  img.src = image.imageUrl;
                  img.className = ['front', 'left', 'right'][index];
                  photoCube.appendChild(img);
              });
          } else {
              console.error('Not enough images in the specified category.');
          }
      })
      .catch(error => {
          console.error('Error fetching images:', error);
      });
});


let currentPage=1
document.addEventListener('DOMContentLoaded', async function(){
    
    let data = await fetchDataService.getImg()
    let copyData = [...data]
    searchInputService.addSearchEvent(copyData)
    itemsInCart.displayItems()

    let user = isAuthenticated()
    if(!user){
    document.getElementById('LogOutBtn').style.display = 'none'
    document.getElementById('signUp').style.display = 'block'
    document.getElementById('LoginBtn').style.display = 'block'
    }else{
    document.getElementById('LogOutBtn').style.display = 'block'
    document.getElementById('signUp').style.display = 'none'
    document.getElementById('LoginBtn').style.display = 'none'
    }
})



function isAuthenticated() {
    return localStorage.getItem("user-creds") !== null;
}

const logOutBtn = document.getElementById("LogOutBtn");
logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("user-creds");
    localStorage.removeItem("cart-items");
    document.location.href = "../index.html";
});

const itemsInCart = {
    cart: document.getElementById("cart-count"),
    displayItems: function () {
        let storedCart = JSON.parse(localStorage.getItem("cart-items")) || []
        this.cart.textContent = storedCart.length;
        this.cart.style.display = storedCart.length > 0 ? 'block' : 'none';
    }
}

let fetchDataService = {
    getImg: async function () {
        try {
            let url = 'https://raw.githubusercontent.com/tamaranaj/AiArt/main/imgIndex.json'
            let res = await fetch(url)
            let data = await res.json()

            return [...data]

        } catch (error) {
            console.log(error)
        }
    }
}

const createCardsService = {
    divShowingCards: document.getElementById("cardContainer"),
    pageNumber: document.getElementById("pagination"),
    itemsCart: function(item){
        let itemsInCart = JSON.parse(localStorage.getItem("cart-items")) || []
        console.log(itemsInCart, "itemsInCart")
        let img = itemsInCart.find(i=>i.id==item.id)
        return img
    },
    createCards: function (images, page) {
        this.pageNumber.style.display = "flex"
        this.divShowingCards.style.display = "grid"
        let numOfImagesPerPage = 4
        this.divShowingCards.innerHTML = "";
        page--;
        let start = numOfImagesPerPage * page
        let end = start + numOfImagesPerPage
        let pagginatedItems = images.slice(start, end)
        for (let i = 0; i < pagginatedItems.length; i++) {
            let data = {

                imageUrl: `../${pagginatedItems[i].imageUrl}`,
                id: pagginatedItems[i].id,
                type: pagginatedItems[i].photo,
                description: pagginatedItems[i].description,
                tags: pagginatedItems[i].tags,
                category: pagginatedItems[i].category,
                artist: pagginatedItems[i].artist,
                price: pagginatedItems[i].price,
                onDiscount: pagginatedItems[i].onDiscount,
                discPrice: pagginatedItems[i].discPrice,
                stock: pagginatedItems[i].stock,
                

            }
            this.divShowingCards.innerHTML += `
             <article class="card" >
                <img
                class="card__background"
                src=${pagginatedItems[i].imageUrl}
                alt=${pagginatedItems[i].type}
                width="1920"
                height="2193"/>
                    <div class="card__content | flow" id='card__content'>
                        <div class="card__content--container | flow">
                            <p class="card__description">${pagginatedItems[i].category}</p>
                            <p class="img-price">${pagginatedItems[i].price}$</p>
                            <div class="buttonsContainer" id='${pagginatedItems[i].id}' data-item='${JSON.stringify(data)}'>
                                <p class="details__button"><img src='icons/icons8-info-64.png' alt='info icon' width ='38'/></p>
                            </div>
                        </div>
                        
                    </div>
            </article> 
           
            `;
            let cart = createCardsService.itemsCart(pagginatedItems[i])
            if (pagginatedItems[i].stock == true && !cart) {
                let parentDiv = document.getElementById(`${pagginatedItems[i].id}`)
                parentDiv.innerHTML += `<p class="card__button"><img src="icons/icons8-add-to-cart-48.png" alt="Add to cart" width ='38' ></p>`
            }

        }
        addToCartService.addEventsAddToCart()
        this.setupPagination(images, this.pageNumber)
        popUpImagesService.addEventsImgButtons()//POP UP
        this.pageNumber.classList.remove('hidden')
        

    }, setupPagination(images, wrapper) {
        let numOfImagesPerPage = 4
        wrapper.innerHTML = ""
        let page_count = Math.ceil(images.length / numOfImagesPerPage)
        if(page_count == 1){
            let btn = this.paginationButton(page_count,images)
            wrapper.appendChild(btn)
        }else{
            for (let i = 1; i < page_count + 1; i++) {
                let btn = this.paginationButton(i, images)
                wrapper.appendChild(btn)
            }
        }
        
    },
    paginationButton: function (page, images) {
        let button = document.createElement('button')
        button.innerText = page
        if (currentPage == page) {
            button.classList.add("active")
        }
        button.addEventListener("click", function (event) {
            currentPage = page
            createCardsService.createCards(images, currentPage)
            let current_btn = document.querySelector('.page-numbers button.active')
            current_btn.classList.remove('active')
            event.target.classList.add('active')
            current_btn.style.color = "red"

        })
        return button
    }

}
const addToCartService = {
    addToCartBtn: document.getElementsByClassName("card__button"),
    addEventsAddToCart: function () {
        for (let button of this.addToCartBtn) {
            button.addEventListener("click", function (event) {
                event.preventDefault()
                let img = button.parentElement.getAttribute('data-item')
                let item = JSON.parse(img)
                addToCartService.cartEvent(item)
                button.style.display = "none"
            })
        }

    }, cartEvent: function (img) {
        let items = JSON.parse(localStorage.getItem("cart-items")) || []
        let check = items.find(i=> i.id ==img.id)
        if(!check){
            items.push(img)
            localStorage.setItem("cart-items", JSON.stringify(items))
            itemsInCart.displayItems()
            console.log(items)
        }

    }
}
//For PopUp
const popUpImagesService = {
    addEventsImgButtons: function () {
        const buttons = document.getElementsByClassName("details__button");
        for (let button of buttons) {
            button.addEventListener("click",  function (event) {
                event.preventDefault();
                let item  = button.parentElement.getAttribute('data-item')
                
                console.log(item)
                let imageData = JSON.parse(item)
                console.log(imageData)
                if (imageData) {
                    showPopup(imageData);
                }
                let cardBtn = document.getElementById(`${imageData.id}`).children[1]
                let cart = createCardsService.itemsCart(imageData)
                if (imageData.stock === true && !cart) {
                    let btn = document.getElementById('add')
                    btn.style.display = "flex"
                    btn.addEventListener("click", function (event) {
                        event.preventDefault()
                        addToCartService.cartEvent(imageData)
                        cardBtn.style.display = 'none'
                        this.style.display = 'none'
                    })
                } else {
                    document.getElementById('add').style.display = "none"
                }
            });
        }
    }
};
//Pop up
function showPopup(imageData) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const popupClose = document.getElementById('popup-close');
    const popupImage = document.getElementById('popup-image');
    const popupHeader = document.getElementById('popup-header')
    const stockStatus = imageData.stock ? ' ✓' : ' ✘';

    // Update the popup image
    imageData.imageUrl.replace("../", "")
    popupImage.src = imageData.imageUrl;
    popupImage.alt = imageData.type;
    // Update the popup content

    popupHeader.innerHTML = `<h3>${imageData.category}</h3>`
    popupText.innerHTML = `
        
        <p><span>■ Description:</span>  ${imageData.description}</p>
        <p><span>■ Artist:</span>  ${imageData.artist.userName}</p>
        <p><span>■ Price:</span>  ${imageData.price}$</p>
        <p><span>■ In Stock:</span>  ${stockStatus}</p>
    `;

    popup.classList.remove('hidden');
    popup.style.display = 'flex';

    popupClose.addEventListener('click', () => {
        popup.classList.add('hidden');
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.add('hidden');
            popup.style.display = 'none';
        }
    });

}
const searchInputService = {
    searchInput: document.getElementById("searchInput"),
    addSearchEvent: async function (data) {
        if (this.searchInput) {
            searchInputService.searchInput.addEventListener("keydown", async function (event) {
                if (event.code === 'Enter') {
                    document.getElementById("main").scrollIntoView()
                    const searchedItems = searchInputService.searchDB(data)
                    searchInputService.searchInput.value = '';
                    
                    if (searchedItems.length == 0) {
                        const divNoItems = document.getElementById("noItemsFound")
                        createCardsService.divShowingCards.style.display="none"
                        createCardsService.pageNumber.style.display = "none"
                        divNoItems.style.display = "block"
                        setTimeout(() => { divNoItems.style.display = "none" },                      5000)
                    } else {
                        
                        currentPage = 1
                        createCardsService.createCards(searchedItems, currentPage)
                    }
                }
            })
        }
    },
    searchDB: function (data) {
        const result = data.filter(item => {
            if (item.tags.find(str => str == searchInputService.searchInput.value.toLowerCase() || str.includes(searchInputService.searchInput.value.toLowerCase()))) {
                return item
            }
        })
        return result
    }

}
