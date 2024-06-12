import { Alert, Box, Group, Container, Title, Text, Stack, Anchor } from '@mantine/core';

import { IconChevronLeft, IconFlagFilled } from '@tabler/icons-react';
import Carousel from './_components/Carousel';

import classes from './mobile.module.css';

export default function SpeciesPageHeaderMobile() {
  return (
    <Box className={classes.header}>
      <Container py="lg" size="lg">
        <Group>
          <IconChevronLeft size={16} />
          <Text size="sm">Back to search species</Text>
        </Group>
        <Title className={classes.title} mt={30}>
          Dromaius
          <br />
          novaehollandiae
        </Title>
        <Stack gap={6} mt={15}>
          <Text size="xl">Emu</Text>
          <Text size="xl">A-Wurrpbarn in Ngandi</Text>
          <Text size="xl">Bandubugarri in Alawa</Text>
          <Anchor size="sm">See names</Anchor>
        </Stack>
        <Text mt={20}>
          The emu is the second-tallest living bird after the ostrich, its ratite relative. It is
          endemic to Australia, where it is the largest native bird and the only extant member of
          the genus Dromaius.
        </Text>
        <Alert icon={<IconFlagFilled size={14} />} mt={20}>
          This species is <Anchor>considered invasive</Anchor> in some part of Australia and may be
          of biosecurity concern.
        </Alert>
        <Carousel
          mt={30}
          mr={-16}
          images={[
            'https://images.ala.org.au/image/bc18ceb2-1bef-4744-8eef-61fd261924a8/thumbnail',
            'https://images.ala.org.au/image/d01b900f-5b4e-467a-91a4-a11609be45e6/thumbnail',
            'https://images.ala.org.au/image/c23484c2-94ff-4f94-b952-23fb00dcb975/thumbnail',
            'https://images.ala.org.au/image/b37fe3ce-b3bc-4646-af7a-b65033f6c7da/thumbnail',
            'https://images.ala.org.au/image/f7113fc9-c395-497c-9737-8b3fc130b800/thumbnail',
          ]}
        />
      </Container>
    </Box>
  );
}
