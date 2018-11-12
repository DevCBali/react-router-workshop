/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../views/Layout';
import { LocaleContext } from '../contexts';
import trans from '../trans';
import products from '../products';

export default function Product({ match }) {
  const { locale } = useContext(LocaleContext);
  const product = products.find(
    product => product.slug === match.params.product
  );
  return (
    <Layout>
      <div className="columns">
        <div className="column is-12">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  {product.title}
                </a>
              </li>
            </ul>
          </nav>
          <h3 className="title">{product.title}</h3>
        </div>
      </div>
      <div className="columns">
        <div className="column is-5">
          <figure className="image">
            <img alt={product.title} src={product.imageUrl} />
          </figure>
        </div>
        <div className="column is-5">
          <div>{product.price}</div>
          <a className="button is-primary">{trans[locale]['Add to Cart']}</a>
        </div>
      </div>
    </Layout>
  );
}
