import FindTutorBanner from "@/components/Banner/FindTutorBanner";
import SearchTution from "@/components/Banner/SearchTution";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative ">
      <div className=""></div>
      <FindTutorBanner />
      <SearchTution></SearchTution>
    </div> 
  );
}
