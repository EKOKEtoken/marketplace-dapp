import * as React from 'react';

import Container from '../reusable/Container';
import IcConnect from '../IcConnect';

import Link from '../reusable/Link';
import { Route } from '../../utils/routes';
import TopbarLink from './TopbarLink';

const Desktop = () => (
  <div className="fixed block sm:hidden left-0 top-0 h-[80px] w-full bg-page z-40 shadow-sm">
    <Container.FlexRow className="justify-center items-center py-4 px-4">
      <Container.FlexRow className="items-center gap-8">
        <TopbarLink name={'Home'} href={Route.HOME} />
        <TopbarLink name={'Marketplace'} href={Route.MARKETPLACE} />
        <TopbarLink name={'Buy Process'} href={Route.TIMELINE} />
        <TopbarLink name={'User Stories'} href={Route.USER_STORIES} />
        <Container.Container className="py-2">
          <Link.Default
            href={'https://ekoketoken.com'}
            target="_blank"
            className="text-lg"
          >
            EKOKE Token
          </Link.Default>
        </Container.Container>
        <IcConnect />
      </Container.FlexRow>
    </Container.FlexRow>
  </div>
);

export default Desktop;
