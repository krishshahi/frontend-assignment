import { Providers } from "@/store/provider";
import { AppProps } from "next/app";
import "./globals.css";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};
export default MyApp;
