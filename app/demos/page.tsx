import { Title, Text, Divider, Grid, GridCol, Card, Stack } from '@mantine/core';
import { IconColorSwatch, IconTable, IconTypography } from '@tabler/icons-react';
import Link from 'next/link';

interface DemoLink {
  name: string;
  path: string;
  icon?: any;
}

const foundationLinks: DemoLink[] = [
  {
    path: 'colours',
    name: 'Colours',
    icon: IconColorSwatch,
  },
  {
    path: 'tables',
    name: 'Tables',
    icon: IconTable,
  },
  {
    path: 'typography',
    name: 'Typography',
    icon: IconTypography,
  },
];

function FoundationLink({ link }: { link: DemoLink }) {
  const { name, path, icon: Icon } = link;
  return (
    <Card
      component={Link}
      href={`/demos/${path}`}
      radius="lg"
      withBorder
      style={{ borderStyle: 'dashed' }}
    >
      <Stack align="center">
        <Icon size={42} />
        <Text fw="bold">{name}</Text>
      </Stack>
    </Card>
  );
}

const demoLinks = [
  {
    path: 'accordions',
    name: 'Accordions',
  },
  {
    path: 'buttons',
    name: 'Buttons',
  },
  {
    path: 'calloutboxes',
    name: 'Callout Boxes',
  },
  {
    path: 'conservation',
    name: 'Conservation Status',
  },
  {
    path: 'controls',
    name: 'Controls',
  },
  {
    path: 'icons',
    name: 'Icons',
  },
  {
    path: 'links',
    name: 'Links',
  },
  {
    path: 'logos',
    name: 'Logos',
  },
  {
    path: 'headerfooter',
    name: 'Header & Footer',
  },
];

interface DemoLinkProps {
  link: DemoLink;
}

function DemoLink({ link }: DemoLinkProps) {
  return (
    <Card component={Link} href={`/demos/${link.path}`} shadow="sm" radius="md" withBorder>
      <Text>{link.name}</Text>
    </Card>
  );
}

export default function DemoPage() {
  return (
    <>
      <Title>Demos</Title>
      <Divider opacity={0.2} my="xl" />
      <Title order={3} mb="xl">
        Foundation Elements
      </Title>
      <Grid>
        {foundationLinks.map((link) => (
          <GridCol key={link.name} span={4} px="md" pb="lg">
            <FoundationLink link={link} />
          </GridCol>
        ))}
      </Grid>
      <Title order={3} my="xl">
        Components Guide
      </Title>
      <Grid>
        {demoLinks.map((link) => (
          <GridCol key={link.path} span={4} px="md" pb="lg">
            <DemoLink link={link} />
          </GridCol>
        ))}
      </Grid>
    </>
  );
}
