import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import * as actions from "../../store/action/index";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, id, onDeleteLog, onSetCurrent }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => onSetCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span>
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a
          href="#!"
          className="secondary-content"
          onClick={() => {
            onDeleteLog(log._id);
            M.toast({ html: "Log deleted!" });
          }}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  onDeleteLog: PropTypes.func.isRequired,
  onSetCurrent: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onDeleteLog: id => dispatch(actions.deleteLog(id)),
  onSetCurrent: log => dispatch(actions.setCurrent(log))
});

export default connect(null, mapDispatchToProps)(LogItem);
