import { redirect } from "next/navigation";

export default function Home() {
  redirect("/tier/baseline?scenario=supply-chain");
}
