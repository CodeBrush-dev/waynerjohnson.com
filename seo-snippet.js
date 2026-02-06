// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.waynerjohnson.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.waynerjohnson.com/","title_tag":"Innovation culture & decisions | Wayne Johnson, [City]","meta_description":"Scholar, speaker, and consultant helping organizations improve innovation culture, organizational behavior, and ethical decision-making for better results."},{"page_url":"https://www.waynerjohnson.com/expertise","title_tag":"Decision-making consulting & conflict management | Wayne Johnson","meta_description":"Expertise in decision-making consulting, conflict management, innovation culture, idea evaluation, consensus building, and ethical decision-making for organizations."},{"page_url":"https://www.waynerjohnson.com/education","title_tag":"Organizational behavior & ethical decision-making | Wayne Johnson","meta_description":"Advanced education in management, strategy, and organizational behavior supporting ethical decision-making and innovation-focused management consulting."},{"page_url":"https://www.waynerjohnson.com/experience","title_tag":"Change management & organizational behavior experience | Wayne Johnson","meta_description":"Extensive leadership and change management experience informs organizational behavior insights, conflict management, and high-stakes decision-making consulting."},{"page_url":"https://www.waynerjohnson.com/services","title_tag":"Management & decision-making consulting services | Wayne Johnson","meta_description":"Consulting, workshops, and speaking on decision-making consulting, innovation culture, conflict management, and change management for organizations."},{"page_url":"https://www.waynerjohnson.com/cv-1","title_tag":"Management consulting & innovation research CV | Wayne Johnson","meta_description":"Download Wayne Johnson’s CV detailing research and practice in innovation culture, organizational behavior, ethical decision-making, and management consulting."},{"page_url":"https://www.waynerjohnson.com/services-2","title_tag":"Organizational behavior & idea evaluation articles | Wayne Johnson","meta_description":"Academic and practice articles on organizational behavior, idea evaluation, consensus building, and ethical decision-making in innovation and management."},{"page_url":"https://www.waynerjohnson.com/about","title_tag":"Innovation culture & organizational behavior research | Wayne Johnson","meta_description":"Wayne Johnson studies why people support or reject new ideas, focusing on innovation culture, organizational behavior, and ethical decision-making dynamics."},{"page_url":"https://www.waynerjohnson.com/contact-dr-johnson","title_tag":"Decision-making consulting & conflict management | Contact Wayne Johnson","meta_description":"Contact Wayne Johnson for management consulting, decision-making consulting, conflict management, and change management support for your organization."}],"keywords":["Innovation culture","Decision-making consulting","Conflict management","Organizational behavior","Ethical decision-making","Idea evaluation","Consensus building","Change management","Management consulting","Wayne Johnson [City]"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.waynerjohnson.com/#person",
  "name": "Dr. Wayne Johnson",
  "url": "https://www.waynerjohnson.com/",
  "image": "https://static.wixstatic.com/media/f34a2e_8c765491079e4eaabc9baa2e1255d57b~mv2.jpg/v1/fill/w_147,h_93,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/f34a2e_8c765491079e4eaabc9baa2e1255d57b~mv2.jpg",
  "jobTitle": "Scholar, speaker, and consultant",
  "description": "Scholar, speaker, and consultant focusing on why people support or reject new ideas and how to influence this decision, with expertise in innovation, moral decision-making, and persuasion.",
  "sameAs": [],
  "knowsAbout": [
    "Innovation",
    "Decision-making",
    "Organizational behavior",
    "Moral decision-making",
    "Persuasion",
    "Message framing",
    "Idea adoption",
    "Creativity and innovation bias"
  ],
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Consultant",
      "description": "Consulting on strategic and managerial initiatives related to innovation, decision-making, and organizational culture."
    },
    {
      "@type": "Occupation",
      "name": "Speaker",
      "description": "Speaking engagements providing dynamic expertise for a wide range of audiences on innovation, morals, and decision-making."
    },
    {
      "@type": "Occupation",
      "name": "Workshop and Training Facilitator",
      "description": "Workshops and training customizable to the needs of audiences and organizations, including executive education and group facilitation."
    }
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Cornell University, Johnson Graduate School of Management"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Georgetown University, Walsh School of Foreign Service"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Vanderbilt University, College of Arts and Sciences"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Academic Degree",
      "name": "M.S./Ph.D. Management and Organizations",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "Cornell University, Johnson Graduate School of Management"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Academic Degree",
      "name": "M.S. Foreign Service",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "Georgetown University, Walsh School of Foreign Service"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Academic Degree",
      "name": "B.A. Communications (speech rhetoric)",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "Vanderbilt University, College of Arts and Sciences"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Practitioner Diploma",
      "name": "Strategy and Decision-Making",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "General Staff and Command College (U.S. Army)"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Practitioner Diploma",
      "name": "Special Operations Officer; Civil Affairs",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "John F. Kennedy Special Warfare Center and School (U.S. Army)"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Practitioner Diploma",
      "name": "Humanitarian Emergencies and Refugees",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "Georgetown University, Walsh School of Foreign Service"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Practitioner Diploma",
      "name": "Engineering",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "Maneuver Support Center of Excellence (U.S. Army)"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Professional Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consulting",
          "description": "Consulting on strategic and managerial initiatives, including innovation, decision-making, and conflict in values."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Workshops and Training",
          "description": "Customizable workshops and training tailored to the needs of audiences and organizations, including executive education and group facilitation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Speaking",
          "description": "Speaking services delivering dynamic expertise on innovation, moral decision-making, and persuasion to a wide range of audiences."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
