import { CodeHighlight } from '@mantine/code-highlight';
import { Stack, Title, Alert, Anchor, Divider } from '@mantine/core';
import { FlagIcon, InfoIcon } from 'ala-mantine';

export default function CallOutBoxDemoPage() {
  return (
    <>
      <Title>Callout boxes</Title>
      <Alert mt="sm" icon={<InfoIcon />} p="xs" variant="light" color="blue">
        See the{' '}
        <Anchor href="https://mantine.dev/core/alert/" size="sm">
          Alert
        </Anchor>{' '}
        Mantine documentation
      </Alert>
      <Divider my="xl" />
      <Stack gap="xl">
        <Title order={4}>Default</Title>
        <Alert icon={<FlagIcon />}>
          Alert call-out description lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          interdum sodales nunc, vel luctus libero dictum vel. Donec placerat luctus eros, in
          iaculis ipsum pharetra volutpat.
        </Alert>
        <CodeHighlight
          language="tsx"
          withCopyButton={false}
          code={`
import { Alert } from '@mantine/core';
import { FlagIcon, InfoIcon } from 'ala-mantine';

// Usage
<Alert icon={<FlagIcon />}>
  Alert call-out description lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  interdum sodales nunc, vel luctus libero dictum vel. Donec placerat luctus eros, in
  iaculis ipsum pharetra volutpat.
</Alert>`}
        />
      </Stack>
    </>
  );
}
