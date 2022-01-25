import { Provider } from "react-redux";
import { initStore } from "./store/initStore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { UnauthenticatedRoute } from "./components/UnauthenticatedRoute";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
const store = initStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <UnauthenticatedRoute>
              <Auth />
            </UnauthenticatedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <AuthenticatedRoute>
              <Settings />
            </AuthenticatedRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
