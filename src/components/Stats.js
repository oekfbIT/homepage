import Statitem2 from "./Statitem2";
import PropTypes from "prop-types";
import styles from "./Stats.module.css";

const Stats = ({ className = "" }) => {
  return (
    <div className={[styles.stats, className].join(" ")}>
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
      <Statitem2
        key="Gelb/Rote Karten"
        value="0"
        statitemFlex="1"
        statitemAlignSelf="unset"
      />
    </div>
  );
};

Stats.propTypes = {
  className: PropTypes.string,
};

export default Stats;
