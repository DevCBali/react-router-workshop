/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useContext } from 'react';

import { LocaleContext } from '../contexts';

export default function LocaleSelect() {
  const [active, setActive] = useState(false);

  const { locale: currentLocale, setLocale } = useContext(LocaleContext);

  return (
    <div className={`dropdown navbar-item ${active ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setActive(!active)}
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
                setActive(false);
              }}
            >
              {locale}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
