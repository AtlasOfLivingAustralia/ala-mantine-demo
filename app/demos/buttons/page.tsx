import { CodeHighlight } from '@mantine/code-highlight';
import {
  Title,
  Stack,
  Divider,
  Button,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  Alert,
  Anchor,
  Box,
  Group,
} from '@mantine/core';

import { ArrowRightIcon, InfoIcon, SearchIcon } from 'ala-mantine';

const generateButtonCode = (text: string, variant?: string) => (
  <CodeHighlight
    withCopyButton={false}
    language="tsx"
    code={`
import { Button } from '@mantine/core';${variant ? '' : `\nimport { ArrowRightIcon } from 'ala-mantine';`}

<Button ${variant ? `variant="${variant}"` : 'rightSection={<ArrowRightIcon size={14} />}'}>
  ${text}
</Button>`}
  />
);

const subNavCode = `
import { Tabs, TabsList, TabsPanel } from '@mantine/core';

<Tabs h={80} defaultValue="tab1">
  <TabsList>
    <TabsTab value="tab1">Section title</TabsTab>
    <TabsTab value="tab2">Section title</TabsTab>
    <TabsTab value="tab3">Section title</TabsTab>
  </TabsList>
  <TabsPanel value="tab1">Section one</TabsPanel>
  <TabsPanel value="tab2">Section two</TabsPanel>
  <TabsPanel value="tab3">Section three</TabsPanel>
</Tabs>`;

export default function ButtonDemoPage() {
  return (
    <>
      <Title>Buttons</Title>
      <Alert mt="lg" icon={<InfoIcon />} p="xs" variant="light" color="blue">
        See the{' '}
        <Anchor target="_blank" href="https://mantine.dev/core/button/" size="sm">
          Button
        </Anchor>{' '}
        and{' '}
        <Anchor target="_blank" href="https://mantine.dev/core/tabs/" size="sm">
          Tabs
        </Anchor>{' '}
        Mantine documentation
      </Alert>
      <Divider my="xl" />
      <Stack gap="xl">
        <Title order={4}>Primary</Title>
        <Button w={255} leftSection={<SearchIcon size={14} />}>
          Primary button that is very long
        </Button>
        {generateButtonCode('Primary button')}
        <Title order={4}>Secondary</Title>
        <Button w={255} variant="ala-secondary">
          Secondary button
        </Button>
        {generateButtonCode('Secondary button', 'ala-secondary')}
        <Title order={4}>Filter</Title>
        <Group>
          <Button variant="ala-filter">Filter button</Button>
        </Group>
        {generateButtonCode('Filter button', 'ala-filter')}
        <Title order={4}>Sub-nav</Title>
        <Tabs h={80} defaultValue="tab1">
          <TabsList>
            <TabsTab value="tab1">Section title</TabsTab>
            <TabsTab value="tab2">Section title</TabsTab>
            <TabsTab value="tab3">Section title</TabsTab>
          </TabsList>
          <Box mt="sm">
            <TabsPanel value="tab1">Section one</TabsPanel>
            <TabsPanel value="tab2">Section two</TabsPanel>
            <TabsPanel value="tab3">Section three</TabsPanel>
          </Box>
        </Tabs>
        <CodeHighlight language="tsx" withCopyButton={false} code={subNavCode} />
      </Stack>
    </>
  );
}
