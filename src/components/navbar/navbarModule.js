import React, {Component} from "react";
import styles from './navbar.module.scss';
import classnames from 'classnames/bind';
import { Link, withRouter } from "react-router-dom";
import logo_img from "./../../assets/imgs/logo.png";

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
      <nav className={cx('navbar', 'sticky-top', 'navbar-expand-lg', 'navbar-light', 'indigo')}>
        <Link className={cx('navbar-brand')} to="/"><strong>하룻밤</strong></Link>
        <button className={cx('navbar-toggler')} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={cx('navbar-toggler-icon')}></span>
        </button>
        <div className={cx('collapse', 'navbar-collapse')} id="navbarSupportedContent">
          <div className={cx('logo')}>
            <Link to="/"><img src={logo_img} alt=""></img></Link>
          </div>
          <ul className={cx('navbar-nav', 'mr-auto', 'tabs')}>
            {
              this.state.tabs.map((tab) => 
                <li className={cx('nav-item', tab.active && 'active')} key={tab.id}>
                  <Link to={tab.path} className={cx('nav-link', 'link')}>{tab.title} <span className={cx('sr-only')}>(current)</span></Link>
                </li>
              )
            }
          </ul>
          <ul className={cx('account', 'navbar-nav', 'mr-audo')}>
            <li className={cx('nav-item')}>
              <Link to="login" className={cx('nav-link', 'link')}>로그인</Link>
            </li>
            <li className={cx('nav-item')}>
              <Link to="signup" className={cx('nav-link', 'link')}>회원가입</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(navbarModule);