import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Replace with your email service (e.g., SendGrid, Resend, Nodemailer, etc.)
    // For now, we'll just log it and return success
    // In production, you would send an email here
    console.log("Contact form submission:", { name, email, message });

    // Example: You could use a service like Resend here:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@2kmj.com',
    //   to: 'hello@2kmj.com',
    //   subject: `New Contact Form: ${name}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

