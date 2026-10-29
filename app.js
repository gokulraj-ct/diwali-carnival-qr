const facts = [
  {
    "icon": "🪔",
    "category": "LIGHT & SYMBOLS",
    "title": "The little lamp with a big message",
    "text": "A diya is often seen as a symbol of light, hope, knowledge and the triumph of good over darkness."
  },
  {
    "icon": "🎉",
    "category": "FESTIVAL VIBES",
    "title": "Diwali lasts more than one day",
    "text": "Many communities celebrate Diwali across several days, with each day having its own customs and meaning."
  },
  {
    "icon": "🧹",
    "category": "FESTIVE PREP",
    "title": "The big clean-up has a purpose",
    "text": "Cleaning and decorating homes before Diwali is a popular tradition that welcomes a fresh start."
  },
  {
    "icon": "🌈",
    "category": "ART ATTACK",
    "title": "Rangoli is a colourful welcome mat",
    "text": "Rangoli designs are made at entrances using materials such as coloured powder, rice flour, flower petals or rice."
  },
  {
    "icon": "🌼",
    "category": "FLOWER POWER",
    "title": "Marigolds bring the festive glow",
    "text": "Marigold garlands are commonly used to decorate doorways, homes and puja spaces during celebrations."
  },
  {
    "icon": "🍬",
    "category": "SWEET TOOTH",
    "title": "Mithai is a Diwali superstar",
    "text": "Families and friends often exchange sweets as a way to share happiness, goodwill and togetherness."
  },
  {
    "icon": "🧨",
    "category": "FESTIVE CHOICES",
    "title": "Fireworks are not the whole story",
    "text": "Diwali can be celebrated with lamps, rangoli, food, prayers, family time and community events—with or without fireworks."
  },
  {
    "icon": "🗺️",
    "category": "CULTURE QUEST",
    "title": "Diwali traditions vary across India",
    "text": "The stories, rituals, foods and ways of celebrating can differ by region, community and family."
  },
  {
    "icon": "📚",
    "category": "EPIC MOMENT",
    "title": "One famous story links Diwali to Rama",
    "text": "In many North Indian traditions, Diwali celebrates Rama's return to Ayodhya after exile and the defeat of Ravana."
  },
  {
    "icon": "🪷",
    "category": "GODDESS GLOW",
    "title": "Lakshmi Puja is important for many",
    "text": "Many families worship Lakshmi during Diwali, praying for prosperity, well-being and good fortune."
  },
  {
    "icon": "🧿",
    "category": "GOOD VIBES",
    "title": "New beginnings are part of the mood",
    "text": "For many people, Diwali is a time to set intentions, reconnect with loved ones and begin again with optimism."
  },
  {
    "icon": "🛍️",
    "category": "SHOPPING SPREE",
    "title": "Diwali can be a big shopping season",
    "text": "In many places, people buy new clothes, gifts, household items or gold around the festival."
  },
  {
    "icon": "🧁",
    "category": "KITCHEN MAGIC",
    "title": "Recipes can be family treasures",
    "text": "Diwali snacks and sweets often follow recipes passed between generations, sometimes with each household's own twist."
  },
  {
    "icon": "🤝",
    "category": "COMMUNITY SPIRIT",
    "title": "Sharing is part of the celebration",
    "text": "People often visit friends and relatives, exchange gifts and share food during Diwali."
  },
  {
    "icon": "🪔",
    "category": "LIGHTS ON",
    "title": "Rows of lamps inspired the name",
    "text": "The word 'Deepavali' is commonly explained from Sanskrit roots meaning a row of lamps."
  },
  {
    "icon": "🌙",
    "category": "LUNAR CALENDAR",
    "title": "Diwali's date changes each year",
    "text": "The festival is observed according to the Hindu lunisolar calendar, so its date shifts on the Gregorian calendar."
  },
  {
    "icon": "🧡",
    "category": "FAMILY TIME",
    "title": "Togetherness is a festive favourite",
    "text": "For many households, the best part of Diwali is gathering with family, friends and neighbours."
  },
  {
    "icon": "🌿",
    "category": "GREEN CELEBRATION",
    "title": "A quieter Diwali can shine too",
    "text": "LED lights, reusable decorations and avoiding noisy fireworks can help make celebrations gentler on the environment and neighbours."
  },
  {
    "icon": "🧵",
    "category": "STYLE CHECK",
    "title": "Festive outfits come in every style",
    "text": "People celebrate in everything from traditional clothing to modern outfits—there is no single Diwali dress code."
  },
  {
    "icon": "🥻",
    "category": "COLOUR STORY",
    "title": "Bright colours are everywhere",
    "text": "Gold, red, orange, pink and other vivid colours often appear in Diwali clothes, decorations and artwork."
  },
  {
    "icon": "🕉️",
    "category": "FAITH & CULTURE",
    "title": "Diwali matters to several religions",
    "text": "Diwali is celebrated by many Hindus, Jains, Sikhs and some Buddhists, with meanings that differ across traditions."
  },
  {
    "icon": "🪙",
    "category": "JAIN TRADITION",
    "title": "Diwali has a special Jain meaning",
    "text": "For many Jains, Diwali marks the nirvana of Lord Mahavira, the 24th Tirthankara."
  },
  {
    "icon": "🛡️",
    "category": "SIKH HISTORY",
    "title": "Bandi Chhor Divas falls around Diwali",
    "text": "Sikhs celebrate Bandi Chhor Divas, associated with Guru Hargobind's release from imprisonment and the release of other kings."
  },
  {
    "icon": "🪷",
    "category": "BENGAL TRADITION",
    "title": "Kali Puja is celebrated by many",
    "text": "In parts of eastern India, especially Bengal, Kali Puja is an important observance around the Diwali period."
  },
  {
    "icon": "🌾",
    "category": "HARVEST NOTES",
    "title": "Seasonal rhythms shape festivals",
    "text": "In some regions, Diwali traditions connect with the agricultural calendar and the end of a harvest season."
  },
  {
    "icon": "🎲",
    "category": "LUCKY MOMENT",
    "title": "Games are part of some celebrations",
    "text": "Some families play cards or other games during Diwali as a tradition, though customs vary from home to home."
  },
  {
    "icon": "🕯️",
    "category": "GLOW UP",
    "title": "Not every light is a flame",
    "text": "Electric string lights and LED diyas are popular alternatives to oil lamps in many modern celebrations."
  },
  {
    "icon": "🎁",
    "category": "GIFT WRAPPED",
    "title": "Gifts can be simple and meaningful",
    "text": "A homemade sweet, a thoughtful note or time spent together can be just as meaningful as a store-bought gift."
  },
  {
    "icon": "🥜",
    "category": "SNACK ATTACK",
    "title": "Savoury snacks balance the sweets",
    "text": "Chakli, murukku, mixture and other savoury snacks are favourites in many households during the festive season."
  },
  {
    "icon": "🌏",
    "category": "WORLDWIDE",
    "title": "Diwali is celebrated around the world",
    "text": "Indian communities and their neighbours celebrate Diwali in countries across Asia, Africa, Europe, the Americas and Oceania."
  },
  {
    "icon": "🏙️",
    "category": "CITY LIGHTS",
    "title": "Public spaces join the celebration",
    "text": "Markets, streets, temples and community spaces may be decorated with lights and festive displays."
  },
  {
    "icon": "🧡",
    "category": "KINDNESS QUEST",
    "title": "A good deed fits the festival spirit",
    "text": "Donating food, helping someone or sharing with neighbours are ways people bring generosity into the season."
  },
  {
    "icon": "🧘",
    "category": "INNER LIGHT",
    "title": "The festival can be a time to reflect",
    "text": "For many celebrants, Diwali is also a moment to reflect on personal growth, gratitude and the choices that bring more light into life."
  },
  {
    "icon": "🐘",
    "category": "REGIONAL TALES",
    "title": "Different places tell different stories",
    "text": "Alongside the Rama story, some traditions connect Diwali with Krishna, Lakshmi, Kali or other regional religious narratives."
  },
  {
    "icon": "🍚",
    "category": "SOUTH INDIAN MORNING",
    "title": "Some celebrations start early",
    "text": "In many South Indian households, Diwali may include an early oil bath, new clothes, sweets and savouries, with customs varying by family."
  },
  {
    "icon": "🥁",
    "category": "SOUND OF JOY",
    "title": "Music adds to the festive atmosphere",
    "text": "Festive songs, devotional music, drums and dance can all be part of local Diwali gatherings."
  },
  {
    "icon": "🧡",
    "category": "FRIENDSHIP BONUS",
    "title": "The festival crosses family circles",
    "text": "Neighbours, colleagues and friends often exchange greetings even when they celebrate different festivals or traditions."
  },
  {
    "icon": "✨",
    "category": "FRESH START",
    "title": "A new ledger is a tradition for some",
    "text": "Some business communities begin new accounting books around Diwali, linking the season with prosperity and a fresh financial year."
  },
  {
    "icon": "🌺",
    "category": "FLOWER ART",
    "title": "Petals can become decorations",
    "text": "Fresh flower petals are used in some rangoli designs, adding natural colour and fragrance to festive entrances."
  },
  {
    "icon": "🎊",
    "category": "CARNIVAL FINALE",
    "title": "The best surprise is shared joy",
    "text": "However you celebrate, kindness, connection and joy are things you can pass along long after the lights go out."
  }
];
const els = {
  icon: document.getElementById("fact-icon"),
  category: document.getElementById("fact-category"),
  title: document.getElementById("fact-title"),
  text: document.getElementById("fact-text"),
  count: document.getElementById("fact-count"),
  next: document.getElementById("next-fact"),
  share: document.getElementById("share-fact"),
  confetti: document.getElementById("confetti-layer")
};
let bag = [];
let current = null;
function refillBag() {
  bag = facts.map((_, i) => i);
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
  if (bag.length > 1 && bag[bag.length - 1] === current) [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
}
function confetti() {
  const colors = ["#ffd66b", "#ff4fa3", "#6ff5ec", "#c9a2ff", "#ffffff"];
  for (let i = 0; i < 28; i++) {
    const bit = document.createElement("i");
    bit.className = "confetti";
    bit.style.left = Math.random() * 100 + "%";
    bit.style.background = colors[Math.floor(Math.random() * colors.length)];
    bit.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
    bit.style.animationDelay = (Math.random() * .25) + "s";
    els.confetti.appendChild(bit);
    setTimeout(() => bit.remove(), 1900);
  }
}
function showFact(celebrate = false) {
  if (!bag.length) refillBag();
  current = bag.pop();
  const fact = facts[current];
  els.icon.textContent = fact.icon;
  els.category.textContent = fact.category;
  els.title.textContent = fact.title;
  els.text.textContent = fact.text;
  els.count.textContent = `FACT ${String(current + 1).padStart(2, "0")} / ${facts.length}`;
  const card = document.querySelector(".fact-card");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "card-in .45s cubic-bezier(.2,.8,.2,1) both";
  if (celebrate) confetti();
}
els.next.addEventListener("click", () => showFact(true));
els.share.addEventListener("click", async () => {
  const fact = facts[current];
  const message = `${fact.title}\n${fact.text}\n\nDiscover a Diwali surprise at ${location.href}`;
  try {
    if (navigator.share) await navigator.share({ title: "Diwali Carnival Fun Fact", text: `${fact.title}\n${fact.text}`, url: location.href });
    else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(message);
      els.share.textContent = "✓ Copied to clipboard!";
      setTimeout(() => els.share.textContent = "↗ Share this surprise", 1800);
    } else {
        window.prompt("Copy this Diwali fun fact:", message);
    }
  } catch (err) {
    if (err.name !== "AbortError") window.prompt("Copy this Diwali fun fact:", message);
  }
});
// The first fact appears automatically when the QR destination opens.
refillBag();
showFact(false);


// Create a festive scattering of CSS-drawn traditional dolls.
(() => {
  const party = document.getElementById("doll-party");
  const template = document.getElementById("doll-template");

  if (!party || !template) return;

  const desktopPositions = [
    { top: "7%", left: "3%" },
    { top: "15%", left: "88%" },
    { top: "27%", left: "9%" },
    { top: "34%", left: "93%" },
    { top: "47%", left: "2%" },
    { top: "52%", left: "86%" },
    { top: "65%", left: "7%" },
    { top: "71%", left: "92%" },
    { top: "82%", left: "17%" },
    { top: "84%", left: "78%" }
  ];

  const mobilePositions = [
    { top: "12%", left: "0%" },
    { top: "30%", left: "83%" },
    { top: "57%", left: "0%" },
    { top: "76%", left: "84%" }
  ];

  const positions = window.innerWidth <= 600 ? mobilePositions : desktopPositions;

  positions.forEach((position, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "party-doll";
    wrapper.style.top = position.top;
    wrapper.style.left = position.left;
    wrapper.style.setProperty("--duration", `${1.6 + (index % 4) * 0.35}s`);
    wrapper.style.setProperty("--delay", `${-(index * 0.27)}s`);

    const clone = template.content.firstElementChild.cloneNode(true);
    const doll = clone.querySelector(".doll");
    if (doll && index % 2 === 1) {
      doll.classList.remove("doll-left");
      doll.classList.add("doll-right");
    }

    wrapper.appendChild(clone);
    party.appendChild(wrapper);
  });
})();

