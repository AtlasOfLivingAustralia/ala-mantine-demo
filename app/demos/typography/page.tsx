import { Fragment } from 'react';
import { Title, Text, Stack, TitleOrder } from '@mantine/core';
import { theme } from 'ala-mantine';

const fontWeightToName: { [key: number]: string } = {
  100: 'Thin',
  200: 'Extra Light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semibold',
  700: 'Bold',
  800: 'Extra Bold',
  900: 'Black',
};

export default function TypographyDemoPage() {
  return (
    <Stack mt="xs">
      {[1, 2, 3, 4, 5].map((order) => (
        <Fragment key={order}>
          <Title order={4} c="rust.6" mt={order !== 1 ? 'xl' : 0}>
            Heading {order} style
          </Title>
          <Title order={order as TitleOrder}>
            Heading {order} Roboto{' '}
            {/* {fontWeightToName[theme.headings.sizes[`h${order}`].fontWeight]} */}
          </Title>
          <Title key={order} order={order as TitleOrder} fs="italic">
            Heading {order} Roboto{' '}
            {/* {fontWeightToName[theme.headings.sizes[`h${order}`].fontWeight]} italic */}
          </Title>
        </Fragment>
      ))}
      <Title order={4} c="rust.6" mt="xl">
        Body text styles
      </Title>
      {['Normal', 'Semibold', 'Bold'].map((weight) => (
        <Fragment key={weight}>
          <Text fw={weight.toLowerCase()}>Body style Roboto {weight}</Text>
          <Text fw={weight.toLowerCase()} td="underline">
            Body style Roboto {weight} underline
          </Text>
          <Text fw={weight.toLowerCase()} fs="italic">
            Body style Roboto {weight} italic
          </Text>
          <Text fw={weight.toLowerCase()} fs="italic" td="underline">
            Body style Roboto {weight} italic underline
          </Text>
        </Fragment>
      ))}
    </Stack>
  );
}
