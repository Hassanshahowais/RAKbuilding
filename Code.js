// script.js
const floorData = {
  0: {
    name: { en: "Ground Floor", ar: "الطابق الأرضي" },
    shops: [
      { id: 1, name: { en: "Shop 1", ar: "متجر 1" }, cost: "100,000 AED" },
      { id: 2, name: { en: "Shop 2", ar: "متجر 2" }, cost: "120,000 AED" },
      { id: 3, name: { en: "Shop 3", ar: "متجر 3" }, cost: "110,000 AED" },
      { id: 4, name: { en: "Shop 4", ar: "متجر 4" }, cost: "130,000 AED" },
      { id: 5, name: { en: "Shop 5", ar: "متجر 5" }, cost: "140,000 AED" },
      { id: 6, name: { en: "Shop 6", ar: "متجر 6" }, cost: "150,000 AED" },
      { id: 7, name: { en: "Shop 7", ar: "متجر 7" }, cost: "160,000 AED" },
      { id: 8, name: { en: "Shop 8", ar: "متجر 8" }, cost: "170,000 AED" },
      { id: 9, name: { en: "Shop 9", ar: "متجر 9" }, cost: "180,000 AED" },
      { id: 10, name: { en: "Shop 10", ar: "متجر 10" }, cost: "190,000 AED" },
      { id: 11, name: { en: "Shop 11", ar: "متجر 11" }, cost: "200,000 AED" }
    ],
    apartments: []
  },
  1: {
    name: { en: "Floor 1", ar: "الطابق الأول" },
    shops: [],
    apartments: [
      { id: 1, name: { en: "Apartment 1", ar: "شقة 1" }, cost: "200,000 AED" },
      { id: 2, name: { en: "Apartment 2", ar: "شقة 2" }, cost: "210,000 AED" },
      { id: 3, name: { en: "Apartment 3", ar: "شقة 3" }, cost: "220,000 AED" },
      { id: 4, name: { en: "Apartment 4", ar: "شقة 4" }, cost: "230,000 AED" },
      { id: 5, name: { en: "Apartment 5", ar: "شقة 5" }, cost: "240,000 AED" },
      { id: 6, name: { en: "Apartment 6", ar: "شقة 6" }, cost: "250,000 AED" }
    ]
  },
  // Add data for Floors 2 to 6 similarly
};

let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
  const floorLinks = document.querySelectorAll(".sidebar a");
  const floorTitle = document.getElementById("floor-title");
  const shopGrid = document.getElementById("shop-grid");
  const apartmentGrid = document.getElementById("apartment-grid");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const closeModal = document.querySelector(".close");

  // Language Toggle
  document.getElementById("english-btn").addEventListener("click", () => {
    currentLanguage = "en";
    updateContent();
  });

  document.getElementById("arabic-btn").addEventListener("click", () => {
    currentLanguage = "ar";
    updateContent();
  });

  // Floor Selection
  floorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const floorId = e.target.getAttribute("data-floor");
      updateContent(floorId);
    });
  });

  // Close Modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Update Content
  function updateContent(floorId = 0) {
    const floor = floorData[floorId];

    // Update Titles
    document.getElementById("floor-title").textContent = floor.name[currentLanguage];
    document.getElementById("shops-title").textContent = currentLanguage === "en" ? "Shops" : "المتاجر";
    document.getElementById("apartments-title").textContent = currentLanguage === "en" ? "Apartments" : "الشقق";

    // Update Shops
    shopGrid.innerHTML = "";
    floor.shops.forEach(shop => {
      const div = document.createElement("div");
      div.textContent = shop.name[currentLanguage];
      div.addEventListener("click", () => {
        modalTitle.textContent = shop.name[currentLanguage];
        modalDetails.textContent = `${currentLanguage === "en" ? "Cost" : "السعر"}: ${shop.cost}`;
        modal.style.display = "block";
      });
      shopGrid.appendChild(div);
    });

    // Update Apartments
    apartmentGrid.innerHTML = "";
    floor.apartments.forEach(apartment => {
      const div = document.createElement("div");
      div.textContent = apartment.name[currentLanguage];
      div.addEventListener("click", () => {
        modalTitle.textContent = apartment.name[currentLanguage];
        modalDetails.textContent = `${currentLanguage === "en" ? "Cost" : "السعر"}: ${apartment.cost}`;
        modal.style.display = "block";
      });
      apartmentGrid.appendChild(div);
    });
  }

  // Load Ground Floor by default
  updateContent(0);
});