import React from "react";
import HomeNav from "./HomeNav";
import MainSection from "./MainSection";
import OfferSection from "./OfferSection/OfferSection";
import HeadingSection from "./HeadingSection/HeadingSection";
import CategorySection from "./CategorySection/CategorySection";
import Items from "./ItemSection/Items";
import MainFooter from "../Footer/MainFooter";
import ChatSection from "../Chat/ChatSection";
import Brand from "./BrandSection/Brand";
import ProductShow from "./ProductShow/ProductShow";

export default function HomeScreen() {
  return (
    <>
      <HomeNav />
      <MainSection />
      <HeadingSection />
      <OfferSection />
      <Brand />
      <Items />
      <CategorySection />
      <ProductShow />

      <MainFooter />
      <ChatSection />
    </>
  );
}
