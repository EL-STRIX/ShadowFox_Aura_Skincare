/**
 * AURA Botanicals - Products Database
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
    image: "assets/aura-01.jpg",
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
    image: "assets/aura-02.jpg",
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
    image: "assets/aura-03.jpg",
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
    image: "assets/aura-04.jpg",
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
    image: "assets/aura-05.jpg",
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
    image: "assets/aura-06.jpg",
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
    image: "assets/aura-07.jpg",
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
    image: "assets/aura-08.jpg",
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
    badge: "Summer Pick"
  }
];
