import { Box, Text, Container, UnstyledButton } from '@mantine/core';
import Link from 'next/link';

export default function DemosLayout({ children }: { children: any }) {
  return (
    <Container py="xl" h="100%">
      <Box pb="md">
        <UnstyledButton component={Link} href="/demos">
          <Text size="sm" color="grey">
            Back
          </Text>
        </UnstyledButton>
      </Box>
      {children}
    </Container>
  );
}
