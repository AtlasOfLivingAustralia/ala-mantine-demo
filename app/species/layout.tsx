import { Box } from '@mantine/core';

import SpeciesPageHeader from './_components/Header';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import classes from './layout.module.css';

export default function SpeciesPageLayout({ children }: { children: any }) {
  return (
    <>
      <ColorSchemeToggle />
      <SpeciesPageHeader />
      <Box className={classes.content}>{children}</Box>
    </>
  );
}
