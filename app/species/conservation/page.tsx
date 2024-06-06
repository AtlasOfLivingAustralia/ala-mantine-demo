import {
  Container,
  Group,
  Anchor,
  Text,
  Space,
  Table,
  TableTr,
  TableTh,
  TableTd,
  TableThead,
  TableTbody,
  Grid,
  GridCol,
} from '@mantine/core';
import { IconInfoCircleFilled } from '@tabler/icons-react';

import { ConservationStatus } from 'ala-mantine';

import NavTabs from '../_components/NavTabs';

export default function SpeciesConservation() {
  return (
    <>
      <NavTabs value="conservation" />
      <Container size="lg">
        <Table verticalSpacing={5}>
          <TableThead>
            <TableTr>
              <TableTh>Level</TableTh>
              <TableTh>Status</TableTh>
              <TableTh>IUCN Equivalent Class</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd>National (EPBC Act)</TableTd>
              <TableTd>Vulnerable</TableTd>
              <TableTd>
                <ConservationStatus status="VU" />
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Australian Capital Territory</TableTd>
              <TableTd>Vulnerable</TableTd>
              <TableTd>
                <ConservationStatus status="VU" />
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>New South Wales</TableTd>
              <TableTd>Vulnerable</TableTd>
              <TableTd>
                <ConservationStatus status="VU" />
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Queensland</TableTd>
              <TableTd>Endangered Wildlife</TableTd>
              <TableTd>
                <ConservationStatus status="EN" />
              </TableTd>
            </TableTr>
          </TableTbody>
        </Table>
        <Group gap={5} mt={60}>
          <IconInfoCircleFilled size={14} />
          <Text fw="bold">About the IUCN Equivalent Classes</Text>
        </Group>
        <Text mt={10}>
          As each state and territory have different classifications under their threatened species
          legislation, the Atlas of Living Australia have interpreted state and territory status
          classes to align to the equivalent International Union for Conservation of Nature (IUCN)
          Classes. <Anchor>Find out more</Anchor>
        </Text>
        <Grid mt={30}>
          {['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC'].map((status) => (
            <GridCol span={4}>
              <ConservationStatus status={status} withLabel />
            </GridCol>
          ))}
        </Grid>
        <Space h={72} />
      </Container>
    </>
  );
}
