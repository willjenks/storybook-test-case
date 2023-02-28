import { expect } from "@storybook/jest";
import { screen } from "@storybook/testing-library";

import { Suspender } from "../src/Suspender";

export default {
  title: "Suspender",
  component: Suspender,
};

export const Success = {
  play: async () => {
    expect(await screen.findByText("hello")).toBeInTheDocument();
  },
};

export const FailsInStorybookAndTestRunnerAsExpected = {
  args: { shouldError: false },
  play: async () => {
    expect(await screen.findByText("Error!")).toBeInTheDocument();
  },
};

export const PassesInStorybookButBreaksTestRunner = {
  args: { shouldError: true },
  play: async () => {
    expect(await screen.findByText("Error!")).toBeInTheDocument();
  },
};
