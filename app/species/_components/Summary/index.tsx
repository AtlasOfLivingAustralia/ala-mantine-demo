import Desktop from './desktop';
import Mobile from './mobile';

interface SummaryProps {
  view: string;
}

export default function Summary({ view }: SummaryProps) {
  return (
    <>
      <Desktop view={view} />
      <Mobile view={view} />
    </>
  );
}
