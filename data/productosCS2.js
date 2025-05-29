// src/components/item/productosCS2.js
const productosCS2 = [
  // Pistolas
  { id: "1", name: "Glock-18 | Gamma doppler ", category: "pistolas", price: 120, img: "https://steamcommunity-a.akamaihd.net/economy/image/class/730/4578738134/600fx375f" },
  { id: "2", name: "USP-S | Orion", category: "pistolas", price: 150, img: "https://www.csgodatabase.com/images/skins/USP-S_Orion.png" },
  { id: "3", name: "Desert Eagle | Blaze", category: "pistolas", price: 900, img: "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_aa_flames_light_png.png" },
  { id: "4", name: "Five-SeveN | Monkey Business", category: "pistolas", price: 350, img: "https://steamuserimages-a.akamaihd.net/ugc/2470862704784683608/558D10C9FA209C93A31F85D4199A00D1DDEC1067/" },
  { id: "5", name: "P2000 | Fire Elemental", category: "pistolas", price: 400, img: "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_hkp2000_cu_p2000_fire_elemental_light_png.png" },
  { id: "6", name: "P250 | Asiimov", category: "pistolas", price: 600, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092lnYmGmOHLP7LWnn8fv8ZyjL2XoIqijFfh_hduN2D1JIKTd1I6YVyD-1Htk73n1pK4vs6cnGwj5Hc6h7wWIQ" },
  { id: "7", name: "Tec-9 | Fuel Injector", category: "pistolas", price: 450, img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_supercharged_light_large.e3ebc20f10eae02790fe95703b6099acca1d1809.png" },

  // Rifles
  { id: "8", name: "M4A1-S | Hyper Beast", category: "rifles", price: 1600, img: "https://th.bing.com/th/id/R.6f4723113730ba6891edba04767a46a0?rik=wo49ZI%2byfEyeTw&pid=ImgRaw&r=0" },
  { id: "9", name: "FAMAS | Doomkitty", category: "rifles", price: 550, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3dTJN4de_gJSSqPv9NLPF2GgI7MEmiLHH99303ACw_kVlYm_7INfEJwI-ZwzT_FG6wu3qgJa4upXXiSw0PlrXJeI" },
  { id: "10", name: "Galil AR | Chatterbox", category: "rifles", price: 600, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-KleX1ILLemFRc7cF4n-SPodvz2gzjrUE4ZWyld4_DdlBrNAyC_ge4xr_qhZO-7s_PwXRmsnJw7GGdwUI2M1HQMQ" },
  { id: "11", name: "AK-47 | Redline", category: "rifles", price: 2000, img: "https://uhvsalvzgjhuyacryiir.supabase.co/storage/v1/object/public/skins/weapon_ak47_cu_fireserpent_ak47_bravo_light_png.png" },
  { id: "12", name: "M4A4 | Howl", category: "rifles", price: 2500, img: "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_m4a1_cu_m4a1_howling_light_png.png" },

  // Cuchillos
  { id: "13", name: "Karambit | Doppler", category: "cuchillos", price: 4000, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20kvrxIbrdklRc6ddzhuzI74nxt1i9rBsofT-ld9LDJgVsY1nX-QLtlejqg5bu7Zydm3Q1uSVzsXmOmUe3ghFKauBxxavJdWR7Gog" },
  { id: "14", name: "Butterfly Knife | Fade", category: "cuchillos", price: 3500, img: "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_knife_butterfly_aa_fade_light_png.png" },
  { id: "15", name: "Shadow Daggers | Crimson Web", category: "cuchillos", price: 3000, img: "https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvcHJvZHVjdHMvY2ViOWJhYjJlZGVlOGNjZjY1YWJlZmJkMzQ3OGZiMDAvYmFja3NpZGUucG5n/1500/auto/85/notrim/f11009670bed1d313217ac14eebbf610.png" },

  // Snipers
  { id: "16", name: "AWP | Dragon Lore", category: "snipers", price: 3500, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv2P9o6migzl_Us5ZmCmLYDDJgU9NA6B81S5yezvg8e-7cycnXJgvHZx5WGdwUJqz1Tl4g" },
  { id: "17", name: "SSG 08 | Blood in the Water", category: "snipers", price: 900, img: "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ssg08_cu_shark_light_png.png" },
];

export default productosCS2;
