// function Home() {
//   return <h1>Hi!</h1>
// }

import { Outlet } from "react-router-dom"
import Navbar from "../navbar/navbar"

export default function Layout() {
  return <>
    <Navbar/>
    <Navbar isSpacer/>
    <main className="el">
        <div>
            <Outlet/>
        </div>
    </main>
  </>
}
