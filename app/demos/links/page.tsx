import { Title, Text, Stack, Divider, Anchor, Alert } from '@mantine/core';
import { InfoIcon } from 'ala-mantine';

export default function LinksDemoPage() {
  return (
    <>
      <Title>Links</Title>
      <Alert mt="lg" icon={<InfoIcon />} p="xs" variant="light" color="blue">
        See the{' '}
        <Anchor target="_blank" href="https://mantine.dev/core/anchor/" size="sm">
          Anchor
        </Anchor>{' '}
        Mantine documentation
      </Alert>
      <Divider my="xl" />
      <Text mb="xl">
        All links are dynamically sized based on browser dimensions (desktop/mobile).
      </Text>
      <Stack mt="xs">
        {['One', 'Two', 'Three'].map((count) => (
          <Anchor>Link {count}</Anchor>
        ))}
      </Stack>
    </>
  );
}
