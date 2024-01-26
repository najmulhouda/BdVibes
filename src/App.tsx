import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";

const App = () => (
  <main className="flex min-h-screen">
    <Routes>
      {/* Public route */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Route>

      {/* Private route */}
      <Route element={<RootLayout />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Routes>
  </main>
);

export default App;
