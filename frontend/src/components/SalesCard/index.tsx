import NotificationButton from "../NotificationButton";

import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../utils/request"
import { Sale } from "../../models/sale";


function SalesCard() {

    // date is the date of one year before
    const min = new Date(new Date().setDate(new Date().getDate() - 365))

    const [minDate,setMinDate] = useState(min);
    const [maxDate,setMaxDate] = useState(new Date());

    // typinf useState list of Sale = <Sale[]>
    const [sales, setSales] = useState<Sale[]>( [] );

    //  useEffect always this component is used, this function will run
    useEffect(()=>{

        const formatedMinDate = minDate.toISOString().slice(0,10);

        const formatedMaxDate = maxDate.toISOString().slice(0,10);


        //connect to backend
        axios.get(`${BASE_URL}/sales?minDate=${formatedMinDate}&maxDate=${formatedMaxDate}`)
        .then((response)=>{
            setSales(response.data.content);
        })
    },[minDate,maxDate]);

    return(
        <div className="card">
                    <h2>Vendas</h2>
                    <div>
                        <div className="form-control-container" >
                            <DatePicker 
                                selected={minDate}
                                onChange={(date:Date)=>{ 
                                    setMinDate(date);
                                 }
                                }
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <div className="form-control-container" >
                            <DatePicker 
                                selected={maxDate}
                                onChange={(date:Date)=>{
                                        setMaxDate(date);
                                    }
                                }
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                    </div>
                    <div>
                        <table className="sales-table">
                            <thead>
                                <tr>
                                    <th className="show-major-992-width">ID</th>
                                    <th className="show-major-576-width">Data</th>
                                    <th>Vendedor</th>
                                    <th className="show-major-992-width">Visitas</th>
                                    <th className="show-major-992-width">Vendas</th>
                                    <th>Total</th>
                                    <th>Notificar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* expression react */
                                sales.map( sale =>{
                                    return(
                                        <tr key={sale.id}>
                                            <td className="show-major-992-width">{sale.id}</td>
                                            <td className="show-major-576-width">{new Date(sale.date).toLocaleDateString()}</td>
                                            <td>{sale.sellerName}</td>
                                            <td className="show-major-992-width">{sale.visited}</td>
                                            <td className="show-major-992-width">{sale.deals}</td>
                                            <td>R$ {sale.amount.toFixed(2)}</td>
                                            <td>
                                                <div className="red-button-container">
                                                    <NotificationButton/>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
    );
  }
  
  export default SalesCard;
  