import { MainNavigation } from "@codegouvfr/react-dsfr/MainNavigation";

export default function Navigation() {
  return (
    <MainNavigation 
      items={[
        {linkProps: {href: '/', target: '_self'}, text: 'Accueil'}, 
        {
          menuLinks: [
            {
              linkProps: {
                href: '/observatoire/covoiturage-courte-distance'
              },
              text: 'Le covoiturage courte distance en France'
            },
            {
              linkProps: {
                href: '/observatoire/territoire'
              },
              text: 'Le covoiturage sur un territoire'
            },
            {
              linkProps: {
                href: '#'
              },
              text: 'Lien de navigation'
            },
            {
              linkProps: {
                href: '#'
              },
              text: 'Lien de navigation'
            }
          ],
          text: 'Observatoire'
        },
        {linkProps: {href: '#', target: '_self'}, text: 'accès direct'}, 
        {linkProps: {href: '#', target: '_self'}, text: 'accès direct'}
      ]} 
    />
  );
};