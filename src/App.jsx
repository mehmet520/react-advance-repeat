import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import PlaygroundHome from "./pages/playground/PlaygroundHome";
import StateIntro from "./pages/playground/StateIntro";
import NotFound from './pages/NotFound'
import EffectsIntro from "./pages/playground/EffectsIntro";
import PerformanceIntro from "./pages/playground/PerformanceIntro";
import ContextIntro from "./pages/playground/ContextIntro";
import ReducerIntro from './pages/playground/ReducerIntro'
import CustomHooksIntro from './pages/playground/CustomHooksIntro'
import DataFetchingIntro from './pages/playground/DataFetchingIntro'
import FormsIntro from './pages/playground/FormsIntro'
import PatternsIntro from './pages/playground/PatternsIntro' 

function App() {
  return (
    <div className="app">
      <header className="app-header" style={{}}>
        <h1>React Fortgeschrittene Arbeitsbereich</h1>
        <nav className="app-nav" style={{}}>
          <Link className="link" to="/">Home</Link>
          <Link to="/playground">Playground</Link>
        </nav>
      </header>

      <main className="app-main">
        Mehmet
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/playground" element={<Playground />}>
            <Route index element={<PlaygroundHome />} />
            <Route path="state" element={<StateIntro />} />
            <Route path="effects" element={<EffectsIntro />} />
            <Route path="performance" element={<PerformanceIntro />} />
            <Route path='context' element={<ContextIntro />} />
            <Route path='reducer' element={<ReducerIntro />} />
            <Route path='hooks' element={<CustomHooksIntro />} />
            <Route path='data-fetching' element={<DataFetchingIntro />} />
            <Route path="forms" element={<FormsIntro />} />
            <Route path="patterns" element={<PatternsIntro />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
