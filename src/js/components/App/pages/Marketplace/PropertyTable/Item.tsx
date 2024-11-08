import * as React from 'react';
import * as Icon from 'react-feather';

import { Contract } from '../../../../../data/contract';
import Container from '../../../../reusable/Container';
import { Route } from '../../../../../utils/routes';
import Paragraph from '../../../../reusable/Paragraph';

interface Props {
  contract: Contract;
}

const Item = ({ contract: { id, realEstate } }: Props) => (
  <a className="block" href={Route.marketplaceRealEstateUrl(id)}>
    <Container.Card className="bg-white !p-0 transition-transform transform scale-100 hover:scale-105 rounded-lg h-full">
      <Container.FlexCols className="items-start gap-4">
        <Container.Container>
          <img
            src={realEstate.image}
            alt={realEstate.name}
            className="w-full sm:object-cover sm:h-[300px] rounded-t-lg"
            width={300}
            height={200}
          />
        </Container.Container>
        <Container.FlexCols className="px-4 pb-4 gap-2 justify-between h-full">
          <span className="block text-brand text-lg font-semibold">
            {realEstate.name}
          </span>
          <span className="text-gray-500">
            <Icon.DollarSign size={16} className="text-gray-500 mr-2 inline" />
            {realEstate.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
          <span className="text-gray-500">
            <Icon.MapPin size={16} className="text-gray-500 mr-2 inline" />
            {realEstate.address}
          </span>
          <span className="text-gray-500">
            <Icon.Box size={16} className="text-gray-500 mr-2 inline" />
            {Math.floor(Math.random() * 6) + 1} Rooms -{' '}
            {Math.floor(Math.random() * 2) + 1} Bathrooms
          </span>
          <Paragraph.Leading>{realEstate.description}</Paragraph.Leading>
        </Container.FlexCols>
      </Container.FlexCols>
    </Container.Card>
  </a>
);

export default Item;
