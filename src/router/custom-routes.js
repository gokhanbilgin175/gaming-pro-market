import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "../pages/anonymous/contact-page";
import HomePage from "../pages/anonymous/home-page";
import ProductDetailsPage from "../pages/anonymous/product-details-page";
import ShopPage from "../pages/anonymous/shop-page";
import PrivacyPolicyPage from "../pages/anonymous/privacy-policy-page";
import LoginPage from "../pages/anonymous/login-page";
import RegisterPage from "../pages/anonymous/register-page";
import ProfilePage from "../pages/customer/profile-page";
import CartPage from "../pages/common/cart-page";
import AddressesPage from "../pages/customer/addresses-page";
import ForgotPasswordPage from "../pages/common/forgot-password-page";
import ResetPasswordPage from "../pages/common/reset-passsword-page";
import OrdersPage from "../pages/customer/orders-page";
import FavouritesPage from "../pages/customer/favourites-page";
import NotFoundPage from "../pages/common/not-found-page";
import ScrollToTop from "../components/common/scroll-to-top/scroll-to-top";
import OrderDetailsPage from "../pages/customer/order-details-page";
import AccountPage from "../pages/customer/account-page";
import DashboardPage from "../pages/manager-admin/dashboard-page";
import BrandsPage from "../pages/manager-admin/brands-page";
import BrandEditPage from "../pages/manager-admin/brand-edit-page";
import BrandNewPage from "../pages/manager-admin/brand-new-page";
import ReviewsPage from "../pages/manager-admin/reviews-page";
import ReportsPage from "../pages/manager-admin/reports-page";
import UsersPage from "../pages/manager-admin/users-page";
import CategoriesPage from "../pages/manager-admin/categories-page";
import CategoriesEditPage from "../pages/manager-admin/category-edit-page";
import CategoriesNewPage from "../pages/manager-admin/category-new-page";
import CouponsPage from "../pages/manager-admin/coupons-page";
import CouponEditPage from "../pages/manager-admin/coupon-edit-page";
import CouponNewPage from "../pages/manager-admin/coupon-new-page";
import UserEditPage from "../pages/manager-admin/user-edit-page";
import ProductsPage from "../pages/manager-admin/products-page";
import ProductEditPage from "../pages/manager-admin/product-edit-page";
import ProductNewPage from "../pages/manager-admin/product-new-page";
import OrderEditPage from "../pages/manager-admin/order-edit-page";
import AdminOrdersPage from "../pages/manager-admin/orders-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="shop">
            <Route index element={<ShopPage />} />
            <Route path=":shopId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="user">
            <Route index element={<ProfilePage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="addresses" element={<AddressesPage />} />
            <Route path="orders">
              <Route index element={<OrdersPage />} />
              <Route path=":orderId" element={<OrderDetailsPage />} />
            </Route>
            <Route path="favourites" element={<FavouritesPage />} />
          </Route>
          <Route path="admin">
            <Route index element={<DashboardPage />} />
            <Route path="brands">
              <Route index element={<BrandsPage />} />
              <Route path=":brandId" element={<BrandEditPage />} />
              <Route path="new" element={<BrandNewPage />} />
            </Route>
            <Route path="categories">
              <Route index element={< CategoriesPage/>} />
              <Route path=":categoryId" element={<CategoriesEditPage/>} />
              <Route path="new" element={<CategoriesNewPage/>} /> 
            </Route>
            <Route path="products">
              <Route index element={<ProductsPage />} />
              <Route path=":productId" element={<ProductEditPage />} />
              <Route path="new" element={<ProductNewPage />} />
            </Route>
            <Route path="users">
              <Route index element={<UsersPage />} />
              <Route path=":userId" element={<UserEditPage />} />
            </Route>
            <Route path="orders">
              <Route index element={<AdminOrdersPage />} />
              <Route path=":orderId" element={<OrderEditPage />} />
            </Route>
            <Route path="coupons">
              <Route index element={<CouponsPage />} />
              <Route path=":couponId" element={<CouponEditPage />} />
              <Route path="new" element={<CouponNewPage />} />
            </Route>
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
