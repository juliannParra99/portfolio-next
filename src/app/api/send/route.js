import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

//with this i will be able to call this function using fetch or axios and pass it the data to complete the mail and send it.
export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email, "julianfranco.parra@gmail.com"],
      subject: subject,
      react: (
        //this will be the mail's structure that we will send to the "to" owner of the email, in this case me

        <>
          <h1>{subject}</h1>
        <p>Thank you for your interest in exploring business opportunities with us. We have received your inquiry and will review it carefully.</p>
        <p>I excited about the potential collaboration and I will get back to you shortly to discuss further details and explore how we can work together.</p>
        <p>If you have any specific ideas or proposals you would like to discuss, please feel free to share them.</p>
        <p>I look forward to the possibility of working together.</p>
        <p>If you have any urgent matters, please feel free to contact me directly at julianfranco.parra@gmail.com</p>
        
        <p>Best regards,</p>
        <p>Julian Parra</p>
        <p>Software Solutions</p>
          
        
          


        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
