"use client";

import { SubmitHandler } from "react-hook-form";

import PostForm from "@/components/PostForm";
import { PostInputForm } from "@/types";
import BackButton from "@/components/BackButton";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditPostPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["posts", params.id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${params.id}`);

      return response.data;
    },
  });

  const { mutate: updatePost, isPending } = useMutation({
    mutationFn: (newPost: PostInputForm) => {
      return axios.patch(`/api/posts/${params.id}`, newPost);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push(`/blog/${params.id}`);
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<PostInputForm> = (data) => {
    updatePost(data);
  };

  if (isLoadingPost) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section>
      <BackButton />

      <h1 className="text-2xl text-center font-bold my-4">Edit post</h1>

      <PostForm
        submit={handleEditPost}
        initialPost={post}
        buttonTitle="Update"
        isSubmitting={isPending}
      />
    </section>
  );
};

export default EditPostPage;
