'use client'
import { MainNavigation } from "@codegouvfr/react-dsfr/MainNavigation";
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <MainNavigation 
      items={[
        {
          linkProps: {href: '/', target: '_self'},
          text: 'Accueil',
          isActive: pathname === '/',
        }, 
        {
          menuLinks: [
            {
              linkProps: {
                href: '/observatoire/covoiturage-courte-distance'
              },
              text: 'Le covoiturage courte distance en France',
              isActive: pathname === '/observatoire/covoiturage-courte-distance',
            },
            {
              linkProps: {
                href: '/observatoire/territoire'
              },
              text: 'Analyse par territoire',
              isActive: pathname === '/observatoire/territoire',
            },
            {
              linkProps: {
                href: '/observatoire/recensement-actions'
              },
              text: 'Recensement des actions pour développer le covoiturage',
              isActive: pathname === '/observatoire/recensement-actions',
            },
            {
              linkProps: {
                href: '/observatoire/impact-actions'
              },
              text: 'Impact des actions pour développer le covoiturage',
              isActive: pathname === '/observatoire/impact-actions',
            },
            {
              linkProps: {
                href: '/observatoire/plan-covoiturage'
              },
              text: 'Evaluation du plan national covoiturage',
              isActive: pathname === '/observatoire/plan-covoiturage',
            },
          ],
          text: 'Observatoire',
          isActive: pathname.startsWith('/observatoire'),
        },
        {linkProps: {href: '#', target: '_self'}, text: 'accès direct'}, 
        {linkProps: {href: '#', target: '_self'}, text: 'accès direct'}
      ]} 
    />
  );
};