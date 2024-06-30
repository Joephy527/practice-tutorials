"use client";

import { PostFormSubmit, PostInputForm } from "@/types";
import { useForm } from "react-hook-form";

const PostForm = ({ submit, buttonTitle }: PostFormSubmit) => {
  const { register, handleSubmit } = useForm<PostInputForm>();

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

      <select
        {...register("tag", { required: true })}
        className="select select-bordered w-full max-w-lg focus:outline-none focus:border-neutral-400"
        defaultValue=""
      >
        <option disabled value="">
          Select tags
        </option>
        <option>javascript</option>
        <option>php</option>
        <option>python</option>
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {buttonTitle}
      </button>
    </form>
  );
};

export default PostForm;
