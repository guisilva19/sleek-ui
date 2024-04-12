import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Spline from "./components/spline/spline";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen bg-primary-black relative flex justify-center">
        <Header />
        <Navigation />
        <Spline />
      </main>
    </>
  );
}
