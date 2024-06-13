import emailjs from "@emailjs/browser";

export const SendEmailToCompany = async (email, subject, message) => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  emailjs.init(PUBLIC_KEY);
  const templatePrams = {
    from_name: email,
    subject: subject,
    message: message,
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templatePrams);
    return response;
  } catch (e) {
    throw e;
  }
};
