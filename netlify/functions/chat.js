const { GoogleGenAI } = require("@google/genai");

// =====================================================
// WAIT / DELAY
// =====================================================

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));


// =====================================================
// CORS HEADERS
// =====================================================

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};


// =====================================================
// NETLIFY FUNCTION
// =====================================================

exports.handler = async (event) => {

  // ===================================================
  // OPTIONS / CORS
  // ===================================================

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: ""
    };
  }


  // ===================================================
  // ONLY POST
  // ===================================================

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Method Not Allowed"
      })
    };
  }


  try {

    // =================================================
    // API KEY
    // =================================================

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {

      console.error(
        "GEMINI_API_KEY is missing."
      );

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error:
            "Gemini API key is not configured."
        })
      };
    }


    // =================================================
    // REQUEST BODY
    // =================================================

    let body;

    try {

      body = JSON.parse(
        event.body || "{}"
      );

    } catch (parseError) {

      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Invalid JSON request."
        })
      };
    }


    const message = body.message;
    const portfolioData = body.portfolioData;


    // =================================================
    // VALIDATE MESSAGE
    // =================================================

    if (
      !message ||
      typeof message !== "string"
    ) {

      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Message is required."
        })
      };
    }


    // =================================================
    // PORTFOLIO CONTEXT
    // =================================================

    const portfolioContext = JSON.stringify(
      portfolioData || {},
      null,
      2
    );


    // =================================================
    // SYSTEM INSTRUCTION
    // =================================================

    const systemInstruction = `
You are Fadwa Lacham's AI Portfolio Assistant.

Your role is to help visitors understand Fadwa's
professional background, education, experience,
projects, skills, achievements, certifications,
and social profiles.

IMPORTANT RULES:

1. Use ONLY the information provided in the
portfolio context below.

2. Never invent information.

3. Never create companies, positions, projects,
technologies, certifications, dates, links,
education or achievements that are not present
in the portfolio context.

4. If the requested information is not available,
say clearly:

"This information is currently not available
in Fadwa's portfolio."

5. Keep answers professional, friendly,
clear and concise.

6. Answer in English when the visitor asks
in English.

7. Answer in French when the visitor asks
in French.

8. Do not pretend to be Fadwa.

9. You are an AI assistant representing
Fadwa's portfolio.

10. When discussing current employment, use
the current position specified in the portfolio.

11. Do not describe internships as current
employment.

12. When discussing projects, mention relevant
technologies only when they exist in the
portfolio data.

13. When discussing certifications or achievements,
use the information provided in the portfolio.

14. Do not modify URLs.

15. Do not create URLs.

16. If you do not know something from the
portfolio context, do not guess.

17. Prefer short answers suitable for a
portfolio chatbot.

PORTFOLIO CONTEXT:

${portfolioContext}
`;


    // =================================================
    // INITIALIZE GEMINI
    // =================================================

    const ai = new GoogleGenAI({
      apiKey
    });


    // =================================================
    // MODEL
    // =================================================

    const model = "gemini-3.6-flash";


    // =================================================
    // RETRY CONFIGURATION
    // =================================================

    const maxAttempts = 3;

    const delays = [
      1000,
      2000,
      4000
    ];


    // =================================================
    // GEMINI REQUEST WITH RETRIES
    // =================================================

    let lastError = null;

    for (
      let attempt = 1;
      attempt <= maxAttempts;
      attempt++
    ) {

      try {

        console.log(
          `Gemini request attempt ${attempt}/${maxAttempts}`
        );


        const response =
          await ai.models.generateContent({

            model,

            contents: message,

            config: {
              systemInstruction
            }

          });


        // =============================================
        // SUCCESS
        // =============================================

        console.log(
          "Gemini response generated successfully."
        );


        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            response: response.text
          })
        };


      } catch (error) {

        lastError = error;

        console.error(
          `Gemini attempt ${attempt} failed:`,
          error
        );


        // =============================================
        // EXTRACT STATUS
        // =============================================

        const status =
          error?.status ||
          error?.code ||
          error?.response?.status;


        // =============================================
        // RETRY ONLY TEMPORARY ERRORS
        // =============================================

        const shouldRetry =
          status === 429 ||
          status === 500 ||
          status === 502 ||
          status === 503 ||
          status === 504;


        if (
          !shouldRetry ||
          attempt === maxAttempts
        ) {
          break;
        }


        // =============================================
        // WAIT BEFORE RETRY
        // =============================================

        console.log(
          `Gemini temporarily unavailable. Retrying in ${delays[attempt - 1]}ms...`
        );

        await sleep(
          delays[attempt - 1]
        );
      }
    }


    // =================================================
    // FINAL ERROR
    // =================================================

    const finalStatus =
      lastError?.status ||
      lastError?.code;


    // =================================================
    // TEMPORARY GEMINI ERROR
    // =================================================

    if (
      finalStatus === 503 ||
      finalStatus === 502 ||
      finalStatus === 504
    ) {

      return {
        statusCode: 503,
        headers,
        body: JSON.stringify({
          success: false,
          error:
            "The AI service is temporarily busy. Please try again in a few seconds."
        })
      };
    }


    // =================================================
    // RATE LIMIT
    // =================================================

    if (finalStatus === 429) {

      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({
          success: false,
          error:
            "The AI service is temporarily rate-limited. Please try again shortly."
        })
      };
    }


    // =================================================
    // GENERAL ERROR
    // =================================================

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error:
          "Failed to generate AI response."
      })
    };


  } catch (error) {

    // =================================================
    // UNEXPECTED ERROR
    // =================================================

    console.error(
      "Unexpected chatbot error:",
      error
    );


    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error:
          "An unexpected error occurred."
      })
    };
  }
};