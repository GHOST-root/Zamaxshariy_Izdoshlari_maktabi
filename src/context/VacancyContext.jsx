import { createContext, useState, useEffect } from "react";

export const VacancyContext = createContext();

export function VacancyProvider({ children }) {
  const defaultVacancies = [
    {
      id: 1,
      title: "Boshlang‘ich sinf o‘qituvchisi",
      description: "1–4 sinflar bilan ishlash tajribasi talab etiladi."
    },
    {
      id: 2,
      title: "Ingliz tili o‘qituvchisi",
      description: "CEFR B2 yoki undan yuqori daraja."
    }
  ];

  const [vacancies, setVacancies] = useState(() => {
    const stored = localStorage.getItem("vacancies");
    return stored ? JSON.parse(stored) : defaultVacancies;
  });

  useEffect(() => {
    localStorage.setItem("vacancies", JSON.stringify(vacancies));
  }, [vacancies]);

  return (
    <VacancyContext.Provider value={{ vacancies, setVacancies }}>
      {children}
    </VacancyContext.Provider>
  );
}