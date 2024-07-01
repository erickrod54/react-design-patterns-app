const express = require("express");
const { quotes } = require("./quotes");
const { quotesOriginal } = require("./quotesOriginal");
const cors = require("cors");
const app = express();
const port = 9000;

/**react-design-patterns-app - version 25.17 - server.quotes.post.update
 * - Features: 
 * 
 *     --> Importing nanaoid dinamiclly
 * 
 *     --> updating addQuote function
 * 
 *     --> updating 'post' asynchronously 
 *       
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

app.use(cors());
app.use(express.json());

// Dynamically import nanoid and assign it
let nanoid;
(async () => {
  const { nanoid: importedNanoid } = await import("nanoid");
  nanoid = importedNanoid;
})();

// Helper functions
const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

const readQuotes = async () => quotes;

const addQuote = (quote, author) => {
  const id = nanoid(); // Generate unique ID
  quotes.quotes.unshift({ id, quote, author });
  return id;
};

const getQuotesByPage = async (page, limit) => {
  const offset = page * limit;
  const endIndex = offset + limit;
  const quotesData = await readQuotes();
  const paginatedQuotes = quotesData.quotes.slice(offset, endIndex);
  return {
    quotes: paginatedQuotes,
    hasMore: endIndex < quotesData.quotes.length,
  };
};

const getQuotesByCursor = async (cursor, limit) => {
  const endIndex = cursor + limit;
  const quotesData = await readQuotes();
  const paginatedQuotes = quotesData.quotes.slice(cursor, endIndex);
  return {
    quotes: paginatedQuotes,
    nextCursor: endIndex < quotesData.quotes.length ? endIndex : null,
  };
};

// Routes
app.get("/top_quotes", async (req, res) => {
  try {
    await sleep();
    const quotesData = await readQuotes();
    res.json({ quotes: quotesData.quotes.slice(0, 5) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", async (req, res) => {
  try {
    const { page, cursor } = req.query;
    if (!page && !cursor) {
      throw new Error(
        'Missing parameters. Please provide "page" or "cursor" parameter in the request query.'
      );
    }
    await sleep();

    const limit = 5;
    if (page) {
      return res.json(await getQuotesByPage(parseInt(page, 10), limit));
    }
    if (cursor) {
      return res.json(await getQuotesByCursor(parseInt(cursor, 10), limit));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Missing parameters("page" or "cursor").',
    });
  }
});

app.post("/", async (req, res) => {
  try {
    const { quote, author } = req.body;
    if (!quote || !author) {
      return res.status(400).send("Please provide author and quote text.");
    }
    await sleep();
    const id = addQuote(quote, author);
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/reset", async (req, res) => {
  try {
    await sleep();
    quotes.quotes.length = 0;
    quotes.quotes.push(...quotesOriginal.quotes);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
