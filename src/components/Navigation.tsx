import { MainNavigation } from "@codegouvfr/react-dsfr/MainNavigation";

export default function Navigation() {
  return (
    <MainNavigation 
      items={[
        {linkProps: {href: '#', target: '_self'}, text: 'accès direct'}, 
        {isActive: true, linkProps: {href: '#', target: '_self'}, text: 'accès direct'},
        {linkProps: {href: '#', target: '_self'}, text: 'accès direct'}, 
        {linkProps: {href: '#', target: '_self'}, text: 'accès direct'}
      ]} 
    />
  );
};