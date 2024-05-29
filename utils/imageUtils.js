const getImageUrl = (category) => {
    const imageMap = {
      "alternative-dispute-resolution": "alternative-dispute-resolution.webp",
      "banking-finance": "banking-finance.webp",
      "bankruptcy-insolvency": "bankruptcy-insolvency.webp",
      "building-and-construction": "building-and-construction.webp",
      "commercial-law": "commercial-law.webp",
      "commercial-litigation": "commercial-litigation.webp",
      "dispute-resolution": "dispute-resolution.webp",
      "estate-planning-disputes": "estate-planning-disputes.webp",
      "family-law": "Family Law Service.webp", 
      "franchising-licencing": "franchising-licencing.webp",
      "immigration": "immigration.webp",
      "insurance-law": "Insurance-Law-Service.webp",
      "italian-law": "italian-law.webp",
      "property-law": "property-law.webp",
      "workplace-relations-safety": "workplace-relations-safety.webp",
      "banking-financial-services":"banking-finance.webp"
    };
  
    return `/assets/${imageMap[category] || 'default-image.webp'}`;
  };
  
  export default getImageUrl;
  