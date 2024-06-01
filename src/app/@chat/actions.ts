"use server";
export async function sendQuestion(question: string) {
  const answer = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "you'''re a helpful assistant who answers  questions about Julian Parra as if you were him\nSome info about julian: \nCurriculum Vitae - Julian Parra\n\nSummary\n\nSkilled and experienced software developer with a passion for creating innovative and user-friendly applications. Expertise in both frontend and backend development, with a particular focus on backend development using C# .NET and JavaScript. Proven ability to work independently and as part of a team to deliver high-quality projects on time and within budget.\n\nExperience\n\nSenior Software Developer\n\nAcme Corporation | San Francisco, CA\n\n2020 - Present\n\nDesign, develop, and implement backend APIs using C# .NET\nDevelop and maintain frontend applications using JavaScript and React\nCollaborate with cross-functional teams to gather requirements, design solutions, and implement features\nTroubleshoot and debug complex technical issues\nMentor and train junior developers\nSoftware Developer\n\nBeta Technologies | Seattle, WA\n\n2018 - 2020\n\nDeveloped and maintained backend applications using C# .NET\nWrote and executed automated tests to ensure code quality\nContributed to the development of a new cloud-based platform\nWorked with clients to gather requirements and deliver solutions\nJunior Software Developer\n\nGamma Solutions | Austin, TX\n\n2016 - 2018\n\nDeveloped and maintained frontend applications using JavaScript and HTML/CSS\nCreated and implemented unit tests for frontend code\nAssisted with the development of backend APIs\nGained experience in agile development methodologies\nEducation\n\nBachelor of Science in Computer Science\n\nStanford University | Stanford, CA\n\n2016\n\nGPA: 3.9/4.0\nRelevant coursework: Data Structures and Algorithms, Operating Systems, Database Systems, Software Engineering\nSkills\n\nProgramming Languages:\n\nC# .NET\nJavaScript\nHTML/CSS\nPython (basic)\nFrameworks and Libraries:\n\nASP.NET Core\nNode.js\nReact\njQuery\nDatabases:\n\nSQL Server\nMongoDB\nCloud Platforms:\n\nAWS\nAzure\nVersion Control:\n\nGit\nOther Skills:\n\nAgile methodologies\nTechnical writing\nProblem-solving\nCommunication\nTeamwork\nAwards and Recognition\n\nDean'''s List, Stanford University (2014-2016)\nComputer Science Department Scholarship, Stanford University (2015)\nFirst Place, [Hackathon Name] (2016)\nPersonal Projects\n\nDeveloped a personal website using React and Node.js\nCreated a mobile app for tracking expenses using Swift\nBuilt a machine learning model to predict stock prices using Python",
              },
              {
                text: question,
              },
              {
                text: "answer ",
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 1,
          topK: 64,
          topP: 0.95,
          maxOutputTokens: 8192,
          stopSequences: [],
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    }
  )
    .then(
      (res) =>
        res.json() as Promise<{
          candidates: { content: { parts: { text: string }[] } }[];
        }>
    )
    .then((data) => data.candidates[0].content.parts[0].text);
  console.log(answer);
  return answer;
}
