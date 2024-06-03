import {
  Title,
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Stack,
} from '@mantine/core';

const groceries = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
];

const inner = (value: string) => (
  <Accordion variant="ala-nested">
    {[0, 1, 2].map((count) => (
      <AccordionItem key={count} value={`${value}-${count}`}>
        <AccordionControl>
          <Title order={4}>Heading style 3</Title>
        </AccordionControl>
        <AccordionPanel>Test</AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

const items = groceries.map((item) => (
  <AccordionItem key={item.value} value={item.value}>
    <AccordionControl>
      <Title order={2}>Heading style 2</Title>
    </AccordionControl>
    <AccordionPanel>{inner(`inner-${item.value}`)}</AccordionPanel>
  </AccordionItem>
));

export default function AccordionDemoPage() {
  return (
    <>
      <Stack>
        <Title order={5}>ALA</Title>
        <Accordion>{items}</Accordion>
      </Stack>
    </>
  );
}
