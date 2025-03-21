import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import './FAQSection.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    title: "General Questions (Common for All Services)",
    items: [
      {
        question: "How long will the project take?",
        answer:
          "The timeline depends on the complexity of the project. A basic website can take 1-2 weeks, while a custom web app or mobile app might take a few months. Video editing timelines vary based on duration and complexity.",
      },
      {
        question: "What are your pricing and payment terms?",
        answer:
          "Pricing depends on project requirements. I usually provide a custom quote after understanding your needs. Payments are typically divided into milestones (e.g., 50% upfront, 50% upon completion).",
      },
      {
        question: "Do you offer revisions?",
        answer:
          "Yes, I provide a certain number of revisions based on the project scope to ensure you’re satisfied with the final product.",
      },
    ],
  },
  {
    title: "Website Development FAQs",
    items: [
      {
        question: "What type of websites do you build?",
        answer:
          "I specialize in business websites, e-commerce platforms, personal portfolios, blogs, and SaaS-based applications.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes, I ensure that all websites are fully responsive and work on all devices (mobile, tablet, and desktop).",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes, I can improve the design, functionality, and performance of your current website.",
      },
      {
        question: "Will I be able to update my website myself?",
        answer:
          "If you prefer, I can develop the website using a CMS (like WordPress) or a no-code tool so you can update content without coding knowledge.",
      },
      {
        question: "Do you provide hosting and domain services?",
        answer:
          "I can guide you in purchasing hosting and domain services, but I do not provide them directly.",
      },
      {
        question: "Will my website be SEO-friendly?",
        answer:
          "Yes, I follow SEO best practices to help your website rank better on search engines.",
      },
    ],
  },
  {
    title: "Mobile App Development FAQs",
    items: [
      {
        question: "What platforms do you develop apps for?",
        answer:
          "I develop apps for iOS and Android using technologies like React Native.",
      },
      {
        question: "Do you provide backend services for mobile apps?",
        answer:
          "Yes, I can develop a backend using Firebase, Node.js, or other technologies based on your app’s needs.",
      },
      {
        question: "Can you integrate third-party APIs?",
        answer:
          "Yes, I can integrate payment gateways, social logins, Google Maps, and other third-party services.",
      },
      {
        question: "Will my app be published on the App Store and Google Play?",
        answer:
          "Yes, I can assist with app submission and ensure it meets all store guidelines.",
      },
      {
        question: "What ongoing maintenance do you offer?",
        answer:
          "I offer maintenance plans for updates, bug fixes, and new features.",
      },
    ],
  },
  {
    title: "Video Editing FAQs",
    items: [
      {
        question: "What type of videos do you edit?",
        answer:
          "I edit corporate videos, YouTube videos, short films, advertisements, and social media content.",
      },
      {
        question: "What software do you use for editing?",
        answer:
          "I use software like Adobe Premiere Pro, After Effects, and DaVinci Resolve.",
      },
      {
        question: "Can you add animations and effects?",
        answer:
          "Yes, I can add motion graphics, text animations, and special effects to enhance your video.",
      },
      {
        question: "How do you handle revisions?",
        answer:
          "I offer a set number of revisions to ensure you are happy with the final video.",
      },
      {
        question: "What is your usual turnaround time?",
        answer:
          "Turnaround time depends on video length and complexity, but I aim to deliver projects within 3-7 days.",
      },
    ],
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(sectionRefs.current);

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => (titleRef.current.innerText = faqs[i].title),
        onEnterBack: () => (titleRef.current.innerText = faqs[i].title),
      });
    });
  }, []);

  return (
    <div className="flex bg-transparent text-white p-10 container faqsectioncontainer">
      {/* Left: Sticky Title */}
      <div className="w-1/3 flex items-start h-screen sticky top-1/3 faqtitlecontainer">
        <h2 ref={titleRef} className="text-3xl font-bold">
          {faqs[0].title}
        </h2>
      </div>

      {/* Right: FAQ Section */}
      <div className="w-2/3 space-y-6">
        {faqs.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="space-y-4 faqtogglesection"
          >
            {section.items.map((faq, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg faqtoggleinsidesection">
                <button
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === `${index}-${i}` ? null : `${index}-${i}`
                    )
                  }
                  className="flex justify-between w-full text-lg font-semibold"
                >
                  {faq.question}
                  <span>{activeIndex === `${index}-${i}` ? "✖" : "➕"}</span>
                </button>
                {activeIndex === `${index}-${i}` && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
