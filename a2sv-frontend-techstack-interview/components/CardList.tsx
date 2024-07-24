"use client";

import { useGetInfoMutation } from "@/store/api";
import Card from "./Card";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setItems } from "@/store/features/hospital-data-slice";

const CardList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.items.value);

  const [getInfo, { data: cardData, isLoading }] = useGetInfoMutation();

  useEffect(() => {
    getInfo({});
  }, []);

  useEffect(() => {
    dispatch(setItems(cardData?.data));
  }, [cardData]);

  return (
    <section className="py-25.5 flex flex-col items-center gap-11">
      {isLoading && <h1 className="text-4xl">Loading...</h1>}

      {items?.map((info: any) => (
        <Card
          key={info._id}
          location={`${info.address.summary}, ${info.address.region}`}
          status={info.status}
          emails={info.emails}
          telephones={info.phoneNumbers}
          name={info.institutionName}
          distance="3 Kilometers Away"
          imageUrl={info.photo}
        />
      ))}
    </section>
  );
};

export default CardList;
