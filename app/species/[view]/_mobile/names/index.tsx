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
    <Stack my={15} gap={15}>
      <Title order={3}>Scientific</Title>
      <Text>
        <i>Dromaius novaehollandiae</i> (Latham, 1790)
      </Text>
      <Anchor mt={-10}>Australian Faunal Directory</Anchor>
      <Divider my={15} />
      <Title order={3}>Common</Title>
      <Group>
        <Text>Emu</Text>
        <Anchor>Australian Faunal Directory</Anchor>
      </Group>
      <Divider my={15} />
      <Title order={3}>Indigenous</Title>
      <Group gap={5} mt={15}>
        <IconInfoCircleFilled size={14} />
        <Text fw="bold">About indigenous names</Text>
      </Group>
      <Text>
        The links from the Indigenous name provide more information about Indigenous Ecological
        Knowledge (IEK) relating to the species. The link from language links to AIATSIS information
        about the language.
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
      <Space h={15} />
    </Stack>
  );
}
