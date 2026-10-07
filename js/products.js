/**
 * AURA Botanicals - Mock Products Database
 * E-Commerce Storefront - Frontend Internship (Intermediate Level)
 */

const PRODUCTS = [
  {
    id: "aura-01",
    name: "Bakuchiol & Niacinamide Radiance Serum",
    category: "serums",
    categoryLabel: "Treatment Serum",
    tag: "Best Seller",
    price: 46.00,
    rating: 4.9,
    reviewsCount: 128,
    shortDesc: "A gentle plant-based retinol alternative that smooths fine lines, refines texture, and boosts skin radiance.",
    fullDesc: "Formulated with 2% pure Ayurvedic Bakuchiol and 5% Niacinamide, this restorative serum gently promotes cellular turnover without the irritation or photosensitivity of traditional retinoids. Infused with soothing Centella Asiatica and Hyaluronic Acid to hydrate and calm sensitive skin.",
    sizes: ["30ml", "50ml"],
    selectedSize: "30ml",
    keyIngredients: [
      { name: "Bakuchiol (2%)", role: "Stimulates collagen production and smooths skin texture." },
      { name: "Niacinamide (5%)", role: "Minimizes pore appearance and reinforces moisture barrier." },
      { name: "Centella Asiatica", role: "Calms redness and accelerates skin healing." },
      { name: "Botanical Hyaluronic Acid", role: "Provides multi-depth hydration." }
    ],
    howToUse: "Apply 3-4 drops to cleansed face and neck morning and evening. Gently press into skin until absorbed before applying moisturizer.",
    skinType: "Suitable for all skin types, including sensitive and breakout-prone skin.",
    imageBg: "#EBE6DD",
    iconType: "serum",
    badge: "Best Seller"
  },
  {
    id: "aura-02",
    name: "Nourishing Rice & Oat Gentle Cleanser",
    category: "cleansers",
    categoryLabel: "Daily Cleanser",
    tag: "Gentle Clean",
    price: 28.00,
    rating: 4.8,
    reviewsCount: 94,
    shortDesc: "A pH-balanced milky gel cleanser that melts away impurities without stripping essential moisture.",
    fullDesc: "Crafted with fermented rice water and colloidal oatmeal, this non-foaming cleansing cream dissolves daily grime, sunscreen, and light makeup while preserving your skin's natural microbiome. Leaves skin soft, supple, and refreshed.",
    sizes: ["150ml", "250ml"],
    selectedSize: "150ml",
    keyIngredients: [
      { name: "Fermented Rice Water", role: "Brightens and nourishes with essential amino acids." },
      { name: "Colloidal Oatmeal", role: "Soothes irritation and reinforces the moisture barrier." },
      { name: "Sweet Almond Oil", role: "Gently dissolves oil-based impurities." }
    ],
    howToUse: "Massage 1-2 pumps onto dry or damp skin in circular motions. Rinse thoroughly with lukewarm water or wipe clean with a damp muslin cloth.",
    skinType: "Ideal for dry, sensitive, and balanced skin.",
    imageBg: "#F0ECE4",
    iconType: "cleanser",
    badge: "Award Winner"
  },
  {
    id: "aura-03",
    name: "Golden Squalane Barrier Recovery Oil",
    category: "oils",
    categoryLabel: "Face Oil",
    tag: "Staff Pick",
    price: 52.00,
    rating: 4.9,
    reviewsCount: 86,
    shortDesc: "100% plant-derived sugarcane squalane blended with organic sea buckthorn and jojoba oil.",
    fullDesc: "A weightless, fast-absorbing facial oil that locks in deep hydration and provides an instant dewy glow. High in essential fatty acids and antioxidants, it strengthens compromised barriers and protects against environmental stressors.",
    sizes: ["30ml"],
    selectedSize: "30ml",
    keyIngredients: [
      { name: "Olive & Sugarcane Squalane", role: "Mimics natural sebum for instant barrier lipid replenishment." },
      { name: "Organic Sea Buckthorn", role: "Packed with Omegas 3, 6, 7 & 9 for radiant vitality." },
      { name: "Golden Jojoba Seed Oil", role: "Balances natural oil production without clogging pores." }
    ],
    howToUse: "Warm 2-3 drops between your palms and gently press onto damp skin as the final step in your routine.",
    skinType: "Dehydrated, dull, mature, or compromised barrier skin.",
    imageBg: "#EDE6DA",
    iconType: "oil",
    badge: "New"
  },
  {
    id: "aura-04",
    name: "Ceramide & Matcha Deep Hydration Cream",
    category: "moisturizers",
    categoryLabel: "Moisturizer",
    tag: "Essential",
    price: 42.00,
    rating: 4.9,
    reviewsCount: 142,
    shortDesc: "A rich yet breathable barrier cream with 5 essential ceramides, ceremonial matcha, and shea butter.",
    fullDesc: "This restorative daily cream drenches skin in lasting hydration. Five bio-identical ceramides work synergistically with green tea antioxidants to soothe redness, prevent moisture loss, and defend against blue light and pollution.",
    sizes: ["50ml", "100ml"],
    selectedSize: "50ml",
    keyIngredients: [
      { name: "5-Ceramide Complex", role: "Repairs the lipid barrier and prevents trans-epidermal water loss." },
      { name: "Uji Ceremonial Matcha", role: "Neutralizes oxidative free radicals and calms inflammation." },
      { name: "Raw Shea Butter", role: "Provides deep emollient nourishment." }
    ],
    howToUse: "Smooth a pea-sized amount over face, neck, and décolletage after serums. Use morning and night.",
    skinType: "Dry, normal, combination, and sensitized skin.",
    imageBg: "#E8E3D8",
    iconType: "cream",
    badge: "Top Rated"
  },
  {
    id: "aura-05",
    name: "Wild Rosehip & Vitamin C Glow Elixir",
    category: "serums",
    categoryLabel: "Brightening Treatment",
    tag: "Radiance",
    price: 48.00,
    rating: 4.7,
    reviewsCount: 79,
    shortDesc: "Stabilized 10% Vitamin C (THD Ascorbate) with cold-pressed rosehip seed extract for luminous skin.",
    fullDesc: "Target dark spots, hyperpigmentation, and uneven tone with this gentle lipid-soluble Vitamin C formula. Blended with Chilean rosehip oil and coenzyme Q10 for radiant, firm, and bouncy skin.",
    sizes: ["30ml"],
    selectedSize: "30ml",
    keyIngredients: [
      { name: "THD Ascorbate (10%)", role: "Non-irritating, potent Vitamin C that penetrates deep lipid layers." },
      { name: "Cold-Pressed Rosehip", role: "Rich in natural trans-retinoic acid for dark spot fading." },
      { name: "CoQ10 & Vitamin E", role: "Multi-spectrum antioxidant protection." }
    ],
    howToUse: "Apply 3 drops in the morning prior to moisturizer and sunscreen for all-day environmental defense.",
    skinType: "Dull, uneven skin tone, and hyperpigmentation.",
    imageBg: "#EFE8DF",
    iconType: "serum",
    badge: "Popular"
  },
  {
    id: "aura-06",
    name: "Botanical Chamomile Calming Mist Toner",
    category: "cleansers",
    categoryLabel: "Hydrating Mist",
    tag: "Refresh",
    price: 26.00,
    rating: 4.8,
    reviewsCount: 65,
    shortDesc: "An ultra-fine hydrating mist distilled from Roman chamomile, cucumber fruit, and aloe vera juice.",
    fullDesc: "Instantly relieve tight, stressed skin throughout the day. This micro-fine mist rebalances your skin's pH post-cleansing and preps the epidermis for maximum serum absorption.",
    sizes: ["120ml"],
    selectedSize: "120ml",
    keyIngredients: [
      { name: "Roman Chamomile Hydrosol", role: "Soothes reactive, irritated, and flushed skin." },
      { name: "Cucumber Fruit Extract", role: "Cooling astringent that reduces puffiness." },
      { name: "Organic Aloe Leaf Juice", role: "Delivers weightless mineral hydration." }
    ],
    howToUse: "Hold 8 inches from face and mist generously after cleansing, before makeup, or anytime your skin feels dry.",
    skinType: "All skin types, especially dehydrated and reactive skin.",
    imageBg: "#EDE9E1",
    iconType: "mist",
    badge: "Daily Ritual"
  },
  {
    id: "aura-07",
    name: "Peptide & Blue Tansy Overnight Repair Balm",
    category: "moisturizers",
    categoryLabel: "Night Treatment",
    tag: "Recovery",
    price: 58.00,
    rating: 5.0,
    reviewsCount: 52,
    shortDesc: "A concentrated sleeping balm with copper tripeptides and calming Moroccan blue tansy oil.",
    fullDesc: "Transform dull, tired skin while you rest. The soothing blue botanical balm melts from a solid into a silk-like veil upon contact with skin, delivering targeted peptides and lipid moisture to renew skin firmness.",
    sizes: ["50ml"],
    selectedSize: "50ml",
    keyIngredients: [
      { name: "Copper Tripeptide-1", role: "Supports skin elasticity and natural collagen synthesis." },
      { name: "Moroccan Blue Tansy", role: "High in chamazulene to rapidly cool and soothe inflammation." },
      { name: "Cupuaçu Seed Butter", role: "Super-hydrator that retains 400% of its weight in water." }
    ],
    howToUse: "Warm a dime-sized amount in clean fingertips and massage gently over face as your final evening step.",
    skinType: "Stressed, mature, very dry, or tired skin.",
    imageBg: "#E3E7E8",
    iconType: "cream",
    badge: "Luxury Care"
  },
  {
    id: "aura-08",
    name: "Mineral Zinc Daily Sheer Sun Shield SPF 50",
    category: "moisturizers",
    categoryLabel: "Daily Sun Protection",
    tag: "Protection",
    price: 34.00,
    rating: 4.9,
    reviewsCount: 110,
    shortDesc: "100% Non-nano zinc oxide sunscreen with a velvet matte, non-greasy finish and zero white cast.",
    fullDesc: "Broad-spectrum UVA/UVB protection powered by clean mineral zinc and botanical antioxidants. Lightly tinted with mineral pigments to seamlessly melt into all skin tones without chalkiness or shine.",
    sizes: ["50ml", "100ml"],
    selectedSize: "50ml",
    keyIngredients: [
      { name: "Non-Nano Zinc Oxide (18%)", role: "Safe physical barrier against damaging UVA and UVB rays." },
      { name: "Niacinamide", role: "Controls excess oil and balances sebum throughout the day." },
      { name: "Green Tea Extract", role: "Shields against free radicals and environmental smog." }
    ],
    howToUse: "Apply generously and evenly 15 minutes before sun exposure. Reapply at least every 2 hours.",
    skinType: "All skin types and tones. Non-comedogenic.",
    imageBg: "#ECE7DE",
    iconType: "sunscreen",
    badge: "Summer Pick"
  }
];

// Helper to generate clean, realistic SVG product graphics matching the brand aesthetic
function getProductSVG(iconType, bg = "#EDE7DE", accent = "#C86B4A") {
  if (iconType === "serum" || iconType === "oil") {
    return `
      <svg viewBox="0 0 200 240" class="product-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="240" fill="${bg}" rx="6"/>
        <!-- Dropper Pipette Cap -->
        <rect x="94" y="26" width="12" height="18" rx="2" fill="#20252B"/>
        <rect x="88" y="44" width="24" height="6" rx="1" fill="#DDD9D0"/>
        <path d="M84 50 L116 50 L112 70 L88 70 Z" fill="#20252B"/>
        <rect x="82" y="70" width="36" height="5" rx="1" fill="#DDD9D0"/>
        <!-- Glass Dropper Bottle Body -->
        <path d="M68 75 Q68 85 72 90 L72 196 Q72 205 82 205 L118 205 Q128 205 128 196 L128 90 Q132 85 132 75 Z" fill="${accent}" opacity="0.85"/>
        <!-- Aesthetic Label -->
        <rect x="76" y="106" width="48" height="68" rx="2" fill="#FAF8F5" stroke="#DDD9D0" stroke-width="1"/>
        <line x1="84" y1="120" x2="116" y2="120" stroke="#20252B" stroke-width="2" stroke-linecap="round"/>
        <line x1="88" y1="128" x2="112" y2="128" stroke="#667078" stroke-width="1" stroke-linecap="round"/>
        <line x1="86" y1="140" x2="114" y2="140" stroke="${accent}" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="90" y1="154" x2="110" y2="154" stroke="#667078" stroke-width="1" stroke-linecap="round"/>
      </svg>
    `;
  } else if (iconType === "cleanser" || iconType === "mist") {
    return `
      <svg viewBox="0 0 200 240" class="product-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="240" fill="${bg}" rx="6"/>
        <!-- Dispenser / Pump Head -->
        <path d="M96 22 L116 22 Q120 22 120 28 L120 34 L114 34 L114 44 L96 44 Z" fill="#20252B"/>
        <rect x="94" y="44" width="12" height="10" fill="#DDD9D0"/>
        <rect x="88" y="54" width="24" height="8" rx="1" fill="#20252B"/>
        <!-- Tall Pump Bottle Body -->
        <path d="M72 62 Q72 70 76 76 L76 195 Q76 204 84 204 L116 204 Q124 204 124 195 L124 76 Q128 70 128 62 Z" fill="#FAF8F5" stroke="#DDD9D0" stroke-width="1.5"/>
        <!-- Label Area -->
        <rect x="78" y="92" width="44" height="82" fill="${accent}" opacity="0.1" rx="2"/>
        <line x1="86" y1="112" x2="114" y2="112" stroke="#20252B" stroke-width="2" stroke-linecap="round"/>
        <line x1="88" y1="122" x2="112" y2="122" stroke="#667078" stroke-width="1" stroke-linecap="round"/>
        <circle cx="100" cy="142" r="5" fill="${accent}"/>
        <line x1="86" y1="158" x2="114" y2="158" stroke="#20252B" stroke-width="1" stroke-linecap="round"/>
      </svg>
    `;
  } else {
    // Cream jar / balm / sunscreen
    return `
      <svg viewBox="0 0 200 240" class="product-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="240" fill="${bg}" rx="6"/>
        <!-- Jar Lid -->
        <rect x="64" y="85" width="72" height="18" rx="2" fill="#20252B"/>
        <!-- Glass Jar Base -->
        <path d="M60 103 L140 103 L136 182 Q136 192 126 192 L74 192 Q64 192 64 182 Z" fill="#FAF8F5" stroke="#DDD9D0" stroke-width="1.5"/>
        <!-- Label -->
        <rect x="68" y="118" width="64" height="52" fill="${bg}" rx="2" stroke="#DDD9D0" stroke-width="1"/>
        <line x1="78" y1="134" x2="122" y2="134" stroke="#20252B" stroke-width="2" stroke-linecap="round"/>
        <line x1="82" y1="144" x2="118" y2="144" stroke="#667078" stroke-width="1" stroke-linecap="round"/>
        <line x1="88" y1="154" x2="112" y2="154" stroke="${accent}" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `;
  }
}
