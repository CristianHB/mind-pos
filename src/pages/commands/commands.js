import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import { Modal, ModalBody } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import dataCategories from "./data-categories.json";
import dataProducts from "./data-products.json";

import {
  handleSetAppSidebarNone,
  handleSetAppHeaderNone,
  handleSetAppContentFullHeight,
  handleSetAppContentClass,
} from "../../utils/startApplication.jsx";
import { element } from "prop-types";

export default function Commands() {
  const { appState } = useContext(AppSettings);
  const [modalPosItem, setModalPosItem] = useState(false);
  const [posMobileSidebarToggled, setPosMobileSidebarToggled] = useState(false);
  const [product, setProduct] = useState(dataProducts);

  const togglePosMobileSidebar = () => {
    setPosMobileSidebarToggled((prevState) => !prevState);
  };

  const toggleModal = (data) => {
    setProduct(data);
    setModalPosItem((prevState) => !prevState);
  };

  const handleChange = () => {};

  function selectCategories(cat) {
    if (cat.id == "1") {
      setProduct(dataProducts);
    } else {
      setProduct(dataProducts.filter((el) => el.idCategoria == cat.id));
    }
  }

  //   const componentDidMount = () => {
  //     appState.handleSetAppSidebarNone(true);
  //     appState.handleSetAppHeaderNone(true);
  //     appState.handleSetAppContentFullHeight(true);
  //     appState.handleSetAppContentClass("p-0");
  //   };

  //   const componentWillUnmount = () => {
  //     appState.handleSetAppSidebarNone(false);
  //     appState.handleSetAppHeaderNone(false);
  //     appState.handleSetAppContentFullHeight(false);
  //     appState.handleSetAppContentClass("");
  //   };

  return (
    <div className="vh-100">
      <div
        className={
          "pos pos-customer " +
          (posMobileSidebarToggled ? "pos-mobile-sidebar-toggled" : "")
        }
        id="pos-customer"
      >
        <div className="pos-menu">
          <div className="logo">
            <Link to="/">
              <div className="logo-img">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/562/562678.png"
                />
              </div>
              <div className="logo-text">Categorias</div>
            </Link>
          </div>
          <div className="nav-container">
            <PerfectScrollbar
              className="height-full"
              options={{ suppressScrollX: true }}
            >
              <ul className="nav nav-tabs">
                {dataCategories.map((category, index) => (
                  <li className="nav-item" key={category.id + "-" + index}>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => selectCategories(category)}
                      className="nav-link"
                      data-filter={category.nombre}
                    >
                      <i className={category.icon}></i> {category.nombre}
                    </div>
                  </li>
                ))}
                {/* 
                  <li className="nav-item">
                    <Link
                      to="/pos/customer-order"
                      className="nav-link active"
                      data-filter="all"
                    >
                      <i className="fa fa-fw fa-utensils mr-1 ml-n2"></i> All
                      Dishes
                    </Link>
                  </li>*/}
              </ul>
            </PerfectScrollbar>
          </div>
        </div>

        <div className="pos-content">
          <PerfectScrollbar
            className="pos-content-container"
            options={{ suppressScrollX: true }}
          >
            <div className="product-row">
              {product.map((productMap, index) => (
                <div
                  key={productMap.id + "-" + index}
                  className="product-container"
                  data-type="meat"
                >
                  <Link
                    to="/pos/customer-order"
                    className="product"
                    onClick={() => toggleModal(productMap)}
                  >
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${productMap.imagen})`,
                      }}
                    ></div>
                    <div className="text">
                      <div className="title">{productMap.nombre}</div>
                      <div className="desc">{productMap.descripcion}</div>
                      <div className="price">${productMap.precio}</div>
                    </div>
                  </Link>
                </div>
              ))}
              {/* <div className="product-container" data-type="meat">
                <Link
                  to="/pos/customer-order"
                  className="product"
                  onClick={() => toggleModal("modalPosItem")}
                >
                  <div
                    className="img"
                    style={{
                      backgroundImage: "url(/assets/img/pos/product-1.jpg)",
                    }}
                  ></div>
                  <div className="text">
                    <div className="title">Grill Chicken Chop&reg;</div>
                    <div className="desc">chicken, egg, mushroom, salad</div>
                    <div className="price">$10.99</div>
                  </div>
                </Link>
              </div>*/}
            </div>
          </PerfectScrollbar>
        </div>

        <div className="pos-sidebar" id="pos-sidebar">
          <div className="pos-sidebar-header">
            <div className="back-btn">
              <button
                type="button"
                onClick={() => togglePosMobileSidebar()}
                className="btn"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-chevron-left"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="icon">
              <img alt="" src="../assets/img/pos/icon-table.svg" />
            </div>
            <div className="title">Table 01</div>
            <div className="order">
              Order: <b>#0056</b>
            </div>
          </div>
          <div className="pos-sidebar-nav">
            <ul className="nav nav-tabs nav-fill">
              <li className="nav-item">
                <Link to="/pos/customer-order" className="nav-link active">
                  New Order (5)
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pos/customer-order" className="nav-link">
                  Order History (0)
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="pos-sidebar-body tab-content"
            data-scrollbar="true"
            data-height="100%"
          >
            <div className="tab-pane fade h-100 show active" id="newOrderTab">
              <div className="pos-table">
                <div className="row pos-table-row">
                  <div className="col-9">
                    <div className="pos-product-thumb">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(/assets/img/pos/product-2.jpg)",
                        }}
                      ></div>
                      <div className="info">
                        <div className="title">Grill Pork Chop</div>
                        <div className="single-price">$12.99</div>
                        <div className="desc">- size: large</div>
                        <div className="input-group qty">
                          <div className="input-group-append">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-minus"></i>
                            </Link>
                          </div>
                          <input
                            type="text"
                            onChange={() => handleChange()}
                            className="form-control"
                            value="01"
                          />
                          <div className="input-group-prepend">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 total-price">$12.99</div>
                </div>
                <div className="row pos-table-row">
                  <div className="col-9">
                    <div className="pos-product-thumb">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(/assets/img/pos/product-8.jpg)",
                        }}
                      ></div>
                      <div className="info">
                        <div className="title">Orange Juice</div>
                        <div className="single-price">$5.00</div>
                        <div className="desc">
                          - size: large
                          <br />- less ice
                        </div>
                        <div className="input-group qty">
                          <div className="input-group-append">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-minus"></i>
                            </Link>
                          </div>
                          <input
                            type="text"
                            onChange={() => handleChange()}
                            className="form-control"
                          />
                          <div className="input-group-prepend">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 total-price">$10.00</div>
                  <div className="pos-remove-confirmation">
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      className="mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                    Remove this item?
                    <Link
                      to="/pos/customer-order"
                      className="btn btn-white ml-auto mr-2"
                    >
                      No
                    </Link>
                    <Link to="/pos/customer-order" className="btn btn-danger">
                      Yes
                    </Link>
                  </div>
                </div>
                <div className="row pos-table-row">
                  <div className="col-9">
                    <div className="pos-product-thumb">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(/assets/img/pos/product-1.jpg)",
                        }}
                      ></div>
                      <div className="info">
                        <div className="title">Grill chicken chop</div>
                        <div className="single-price">$10.99</div>
                        <div className="desc">
                          - size: large
                          <br />- spicy: medium
                        </div>
                        <div className="input-group qty">
                          <div className="input-group-append">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-minus"></i>
                            </Link>
                          </div>
                          <input
                            type="text"
                            onChange={() => handleChange()}
                            className="form-control"
                            value="01"
                          />
                          <div className="input-group-prepend">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 total-price">$10.99</div>
                </div>
                <div className="row pos-table-row">
                  <div className="col-9">
                    <div className="pos-product-thumb">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(/assets/img/pos/product-5.jpg)",
                        }}
                      ></div>
                      <div className="info">
                        <div className="title">Hawaiian Pizza</div>
                        <div className="single-price">$15.00</div>
                        <div className="desc">
                          - size: large
                          <br />- more onion
                        </div>
                        <div className="input-group qty">
                          <div className="input-group-append">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-minus"></i>
                            </Link>
                          </div>
                          <input
                            type="text"
                            onChange={() => handleChange()}
                            className="form-control"
                            value="02"
                          />
                          <div className="input-group-prepend">
                            <Link
                              to="/pos/customer-order"
                              className="btn btn-default"
                            >
                              <i className="fa fa-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 total-price">$15.00</div>
                </div>
                <div className="row pos-table-row">
                  <div className="col-9">
                    <div className="pos-product-thumb">
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(/assets/img/pos/product-10.jpg)",
                        }}
                      ></div>
                      <div className="info">
                        <div className="title">Mushroom Soup</div>
                        <div className="single-price">$3.99</div>
                        <div className="desc">
                          - size: large
                          <br />- more cheese
                        </div>
                        <div className="input-group qty">
                          <div className="input-group-append">
                            <button className="btn btn-default">
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            onChange={() => handleChange()}
                            className="form-control"
                            value="01"
                          />
                          <div className="input-group-prepend">
                            <button className="btn btn-default">
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 total-price">$3.99</div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade h-100" id="orderHistoryTab">
              <div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
                <div>
                  <div className="mb-3 mt-n5">
                    <svg
                      width="6em"
                      height="6em"
                      viewBox="0 0 16 16"
                      className="text-gray-300"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
                      />
                      <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                    </svg>
                  </div>
                  <h4>No order history found</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="pos-sidebar-footer">
            <div className="subtotal">
              <div className="text">Subtotal</div>
              <div className="price">$30.98</div>
            </div>
            <div className="taxes">
              <div className="text">Taxes (6%)</div>
              <div className="price">$2.12</div>
            </div>
            <div className="total">
              <div className="text">Total</div>
              <div className="price">$33.10</div>
            </div>
            <div className="btn-row">
              <Link to="/pos/customer-order" className="btn btn-default">
                <i className="fa fa-bell fa-fw fa-lg"></i> Service
              </Link>
              <Link to="/pos/customer-order" className="btn btn-default">
                <i className="fa fa-file-invoice-dollar fa-fw fa-lg"></i> Bill
              </Link>
              <Link to="/pos/customer-order" className="btn btn-success">
                <i className="fa fa-check fa-fw fa-lg"></i> Submit Order
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/pos/customer-order"
        className="pos-mobile-sidebar-toggler"
        onClick={() => togglePosMobileSidebar()}
      >
        <svg
          viewBox="0 0 16 16"
          className="img"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
          />
          <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
        </svg>
        <span className="badge">5</span>
      </Link>
      <Modal
        isOpen={modalPosItem}
        size="lg"
        toggle={() => toggleModal("modalPosItem")}
        modalClassName="modal-pos-item"
      >
        <ModalBody className="p-0">
          <Link
            to="/pos/customer-order"
            onClick={() => toggleModal("modalPosItem")}
            className="btn-close position-absolute top-0 end-0 m-4"
          ></Link>
          <div className="pos-product">
            <div className="pos-product-img">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${product.imagen})`,
                }}
              ></div>
            </div>
            <div className="pos-product-info">
              <div className="title">{product.nombre}</div>
              <div className="desc">{product.descripcion}</div>
              <div className="price">${product.precio}</div>
              <hr />
              <div className="option-row">
                <div className="qty">
                  <div className="input-group">
                    <Link to="/pos/customer-order" className="btn btn-default">
                      <i className="fa fa-minus"></i>
                    </Link>
                    <input
                      type="text"
                      className="form-control border-0 text-center"
                      name=""
                      value="1"
                    />
                    <Link to="/pos/customer-order" className="btn btn-default">
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="option-row">
                <div className="option-title">Size</div>
                <div className="option-list">
                  <div className="option">
                    <input
                      type="radio"
                      id="size3"
                      name="size"
                      className="option-input"
                      checked
                    />
                    <label className="option-label" for="size3">
                      <span className="option-text">Small</span>
                      <span className="option-price">+0.00</span>
                    </label>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      id="size1"
                      name="size"
                      className="option-input"
                    />
                    <label className="option-label" for="size1">
                      <span className="option-text">Large</span>
                      <span className="option-price">+3.00</span>
                    </label>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      id="size2"
                      name="size"
                      className="option-input"
                    />
                    <label className="option-label" for="size2">
                      <span className="option-text">Medium</span>
                      <span className="option-price">+1.50</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="option-row">
                <div className="option-title">Add On</div>
                <div className="option-list">
                  <div className="option">
                    <input
                      type="checkbox"
                      name="addon[sos]"
                      value="true"
                      className="option-input"
                      id="addon1"
                    />
                    <label className="option-label" for="addon1">
                      <span className="option-text">More BBQ sos</span>
                      <span className="option-price">+0.00</span>
                    </label>
                  </div>
                  <div className="option">
                    <input
                      type="checkbox"
                      name="addon[ff]"
                      value="true"
                      className="option-input"
                      id="addon2"
                    />
                    <label className="option-label" for="addon2">
                      <span className="option-text">Extra french fries</span>
                      <span className="option-price">+1.00</span>
                    </label>
                  </div>
                  <div className="option">
                    <input
                      type="checkbox"
                      name="addon[ms]"
                      value="true"
                      className="option-input"
                      id="addon3"
                    />
                    <label className="option-label" for="addon3">
                      <span className="option-text">Mushroom soup</span>
                      <span className="option-price">+3.50</span>
                    </label>
                  </div>
                  <div className="option">
                    <input
                      type="checkbox"
                      name="addon[ms]"
                      value="true"
                      className="option-input"
                      id="addon4"
                    />
                    <label className="option-label" for="addon4">
                      <span className="option-text">Lemon Juice (set)</span>
                      <span className="option-price">+2.50</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="btn-row">
                <Link
                  to="/pos/customer-order"
                  className="btn btn-default"
                  onClick={() => toggleModal("modalPosItem")}
                >
                  Cancel
                </Link>
                <Link to="/pos/customer-order" className="btn btn-success">
                  Add to cart <i className="fa fa-plus fa-fw ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
