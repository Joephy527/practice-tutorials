import { SubmitHandler } from "react-hook-form";

export type PostInputForm = {
  title: string;
  content: string;
  tag: string;
};

export type PostFormSubmit = {
  submit: SubmitHandler<PostInputForm>;
  buttonTitle: string;
};
