const proficiencyLevels = [
  "👶 Noob",
  "🥳 Beginner",
  "🤓 Intermediate",
  "😎 Advanced",
  "🤯 Expert",
  "🏆 Pro",
];

const proficiencyPrompt = {
  0: "5 year old",
  1: "beginner",
  2: "high school student",
  3: "college student",
  4: "graduate student",
  5: "expert"
};

const openAIKey = process.env.API_KEY;

export { proficiencyLevels, openAIKey, proficiencyPrompt };
