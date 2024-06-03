import { redirect } from 'next/navigation';

export default function SpeciesPage({ children }) {
  redirect('/species/occurrence');

  return children;
}
