import { useEffect, useState } from "react";
import "./customPopUp.css";

interface iCustomPopup {
  show: boolean;
  onClose(value: boolean): void;
  children: any;
  title?: string;
}

const CustomPopup = (props: iCustomPopup) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e: any) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={closeHandler}>&times;</span>
        {props.children}
      </div>
    </div>
    </div>
  );
};

export default CustomPopup;
