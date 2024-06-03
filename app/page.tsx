import { Button, Group } from '@mantine/core';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Group justify="center" mt="xl">
        <Button component={Link} href="/demos">
          Go to demos
        </Button>
        <Button component={Link} href="/species">
          Go to species page
        </Button>
      </Group>
    </>
  );
}
