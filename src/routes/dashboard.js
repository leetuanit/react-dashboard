import Index from '../views/Index';
import Profile from '../views/Profile';
import Icon from '../views/Icon';
import Notification from '../views/Notification';
const dashboardRouter = [
  {
    path: "/index",
    title: "Dashboard",
    icon: "pe-7s-graph",
    view: Index
  },
  {
    path: "/profile",
    title: "User profile",
    icon: "pe-7s-user",
    view: Profile
  },
  {
    path: "/icon",
    title: "Icon",
    icon: "pe-7s-science",
    view: Icon
  },
  {
    path: "/notification",
    title: "Notification",
    icon: "pe-7s-bell",
    view: Notification
  }
];
export default dashboardRouter;