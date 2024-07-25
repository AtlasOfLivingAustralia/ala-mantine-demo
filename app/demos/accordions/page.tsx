import { CodeHighlight } from '@mantine/code-highlight';
import {
  Title,
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Stack,
  Divider,
  Alert,
  Anchor,
  Text,
} from '@mantine/core';
import { InfoIcon } from 'ala-mantine';

const accordionCode = `
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from '@mantine/core';

// Outer accordion
<Accordion>
  <AccordionItem value="testing">
    <AccordionControl>
      <Title order={2}>Heading style 2</Title>
    </AccordionControl>
    <AccordionPanel>
      {/* Inner accordion  */}
    </AccordionPanel>
  </AccordionItem>
</Accordion>

// Inner accordion
<Accordion variant="ala-nested">
  {[0, 1, 2].map((count) => (
    <AccordionItem key={count} value={\`testing-\${count}\`}>
      <AccordionControl>
        <Title order={4}>Heading style 3</Title>
      </AccordionControl>
      <AccordionPanel>Test</AccordionPanel>
    </AccordionItem>
  ))}
</Accordion>`;

export default function AccordionDemoPage() {
  return (
    <>
      <Title>Accordions</Title>
      <Alert mt="lg" icon={<InfoIcon />} p="xs" variant="light" color="blue">
        See the{' '}
        <Anchor target="_blank" href="https://mantine.dev/core/accordion/" size="sm">
          Accordion
        </Anchor>{' '}
        Mantine documentation
      </Alert>
      <Divider my="xl" />
      <Text mb="xl">The following component is best viewed on a mobile device.</Text>
      <Stack>
        <Accordion>
          <AccordionItem value="testing">
            <AccordionControl>
              <Title order={2}>Heading style 2</Title>
            </AccordionControl>
            <AccordionPanel>
              <Accordion variant="ala-nested">
                {[0, 1, 2].map((count) => (
                  <AccordionItem key={count} value={`testing-${count}`}>
                    <AccordionControl>
                      <Title order={4}>Heading style 3</Title>
                    </AccordionControl>
                    <AccordionPanel>Test</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <CodeHighlight mt="xl" language="tsx" withCopyButton={false} code={accordionCode} />
      </Stack>
    </>
  );
}
