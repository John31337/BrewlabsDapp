import Pools from "layouts/pools";
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "route",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-shop" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Pools",
    key: "pools",
    route: "/pools",
    icon: (
      <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <Pools />,
  },
  {
    type: "route",
    name: "Farms",
    key: "farms",
    route: "/farms",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Zap",
    key: "zap",
    route: "/zap",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-glasses-2" />,
    component: <VirtualReality />,
  },
  {
    type: "route",
    name: "Swap",
    key: "swap",
    route: "/swap",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-notification-70" />,
    component: <RTL />,
  },
  {
    type: "route",
    name: "Constructor",
    key: "constructor",
    route: "/constructor",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-map-big" />,
    component: <Profile />,
  },
];

export default routes;
