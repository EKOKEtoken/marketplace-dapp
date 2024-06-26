import * as React from 'react';

import Container from './reusable/Container';
import Page from './reusable/Page';
import Header from './Header';
import Footer from './Footer';
import Home from './App/pages/Home';

const AppLayout = () => (
  <Page.BlankPage>
    <Header />
    <Container.PageContent className="py-8 min-h-[80vh]">
      <Home />
    </Container.PageContent>
    <Footer />
  </Page.BlankPage>
);

export default AppLayout;
