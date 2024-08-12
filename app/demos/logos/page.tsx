import { CodeHighlight } from '@mantine/code-highlight';
import { Title, Stack, Divider, Text } from '@mantine/core';
import { AtlasLogo, AusTraitsLogo, CsiroLogo, GbifLogo, NcrisLogo } from 'ala-mantine';

const generateLogoCode = (logo: string) => (
  <CodeHighlight
    language="tsx"
    withCopyButton={false}
    code={`
import { ${logo} } from 'ala-mantine';

// Usage
<${logo} />;`}
  />
);

export default function LogoDemoPage() {
  return (
    <>
      <Title>Logos</Title>
      <Divider my="xl" />
      <Stack gap="xl">
        <Text>
          The logo components provide a wrapper around the logo images, and dynamically adapt based
          on browser dimensions (desktop/mobile) and the theme of the application (light/dark).
        </Text>
        <Title order={5}>ALA</Title>
        <AtlasLogo />
        {generateLogoCode('AtlasLogo')}
        <Title order={5}>AusTraits</Title>
        <AusTraitsLogo />
        {generateLogoCode('AusTraitsLogo')}
        <Title order={5}>CSIRO</Title>
        <CsiroLogo />
        {generateLogoCode('Csiro')}
        <Title order={5}>GBIF</Title>
        <GbifLogo />
        {generateLogoCode('Gbif')}
        <Title order={5}>NCRIS</Title>
        <NcrisLogo />
        {generateLogoCode('Ncris')}
      </Stack>
    </>
  );
}
