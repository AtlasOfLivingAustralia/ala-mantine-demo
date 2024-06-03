import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Group, Text, Container, UnstyledButton } from '@mantine/core';
import Link from 'next/link';

export default function DemosLayout({ children }: { children: any }) {
  return (
    <Container py="xl" h="100%">
      <Group pb="md" justify="space-between">
        <UnstyledButton component={Link} href="/demos">
          <Text size="sm" color="grey">
            Back
          </Text>
        </UnstyledButton>
        <ColorSchemeToggle />
      </Group>
      {children}
    </Container>
  );
}
