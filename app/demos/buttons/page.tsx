import {
  Title,
  Text,
  Stack,
  Group,
  Divider,
  Button,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
} from '@mantine/core';

import { IconArrowRight } from '@tabler/icons-react';

export default function ButtonDemoPage() {
  return (
    <>
      <Title>Buttons</Title>
      <Divider my="xl" />
      <Stack mt="xs">
        <Title order={4}>Primary</Title>
        <Group>
          <Text w={100}>Small</Text>
          <Button w={225} rightSection={<IconArrowRight size={14} />}>
            Primary button
          </Button>
        </Group>
        <Group>
          <Text w={100}>Large</Text>
          <Button w={225} rightSection={<IconArrowRight size={14} />}>
            Primary button
          </Button>
        </Group>
        <Title order={4} my="xl">
          Secondary
        </Title>
        <Group>
          <Text w={100}>Small</Text>
          <Button w={225} variant="ala-secondary">
            Secondary button
          </Button>
        </Group>
        <Group>
          <Text w={100}>Large</Text>
          <Button w={225} variant="ala-secondary">
            Secondary button
          </Button>
        </Group>
        <Title order={4} my="xl">
          Filter
        </Title>
        <Group>
          <Text w={100}>Small</Text>
          <Button variant="ala-filter">Button</Button>
        </Group>
        <Group>
          <Text w={100}>Large</Text>
          <Button variant="ala-filter">Button</Button>
        </Group>
        <Title order={4} my="xl">
          Sub-nav
        </Title>
        <Tabs h={125} defaultValue="tab1">
          <TabsList>
            <TabsTab value="tab1">Section title</TabsTab>
            <TabsTab value="tab2">Section title</TabsTab>
            <TabsTab value="tab3">Section title</TabsTab>
          </TabsList>
          <TabsPanel value="tab1">Section one</TabsPanel>
          <TabsPanel value="tab2">Section two</TabsPanel>
          <TabsPanel value="tab3">Section three</TabsPanel>
        </Tabs>
      </Stack>
    </>
  );
}
