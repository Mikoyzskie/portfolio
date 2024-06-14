"use server";
import { z } from "zod";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { revalidatePath } from "next/cache";

interface IInitial {
  name: string;
  message: string;
  email: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rapidstrike13@gmail.com"],
      subject: "Portfolio Message",
      react: EmailTemplate({
        name: name,
        message: message,
        email: email,
      }) as React.ReactElement,
    });

    if (error) {
      return {
        error: `${JSON.stringify(error)}`,
        formValues,
      };
    }

    revalidatePath("/");
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
