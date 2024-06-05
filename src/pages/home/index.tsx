// function Home() {
//   return <h1>Hi!</h1>
// }

import setTitle from "../../helper/title/title";

import Hero from "./hero/hero";

export default function Home() {
  setTitle("Home");

  return (
    <>
      {/* <h1>Ayam Goreng</h1> */}
      <Hero/>
    </>
  )
}
