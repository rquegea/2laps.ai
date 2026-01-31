'use client';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '2laps',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'The first AI-driven Strategic Intelligence Engine. We automate market reasoning to solve the Now What?',
    operatingSystem: 'Web',
    provider: {
      '@type': 'Organization',
      name: '2laps',
      url: 'https://2laps.ai',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'r@2laps.ai',
          contactType: 'Customer Service',
          name: 'Rodrigo Quesada',
        },
        {
          '@type': 'ContactPoint',
          email: 's@2laps.ai',
          contactType: 'Customer Service',
          name: 'Suso Quesada',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
