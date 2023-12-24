import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import User from "./components/user";
import Profile from "./components/user/Profile";
import Signup from "./components/main/Signup";
import { AppProvider } from "./components/AppContext";
import ResetPassword from "./components/main/ResetPassword";
import ContactUs from "./components/main/ContactUs";
import AboutUs from "./components/main/AboutUs";
import Feedback from "./components/main/Feedback";
import CompanySignup from "./components/main/CompanySignup";
import CompanyLogin from "./components/main/CompanyLogin";
import BrowseInterview from "./components/main/BrowseInterview";
import Subscribe from "./components/main/Subscribe";
import AddInterview from "./components/company/AddInterview";
import ManageInterview from "./components/company/ManageInterview";
import Company from "./components/company";
import CompanyProfile from "./components/company/CompanyProfile";
import Admin from "./components/admin";
import ManageCompany from "./components/admin/ManageCompany";
import ManageUser from "./components/admin/ManageUser";
import InterviewDetail from "./components/main/InterviewDetail";
import Companydetail from "./components/company/Companydetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            < Route path="/" element={<Navigate to="/main/home" />} />
            <Route path="main" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="reset" element={<ResetPassword />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="companysignup" element={<CompanySignup />} />
              <Route path="companylogin" element={<CompanyLogin />} />
              <Route path="browseinterview" element={<BrowseInterview />} />
              <Route path="subscribe" element={<Subscribe />} />
              <Route path="interviewdetail/:id" element={<InterviewDetail />} />
              <Route path="companydetail/:id" element={<Companydetail />} />
            </Route>
            <Route path="company" element={<Company />}>
              <Route path="addinterview" element={<AddInterview />} />
              <Route path="manageinterview" element={<ManageInterview />} />
              <Route path="companyprofile" element={<CompanyProfile />} />
            </Route>

            <Route path="user" element={<User />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="admin" element={<Admin />}>
              <Route path="managecompany" element={<ManageCompany />} />
              <Route path="manageuser" element={<ManageUser />} />
            </Route>
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
