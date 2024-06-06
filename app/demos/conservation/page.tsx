import { Title, Divider, Stack } from '@mantine/core';
import { ConservationStatus, ConservationStatusKey } from 'ala-mantine';

const statusKeys = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC'];

export default function ConservationDemoPage() {
  return (
    <>
      <Title>Conservation Status</Title>
      <Divider my="xl" />
      <Stack>
        {statusKeys.map((key) => (
          <ConservationStatus key={key} status={key as ConservationStatusKey} withLabel />
        ))}
      </Stack>
    </>
  );
}
