/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../views/Layout';
import products from '../products';

export default function ProductList() {
  return (
    <Layout>
      <div className="columns">
        <div className="column is-full">
          <div>
            <h3 className="title">Our Products</h3>
            <div className="columns">
              {products.map((product, index) => (
                <div className="column" key={index}>
                  <Link to={`/product/${product.slug}`}>
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img alt={product.title} src={product.imageUrl} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">{product.title}</p>
                            <div className="content">
                              {product.description}
                              <br />
                            </div>
                            <h5>{product.price}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
