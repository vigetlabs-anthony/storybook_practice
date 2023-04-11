import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  parameters: {
    // layout: "centered",
  },
};

export const Primary = {
  args: {},
};

export const SignedIn = {
  args: {
    username: "John Doe",
    age: 18,
    location: "los angeles",
  },
};

export const Loading = {
  args: {
    isLoading: true,
  },
};
