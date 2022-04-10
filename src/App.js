import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stores from "./views/stores/Stores";
import MainContextProvider from "./context/MainContext";
function App() {
  return (
    <MainContextProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Stores />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </MainContextProvider>
  );
}

export default App;
