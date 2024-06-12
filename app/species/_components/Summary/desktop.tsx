import {
  Alert,
  Box,
  Breadcrumbs,
  Container,
  Grid,
  GridCol,
  Title,
  Text,
  Stack,
  Anchor,
  Image,
} from '@mantine/core';

import { IconChevronLeft, IconFlagFilled } from '@tabler/icons-react';

import classes from './desktop.module.css';
import NavTabs from './_components/NavTabs';

export default function SpeciesPageHeaderDesktop({ view }: { view: string }) {
  return (
    <Box className={classes.header}>
      <Container py="lg" size="lg">
        <Breadcrumbs separator={<IconChevronLeft size={16} />} separatorMargin={4} mb="sm">
          <Text size="sm">Home</Text>
          <Text size="sm">Search species</Text>
        </Breadcrumbs>
        <Grid mt="xl" pb="xl" mb="xs">
          <GridCol span={6} pr={48}>
            <Stack gap="md">
              <Title className={classes.title}>
                Dromaius
                <br />
                novaehollandiae
              </Title>
              <Stack gap={6}>
                <Text size="xl">Emu</Text>
                <Text size="xl">A-Wurrpbarn in Ngandi</Text>
                <Text size="xl">Bandubugarri in Alawa</Text>
                <Anchor size="sm">See names</Anchor>
              </Stack>
              <Text mt="xs">
                The emu is the second-tallest living bird after the ostrich, its ratite relative. It
                is endemic to Australia, where it is the largest native bird and the only extant
                member of the genus Dromaius.
              </Text>
            </Stack>
          </GridCol>
          <GridCol span={4}>
            <Image
              h="100%"
              src="https://images.ala.org.au/image/bc18ceb2-1bef-4744-8eef-61fd261924a8/large"
            />
          </GridCol>
          <GridCol span={2}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Image
                mb={8}
                style={{
                  flexGrow: 1,
                }}
                src="https://images.ala.org.au/image/d01b900f-5b4e-467a-91a4-a11609be45e6/large"
              />
              <Image
                mt={8}
                style={{
                  flexGrow: 1,
                }}
                src="https://images.ala.org.au/image/c23484c2-94ff-4f94-b952-23fb00dcb975/large"
              />
            </Box>
          </GridCol>
          <GridCol span={6} pt="sm" pr={48}>
            <Alert icon={<IconFlagFilled size={14} />}>
              This species is <Anchor>considered invasive</Anchor> in some part of Australia and may
              be of biosecurity concern.
            </Alert>
          </GridCol>
        </Grid>
      </Container>
      <NavTabs view={view} />
    </Box>
  );
}
