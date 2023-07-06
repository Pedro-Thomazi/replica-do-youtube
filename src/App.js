

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotF from "./Pages/PageNotF";
import PageLogin from "./Pages/PageLogin/PageLogin";
import PagePassword from "./Pages/PageLogin/PagePassword";
import PageVideo from "./Pages/Video/Video";
import Channel from "./Pages/Channel/Channel";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageNotF" element={<PageNotF />} />
          <Route path="/pageLogin" element={<PageLogin />} />
          <Route path="/pagePassword" element={<PagePassword />} />
          <Route path="/pageVideo" element={<PageVideo />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
