import PropTypes from "prop-types";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  CalendarIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import logo from "@assets/logo.png";
import Filter from "@components/Filter";

const user = {
  name: "Anthony gorski",
  email: "azerty@provider.com",
  imageUrl:
    "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",
};

const navigation = [
  {
    id: 1,
    name: <HeartIcon className="h-6 w-6" aria-hidden="true" />,
    href: "#",
    current: true,
  },
  {
    id: 2,
    name: <CalendarIcon className="h-6 w-6" aria-hidden="true" />,
    href: "#",
    current: false,
  },
  {
    id: 3,
    name: <ArrowPathIcon className="h-6 w-6" aria-hidden="true" />,
    href: "#",
    current: false,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <Disclosure as="header" className="bg-white shadow-sm my-2">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-4 lg:divide-y lg:divide-amber-200 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-16 w-auto"
                      src={logo}
                      alt="Logo de Let's do eat"
                    />
                  </Link>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <form>
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-amber-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-amber-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-amber-500 focus:border-amber-500 focus:text-amber-900 focus:placeholder-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-amber-400 hover:bg-amber-100 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-amber-100" : "",
                                "block py-2 px-4 text-sm text-amber-700"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:justify-center lg:item-center lg:py-2"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-amber-100 text-amber-900"
                      : "text-amber-900 hover:bg-amber-50 hover:text-amber-900",
                    "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <Filter />

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="flex space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "flex-1 flex justify-center bg-amber-100 text-amber-900"
                      : "flex-1 flex justify-center text-amber-900 hover:bg-amber-50 hover:text-amber-900",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-amber-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-amber-800">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-amber-500">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-amber-500 hover:bg-amber-50 hover:text-amber-900"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

Headers.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Header;
