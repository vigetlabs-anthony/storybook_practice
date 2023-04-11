import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
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

export const Hidden = {
  args: {
    hidden: true,
  },
};
