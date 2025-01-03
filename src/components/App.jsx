import { Route, Routes } from 'react-router-dom';
import { SanityMainPage } from 'pages/SanityMainPage/SanityMainPage';
import { CompanyPage } from 'pages/CompanyPage/CompanyPage';
import { ServicesPage } from 'pages/ServicesPage/ServicesPage';
import ProductPage from 'pages/ProductPage/ProductPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SanityMainPage />} />
        <Route path="/SanityAi" element={<SanityMainPage />} />
        <Route path="/Company" element={<CompanyPage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
};
