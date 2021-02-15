import React from "react";

const cStyles = {
  header: "flex flex-col",
  headerTop:
    "flex flex-row justify-between bg-blue-600 py-5 pl-10 md:pl-36 lg:pl-56 pr-10 shadow-2xl",
  headerTitle:
    "font-sans font-bold text-xl md:text-2xl lg:text-4xl antialiased text-white",
  headerLeft: "flex flex-row items-center space-x-4",
  login: "font-sans text-base md:text-lg lg:text-xl text-white",
  freeTrial:
    "font-sans text-base md:text-lg lg:text-xl text-white bg-gray-800 px-2 py-1 hover:bg-gray-700 shadow-2xl",
  headerBottom:
    "flex flex-row justify-between bg-gray-700 py-3 pr-10 pl-10 md:pl-36 lg:pl-56 shadow-2xl",
  subTitle:
    "font-sans font-bold text-lg md:text-1xl lg:text-2xl antialiased text-white",
};

const Header = ({ subTitle }) => {
  return (
    <div className={cStyles.header}>
      <div className={cStyles.headerTop}>
        <p className={cStyles.headerTitle}>DEMO Streaming</p>
        <div className={cStyles.headerLeft}>
          <a className={cStyles.login} href="/">
            Log in
          </a>
          <a className={cStyles.freeTrial} href="/">
            Start your free trial
          </a>
        </div>
      </div>
      <div className={cStyles.headerBottom}>
        <p className={cStyles.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
