import { ReactElement } from 'react';

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

const views: Record<string, ReactElement> = {
  occurrence: <OccurrenceView />,
  classification: <ClassificationView />,
  description: <DescriptionView />,
  media: <MediaView />,
  names: <NamesView />,
  conservation: <ConservationView />,
  nativeintroduced: <NativeIntroducedView />,
  traits: <TraitsView />,
  literature: <LiteratureView />,
};

export default function SpeciesPageDesktop({ view }: { view: string }) {
  return <div className={classes.desktop}>{views[view]}</div>;
}
