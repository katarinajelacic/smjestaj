import { faBed, faHotel, faHouseUser, faPerson } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Zaglavlje.css"
import { faCalendar, faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";


const Zaglavlje = () => {
    const [openDate, setOpenDate] = useState(false)
    const [datum, odrediDatum] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [opcije, odrediOpcije] = useState({
        odrasli:1,
        djece:0,
        soba:1,
        })

    const handleOption = (ime, operacija) =>{
        odrediOpcije(prev=> { return {
            ...prev, [ime] : operacija === "i"? opcije[ime] +1 : opcije[ime] -1,
        }})
    }
    return (
        <div className="zaglavlje">
            <div className="zaglavljeContainer">
                <div className="ListaZaglavlja">
                    <div className="ListaZaglavljaItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Svi smještaji</span>
                    </div>
                    <div className="ListaZaglavljaItem">
                    <FontAwesomeIcon icon={faHotel}/>
                    <span>Rezervacija smještaja</span>
                    </div>
                    <div className="ListaZaglavljaItem">
                    <FontAwesomeIcon icon={faHouseUser}/>
                    <span>Moja ponuda</span>
                    </div>
                </div>
                <h1 className="nazivZaglavlja">Rezerviraj smještaj - Brzo i Efikasno!</h1>
                <p className="opisZaglavlja">Uštedi vrijeme i pronađi najbolji smještaj</p>
                <button className="zaglavljeBtn">Prijava / Registracija</button>
                <div className="pretraga">
                    <div className="pojedinacnaPretraga">
                    <FontAwesomeIcon icon={faBed}/>
                    <input type="text"placeholder="Kamo želiš ići?" className="unosPretrage" />
                    </div>
                    <div className="pojedinacnaPretraga">
                    <FontAwesomeIcon icon={faCalendarDays}/>
                    <span onClick={()=>setOpenDate(!openDate)} className="pretragaTekst">{`${format(datum[0].startDate, "dd/MM/yyyy")}`} to {`${format(datum[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => odrediDatum([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={datum}
                    className="datum"
                    />}
                    </div>
                    <div className="pojedinacnaPretraga">
                    <FontAwesomeIcon icon={faPerson}/>
                    <span className="pretragaTekst">{`${opcije.odrasli} odrasli · ${opcije.djece} djece · ${opcije.soba} soba`}</span>
                    <div className="opcije">
                        <div className="opcijeItem"></div>
                        <span className="opcijeTekst">Odrasli</span>
                            <div className="opcijeBrojac">
                            <button 
                            disabled = {opcije.odrasli <=1}
                            className="brojac" on onClick={()=>handleOption("odrasli", "d")}>-</button>
                            <span className="brojacBrojeva">{opcije.odrasli}</span>
                            <button className="brojac" on onClick={()=>handleOption("odrasli", "i")}>+</button>
                            </div>
                        
                        <div className="opcijeItem"></div>
                        <span className="opcijeTekst">Djeca</span>
                            <div className="opcijeBrojac">
                            <button 
                            disabled = {opcije.djece <=0}
                            className="brojac" on onClick={()=>handleOption("djece", "d")}>-</button>
                            <span className="brojacBrojeva">{opcije.djece}</span>
                            <button className="brojac" on onClick={()=>handleOption("djece", "i")}>+</button>
                            </div>

                        <div className="opcijeItem"></div>
                        <span className="opcijeTekst">Soba</span>
                            <div className="opcijeBrojac">
                            <button 
                            disabled = {opcije.soba <=1}
                            className="brojac" on onClick={()=>handleOption("soba", "d")}>-</button>
                            <span className="brojacBrojeva">{opcije.soba}</span>
                            <button className="brojac" on onClick={()=>handleOption("soba", "i")}>+</button>
                            </div>
                    </div>
                    <div className="pojedinacnaPretraga">
                    <button className="zaglavljeBtn">Pretraga</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function newFunction () {
        return '${format}';
    }
}
export default Zaglavlje
