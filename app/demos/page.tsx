import { Title, Text, Divider, Grid, GridCol, Card, Stack } from '@mantine/core';
import { IconColorSwatch, IconTable, IconTypography } from '@tabler/icons-react';
import Link from 'next/link';

interface DemoLink {
  name: string;
  path: string;
  icon: any;
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

interface DemoLinkProps {
  name: string;
}

function DemoLink({ name }: DemoLinkProps) {
  return (
    <Card component={Link} href={`/demos/${name}`} shadow="sm" radius="md" withBorder>
      <Text>{name}</Text>
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
        {[
          'accordions',
          'buttons',
          'calloutboxes',
          'conservation',
          'controls',
          'icons',
          'links',
          'logos',
        ].map((link) => (
          <GridCol key={link} span={4} px="md" pb="lg">
            <DemoLink name={link} />
          </GridCol>
        ))}
      </Grid>
    </>
  );
}
