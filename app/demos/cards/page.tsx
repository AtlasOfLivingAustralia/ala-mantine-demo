import {
  Title,
  Text,
  Stack,
  Group,
  Divider,
  Button,
  Card,
  CardSection,
  Image,
  Anchor,
} from '@mantine/core';

export default function ButtonDemoPage() {
  return (
    <>
      <Title>Cards</Title>
      <Divider opacity={0.2} my="xl" />
      <Stack mt="xs" gap="xl">
        <Title order={4}>Card</Title>
        <Group>
          <Card pt={0} w={280}>
            <CardSection>
              <Image
                height={160}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&w=720&q=80"
              />
            </CardSection>
            <Stack mt="lg" gap="xs">
              <Title order={3} fw={500}>
                Card title
              </Title>
              <Text>
                Some quick example test to build on the card title and make up the bulk of the
                card&apos;s content.
              </Text>
              <Group>
                <Button mt="md">Buttons</Button>
              </Group>
            </Stack>
          </Card>
        </Group>
        <Title order={4}>Titles, text and links</Title>
        <Group>
          <Card w={280}>
            <Stack gap="xs">
              <Title order={4} fw={500}>
                Card title
              </Title>
              <Text c="grey">
                Some quick example test to build on the card title and make up the bulk of the
                card&apos;s content.
              </Text>
              <Group mt="xs">
                <Anchor>Link</Anchor>
                <Anchor>Another link</Anchor>
              </Group>
            </Stack>
          </Card>
          <Card w={380}>
            <Stack gap="xs">
              <Stack gap={0}>
                <Title order={4} fw={500}>
                  Card title
                </Title>
                <Title order={6} fw={500} c="grey">
                  Card subtitle
                </Title>
              </Stack>
              <Text c="grey">
                Some quick example test to build on the card title and make up the bulk of the
                card&apos;s content.
              </Text>
              <Group mt="xs">
                <Anchor>Another link</Anchor>
              </Group>
            </Stack>
          </Card>
        </Group>
        <Title order={4}>Body</Title>
        <Card w={460}>
          <Text c="grey">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.
          </Text>
        </Card>
      </Stack>
    </>
  );
}
