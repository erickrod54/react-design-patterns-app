/**react-design-patterns-app - version 23.12 - server.quotes js  
 * - Features: 
 *    
 *     --> Building express server for 'quotes' app
 * 
 * Note: cors is used here so the npm library has
 * to be install  
 */


const express = require("express");
const { quotes } = require("./quotes");
const { quotesOriginal } = require("./quotesOriginal");
const nanoid = require("nanoid");
const cors = require("cors");
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

const readQuotes = async () => {
  return quotes;
};

const addQuote = (quote, author) => {
  const id = nanoid();
  quotes.quotes.unshift({ id, quote, author });
  return id;
};

const getQuotesByPage = async (page, limit) => {
  const offset = page * limit;
  const endIndex = offset + limit;
  const quotesData = await readQuotes();
  const quotes = quotesData.quotes.slice(offset, endIndex);
  return {
    quotes,
    hasMore: endIndex < quotesData.quotes.length - 1,
  };
};

const getQuotesByCursor = async (cursor, limit) => {
  const endIndex = cursor + limit;
  const quotesData = await readQuotes();
  const quotes = quotesData.quotes.slice(cursor, endIndex);

  return {
    quotes,
    nextCursor: endIndex < quotesData.quotes.length - 1 ? endIndex + 1 : null,
  };
};

app.get("/top_quotes", async (request, response) => {
  try {
    await sleep();
    const quotesData = await readQuotes();
    response.json({
      quotes: quotesData.quotes.slice(0, 5),
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", async (request, response) => {
  try {
    const { page, cursor } = request.query;
    if (!page && !cursor) {
      throw new Error(
        'Missing parameters. Please provide "page" or "cursor" parameter in the request query.'
      );
    }
    await sleep();

    const limit = 5;

    if (page)
      return response.json(await getQuotesByPage(parseInt(page), limit));
    if (cursor)
      return response.json(await getQuotesByCursor(parseInt(cursor), limit));
  } catch (error) {
    console.error(error);
    response.status(500).json({
      error: 'Missing parameters("page" or "cursor"). ',
    });
  }
});

app.post("/", async (request, response) => {
  try {
    const { quote, author } = request.body;
    if (!quote || !author) {
      response.status(400).send("Please provide author and quote text.");
      return;
    }
    await sleep();
    const id = addQuote(quote, author);
    response.status(201).json({ id });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/reset", async (request, response) => {
  try {
    await sleep();
    quotes.quotes.length = 0;
    quotes.quotes.push(...quotesOriginal.quotes);
    response.json({ success: true });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
