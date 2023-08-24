"use client";

import { Button } from "@/common/ui/Button";
import { Input } from "@/common/ui/Input";
import { Spinner } from "@/common/ui/Spinner";
import { TextArea } from "@/common/ui/TextArea";
import { cn } from "@/libs/cn";
import { EmailForm } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const commonClassName = "mt-2 md:mt-4 md:py-4";

export function ContactForm({}: Props) {
  const { replace } = useRouter();
  let [isSending, setIsSending] = useState(false);

  const [formState, setFormState] = useState<EmailForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSending(true);
    e.preventDefault();
    const { status } = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    setFormState({ email: "", message: "", subject: "", name: "" });
    setIsSending(false);
    if (status === 200) {
      toast.success("Mail Sent!", {
        duration: 3000,
        icon: "🎉",
      });
    } else {
      toast.error("Failed to send mail, try again in some time", {
        duration: 3000,
        icon: "🥲",
      });
    }
    replace("/");
  };

  const onFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setFormState((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className='w-full flex flex-col justify-center'
    >
      <div className='flex flex-col sm:flex-row mt-4 gap-0 sm:gap-2 md:gap-4 md:mt-10'>
        <Input
          placeholder='Name'
          name='name'
          disabled={isSending}
          className={cn(commonClassName)}
          value={formState.name}
          onChange={onFormChange}
        />
        <Input
          placeholder='Email *'
          name='email'
          type='email'
          disabled={isSending}
          className={cn(commonClassName)}
          required
          value={formState.email}
          onChange={onFormChange}
        />
      </div>
      <Input
        placeholder='Subject *'
        name='subject'
        disabled={isSending}
        className={cn(commonClassName)}
        required
        value={formState.subject}
        onChange={onFormChange}
      />
      <TextArea
        placeholder='Message *'
        name='message'
        disabled={isSending}
        className={cn(commonClassName)}
        required
        value={formState.message}
        onChange={onFormChange}
      />
      <Button
        type='submit'
        className='mt-6 w-full sm:w-40 rounded-md ml-auto hover:brightness-110'
        disabled={
          !formState.email ||
          !formState.message ||
          !formState.subject ||
          isSending
        }
      >
        {isSending ? <Spinner className='fill-foreground' /> : "Send"}
      </Button>
    </form>
  );
}
