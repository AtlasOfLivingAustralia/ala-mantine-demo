import {
  Container,
  Group,
  Stack,
  Anchor,
  Divider,
  Grid,
  GridCol,
  Text,
  Space,
  Title,
  Table,
  TableTr,
  TableTh,
  TableTd,
  TableThead,
  TableTbody,
} from '@mantine/core';
import { IconInfoCircleFilled } from '@tabler/icons-react';

import NavTabs from '../_components/NavTabs';

const rows = [
  {
    name: 'A-Wurrpbarn',
    languageGroup: 'Ngandi',
  },
  {
    name: 'Bagabaga',
    languageGroup: 'Yuwaalayaay',
  },
  {
    name: 'Bandubugarri',
    languageGroup: 'Alawa',
  },
  {
    name: 'Barrgay',
    languageGroup: 'Gamilaraay/Gamilaroi/Kamilaroi',
  },
  {
    name: 'Barrgay',
    languageGroup: 'Yuwaalayaay',
  },
  {
    name: 'Dhinawan',
    languageGroup: 'Yuwaalayaay',
  },
  {
    name: 'Dhinawan',
    languageGroup: 'Gamilaraay / Gamilaroi / Kamilaroi',
  },
  {
    name: 'Gululugululug',
    languageGroup: 'Wubuy',
  },
  {
    name: 'Guluwurdu',
    languageGroup: 'Alawa',
  },
  {
    name: 'Guriri',
    languageGroup: 'Marra',
  },
  {
    name: 'Gurlppanppanh',
    languageGroup: 'Rembarrnga',
  },
  {
    name: 'Jinarlirri',
    languageGroup: 'Marra',
  },
  {
    name: 'Jinarlirri',
    languageGroup: 'Alawa',
  },
  {
    name: 'Jiwirdiwirdi',
    languageGroup: 'Marra',
  },
  {
    name: 'Lmiyu',
    languageGroup: 'Kriol',
  },
  {
    name: 'Moymoy',
    languageGroup: 'Ngalakgan',
  },
  {
    name: 'Ngurrurndutj',
    languageGroup: 'Ngalakgan',
  },
  {
    name: 'Waayin',
    languageGroup: 'Wubuy',
  },
  {
    name: 'Waitj',
    languageGroup: 'Wudjari',
  },
  {
    name: 'Weitj',
    languageGroup: 'Noongar',
  },
  {
    name: 'Wurrpan',
    languageGroup: 'Ritharrŋu',
  },
  {
    name: 'Wurrparn',
    languageGroup: 'Rembarrnga',
  },
];

export default function SpeciesNames() {
  return (
    <>
      <NavTabs value="names" />
      <Container size="lg">
        <Stack>
          <Title order={3}>Scientific</Title>
          <Group>
            <Text w={375}>
              <i>Dromaius novaehollandiae</i> (Latham, 1790)
            </Text>
            <Anchor>Australian Faunal Directory</Anchor>
          </Group>
          <Divider my={15} />
          <Title order={3}>Common</Title>
          <Group>
            <Text w={375}>Emu</Text>
            <Anchor>Australian Faunal Directory</Anchor>
          </Group>
          <Divider my={15} />
          <Title order={3}>Indigenous</Title>
          <Group gap={5} mt={15}>
            <IconInfoCircleFilled size={14} />
            <Text fw="bold">About native / introduced</Text>
          </Group>
          <Text>
            Classification of organisms allows us to group them and imply how they are related to
            each other. This includes a hierarchy of ranks e.g. kingdom, phylum etc. for more
            information see <Anchor>An introduction to taxonomy.</Anchor>
          </Text>
          <Table mt={15}>
            <TableThead>
              <TableTr>
                <TableTh>Name</TableTh>
                <TableTh>See language group</TableTh>
              </TableTr>
            </TableThead>
            <TableTbody>
              {rows.map(({ name, languageGroup }) => (
                <TableTr key={`${name}-${languageGroup}`}>
                  <TableTd>
                    <Anchor>{name}</Anchor>
                  </TableTd>
                  <TableTd>
                    <Anchor>{languageGroup}</Anchor>
                  </TableTd>
                </TableTr>
              ))}
            </TableTbody>
          </Table>
        </Stack>
        <Space h={72} />
      </Container>
    </>
  );
}
