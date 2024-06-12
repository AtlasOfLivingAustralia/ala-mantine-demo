import { Box, Center } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

import { Header } from '../../ala-mantine';

import classes from './layout.module.css';

export default function SpeciesPageLayout({ children }: { children: any }) {
  return (
    <>
      <Header>
        <Center h="100%">
          <ColorSchemeToggle />
        </Center>
      </Header>
      <Box className={classes.content}>{children}</Box>
    </>
  );
}
