import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquareText,
  PieChart,
  UserRound,
  Settings,
} from "lucide-react";

export default function Navigation() {
  return (
    <>
      <section className="h-screen w-max absolute left-10 flex items-center z-10">
        <div className="bg-white/10 w-14 h-80 rounded-3xl flex flex-col justify-between items-center py-8">
          <Link href={"/"}>
            <LayoutDashboard size={20} className="text-white hover:text-light transition" />
          </Link>
          <Link href={"/"}>
            <MessageSquareText size={20} className=" text-white hover:text-light transition" />
          </Link>
          <Link href={"/"}>
            <PieChart size={20} className="text-white hover:text-light transition" />
          </Link>
          <Link href={"/"}>
            <UserRound size={20} className="text-white hover:text-light transition" />
          </Link>
          <Link href={"/"}>
            <Settings size={20} className="text-white hover:text-light transition" />
          </Link>
        </div>
      </section>
    </>
  );
}
