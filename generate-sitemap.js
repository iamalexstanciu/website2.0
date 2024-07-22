const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { resolve } = require("path");

// URL-urile site-ului tău
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  // Adaugă toate rutele pe care vrei să le incluzi în sitemap
];

// Crearea fluxului de sitemap
const sitemap = new SitemapStream({ hostname: "https://upvisionmedia.com" });
const writeStream = createWriteStream(resolve("./public/sitemap.xml"));

// Adăugarea URL-urilor la sitemap
links.forEach((link) => sitemap.write(link));

// Închiderea fluxului și scrierea în fișier
sitemap.end();

writeStream.on("finish", () => {
  console.log("Sitemap-ul a fost generat cu succes!");
});

sitemap.pipe(writeStream).on("error", (error) => {
  console.error("Eroare la generarea sitemap-ului:", error);
});
