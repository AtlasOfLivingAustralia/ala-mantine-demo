import { Container } from '@mantine/core';

export default function DemosLayout({ children }: { children: any }) {
  return (
    <Container py="xl">{children}</Container>
  );
}
