import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { PopUpAction } from "../reduxStore/imagePopUpReducer";
import "./imgStyle.css";

interface iCustomImg {
  className: string;
  src: any;
  showPopUp?: boolean;
  id?: string;
  altText?: string;
  style?: any;
}

const CustomImage = (props: iCustomImg) => {
  const { className, id, src, altText, showPopUp, style } = props;

  const dispatch = useDispatch();

  const openPopUp = () => {
    dispatch({
      type: PopUpAction.SHOW,
      payload: (
        <img className={"enlargedImage"} alt={altText} id={id} src={src} />
      ),
    });
  };

  return (
    <Fragment>
      <img
        className={className}
        alt={altText}
        id={id}
        src={src}
        title={showPopUp ? "Click to enlarge" : altText ? altText : "Image"}
        onClick={(e) => (showPopUp ? openPopUp() : "")}
        style={style}
      />
    </Fragment>
  );
};

export default CustomImage;
