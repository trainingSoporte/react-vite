import { Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";
import { SidebarMenuItem } from "../components";

export const DashboardLayout = () => {
  return (
    <main
      className="flex flex-row gap-3 m-5">
      <nav
        className="flex-none w-[300px] min-h-[calc(100vh-3.0rem)] 
        flex flex-col justify-start items-center bg-zinc-200 rounded-md p-2 shadow-lg">
        <div
          className="w-11/12 flex flex-row justify-between items-center"
        >
          <h1
            className="w-3/4 font-semibold bold text-3xl bg-gradient-to-b
             from-red-500 from-22% via-zinc-400 via-55% to-red-300 to-85% bg-clip-text text-transparent">
            appM
          </h1>
          <div
            className="w-1/4 flex flex-row items-center justify-center"
          >
          </div>
        </div>

        <div className="flex-none border-white border my-3 w-full" />

        <div className="flex flex-col gap-1">
          {
            menuRoutes.map(option => (
              <SidebarMenuItem key={option.to} {...option} />
            ))
          }
        </div>
      </nav>

      <section
        className="flex-none w-[800px] min-h-[calc(100vh-3.0rem)] flex flex-col justify-start items-center
       bg-zinc-200 rounded-md p-2 shadow-lg shadow-red-200">
        <Outlet />
      </section>
    </main>
  );
};