import "./styles.css";
import logo from "../../assets/img/logo.svg";

function Header() {
    return(
        <header>
            <div className="header-content">
                <img src={logo} alt="Logo DSMeta"/>  
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a target="_blank"  href="https://google.com">Icaro</a></p>
            </div>
        </header>
    )
  }
  
  export default Header;
  