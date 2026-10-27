const categories = [
  { id: "all", ar: "الكل", en: "ALL" },
  {
    id: "cold",
    ar: "المشروبات الباردة",
    en: "COLD",
    mood: "FRESHLY CHILLED",
  },
  {
    id: "hot",
    ar: "المشروبات الساخنة",
    en: "HOT",
    mood: "SLOW & COMFORTING",
  },
  {
    id: "drip",
    ar: "المشروبات المقطرة",
    en: "DRIP COFFEE",
    mood: "BREWED TO ORDER",
  },
  {
    id: "sweets",
    ar: "حلا",
    en: "SWEETS",
    mood: "A LITTLE INDULGENCE",
  },
];

const products = [
  { category: "cold", ar: "أمريكانو بارد", en: "Iced Americano", price: 15, calories: 5 },
  { category: "cold", ar: "ألفريدو إسبريسو", en: "Alfredo Espresso", price: 13, calories: 5 },
  { category: "cold", ar: "آيس لاتيه", en: "Iced Latte", price: 18, calories: 90 },
  {
    category: "cold",
    ar: "آيس سبانش",
    en: "Iced Spanish Latte",
    price: 17,
    calories: 200,
  },
  { category: "cold", ar: "ماتشا", en: "Matcha", price: 20, calories: 120 },
  { category: "cold", ar: "آيس تي أراو", en: "Araoo Iced Tea", price: 14, calories: 90 },
  { category: "cold", ar: "كركديه أراو", en: "Araoo Hibiscus", price: 12, calories: 50 },
  { category: "hot", ar: "لاتيه", en: "Hot Latte", price: 15, calories: 120 },
  {
    category: "hot",
    ar: "سبانش لاتيه",
    en: "Hot Spanish Latte",
    price: 15,
    calories: 220,
  },
  { category: "hot", ar: "إسبريسو", en: "Espresso", price: 12, calories: 5 },
  { category: "hot", ar: "كابتشينو", en: "Cappuccino", price: 14, calories: 140 },
  { category: "hot", ar: "أمريكانو", en: "Americano", price: 14, calories: 15 },
  { category: "hot", ar: "كورتادو", en: "Cortado", price: 16, calories: 90 },
  { category: "hot", ar: "ميكاتو", en: "Macchiato", price: 15, calories: 30 },
  { category: "hot", ar: "فلات وايت", en: "Flat White", price: 14, calories: 150 },
  {
    category: "drip",
    ar: "قهوة اليوم (حار أو بارد)",
    en: "Coffee of the Day (Hot or Iced)",
    price: 9,
    calories: 5,
  },
  {
    category: "drip",
    ar: "V60 يمني بارد",
    en: "Yemeni V60 · Iced",
    price: 21,
    calories: 5,
  },
  {
    category: "drip",
    ar: "V60 يمني حار",
    en: "Yemeni V60 · Hot",
    price: 20,
    calories: 5,
  },
  {
    category: "drip",
    ar: "V60 إثيوبي بارد",
    en: "Ethiopian V60 · Iced",
    price: 19,
    calories: 5,
  },
  {
    category: "drip",
    ar: "V60 إثيوبي حار",
    en: "Ethiopian V60 · Hot",
    price: 18,
    calories: 5,
  },
  {
    category: "drip",
    ar: "V60 عنب إنفيوجن بارد",
    en: "Grape Infusion V60 · Iced",
    price: 19,
    calories: 18,
  },
  {
    category: "drip",
    ar: "V60 عنب إنفيوجن حار",
    en: "Grape Infusion V60 · Hot",
    price: 18,
    calories: 15,
  },
  {
    category: "drip",
    ar: "V60 كوستاريكي بارد",
    en: "Costa Rican V60 · Iced",
    price: 19,
    calories: 5,
  },
  {
    category: "drip",
    ar: "V60 كوستاريكي حار",
    en: "Costa Rican V60 · Hot",
    price: 18,
    calories: 5,
  },
  { category: "sweets", ar: "تشيز كيك أراو", en: "Araoo Cheesecake", price: 20, calories: 320 },
  {
    category: "sweets",
    ar: "كوكيز التوت والليمون",
    en: "Berry & Lemon Cookies",
    price: 10,
    calories: 180,
  },
  {
    category: "sweets",
    ar: "تيراميسو هيل",
    en: "Cardamom Tiramisu",
    price: 18,
    calories: 280,
  },
  { category: "sweets", ar: "كور تيراميسو", en: "Tiramisu Bites", price: 14, calories: 150 },
  { category: "sweets", ar: "تشيز كيك تمر", en: "Date Cheesecake", price: 20, calories: 350 },
  { category: "sweets", ar: "تشيز كيك برتقال", en: "Orange Cheesecake", price: 20, calories: 290 },
  {
    category: "sweets",
    ar: "تشيز كيك لامينغتون بالشوكولاتة",
    en: "Chocolate Lamington Cheesecake",
    price: 11,
    calories: 310,
  },
  {
    category: "sweets",
    ar: "تشيز كيك لامينغتون توت",
    en: "Raspberry Lamington Cheesecake",
    price: 11,
    calories: 300,
  },
  {
    category: "sweets",
    ar: "تشيز كيك بالشوكولاتة",
    en: "Chocolate Cheesecake",
    price: 20,
    calories: 380,
  },
  {
    category: "sweets",
    ar: "تشيز كيك بزبدة الفول السوداني",
    en: "Peanut Butter Cheesecake",
    price: 20,
    calories: 420,
  },
];

const categoryList = document.querySelector("#category-list");
const menuResults = document.querySelector("#menu-results");
const searchInput = document.querySelector("#menu-search");
let activeCategory = "all";
let groupObserver;
let cardObserver;

function setActiveCategory(categoryId) {
  activeCategory = categoryId;
  categoryList.querySelectorAll(".category-button").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;
    if (isActive) {
      button.setAttribute("aria-current", "location");
    } else {
      button.removeAttribute("aria-current");
    }
    if (isActive) {
      button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-button"
          type="button"
          data-category="${category.id}"
          ${category.id === activeCategory ? 'aria-current="location"' : ""}
        >
          <span class="category-button__name">${category.ar}</span>
          <span class="category-button__english" lang="en">${category.en}</span>
          <span class="category-button__count" aria-hidden="true">${category.id === "all" ? products.length : products.filter((product) => product.category === category.id).length}</span>
        </button>
      `,
    )
    .join("");

  categoryList.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId =
        button.dataset.category === "all" ? "group-cold" : `group-${button.dataset.category}`;
      setActiveCategory(button.dataset.category);
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

function createProductCard(product, index) {
  const category = categories.find((item) => item.id === product.category);
  return `
    <article class="product-card product-card--${product.category}" style="--card-order: ${index}">
      <div class="product-card__body">
        <div class="product-card__heading">
          <span class="product-card__number" lang="en">${String(index + 1).padStart(2, "0")}</span>
          <span class="product-card__mark" lang="en">${category.en}</span>
        </div>
        <div class="product-card__names">
          <h4 class="product-card__name">${product.ar}</h4>
          <p class="product-card__english" lang="en">${product.en}</p>
        </div>
        <div class="product-card__footer">
          <span class="product-card__calories" aria-label="${product.calories} calories">
            <span lang="en">${product.calories} cal</span>
          </span>
          <span class="product-card__price">${product.price} <span class="product-card__currency">ر.س</span></span>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesSearch =
      !query ||
      `${product.ar} ${product.en}`.toLocaleLowerCase().includes(query);
    return matchesSearch;
  });

  const visibleCategories = categories.filter((category) => category.id !== "all");

  const groups = visibleCategories
    .map((category, index) => {
      const categoryProducts = visibleProducts.filter(
        (product) => product.category === category.id,
      );

      if (categoryProducts.length === 0) return "";

      return `
        <section class="menu-group menu-group--${category.id}" aria-labelledby="group-${category.id}">
          <div class="menu-group__heading">
            <div class="menu-group__title-wrap">
              <span class="menu-group__eyebrow" lang="en">${category.mood}</span>
              <h2 class="menu-group__title" id="group-${category.id}">
                ${category.ar}
                <span lang="en">${category.en}</span>
              </h2>
            </div>
            <span class="menu-group__count">
              <strong lang="en">0${index + 1}</strong>
              <span><b>${categoryProducts.length}</b> أصناف<br><small lang="en">MENU PICKS</small></span>
            </span>
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

  observeMenuGroups();
  observeProductCards();
}

searchInput.addEventListener("input", renderProducts);

function observeMenuGroups() {
  groupObserver?.disconnect();
  if (!("IntersectionObserver" in window)) return;

  groupObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const categoryId = visible?.target.dataset.category;
      if (categoryId && categoryId !== activeCategory) {
        setActiveCategory(categoryId);
      }
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75] },
  );
  menuResults.querySelectorAll(".menu-group").forEach((group) => {
    group.dataset.category = group.id.replace("group-", "");
    groupObserver.observe(group);
  });
}

function observeProductCards() {
  cardObserver?.disconnect();
  const cards = menuResults.querySelectorAll(".product-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  cards.forEach((card) => cardObserver.observe(card));
}

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
