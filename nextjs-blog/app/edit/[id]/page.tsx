"use client";

import { SubmitHandler } from "react-hook-form";

import PostForm from "@/components/PostForm";
import { PostInputForm } from "@/types";
import BackButton from "@/components/BackButton";

const EditPostPage = () => {
  const handleEditPost: SubmitHandler<PostInputForm> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <BackButton />

      <h1 className="text-2xl text-center font-bold my-4">Edit post</h1>

      <PostForm submit={handleEditPost} buttonTitle="Update" />
    </section>
  );
};

export default EditPostPage;
