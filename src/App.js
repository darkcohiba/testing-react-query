import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import ChuckNorrisJokes from './components/ChuckNorrisJokes.js';
import NavBar from "./components/NavBar.js";
import CatFact from "./components/CatFact.js";
import ApiHome from "./components/ApiHome";
import PageNotFound from "./components/PageNotFound.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"





function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
});
  return (
    <div>
      <QueryClientProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/apihome" element={<ApiHome />}/>
            <Route path="/ChuckNorrisJokes" element={<ChuckNorrisJokes />}/>
            <Route path="/CatFact" element={<CatFact />}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </div>
  );
}

export default App;

