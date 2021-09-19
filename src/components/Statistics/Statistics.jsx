import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) =>
  total === 0 ? (
    <Notification message="No feedback given"></Notification>
  ) : (
    <div className="StatisticsWrapper">
      <h1>{title}</h1>
      <ul>
        <li>good: {good}</li>
        <li>neutral:{neutral}</li>
        <li>bad:{bad} </li>
      </ul>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Positive feedback: <b>{positivePercentage}</b>%
      </p>
    </div>
  );

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
