import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/Pokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./components/Details";
import { ROUTE_PATHS } from "./utils/constants";
import { NotFoundPage } from "./components/NotFound";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={ROUTE_PATHS.DETAILS} element={<Details />} />
          <Route path={ROUTE_PATHS.HOME} element={<Pokemon />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
