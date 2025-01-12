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
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // Change to "warn" or "off" to reduce the strictness
        {
          args: "none", // Ignore unused function arguments
          vars: "all",  // Check all variables but allow exceptions
          varsIgnorePattern: "^_", // Ignore variables prefixed with "_"
          argsIgnorePattern: "^_", // Ignore arguments prefixed with "_"
        },
      ],
    },
  },
];

export default eslintConfig;
