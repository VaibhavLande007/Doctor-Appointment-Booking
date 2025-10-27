import React from 'react';
import { Link } from "react-router-dom";
import { Product, Product1, Product2 } from '../../Pharmacy/image';
import ImageWithBasePath from '../../../../core/img/imagewithbasebath';

function Chart() {
    return (
        <>
           
            <li className="nav-item dropdown noti-nav view-cart-header me-3 pe-0">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link active-dot active-dot-purple p-0 position-relative"
                      data-bs-toggle="dropdown"
                    >
                      <i className="isax isax-shopping-cart" />
                    </Link>
                    <div className="dropdown-menu notifications dropdown-menu-end">
                      <div className="shopping-cart">
                        <ul className="shopping-cart-items list-unstyled">
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <Link to="/Pharmacy/product-description">
                              <ImageWithBasePath
                                className="avatar-img rounded"
                                src="assets/img/products/product.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/Pharmacy/product-description" className="item-name">
                              Benzaxapine Croplex
                            </Link>
                            <span className="item-price">$849.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <Link to="/Pharmacy/product-description">
                              <ImageWithBasePath
                                className="avatar-img rounded"
                                src="assets/img/products/product1.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/Pharmacy/product-description" className="item-name">
                              Ombinazol Bonibamol
                            </Link>
                            <span className="item-price">$1,249.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <Link to="/Pharmacy/product-description">
                              <ImageWithBasePath
                                className="avatar-img rounded"
                                src="assets/img/products/product2.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/Pharmacy/product-description" className="item-name">
                              Dantotate Dantodazole
                            </Link>
                            <span className="item-price">$129.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                        </ul>
                        <div className="booking-summary pt-3">
                          <div className="booking-item-wrap">
                            <ul className="booking-date">
                              <li>
                                Subtotal <span>$5,877.00</span>
                              </li>
                              <li>
                                Shipping <span>$25.00</span>
                              </li>
                              <li>
                                Tax <span>$0.00</span>
                              </li>
                              <li>
                                Total <span>$5.2555</span>
                              </li>
                            </ul>
                            <div className="booking-total">
                              <ul className="booking-total-list text-align">
                                <li>
                                  <div className="clinic-booking pt-3">
                                    <Link className="apt-btn" to="/Pharmacy/cart">
                                      View Cart
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <div className="clinic-booking pt-3">
                                    <Link className="apt-btn" to="/Pharmacy/product-checkout">
                                      Checkout
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
        </>
    );
}

export default Chart;
