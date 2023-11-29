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
      <Grid>
        {['buttons', 'tabs', 'cards', 'pagination'].map((link) => (
          <GridCol key={link} span={4} px="md" pb="lg">
            <DemoLink name={link} />
          </GridCol>
        ))}
      </Grid>
    </>
  );
}
