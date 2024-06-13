"use server";
import { z } from "zod";

interface IInitial {
  name: string;
  message: string;
  email: string;
}

const initialValues: IInitial = {
  name: "",
  message: "",
  email: "",
};

export async function sendMail(
  prevState: {
    error: string;
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(1),
    message: z.string().min(1),
    email: z.string().min(1),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
    email: formData.get("email"),
  });

  if (!parse.success) {
    return {
      error: "Failed to parse data",
    };
  }

  const data = parse.data;

  const { name, message, email } = data;

  const formValues = {
    name,
    message,
    email,
  };

  try {
    const response = await fetch("/api/sendmail", {
      method: "POST",
    });

    if (!response.ok) {
      return {
        error: "Failed to send mail",
        formValues,
      };
    }

    return {
      error: "Message Sent",
      initialValues,
    };
  } catch (error) {
    return {
      error: `Internal server error: ${error}`,
      formValues,
    };
  }
}
