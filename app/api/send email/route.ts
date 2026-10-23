
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Tejomay Website <onboarding@resend.dev>",
      to: ["byvtejomay@gmail.com"],
      subject: `New website enquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return Response.json(
        { error: "Email could not be sent." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email API error:", error);
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
