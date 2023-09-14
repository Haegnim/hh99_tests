import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import GlobalStyle from "./utils/GlobalStyle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
