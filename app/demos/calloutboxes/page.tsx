import { Stack, Group, Title, Alert } from '@mantine/core';
import { IconFlagFilled } from '@tabler/icons-react';

export default function CallOutBoxDemoPage() {
  return (
    <Stack mt="xs">
      <Title order={4}>Alert</Title>
      <Group>
        <Alert icon={<IconFlagFilled />}>
          Alert call-out description lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          interdum sodales nunc, vel luctus libero dictum vel. Donec placerat luctus eros, in
          iaculis ipsum pharetra volutpat.
        </Alert>
      </Group>
    </Stack>
  );
}
