import Content from "./Content/Content";
import Legs from "./Legs/Legs";
import Shoulders from "./Shoulders/Shoulders";
import Back from "./Back/Back";
import Triceps from "./Triceps/Triceps";
import Biceps from "./Biceps/Biceps";
import Chest from "./Chest/Chest";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Content />}></Route>
        <Route path="/legs" element={<Legs />}></Route>
        <Route path="/shoulders" element={<Shoulders />}></Route>
        <Route path="/back" element={<Back />}></Route>
        <Route path="/triceps" element={<Triceps />}></Route>
        <Route path="/biceps" element={<Biceps />}></Route>
        <Route path="/chest" element={<Chest />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
