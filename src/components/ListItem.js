import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  const { name, link, icon, bgColor } = props.item;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor // Use bgColor to set background color

      }}
    >
      <img src={icon} alt="" />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
