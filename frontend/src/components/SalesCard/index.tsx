import NotificationButton from "../NotificationButton";

import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SalesCard() {
    return(
        <div className="card">
                    <h2>Vendas</h2>
                    <div>
                        <div className="form-control-container" >
                            <DatePicker 
                                selected={new Date()}
                                onChange={(date:Date)=>{}}
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <div className="form-control-container" >
                            <DatePicker 
                                selected={new Date()}
                                onChange={(date:Date)=>{}}
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
                                <tr>
                                    <td className="show-major-992-width">#341</td>
                                    <td className="show-major-576-width">08/08/2020</td>
                                    <td>Anakin</td>
                                    <td className="show-major-992-width">15</td>
                                    <td className="show-major-992-width">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="red-button-container">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show-major-992-width">#341</td>
                                    <td className="show-major-576-width">08/08/2020</td>
                                    <td>Anakin</td>
                                    <td className="show-major-992-width">15</td>
                                    <td className="show-major-992-width">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="red-button-container">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show-major-992-width">#341</td>
                                    <td className="show-major-576-width">08/08/2020</td>
                                    <td>Anakin</td>
                                    <td className="show-major-992-width">15</td>
                                    <td className="show-major-992-width">11</td>
                                    <td>R$ 55300.00</td>
                                    <td>
                                        <div className="red-button-container">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    )
  }
  
  export default SalesCard;
  