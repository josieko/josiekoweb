import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";

export default function Contact({
  setCurrentPage,
}: {
  setCurrentPage?: (page: string) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key is missing");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error("EmailJS configuration is incomplete");
      alert(
        "Email service is not properly configured. Please contact the administrator."
      );
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current!)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsSending(false);
        setIsSent(true);

        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          setIsSent(false);
          if (setCurrentPage) {
            setCurrentPage("about");
          }
        }, 2000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
        setIsSending(false);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-6">
        <div
          className="rounded-2xl p-4 mb-4"
          style={{
            background:
              "linear-gradient(135deg,rgb(247, 171, 124),rgb(222, 126, 67))",
          }}
        >
          <Mail className="h-12 w-12 text-white" />
        </div>
        <h1 className="!text-3xl font-bold text-white">Mail</h1>
        <p className="text-gray-400 text-center mt-2">Let's talk!</p>
      </div>

      <section className="mb-12">
        <div className="mb-6 text-left">
          {isSent ? (
            <div className="text-center py-8 p-6 rounded-lg max-w-md mx-auto">
              <p className="text-xl text-white mb-2">
                Thanks for reaching out!
              </p>
              <p className="text-white text-sm">Will get back to you soon.</p>
              <p className="text-white text-2xl pt-2">👩🏻‍💻</p>
            </div>
          ) : (
            <div className="p-4 rounded-lg max-w-md mx-auto">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 px-4 rounded bg-[#242424] text-white border border-[#242424] focus:border-[#E8A37C] focus:outline-none [&:-webkit-autofill]:bg-[#242424] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#242424_inset]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 px-4 rounded bg-[#242424] text-white border border-[#242424] focus:border-[#E8A37C] focus:outline-none [&:-webkit-autofill]:bg-[#242424] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#242424_inset]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none w-full p-2 px-4 rounded bg-[#242424] text-white border border-[#242424] focus:border-[#E8A37C] focus:outline-none [&:-webkit-autofill]:bg-[#242424] [&:-webkit-autofill]:text-white [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#242424_inset]"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="py-1 px-3 cursor-pointer bg-[#c3784d] text-white rounded hover:bg-[#242424] transition-colors font-medium"
                  >
                    {isSending ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
