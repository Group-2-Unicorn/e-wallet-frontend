import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Button = ({
    name, 
    width,
    height,
    backgroundColor,
    border, 
    color, 
    marginLeft,
    borderTopLeft,
    borderTopRight,
    borderBottomLeft, 
    borderBottomRight,
    borderRadius, 
    borderRightRadius,
    borderLeftRadius,
    fontSize,
    type

}) => {
    return(
        <button style={{
            width: width,
            height: height,
            borderTopLeft: borderTopLeft,
            borderBottomLeft: borderBottomLeft,
            borderBottomRight: borderBottomRight,
            borderRightRadius: borderRightRadius,
            borderLeftRadius: borderLeftRadius,
            borderTopRight: borderTopRight,
            borderRadius: borderRadius,
            color: color,
            backgroundColor: backgroundColor,
            border: border,
            marginLeft: marginLeft,
            fontSize: fontSize,
            type: type

        }}
        >{name}</button>
    )
}

export default Button