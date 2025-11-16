// app/head.tsx

export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sowepro",
    image: "https://www.sowepro.cz/assets/og-image.jpg",
    url: "https://www.sowepro.cz",
    telephone: "+420737704705",
    email: "info@sowepro.cz",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
    },
    description:
      "Sowepro — moderní webové stránky, videoprodukce a foto tvorba.",
  };

  return (
    <>
      <title>Sowepro — Moderní weby a videoprodukce</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
