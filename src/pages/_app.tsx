import "@/styles/globals.css";
import { ColumnFilterProvider } from "@/utils/providers/ColumnFilterProvider";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColumnFilterProvider>
        <Component {...pageProps} />
      </ColumnFilterProvider>
    </ChakraProvider>
  );
}
