import HomeContainer from "../containers/HomeContainer";
import AppContainer from "../containers/AppContainer";
import NotFoundContainer from "../containers/NotFoundContainer";
import MainLayout from "../layouts/MainLayout";
import EmptyLayout from "../layouts/EmptyLayout";

const routes = [
  {
    path: "/home",
    exact: true,
    component: HomeContainer,
    layout: MainLayout
  },
  {
    path: "/",
    exact: true,
    component: AppContainer,
    layout: MainLayout
  },
  {
    path: "*",
    exact: false,
    component: NotFoundContainer,
    layout: EmptyLayout
  }
];
export default routes;
