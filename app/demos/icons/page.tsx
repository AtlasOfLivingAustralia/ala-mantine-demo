import { ReactElement } from 'react';
import { CodeHighlight } from '@mantine/code-highlight';

import { Title, Text, Stack, Group, Divider, Code, Grid, GridCol, Anchor } from '@mantine/core';

import {
  ALAGeneralContentIcon,
  AllIcon,
  APIIcon,
  BooksIcon,
  CautionIcon,
  CloseIcon,
  DataProjectsIcon,
  DatasetsIcon,
  DotsOneIcon,
  DotsThreeIcon,
  DownloadIcon,
  EnvironmentalLayersIcon,
  ExternalLinkIcon,
  FilterIcon,
  FlagIcon,
  FolderIcon,
  FolderMagnifyIcon,
  HelpArticlesIcon,
  InfoIcon,
  ListIcon,
  MapIcon,
  MapLayersIcon,
  MenuIcon,
  MinusIcon,
  PlayIcon,
  PlusIcon,
  QuickMapIcon,
  RegionsIcon,
  SearchIcon,
  SortIcon,
  SoundwaveIcon,
  SpeciesIcon,
  SpeciesListsIcon,
  StopIcon,
  TickIcon,
  TilesIcon,
  WorldIcon,
  ThemeIcon,
} from 'ala-mantine';

interface DemoIcon {
  name: string;
  icon: any;
}

const icons: DemoIcon[] = [
  {
    name: '1 dot',
    icon: DotsOneIcon,
  },
  {
    name: '3 dots',
    icon: DotsThreeIcon,
  },
  {
    name: 'API',
    icon: APIIcon,
  },
  {
    name: 'Close',
    icon: CloseIcon,
  },
  {
    name: 'Download',
    icon: DownloadIcon,
  },
  {
    name: 'External link',
    icon: ExternalLinkIcon,
  },
  {
    name: 'Filter',
    icon: FilterIcon,
  },
  {
    name: 'Folder',
    icon: FolderIcon,
  },
  {
    name: 'List',
    icon: ListIcon,
  },
  {
    name: 'Map',
    icon: MapIcon,
  },
  {
    name: 'Map layers',
    icon: MapLayersIcon,
  },
  {
    name: 'Menu',
    icon: MenuIcon,
  },
  {
    name: 'Minus',
    icon: MinusIcon,
  },
  {
    name: 'Play',
    icon: PlayIcon,
  },
  {
    name: 'Plus',
    icon: PlusIcon,
  },
  {
    name: 'Search',
    icon: SearchIcon,
  },
  {
    name: 'Sort',
    icon: SortIcon,
  },
  {
    name: 'Soundwave',
    icon: SoundwaveIcon,
  },
  {
    name: 'Tick',
    icon: TickIcon,
  },
  {
    name: 'Tiles',
    icon: TilesIcon,
  },
  {
    name: 'Theme',
    icon: ThemeIcon,
  },
];

const alerts = [
  {
    name: 'Caution',
    icon: CautionIcon,
  },
  {
    name: 'Flag',
    icon: FlagIcon,
  },
  {
    name: 'Info',
    icon: InfoIcon,
  },
  {
    name: 'Stop',
    icon: StopIcon,
  },
];

const searchTypes = [
  {
    name: 'ALA general content',
    icon: ALAGeneralContentIcon,
  },
  {
    name: 'All',
    icon: AllIcon,
  },
  {
    name: 'Data projects',
    icon: DataProjectsIcon,
  },
  {
    name: 'Datasets',
    icon: DatasetsIcon,
  },
  {
    name: 'Environmental layers',
    icon: EnvironmentalLayersIcon,
  },
  {
    name: 'Help articles',
    icon: HelpArticlesIcon,
  },
  {
    name: 'Regions/localities',
    icon: RegionsIcon,
  },
  {
    name: 'Species',
    icon: SpeciesIcon,
  },
  {
    name: 'Species lists',
    icon: SpeciesListsIcon,
  },
];

const quicklinks = [
  {
    name: 'Books',
    icon: BooksIcon,
  },
  {
    name: 'Folder magnify',
    icon: FolderMagnifyIcon,
  },
  {
    name: 'Map',
    icon: QuickMapIcon,
  },
  {
    name: 'World',
    icon: WorldIcon,
  },
];

const iconExampleCode = `
import { MapIcon } from 'ala-mantine';

function MyComponent() {
  return <MapIcon size={24} />
}`;

export default function IconsDemoPage() {
  return (
    <>
      <Title>Icons</Title>
      <Divider my="xl" />
      <Stack mt="xs" gap="xl">
        <Text>ALA's main set of icons can easily be added using the following code:</Text>
        <CodeHighlight language="tsx" code={iconExampleCode} withCopyButton={false} />
        <Text>
          Icons assume the color of their surrounding text/content (supporting light/dark theme out
          of the box), and include a handy <Code>size</Code> prop for resizing.
        </Text>
        <Text>
          Any additional icons missing from the ALA provided ones should be backfilled using{' '}
          <Anchor href="https://docs.fontawesome.com/v5/web/use-with/react" target="_blank">
            Font Awesome
          </Anchor>{' '}
          icons.
        </Text>
        <Title order={4}>Main</Title>
        <Grid>
          {icons.map(({ name, icon: Icon }) => (
            <GridCol span={{ base: 12, sm: 6, xl: 4 }} key={name}>
              <Stack>
                <Group justify="space-between">
                  <Group gap="xs">
                    <Icon />
                    <Text>{name}</Text>
                  </Group>
                  <Code>{`<${Icon.name} />`}</Code>
                </Group>
              </Stack>
            </GridCol>
          ))}
        </Grid>
        <Title order={4}>Alerts</Title>
        <Grid>
          {alerts.map(({ name, icon: Icon }) => (
            <GridCol span={{ base: 12, sm: 6, xl: 4 }} key={name}>
              <Stack>
                <Group justify="space-between">
                  <Group gap="xs">
                    <Icon />
                    <Text>{name}</Text>
                  </Group>
                  <Code>{`<${Icon.name} />`}</Code>
                </Group>
              </Stack>
            </GridCol>
          ))}
        </Grid>
        <Title order={4}>Search Types</Title>
        <Grid>
          {searchTypes.map(({ name, icon: Icon }) => (
            <GridCol span={{ base: 12, sm: 12, md: 6, xl: 4 }} key={name}>
              <Stack>
                <Group justify="space-between">
                  <Group gap="xs">
                    <Icon color="grey" />
                    <Text>{name}</Text>
                  </Group>
                  <Code>{`<${Icon.name} />`}</Code>
                </Group>
              </Stack>
            </GridCol>
          ))}
        </Grid>
        <Title order={4}>Quicklinks</Title>
        <Text>
          The quicklink icons <b>do not</b> assume the colour of their surrounding text/content, but
          rather, render a different light/dark variant depending on the theme. These icons are
          dynamically sized based on whether the page's size (mobile/desktop).
        </Text>
        <Grid mb="xl" pb="xl">
          {quicklinks.map(({ name, icon: Icon }) => (
            <GridCol span={{ base: 6, xs: 6, sm: 4, md: 3 }} key={name}>
              <Stack gap="xs" align="center">
                <Icon />
                <Text>{name}</Text>
                <Code>{`<${Icon.name} />`}</Code>
              </Stack>
            </GridCol>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
