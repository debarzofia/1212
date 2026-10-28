import { MENU } from '../data/menu';

let initialized = false;

export function initializeMenu() {
  if (initialized || typeof window === "undefined" || !document.getElementById("picker")) return;
  initialized = true;


  /* ---------- text ---------- */
  var UI = {
    ku: { menu: "لیستی خواردن", tag: "کافێ و چێشتخانە · سلێمانی", brand: "NET", cur: "دینار", name: "کوردی",
          thanks: "سوپاس کە ئێمەتان هەڵبژارد", enjoy: "نۆشی گیان", open: "بینینی لیستی خواردن",
          enlarge: "بینینی وردەکارییەکانی ", close: "داخستن", prev: "پێشوو", next: "دواتر", change: "گۆڕینی زمان",
          note: "نرخەکان بە دیناری عێراقین. تکایە ئەگەر هەستیارییەکی خۆراکیت هەیە، بە گارسۆنەکە بڵێ." },
    ar: { menu: "القائمة", tag: "كافيه ومطعم · السليمانية", brand: "NET", cur: "د.ع", name: "العربية",
          thanks: "شكراً لاختياركم لنا", enjoy: "بالهناء والشفاء", open: "عرض القائمة",
          enlarge: "عرض تفاصيل ", close: "إغلاق", prev: "السابق", next: "التالي", change: "تغيير اللغة",
          note: "الأسعار بالدينار العراقي. يرجى إبلاغ النادل بأي حساسية غذائية." },
    en: { menu: "Menu", tag: "Caffe & Restaurant · Slemani", brand: "NET", cur: "IQD", name: "English",
          thanks: "Thank you for choosing us", enjoy: "Enjoy your meal", open: "View the menu",
          enlarge: "View details for ", close: "Close", prev: "Previous", next: "Next", change: "Change language",
          note: "Prices are in Iraqi dinar. Please tell your server about any allergies." }
  };
  /* Only show this section when the customer has not added any food yet. */
  var SUGGEST_TXT = {
    en: { title: "Our suggestions", subtitle: "Explore dishes from 5,000 IQD and up" },
    ku: { title: "پێشنیارەکانی ئێمە", subtitle: "خواردنەکان لە ٥٬٠٠٠ دینارەوە بۆ سەرەوە" },
    ar: { title: "اقتراحاتنا لك", subtitle: "اكتشف الأطباق بسعر ٥٬٠٠٠ دينار فأكثر" }
  };
  var TAG = { ku: "ckb", ar: "ar", en: "en" };
  var CART_TXT = {
    ku: { add: "زیادکردن", less: "کەمکردنەوە", view: "بینینی داواکاری", order: "داواکارییەکەت", total: "کۆی گشتی", clear: "سڕینەوەی هەموو",
          note: "ئەم لیستە نیشانی گارسۆنەکە بدە.", empty: "هێشتا هیچ خواردنێکت زیاد نەکردووە." },
    ar: { add: "إضافة", less: "إنقاص", view: "عرض الطلب", order: "طلبك", total: "المجموع", clear: "مسح الكل",
          note: "أرِ هذه القائمة للنادل.", empty: "لم تضف أي طعام بعد." },
    en: { add: "Add to order", less: "Remove one", view: "View order", order: "Your order", total: "Total", clear: "Clear all",
          note: "Show this list to your waiter.", empty: "Nothing added yet." }
  };

   /* ---------- flags ---------- */
  var uid = 0;
  function sunStar() {
    var pts = [], cx = 18, cy = 12, ro = 6.8, ri = 4.1, i, r, a;
    for (i = 0; i < 42; i++) {
      r = i % 2 ? ri : ro; a = -Math.PI / 2 + i * Math.PI / 21;
      pts.push((cx + r * Math.cos(a)).toFixed(2) + "," + (cy + r * Math.sin(a)).toFixed(2));
    }
    return '<polygon points="' + pts.join(" ") + '" fill="#FDBA12"/>';
  }
  function flag(lang) {
    var open = '<svg viewBox="0 0 36 24" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">';
    if (lang === "ku") {
      return open + '<rect width="36" height="8" fill="#ED1C24"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#278E43"/>' + sunStar() + "</svg>";
    }
    if (lang === "ar") {
      return open + '<rect width="36" height="8" fill="#CE1126"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#000"/>' +
        '<text x="18" y="14.6" font-size="5.2" text-anchor="middle" fill="#007A3D" font-family="Noto Kufi Arabic, Vazirmatn, Tahoma, sans-serif" font-weight="700">الله أكبر</text></svg>';
    }
    var k = ++uid;
    return '<svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' +
      '<clipPath id="uk-s' + k + '"><path d="M0,0v30h60v-30z"/></clipPath><clipPath id="uk-t' + k + '"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath>' +
      '<g clip-path="url(#uk-s' + k + ')"><path d="M0,0v30h60v-30z" fill="#012169"/><path d="M0,0L60,30M60,0L0,30" stroke="#fff" stroke-width="6"/>' +
      '<path d="M0,0L60,30M60,0L0,30" clip-path="url(#uk-t' + k + ')" stroke="#C8102E" stroke-width="4"/><path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/><path d="M30,0v30M0,15h60" stroke="#C8102E" stroke-width="6"/></g></svg>';
  }

  /* ---------- helpers ---------- */
  var SUN = (function () {
    var pts = [], i, rr, a;
    for (i = 0; i < 42; i++) { rr = i % 2 ? 6.2 : 11.5; a = -Math.PI / 2 + i * Math.PI / 21; pts.push((12 + rr * Math.cos(a)).toFixed(2) + "," + (12 + rr * Math.sin(a)).toFixed(2)); }
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="' + pts.join(" ") + '" fill="#F2B01E"/><circle cx="12" cy="12" r="4.2" fill="#D63A2B"/></svg>';
  })();
  var DIGITS = "٠١٢٣٤٥٦٧٨٩";
  function price(n, lang) {
    var s = n.toLocaleString("en-US");
    if (lang === "en") return s;
    return s.replace(/\d/g, function (d) { return DIGITS[d]; }).replace(/,/g, "٬");
  }
  /* FOOD PHOTO DISPLAY: no need to edit this function. The value of img
     in each menu dish controls food card + detail popup + order thumbnail. */
  function pic(it) {
    return it.img ? '<img class="art" src="' + it.img + '" alt="" loading="lazy" decoding="async">' : "";
  }
  /* A real dish photo is displayed whenever img is provided. Otherwise use an illustration. */
  var foodSymbols = {
    "Hummus": "🥙", "Lentil soup": "🍲", "Samosa": "🥟", "Kibbeh": "🥙",
    "Mixed grill": "🍖", "Kebab": "🍢", "Shish tawook": "🍗",
    "Dolma": "🫔", "Biryani": "🍚", "Qozi": "🍖", "Masgouf": "🐟",
    "Baklava": "🥮", "Kunafa": "🍮", "Kleicha": "🍪",
    "Tea": "🫖", "Arabic coffee": "☕", "Doogh": "🥛", "Pomegranate juice": "🍹"
  };
  function detailImage(it) {
    return it.img ? pic(it) : '<div class="dish-art" aria-hidden="true"><span>' +
      (foodSymbols[it.n.en] || "🍽️") + '</span></div>';
  }
  /* a photo that is missing is removed, so the logo placeholder behind it shows */
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG" && t.classList.contains("art")) t.remove();
  }, true);
  /* Use the same clickable card everywhere (full menu + suggested food).
     This also fixes dishes with no image: the entire dish card opens. */
  function makeFoodCard(it, k, lang, featured) {
    var t = UI[lang];
    /* Featured food without a real photo shows a friendly placeholder.
       Once you paste img: "...", the real photo automatically replaces it. */
    var photo = it.img ? '<div class="pic">' + pic(it) +
      '<span class="zoom" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5M8.5 11h5M11 8.5v5"/></svg></span></div>' :
      (featured ? '<div class="pic"><div class="dish-art" aria-hidden="true"><span>' + (foodSymbols[it.n.en] || '🍽️') + '</span></div></div>' : '');
    return '<div class="cell"><article class="card' + (photo ? '' : ' no-pic') + '" data-dish="' + k + '">' +
      '<button class="dish-open" type="button" data-open="' + k + '" aria-label="' + t.enlarge + it.n[lang] + '"></button>' + photo +
      '<div class="info"><h3>' + it.n[lang] + '</h3><p class="desc">' + it.d[lang] + '</p>' +
      '<div class="buy"><p class="price">' + price(it.p, lang) + ' <small>' + t.cur + '</small></p>' +
      '<span class="qty" data-k="' + k + '"></span></div></div></article></div>';
  }
  var $ = function (id) { return document.getElementById(id); };
  var picker = $("picker"), menu = $("menu"), content = $("content"), chips = $("chips"), splash = $("splash"), lb = $("lb");
  var cur = "en", flat = [], ALL = [], cart = {}, idx = 0, lastFocus = null, splashTimer = null;
  var sheet = $("sheet"), basket = $("basket");

  /* Lock background scrolling WITHOUT resetting the customer's place. */
  var frozen = false, frozenY = 0, frozenAnchor = null, frozenAnchorTop = 0;
  function freezeScroll(anchor) {
    if (frozen) return;
    frozenY = window.scrollY || window.pageYOffset || 0;
    frozenAnchor = anchor && anchor.closest ? anchor.closest(".cell") : null;
    frozenAnchorTop = frozenAnchor ? frozenAnchor.getBoundingClientRect().top : 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + frozenY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.documentElement.classList.add("lock");
    frozen = true;
  }
  function unfreezeScroll() {
    if (!frozen) return;
    /* If recommendations disappeared while adding to the order, adjust the
       scroll offset to keep the selected food in exactly the same place. */
    if (frozenAnchor && frozenAnchor.isConnected && frozenAnchor.offsetParent !== null) {
      frozenY += frozenAnchor.getBoundingClientRect().top - frozenAnchorTop;
    }
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.documentElement.classList.remove("lock");
    window.scrollTo(0, Math.max(0, frozenY));
    frozen = false;
    frozenAnchor = null;
  }

  document.documentElement.classList.add("nos");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-flag]").forEach(function (el) { el.innerHTML = flag(el.getAttribute("data-flag")); });

  function render(lang) {
    var t = UI[lang];
    cur = lang;
    menu.lang = TAG[lang];
    menu.dir = lang === "en" ? "ltr" : "rtl";
    $("brand").textContent = t.brand;
    $("change-label").textContent = t.name;
    $("change-flag").innerHTML = flag(lang);
    $("change").setAttribute("aria-label", t.change);
    $("menu-title").textContent = t.menu;
    $("tag").textContent = t.tag;
    $("thanks-1").textContent = t.thanks;
    $("thanks-2").textContent = t.enjoy;
    $("foot-1").textContent = t.thanks;
    $("note").textContent = t.note;
    $("splash-title").textContent = t.thanks;
    $("splash-sub").textContent = t.enjoy;
    $("lb-close").setAttribute("aria-label", t.close);
    $("lb-prev").setAttribute("aria-label", t.prev);
    $("lb-next").setAttribute("aria-label", t.next);

    flat = [];
    ALL = [];
    chips.innerHTML = MENU.map(function (c, i) {
      return '<button class="chip" type="button" data-target="sec-' + c.id + '"' + (i === 0 ? ' aria-current="true"' : "") + ">" + c.name[lang] + "</button>";
    }).join("");

    content.innerHTML = MENU.map(function (cat) {
      var cards = cat.items.map(function (it) {
        var k = ALL.push({ key: cat.id + "|" + it.n.en, it: it }) - 1;
        flat.push(it);
        return makeFoodCard(it, k, lang);
      }).join("");
      return '<section class="sec" id="sec-' + cat.id + '"><div class="sec-head"><h2 class="display">' + cat.name[lang] + '</h2><i aria-hidden="true"></i></div><div class="grid">' + cards + "</div></section>";
    }).join("");

    /* Every qualifying dish from ALL categories is suggested, not just a few.
       A dish must be >= 5,000 IQD. Full menu always stays below this section. */
    var suggested = ALL.map(function (a, k) { return { it: a.it, k: k }; })
      .filter(function (o) { return o.it.p >= 5000; })
      .sort(function (a, b) { return b.it.p - a.it.p; });
    if (suggested.length) {
      var s = SUGGEST_TXT[lang];
      content.insertAdjacentHTML("afterbegin",
        '<section id="suggestions" class="suggestions" aria-label="' + s.title + '">' +
        '<div class="suggest-top"><h2 class="display">' + s.title + '</h2><p>' + s.subtitle + '</p></div>' +
        '<div class="suggest-track">' + suggested.map(function (a) { return makeFoodCard(a.it, a.k, lang, true); }).join("") + '</div></section>');
    }
    activeId = "";
    setActive("sec-" + MENU[0].id);
    motion();
    renderCart();
  }

  /* ---------- scroll motion ---------- */
  var io = null, rafId = 0;
  function measure() {
    var d = $("cats-nav");
    if (d) menu.style.setProperty("--dock-h", d.offsetHeight + "px");
  }
  function onScroll() {
    if (rafId) return;
    rafId = requestAnimationFrame(function () {
      rafId = 0;
      if (!reduce) menu.style.setProperty("--sy", window.scrollY || 0);
      spy();
    });
  }
  function motion() {
    if (io) io.disconnect();
    measure();
    if (reduce || !("IntersectionObserver" in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var cell = en.target, card = cell.firstElementChild;
        if (en.isIntersecting) {
          card.style.transitionDelay = ((+cell.getAttribute("data-i") % 3) * 90) + "ms";
          card.classList.remove("rv");
        } else {
          card.style.transitionDelay = "0ms";
          card.style.setProperty("--dy", (en.boundingClientRect.top > 0 ? 32 : -32) + "px");
          card.classList.add("rv");
        }
      });
    }, { rootMargin: "0px 0px -5% 0px", threshold: 0.05 });
    content.querySelectorAll(".sec").forEach(function (sec) {
      sec.querySelectorAll(".cell").forEach(function (cell, i) { cell.setAttribute("data-i", i); io.observe(cell); });
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", measure);
  if (window.ResizeObserver) new ResizeObserver(measure).observe($("cats-nav"));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  /* the tab of the category you are reading is highlighted and kept in view */
  var activeId = "", spyLock = false, spySettled = false, spyY = 0, spyTimer = 0;
  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    chips.querySelectorAll(".chip").forEach(function (chip) {
      var on = chip.getAttribute("data-target") === id;
      if (!on) { chip.removeAttribute("aria-current"); return; }
      chip.setAttribute("aria-current", "true");
      var a = chip.getBoundingClientRect(), b = chips.getBoundingClientRect();
      var delta = (a.left + a.width / 2) - (b.left + b.width / 2);
      try { chips.scrollTo({ left: chips.scrollLeft + delta, behavior: reduce || menu.hidden ? "auto" : "smooth" }); } catch (err) { chips.scrollLeft += delta; }
    });
  }
  function spy() {
    if (menu.hidden) return;
    if (spyLock) {
      /* a tapped tab stays highlighted until the customer scrolls on their own */
      if (!spySettled || Math.abs((window.scrollY || 0) - spyY) < 24) return;
      spyLock = false;
    }
    var secs = content.querySelectorAll(".sec");
    if (!secs.length) return;
    var dockH = $("cats-nav").offsetHeight, line = dockH + (window.innerHeight - dockH) * 0.4, id = secs[0].id, i;
    for (i = 0; i < secs.length; i++) { if (secs[i].getBoundingClientRect().top <= line) id = secs[i].id; }
    var foot = document.querySelector(".foot");
    if (foot && (window.scrollY || 0) > 0 && foot.getBoundingClientRect().bottom <= window.innerHeight + 4) id = secs[secs.length - 1].id;
    setActive(id);
  }
  function goTo(id) {
    var sec = $(id);
    if (!sec) return;
    spyLock = true;
    spySettled = false;
    clearTimeout(spyTimer);
    spyTimer = setTimeout(function () { spySettled = true; spyY = window.scrollY || 0; }, reduce ? 80 : 1100);
    setActive(id);
    var top = sec.getBoundingClientRect().top + (window.scrollY || 0) - $("cats-nav").offsetHeight - 6;
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
  }

  /* ---------- order basket ---------- */
  var CK = "net-menu-order";
  function saveCart() { try { localStorage.setItem(CK, JSON.stringify(cart)); } catch (err) {} }
  function loadCart() {
    try { var v = JSON.parse(localStorage.getItem(CK) || "{}"); if (v && typeof v === "object") cart = v; } catch (err) { cart = {}; }
  }
  function money(n) { return price(n, cur) + " " + UI[cur].cur; }
  function qtyOf(k) { return cart[ALL[k].key] || 0; }
  function qtyHtml(k) {
    var c = CART_TXT[cur], q = qtyOf(k);
    var plus = '<button class="qbtn plus" type="button" data-act="add" data-k="' + k + '" aria-label="' + c.add + '">+</button>';
    if (!q) return plus;
    return '<button class="qbtn minus" type="button" data-act="less" data-k="' + k + '" aria-label="' + c.less + '">&minus;</button><span class="qnum">' + price(q, cur) + "</span>" + plus;
  }
  function setQty(k, q) {
    var key = ALL[k].key, before = cart[key] || 0;
    if (q <= 0) delete cart[key]; else cart[key] = Math.min(q, 99);
    saveCart();
    renderCart();
    if (q > before && !reduce) {
      var bag = $("bag");
      bag.classList.remove("bump");
      void bag.offsetWidth;
      bag.classList.add("bump");
    }
  }
  function renderCart() {
    var c = CART_TXT[cur], total = 0, n = 0, rows = "";
    Object.keys(cart).forEach(function (key) { if (!ALL.some(function (a) { return a.key === key; })) delete cart[key]; });
    content.querySelectorAll(".qty").forEach(function (el) { el.innerHTML = qtyHtml(+el.getAttribute("data-k")); });
    ALL.forEach(function (a, k) {
      var q = cart[a.key];
      if (!q) return;
      total += a.it.p * q;
      n += q;
      rows += '<li class="srow"><span class="sthumb">' + pic(a.it) + '</span><div class="sinfo"><b>' + a.it.n[cur] + "</b><span>" + money(a.it.p) + " &times; " + price(q, cur) + '</span></div>' +
        '<div class="sright"><span class="qty">' + qtyHtml(k) + '</span><b class="sline">' + money(a.it.p * q) + "</b></div></li>";
    });
    $("sheet-list").innerHTML = rows || '<li class="sempty">' + c.empty + "</li>";
    $("sheet-title").textContent = c.order;
    $("sheet-total-l").textContent = c.total;
    $("sheet-total").textContent = money(total);
    $("sheet-note").textContent = c.note;
    $("sheet-clear").textContent = c.clear;
    $("sheet-clear").hidden = n === 0;
    $("basket-label").textContent = c.view;
    $("basket-n").textContent = price(n, cur);
    $("basket-total").textContent = money(total);
    basket.hidden = n === 0;
    menu.classList.toggle("has-cart", n > 0);
    var rec = $("suggestions");
    if (rec) {
      var mustHide = n > 0;
      if (rec.hidden !== mustHide) {
        var location = rec.getBoundingClientRect().top;
        var oldH = rec.getBoundingClientRect().height;
        rec.hidden = mustHide;
        /* Avoid a jump when suggestions are removed above the viewport. */
        if (frozen) {
          if (location + oldH < 0) {
            frozenY += mustHide ? -oldH : rec.getBoundingClientRect().height;
            document.body.style.top = "-" + frozenY + "px";
          }
        } else if (location + oldH < 0) {
          window.scrollTo(0, Math.max(0, (window.scrollY || 0) + (mustHide ? -oldH : rec.getBoundingClientRect().height)));
        }
      }
    }
    if (!lb.hidden) $("lb-qty").innerHTML = qtyHtml(idx);
    if (n === 0) closeSheet();
  }
  function openSheet() {
    if (!sheet.hidden) return;
    freezeScroll(null);
    sheet.hidden = false;
    $("sheet-x").focus({ preventScroll: true });
  }
  function closeSheet() {
    if (sheet.hidden) return;
    sheet.hidden = true;
    unfreezeScroll();
    if (!basket.hidden) { try { basket.focus({ preventScroll: true }); } catch (err) {} }
  }
  function onCartClick(e) {
    var b = e.target.closest("[data-act]");
    if (!b) return;
    var k = +b.getAttribute("data-k"), q = qtyOf(k);
    setQty(k, b.getAttribute("data-act") === "add" ? q + 1 : q - 1);
  }
  content.addEventListener("click", onCartClick);
  lb.addEventListener("click", onCartClick);
  $("sheet-list").addEventListener("click", onCartClick);
  basket.addEventListener("click", openSheet);
  $("sheet-x").addEventListener("click", closeSheet);
  $("sheet-back").addEventListener("click", closeSheet);
  $("sheet-clear").addEventListener("click", function () { cart = {}; saveCart(); renderCart(); });
  loadCart();

  /* ---------- splash ---------- */
  function closeSplash() {
    clearTimeout(splashTimer);
    if (splash.hidden) return;
    splash.classList.add("out");
    document.documentElement.classList.remove("lock");
    setTimeout(function () { splash.hidden = true; splash.classList.remove("out"); }, reduce ? 0 : 450);
    var h = $("menu-title"); if (h) h.focus({ preventScroll: true });
  }
  function openSplash() {
    splash.hidden = false;
    splash.classList.remove("out");
    document.documentElement.classList.add("lock");
    splashTimer = setTimeout(closeSplash, 2000);
  }
  splash.addEventListener("click", closeSplash);

  /* ---------- lightbox ---------- */
  function showPhoto(i) {
    var t = UI[cur], it;
    idx = (i + flat.length) % flat.length;
    it = flat[idx];
    $("lb-pic").innerHTML = detailImage(it);
    $("lb-name").textContent = it.n[cur];
    $("lb-desc").textContent = it.d[cur];
    $("lb-price").innerHTML = price(it.p, cur) + " <small>" + t.cur + "</small>";
    $("lb-qty").innerHTML = qtyHtml(idx);
    lb.setAttribute("aria-label", it.n[cur]);
  }
  function openPhoto(i, opener) {
    lastFocus = opener || null;
    showPhoto(i);
    freezeScroll(opener);
    lb.hidden = false;
    $("lb-close").focus({ preventScroll: true });
  }
  function closePhoto() {
    if (lb.hidden) return;
    lb.hidden = true;
    unfreezeScroll();
    if (lastFocus && lastFocus.isConnected && lastFocus.offsetParent !== null) {
      try { lastFocus.focus({ preventScroll: true }); } catch (err) {}
    }
  }
  content.addEventListener("click", function (e) {
    /* + and - are separate actions. Clicking anything else on the card opens
       its detail, including the image, text, empty photo and suggested cards. */
    if (e.target.closest("[data-act]")) return;
    var card = e.target.closest(".card");
    if (!card || !content.contains(card)) return;
    var opener = card.querySelector(".dish-open");
    if (opener) openPhoto(+opener.getAttribute("data-open"), opener);
  });
  $("lb-close").addEventListener("click", closePhoto);
  $("lb-prev").addEventListener("click", function () { showPhoto(idx - 1); });
  $("lb-next").addEventListener("click", function () { showPhoto(idx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closePhoto(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { if (!sheet.hidden) closeSheet(); else if (!lb.hidden) closePhoto(); else if (!splash.hidden) closeSplash(); return; }
    if (lb.hidden) return;
    var rtl = menu.dir === "rtl";
    if (e.key === "ArrowRight") showPhoto(idx + (rtl ? -1 : 1));
    if (e.key === "ArrowLeft") showPhoto(idx + (rtl ? 1 : -1));
  });

  /* ---------- navigation ---------- */
  chips.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    goTo(chip.getAttribute("data-target"));
  });

  picker.addEventListener("click", function (e) {
    var b = e.target.closest(".fs-lang");
    if (!b) return;
    render(b.getAttribute("data-lang"));
    document.documentElement.classList.remove("nos");
    picker.hidden = true;
    menu.hidden = false;
    window.scrollTo(0, 0);
    measure();
    onScroll();
    openSplash();
  });

  $("change").addEventListener("click", function () {
    closePhoto();
    closeSheet();
    menu.hidden = true;
    document.documentElement.classList.add("nos");
    picker.hidden = false;
    window.scrollTo(0, 0);
    picker.querySelector(".fs-lang").focus({ preventScroll: true });
  });

}
