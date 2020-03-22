import React, {Component} from "react";
import "./navbar.module.scss";

class navbarModule extends Component {

  render () {
    const tabs = [
      { id: 1, title: '입양', url: 'adopt' },
      { id: 2, title: '입양 후기', url: 'adopt-review' },
      { id: 3, title: '실종', url: 'missing' },
      { id: 4, title: '봉사', url: 'volunteer' },
      { id: 5, title: '후원', url: 'donation' },
      { id: 6, title: 'Contact', url: 'contact' }
    ];

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark indigo">
        <a className="navbar-brand" href="/"><strong>하룻밤</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              tabs.map((tab) => 
                <li className="nav-item" key={tab.id}>
                  <a className="nav-link" href={tab.url}>{tab.title} <span className="sr-only">(current)</span></a>
                </li>
              )
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default navbarModule;