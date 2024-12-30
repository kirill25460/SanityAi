import { Route, Routes } from 'react-router-dom';
import { Header } from "./Header/Header";
import { SanityMainPage } from 'pages/SanityMainPage/SanityMainPage';
import { CompanyPage } from 'pages/CompanyPage/CompanyPage';
import { ServicesPage } from 'pages/ServicesPage/ServicesPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SanityMainPage />} />
        <Route path="/SanityAi" element={<SanityMainPage />} />
        <Route path="/Company" element={<CompanyPage />} />
        <Route path="/Services" element={<ServicesPage />} />
      </Routes>
    </>
  );
};
