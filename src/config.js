const { MODE } = require("./blendMode.js");
const description =
  "Some description for NFT";
const baseUri = "ipfs://QmZRsuCAnAjgbuwGriLUjvrG2496TvvbwyfyUh261KEkEV";

const layerConfigurations = [
  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "1-background" },
      { name: "2-face" },
    ],
  },
];

const format = {
  width: 260,
  height: 260,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
