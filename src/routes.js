/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/radio-management-server-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/radio-management-server-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Maps from "views/Map.js";
import GNodeBMetrics from "views/GNodeBMetrics"; 
import GNodeBs from "views/GNodeBs"; 

var routes = [
  
  
  {
    path: "/gNodeBs",
    name: "gNodeBs",
    icon: "nc-icon nc-bank",
    component: GNodeBs,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/gNodeBMetrics",
    name: "gNodeB Metrics",
    icon: "nc-icon nc-pin-3",
    component: GNodeBMetrics,
    layout: "/admin",
  },

];
export default routes;
