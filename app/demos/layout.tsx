import { Group, Text, Container, UnstyledButton, Divider } from '@mantine/core';
import { Footer, Header, IndigenousAcknowledgement } from 'ala-mantine';
import Link from 'next/link';

export default function DemosLayout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Divider />
      <Container size="xl" py="lg">
        <Group pb="md" justify="space-between">
          <UnstyledButton component={Link} href="/demos">
            <Text size="sm" c="grey">
              Back to demos
            </Text>
          </UnstyledButton>
        </Group>
      </Container>
      <Container size="xl" h="100%" mb="xl" pb="xl">
        {children}
      </Container>
      <Divider />
      <Footer />
      <IndigenousAcknowledgement />
    </>
  );
}
