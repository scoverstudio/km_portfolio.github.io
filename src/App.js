import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";

const App = () => {
  return (
    <Router>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div id="stars-group-4"></div>
      <div id="stars-group-5"></div>
      <div id="stars-group-6"></div>
      <MainLayout></MainLayout>
    </Router>
  );
};

export default App;
