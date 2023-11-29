import { Title, Text, Stack, Group, Divider, Button } from '@mantine/core';

export default function ButtonDemoPage() {
  return (
    <>
      <Title>Buttons</Title>
      <Divider opacity={0.2} my="xl" />
      <Stack mt="xs">
        <Title order={4}>Fill button</Title>
        <Group>
          <Text c="gray" fw="bold" w={450}>
            Colours
          </Text>
          <Button>Default</Button>
          <Button color="honey">Honey</Button>
          <Button color="plum">Plum</Button>
          <Button color="rust">Rust</Button>
        </Group>
        <Title order={4}>Outline button</Title>
        <Group>
          <Text color="gray" fw="bold" w={450}>
            Outline
          </Text>
          <Button variant="outline">Default</Button>
          <Button variant="outline" color="honey">
            Honey
          </Button>
          <Button variant="outline" color="plum">
            Plum
          </Button>
          <Button variant="outline" color="rust">
            Rust
          </Button>
        </Group>
      </Stack>
    </>
  );
}
