import Papa from "papaparse";

export interface ParsedCsvQuestion {
  topic?: string;

  subTopic?: string;

  question: string;

  option1: string;

  option2: string;

  option3: string;

  option4: string;

  correctOption: string;

  difficulty: string;

  explanation?: string;
}

export const parseCsvFile = (
  file: File
): Promise<ParsedCsvQuestion[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,

      skipEmptyLines: true,

      complete: (results) => {
        try {
          const rows =
            results.data as ParsedCsvQuestion[];

          if (!rows.length) {
            throw new Error(
              "CSV file is empty"
            );
          }

          rows.forEach(
            (
              row,
              index
            ) => {
              const rowNo =
                index + 2;

              const requiredFields =
                [
                  "question",
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                  "correctOption",
                  "difficulty",
                ];

              requiredFields.forEach(
                (
                  field
                ) => {
                  if (
                    !(
                      row as any
                    )[
                      field
                    ]
                  ) {
                    throw new Error(
                      `Row ${rowNo}: Missing ${field}`
                    );
                  }
                }
              );

              if (
                ![
                  "option1",
                  "option2",
                  "option3",
                  "option4",
                ].includes(
                  row.correctOption
                )
              ) {
                throw new Error(
                  `Row ${rowNo}: correctOption must be option1, option2, option3 or option4`
                );
              }

              if (
                ![
                  "easy",
                  "medium",
                  "difficult",
                ].includes(
                  row.difficulty.toLowerCase()
                )
              ) {
                throw new Error(
                  `Row ${rowNo}: difficulty must be easy, medium or difficult`
                );
              }
            }
          );

          resolve(rows);
        } catch (
          error
        ) {
          reject(error);
        }
      },

      error: reject,
    });
  });
};