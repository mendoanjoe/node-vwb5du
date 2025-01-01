"use client"
import { ChevronDownIcon, Circle, HeartIcon, MenuIcon, PlusIcon, TvIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/cart/cart";
import Image from "next/image";

export default function Header() {
  const navigationMenu = [
    {
      text: "Beranda",
      link: "#",
    },
    {
      text: "Belanja",
      link: "#",
      children: [
        {
          text: "New Arrivals",
          link: "#",
          source: "https://images.unsplash.com/photo-1733299703906-29f25913ee6e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          text: "Basic Tees",
          link: "#",
          source: "https://images.unsplash.com/photo-1733299703906-29f25913ee6e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          text: "Accessories",
          link: "#",
          source: "https://images.unsplash.com/photo-1733299703906-29f25913ee6e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          text: "Carry",
          link: "#",
          source: "https://images.unsplash.com/photo-1733299703906-29f25913ee6e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
      ]
    },
    // {
    //   text: "Personalisasi",
    //   link: "#",
    // },
    {
      text: "Outlet Cabang",
      link: "#",
    },
    {
      text: "Artikel",
      link: "#",
    },
    {
      text: "Logam Mulia",
      link: "#",
    },
    {
      text: "Tentang",
      link: "#",
    },
  ]

  const { addItem } = useCart();

  return (
    <header className="relative">
      <nav aria-label="Top">
        <div className="bg-[#F9F9F0]">
          <div className="relative mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div></div>
            <p className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex-1 text-center text-sm font-medium text-[#868155] lg:flex-none">
              <b className="mr-1.5">Terpercaya</b> 4.9 dari 5 Google Review
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="uppercase text-sm font-medium text-[#868155] hover:text-[#868155]/80">Pusat Bantuan</Link>
              <Link href="#" className="uppercase text-sm font-medium text-[#868155] hover:text-[#868155]/80">Masuk</Link>
              <Link href="#" className="uppercase text-sm font-medium text-[#868155] hover:text-[#868155]/80">Buat akun baru</Link>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center justify-between">
                <div className="relative hidden lg:flex lg:flex-1">
                  {/* <button
                    type="button"
                    className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px uppercase text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-500"
                    aria-expanded="false"
                  >
                    <HelpCircleIcon className="mr-2 size-4" />
                    <span>Pusat Bantuan</span>
                  </button> */}
                </div>

                <div className="hidden h-full lg:flex">
                  <div className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigationMenu.map((item, index) => {
                        if (item.children) {
                          return (
                            <div key={index} className="flex">
                              <div className="relative flex">
                                <button
                                  type="button"
                                  className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px uppercase text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-500"
                                  aria-expanded="false"
                                >
                                  <span>{item.text}</span>
                                  <ChevronDownIcon className="ml-1 size-4" />
                                </button>
                              </div>
                              <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                ></div>

                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-10">
                                      {item.children.map((itemm, indexx) => {
                                        return (
                                          <div
                                            key={indexx}
                                            className="group relative"
                                          >
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                              <Image
                                                src={itemm.source}
                                                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                                className="object-cover object-center"
                                              />
                                            </div>
                                            <Button
                                              className="w-full mt-4"
                                              onClick={() =>
                                                addItem({
                                                  id: "1",
                                                  name: "Wireless Headphones",
                                                  price: 2000000,
                                                  image:
                                                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
                                                  quantity: 1,
                                                })
                                              }
                                            >
                                              Add to Cart
                                            </Button>
                                          </div>
                                        );
                                      })}
                                      <div className="flex flex-col justify-between border border-[#F7F7F5] p-6 min-h-[420px] col-span-2">
                                        <div className="w-full inline-flex items-center justify-between">
                                          <div className="space-x-0.5">
                                            <span className="inline-flex uppercase text-base text-[#58552D] font-medium leading-none bg-[#F9DDBA] px-3 py-2">TERBARU</span>
                                            <span className="inline-flex uppercase text-base text-white font-medium leading-none bg-[#AEA65B] px-3 py-2">BEST SELLER</span>
                                          </div>
                                          <Link href="#" className="p-2 text-[#58552D] hover:opacity-80">
                                            <span className="sr-only">Wishlist</span>
                                            <HeartIcon className="size-5" />
                                          </Link>
                                        </div>
                                        <div className="w-full inline-flex items-center justify-between">
                                          <div className="flex flex-col gap-2">
                                            <h3 className="text-xl text-[#58552D] font-semibold leading-[120%]">Cincin Victoria Gold (6K)</h3>
                                            <div className="inline-flex items-center gap-2">
                                              <span className="text-lg text-[#A19B66] leading-[122.22%] -tracking-[.32px] font-normal">Rp1,200,000</span>
                                              <Circle className="size-1 text-[#CBC9B6] fill-[#CBC9B6]" />
                                              <span className="text-lg text-[#A19B66] leading-[122.22%] -tracking-[.32px] font-normal">Dapatkan poin: 3</span>
                                            </div>
                                          </div>
                                          <Link href="#" className="p-3 text-[#58552D] hover:opacity-80 bg-[#F7F7F5] rounded-full">
                                            <span className="sr-only">Add</span>
                                            <PlusIcon className="size-5" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <Link
                              key={index}
                              href={item.link}
                              className="flex items-center uppercase text-sm font-medium text-gray-700 hover:text-gray-500"
                            >
                              {item.text}
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="size-4" />
                  </button>
                </div>
                <Link href="#" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <Image
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    className="h-8 w-auto"
                  />
                </Link>

                <div className="flex flex-1 items-center justify-end">
                  <Link href="#" className="p-2 hover:text-gray-500">
                    <span className="sr-only">User</span>
                    <User2Icon className="size-4" />
                  </Link>
                  <Link href="#" className="p-2 hover:text-gray-500">
                    <span className="sr-only">Wishlist</span>
                    <HeartIcon className="size-4" />
                  </Link>
                  <Cart />
                  <Link href="#" className="relative p-2 hover:text-gray-500">
                    <span className="sr-only">Live</span>
                    <TvIcon className="size-4" />
                    <span className="absolute right-1 bottom-1 block size-2.5 rounded-full bg-green-400"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
