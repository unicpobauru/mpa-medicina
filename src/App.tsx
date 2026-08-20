import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Quote } from "./sections/Quote";
import { About } from "./sections/About";
import { Stats } from "./sections/Stats";
// VirtualTour: ocultado a pedido do cliente (sem tour 360° para o MPA) — o componente
// continua em src/sections/VirtualTour.tsx caso seja reativado no futuro.
// import { VirtualTour } from "./sections/VirtualTour";
import { Differentials } from "./sections/Differentials";
import { Methodology } from "./sections/Methodology";
import { CoordinatorVideo } from "./sections/CoordinatorVideo";
import { Modules } from "./sections/Modules";
import { Faculty } from "./sections/Faculty";
import { Testimonials } from "./sections/Testimonials";
import { Facility } from "./sections/Facility";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Quote />
        <About />
        <Stats />
        <Differentials />
        <CoordinatorVideo />
        <Methodology />
        <Modules />
        <Faculty />
        <Testimonials />
        <Facility />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
