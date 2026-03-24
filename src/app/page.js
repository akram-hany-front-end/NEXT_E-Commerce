"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Banner from "../components/Banner";
import Bbc from "../components/Bbc";
import Toogle from "../components/Toogle";
import Hero from "../components/Hero";
import BigBanner from "../components/BigBanner";
import Footer from "@/components/Footer";
import Cart from "./cart/page";
import Category from "./products/page";
import HomePage from "./HomePage";
import SingleProduct from "./products/[id]/page";
import Favourite from "./favorites/page";
export default function Home() {
  return (
    <div>






      <HomePage />



    </div>
  );
}
