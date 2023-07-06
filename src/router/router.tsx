import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import FormattedPlainText from "../components/FormattedPlainText";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/vereLPatlanPage" element={<App />}>
        <Route
          path="/vereLPatlanPage"
          index
          element={<FormattedPlainText text="home" />}
        ></Route>
        <Route
          path="/vereLPatlanPage/home"
          index
          element={<FormattedPlainText text="home" />}
        ></Route>
        <Route
          path="/vereLPatlanPage/curriculum"
          index
          element={<FormattedPlainText text="curriculum" />}
        ></Route>
        <Route
          path="/vereLPatlanPage/portfolio"
          index
          element={<FormattedPlainText text="portfolio" />}
        ></Route>
      </Route>
    </>
  )
);

export default router;
