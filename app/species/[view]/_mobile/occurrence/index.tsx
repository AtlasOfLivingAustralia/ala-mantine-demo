import {
  Container,
  Alert,
  Group,
  Stack,
  Title,
  Anchor,
  Button,
  Center,
  Text,
  Space,
} from '@mantine/core';
import { IconFlagFilled, IconInfoCircleFilled, IconArrowRight } from '@tabler/icons-react';

export default function SpeciesOccurrence() {
  return (
    <Stack my={15}>
      <Group>
        <Alert icon={<IconFlagFilled size={14} />}>
          This species is considered sensitive in at least one jurisdiction. Some or all occurrence
          data has been obfuscated. <Anchor>More info</Anchor>
        </Alert>
      </Group>
      <Title order={3} fw={400}>
        <strong>98,080</strong> occurrence records
      </Title>
      <Center style={{ borderRadius: 10 }} p={10} h={240} bg="glacial.2">
        <img src="/map.svg" width={228} height={203} />
      </Center>
      <Group gap={5}>
        <IconInfoCircleFilled size={14} />
        <Text fw="bold">About this map</Text>
      </Group>
      <Text mt={-10}>
        Occurrence records show where a species has been recorded, and may not show the full extent
        of its known distribution. Records may contain some errors. Expert distributions show
        species distributions modelled by experts or the coarse known distributions of species.
      </Text>
      <Title order={3}>Getting started</Title>
      <Button h="auto" size="md" rightSection={<IconArrowRight size={18} />}>
        Explore and download occurrence records
      </Button>
      <Button size="md" rightSection={<IconArrowRight size={18} />}>
        Advanced mapping
      </Button>
      <Button h="auto" size="md" rightSection={<IconArrowRight size={18} />}>
        How to submit observations
      </Button>
      <Space h={15} />
    </Stack>
  );
}
