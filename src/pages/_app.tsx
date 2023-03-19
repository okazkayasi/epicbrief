import "@/styles/globals.css";
import { ColumnFilterProvider } from "@/utils/providers/ColumnFilterProvider";
import { DateFilterProvider } from "@/utils/providers/DateFilterProvider";
import { SortingProvider } from "@/utils/providers/SortingProvider";
import { TableSelectorProvider } from "@/utils/providers/TableSelectorProvider";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColumnFilterProvider>
        <SortingProvider>
          <DateFilterProvider>
            <TableSelectorProvider>
              <Component {...pageProps} />
            </TableSelectorProvider>
          </DateFilterProvider>
        </SortingProvider>
      </ColumnFilterProvider>
    </ChakraProvider>
  );
}
