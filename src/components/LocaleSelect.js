/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import { LocaleContext } from '../contexts';

export default class LocaleSelect extends React.Component {
  state = {
    active: false
  };

  handleSetActive = active => this.setState({ active });

  render() {
    const { active } = this.state;

    return (
      <LocaleContext.Consumer>
        {({ locale: currentLocale, setLocale }) => (
          <div className={`dropdown navbar-item ${active ? 'is-active' : ''}`}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={() => this.handleSetActive(!active)}
              >
                <span>{currentLocale}</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {['en', 'id'].map(locale => (
                  <a
                    href="#"
                    className={`dropdown-item ${
                      currentLocale === locale ? 'is-active' : ''
                    }`}
                    key={locale}
                    onClick={() => {
                      setLocale(locale);
                      this.handleSetActive(false);
                    }}
                  >
                    {locale}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </LocaleContext.Consumer>
    );
  }
}
