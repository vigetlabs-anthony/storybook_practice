import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Warning = {
  args: {
    primary: false,
  },
};

export const Loading = {
  args: {
    isLoading: true,
  },
};
