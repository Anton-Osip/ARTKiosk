/** @type {import("stylelint").Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Class names must be in camelCase (e.g., myClass)',
      },
    ],
  },
};
