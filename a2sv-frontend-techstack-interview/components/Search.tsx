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
  const [searchInfo, { data: cardData, isLoading }] = useSearchInfoMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(setItems(cardData?.data));
  }, [cardData]);

  return (
    <section className="max-w-7xl drop-shadow-xl bg-white flex items-center mx-auto rounded-2.5 px-4.5 py-3">
      <Image
        src="/assets/search.svg"
        width={25}
        height={25}
        alt="search icon"
      />

      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        className="flex-grow outline-none ml-2 text-xl font-normal placeholder:font-light placeholder:text-gray-500 text-gray-700"
        onChange={(e) => handleChange(e)}
      />

      <button
        className="rounded-2.5 py-3 px-8 font-semibold text-2xl text-white bg-button-bg"
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
