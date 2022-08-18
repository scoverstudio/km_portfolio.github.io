import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Portfolio from "./components/views/Portfolio/Portfolio";
import Homepage from "./components/views/Homepage/Homepage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import About from "./components/views/About/About";
import Resume from "./components/views/Resume/Resume";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div id="stars-group-1"></div>
        <div id="stars-group-2"></div>
        <div id="stars-group-3"></div>
        <div id="stars-group-4"></div>
        <div id="stars-group-5"></div>
        <div id="stars-group-6"></div>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;
