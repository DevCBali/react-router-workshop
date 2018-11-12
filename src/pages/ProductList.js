/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

import Layout from "../views/Layout";

export default class ProductList extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns">
          <div className="column is-full">
            <div>
              <h3 className="title">Our Products</h3>
              <div className="columns">
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          alt="Converse"
                          src="https://images.nike.com/is/image/DotCom/PDP_HERO/132170C_001_A_PREM/converse-chuck-taylor-all-star-leather-unisex-high-top-shoe.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">Converse</p>
                          <div className="content">
                            aman
                            <br />
                          </div>
                          <h5>Rp 3.050</h5>
                          <button className="button is-primary">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          alt="Vans"
                          src="https://media.journeys.com/images/products/1_259094_ZM.JPG"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">Vans</p>
                          <div className="content">
                            aman
                            <br />
                          </div>
                          <h5>Rp 2.000</h5>
                          <button className="button is-primary">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          alt="New Balance"
                          src="https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-07-2017_newbalance_u520avintage_blue_u520ab_eh_1.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">New Balance</p>
                          <div className="content">
                            aman
                            <br />
                          </div>
                          <h5>Rp 550</h5>
                          <button className="button is-primary">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          alt="New Balance"
                          src="https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-07-2017_newbalance_u520avintage_blue_u520ab_eh_1.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">New Balance</p>
                          <div className="content">
                            aman
                            <br />
                          </div>
                          <h5>Rp 550</h5>
                          <button className="button is-primary">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
