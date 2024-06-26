import * as React from 'react';

import Container from '../reusable/Container';
import IcConnect from '../IcConnect';

import Link from '../reusable/Link';

const Desktop = () => (
  <Container.FlexRow className="block sm:hidden justify-center items-center py-4 px-4">
    <Container.FlexRow className="items-center gap-8">
      <Container.FlexRow className="items-center">
        <Container.Container className="border-brandRed border-b-4 py-2">
          <span className="text-lg font-medium text-brand">Home</span>
        </Container.Container>
      </Container.FlexRow>
      <Container.Container className="py-2">
        <Link.Default disabled className="text-lg hover:cursor-not-allowed">
          Game
        </Link.Default>
      </Container.Container>
      <Container.Container className="py-2">
        <Link.Default
          href={'https://ekoketoken.com'}
          target="_blank"
          className="text-lg"
        >
          EKOKE Token
        </Link.Default>
      </Container.Container>
      <Container.Container className="py-2">
        <Link.Default disabled className="text-lg hover:cursor-not-allowed">
          Market place
        </Link.Default>
      </Container.Container>
      <IcConnect />
    </Container.FlexRow>
  </Container.FlexRow>
);

export default Desktop;
