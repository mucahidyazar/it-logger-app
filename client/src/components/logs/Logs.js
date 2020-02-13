import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../store/action/index";

import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = ({ getLogs, logs: { logs, filteredLogs, loading } }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  let displayedLogs = null;

  if (filteredLogs) {
    displayedLogs = filteredLogs;
  } else {
    displayedLogs = logs;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && displayedLogs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        displayedLogs.map((log, index) => (
          <LogItem key={log._id} id={index + 1} log={log} />
        ))
      )}
    </ul>
  );
};

Logs.protoTypes = {
  logs: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  logs: state.logs
});

const mapDispatchToProps = dispatch => ({
  getLogs: () => dispatch(actions.getLogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
