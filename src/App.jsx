import React,{useState} from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Card2 from'./components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
function App() {
  let [cart,setCart] = useState(0)
  return<>
      <NavBar cart={cart}/>
      <Header/>
      
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Card setCart={setCart}/>
                <Card2 setCart={setCart}/>
                <Card3 setCart={setCart}/>
                <Card4 setCart={setCart}/>
                </div>
            </div>
      </section>
      <Footer/>
  </>
}

export default App