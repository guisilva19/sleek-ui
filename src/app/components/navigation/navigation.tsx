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
            <LayoutDashboard
              color="#fff"
              size={20}
              className="hover:text-red-500"
            />
          </Link>
          <Link href={"/"}>
            <MessageSquareText
              color="#fff"
              size={20}
              className="hover:text-red-500"
            />
          </Link>
          <Link href={"/"}>
            <PieChart
              color="#fff"
              size={20}
              className="hover:text-red-500"
            />
          </Link>
          <Link href={"/"}>
            <UserRound color="#fff" size={20} className="hover:text-red-500" />
          </Link>
          <Link href={"/"}>
            <Settings color="#fff" size={20} className="hover:text-red-500" />
          </Link>
        </div>
      </section>
    </>
  );
}
