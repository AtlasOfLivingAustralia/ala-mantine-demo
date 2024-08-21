'use client';

import { Box, useMantineColorScheme } from '@mantine/core';
import { Footer, Header, IndigenousAcknowledgement } from 'ala-mantine';

import classes from './layout.module.css';

export default function SpeciesPageLayout({ children }: { children: any }) {
  const { toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  return (
    <>
      <Header onThemeToggleClick={toggleColorScheme} />
      <Box className={classes.content}>{children}</Box>
      <Footer />
      <IndigenousAcknowledgement />
    </>
  );
}
