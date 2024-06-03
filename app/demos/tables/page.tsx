import { Stack, Table, TableThead, TableTbody, TableTr, TableTh, TableTd } from '@mantine/core';

const rows = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export default function TableDemoPage() {
  return (
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
  );
}
