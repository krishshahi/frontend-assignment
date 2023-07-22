"use client";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const store = createStore(rootReducer);
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
}

export type RootState = ReturnType<typeof rootReducer>;
