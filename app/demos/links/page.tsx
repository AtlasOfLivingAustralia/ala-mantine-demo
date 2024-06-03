import { Title, Text, Stack, Group, Divider, Anchor } from '@mantine/core';

export default function LinksDemoPage() {
  return (
    <>
      <Title>Links</Title>
      <Divider my="xl" />
      <Stack mt="xs">
        <Title order={4}>Primary</Title>
        <Group>
          <Text w={100}>Small</Text>
          <Anchor>Link Description</Anchor>
        </Group>
        <Group>
          <Text w={100}>Large</Text>
          <Anchor size="md">Link Description</Anchor>
        </Group>
      </Stack>
    </>
  );
}
