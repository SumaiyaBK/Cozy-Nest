"use client";
import axios from "axios";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { FcAddressBook, FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import { BiHeading } from "react-icons/bi";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import Github from "next-auth/providers/github";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLodaing, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Sorry, Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an Account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLodaing}
        register={register}
        errors={errors}
        type={""}
        required
      />{" "}
      <Input
        id="name"
        label="Name"
        disabled={isLodaing}
        register={register}
        errors={errors}
        type={""}
        required
      />{" "}
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLodaing}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />

      <div
        className="
      text-neutral-500
      text-center
      mt-4
      font-light
      "
      >
        <div
          className="
        justify-center 
        flex 
        flex-row 
        items-center
        gap-2"
        >
          <div>Already have an account?</div>
        </div>
        <div
          onClick={registerModal.onClose}
          className="
        text-neutral-800
        cursor-pointer
        hover:underline
        "
        >
          Log in
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLodaing}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel=" Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
