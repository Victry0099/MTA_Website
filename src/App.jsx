import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/styles.css";

const Skeleton = lazy(() => import("./shared/skeleton/Skeleton"));
const PrivacyPolicy = lazy(() =>
  import("./components/privacyPolicy/PrivacyPolicy")
);
const RefundPolicy = lazy(() =>
  import("./components/refundPolicy/RefundPolicy")
);
const TermsAndConditions = lazy(() =>
  import("./components/termsAndCoditions/TermsAndConditions")
);

const NotFoundPage = lazy(() => import("./shared/notFoundPage/NotFoundPage"));
const DynamicTitle = lazy(() => import("./shared/dynamicTitle/DynamicTitle"));
const FrontendWithReact = lazy(() =>
  import("./shared/react/FrontendWithReact")
);

const Certificate = lazy(() => import("./pages/certificate/Certificate"));
const DevelopmentwithReact = lazy(() =>
  import("./shared/react/DevelopmentwithReact")
);
const FullStackWithJava = lazy(() => import("./shared/java/FullStackWithJava"));
const Mern = lazy(() => import("./shared/mern/Mern"));
const PopupForm = lazy(() => import("./shared/PopupForm/PopupForm"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Courses = lazy(() => import("./pages/Courese/Courses"));

const FullStackWithPython = lazy(() =>
  import("./shared/python/FullStackWithPython")
);
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Skeleton />}>
          <DynamicTitle />
          <Navbar />
          <PopupForm />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/certificate" element={<Certificate />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              exact
              path="/courses/full-stack-python"
              element={<FullStackWithPython />}
            />
            <Route
              exact
              path="/courses/full-stack-java"
              element={<FullStackWithJava />}
            />
            <Route exact path="/courses/mern-stack" element={<Mern />} />
            <Route
              exact
              path="/courses/react"
              element={<FrontendWithReact />}
            />
            <Route
              exact
              path="/courses/development-react"
              element={<DevelopmentwithReact />}
            />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
