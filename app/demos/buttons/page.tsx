import { Title, Text, Stack, Group, Divider, Button } from '@mantine/core';

export default function ButtonDemoPage() {
  return (
    <>
      <Title>Buttons</Title>
      <Divider opacity={0.2} my="xl" />
      <Title order={4}>Fill button</Title>
      <Stack mt='xs'>
        <Group>
          <Text color='gray' fw='bold' w={450}>Colours</Text>
          <Button>Primary</Button>
        </Group>
        <Group>
          <Text color='gray' fw='bold' w={450}>State</Text>
          <Button>Primary</Button>
        </Group>
      </Stack>
    </>
  );
}
