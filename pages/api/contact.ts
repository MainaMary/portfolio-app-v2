import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
dotenv.config();
interface Props {
  SG_API_KEY: string;
  FROM_EMAIL?: string;
  TO_EMAIL?: string;
}
const apiKey: string | undefined = process.env.SG_API_KEY;
const { SG_API_KEY, FROM_EAMIL, TO_EMAIL } = process.env;
sgMail.setApiKey(
  "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"
);

export const handleContact = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    const { name, email, subject, message } = req.body;
    const msg = {
      to: "marieshix98@gmail.com",
      from: "maninamary321@gmail.com",
      subject: "Portfolio contact form",
      html: `<p>Test email${name} ${email}  ${subject} ${message}</p>`,
    };
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
