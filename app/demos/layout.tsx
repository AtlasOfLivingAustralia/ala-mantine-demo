import { Group, Text, Container, UnstyledButton } from '@mantine/core';
import Link from 'next/link';

export default function DemosLayout({ children }: { children: any }) {
  return (
    <>
      <Container size="lg" py="lg">
        <Group pb="md" justify="space-between">
          <UnstyledButton component={Link} href="/demos">
            <Text size="sm" c="grey">
              Back to demos
            </Text>
          </UnstyledButton>
        </Group>
      </Container>
      <Container size="lg" h="100%">
        {children}
      </Container>
    </>
  );
}
