import { Routes,Route } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { HomePage } from "./Pages/HomePage";
import { CompleteOrderPage } from "./Pages/ConfirmationOrderPage";
import { OrderConfimedPage } from "./Pages/OrderConfimedPage";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                 <Route path="/conpletecart" element={<CompleteOrderPage/>}/>
                   <Route path="/orderconfirmed" element={<OrderConfimedPage/>}/>
            </Route>
        </Routes>
    )
}

