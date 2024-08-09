
import React from "react";
import PropTypes from "prop-types";
import styles from "./Statitem2.module.css";

const Statitem2 = ({ title, value, statitemFlex, statitemAlignSelf }) => {
  // Split the text into lines for each list item
  const listItems = value.split("\n").map((item, index) => (
      <li key={index}>{item.trim()}</li>
  ));

  return (
      <div
          className={styles.statItem}
          style={{ flex: statitemFlex, alignSelf: statitemAlignSelf }}
      >
        <h6>{title}</h6>
        <ul className={styles.value}>{listItems}</ul>
      </div>
  );
};

Statitem2.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  statitemFlex: PropTypes.string,
  statitemAlignSelf: PropTypes.string,
};

export default Statitem2;
