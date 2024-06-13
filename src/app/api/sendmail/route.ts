import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["escalamykkenneth@gmail.com"],
      subject: "Portfolio Message",
      react: EmailTemplate({
        name: "test",
        message: "test",
        email: "test",
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
