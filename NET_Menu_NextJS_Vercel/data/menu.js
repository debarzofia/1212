/* NEXT.JS: YOUR PHOTOS GO IN public/images/ AND USE /images/filename.jpg */
  /* =====================================================================
      ================================================================
      📸  ADD YOUR RESTAURANT FOOD IMAGES HERE — EASY PHOTO GUIDE
      ================================================================

      STEP 1: In VS Code press Ctrl + F and search: PASTE FOOD IMAGE HERE
      STEP 2: Find the name of the dish you want to add a photo for.
      STEP 3: Change ONLY the empty value after img: to your image path.

      BEFORE (no image):   img: "",
      AFTER  (with image): img: "/images/hummus.jpg",

      Your photo must be in a folder called "images" located next to this
      HTML file (for the example above). You may also paste an HTTPS image
      URL, such as img: "https://example.com/my-food.jpg".

      ✅ ADD A PHOTO ONLY ONCE — the same image automatically appears in:
         1. The food card in the menu
         2. The food detail popup when a customer taps the dish
         3. The customer's order basket

      IMPORTANT:
      - Keep the quotes and comma:  img: "YOUR_IMAGE_HERE",
      - Keep the image file extension (.jpg / .png / .webp).
      - A blank img: "" is allowed; the food remains on the menu.
      - You cannot paste a picture from the clipboard into these quotes.
        Paste its URL path like /images/hummus.jpg (or an https:// URL).
      - Suggested file size: about 1000px wide and ideally under 300KB.
      - Every food photo slot is marked directly above its dish below.

      To add a new dish, copy a whole dish object including its img, p,
      n and d fields into that category and change its values.
      p = price in Iraqi dinar | en = English | ku = Kurdish | ar = Arabic
      ===================================================================== */

export const MENU = [

    /* ---------------- STARTERS ---------------- */
    { id: "starters",
      name: { en: "Starters", ku: "پێشخواردن", ar: "المقبلات" },
      items: [
        /* ************ PASTE FOOD IMAGE HERE — HUMMUS ************
           Change ONLY img: "" to img: "/images/hummus.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 4000,
          n: { en: "Hummus", ku: "حومس", ar: "حمص" },
          d: { en: "Chickpea purée with tahini, olive oil and lemon.",
               ku: "نۆکی هاڕاو لەگەڵ تەحینە، زەیتی زەیتوون و لیمۆ.",
               ar: "حمص مهروس مع الطحينة وزيت الزيتون والليمون." } },
        /* ************ PASTE FOOD IMAGE HERE — LENTIL SOUP ************
           Change ONLY img: "" to img: "/images/lentil.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 3500,
          n: { en: "Lentil soup", ku: "شۆربای نیسک", ar: "شوربة العدس" },
          d: { en: "Warm red lentil soup with lemon and toasted bread.",
               ku: "شۆربایەکی گەرمی نیسک لەگەڵ لیمۆ و نانی برژاو.",
               ar: "شوربة عدس دافئة تقدم مع الليمون والخبز المحمص." } },
        /* ************ PASTE FOOD IMAGE HERE — TABBOULEH ************
           Change ONLY img: "" to img: "/images/tabbouleh.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 4500,
          n: { en: "Tabbouleh", ku: "تەبولە", ar: "تبولة" },
          d: { en: "Parsley, tomato and fine bulgur with lemon and olive oil.",
               ku: "جەعدە، تەماتە و بلغور لەگەڵ لیمۆ و زەیت.",
               ar: "بقدونس وطماطم وبرغل ناعم مع الليمون وزيت الزيتون." } },
        /* ************ PASTE FOOD IMAGE HERE — KIBBEH ************
           Change ONLY img: "" to img: "/images/kibbeh.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 6000,
          n: { en: "Kibbeh", ku: "کوبە", ar: "كبة" },
          d: { en: "Fried bulgur shells filled with spiced minced lamb.",
               ku: "کوبەی سوورکراوەی پڕکراو بە گۆشت و بەهارات.",
               ar: "كبة مقلية محشوة بلحم مفروم متبل." } },
        /* >>> ADD NEW DISHES HERE (STARTERS): paste a copied dish block on the next line <<< */
      ]},

    /* ---------------- GRILLS ---------------- */
    { id: "grills",
      name: { en: "Grills", ku: "برژاوەکان", ar: "المشويات" },
      items: [
        /* ************ PASTE FOOD IMAGE HERE — MIXED GRILL ************
           Change ONLY img: "" to img: "/images/mixed.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 22000,
          n: { en: "Mixed grill", ku: "برژاوی تێکەڵ", ar: "مشاوي مشكلة" },
          d: { en: "Lamb kebab, shish tawook and lamb pieces with grilled tomato and onion.",
               ku: "کەبابی بەرخ، شیشی مریشک و گۆشتی برژاو لەگەڵ تەماتە و پیازی برژاو.",
               ar: "كباب لحم وشيش طاووق وقطع لحم مشوية مع طماطم وبصل." } },
        /* ************ PASTE FOOD IMAGE HERE — LAMB KEBAB ************
           Change ONLY img: "" to img: "/images/kebab.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 12000,
          n: { en: "Lamb kebab", ku: "کەبابی بەرخ", ar: "كباب لحم" },
          d: { en: "Minced lamb with parsley and spices on skewers, served with tandoor bread.",
               ku: "گۆشتی کوتراوی بەرخ لەگەڵ جەعدە و بەهارات، لەگەڵ نانی تەنوور.",
               ar: "لحم غنم مفروم مع البقدونس والبهارات، يقدم مع خبز التنور." } },
        /* ************ PASTE FOOD IMAGE HERE — SHISH TAWOOK ************
           Change ONLY img: "" to img: "/images/tawook.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 10000,
          n: { en: "Shish tawook", ku: "شیشی مریشک", ar: "شيش طاووق" },
          d: { en: "Chicken marinated in yoghurt and garlic, grilled and served with rice.",
               ku: "پارچە مریشکی برژاو کە بە ماست و سیر ئامادە کراوە، لەگەڵ برنج.",
               ar: "دجاج متبل باللبن والثوم، مشوي ويقدم مع الرز." } },
        /* >>> ADD NEW DISHES HERE (GRILLS): paste a copied dish block on the next line <<< */
      ]},

    /* ---------------- MAIN DISHES ---------------- */
    { id: "mains",
      name: { en: "Main dishes", ku: "خواردنی سەرەکی", ar: "الأطباق الرئيسية" },
      items: [
        /* ************ PASTE FOOD IMAGE HERE — DOLMA ************
           Change ONLY img: "" to img: "/images/dolma.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 9000,
          n: { en: "Dolma", ku: "دۆڵمە", ar: "دولمة" },
          d: { en: "Vine leaves, onion and tomato stuffed with rice and lamb.",
               ku: "گەڵای مێو، پیاز و تەماتەی پڕکراو بە برنج و گۆشت.",
               ar: "ورق عنب وبصل وطماطم محشوة بالرز واللحم." } },
        /* ************ PASTE FOOD IMAGE HERE — CHICKEN BIRYANI ************
           Change ONLY img: "" to img: "/images/biryani.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 8500,
          n: { en: "Chicken biryani", ku: "بریانی مریشک", ar: "برياني دجاج" },
          d: { en: "Spiced rice with chicken, almonds and raisins.",
               ku: "برنجی بەهاراتدار لەگەڵ مریشک، بادەم و مێوژ.",
               ar: "رز متبل مع دجاج ولوز وزبيب." } },
        /* ************ PASTE FOOD IMAGE HERE — QOZI ************
           Change ONLY img: "" to img: "/images/qozi.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 16000,
          n: { en: "Qozi", ku: "قووزی", ar: "قوزي" },
          d: { en: "Slow-roasted lamb on spiced rice with almonds.",
               ku: "گۆشتی بەرخی بە هێواشی برژاو لەسەر برنج، لەگەڵ بادەم.",
               ar: "لحم غنم مشوي ببطء على الرز المتبل مع اللوز." } },
        /* ************ PASTE FOOD IMAGE HERE — MASGOUF ************
           Change ONLY img: "" to img: "/images/masgouf.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 18000,
          n: { en: "Masgouf", ku: "مەسگوف", ar: "مسكوف" },
          d: { en: "River carp split and grilled over wood fire, with tomato and onion.",
               ku: "ماسی ڕووبار کە بە ئاگری دار برژاوە، لەگەڵ تەماتە و پیاز.",
               ar: "سمك شبوط مفتوح يشوى على نار الحطب مع الطماطم والبصل." } },
        /* >>> ADD NEW DISHES HERE (MAIN DISHES): paste a copied dish block on the next line <<< */
      ]},

    /* ---------------- DESSERTS ---------------- */
    { id: "desserts",
      name: { en: "Desserts", ku: "شیرینی", ar: "الحلويات" },
      items: [
        /* ************ PASTE FOOD IMAGE HERE — BAKLAVA ************
           Change ONLY img: "" to img: "/images/baklava.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 4500,
          n: { en: "Baklava", ku: "باقلاوە", ar: "بقلاوة" },
          d: { en: "Thin layered pastry with pistachios and syrup.",
               ku: "چەند توێژێک لە هەویری تەنک لەگەڵ فستەق و شەربەت.",
               ar: "طبقات من العجين الرقيق مع الفستق والقطر." } },
        /* ************ PASTE FOOD IMAGE HERE — KUNAFA ************
           Change ONLY img: "" to img: "/images/kunafa.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 5500,
          n: { en: "Kunafa", ku: "کونافە", ar: "كنافة" },
          d: { en: "Warm cheese kunafa with sugar syrup.",
               ku: "کونافەی گەرم لەگەڵ پەنیر و شەربەت.",
               ar: "كنافة ساخنة بالجبن والقطر." } },
        /* ************ PASTE FOOD IMAGE HERE — KLEICHA ************
           Change ONLY img: "" to img: "/images/kleicha.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 3000,
          n: { en: "Kleicha", ku: "کلێچە", ar: "كليجة" },
          d: { en: "Date-filled cookies, served with tea.",
               ku: "کلێچەی پڕکراو بە خورما، لەگەڵ چا.",
               ar: "كليجة محشوة بالتمر، تقدم مع الشاي." } },
        /* >>> ADD NEW DISHES HERE (DESSERTS): paste a copied dish block on the next line <<< */
      ]},

    /* ---------------- DRINKS ---------------- */
    { id: "drinks",
      name: { en: "Drinks", ku: "خواردنەوەکان", ar: "المشروبات" },
      items: [
        /* ************ PASTE FOOD IMAGE HERE — TEA ************
           Change ONLY img: "" to img: "/images/tea.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 1000,
          n: { en: "Tea", ku: "چای", ar: "شاي" },
          d: { en: "Black tea in a glass istikan.",
               ku: "چای ڕەش لە ئیستکانی شووشە.",
               ar: "شاي أسود في استكان زجاجي." } },
        /* ************ PASTE FOOD IMAGE HERE — ARABIC COFFEE ************
           Change ONLY img: "" to img: "/images/coffee.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 2500,
          n: { en: "Arabic coffee", ku: "قاوەی عەرەبی", ar: "قهوة عربية" },
          d: { en: "Lightly roasted coffee with cardamom.",
               ku: "قاوەی عەرەبی لەگەڵ هێل.",
               ar: "قهوة خفيفة التحميص بالهيل." } },
        /* ************ PASTE FOOD IMAGE HERE — DOOGH ************
           Change ONLY img: "" to img: "/images/doogh.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 2000,
          n: { en: "Doogh", ku: "دۆ", ar: "لبن عيران" },
          d: { en: "Cold salted yoghurt drink with mint.",
               ku: "دۆی ساردی سویر لەگەڵ پونگ.",
               ar: "لبن عيران بارد مملح بالنعناع." } },
        /* ************ PASTE FOOD IMAGE HERE — POMEGRANATE JUICE ************
           Change ONLY img: "" to img: "/images/pomegranate.jpg" (or your photo URL).
           Keep both quotation marks and the comma.
        */
        { img: "", p: 5000,
          n: { en: "Pomegranate juice", ku: "شەربەتی ئەنار", ar: "عصير رمان" },
          d: { en: "Freshly pressed to order.",
               ku: "ئەنارێکی تازە گوشراو.",
               ar: "رمان طازج يعصر عند الطلب." } },
        /* >>> ADD NEW DISHES HERE (DRINKS): paste a copied dish block on the next line <<< */
      ]},

    /* >>> ADD A NEW CATEGORY HERE: paste a copied category block on the next line <<< */
  ];

