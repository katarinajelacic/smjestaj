import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Pocetna from "./stranice/pocetna/Pocetna";
import Smjestaj from "./stranice/smjestaj/Smjestaj";
import Lista from "./stranice/lista/Lista";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pocetna/>}/>
            <Route path="/smjestaji" element={<Lista/>}/>
            <Route path="/smjestaj/:id" element={<Smjestaj/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
