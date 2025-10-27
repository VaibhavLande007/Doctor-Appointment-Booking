import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./approuter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-image-lightbox/style.css";
import "react-datepicker/src/stylesheets/datepicker.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/client/assets/css/iconsax.css";
import { Provider } from 'react-redux';
import store from "./core/data/redux/store.jsx";
if (window.location.pathname.includes("pharmacyadmin")) {
  require("./pharmacyadmin/assets/plugins/fontawesome/css/fontawesome.min.css");
  require("./pharmacyadmin/assets/plugins/fontawesome/css/all.min.css");
  require("./pharmacyadmin/assets/css/font-awesome.min.css");
  require("./pharmacyadmin/assets/css/custom.css");
  require("./pharmacyadmin/assets/css/feathericon.min.css");
  require("./pharmacyadmin/assets/js/feather.min.js");
  require("./pharmacyadmin/assets/css/bootstrap.min.css");
} else if (window.location.pathname.includes("admin")) {
  require("./admin/assets/css/feathericon.min.css");
  require("./admin/assets/js/feather.min.js");
  require("./admin/assets/plugins/fontawesome/css/all.min.css");
  require("./admin/assets/css/font-awesome.min.css");
  require("./admin/assets/css/custom.css");
} else {
  require("./client/assets/icons/fontawesome/css/fontawesome.min.css");
  require("./client/assets/icons/fontawesome/css/all.min.css");
  require("./client/assets/icons/feather/css/iconfont.css");
  // require("./client/assets/scss/main.scss");
  require("../src/client/components/customstyleclient.css");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Provider store={store}>
    <AppRouter />
    </Provider>
  </>
);
