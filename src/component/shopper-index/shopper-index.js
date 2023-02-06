import { Route,BrowserRouter,Routes,Form, Link } from "react-router-dom";
import ShopperCategory from "../shopper-category/shopper-category";
import ShopperDetails from "../shopper-details/shopper-details";
import ShopperHome from "../shopper-home/shopper-home";


const ShopperIndex = () => {
  return (
    <>


    <BrowserRouter>
            <header className="d-flex justify-content-between mt-3">
                <div>
                    <h2>Shopper</h2>
                </div>
                <nav className="d-flex">
                    <div className="me-3"><Link to="home" className="btn">HOME</Link></div>
                    <div className="me-3"><Link to="category/men's clothing" className="btn">MEN'S FASHION</Link></div>
                    <div className="me-3"><Link to="category/women's clothing" className="btn">WOMEN'S FASHION</Link></div>
                    <div className="me-3"><Link to="category/jewelery" className="btn">JEWELERY</Link></div>
                    <div className="me-3"><Link to="category/electronics" className="btn">ELECTRONIC</Link></div>
                </nav>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart me-3"></span>
                </div>
            </header>
            <div className="bg-dark text-white mt-4 text-center p-2">
            ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️
            </div>



        <Routes>
            <Route path="/" element={<ShopperHome />} />
            <Route path="home" element={<ShopperHome />} />

            <Route path="category/:catname" element={<ShopperCategory />} />
            <Route path="details/:id" element={<ShopperDetails/>} />


            
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default ShopperIndex