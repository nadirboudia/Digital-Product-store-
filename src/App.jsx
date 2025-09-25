import { Nav } from "./components";
import { Routes, Route } from "react-router-dom";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import ScrollTop from "./components/ScrollTop";
import LandingWrapper from './components/LandingWrapper';
import {
  CustomerReviews,
  Footer,
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    
    <div className="flex flex-col min-h-screen"> 

      <ScrollTop/>
      <Nav />

      {/* Routes تتحكم فالصفحات */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
            <LandingWrapper>

                <section className="xl:padding-l wide:padding-r padding-b">
                  <Hero />
                </section>
                <section className="padding">
                  <SuperQuality />
                </section>
                <section className="padding-x py-10">
                  <Services />
                </section>
                <section className="padding">
                  <SpecialOffer />
                </section>
                <section className="bg-pale-blue padding">
                  <CustomerReviews />
                </section>
                <section className="padding-x sm:py-32 py-16 w-full">
                  <Subscribe />
                </section>
            </LandingWrapper>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
         
        </Routes>
      </div>

      {/* Footer ثابت تحت */}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
};

export default App;
