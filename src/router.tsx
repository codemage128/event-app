import { Suspense, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<div>...Loading</div>}>
      <Component {...props} />
    </Suspense>
  );

const Landing = Loadable(lazy(() => import("./pages/Landing")));
const Detail = Loadable(lazy(() => import("./pages/Detail")));
const Search = Loadable(lazy(() => import("./pages/Search")));

const routes: RouteObject[] = [
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "*",
    element: <div>Page Not found</div>,
  },
];
export default routes;
