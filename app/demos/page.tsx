import { Title, Text, Divider, Grid, GridCol, Card } from '@mantine/core';
import Link from 'next/link';

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
        {['typography', 'links', 'tables', 'colours', 'logos', 'accordions'].map((link) => (
          <GridCol key={link} span={4} px="md" pb="lg">
            <DemoLink name={link} />
          </GridCol>
        ))}
      </Grid>
      <Title order={3} my="xl">
        Components Guide
      </Title>
      <Grid>
        {['buttons', 'calloutboxes'].map((link) => (
          <GridCol key={link} span={4} px="md" pb="lg">
            <DemoLink name={link} />
          </GridCol>
        ))}
      </Grid>
    </>
  );
}
