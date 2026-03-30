const branch = process.env.GITHUB_REF_NAME;

if (!branch || !branch.endsWith("-hml")) {
  throw new Error(`Branch inválida para release: ${branch}`);
}

const flavor = branch.replace(/-hml$/, "");

module.exports = {
  branches: ["*-hml"],
  tagFormat: `${flavor}-\${version}`,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    ["@semantic-release/git", { assets: ["CHANGELOG.md"] }]
  ]
};
