import { Box, Group, Container } from '@mantine/core';

import SpeciesPageHeader from './_components/Header';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import { Header } from 'ala-mantine';

import classes from './layout.module.css';

export default function SpeciesPageLayout({ children }: { children: any }) {
  return (
    <>
      <Header>
        <ColorSchemeToggle />
      </Header>
      <SpeciesPageHeader />
      <Box className={classes.content}>{children}</Box>
    </>
  );
}
