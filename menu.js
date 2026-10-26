const categories = [
  { id: "all", ar: "الكل", en: "ALL", icon: "all" },
  { id: "cold", ar: "المشروبات الباردة", en: "COLD", icon: "cold" },
  { id: "hot", ar: "المشروبات الساخنة", en: "HOT", icon: "hot" },
  { id: "sweets", ar: "الحلى", en: "SWEETS", icon: "sweets" },
];

const products = [
  { category: "cold", ar: "أمريكانو بارد", en: "Iced Americano", price: 15 },
  { category: "cold", ar: "ألفريدو إسبريسو", en: "Alfredo Espresso", price: 13 },
  { category: "cold", ar: "آيس لاتيه", en: "Iced Latte", price: 18 },
  {
    category: "cold",
    ar: "سبانش لاتيه بارد",
    en: "Iced Spanish Latte",
    price: 19,
  },
  { category: "cold", ar: "ماتشا كلاود", en: "Matcha Cloud", price: 20 },
  { category: "cold", ar: "آيس تي أراو", en: "Araoo Iced Tea", price: 14 },
  { category: "cold", ar: "كركديه أراو", en: "Araoo Hibiscus", price: 12 },
  { category: "hot", ar: "لاتيه ساخن", en: "Hot Latte", price: 15 },
  {
    category: "hot",
    ar: "سبانش لاتيه ساخن",
    en: "Hot Spanish Latte",
    price: 15,
  },
  { category: "hot", ar: "إسبريسو", en: "Espresso", price: 12 },
  { category: "hot", ar: "كابتشينو", en: "Cappuccino", price: 14 },
  { category: "hot", ar: "أمريكانو ساخن", en: "Hot Americano", price: 14 },
  { category: "hot", ar: "كورتادو", en: "Cortado", price: 16 },
  { category: "hot", ar: "ماكياتو", en: "Macchiato", price: 15 },
  { category: "hot", ar: "فلات وايت", en: "Flat White", price: 14 },
  { category: "sweets", ar: "كيكة أراو", en: "Araoo Cake", price: 20 },
  {
    category: "sweets",
    ar: "كوكيز التوت والليمون",
    en: "Berry & Lemon Cookies",
    price: 10,
  },
  {
    category: "sweets",
    ar: "تيراميسو هيل",
    en: "Cardamom Tiramisu",
    price: 18,
  },
  { category: "sweets", ar: "بايتس تيراميسو", en: "Tiramisu Bites", price: 14 },
  { category: "sweets", ar: "كيكة التمر", en: "Date Cake", price: 20 },
  { category: "sweets", ar: "كيكة برتقال", en: "Orange Cake", price: 20 },
  {
    category: "sweets",
    ar: "كيك لامينغتون بالشوكولاتة",
    en: "Chocolate Lamington Cake",
    price: 11,
  },
  {
    category: "sweets",
    ar: "كيك لامينغتون أحمر",
    en: "Red Lamington Cake",
    price: 11,
  },
  {
    category: "sweets",
    ar: "تشيز كيك بالشوكولاتة",
    en: "Chocolate Cheesecake",
    price: 20,
  },
  {
    category: "sweets",
    ar: "تشيز كيك بزبدة الفول السوداني",
    en: "Peanut Butter Cheesecake",
    price: 20,
  },
];

const categoryList = document.querySelector("#category-list");
const menuResults = document.querySelector("#menu-results");
const searchInput = document.querySelector("#menu-search");
let activeCategory = "all";

function categoryIcon(type) {
  const icons = {
    all: '<rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" />',
    cold: '<path d="M8 3h8l2 18H6L8 3Z" /><path d="M7 14h10M10 7l1.5 2M14 11l1.5 2" />',
    hot: '<path d="M5 9h14l-1 11H6L5 9Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3M19 12h1a2 2 0 0 1 0 4h-2M9 4c-1-1 1-2 0-3M13 4c-1-1 1-2 0-3" />',
    sweets: '<path d="M4 19h16M6 19v-4l6-9 6 9v4M8 15h8M10 12h4" /><circle cx="12" cy="4" r="1" />',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[type]}</svg>`;
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-button"
          type="button"
          data-category="${category.id}"
          aria-pressed="${category.id === activeCategory}"
        >
          <span>${category.ar}</span>
          <span class="category-button__english" lang="en">${category.en}</span>
          <span class="category-button__count">${category.id === "all" ? products.length : products.filter((product) => product.category === category.id).length}</span>
        </button>
      `,
    )
    .join("");

  categoryList.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function createProductCard(product, index) {
  const art = productArtworkStyle(product, index);
  return `
    <article class="product-card" style="--accent: ${art.accent}; --accent-soft: ${art.background}">
      <div class="product-card__visual" aria-hidden="true">
        <span class="product-card__number" lang="en">${String(index + 1).padStart(2, "0")}</span>
        ${productArtwork(product, index)}
      </div>
      <div class="product-card__body">
        <div>
          <h4 class="product-card__name">${product.ar}</h4>
          <p class="product-card__english" lang="en">${product.en}</p>
        </div>
        <div class="product-card__footer">
          <span class="product-card__price">${product.price} <span class="product-card__currency">ر.س</span></span>
          <span class="product-card__mark" lang="en">${product.category === "sweets" ? "SWEET" : "ARAOO"}</span>
        </div>
      </div>
    </article>
  `;
}

function productArtworkStyle(product, index) {
  const palettes = {
    cold: [
      { accent: "#754b36", light: "#c38b5f", background: "#e6d8bd", garnish: "ice" },
      { accent: "#81533d", light: "#d39b6e", background: "#edddc7", garnish: "cream" },
      { accent: "#9c6848", light: "#dfb282", background: "#f0e3cb", garnish: "ice" },
      { accent: "#a36a46", light: "#e2b481", background: "#efe0c7", garnish: "cream" },
      { accent: "#72804c", light: "#b4bb77", background: "#e4e4cd", garnish: "cream" },
      { accent: "#a8793e", light: "#e5bd70", background: "#eee3c5", garnish: "lemon" },
      { accent: "#89514c", light: "#c27d71", background: "#ecd8cf", garnish: "leaf" },
    ],
    hot: [
      { accent: "#7c543d", light: "#c89767", background: "#e9ddca" },
      { accent: "#80533a", light: "#d3a574", background: "#eee1cd" },
      { accent: "#49372c", light: "#9e7150", background: "#e5d9c6" },
      { accent: "#976945", light: "#d8b18a", background: "#eee2d0" },
      { accent: "#523c2c", light: "#b2875e", background: "#e7dbc6" },
      { accent: "#644333", light: "#bd936e", background: "#eadfce" },
      { accent: "#75503a", light: "#c89c70", background: "#eee0cc" },
      { accent: "#8a6547", light: "#d1ad84", background: "#efe5d3" },
    ],
    sweets: [
      { accent: "#8a6846", light: "#d4b27e", background: "#eee2c8", garnish: "leaf", type: "cake" },
      { accent: "#ae7a43", light: "#e4be72", background: "#f0e5c9", garnish: "berry", type: "cookie" },
      { accent: "#75513c", light: "#c99b68", background: "#eadcc7", garnish: "cocoa", type: "cake" },
      { accent: "#846345", light: "#dab781", background: "#eee3ce", garnish: "cocoa", type: "cake" },
      { accent: "#76513a", light: "#c3945e", background: "#eadcc3", garnish: "leaf", type: "cake" },
      { accent: "#b2763b", light: "#e8bd70", background: "#f1e3c6", garnish: "orange", type: "cake" },
      { accent: "#684434", light: "#bd8960", background: "#ebdbca", garnish: "cocoa", type: "cake" },
      { accent: "#9b4e49", light: "#cc8370", background: "#edd9d0", garnish: "berry", type: "cake" },
      { accent: "#70523e", light: "#c6a074", background: "#eae0d0", garnish: "cocoa", type: "cake" },
      { accent: "#8a6748", light: "#d6b17f", background: "#efe2cd", garnish: "peanut", type: "cake" },
    ],
  };
  const palette = palettes[product.category];
  const item = palette[index % palette.length];
  return {
    ...item,
    type: item.type || (product.category === "cold" ? "iced" : "hot"),
  };
}

function productArtwork(product, index) {
  const art = productArtworkStyle(product, index);
  const id = `art-${product.category}-${index}`;

  if (art.type === "iced") {
    return `
      <svg class="product-card__art" viewBox="0 0 180 190" fill="none">
        <defs>
          <linearGradient id="${id}-drink" x1="62" y1="67" x2="119" y2="153" gradientUnits="userSpaceOnUse">
            <stop stop-color="${art.light}" />
            <stop offset="1" stop-color="${art.accent}" />
          </linearGradient>
          <linearGradient id="${id}-glass" x1="53" y1="42" x2="128" y2="163" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity=".82" />
            <stop offset="1" stop-color="white" stop-opacity=".32" />
          </linearGradient>
        </defs>
        <ellipse cx="90" cy="163" rx="44" ry="7" fill="#453b2b" fill-opacity=".1" />
        <path d="M54 49h72l-8 103a8 8 0 0 1-8 7H70a8 8 0 0 1-8-7L54 49Z" fill="url(#${id}-glass)" stroke="#faf7ea" stroke-width="2.5" />
        <path d="M59 79h62l-5.8 72H65L59 79Z" fill="url(#${id}-drink)" />
        <path d="M52 49h76v9H52z" fill="#fbf8ee" fill-opacity=".95" stroke="#fff" stroke-width="2" />
        <path d="m75 33 32-3 7 88-32 3-7-88Z" fill="#fff" fill-opacity=".68" stroke="#fff" stroke-width="2" />
        <path d="m95 39 25-2 6 62-25 2-6-62Z" fill="#fff" fill-opacity=".5" stroke="#fff" stroke-width="2" />
        <path d="M82 49c2 30 8 64 7 99" stroke="white" stroke-opacity=".8" stroke-width="3" stroke-linecap="round" />
        ${art.garnish === "leaf" ? '<path d="M105 67c11-17 25-13 25-13s-1 16-17 22" stroke="#627449" stroke-width="3" stroke-linecap="round" /><path d="m108 71 13-12" stroke="#627449" stroke-width="2" />' : ""}
        ${art.garnish === "lemon" ? '<circle cx="126" cy="70" r="13" fill="#e9d786" stroke="#fff9dc" stroke-width="3" /><path d="M126 59v22m-11-11h22m-19-8 16 16m0-16-16 16" stroke="#fff7d4" stroke-width="1.5" />' : ""}
        ${art.garnish === "cream" ? '<path d="M64 77c12-12 17-2 27-9s17 8 29-1v16H64V77Z" fill="#faf1d9" /><circle cx="91" cy="68" r="7" fill="#faf1d9" />' : ""}
        ${art.garnish === "ice" ? '<path d="m77 88 14-4 7 13-13 6-8-15Zm25 22 12-4 7 13-13 5-6-14Z" fill="#fff" fill-opacity=".62" />' : ""}
        <path d="M77 34V20a9 9 0 0 1 18 0v12" stroke="#74765b" stroke-width="2.5" stroke-linecap="round" />
      </svg>`;
  }

  if (art.type === "cake" || art.type === "cookie") {
    return `
      <svg class="product-card__art" viewBox="0 0 180 190" fill="none">
        <defs>
          <linearGradient id="${id}-top" x1="47" y1="75" x2="130" y2="111" gradientUnits="userSpaceOnUse">
            <stop stop-color="${art.light}" />
            <stop offset="1" stop-color="${art.accent}" />
          </linearGradient>
          <linearGradient id="${id}-side" x1="80" y1="100" x2="120" y2="159" gradientUnits="userSpaceOnUse">
            <stop stop-color="${art.accent}" />
            <stop offset="1" stop-color="#77634b" />
          </linearGradient>
        </defs>
        <ellipse cx="91" cy="159" rx="57" ry="8" fill="#453b2b" fill-opacity=".11" />
        <path d="M37 143h108l-7 12H44l-7-12Z" fill="#b7aa88" />
        <path d="M44 140c8-8 19-11 29-11 13 0 19 7 31 5 13-2 20-10 32-5l6 11H44Z" fill="#f8f4e7" />
        <path d="m48 103 40-29 47 24-42 31-45-26Z" fill="url(#${id}-top)" stroke="#fff8e5" stroke-width="2" />
        <path d="m48 103 45 26v29l-45-26v-29Z" fill="${art.light}" />
        <path d="m93 129 42-31v29l-42 31v-29Z" fill="url(#${id}-side)" />
        <path d="m52 106 36-26 40 20-37 27-39-21Z" fill="#f5ead3" fill-opacity=".72" />
        <path d="m53 112 35 20v5l-35-20v-5Zm43 21 33-24v6l-33 24v-6Z" fill="#f8f1df" />
        ${art.type === "cookie" ? '<circle cx="66" cy="99" r="3" fill="#493a2a" /><circle cx="84" cy="94" r="2.5" fill="#493a2a" /><circle cx="101" cy="100" r="3" fill="#493a2a" /><circle cx="77" cy="108" r="2.5" fill="#493a2a" />' : ""}
        ${art.garnish === "berry" ? '<circle cx="91" cy="74" r="7" fill="#9e5351" /><circle cx="105" cy="79" r="6" fill="#bb6960" /><path d="m89 66 3-5m12 12 5-5" stroke="#68774b" stroke-width="2" stroke-linecap="round" />' : ""}
        ${art.garnish === "cocoa" ? '<path d="m77 86 4 3m5-8 4 3m4 7 4 3m4-10 4 3m-28 12 4 3m17 0 4 3" stroke="#604531" stroke-width="2.5" stroke-linecap="round" />' : ""}
        ${art.garnish === "orange" ? '<circle cx="100" cy="88" r="11" fill="#e3a449" stroke="#fff2cf" stroke-width="3" /><path d="M100 78v20m-10-10h20m-17-7 14 14m0-14-14 14" stroke="#fff2cf" stroke-width="1.3" />' : ""}
        ${art.garnish === "leaf" ? '<path d="M74 84c7-14 20-12 20-12s-2 14-16 18" fill="#788459" /><path d="m77 86 12-10" stroke="#e9e2c9" stroke-width="1.5" />' : ""}
        ${art.garnish === "peanut" ? '<ellipse cx="79" cy="85" rx="5" ry="3" transform="rotate(-28 79 85)" fill="#c49a66" /><ellipse cx="96" cy="90" rx="5" ry="3" transform="rotate(23 96 90)" fill="#c49a66" />' : ""}
      </svg>`;
  }

  return `
    <svg class="product-card__art" viewBox="0 0 180 190" fill="none">
      <defs>
        <linearGradient id="${id}-cup" x1="48" y1="54" x2="126" y2="150" gradientUnits="userSpaceOnUse">
          <stop stop-color="#fffdf5" />
          <stop offset="1" stop-color="#ded5bd" />
        </linearGradient>
        <linearGradient id="${id}-coffee" x1="69" y1="75" x2="115" y2="101" gradientUnits="userSpaceOnUse">
          <stop stop-color="${art.light}" />
          <stop offset="1" stop-color="${art.accent}" />
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="157" rx="56" ry="8" fill="#453b2b" fill-opacity=".12" />
      <path d="M43 145h94v7H43z" fill="#a89b7a" />
      <path d="M52 145c8 7 57 7 75 0" stroke="#d5c9a8" stroke-width="3" />
      <path d="M57 64h69l-7 69a13 13 0 0 1-13 12H77a13 13 0 0 1-13-12l-7-69Z" fill="url(#${id}-cup)" stroke="#fffdf4" stroke-width="2" />
      <path d="M65 78h53l-4 33H69l-4-33Z" fill="url(#${id}-coffee)" />
      <ellipse cx="91.5" cy="77" rx="26.5" ry="8" fill="#f1e9d3" />
      <ellipse cx="91.5" cy="77" rx="20" ry="5.5" fill="${art.accent}" />
      <path d="M126 82h7a17 17 0 0 1 0 34h-10" stroke="#ede6d3" stroke-width="7" />
      <path d="M126 86h5a13 13 0 0 1 0 26h-7" stroke="#fffdf4" stroke-width="2" />
      <path d="M78 45c-8-9 7-11 0-20m15 20c-8-9 7-11 0-20m15 20c-8-9 7-11 0-20" stroke="#9b927a" stroke-opacity=".7" stroke-width="2.4" stroke-linecap="round" />
      <path d="M90 77c4-8 11-5 12 0-2 7-8 9-12 0Z" fill="#efe3c2" fill-opacity=".95" />
      <path d="M91 77c-5-8-12-5-12 0 2 7 8 9 12 0Z" fill="#efe3c2" fill-opacity=".95" />
      <path d="M91 76v13" stroke="#9a8055" stroke-width="1.5" />
    </svg>`;
}

function categoryGroupIcon(category) {
  return `
    <span class="menu-group__icon" aria-hidden="true">
      ${categoryIcon(category.icon)}
    </span>
  `;
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      !query ||
      `${product.ar} ${product.en}`.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const visibleCategories =
    activeCategory === "all"
      ? categories.filter((category) => category.id !== "all")
      : categories.filter((category) => category.id === activeCategory);

  const groups = visibleCategories
    .map((category, index) => {
      const categoryProducts = visibleProducts.filter(
        (product) => product.category === category.id,
      );

      if (categoryProducts.length === 0) return "";

      return `
        <section class="menu-group" aria-labelledby="group-${category.id}">
          <div class="menu-group__heading">
            <div class="menu-group__title-wrap">
              ${categoryGroupIcon(category)}
              <h2 class="menu-group__title" id="group-${category.id}">
                ${category.ar}
                <span lang="en">${category.en}</span>
              </h2>
            </div>
            <span class="menu-group__count">${categoryProducts.length} <strong lang="en">/ 0${index + 1}</strong></span>
          </div>
          <div class="product-grid">
            ${categoryProducts
              .map((product) =>
                createProductCard(product, products.indexOf(product)),
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  menuResults.innerHTML =
    groups ||
    `<p class="empty-state">ما لقينا أصناف تطابق بحثك.<span lang="en">No matching items found.</span></p>`;
}

searchInput.addEventListener("input", renderProducts);

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchInput.blur();
    renderProducts();
  }
});

renderCategories();
renderProducts();
