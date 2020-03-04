import React, {Component} from "react";
import styles from "./modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class modalModule extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { visible, close } = this.props;
    return (
      <React.Fragment>
        {
          visible ? 
          <div className={cx("dd")}>
            open
            <button onClick={close}>close button</button>
          </div>:
          <div>
            close
          </div>
        }
      </React.Fragment>
    );
  }
}

export default modalModule;