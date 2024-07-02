"use client";

import { useRouter } from "next/navigation";

import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import PostForm from "@/components/PostForm";
import { PostInputForm } from "@/types";
import BackButton from "@/components/BackButton";

const CreatePage = () => {
  const router = useRouter();

  const handleCreatePost: SubmitHandler<PostInputForm> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (newPost: PostInputForm) => {
      return axios.post("/api/posts/create", newPost);
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
    <section>
      <BackButton />

      <h1 className="text-2xl text-center font-bold my-4">Add new post</h1>

      <PostForm
        isSubmitting={isPending}
        submit={handleCreatePost}
        buttonTitle="Create"
      />
    </section>
  );
};

export default CreatePage;
