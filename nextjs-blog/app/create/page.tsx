"use client";

import { SubmitHandler } from "react-hook-form";

import PostForm from "@/components/PostForm";
import { PostInputForm } from "@/types";
import BackButton from "@/components/BackButton";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<PostInputForm> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <BackButton />

      <h1 className="text-2xl text-center font-bold my-4">Add new post</h1>

      <PostForm submit={handleCreatePost} buttonTitle="Create" />
    </section>
  );
};

export default CreatePage;
