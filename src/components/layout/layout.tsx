// function Home() {
//   return <h1>Hi!</h1>
// }

import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
// import Footer from "../footer/footer";
import Footer2 from "../footer2/footer2";

interface LayoutProps {
  isLoggedIn: boolean;
}

export default function Layout({ isLoggedIn } : LayoutProps) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Navbar isSpacer />
      <main className="el">
        <div>
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
      <Footer2 />
    </>
  );
}