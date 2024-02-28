import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";
import { Products } from "./components/Products/Products";
import { Contacts } from "./components/Contacts/Contacts";
import { Advantages } from "./components/Advantages/Advantages";
import { Footer } from "./components/Footer/Footer";
import { Divider } from "./components/Divider/Divider";
import { Animated } from "./components/Animated/Animated";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Divider />
      <Animated>
        <About />
      </Animated>
      <Divider />
      <Advantages />
      <Divider />
      <Products />
      <Divider />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
