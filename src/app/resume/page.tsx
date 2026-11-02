import type { Metadata } from "next";
import ResumeView from "./ResumeView";

export const metadata: Metadata = {
  title: "Resume | Jen Kelleman",
  description:
    "Principal Content Designer · AI Systems & Data Architecture. Interactive web resume with one-click PDF download.",
  alternates: { canonical: "https://aiwithjen.com/resume" },
};

export default function ResumePage() {
  return <ResumeView />;
}
