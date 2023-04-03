import type { PropsWithChildren } from "react";
import { XStack, YStack, ZStack } from "@my/ui";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";

export const MainLayout = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      <XStack backgroundColor={"$green10Light"}>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />

          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            {props.children}
          </div>
        </div>
      </XStack>
    </>
  );
};
export default MainLayout;
