"use client";

import { useSearchInfoMutation } from "@/store/api";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setItems } from "@/store/features/hospital-data-slice";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchInfo, { data: cardData, isLoading, isError }] =
    useSearchInfoMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(setItems(cardData?.data));
  }, [cardData]);

  if (isError) {
    return <h1 className="text-4xl">Error Searching Hospitals</h1>;
  }

  return (
    <section className="max-w-7xl drop-shadow-xl bg-white flex items-center mx-auto rounded-2.5 px-2 lg:px-4.5 py-2 lg:py-3">
      <Image
        src="/assets/search.svg"
        width={25}
        height={25}
        alt="search icon"
        className="hidden sm:block"
      />

      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        className="md:flex-grow flex-shrink w-2/3 outline-none ml-2 text-sm sm:text-xl font-normal placeholder:font-light placeholder:text-gray-500 text-gray-700"
        onChange={(e) => handleChange(e)}
      />

      <button
        className="lg:rounded-2.5 sm:rounded-lg rounded-md lg:py-3 py-1.5 lg:px-8 px-4 font-semibold text-xs sm:text-base lg:text-2xl text-white ml-auto bg-button-bg"
        disabled={isLoading}
        onClick={() => {
          searchInfo(searchTerm);
        }}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </section>
  );
};

export default Search;
