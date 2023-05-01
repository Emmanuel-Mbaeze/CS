import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Category from "../Category/Category";
import SignUp from "../SigmUpAndSignIn/SignUp";
import SignIn from "../SigmUpAndSignIn/SignIn";
import Information from "../Information/Information";
import Detail from "../Detail/Detail";
import Paystack from "../Payment/Paystack";
import Review from "../Review/Review";
import Accreview from "../Review/Accreview";
import Allitems from "../Allitems/Allitems";
import ErrorOtp from "../ErrorOtp/ErrorOtp";
import Checkout from "../Payment/Checkout";
import Shipping from "../Payment/Shipping";
import Finishshipping from "../Payment/Finishshipping";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
// import Otppage from "../../OtpPage/Otppage";
import Bankdetails from "../SigmUpAndSignIn/Bankdetails";
import Businessinfo2 from "../SigmUpAndSignIn/Businessinfo2";
import Featured from "../Allitems/Featured";
import Cart from "../Payment/Cart";
import Personal from "../SigmUpAndSignIn/Personal";
import Upload from "../SigmUpAndSignIn/Dashboard";
import Uploads from "../SigmUpAndSignIn/Uploads";
import Uploadimg from "../SigmUpAndSignIn/Uploadimg";
import Variation from "../SigmUpAndSignIn/Variation";
import Uploadsuccess from "../Review/Uploadsuccess";
import Businessinfo from "../SigmUpAndSignIn/Businessinfo";
import PersonalInfo from "../SigmUpAndSignIn/PersonalInfo";
import Productpage from "../SigmUpAndSignIn/Productpage";
import Adsignup from "../Admin/Adsignup";
import Adlogin from "../Admin/Adlogin";
import Adpage from "../Admin/Adpage";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/seller",
      element: <LandingPage />,
    },
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Category />,
        },
      ],
    },
    {
      path: "/admin-auth",
      children: [
        {
          index: true,
          element: <Adsignup />,
        },
        {
          path: "user",
          element: <Adsignup />,
        },
        {
          path: "login",
          element: <Adlogin />,
        },
      ],
    },
    {
      path: "/admin-page",
      element: <Adpage />,
    },
    {
      path: "/auth",
      children: [
        {
          index: true,
          element: <SignUp />,
        },
        {
          path: "user",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        // {
        //   path: "verify",
        //   element: <Otppage />,
        // },
        {
          path: "information",
          element: <Information />,
        },
        {
          path: "bankdetails",
          element: <Bankdetails />,
        },
        {
          path: "businessinfo",
          element: <Businessinfo />,
        },
        {
          path: "personalInfo",
          element: <PersonalInfo />,
        },
        {
          path: "review",
          element: <Review />,
        },
        {
          path: "acct-review",
          element: <Accreview />,
        },
      ],
    },
    {
      path: "/information",
      element: <Information />,
    },
    {
      path: "/personal",
      element: <Personal />,
    },
    {
      path: "/review",
      element: <Review />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/bankdetails",
      element: <Bankdetails />,
    },
    {
      path: "/business",
      element: <Businessinfo />,
    },
    {
      path: "/product variation",
      element: <Variation />,
    },
    {
      path: "/Upload success",
      element: <Uploadsuccess />,
    },
    {
      path: "/business2",
      element: <Businessinfo2 />,
    },
    {
      path: "/acct-review",
      element: <Accreview />,
    },
    {
      path: "/uploads",
      element: <Uploads />,
    },
    {
      path: "/upload",
      element: <Uploadimg />,
    },
    {
      path: "/allitems",
      element: <Allitems />,
    },
    {
      path: "/product",
      element: <Productpage />,
    },
    // {
    //   path: "/otperror",
    //   element: <ErrorOtp />,
    // },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/featured",
      element: <Featured />,
    },
    {
      path: "/shipping",
      element: <Finishshipping />,
    },
    {
      path: "/completeshipping",
      element: <Shipping />,
    },

    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/seller-dashboard",
      element: <Dashboard />,
    },
    {
      path: "/payment",
      element: <Paystack />,
    },
  ]);

  return element;
};

export default AllRoutes;
