import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { hamburgerClicked } from "../../../store/slices/left-slice";
import "./sidebar-hamburger.scss";

const SidebarHamburger = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { sidebarLeft } = useAppSelector((state) => state.left);
  const { brandId } = useParams();
  const { categoryId } = useParams();
  const { productId } = useParams();
  const { userId } = useParams();
  const { orderId } = useParams();
  const { couponId } = useParams();
  const { reviewId } = useParams();

  const leftSidebar = () => {
    dispatch(hamburgerClicked(!sidebarLeft));
  };

  return (
    <div className={sidebarLeft ? "admin-icon admin-icon-left" : "admin-icon"}>
      <RxHamburgerMenu onClick={leftSidebar} />
      <p>
        {pathname === "/admin" && "Home / Dashboard"}
        {pathname === "/admin/brands" && "Brands"}
        {pathname === "/admin/brands/new" && "Brand / New"}
        {pathname.startsWith(`/admin/brands/${brandId}`) && "Brand / Edit"}
        {pathname === "/admin/categories" && "Categories"}
        {pathname === "/admin/categories/new" && "Category / New"}
        {pathname.startsWith(`/admin/categories/${categoryId}`) &&
          "Category / Edit"}
        {pathname === "/admin/products" && "Products"}
        {pathname === "/admin/products/new" && "Product / New"}
        {pathname.startsWith(`/admin/products/${productId}`) &&
          "Product / Edit"}
        {pathname === "/admin/users" && "Users"}
        {pathname.startsWith(`/admin/users/${userId}`) && "User / Edit"}
        {pathname === "/admin/orders" && "Orders"}
        {pathname.startsWith(`/admin/orders/${orderId}`) && "Order / Edit"}
        {pathname === "/admin/coupons" && "Coupons"}
        {pathname === "/admin/coupons/new" && "Coupon / New"}
        {pathname.startsWith(`/admin/coupons/${couponId}`) && "Coupon / Edit"}
        {pathname === "/admin/reviews" && "Reviews"}
        {pathname.startsWith(`/admin/reviews/${reviewId}`) && "Review / Edit"}
        {pathname === "/admin/reports" && "Reports"}
      </p>
    </div>
  );
};

export default SidebarHamburger;
