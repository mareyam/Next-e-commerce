import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../toolkit/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Layout from "@/components/layout";

const queryClient = new QueryClient();
let persistor = persistStore(store);
const theme = extendTheme({
  fonts: {
    Handjet: `'Handjet', sans-serif`,
    Gruppo: `'Gruppo', sans-serif`,
    Poppins: `'Poppins', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
