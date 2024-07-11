import React from "react";
import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  HiHome,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiTrendingUp,
  HiPencil,
  HiSearch,
  HiNewspaper,
  HiUsers,
} from "react-icons/hi";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button outline color="dark" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="#"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiHome}>
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="#"
                      icon={HiNewspaper}
                    >
                      New
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUsers}>
                      Popular
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTrendingUp}>
                      Trending
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="#"
                      icon={HiPencil}
                    >
                      Categories
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    
                    <Sidebar.Item
                      href="#"
                      icon={HiCollection}
                    >
                      Components
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="#"
                      icon={HiInformationCircle}
                    >
                      Help
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
