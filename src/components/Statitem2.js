import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Statitem2.module.css";

const Statitem2 = ({
  className = "",
  key,
  value,
  statitemFlex,
  statitemAlignSelf,
}) => {
  const statitemStyle = useMemo(() => {
    return {
      flex: statitemFlex,
      alignSelf: statitemAlignSelf,
    };
  }, [statitemFlex, statitemAlignSelf]);

  return (
    <div
      className={[styles.statitem, className].join(" ")}
      style={statitemStyle}
    >
      <div className={styles.key}>{key}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

Statitem2.propTypes = {
  className: PropTypes.string,
  key: PropTypes.string,
  value: PropTypes.string,

  /** Style props */
  statitemFlex: PropTypes.any,
  statitemAlignSelf: PropTypes.any,
};

export default Statitem2;