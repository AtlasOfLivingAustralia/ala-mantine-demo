import { CodeHighlight } from '@mantine/code-highlight';
import { Stack, Title, Anchor, Divider, Text } from '@mantine/core';
import Link from 'next/link';

export default function CallOutBoxDemoPage() {
  return (
    <>
      <Title>Header & footer</Title>
      <Divider my="xl" />
      <Stack gap="xl">
        <Text>
          To view a header & footer example, see the{' '}
          <Anchor component={Link} href="/species">
            species page
          </Anchor>{' '}
          demo.
        </Text>
        <CodeHighlight
          language="tsx"
          withCopyButton={false}
          code={`
import { Header, Footer, IndigenousAcknowledgement } from 'ala-mantine';

// Usage
<>
  <Header
    onAuthClick={/* auth button callback */}
    onSearchClick={/* search button callback */}
    onThemeToggleClick={/* theme toggle callback */}
    isAuthenticated={/* option flag to render login/logout button */}
  />
  {/* app content */}
  <Footer />
  <IndigenousAcknowledgement />
</>`}
        />
      </Stack>
    </>
  );
}
