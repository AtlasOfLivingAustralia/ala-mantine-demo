import { Title, Text, Stack, Divider, Tabs, TabsList, TabsTab, TabsPanel } from '@mantine/core';

export default function TabDemoPage() {
  return (
    <>
      <Title>Tabs</Title>
      <Divider opacity={0.2} my="xl" />
      <Stack mt="xs">
        <Tabs variant="outline" h={125} defaultValue="home">
          <TabsList>
            <TabsTab value="home">Home</TabsTab>
            <TabsTab value="profile">Profile</TabsTab>
            <TabsTab value="contact">Contact</TabsTab>
          </TabsList>
          <TabsPanel value="home">
            <Text c="grey" mt="md">
              Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu
              stumptown aliqua, retro synth master cleanse.
            </Text>
          </TabsPanel>
          <TabsPanel value="profile">
            <Text c="grey" mt="md">
              Mustache cliche tempor, williams burg carles vegan helvetica.
            </Text>
          </TabsPanel>
          <TabsPanel value="contact">
            <Text c="grey" mt="md">
              Reprehenderit butcher retro keffiyeh dreamc atcher synth. Cosby sweater eu banh mi,
              qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
              aliquip quis cardigan american apparel, butcher voluptate nisi qui.
            </Text>
          </TabsPanel>
        </Tabs>
        <Tabs variant="pills" defaultValue="home">
          <TabsList>
            <TabsTab value="home">Home</TabsTab>
            <TabsTab value="profile">Profile</TabsTab>
            <TabsTab value="contact">Contact</TabsTab>
          </TabsList>
          <TabsPanel value="home">
            <Text c="grey" mt="md">
              Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu
              stumptown aliqua, retro synth master cleanse.
            </Text>
          </TabsPanel>
          <TabsPanel value="profile">
            <Text c="grey" mt="md">
              Mustache cliche tempor, williams burg carles vegan helvetica.
            </Text>
          </TabsPanel>
          <TabsPanel value="contact">
            <Text c="grey" mt="md">
              Reprehenderit butcher retro keffiyeh dreamc atcher synth. Cosby sweater eu banh mi,
              qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
              aliquip quis cardigan american apparel, butcher voluptate nisi qui.
            </Text>
          </TabsPanel>
        </Tabs>
      </Stack>
    </>
  );
}
