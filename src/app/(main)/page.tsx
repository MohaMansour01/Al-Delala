import Banner from "../../features/home/components/Banner";
import DownloadUs from "../../features/home/components/DownloadUs";
import MainPlatformParts from "../../features/home/components/MainPlatformParts";
import SpecialAdvertisements from "../../features/home/components/SpecialAdvertisements";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <MainPlatformParts />
      <SpecialAdvertisements />
      <DownloadUs />
    </main>
  );
}
