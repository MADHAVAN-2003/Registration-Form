import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentForm from "./Components/StudentForm";
import DataDisplay from "./Components/DataDisplay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/user" element={<DataDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
