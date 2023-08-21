import React from "react";
import Header from "../sections/Header";
import AgensSQLInfo from "../sections/AgensSQLInfo";
import AgensPackage from "../sections/AgensPackage";
import Features from "../sections/Features";
import AgensSQLDBEngine from "../sections/AgensSQLDBEngine";
import AgensPackageInfo from "../sections/AgensPackageInfo";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <AgensSQLInfo />
      <AgensPackage />
      <Features />
      <AgensSQLDBEngine />
      <AgensPackageInfo />
      <Footer />
    </div>
  );
};

export default Home;
