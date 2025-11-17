// =================== DOM Elements ===================
const homeBtn = document.getElementById('homeBtn');
const medicineBtn = document.getElementById('medicineBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const mainContent = document.getElementById('mainContent');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartDropdown = document.getElementById('cartDropdown');
const cartBtn = document.getElementById('cartBtn');


// =================== Content Templates ===================
function loadHomeSection() {
  mainContent.innerHTML = `
  <section class="hero-section">
            <div class="hero-content">
                <h1 class="main-header">Welcome to Mount Kibo Pharmacy</h1>
                <h2 class="sub-header">Your Trusted Healthcare Partner</h2>
                <p class="slogan">Quality Medicines, Wellness Products, and Expert Advice</p>
                <div class="cta-buttons">
                    <button class="cta-btn primary" id="shopNowBtn">Shop Now</button>
                    <button class="cta-btn secondary" id="findMedicineBtn">Find Medicine</button>
                </div>
            </div>
        </section>

    <section class="features-box-outer">
      <div class="features-wrapper">
        <div class="features-section">
          <div class="feature-card">
            <i class="fas fa-capsules"></i>
            <h3>Affordable Medicines</h3>
            <p>Find quality and affordable medicines easily.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-shipping-fast"></i>
            <h3>Fast Delivery</h3>
            <p>Swift, safe, and convenient delivery service.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-user-md"></i>
            <h3>Expert Advice</h3>
            <p>Consult pharmacists for best medical help.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-syringe"></i>
            <h3>Vaccination Support</h3>
            <p>Access to common vaccines and boosters.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-heartbeat"></i>
            <h3>Heart Care</h3>
            <p>Get support for cardiac health and wellness.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-pills"></i>
            <h3>Variety of Products</h3>
            <p>We stock thousands of pharmaceutical products.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-notes-medical"></i>
            <h3>Medical Records</h3>
            <p>Track prescriptions and dosage history.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-briefcase-medical"></i>
            <h3>First Aid Kits</h3>
            <p>Buy complete first aid solutions at great prices.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-stethoscope"></i>
            <h3>Health Checkups</h3>
            <p>Book simple in-store health assessments.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-baby"></i>
            <h3>Baby Products</h3>
            <p>Quality baby care products available anytime.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-band-aid"></i>
            <h3>Wound Care</h3>
            <p>All you need for quick healing and protection.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-allergies"></i>
            <h3>Allergy Relief</h3>
            <p>Trusted medications to ease allergy symptoms.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-dna"></i>
            <h3>Supplements</h3>
            <p>Support your body with quality supplements.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-eye-dropper"></i>
            <h3>Eye Care</h3>
            <p>Eye drops, lenses, and other eye care items.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-prescription-bottle-alt"></i>
            <h3>Prescription Refill</h3>
            <p>Refill your prescriptions with ease.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-tooth"></i>
            <h3>Dental Products</h3>
            <p>Everything for a brighter, cleaner smile.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-head-side-mask"></i>
            <h3>COVID Essentials</h3>
            <p>Masks, sanitizers, and safety tools in stock.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-lungs"></i>
            <h3>Respiratory Aid</h3>
            <p>Inhalers and humidifiers for better breathing.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-procedures"></i>
            <h3>Home Care</h3>
            <p>Products for home-based patient care.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-hospital-user"></i>
            <h3>Elderly Care</h3>
            <p>Support products for senior citizens.</p>
          </div>
        </div>
      </div>
    </section>
  `;
  document.getElementById('shopNowBtn')?.addEventListener('click', loadMedicineSection);
  document.getElementById('findMedicineBtn')?.addEventListener('click', loadMedicineSection);
}

function loadMedicineSection() {
  const categories = [
    { key: "Pain Relief", icon: "fas fa-prescription-bottle-alt" },
    { key: "Antibiotics", icon: "fas fa-syringe" },
    { key: "Cough & Cold", icon: "fas fa-head-side-cough" },
    { key: "Allergy", icon: "fas fa-allergies" },
    { key: "Antimalarials", icon: "fas fa-mosquito" },
    { key: "Vitamins & Supplements", icon: "fas fa-capsules" },
    { key: "Digestive Health", icon: "fas fa-stomach" },
    { key: "Skin Care & Creams", icon: "fas fa-pump-soap" },
    { key: "Hypertension & Heart", icon: "fas fa-heartbeat" },
    { key: "Diabetes Care", icon: "fas fa-syringe" },
    { key: "Eye Medications", icon: "fas fa-eye" },
    { key: "Ear Medications", icon: "fas fa-ear-listen" },
    { key: "Family Planning", icon: "fas fa-user-lock" },
    { key: "Pregnancy & Baby", icon: "fas fa-baby" },
    { key: "First Aid", icon: "fas fa-briefcase-medical" },
    { key: "Antifungals", icon: "fas fa-spa" },
    { key: "Antivirals", icon: "fas fa-virus" },
    { key: "Antiseptics", icon: "fas fa-hand-sparkles" },
    { key: "Oral Care", icon: "fas fa-tooth" },
    { key: "Respiratory", icon: "fas fa-lungs" },
    { key: "Neurological", icon: "fas fa-brain" },
    { key: "Mental Health", icon: "fas fa-head-side-medical" },
    { key: "Cardiac Care", icon: "fas fa-heart" },
    { key: "Cancer Support", icon: "fas fa-ribbon" },
    { key: "Hormones", icon: "fas fa-transgender" },
    { key: "Thyroid", icon: "fas fa-balance-scale" },
    { key: "Urology", icon: "fas fa-bladder" },
    { key: "Nephrology", icon: "fas fa-kidney" },
    { key: "Hematology", icon: "fas fa-droplet" },
    { key: "Gastroenterology", icon: "fas fa-kiwi-bird" },
    { key: "Bone & Joint", icon: "fas fa-bone" },
    { key: "Pain Neuropathic", icon: "fas fa-bolt" },
    { key: "Immunology", icon: "fas fa-shield-virus" },
    { key: "Geriatrics", icon: "fas fa-user-nurse" },
    { key: "Pediatrics", icon: "fas fa-child" },
    { key: "Ear Wax Removal", icon: "fas fa-icicles" },
    { key: "Wound Care", icon: "fas fa-band-aid" },
    { key: "Sleep Aid", icon: "fas fa-moon" },
    { key: "Weight Loss", icon: "fas fa-weight-scale" },
    { key: "Smoking Cessation", icon: "fas fa-smoking-ban" },
    { key: "Travel Medicine", icon: "fas fa-suitcase-rolling" },
    { key: "Eye Care Accessories", icon: "fas fa-glasses" },
    { key: "Masks & PPE", icon: "fas fa-mask-face" },
    { key: "Hydration Therapy", icon: "fas fa-tint" },
    { key: "Electrolytes", icon: "fas fa-battery-full" },
    { key: "Sports Recovery", icon: "fas fa-running" },
    { key: "Anti-inflammatory", icon: "fas fa-fire-extinguisher" },
    { key: "Cold Sores", icon: "fas fa-lips" },
    { key: "Oral Thrush", icon: "fas fa-life-ring" }
  ];
  mainContent.innerHTML = `
    <section class="medicine-section">
      <div class="medicine-header">
        <h1 class="animated-text lavenderblush-text">Medicine Categories</h1>
      </div>
      <div class="medicine-categories">
        ${categories.map(cat => `
          <div class="medicine-category" onclick="loadMedicineCategory('${cat.key}')">
            <i class="${cat.icon}"></i>
            <h3>${cat.key}</h3>
            <p>Explore ${cat.key}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function loadMedicineCategory(categoryName) {
  mainContent.innerHTML = `
    <section class="medicine-section">
      <div class="medicine-header">
        <h1 class="animated-text lavenderblush-text">${categoryName}</h1>
        <button class="go-home-btn" onclick="loadMedicineSection()">⏪ Back to Categories</button>
      </div>
      <div class="medicine-products">
        ${generateProductCards(categoryName)}
      </div>
    </section>
  `;
}

function generateProductCards(category) {
  const map = {
    "Pain Relief": [
      { name: "Paracetamol 500mg", price: 1000, image: "./assert/paracetamol.jpg" },
      { name: "Ibuprofen 400mg", price: 1200, image: "./assert/med2.jpg" },
      { name: "Diclofenac 50mg", price: 1500, image: "./assert/med3.jpg" },
      { name: "Tramadol 50mg", price: 1800, image: "./assert/med4.jpg" },
      { name: "Naproxen 250mg", price: 1400, image: "./assert/med5.jpg" }
    ],
    "Antibiotics": [
      { name: "Amoxicillin 250mg", price: 2000, image: "./assert/med6.jpg" },
      { name: "Azithromycin 500mg", price: 2500, image: "./assert/med7.jpg" },
      { name: "Ciprofloxacin 500mg", price: 2200, image: "./assert/med8.jpg" },
      { name: "Doxycycline 100mg", price: 2100, image: "./assert/med9.jpg" },
      { name: "Metronidazole 400mg", price: 1700, image: "./assert/med10.jpg" }
    ],
    "Cough & Cold": [
      { name: "Cough Syrup", price: 1500, image: "./assert/med11.jpg" },
      { name: "Actifed Syrup", price: 1700, image: "./assert/med12.jpg" },
      { name: "Piriton Tablets", price: 1200, image: "./assert/med13.jpg" },
      { name: "Strepsils Lozenges", price: 800, image: "./assert/med14.jpg" },
      { name: "Ventolin Inhaler", price: 3500, image: "./assert/med15.jpg" }
    ],
    "Allergy": [
      { name: "Cetirizine 10mg", price: 1200, image: "./assert/med16.jpg" },
      { name: "Loratadine 10mg", price: 1300, image: "./assert/med17.jpg" },
      { name: "Chlorpheniramine 4mg", price: 1000, image: "./assert/med18.jpg" },
      { name: "Hydroxyzine 25mg", price: 1500, image: "./assert/med19.jpg" },
      { name: "Prednisolone 5mg", price: 1100, image: "./assert/med20.jpg" }
    ],
    "Antimalarials": [
      { name: "ALU Tablets", price: 2000, image: "./assert/med21.jpg" },
      { name: "Quinine Sulphate", price: 1800, image: "./assert/med22.jpg" },
      { name: "Fansidar", price: 1600, image: "./assert/med23.jpg" },
      { name: "Coartem", price: 2100, image: "./assert/med24.jpg" },
      { name: "Artemether Injection", price: 3000, image: "./assert/med25.jpg" }
    ],
    "Vitamins & Supplements": [
      { name: "Vitamin C 500mg", price: 800, image: "./assert/med26.jpg" },
      { name: "Multivitamin Syrup", price: 2500, image: "./assert/med27.jpg" },
      { name: "Zinc Tablets", price: 900, image: "./assert/med28.jpg" },
      { name: "Iron + Folic Acid", price: 1000, image: "./assert/med29.jpg" },
      { name: "Vitamin B Complex", price: 1500, image: "./assert/med30.jpg" }
    ],
    "Digestive Health": [
      { name: "ORS Sachets", price: 500, image: "./assert/med31.jpg" },
      { name: "Omeprazole 20mg", price: 1000, image: "./assert/med32.jpg" },
      { name: "Antacid Tablets", price: 800, image: "./assert/med33.jpg" },
      { name: "Loperamide 2mg", price: 1000, image: "./assert/med34.jpg" },
      { name: "Domperidone", price: 1300, image: "./assert/med35.jpg" }
    ],
    "Skin Care & Creams": [
      { name: "Clotrimazole Cream", price: 1300, image: "./assert/med36.jpg" },
      { name: "Fucidin Cream", price: 2000, image: "./assert/med37.jpg" },
      { name: "Betamethasone Cream", price: 1800, image: "./assert/med38.jpg" }
    ],
    "Hypertension & Heart": [
      { name: "Amlodipine 5mg", price: 1200, image: "./assert/med39.jpg" },
      { name: "Nifedipine 20mg", price: 1300, image: "./assert/med40.jpg" },
      { name: "Enalapril 10mg", price: 1400, image: "./assert/med41.jpg" }
    ],
    "Diabetes Care": [
      { name: "Metformin 500mg", price: 1500, image: "./assert/med42.jpg" },
      { name: "Glibenclamide 5mg", price: 1200, image: "./assert/med43.jpg" },
      { name: "Insulin Injection", price: 4000, image: "./assert/med44.jpg" }
    ],
    "Eye Medications": [
      { name: "Chloramphenicol Drops", price: 1200, image: "./assert/med45.jpg" },
      { name: "Tetracycline Ointment", price: 1000, image: "./assert/med46.jpg" }
    ],
    "Ear Medications": [
      { name: "Ear Drops", price: 1100, image: "./assert/med47.jpg" },
      { name: "Ear Wax Removal Kit", price: 1500, image: "./assert/med48.jpg" }
    ],
    "Family Planning": [
      { name: "Depo-Provera", price: 2000, image: "./assert/med49.jpg" },
      { name: "Microgynon Pills", price: 1800, image: "./assert/med50.jpg" },
      { name: "Postinor-2", price: 2500, image: "./assert/med51.jpg" }
    ],
    "Pregnancy & Baby": [
      { name: "Pregnacare Tablets", price: 3000, image: "./assert/med52.jpg" },
      { name: "Gripe Water", price: 1500, image: "./assert/med53.jpg" },
      { name: "Baby Cough Syrup", price: 2000, image: "./assert/med54.jpg" }
    ],
    "First Aid": [
      { name: "Cotton Wool", price: 800, image: "./assert/med55.jpg" },
      { name: "Surgical Gloves", price: 1500, image: "./assert/med56.jpg" },
      { name: "Hydrogen Peroxide", price: 1000, image: "./assert/med57.jpg" }
    ],
    "Antifungals": [
      { name: "Clotrimazole Cream", price: 1300, image: "./assert/med58.jpg" },
      { name: "Ketoconazole Shampoo", price: 1800, image: "./assert/med59.jpg" }
    ],
    "Antivirals": [
      { name: "Acyclovir", price: 2200, image: "./assert/med60.jpg" },
      { name: "Valacyclovir", price: 2500, image: "./assert/med61.jpg" }
    ],
    "Antiseptics": [
      { name: "Chlorhexidine", price: 1500, image: "./assert/med62.jpg" },
      { name: "Iodine Solution", price: 1700, image: "./assert/med63.jpg" }
    ],
    "Oral Care": [
      { name: "Toothpaste", price: 800, image: "./assert/med64.jpg" },
      { name: "Mouthwash", price: 1200, image: "./assert/med65.jpg" }
    ],
    "Respiratory": [
      { name: "Ventolin Inhaler", price: 3500, image: "./assert/med66.jpg" },
      { name: "Beclomethasone Spray", price: 4000, image: "./assert/med67.jpg" }
    ],
    "Neurological": [
      { name: "Gabapentin", price: 1800, image: "./assert/med68.jpg" },
      { name: "Carbamazepine", price: 2000, image: "./assert/med69.jpg" }
    ],
    "Mental Health": [
      { name: "Fluoxetine", price: 1500, image: "./assert/med70.jpg" },
      { name: "Sertraline", price: 1600, image: "./assert/med71.jpg" }
    ],
    "Cardiac Care": [
      { name: "Aspirin", price: 1100, image: "./assert/med72.jpg" },
      { name: "Atorvastatin", price: 1400, image: "./assert/med73.jpg" }
    ],
    "Cancer Support": [
      { name: "Tamoxifen", price: 3000, image: "./assert/med74.jpg" },
      { name: "Methotrexate", price: 3500, image: "./assert/med75.jpg" }
    ],
    "Hormones": [
      { name: "Thyroxine", price: 1300, image: "./assert/med76.jpg" },
      { name: "Testosterone", price: 1500, image: "./assert/med77.jpg" }
    ],
    "Thyroid": [
      { name: "Levothyroxine", price: 1200, image: "./assert/med78.jpg" },
      { name: "Liothyronine", price: 1400, image: "./assert/med79.jpg" }
    ],
    "Urology": [
      { name: "Tamsulosin", price: 1700, image: "./assert/med80.jpg" },
      { name: "Finasteride", price: 1600, image: "./assert/med81.jpg" }
    ],
    "Nephrology": [
      { name: "Furosemide", price: 1500, image: "./assert/med82.jpg" },
      { name: "Spironolactone", price: 1400, image: "./assert/med83.jpg" }
    ],
    "Hematology": [
      { name: "Iron Tablets", price: 1000, image: "./assert/med84.jpg" },
      { name: "Vitamin B12 Injection", price: 2000, image: "./assert/med85.jpg" }
    ],
    "Gastroenterology": [
      { name: "Omeprazole", price: 1100, image: "./assert/med86.jpg" },
      { name: "Ranitidine", price: 1200, image: "./assert/med87.jpg" }
    ],
    "Bone & Joint": [
      { name: "Calcium Tablets", price: 900, image: "./assert/med88.jpg" },
      { name: "Glucosamine", price: 1300, image: "./assert/med89.jpg" }
    ],
    "Pain Neuropathic": [
      { name: "Pregabalin", price: 2000, image: "./assert/med90.jpg" },
      { name: "Duloxetine", price: 2200, image: "./assert/med91.jpg" }
    ],
    "Immunology": [
      { name: "Immunoglobulin", price: 3500, image: "./assert/med92.jpg" },
      { name: "Interferon", price: 4000, image: "./assert/med93.jpg" }
    ],
    "Geriatrics": [
      { name: "Donepezil", price: 1800, image: "./assert/med94.jpg" },
      { name: "Memantine", price: 1900, image: "./assert/med95.jpg" }
    ],
    "Pediatrics": [
      { name: "Pediatric Multivitamin", price: 1200, image: "./assert/med96.jpg" },
      { name: "Infant Paracetamol", price: 1000, image: "./assert/med97.jpg" }
    ],
    "Ear Wax Removal": [
      { name: "Ear Wax Drops", price: 1300, image: "./assert/med98.jpg" },
      { name: "Ear Wax Curette", price: 1500, image: "./assert/med99.jpg" }
    ],
    "Wound Care": [
      { name: "Antiseptic Cream", price: 1200, image: "./assert/med100.jpg" },
      { name: "Bandages", price: 800, image: "./assert/med101.jpg" }
    ],
    "Sleep Aid": [
      { name: "Melatonin", price: 1500, image: "./assert/med102.jpg" },
      { name: "Diphenhydramine", price: 1400, image: "./assert/med103.jpg" }
    ],
    "Weight Loss": [
      { name: "Orlistat", price: 2200, image: "./assert/med104.jpg" },
      { name: "Garcinia Cambogia", price: 2100, image: "./assert/med105.jpg" }
    ],
    "Smoking Cessation": [
      { name: "Nicotine Gum", price: 1800, image: "./assert/med106.jpg" },
      { name: "Bupropion", price: 2000, image: "./assert/med107.jpg" }
    ],
    "Travel Medicine": [
      { name: "Anti-Malaria Tablets", price: 2000, image: "./assert/med108.jpg" },
      { name: "Traveler's Diarrhea Medicine", price: 1500, image: "./assert/med109.jpg" }
    ],
    "Eye Care Accessories": [
      { name: "Reading Glasses", price: 5000, image: "./assert/med110.jpg" },
      { name: "Contact Lens Solution", price: 2500, image: "./assert/med111.jpg" }
    ],
    "Masks & PPE": [
      { name: "Surgical Masks", price: 300, image: "./assert/med112.jpg" },
      { name: "N95 Masks", price: 1500, image: "./assert/med113.jpg" }
    ],
    "Hydration Therapy": [
      { name: "IV Fluids", price: 3500, image: "./assert/med114.jpg" },
      { name: "Oral Rehydration Salts", price: 1000, image: "./assert/med115.jpg" }
    ],
    "Electrolytes": [
      { name: "Potassium Tablets", price: 1200, image: "./assert/med116.jpg" },
      { name: "Sodium Chloride IV", price: 1300, image: "./assert/med117.jpg" }
    ],
    "Sports Recovery": [
      { name: "Protein Powder", price: 4000, image: "./assert/med118.jpg" },
      { name: "Electrolyte Drink", price: 1500, image: "./assert/med119.jpg" }
    ],
    "Anti-inflammatory": [
      { name: "Prednisone", price: 2000, image: "./assert/med120.jpg" },
      { name: "Celecoxib", price: 2200, image: "./assert/med121.jpg" }
    ],
    "Cold Sores": [
      { name: "Acyclovir Cream", price: 1500, image: "./assert/med122.jpg" },
      { name: "Docosanol", price: 1600, image: "./assert/med123.jpg" }
    ],
    "Oral Thrush": [
      { name: "Nystatin", price: 1400, image: "./assert/med124.jpg" },
      { name: "Miconazole", price: 1500, image: "./assert/med125.jpg" }
    ]
  };

  const products = map[category] || [];

  return products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>Tsh ${p.price}</p>
        <button class="add-to-cart" onclick='addToCart("${p.name}", ${p.price}, "${p.image}")'>Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function loadAboutSection() {
  mainContent.innerHTML = 
  `
    <section class="about-section">
      <div class="about-header">
        <h1>About Mount Kibo Pharmacy</h1>
      </div>
      <div class="about-grid">
        <div class="about-card">
          <h2>Our Vision</h2>
          <p>Making essential medicines accessible to everyone.</p>
        </div>
        <div class="about-card">
          <div class="about-icon">
              <i class="fas fa-history"></i>
          </div>
          <h2>Our Story</h2>
          <p>Founded in 2012, Mount Kibo Pharmacy began as a small retail pharmacy in Kilimanjaro. Through our commitment to quality and customer service, we've grown to become a trusted provider across Tanzania.</p>
          <img src="./assert/about-store.jpg" alt="Our Pharmacy Store" class="about-image">
        </div>
        <div class="about-card">
          <div class="about-icon">
              <i class="fas fa-bullseye"></i>
          </div>
          <h2>Our Mission</h2>
          <p>To provide accessible, affordable and genuine healthcare products to all Tanzanians through:</p>
          <ul class="mission-list">
              <li><i class="fas fa-check"></i> Quality medicines</li>
              <li><i class="fas fa-check"></i> Professional advice</li>
              <li><i class="fas fa-check"></i> Reliable delivery</li>
          </ul>
        </div>
        <div class="about-card">
          <div class="about-icon">
              <i class="fas fa-medal"></i>
          </div>
          <h2>Why Choose Us?</h2>
          <div class="feature">
              <i class="fas fa-certificate"></i>
              <div>
                  <h3>Certified Products</h3>
                  <p>All medicines are TMDA approved</p>
              </div>
          </div>
          <div class="feature">
              <i class="fas fa-tags"></i>
              <div>
                  <h3>Competitive Pricing</h3>
                  <p>Best wholesale and retail prices</p>
              </div>
          </div>
        </div>  
      </div>

      <!-- Button ya kurudi home -->
      <div class="about-home-button">
        <button onclick="loadHomeSection()" class="btn-return-home">
          <i class="fas fa-arrow-left"></i> Return to Home
        </button>
      </div>
    </section>
  `;
}


function loadContactSection() {
  mainContent.innerHTML = `
    <section class="contact-section">
      <div class="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach us through any of the following methods.</p>
      </div>

      <div class="contact-grid">
        <!-- Contact Details -->
        <div class="contact-card">
          <h2>Phone</h2>
          <div class="contact-method">
            <i class="fas fa-phone"></i>
            <span>+255 677 445 565</span>
          </div>

          <h2>Email</h2>
          <div class="contact-method">
            <i class="fas fa-envelope"></i>
            <span>info@kibopharmacy.com</span>
          </div>

          <h2>Location</h2>
          <div class="contact-method">
            <i class="fas fa-map-marker-alt"></i>
            <span>Kilimanjaro, Tanzania</span>
          </div>

          <h2>Opening Hours</h2>
          <div class="contact-method">
            <i class="fas fa-clock"></i>
            <span>Mon - Sat: 8:00 AM – 9:00 PM</span>
          </div>

          <!-- Social media links -->
          <div class="social-links">
            <a href="https://facebook.com/mountkibopharmacy" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com/mountkibopharmacy" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/mountkibopharma" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://wa.me/255677445565" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-card">
          <h2>Send Us a Message</h2>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your full name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your email" required>
            </div>
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>
            </div>
            <button type="submit" class="btn-send">Send Message</button>
          </form>
        </div>

        <!-- Google Map Placeholder -->
<div class="contact-card">
  <h2>Find Us on Map <br> MOUNT KIBO PHARMACY 2012</h2>
  <div class="map-placeholder">
    <iframe 
      src="https://www.google.com/maps?q=-3.351992,37.339094&hl=en&z=17&output=embed" 
      width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
      title="Mount Kibo Pharmacy Location"></iframe>
  </div>
</div>
    </section>
  `;

  // Handle form submission with EmailJS
  setTimeout(() => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm('your_service_id', 'your_template_id', this)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        }, (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        });
    });
  }, 100); // Wait for DOM elements to be ready
}

// =================== Event Listeners ===================
homeBtn.onclick = loadHomeSection;
medicineBtn.onclick = loadMedicineSection;
aboutBtn.onclick = loadAboutSection;
contactBtn.onclick = loadContactSection;

// =================== Cart Functionality ===================

let cart = [];
const MIN_ORDER_QTY = 1;

// ======= Add item to cart =======
function addToCart(name, price, image) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  updateCart();
}

// ======= Change quantity of an item =======
function changeQuantity(name, newQty) {
  if (newQty < MIN_ORDER_QTY) {
    if (newQty <= 0) {
      // Remove item if quantity <= 0
      cart = cart.filter(i => i.name !== name);
      updateCart();
      return;
    }
    alert(`Minimum order quantity is ${MIN_ORDER_QTY}`);
    return;
  }
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity = newQty;
    updateCart();
  }
}

// ======= Update cart display =======
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    count += item.quantity;

const itemHTML = `
  <div class="cart-item">
    <img src="${item.image}" alt="${item.name}" />
    <div class="cart-item-info">
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-price">Tsh ${item.price}</div>
      <div class="cart-item-quantity">
        <button onclick="event.stopPropagation(); changeQuantity('${item.name}', ${item.quantity - 1})">-</button>
        <input type="number" min="${MIN_ORDER_QTY}" value="${item.quantity}" onchange="event.stopPropagation(); changeQuantity('${item.name}', parseInt(this.value) || ${MIN_ORDER_QTY})" />
        <button onclick="event.stopPropagation(); changeQuantity('${item.name}', ${item.quantity + 1})">+</button>
      </div>
      <div class="cart-item-subtotal">Subtotal: Tsh ${subtotal}</div>
    </div>
  </div>
`;
    cartItemsContainer.innerHTML += itemHTML;
  });

  cartTotal.textContent = `TZS ${total}`;
  cartCount.textContent = count > 0 ? count : '';

  // Make sure cart stays open when updating quantity
  document.getElementById('cartDropdown').style.display = 'block';
}

// ======= Toggle cart dropdown =======
cartBtn.addEventListener('click', () => {
  cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

// ======= Close cart on clicking ✖ button using event delegation =======
document.addEventListener('click', (event) => {
  if (event.target && event.target.id === 'closeCartBtn') {
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.style.display = 'none';
  }
});

// ======= Clear cart =======
function clearCart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    updateCart();
  }
}

// =================== Search ===================
document.addEventListener('DOMContentLoaded', () => {
  const categoryBtn = document.getElementById('categoryBtn');
  const categoryDropdown = document.getElementById('categoryDropdown');
  const selectedCategorySpan = document.getElementById('selectedCategory');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchResults = document.getElementById('searchResults');

  // Sample data
  const searchIndex = [
    { name: "Paracetamol 500mg", category: "Pain Relief" },
    { name: "Ibuprofen 400mg", category: "Pain Relief" },
    { name: "Amoxicillin 250mg", category: "Antibiotics" },
    { name: "Ciprofloxacin 500mg", category: "Antibiotics" },
    { name: "Cough Syrup", category: "Cough & Cold" },
    { name: "Metformin 500mg", category: "Diabetes Care" },
    { name: "Zinc Tablets", category: "Vitamins & Supplements" },
    { name: "Ventolin Inhaler", category: "Respiratory" },
    { name: "Pregnacare Tablets", category: "Pregnancy & Baby" },
    { name: "Vitamin C 500mg", category: "Vitamins & Supplements" }
    // ongeza zingine kama unataka
  ];

  // Toggle dropdown visibility
  categoryBtn.addEventListener('click', () => {
    categoryDropdown.classList.toggle('show');
  });

  // Handle category selection
  categoryDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-category');
      selectedCategorySpan.textContent = item.textContent;
      selectedCategorySpan.setAttribute('data-category', cat);
      categoryDropdown.classList.remove('show');
      searchInput.focus();
      clearSearchResults();
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!categoryBtn.contains(e.target)) {
      categoryDropdown.classList.remove('show');
    }
  });

  // Clear search results
  function clearSearchResults() {
    searchResults.innerHTML = '';
    searchResults.style.display = 'none';
  }

  // Perform search
  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      clearSearchResults();
      return;
    }

    const selectedCategory = selectedCategorySpan.getAttribute('data-category') || "all";

    const matched = searchIndex.filter(item => {
      const matchesQuery = item.name.toLowerCase().includes(query);
      const matchesCategory = (selectedCategory === "all") || (item.category === selectedCategory);
      return matchesQuery && matchesCategory;
    });

    if (matched.length === 0) {
      searchResults.innerHTML = `<div class="dropdown-item">No results found</div>`;
    } else {
      searchResults.innerHTML = matched.map(item => `
        <div class="dropdown-item" data-category="${item.category}" data-name="${item.name}">
          <strong>${item.name}</strong><br>
          <small style="color: gray;">${item.category}</small>
        </div>
      `).join('');
    }

    searchResults.style.display = 'block';
  }

  // On click search button
  searchBtn.addEventListener('click', () => {
    handleSearch();
  });

  // On enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  });

  // When user clicks on a result
  searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown-item');
    if (!item || item.textContent === "No results found") return;

    const medicineName = item.getAttribute('data-name');
    const category = item.getAttribute('data-category');

    searchInput.value = medicineName;
    clearSearchResults();

    if (typeof loadMedicineCategory === "function") {
      loadMedicineCategory(category);
    }

    setTimeout(() => {
      const cards = document.querySelectorAll(".product-card h3");
      cards.forEach(card => {
        if (card.textContent.toLowerCase() === medicineName.toLowerCase()) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.style.backgroundColor = "#ffffcc";
          setTimeout(() => card.style.backgroundColor = "", 2000);
        }
      });
    }, 500);
  });
});

// =================== Modal Logic ===================
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

document.getElementById('signInBtn').onclick = () => {
  document.getElementById('signInModal').style.display = 'block';
};

document.getElementById('registerLink').onclick = (e) => {
  e.preventDefault();
  closeModal('signInModal');
  document.getElementById('registerModal').style.display = 'block';
};

document.getElementById('loginLink').onclick = (e) => {
  e.preventDefault();
  closeModal('registerModal');
  document.getElementById('signInModal').style.display = 'block';
};

// **Rudisha hii ili "Hello, Sign in" iwe clickable**
document.querySelector(".greeting-text").addEventListener("click", () => {
  document.getElementById("signInModal").style.display = "block";
});

// =================== Language Translation ===================
const translations = {
  en: { home: "Home", medicine: "Find Medicine", about: "About Us", contact: "Contact", hello: "Hello, Sign in", accountLists: "Account & Lists", cart: "Cart", total: "Total:", checkout: "Checkout", signInTitle: "Sign In to Your Account", signInBtn: "Sign In", signUpTitle: "Create New Account", registerBtn: "Register", emailPhone: "Email or Phone", password: "Password", noAccount: "Don't have an account?", haveAccount: "Already have an account?", registerHere: "Register here", signInHere: "Sign in here", language: "Language:" },
  sw: { home: "Nyumbani", medicine: "Tafuta Dawa", about: "Kuhusu Sisi", contact: "Mawasiliano", hello: "Habari, Ingia", accountLists: "Akaunti & Orodha", cart: "Kikapu", total: "Jumla:", checkout: "Lipa", signInTitle: "Ingia kwenye Akaunti Yako", signInBtn: "Ingia", signUpTitle: "Fungua Akaunti Mpya", registerBtn: "Sajili", emailPhone: "Barua pepe au Simu", password: "Nenosiri", noAccount: "Huna akaunti?", haveAccount: "Tayari una akaunti?", registerHere: "Sajili hapa", signInHere: "Ingia hapa", language: "Lugha:" }
};

const currentLanguageEl = document.getElementById("currentLanguage");
const languageDropdown = document.getElementById("languageDropdown");
const languageBtn = document.getElementById("languageBtn");
const mobileLanguageSelect = document.getElementById("mobileLanguageSelect");

const elementsToTranslate = {
  homeBtn, medicineBtn, aboutBtn, contactBtn,
  footerHomeBtn: document.getElementById("footerHomeBtn"),
  footerMedicineBtn: document.getElementById("footerMedicineBtn"),
  footerAboutBtn: document.getElementById("footerAboutBtn"),
  footerContactBtn: document.getElementById("footerContactBtn"),
  greetingText: document.querySelector(".greeting-text"),
  accountName: document.querySelector(".account-name"),
  cartText: document.querySelector(".cart-text"),
  cartTotalLabel: document.querySelector(".cart-total span:first-child"),
  cartCheckoutBtn: document.querySelector(".checkout-btn"),
  signInTitle: document.querySelector("#signInModal h2"),
  signInBtn: document.querySelector("#signInForm button[type='submit']"),
  registerTitle: document.querySelector("#registerModal h2"),
  registerBtn: document.querySelector("#registerForm button[type='submit']"),
  emailPhone: document.querySelector("label[for='email']"),
  password: document.querySelector("label[for='password']"),
  regName: document.querySelector("label[for='regName']"),
  regEmail: document.querySelector("label[for='regEmail']"),
  regPhone: document.querySelector("label[for='regPhone']"),
  regPassword: document.querySelector("label[for='regPassword']"),
  regConfirmPassword: document.querySelector("label[for='regConfirmPassword']"),
  registerLink: document.getElementById("registerLink"),
  loginLink: document.getElementById("loginLink"),
  mobileLangLabel: document.querySelector(".mobile-language-selector span")
};

function translatePage(lang) {
  const t = translations[lang];
  if (!t) return;
  elementsToTranslate.homeBtn.textContent = t.home;
  elementsToTranslate.medicineBtn.textContent = t.medicine;
  elementsToTranslate.aboutBtn.textContent = t.about;
  elementsToTranslate.contactBtn.textContent = t.contact;
  elementsToTranslate.footerHomeBtn.textContent = t.home;
  elementsToTranslate.footerMedicineBtn.textContent = t.medicine;
  elementsToTranslate.footerAboutBtn.textContent = t.about;
  elementsToTranslate.footerContactBtn.textContent = t.contact;
  elementsToTranslate.greetingText.textContent = t.hello;
  elementsToTranslate.accountName.textContent = t.accountLists;
  elementsToTranslate.cartText.textContent = t.cart;
  elementsToTranslate.cartTotalLabel.textContent = t.total;
  elementsToTranslate.cartCheckoutBtn.textContent = t.checkout;
  elementsToTranslate.signInTitle.textContent = t.signInTitle;
  elementsToTranslate.signInBtn.textContent = t.signInBtn;
  elementsToTranslate.registerTitle.textContent = t.signUpTitle;
  elementsToTranslate.registerBtn.textContent = t.registerBtn;
  elementsToTranslate.emailPhone.textContent = t.emailPhone;
  elementsToTranslate.password.textContent = t.password;
  elementsToTranslate.regName.textContent = "Full Name";
  elementsToTranslate.regEmail.textContent = t.emailPhone;
  elementsToTranslate.regPhone.textContent = "Phone Number";
  elementsToTranslate.regPassword.textContent = t.password;
  elementsToTranslate.regConfirmPassword.textContent = "Confirm Password";
  elementsToTranslate.registerLink.textContent = t.registerHere;
  elementsToTranslate.loginLink.textContent = t.signInHere;
  elementsToTranslate.mobileLangLabel.textContent = t.language;
  currentLanguageEl.textContent = lang.toUpperCase();
  mobileLanguageSelect.value = lang;
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  translatePage(lang);
}

languageBtn.addEventListener("click", () => {
  languageDropdown.style.display = languageDropdown.style.display === "block" ? "none" : "block";
});

languageDropdown.addEventListener("click", (e) => {
  const lang = e.target.closest(".dropdown-item")?.dataset.lang;
  if (lang) {
    setLanguage(lang);
    languageDropdown.style.display = "none";
  }
});

mobileLanguageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  setLanguage(lang);
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(0)'; // show menu
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-100%)'; // hide menu
});

// Optional: click outside mobile menu to close
window.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.style.transform = 'translateX(-100%)';
  }
});

// ===== Mobile Menu Navigation =====
const mobileHomeBtn = document.getElementById('mobileHomeBtn');
const mobileMedicineBtn = document.getElementById('mobileMedicineBtn');
const mobileAboutBtn = document.getElementById('mobileAboutBtn');
const mobileContactBtn = document.getElementById('mobileContactBtn');

mobileHomeBtn.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-100%)';
  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
});

mobileMedicineBtn.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-100%)';
  loadMedicineCategory(); // assuming you have this function
});

mobileAboutBtn.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-100%)';
  document.getElementById('aboutSection')?.scrollIntoView({ behavior: 'smooth' });
});

mobileContactBtn.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-100%)';
  document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
});

// ===== Footer Navigation (optional) =====
document.getElementById('footerHomeBtn').addEventListener('click', () => {
  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('footerMedicineBtn').addEventListener('click', loadMedicineCategory);
document.getElementById('footerAboutBtn').addEventListener('click', () => {
  document.getElementById('aboutSection')?.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('footerContactBtn').addEventListener('click', () => {
  document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
});

// =================== Initial Load ===================
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
  loadHomeSection();
});

