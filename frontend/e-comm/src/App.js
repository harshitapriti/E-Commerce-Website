import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomeCover from './components/HomeCover';
import Footer from './components/Footer';
import ViewProduct from './components/ViewProduct';
import ShoppingCart from './components/ShoppingCart';
import SignUp from './components/SignIn';
import Login from './components/Login';
import ShippingAddress from './components/ShippingAddress';
import PaymentMethod from './components/PaymentMethod';
import PreviewOrder from './components/PreviewOrder';
import Order from './components/Order';
import OrderHistory from './components/OrderHistory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clothings from './components/Clothings';
import Accessories from './components/Accessories';
import Handcrafts from './components/Handcrafts';
import ProtectedRoute from './routes/ProtectedRoute';
import Rating from './components/Rating';
import Profile from './components/Profile';


function App() {
  return (
    <>
    {/* browserRouter to handle routing */}
    <BrowserRouter>
    <Header></Header>
    {/* routes to different pages */}
      <Routes>
        <Route path='/' element={<HomeCover></HomeCover>}></Route>
        <Route path='/product' element={<ViewProduct></ViewProduct>}></Route>
        <Route path='/product/:id' element={<ViewProduct></ViewProduct>}></Route>
        <Route path='/signin' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/clothings' element={<Clothings></Clothings>}></Route>
        <Route path='/accessories' element={<Accessories></Accessories>}></Route>
        <Route path='/handcrafts' element={<Handcrafts></Handcrafts>}></Route>

        <Route element={<ProtectedRoute></ProtectedRoute>}>
        <Route path='/cart' element={<ShoppingCart></ShoppingCart>}></Route>
        <Route path='/shippingAddress' element={<ShippingAddress></ShippingAddress>}></Route>
        <Route path='/payment' element={<PaymentMethod></PaymentMethod>}></Route>
        <Route path='/previeworder' element={<PreviewOrder></PreviewOrder>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/orderhistory' element={<OrderHistory></OrderHistory>}></Route>
        <Route path='/rating' element={<Rating></Rating>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        </Route>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    </>
  );
}

export default App;
