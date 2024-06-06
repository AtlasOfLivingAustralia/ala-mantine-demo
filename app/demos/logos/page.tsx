import { Title, Stack } from '@mantine/core';
import { AtlasLogo, AusTraitsLogo } from 'ala-mantine';

export default function LogoDemoPage() {
  return (
    <>
      <Stack>
        <Title order={5}>ALA</Title>
        <AtlasLogo />
        <Title order={5}>AusTraits</Title>
        <AusTraitsLogo />
      </Stack>
    </>
  );
}
