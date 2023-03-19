import "@/styles/globals.css";
import { ColumnFilterProvider } from "@/utils/providers/ColumnFilterProvider";
import { SortingProvider } from "@/utils/providers/SortingProvider";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColumnFilterProvider>
        <SortingProvider>
          <Component {...pageProps} />
        </SortingProvider>
      </ColumnFilterProvider>
    </ChakraProvider>
  );
}
