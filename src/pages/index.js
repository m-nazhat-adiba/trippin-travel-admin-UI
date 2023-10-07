import AnalyticCard from "@/components/cards/AnalyticCard";
import NavBar from "@/components/navigation/NavBar";
import SideBar from "@/components/navigation/SideBar";

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <div className="flex flex-col flex-grow items-start px-4">
        <NavBar />
        <div className="grid grid-cols-4 w-full gap-8">
          <AnalyticCard />
          <AnalyticCard />
          <AnalyticCard />
          <AnalyticCard />
        </div>
      </div>
    </main>
  );
}
