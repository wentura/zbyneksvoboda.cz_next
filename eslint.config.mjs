import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "app/(main)/ckdfaq/ckdBAK.js",
    ],
  },
  ...nextVitals,
];

export default eslintConfig;
