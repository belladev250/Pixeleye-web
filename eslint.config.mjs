import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Disable specific rules here
  {
    "rules": {
      "@typescript-eslint/no-explicit-any": "off", // Disable the explicit any rule
      "react/no-unescaped-entities": "off", // Disable unescaped entities in React
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variable rule
      "no-console": "off", // Optionally disable no-console rule
      "prefer-const": "off", // Optionally disable prefer-const rule
    },
  },
];

export default eslintConfig;
