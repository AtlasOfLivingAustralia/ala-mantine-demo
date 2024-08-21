import {
  Title,
  Divider,
  Stack,
  Table,
  TableThead,
  TableTbody,
  TableTr,
  TableTh,
  TableTd,
  Anchor,
  Text,
  Alert,
} from '@mantine/core';
import { InfoIcon } from 'ala-mantine';

const rows = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export default function TableDemoPage() {
  return (
    <>
      <Title>Tables</Title>
      <Alert mt="lg" icon={<InfoIcon />} p="xs" variant="light" color="blue">
        See the{' '}
        <Anchor target="_blank" href="https://mantine.dev/core/table/" size="sm">
          Table
        </Anchor>{' '}
        Mantine documentation
      </Alert>
      <Divider my="xl" />
      <Stack gap="xl">
        <Table>
          <TableThead>
            <TableTr>
              <TableTh>Column one</TableTh>
              <TableTh>Column two</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            {rows.map((row) => (
              <TableTr key={row}>
                <TableTd>Row {row}</TableTd>
                <TableTd>Row {row}</TableTd>
              </TableTr>
            ))}
          </TableTbody>
        </Table>
        <Table>
          <TableThead>
            <TableTr>
              <TableTh>Column one</TableTh>
              <TableTh>Column two</TableTh>
              <TableTh>Column three</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            {rows.map((row) => (
              <TableTr key={row}>
                <TableTd>Row {row}</TableTd>
                <TableTd>Row {row}</TableTd>
                <TableTd>Row {row}</TableTd>
              </TableTr>
            ))}
          </TableTbody>
        </Table>
      </Stack>
    </>
  );
}
