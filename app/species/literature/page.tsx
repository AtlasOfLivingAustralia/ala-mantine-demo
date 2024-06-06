import { Container, Anchor, Title, Stack, Text, Space } from '@mantine/core';
import { IconInfoCircleFilled } from '@tabler/icons-react';

import { LiteratureCard } from 'ala-mantine';

import NavTabs from '../_components/NavTabs';

export default function SpeciesLiterature() {
  return (
    <>
      <NavTabs value="literature" />
      <Container size="lg">
        <Title order={3}>Biodiversity Heritage Library</Title>
        <Stack mt={30} gap={15}>
          <LiteratureCard>
            <Text>
              Eberhard, R., '
              <Anchor>
                Tasmanian emu (Dromaius novaehollandiae diemenensis ) at the Queen Victoria Museum
                and Art Gallery, Launceston: description, provenance, age
              </Anchor>
              ', <i>Record of the Queen Victoria Museum and Art Gallery</i>, <b>120</b>
            </Text>
          </LiteratureCard>
          <LiteratureCard>
            <Text>
              '
              <Anchor>
                Eastern equine encephalitis transmission to emus (Dromaius novaehollandiae) in
                Volusia County, Florida: 1992 through 1994.
              </Anchor>
              ', <i>Journal of the American Mosquito Control Association</i>, <b>12</b>, 3 Pt 1,
              1996
            </Text>
          </LiteratureCard>
          <LiteratureCard>
            <Text>
              Hermes, M., '
              <Anchor>
                The restricted distribution of the Emu (Dromaius novaehollandiae) calls for a more
                nuanced understanding of traditional Aboriginal environmental management
              </Anchor>
              ', <b>28</b>
            </Text>
          </LiteratureCard>
          <LiteratureCard>
            <Text>
              O'callaghan, M., Davies, M. and Andrews, R., '
              <Anchor>
                Species of Raillietina Fuhrmann, 1920 (Cestoda: Davaineidae) from the emu, Dromaius
                novaehollandiae
              </Anchor>
              ', <i>Transactions of the Royal Society of South Australia</i>, <b>124</b>, 2000
            </Text>
          </LiteratureCard>
        </Stack>
        <Space h={72} />
      </Container>
    </>
  );
}
