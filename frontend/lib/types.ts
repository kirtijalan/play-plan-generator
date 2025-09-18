export type Activity = {
    title: string;
    duration: string;
    category: "Fine Motor Skills" | "Gross Motor Skills" | "Social Skills" | "Pretend Play" | string;
    description: string;
    materials: string[];
  };
  