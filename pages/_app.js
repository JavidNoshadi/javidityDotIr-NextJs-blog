import '../styles/globals.css'
import styles from "../components/Index.module.css"
import Link from "next/link"
import Login from "./Login"
import Index from "./index"
function HomePage(){
  return <div>
    <Login></Login>
    <Index></Index>
    </div>
}

export default HomePage
