import "./App.scss";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";

const App = () => {
  return (
    <Router>
      <MainLayout>
      </MainLayout>
    </Router>
  );
};

export default App;
