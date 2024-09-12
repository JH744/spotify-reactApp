import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import {Provider} from "react-redux";
import store from "./redux/store.jsx";
import ProtectPage from "./layout/Component/ProtectPage.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={
            <ProtectPage>
            <Layout />
            </ProtectPage>
        }>
          <Route index element={<HomePage />} />
          <Route path="search" index element={<SearchPage />} />
          <Route path="detail/:type/:id" element={<DetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Provider>
    </>
  );
}

export default App;
