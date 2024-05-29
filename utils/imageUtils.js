const getImageUrl = (category) => {
  const imageMap = {
      "dispute-resolution": "alternative-dispute-resolution.webp",
      "construction-infrastructure": "banking-finance.webp",
      "employment-law": "bankruptcy-insolvency.webp",
      "building-and-construction": "building-and-construction.webp",
      "commercial-law": "commercial-law.webp",
      "commercial-litigation": "commercial-litigation.webp",
      "tax-customs": "dispute-resolution.webp",
      "trade-practice-anti-trust": "estate-planning-disputes.webp",
      "estate-planning-disputes": "Family Law Service.webp",
      "intellectual-property-technology": "franchising-licencing.webp",
      "real-estate-property": "Insurance-Law-Service.webp",
      "project-finance-ppp-public-procurement": "property-law.webp",
      "mining-energy": "workplace-relations-safety.webp",
      "banking-financial-services": "banking-finance.webp"
  };

  return `/assets/${imageMap[category] || 'default-image.webp'}`;
};

export default getImageUrl;
