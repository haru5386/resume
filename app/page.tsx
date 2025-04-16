import { CV } from "../components/CV";
import { sampleData } from "@/data/sampleData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <CV data={sampleData} />
    </main>
  );
} 