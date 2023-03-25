const menuContainer_liTag = Array.from(
  document.querySelectorAll(".menuContainer ul li")
);

menuContainer_liTag.map((menuTag) => {
  menuTag.addEventListener("click", () => {
    menuContainer_liTag.forEach((menuIcon) => {
      menuIcon.classList.remove("active");
    });
    menuTag.classList.add("active");
  });
});

const LANGUAGE_TAG = document.querySelector(".custom-select");
const TO_SELECT_LAN_TAG = document.querySelector(".toSelectLang_Toggle");

LANGUAGE_TAG.addEventListener("click", () => {
  TO_SELECT_LAN_TAG.classList.toggle("toSelectLang_switch");
});

// change position
const NAV_TAG = document.querySelector(".wrapper header nav");
const LOGO_TAG = document.querySelector(".wrapper header nav div.logo");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    NAV_TAG.classList.add("nav-active");
    LOGO_TAG.style.maxWidth = "80px";
  } else {
    NAV_TAG.classList.remove("nav-active");
    LOGO_TAG.style.maxWidth = "125px";
  }
});

// menubar

const MENU_BAR_TAG = document.querySelector(".menu-bar");
const menuContainer_Tag = document.querySelector(".menuContainer");
MENU_BAR_TAG.addEventListener("click", () => {
  menuContainer_Tag.classList.toggle("menu-bar-active");
});

const alert_box_container = document.querySelector(".alert_box_container");
const alert_box = document.querySelector(".alert_box_container .alert_box");
const alert_box_img = document.querySelector(
  ".alert_box_container .alert_box img"
);

const content = document.querySelector(".content");

const coffee_array = [
  {
    name: "frapiccuno",
    image: "./img/Lovepik_com-401097948-coffee.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
  {
    name: "Cafe Latte",
    image: "./img/coffee-cafe-latte.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
  {
    name: "Americano",
    image: "./img/coffee-americano.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
  {
    name: "Cappuccino",
    image: "./img/coffee-cappuccino.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
  {
    name: "Milk Tea",
    image: "./img/coffee-milk-tea.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
  {
    name: "Ice Cappuccino",
    image: "./img/ice-cappuccino.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
  {
    name: "Ice Americano",
    image: "./img/ice-americano.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
  {
    name: "Cold Brew Latte with Milk",
    image: "./img/cold-brew-latte.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad quaerat laboriosam ab quia amet facilis dolorum esse. Ullam, autem doloribus quasi harum numquam repudiandae aut natus quos eaque placeat.",
    price: "999.9$",
  },
];

const coffee_list_group = document.querySelector(".coffee_list_group");

coffee_array.forEach((coffee_item) => {
  const coffee_list_item = document.createElement("div");
  coffee_list_item.classList.add("coffee_list_item");
  coffee_list_item.innerHTML = `
                                <img src="${coffee_item.image}" alt="" />
                                <h3>${coffee_item.name}</h3>
                                <a href="#shop">Buy Now</a>`;
  coffee_list_group.append(coffee_list_item);
});

const coffee_list_items = document.querySelectorAll(".coffee_list_item");
coffee_list_items.forEach((item, index) => {
  item.addEventListener("click", () => {
    alert_box_container.style.display = "flex";
    alert_box_img.src = coffee_array[index].image;
    content.innerHTML = `<h2>${coffee_array[index].name}</h2>
    <p>
      ${coffee_array[index].content}
    </p>
    <h3>price : ${coffee_array[index].price}</h3>`;
  });
});

const multiple_icon = document.querySelector(".multiple-icon");

multiple_icon.addEventListener("click", () => {
  alert_box_container.style.display = "none";
});
