import { EmailForm } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { message, subject, email, name } =
    (await req.json()) as unknown as EmailForm;
  try {
    const data = await resend.emails.send({
      from: "vivek@cannynext.com",
      to: "info@cannymanagement.com",
      subject: subject,
      html: `<h6>${email}</h6><p>${name}</p><br/<p>${message}</p>`,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
