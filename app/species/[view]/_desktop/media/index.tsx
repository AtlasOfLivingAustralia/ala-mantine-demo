import {
  Container,
  Space,
  Stack,
  Image,
  Text,
  Divider,
  Grid,
  GridCol,
  Group,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
} from '@mantine/core';

import classes from './page.module.css';

import { IconAdjustmentsHorizontal, IconRefresh } from '@tabler/icons-react';

export default function SpeciesMedia() {
  return (
    <>
      <Container size="lg">
        <Grid mt="xl" gutter="xl">
          <GridCol span={12}>
            <Group gap="xs">
              <Button variant="ala-filter">View all</Button>
              <Button variant="ala-filter">Images</Button>
              <Button variant="ala-filter">Sounds</Button>
              <Button variant="ala-filter">Videos</Button>
            </Group>
          </GridCol>
          <GridCol span={9}>
            <Text fw="bold" mb={15}>
              Showing 10 of 20 results
            </Text>
            <Grid>
              <GridCol span={4}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Emu_1_-_Tidbinbilla.jpg/1280px-Emu_1_-_Tidbinbilla.jpg"
                />
              </GridCol>
              <GridCol span={4}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/John_Gould_Emu.jpg/1920px-John_Gould_Emu.jpg"
                />
              </GridCol>
              <GridCol span={4}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/206_Jpg_%28149188093%29.jpeg/1280px-206_Jpg_%28149188093%29.jpeg"
                />
              </GridCol>
              <GridCol span={3}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cute_and_curious_%2817957181160%29.jpg/1920px-Cute_and_curious_%2817957181160%29.jpg"
                />
              </GridCol>
              <GridCol span={3}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dromaius_novaehollandiae_%2843839081774%29.jpg/1920px-Dromaius_novaehollandiae_%2843839081774%29.jpg"
                />
              </GridCol>
              <GridCol span={3}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Great_Ocean_Road_%282052425358%29.jpg/1280px-Great_Ocean_Road_%282052425358%29.jpg"
                />
              </GridCol>
              <GridCol span={3}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dromaius_novaehollandiae_%28head%29_Battersea_Park_Children%27s_Zoo.jpg/800px-Dromaius_novaehollandiae_%28head%29_Battersea_Park_Children%27s_Zoo.jpg"
                />
              </GridCol>
              <GridCol span={4}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/3/37/Bird_on_a_wire.jpg"
                />
              </GridCol>
              <GridCol span={4}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Dromaius_novaehollandiae_%2829619229207%29.jpg/1280px-Dromaius_novaehollandiae_%2829619229207%29.jpg"
                />
              </GridCol>
              <GridCol span={4}>
                <Image
                  h={210}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Coffin_Bay_National_Park_Seven_Mile_Emus.jpg/1920px-Coffin_Bay_National_Park_Seven_Mile_Emus.jpg"
                />
              </GridCol>
            </Grid>
          </GridCol>
          <GridCol span={3}>
            <Stack gap={15}>
              <Group gap={8}>
                <IconAdjustmentsHorizontal size={14} />
                <Text style={{ fontSize: '18px' }} fw="bold">
                  Refine results
                </Text>
              </Group>
              <Divider className={classes.divider} />
              <Text fw="bold">Sort by</Text>
              <RadioGroup>
                <Radio value="latest" label="Latest" />
                <Radio mt={16} value="oldest" label="Oldest" />
              </RadioGroup>
              <Divider className={classes.divider} />
              <Text fw="bold">Record type</Text>
              <Checkbox label="Occurrences" />
              <Checkbox label="Specimens" />
              <Divider className={classes.divider} />
              <Text fw="bold">Age</Text>
              <Checkbox label="Juvenile" />
              <Checkbox label="Adult" />
              <Divider className={classes.divider} />
              <Text fw="bold">Tracks</Text>
              <Checkbox label="Footprints" />
              <Checkbox label="Eggs" />
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
