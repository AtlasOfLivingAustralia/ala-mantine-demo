"use client";
import { Container, Tabs, TabsList, TabsTab, Divider } from '@mantine/core';
import { useRouter } from 'next/navigation';

import classes from './NavTabs.module.css';

const tabs = {
  occurrence: 'Occurrence map',
  classification: 'Classification',
  description: 'Description',
  media: 'Images and sounds',
  names: 'Names',
  conservation: 'Conservation status',
  nativeintroduced: 'Native / introduced',
  traits: 'Traits',
  literature: 'Literature',
};

interface NavTabsProps {
  view: string;
}

export default function NavTabs({ view }: NavTabsProps) {
  const router = useRouter();

  return (
    <Tabs className={classes.background} value={view} mb={61} onChange={(tab) => router.push(`/species/${tab}`)}>
      <Container size="lg">
        <TabsList>
          {Object.entries(tabs).map(([key, val]) => (
            <TabsTab key={key} value={key}>
              {val}
            </TabsTab>
          ))}
        </TabsList>
      </Container>
      <Divider mt={-1} />
    </Tabs>
  );
}
