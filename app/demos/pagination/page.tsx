import { Title, Stack, Group, Divider, Pagination } from '@mantine/core';

export default function PaginationDemoPage() {
  return (
    <>
      <Title>Pagination</Title>
      <Divider opacity={0.2} my="xl" />
      <Stack mt="xs">
        <Title order={4}>Individual Pagination</Title>
        <Group>
          <Pagination total={10} />
        </Group>
      </Stack>
    </>
  );
}
