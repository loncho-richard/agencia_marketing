import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Contact from "containers/pages/Contact";
import Services from "containers/pages/Services";
import Cases from "containers/pages/Cases";
import Blog from "containers/pages/Blog";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Error Display */}
          <Route path="/" element={<Home />} />
          <Route path="/casos" element={<Cases />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/carreras" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
