import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {
  isPageNotFound,
  noIndex,
  pageDescription,
  pageOgSiteName,
  pageTitle,
} from '../utils/seo';

const SITE_URL = 'https://dapp.ekoketoken.com';

const SeoEngine = () => {
  const { pathname } = useLocation();
  // states
  const [title, setTitle] = React.useState(pageTitle(pathname));
  const [description, setDescription] = React.useState(
    pageDescription(pathname),
  );
  const [ogSiteName, setOgSiteName] = React.useState(pageDescription(pathname));
  const [noindex, setNoindex] = React.useState(noIndex(pathname));

  const canonicalUrl = `${SITE_URL}${pathname}`;

  React.useEffect(() => {
    setTitle(pageTitle(pathname));
    setDescription(pageDescription(pathname));
    setOgSiteName(pageOgSiteName(pathname));
    setNoindex(noIndex(pathname));
  }, [pathname]);

  return (
    <Helmet>
      <html lang={'en_US'} />
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={'en_US'} />
      {(isPageNotFound(pathname) || noindex) && (
        <meta name="googlebot" content="noindex, nofollow" />
      )}
    </Helmet>
  );
};

export default SeoEngine;
