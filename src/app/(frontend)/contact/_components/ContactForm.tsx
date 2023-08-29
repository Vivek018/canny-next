"use client";

import { Button } from "@/common/ui/Button";
import { Input } from "@/common/ui/Input";
import { Spinner } from "@/common/ui/Spinner";
import { TextArea } from "@/common/ui/TextArea";
import { cn } from "@/libs/cn";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const commonClassName = "mt-2 md:mt-4 md:py-4";

const reducer = (current: any, update: any) => ({ ...current, ...update });

export function ContactForm({}: Props) {
  const { replace } = useRouter();
  let [isSending, setIsSending] = useState(false);
  const [formFields, setField] = useReducer(reducer, null);

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSending(true);
    e.preventDefault();

    const { status } = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formFields),
    });

    setField(null);
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

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    setField({ [name]: value });
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
          value={formFields?.name}
          onChange={onInputChange}
        />
        <Input
          placeholder='Email *'
          name='email'
          type='email'
          disabled={isSending}
          className={cn(commonClassName)}
          required
          value={formFields?.email}
          onChange={onInputChange}
        />
      </div>
      <Input
        placeholder='Subject *'
        name='subject'
        disabled={isSending}
        className={cn(commonClassName)}
        required
        value={formFields?.subject}
        onChange={onInputChange}
      />
      <TextArea
        placeholder='Message *'
        name='message'
        disabled={isSending}
        className={cn(commonClassName)}
        required
        value={formFields?.message}
        onChange={onInputChange}
      />
      <Button
        type='submit'
        className='mt-6 w-full sm:w-40 rounded-md ml-auto hover:brightness-110'
        disabled={
          !formFields?.email ||
          !formFields?.message ||
          !formFields?.subject ||
          isSending
        }
      >
        {isSending ? <Spinner className='fill-foreground' /> : "Send"}
      </Button>
    </form>
  );
}
