import React, { useEffect } from "react";
import Header from "../sections/Header";
import AgensSQLInfo from "../sections/AgensSQLInfo";
import AgensPackage from "../sections/AgensPackage";
import Features from "../sections/Features";
import AgensSQLDBEngine from "../sections/AgensSQLDBEngine";
import AgensPackageInfo from "../sections/AgensPackageInfo";
import Footer from "../sections/Footer";
import { useGlobalContext } from "../context/store";

const Home = () => {
  const { authenticate } = useGlobalContext();

  useEffect(() => {
    authenticate();
  }, [authenticate]);

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
