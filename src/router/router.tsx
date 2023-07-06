import {
  Route,
  createRoutesFromElements,
  createHashRouter,
} from "react-router-dom";
import App from "../App";
import FormattedPlainText from "../components/FormattedPlainText";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={``} element={<App />}>
        <Route
          path=""
          index
          element={<FormattedPlainText text="home" />}
        ></Route>
        <Route
          path="/home"
          index
          element={<FormattedPlainText text="home" />}
        ></Route>
        <Route
          path="/curriculum"
          index
          element={<FormattedPlainText text="curriculum" />}
        ></Route>
        <Route
          path="/portfolio"
          index
          element={<FormattedPlainText text="portfolio" />}
        ></Route>
      </Route>
    </>
  )
  // { basename: `${import.meta.env.BASE_URL}` }
  // commented this due to hash router usage intead of browser router
);

export default router;
