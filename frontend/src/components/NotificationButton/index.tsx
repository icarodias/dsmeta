import notificartionIcon from "../../assets/img/notification-icon.svg";

import "./styles.css";


function NotificationButton() {
    return(
        <div className="red-button">
            <img src={notificartionIcon} alt="notificar" />
        </div>
    )
  }
  
  export default NotificationButton;
  