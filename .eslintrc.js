module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": ["plugin:mdx/recommended"],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true,
          "modules": true
      },
      "ecmaVersion": 2020,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
  },
  "globals": {
    "Message": "readonly",
    "Card": "readonly",
    "Grid": "readonly",
    "Button": "readonly",
    "Hero": "readonly",
  }
}
