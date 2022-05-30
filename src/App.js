import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";
import Task from "./pages/Task";

const useStyle = makeStyles(() => ({
  App: {
    height: "100vh",
    backgroundColor: "#14161a",
    color: "white",
  },
}));

function App() {
  const classes = useStyle();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
