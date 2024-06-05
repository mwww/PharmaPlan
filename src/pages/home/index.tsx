// function Home() {
//   return <h1>Hi!</h1>
// }

import setTitle from "../../helper/title/title";

import Hero from "./hero/hero";
import Article from "./article/article";
import Items from "./items/items"
import Promos from "./promo/promos";
export default function Home() {
  setTitle("Home");

  return (
    <>
      {/* <h1>Ayam Goreng</h1> */}
      <Hero/>
      <Article/>
      <Items/>
      <Promos/>
    </>
    
  )
}
