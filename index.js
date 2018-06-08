let libmoji = require("./node_modules/libmoji/libmoji.js");

let gender = libmoji.genders[libmoji.randInt(2)];
let style = libmoji.styles[libmoji.randInt(3)];
let traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
let outfit = libmoji.randOutfit(
  libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0])))
);

console.log(
  libmoji.buildUrl("fashion", 3, gender[1], style[1], 0, traits, outfit)
);
/* console would print a random image url */
