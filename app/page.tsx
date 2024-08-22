"use client";
import Image from "next/image";
import Velkommen from "../components/content/Velkommen";
import Fokus from "../components/content/Fokus";
import Header from "@/components/content/header";
import ImageCarousel from "@/components/content/imageCarousel";
import Footer from "@/components/content/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 shadow-xl pb-5">
        <div className="flex justify-center">
          <Velkommen />
        </div>
        <div className="flex justify-center">
          <ImageCarousel />
        </div>
      </div>
      <div className="pt-5 flex pb-[112px]">
        <Fokus />
      </div>
      <Footer />
    </div>
  );
}
