import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ActivityCard } from "../components/ActivityCard";

test("renders title and duration", () => {
  render(<ActivityCard title="Pipe Cleaner Shapes" duration="10 min" />);
  expect(screen.getByText("Pipe Cleaner Shapes")).toBeInTheDocument();
  expect(screen.getByText("Duration: 10 min")).toBeInTheDocument();
});
