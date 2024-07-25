import { CodeHighlight } from '@mantine/code-highlight';
import {
  Title,
  Text,
  Stack,
  Divider,
  Anchor,
  Alert,
  Group,
  Grid,
  GridCol,
  Checkbox,
  Radio,
  RadioGroup,
  Code,
} from '@mantine/core';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InfoIcon,
} from 'ala-mantine';
import Link from 'next/link';

const directionIcons = [
  {
    arrow: ArrowDownIcon,
    chevron: ChevronDownIcon,
    text: 'Down',
  },
  {
    arrow: ArrowLeftIcon,
    chevron: ChevronLeftIcon,
    text: 'Left',
  },
  {
    arrow: ArrowRightIcon,
    chevron: ChevronRightIcon,
    text: 'Right',
  },
  {
    arrow: ArrowUpIcon,
    chevron: ChevronRightIcon,
    text: 'Up',
  },
];

export default function ControlsDemoPage() {
  return (
    <>
      <Title>Controls</Title>
      <Alert mt="lg" icon={<InfoIcon />} p="xs" variant="light" color="blue">
        See the{' '}
        <Anchor target="_blank" href="https://mantine.dev/core/checkbox/" size="sm">
          Checkbox
        </Anchor>{' '}
        and{' '}
        <Anchor target="_blank" href="https://mantine.dev/core/radio/" size="sm">
          Radio Button
        </Anchor>{' '}
        Mantine documentation, and the{' '}
        <Anchor size="sm" component={Link} href="/demos/icons">
          Icons
        </Anchor>{' '}
        for icon implementation
      </Alert>
      <Divider my="xl" />
      <Stack gap="xl" mt="xs">
        <Title order={4}>Arrows</Title>
        <Grid>
          {directionIcons.map(({ text, arrow: Icon }) => (
            <GridCol span={{ base: 12, sm: 6, xl: 4 }} key={text}>
              <Stack>
                <Group justify="space-between">
                  <Group gap="xs">
                    <Icon />
                    <Text>{text}</Text>
                  </Group>
                  <Code>{`<${Icon.name} />`}</Code>
                </Group>
              </Stack>
            </GridCol>
          ))}
        </Grid>
        <Title order={4}>Chevrons</Title>
        <Grid>
          {directionIcons.map(({ text, chevron: Icon }) => (
            <GridCol span={{ base: 12, sm: 6, xl: 4 }} key={text}>
              <Stack>
                <Group justify="space-between">
                  <Group gap="xs">
                    <Icon />
                    <Text>{text}</Text>
                  </Group>
                  <Code>{`<${Icon.name} />`}</Code>
                </Group>
              </Stack>
            </GridCol>
          ))}
        </Grid>
        <Title order={4}>Checkbox</Title>
        <Checkbox label="Checkbox" />
        <Title order={4}>Radio button</Title>
        <RadioGroup defaultValue="one">
          <Radio value="one" label="Radio one" />
          <Radio value="two" label="Radio two" mt={16} />
        </RadioGroup>
      </Stack>
    </>
  );
}
