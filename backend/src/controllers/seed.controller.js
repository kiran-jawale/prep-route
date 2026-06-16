import Test from "../models/test.model.js";

export const seedTests = async (req, res) => {
  const userId = "6a30e5ff7aa915d4d73a0e8e";

  await Test.deleteMany({
    name: /^Seed Test/,
  });

  const subjects = [
    {
      subjectId: "6a31063e6cfbdb457d276444",
      topics: [
        "6a3108cf6cfbdb457d276485",
        "6a3108976cfbdb457d27647b",
      ],
      subTopics: [],
    },

    {
      subjectId: "6a3107606cfbdb457d276451",
      topics: [
        "6a31127ea7c3cf017e8b364a",
        "6a31129da7c3cf017e8b364d",
      ],
      subTopics: [
        "6a311597a7c3cf017e8b3679",
        "6a3115c4a7c3cf017e8b367c",
      ],
    },

    {
      subjectId: "6a310e732e72d8b282ebcab8",
      topics: [
        "6a310fed9b5187e3cfff0f8b",
        "6a3111e1a7c3cf017e8b363d",
      ],
      subTopics: [
        "6a311515a7c3cf017e8b3673",
        "6a311543a7c3cf017e8b3676",
      ],
    },

    {
      subjectId: "6a310eb42e72d8b282ebcabb",
      topics: [
        "6a31120ca7c3cf017e8b3640",
        "6a31123ca7c3cf017e8b3643",
      ],
      subTopics: [
        "6a31161da7c3cf017e8b3682",
      ],
    },

    {
      subjectId: "6a310eea2e72d8b282ebcabe",
      topics: [
        "6a3113f3a7c3cf017e8b3661",
        "6a31140da7c3cf017e8b3664",
      ],
      subTopics: [
        "6a3114cda7c3cf017e8b366d",
        "6a3114f7a7c3cf017e8b3670",
        "6a3115e7a7c3cf017e8b367f",
      ],
    },
  ];

  const categories = [
    "mockTest",
    "chapterWise",
    "pyq",
  ];

  const difficulties = [
    "easy",
    "medium",
    "difficult",
  ];

  const tests = [];

  for (let i = 1; i <= 50; i++) {
    const hierarchy =
      subjects[i % subjects.length];

    const category =
      categories[i % categories.length];

    const difficulty =
      difficulties[i % difficulties.length];

    const correctMarks =
      [2, 4][i % 2];

    let publishMode;
    let status;
    let scheduledAt = null;
    let publishedAt = null;
    let availableUntil = null;

    if (i <= 15) {
      publishMode = "immediate";

      status = "live";

      publishedAt = new Date();
    } else if (i <= 30) {
      publishMode = "scheduled";

      status = "draft";

      scheduledAt = new Date(
        Date.now() +
          i * 24 * 60 * 60 * 1000
      );
    } else if (i <= 40) {
      publishMode = "immediate";

      status = "expired";

      publishedAt = new Date(
        Date.now() -
          10 * 24 * 60 * 60 * 1000
      );

      availableUntil = new Date(
        Date.now() -
          3 * 24 * 60 * 60 * 1000
      );
    } else {
      publishMode = "scheduled";

      status = "draft";

      scheduledAt = new Date(
        Date.now() +
          20 * 24 * 60 * 60 * 1000
      );

      availableUntil = new Date(
        Date.now() +
          23 * 24 * 60 * 60 * 1000
      );
    }

    tests.push({
      userId,

      name: `Seed Test ${i}`,

      category,

      subjectId:
        hierarchy.subjectId,

      topics: hierarchy.topics,

      subTopics:
        hierarchy.subTopics,

      questions: [],

      difficulty,

      correctMarks,

      wrongMarks:
        [-1, 0][i % 2],

      unattemptMarks: 0,

      totalTime:
        [30, 60, 90][i % 3],

      totalQuestions: 5,

      totalMarks:
        5 * correctMarks,

      publishMode,

      status,

      scheduledAt,

      publishedAt,

      availableUntil,
    });
  }

  const created =
    await Test.insertMany(tests);

  return res.status(201).json({
    success: true,
    count: created.length,
    message:
      "50 tests seeded successfully",
  });
};