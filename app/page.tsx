import LoginCard from "@/components/LoginCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-back h-screen w-screen">
      <h3 className="text-white text-6xl">Hello world</h3>
      <LoginCard age={30} name="Debasmita"/>
    </div>
  );
}
