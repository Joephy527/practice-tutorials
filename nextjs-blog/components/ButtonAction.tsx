"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Pencil, Trash } from "lucide-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const ButtonAction = ({ id }: { id: string }) => {
  const router = useRouter();

  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: () => {
      return axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <Link href={`/edit/${id}`} className="btn mr-2">
        <Pencil /> Edit
      </Link>

      <button className="btn btn-error" onClick={() => deletePost()}>
        {isPending && (
          <span className="loading loading-spinner loading-md"></span>
        )}

        {isPending ? (
          "Loading"
        ) : (
          <>
            <Trash /> Delete
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonAction;
