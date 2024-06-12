import { Title, Text, Stack, Box, Group } from '@mantine/core';
import { mainShades, theme } from '../../../ala-mantine';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface ColourSwatchProps {
  name: string;
  shade: number;
}

function ColourSwatch({ name, shade }: ColourSwatchProps) {
  return (
    <div>
      <Box w={157} h={100} bg={`${name}.${shade}`} style={{ borderRadius: 10 }} />
      <Title order={3} pt="sm">
        {name
          .split('-')
          .map((part) => capitalizeFirstLetter(part))
          .join(' ')}
      </Title>
      <Text mt={5}>{theme.colors?.[name]?.[shade]}</Text>
    </div>
  );
}

const primaryNames = ['flamingo', 'rust', 'grey'];
const secondaryNames = ['concrete', 'silver', 'charcoal'];

export default function ColourDemoPage() {
  return (
    <>
      <Stack mt="xs" gap="xl">
        <Stack gap="xl">
          <Title order={2} pt="sm">
            Primary
          </Title>
          <Group gap="xl">
            {primaryNames.map((name) => (
              <ColourSwatch key={name} name={name} shade={mainShades[name]} />
            ))}
          </Group>
        </Stack>
        <Stack mt="xl" gap="xl">
          <Title order={2} pt="sm">
            Secondary
          </Title>
          <Group gap="xl">
            {secondaryNames.map((name) => (
              <ColourSwatch key={name} name={name} shade={mainShades[name]} />
            ))}
          </Group>
        </Stack>
        <Stack mt="xl" gap="xl">
          <Title order={2} pt="sm">
            Extended
          </Title>
          <Group gap="xl">
            {Object.entries(mainShades)
              .filter(([name]) => !primaryNames.includes(name) && !secondaryNames.includes(name))
              .map(([name, shade]) => (
                <ColourSwatch key={name} name={name} shade={shade} />
              ))}
          </Group>
        </Stack>
      </Stack>
    </>
  );
}
