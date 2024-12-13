import { Route, Routes } from "react-router"

import './App.css';
import Home from "./pages/Home";
import ListVocabalury from "./pages/ListVocabalury";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import LearnedVocabalury from "./pages/LearnedVocabalury";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/list-vocabalury" element={<ListVocabalury />} />
        <Route path="/learned-vocabalury" element={<LearnedVocabalury />} />
      </Route>
    </Routes>
  );
}

export default App;
