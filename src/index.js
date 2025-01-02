import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Components/Assets/global.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Screens/homePage/HomePage';
import AboutUs from './Components/Screens/aboutUs/AboutUs';
import CareersPage from './Components/Screens/careerPage/CareersPage';
// import PrivateRoutes from './Components/Screens/landingPage/PrivateRoutes';
// import HomePage from './Components/Screens/homePage/HomePage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import BlogPage from './Components/Screens/blogPage/BlogPage';
import CustomSoftwareDevelopment from './Components/Screens/blogPage/customSoftwareDevelopment/CustomSoftwareDevelopment';
import ApplicationTesting from './Components/Screens/blogPage/applicationTesting/ApplicationTesting';
import ITConsulting from './Components/Screens/blogPage/iTConsulting/ITConsulting';
import ITMaintanenceAndSupport from './Components/Screens/blogPage/iTMaintanenceAndSupport/ITMaintanenceAndSupport';
import WaterfallDevelopment from './Components/Screens/blogPage/waterfallDevelopment.js/WaterfallDevelopment';
import ITSystemAndServiceIntegration from './Components/Screens/blogPage/iTSystemAndServiceIntegration/ITSystemAndServiceIntegration';
import DesignThinking from './Components/Screens/blogPage/designThinking/DesignThinking';
import AgileSoftware from './Components/Screens/blogPage/agileSoftwareDevelopment/AgileSoftwareDevelopment';
import MailSender from './Components/Screens/Email';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <ToastContainer />
          <Routes >
            <Route path='/' element={<HomePage />} />
            {/* <Route element={<PrivateRoutes />}> */}
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/careers' element={<CareersPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/custom_software_development' element={<CustomSoftwareDevelopment/>} />
            <Route path='/application_testing' element={<ApplicationTesting/>} />
            <Route path='/consulting' element={<ITConsulting/>} />
            <Route path='/maintanence_and_support' element={<ITMaintanenceAndSupport/>} />
            <Route path='/waterfall' element={<WaterfallDevelopment/>} />
            <Route path='/system_Service_integration' element={<ITSystemAndServiceIntegration/>} />
            <Route path='/design_thinking' element={<DesignThinking/>} />
            <Route path='/agile' element={<AgileSoftware/>} />
            <Route path='/email' element={<MailSender/>} />

            
            {/* </Route> */}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
