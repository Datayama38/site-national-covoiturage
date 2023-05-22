import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getColorSchemeHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getColorSchemeHtmlAttributes";
import StartDsfr from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import Header from "@/components/Header"
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode; }) {

  return (
    <html {...getColorSchemeHtmlAttributes({ defaultColorScheme })} >
      <head>
        <StartDsfr />
        <DsfrHead defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <DsfrProvider defaultColorScheme={defaultColorScheme}>
          <Header />
          {children}
        </DsfrProvider>
      </body>
    </html>
  );
}