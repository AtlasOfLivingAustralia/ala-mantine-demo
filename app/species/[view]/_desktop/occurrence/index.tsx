import {
  Container,
  Alert,
  Group,
  Stack,
  Title,
  Anchor,
  Button,
  Grid,
  GridCol,
  Center,
  Text,
  Space,
  Divider,
  Checkbox,
} from '@mantine/core';
import {
  IconFlagFilled,
  IconInfoCircleFilled,
  IconArrowRight,
  IconAdjustmentsHorizontal,
  IconRefresh,
} from '@tabler/icons-react';

import classes from './page.module.css';

export default function SpeciesOccurrence() {
  return (
    <>
      <Container size="lg">
        <Group>
          <Alert icon={<IconFlagFilled size={14} />}>
            This species is considered sensitive in at least one jurisdiction. Some or all
            occurrence data has been obfuscated. <Anchor>More info</Anchor>
          </Alert>
        </Group>
        <Grid mt="xl" gutter="xl">
          <GridCol span={12}>
            <Title order={3} fw={400}>
              <strong>98,080</strong> occurrence records
            </Title>
          </GridCol>
          <GridCol span={9}>
            <Center style={{ borderRadius: 10 }} p={10} h={530} bg="glacial.2">
              <img src="/map.svg" width={538} height={486} />
            </Center>
            <Group mt={30} gap={5}>
              <IconInfoCircleFilled size={14} />
              <Text fw="bold">About this map</Text>
            </Group>
            <Text mt={10}>
              Occurrence records show where a species has been recorded, and may not show the full
              extent of its known distribution. Records may contain some errors. Expert
              distributions show species distributions modelled by experts or the coarse known
              distributions of species.
            </Text>
            <Title order={3} mt={30}>
              Get started
            </Title>
            <Group mt={15}>
              <Button w={255} h="auto" size="md" rightSection={<IconArrowRight size={18} />}>
                Explore and download occurrence records
              </Button>
              <Button w={255} h={54} size="md" rightSection={<IconArrowRight size={18} />}>
                Advanced mapping
              </Button>
              <Button w={255} h="auto" size="md" rightSection={<IconArrowRight size={18} />}>
                How to submit observation records
              </Button>
            </Group>
          </GridCol>
          <GridCol span={3}>
            <Stack gap={12}>
              <Group gap={8}>
                <IconAdjustmentsHorizontal size={14} />
                <Text style={{ fontSize: '18px' }} fw="bold">
                  Refine view
                </Text>
              </Group>
              <Divider className={classes.divider} />
              <Checkbox label="Occurrence sightings" />
              <Divider className={classes.divider} />
              <Text fw="bold">Expert distribution maps</Text>
              <Checkbox
                label="BirdLife International"
                description={
                  <>
                    Expert distribution <i>Dromaius novaehollandiae</i> provided by{' '}
                    <Anchor size="sm">BirdLife International species range maps</Anchor>
                  </>
                }
              />
              <Checkbox
                label="Australian Bird Study"
                description={
                  <>
                    Expert distribution <i>Dromaius novaehollandiae</i> provided by{' '}
                    <Anchor size="sm">Australian Bird Study</Anchor>
                  </>
                }
              />
              <Divider className={classes.divider} />
              <Text fw="bold">Map type</Text>
              <Checkbox label="Default" />
              <Checkbox label="Terrain" />
              <Button variant="ala-secondary" mt={15}>
                Refresh <IconRefresh style={{ marginLeft: 5 }} size={14} />
              </Button>
            </Stack>
          </GridCol>
        </Grid>
        <Space h={72} />
      </Container>
    </>
  );
}
