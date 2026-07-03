const { Jimp, intToRGBA } = require("jimp");

async function main() {
  const src = process.argv[2];
  const dest = process.argv[3];
  const img = await Jimp.read(src);
  const { width, height } = img.bitmap;

  // sample background color from the four corners
  const samples = [
    img.getPixelColor(2, 2),
    img.getPixelColor(width - 3, 2),
    img.getPixelColor(2, height - 3),
    img.getPixelColor(width - 3, height - 3),
  ].map((c) => intToRGBA(c));

  const bg = samples.reduce(
    (acc, c) => ({ r: acc.r + c.r / 4, g: acc.g + c.g / 4, b: acc.b + c.b / 4 }),
    { r: 0, g: 0, b: 0 }
  );

  const lowThreshold = 18; // fully transparent below this distance
  const highThreshold = 55; // fully opaque above this distance

  img.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    const dist = Math.sqrt(
      (r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2
    );

    let alpha;
    if (dist <= lowThreshold) {
      alpha = 0;
    } else if (dist >= highThreshold) {
      alpha = 255;
    } else {
      alpha = Math.round(
        ((dist - lowThreshold) / (highThreshold - lowThreshold)) * 255
      );
    }

    this.bitmap.data[idx + 3] = alpha;
  });

  await img.write(dest);
  console.log("wrote", dest);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
