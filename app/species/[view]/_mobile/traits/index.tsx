import {
  Group,
  Stack,
  Anchor,
  Text,
  Space,
  Table,
  TableTr,
  TableTh,
  TableTd,
  TableThead,
  TableTbody,
} from '@mantine/core';

import { IconInfoCircleFilled } from '@tabler/icons-react';
import { AusTraitsLogo } from '../../../../../ala-mantine';

const data = {
  numeric_traits: [
    {
      unit: '',
      min: '',
      max: '',
      mean: '20',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Invertebrates',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Vend',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Vect',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Vfish',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Scavenged',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Fruit',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Nectar',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '30',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Seed',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Plant O',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '30',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet-5 Cat',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '20',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'Diet- Source',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'For Strat-watbelowsurf',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '0',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'For Strat-wataroundsurf',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '20',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'For Strat-ground',
    },
    {
      unit: '',
      min: '',
      max: '',
      mean: '80',
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_name: 'For Strat-understory',
    },
  ],
  categorical_triats: [
    {
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_values: 'Emus',
      trait_name: 'Common name family',
    },
    {
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_values: 'Emu',
      trait_name: 'English',
    },
    {
      taxon_name: 'Dromaius novaehollandiae',
      definition: '',
      trait_values: 'Omnivore',
      trait_name: 'Diet- Certainty',
    },
  ],
};

export default function SpeciesTraits() {
  return (
    <Stack my={15} gap={15}>
      <Group gap={5}>
        <IconInfoCircleFilled size={14} />
        <Text fw="bold">About traits</Text>
      </Group>
      <Text mt={-10}>
        The trait data shown here are a selection from <Anchor>AusTraits</Anchor>, an open-source,
        harmonised database of Australian plant trait data, sourced from individual researchers,
        government entities (e.g. herbaria) or NGOs across Australia.
      </Text>
      <Text>
        Traits vary in scope from morphological attributes (e.g. leaf area, seed mass, plant height)
        to ecological attributes (e.g. fire response, flowering time, pollinators) and physiological
        measures of performance (e.g. photosynthetic gas exchange, water-use efficiency.){' '}
        <Anchor>Find out more</Anchor>
      </Text>
      <AusTraitsLogo />
      <Table>
        <TableThead>
          <TableTr>
            <TableTh>Name</TableTh>
            <TableTh>Value</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {data.categorical_triats.map((trait) => (
            <TableTr key={trait.trait_name}>
              <TableTd>{trait.trait_name}</TableTd>
              <TableTd>{trait.trait_values}</TableTd>
            </TableTr>
          ))}
          {data.numeric_traits.map((trait) => (
            <TableTr key={trait.trait_name}>
              <TableTd>{trait.trait_name}</TableTd>
              <TableTd>{trait.mean}</TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
      <Space h={15} />
    </Stack>
  );
}
