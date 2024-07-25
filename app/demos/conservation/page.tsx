import { CodeHighlight } from '@mantine/code-highlight';
import { Title, Divider, Stack, Text, Code } from '@mantine/core';
import { ConservationStatus, ConservationStatusKey } from 'ala-mantine';

const statusKeys = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC'];

export default function ConservationDemoPage() {
  return (
    <>
      <Title>Conservation Status</Title>
      <Divider my="xl" />
      <Text mb="xl">
        The conservation status component renders a visual indicator for a given conservation
        status. It has an optional <Code>withLabel</Code> prop to also render the full-length status
        label next to the indicator.
      </Text>
      <Stack>
        {statusKeys.map((key) => (
          <ConservationStatus key={key} status={key as ConservationStatusKey} withLabel />
        ))}
      </Stack>
      <CodeHighlight
        mt="xl"
        language="tsx"
        withCopyButton={false}
        code={`
import { ConservationStatus, ConservationStatusKey } from 'ala-mantine';

const statusKeys = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC'];

{statusKeys.map((key) => (
  <ConservationStatus key={key} status={key as ConservationStatusKey} withLabel />
))}
`}
      />
    </>
  );
}
