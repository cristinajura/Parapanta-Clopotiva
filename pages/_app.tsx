import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SnackbarProvider>
    <Component {...pageProps} />
  </SnackbarProvider>
);

export default appWithTranslation(MyApp);
