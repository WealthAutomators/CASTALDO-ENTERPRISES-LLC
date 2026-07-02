import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ASSETS = "/Users/solomon/.cursor/projects/Users-solomon-Documents-LLC-Websites-Adokole-LLC/assets";

const IMAGES = {
  bathGels: "Bath_Products_Photo-14c88d9b-1430-4eb1-8962-228c34a825f2.png",
  rolledWhiteYellow: "Bath_Towels_Photo__9_-d5c00472-89ed-4dd6-a607-3c34444e096e.png",
  taupeSet: "Bath_Towels_Photo__12_-3033b5a1-8f42-484f-b1ad-2a89f429e352.png",
  bathTablets: "Bath_Products_Photo__5_-6cc8cd8d-ccb8-40b9-9205-0673e1999567.png",
  marbleSkincare: "Bath_Products_Photo__2_-2c29c1da-2db1-4436-81bc-1fadbb71d91c.png",
  spaWrap: "Bath_Towels_Photo__2_-3a16d713-9fc7-45b9-b5e3-5fd306840051.png",
  bathCaddy: "Bath_Products_3872908-0487acc6-f86a-47fe-9c22-a8aed39c8869.png",
  luxuryBathroom: "Bath_Products_4153152-03c18614-a1f9-4151-b92a-2a33c7f86e81.png",
  bathBombs: "Bath_Products_Photo__4_-13beee75-2298-4b7c-b1fe-811f939e1a26.png",
  whiteSpaTowel: "Bath_Towels_Photo__6_-6e272f10-e751-4494-ae2e-b624913ca9ec.png",
  waffleOutdoor: "Bath_Towels_Photo__11_-b4f56828-95f1-45c1-8b37-77298d1cd1ce.png",
  mauveGreyRolled: "Bath_Towels_Photo__10_-9fe90cf8-4bef-412f-a945-39610933d556.png",
  navyStripeShelf: "Bath_Towels_Photo__3_-278d335b-2549-4a15-a478-89603b3ba482.png",
  soapMarble: "Bath_Products_Photo__1_-7354931d-824e-4425-a0f4-22a18613c711.png",
  bathTray: "Bath_Towels_Photo__1_-9be839b8-aeaf-4ab3-87aa-4515181cbe2b.png",
  spaStool: "Bath_Products_Photo__3_-7e61c34d-5731-473c-a68e-a25da5cf9f39.png",
  wickerResort: "Bath_Towels_Photo__4_-58be9692-6d5d-4f20-bd9d-2c2101bb5aa1.png",
  marseilleSoap: "Bath_Towels_Photo__8_-8e283e21-7619-4080-8c17-9e931393948c.png",
  travelTowels: "Bath_Towels_Photo__5_-167f4027-fd7a-44a3-a22c-0cc46016d0a6.png",
  hookRack: "Bath_Towels_Photo__7_-2445f08b-0210-44f5-bf59-0827ff8aed49.png",
  beigeStack: "Bath_Towels_Photo-6bf4690e-263d-4f35-85cf-bd536d92b7c6.png",
  colorCabinet: "Bath_Towels_Photo__13_-a84db02a-8cb4-4448-a162-410ce574702b.png",
};

/** One custom image per product — never shared with categories/banners/instagram */
const DESTINATIONS = [
  [IMAGES.taupeSet, "public/products/luxury-cotton-bath-towel-set-1.jpg"],
  [IMAGES.beigeStack, "public/products/organic-bath-sheet-1.jpg"],
  [IMAGES.whiteSpaTowel, "public/products/spa-terry-bath-towel-1.jpg"],
  [IMAGES.travelTowels, "public/products/quick-dry-bath-towel-1.jpg"],
  [IMAGES.mauveGreyRolled, "public/products/striped-bath-towel-pair-1.jpg"],
  [IMAGES.rolledWhiteYellow, "public/products/premium-hand-towel-set-1.jpg"],
  [IMAGES.wickerResort, "public/products/coastal-stripe-beach-towel-1.jpg"],
  [IMAGES.marseilleSoap, "public/products/tropical-print-beach-towel-1.jpg"],
  [IMAGES.bathTray, "public/products/cabana-stripe-beach-towel-1.jpg"],
  [IMAGES.spaWrap, "public/products/plush-hooded-bathrobe-1.jpg"],
  [IMAGES.waffleOutdoor, "public/products/waffle-knit-robe-1.jpg"],
  [IMAGES.luxuryBathroom, "public/products/spa-kimono-robe-1.jpg"],
  [IMAGES.spaStool, "public/products/microfiber-cleaning-cloth-set-1.jpg"],
  [IMAGES.bathCaddy, "public/products/glass-cleaning-cloths-1.jpg"],
  [IMAGES.soapMarble, "public/products/soft-face-cloth-set-1.jpg"],
  [IMAGES.marbleSkincare, "public/products/bamboo-face-towels-1.jpg"],
  [IMAGES.bathBombs, "public/products/spa-washcloth-trio-1.jpg"],
  [IMAGES.bathGels, "public/products/exfoliating-face-cloths-1.jpg"],
  [IMAGES.navyStripeShelf, "public/products/towel-ladder-rack-1.jpg"],
  [IMAGES.hookRack, "public/products/wall-mounted-towel-hooks-1.jpg"],
  [IMAGES.colorCabinet, "public/products/towel-storage-basket-1.jpg"],
  [IMAGES.bathTablets, "public/products/monogrammed-gift-set-1.jpg"],
];

function convertToJpg(src, dest, width) {
  const destDir = path.dirname(dest);
  fs.mkdirSync(destDir, { recursive: true });
  const tmp = dest.replace(/\.jpg$/, ".tmp.jpg");
  execSync(`sips -s format jpeg "${src}" --out "${tmp}"`, { stdio: "pipe" });
  if (width) {
    execSync(`sips -Z ${width} "${tmp}" --out "${dest}"`, { stdio: "pipe" });
    fs.unlinkSync(tmp);
  } else {
    fs.renameSync(tmp, dest);
  }
}

if (!fs.existsSync(ASSETS)) {
  console.error(`Assets folder not found: ${ASSETS}`);
  console.error("Skipping — product images in public/ are unchanged.");
  console.error("Use npm run images:homepage for category/banner/instagram slots.");
  process.exit(0);
}

for (const [file, dest] of DESTINATIONS) {
  const src = path.join(ASSETS, file);
  if (!fs.existsSync(src)) {
    console.error(`Missing: ${src}`);
    process.exit(1);
  }
  const fullDest = path.join(ROOT, dest);
  convertToJpg(src, fullDest, 900);
  console.log(`✓ ${dest}`);
}

console.log(`\nApplied ${DESTINATIONS.length} product images.`);
console.log("Homepage categories/banners/instagram: run npm run images:homepage");
