import { Tag } from "@prisma/client";
import { SubmitHandler } from "react-hook-form";

export type PostInputForm = {
  title: string;
  content: string;
  tagId: string;
};

export type PostFormSubmit = {
  submit: SubmitHandler<PostInputForm>;
  buttonTitle: string;
  isSubmitting: boolean;
  initialPost?: PostInputForm;
};

export type Posts = {
  id: string;
  title: string;
  content: string;
  tag: Tag;
};
