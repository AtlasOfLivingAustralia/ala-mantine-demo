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
    <Stack my={15} gap={15}>
      <Group gap={4}>
        <Button variant="ala-filter">View all</Button>
        <Button variant="ala-filter">Images</Button>
        <Button variant="ala-filter">Sounds</Button>
        <Button variant="ala-filter">Videos</Button>
      </Group>
      <Button variant="ala-secondary">
        Refine results
        <IconAdjustmentsHorizontal size={14} style={{ marginLeft: 5 }} />
      </Button>
      <Text size="sm" fw="bold">
        Showing 10 of 20 results
      </Text>
      <Grid gutter={3.5}>
        <GridCol span={6}>
          <Image
            h={104}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Emu_1_-_Tidbinbilla.jpg/1280px-Emu_1_-_Tidbinbilla.jpg"
          />
        </GridCol>
        <GridCol span={6}>
          <Image
            h={104}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/John_Gould_Emu.jpg/1920px-John_Gould_Emu.jpg"
          />
        </GridCol>
        <GridCol span={4}>
          <Image
            h={104}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/206_Jpg_%28149188093%29.jpeg/1280px-206_Jpg_%28149188093%29.jpeg"
          />
        </GridCol>
        <GridCol span={4}>
          <Image
            h={104}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cute_and_curious_%2817957181160%29.jpg/1920px-Cute_and_curious_%2817957181160%29.jpg"
          />
        </GridCol>
        <GridCol span={4}>
          <Image
            h={104}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dromaius_novaehollandiae_%2843839081774%29.jpg/1920px-Dromaius_novaehollandiae_%2843839081774%29.jpg"
          />
        </GridCol>
        <GridCol span={8}>
          <Image
            h={104}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Great_Ocean_Road_%282052425358%29.jpg/1280px-Great_Ocean_Road_%282052425358%29.jpg"
          />
        </GridCol>
        <GridCol span={4}>
          <Image
            h={104}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dromaius_novaehollandiae_%28head%29_Battersea_Park_Children%27s_Zoo.jpg/800px-Dromaius_novaehollandiae_%28head%29_Battersea_Park_Children%27s_Zoo.jpg"
          />
        </GridCol>
      </Grid>
      <Button variant="ala-secondary">Load 10 more</Button>
      <Space h={15} />
    </Stack>
  );
}
