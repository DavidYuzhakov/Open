import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Products } from "../components/Products";
import { Reviews } from "../components/Reviews";

export function Home () {
  return (
    <>
      <Header nav={true} />
      <main>
        <Intro />
        <Features />
        <Products />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}