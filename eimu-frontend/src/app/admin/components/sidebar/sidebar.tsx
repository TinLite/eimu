import React from "react";
import { Sidebar } from "./sidebar.styles";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SidebarItem } from "./sidebar-item";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className="flex flex-col justify-between h-full ">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Trang chủ"
              icon={<HomeIcon />}
              isActive={pathname === "/admin"}
              href="/admin"
            />
              <SidebarItem
                isActive={pathname === "/admin/accounts"}
                title="Quản lý người dùng"
                icon={<AccountsIcon />}
                href="/admin/accounts"
              />
              <SidebarItem
                isActive={pathname === ""}
                title="Quản lý phim"
                icon={<ProductsIcon />}
              />
              <SidebarItem
                isActive={pathname === ""}
                title="Thống kê"
                icon={<ReportsIcon />}
              />
          </div>
        </div>
      </div>
    </aside>
  );
};
