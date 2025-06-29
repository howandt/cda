import React, { useState } from "react";
import { Brain } from "lucide-react";

const cases = [
  {
    id: "konflikt",
    title: "Victor skriger under samling",
    description: "Victor holder sig for ørerne og skriger, når der bliver larm."
  },
  {
    id: "uro",
    title: "Klassen er konstant urolig",
    description: "Eleverne kan ikke koncentrere sig. Læreren er frustreret."
  }
];

const specialists = {
  konflikt: [
    { name: "AI-Ergoterapeut Lene", advice: "Reducer auditiv stimuli straks. Brug Lydkompasset." },
    { name: "AI-Speciallærer Jonas", advice: "Aktiver pausekasse og visuelle overgange." }
  ],
  uro: [{ name: "AI-Pædagog Marie", advice: "Strukturér med 3‑trins ro‑strategi og fysiske breaks." }]
};

const templates = {
  konflikt: ["Lydkompas.pdf", "Pausekasse-guide.pdf"],
  uro: ["Sensorisk strukturplan.pdf"]
};

export default function App() {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <header className="flex items-center mb-6">
        <Brain className="w-8 h-8 text-blue-600 mr-3" />
        <h1 className="text-2xl font-bold">CDA Demo</h1>
      </header>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Vælg en situation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c) => (
            <button
              key={c.id}
              className="p-4 border rounded hover:bg-blue-50 text-left"
              onClick={() => setActiveCase(c.id)}
            >
              <h3 className="font-bold text-blue-600">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.description}</p>
            </button>
          ))}
        </div>
      </div>

      {activeCase && (
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">AI-Specialister siger:</h3>
          <ul className="mb-4 list-disc list-inside">
            {specialists[activeCase].map((s, i) => (
              <li key={i}>
                <strong>{s.name}:</strong> {s.advice}
              </li>
            ))}
          </ul>

          <h4 className="font-semibold">Foreslåede materialer:</h4>
          <ul className="list-disc list-inside">
            {templates[activeCase].map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
