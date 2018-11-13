/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';

import LocaleSelect from './LocaleSelect';
import { LocaleContext } from '../contexts';
import trans from '../trans';

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width={112}
              height={28}
            />
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <LocaleContext.Consumer>
          {({ locale }) => (
            <div className="navbar-end">
              <a className="navbar-item">{trans[locale]['Home']}</a>
              <LocaleSelect />
            </div>
          )}
        </LocaleContext.Consumer>
      </nav>
      {children}
    </div>
  );
}
