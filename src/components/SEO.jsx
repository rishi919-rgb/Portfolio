import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const siteConfig = {
  siteUrl: 'https://rishikesh-singh.vercel.app',
  title: 'Rishikesh Singh | Full Stack Developer Portfolio',
  description:
    'Portfolio of Rishikesh Singh, a full stack developer building responsive React frontends, scalable Node.js backends, and AI-powered web experiences.',
  keywords:
    'Rishikesh Singh, full stack developer, React developer, Node.js developer, JavaScript portfolio, MERN stack, frontend developer, backend developer, web developer portfolio',
  author: 'Rishikesh Singh',
  image: 'https://rishikesh-singh.vercel.app/og-image.svg',
  imageAlt: 'Rishikesh Singh portfolio social preview',
  twitterHandle: '@Rishike7157746',
  sameAs: [
    'https://github.com/rishi919-rgb',
    'https://www.linkedin.com/in/rishikesh-singh-45661428a/',
    'https://x.com/Rishike7157746',
    'https://www.instagram.com/_rishikesh_singh__',
    'https://leetcode.com/u/rishi919/',
    'https://youtube.com/@rishikesh919',
  ],
  email: 'rishikesh.singhges@gmail.com',
};

const projectMeta = {
  drishti: {
    title: 'Drishti - The Third Eye | Rishikesh Singh',
    description:
      'Case study for Drishti, an AI visual assistant project focused on computer vision, scene understanding, and accessibility for visually impaired users.',
  },
  fasalrakshak: {
    title: 'FasalRakshak AI | Rishikesh Singh',
    description:
      'Case study for FasalRakshak AI, an agricultural intelligence platform combining React, Node.js, MongoDB, and AI-powered farming support.',
  },
  truthstorm: {
    title: 'TruthStorm AI | Rishikesh Singh',
    description:
      'Case study for TruthStorm AI, a misinformation analysis and digital forensics platform with multimodal verification workflows.',
  },
  'debate-ai': {
    title: 'Debate-AI | Rishikesh Singh',
    description:
      'Case study for Debate-AI, an AI argument coach for rhetoric feedback, logic scoring, and fallacy detection.',
  },
  'movie-explorer': {
    title: 'Movie Explorer | Rishikesh Singh',
    description:
      'Case study for Movie Explorer, a React-based media discovery app with fluid UI, persistence, and search-focused experience design.',
  },
};

function SEO() {
  const location = useLocation();
  const path = location.pathname || '/';
  const projectId = path.startsWith('/project/') ? path.replace('/project/', '') : null;
  const activeProject = projectId ? projectMeta[projectId] : null;
  const pageTitle = activeProject?.title || siteConfig.title;
  const pageDescription = activeProject?.description || siteConfig.description;
  const canonicalUrl = `${siteConfig.siteUrl}${path === '/' ? '/' : path}`;
  const pageType = activeProject ? 'article' : 'website';
  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.siteUrl}/#person`,
        name: siteConfig.author,
        url: siteConfig.siteUrl,
        image: siteConfig.image,
        jobTitle: 'Full Stack Developer',
        email: `mailto:${siteConfig.email}`,
        sameAs: siteConfig.sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.siteUrl}/#person`,
        },
        inLanguage: 'en',
      },
      {
        '@type': activeProject ? 'WebPage' : 'ProfilePage',
        '@id': `${canonicalUrl}#page`,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          '@id': `${siteConfig.siteUrl}/#website`,
        },
        about: {
          '@id': `${siteConfig.siteUrl}/#person`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: siteConfig.image,
        },
      },
    ],
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#06131f" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={pageType} />
      <meta property="og:site_name" content="Rishikesh Singh Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={siteConfig.image} />
      <meta property="og:image:alt" content={siteConfig.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={siteConfig.image} />
      <meta name="twitter:image:alt" content={siteConfig.imageAlt} />

      <script type="application/ld+json">{JSON.stringify(pageStructuredData)}</script>
    </Helmet>
  );
}

export default SEO;
