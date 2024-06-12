'use client';

import { ReactElement, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Stack,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useRouter } from 'next/navigation';

import OccurrenceView from './occurrence';
import ClassificationView from './classification';
import DescriptionView from './description';
import MediaView from './media';
import NamesView from './names';
import ConservationView from './conservation';
import NativeIntroducedView from './nativeintroduced';
import TraitsView from './traits';
import LiteratureView from './literature';

import classes from './index.module.css';

const views: Record<string, { view: ReactElement; name: string }> = {
  occurrence: {
    view: <OccurrenceView />,
    name: 'Occurrence map',
  },
  classification: {
    view: <ClassificationView />,
    name: 'Classification',
  },
  description: {
    view: <DescriptionView />,
    name: 'Description',
  },
  media: {
    view: <MediaView />,
    name: 'Images and sounds',
  },
  names: {
    view: <NamesView />,
    name: 'Names',
  },
  conservation: {
    view: <ConservationView />,
    name: 'Conservation status',
  },
  nativeintroduced: {
    view: <NativeIntroducedView />,
    name: 'Native / introduced',
  },
  traits: {
    view: <TraitsView />,
    name: 'Traits',
  },
  literature: {
    view: <LiteratureView />,
    name: 'Literature',
  },
};

export default function SpeciesPageMobile({ view }: { view: string }) {
  const router = useRouter();
  const desktop = useMediaQuery('(min-width: 56.25em)');
  const [toNavigate, setToNavigate] = useState<string|null>(null);

  useEffect(() => {
    if (desktop && toNavigate) {
      router.push(toNavigate);
      setToNavigate(null);
    }
  }, [desktop, toNavigate]);

  return (
    <div className={classes.mobile}>
      <Stack gap={5}>
      {Object.entries(views).map(([key, value]) => (
        <Accordion
          key={key}
          defaultValue={view}
          onChange={(path) => {
            if (path !== null) {
              const fullPath = `/species/${path}`;

              setToNavigate(fullPath);
              window.history.pushState({}, '', fullPath);
            }
          }}
        >
          <AccordionItem key={key} value={key}>
            <AccordionControl>
              <Title order={2}>{value.name}</Title>
            </AccordionControl>
            <AccordionPanel>{value.view}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Stack>
    </div>
  );
}
