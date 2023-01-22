import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Authenticate from "./components/authentication/Authenticate";
import Dashboard from "./components/dashboard/Dashboard";

const App: FC<any> = () => {
  return <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
}


export default App;
