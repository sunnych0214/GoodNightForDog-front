import React, {Component} from "react";
import styles from './navbar.module.scss';
import classnames from 'classnames/bind';
import { Link, withRouter } from "react-router-dom";

const cx = classnames.bind(styles);

class navbarModule extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tabs: [
        { id: 1, title: '입양', path: '/adopt' },
        { id: 2, title: '입양 후기', path: '/adopt-review' },
        { id: 3, title: '실종', path: '/missing' },
        { id: 4, title: '봉사', path: '/volunteer' },
        { id: 5, title: '후원', path: '/donation' },
        { id: 6, title: 'Contact', path: '/contact' }
      ]
    };
  }

  componentDidMount() {
    this.initTab();
  }

  componentDidUpdate(prevProps) {
    // Route가 변경되었는 지 check (onRouteChanged)
    if (this.props.location !== prevProps.location) {
      this.initTab();
    }
  }

  /**
   * tabs에서 현재 path와 같은 tab을 찾아 active true를 해주는 작업
   */
  initTab() {
    const tabs = [ ...this.state.tabs ];
    tabs.forEach((tab) => tab.active = tab.path === this.props.location.pathname);
    this.setState({ tabs });
  }

  render () {
    return (
      <nav className={cx('navbar', 'fixed-top', 'navbar-expand-lg', 'navbar-light', 'indigo')}>
        <a className={cx('navbar-brand')} href="/"><strong>하룻밤</strong></a>
        <button className={cx('navbar-toggler')} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={cx('navbar-toggler-icon')}></span>
        </button>
        <div className={cx('collapse', 'navbar-collapse')} id="navbarSupportedContent">
          <ul className={cx('navbar-nav', 'mr-auto', 'tabs')}>
            {
              this.state.tabs.map((tab) => 
                <li className={cx('nav-item', tab.active && 'active')} key={tab.id}>
                  <Link to={tab.path} className={cx('nav-link', 'link')}>{tab.title} <span className={cx('sr-only')}>(current)</span></Link>
                </li>
              )
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(navbarModule);