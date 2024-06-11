import Species from '../_components/Summary';
import Desktop from './_desktop/index';
import Mobile from './_mobile/index';

export default function SpeciesPage({ params }: { params: { view: string } }) {
  const { view } = params;

  return (
    <>
      <Species view={view} />
      <Mobile view={view} />
      <Desktop view={view} />
    </>
  );
}
