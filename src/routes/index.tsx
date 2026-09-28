import { createFileRoute } from "@tanstack/react-router";
import { BirthdayApp } from "@/components/birthday/app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <BirthdayApp />;
}
