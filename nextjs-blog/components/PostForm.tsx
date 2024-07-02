"use client";

import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { PostFormSubmit, PostInputForm } from "@/types";
import axios from "axios";
import { Tag } from "@prisma/client";

const PostForm = ({
  submit,
  buttonTitle,
  isSubmitting,
  initialPost,
}: PostFormSubmit) => {
  const { register, handleSubmit } = useForm<PostInputForm>({
    defaultValues: initialPost,
  });

  // fetch tags
  const { data: tags, isLoading } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");

      return response.data;
    },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg focus:outline-none focus:border-neutral-400"
      />

      <textarea
        className="textarea textarea-bordered w-full max-w-lg focus:outline-none focus:border-neutral-400"
        {...register("content", { required: true })}
        placeholder="Post content..."
      ></textarea>

      {isLoading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <select
          {...register("tagId", { required: true })}
          className="select select-bordered w-full max-w-lg focus:outline-none focus:border-neutral-400"
          defaultValue=""
        >
          <option disabled value="">
            Select tags
          </option>

          {tags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full max-w-lg"
        disabled={isSubmitting ? true : false}
      >
        {isSubmitting ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          buttonTitle
        )}
      </button>
    </form>
  );
};

export default PostForm;
