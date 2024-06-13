const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const next = require("next");

dotenv.config();
const port = process.env.PORT || 3003;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

connectDB();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  const corsOptions = {
    origin: [
      "https://solomonmoalawoffice.com",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  };
  server.use(cors(corsOptions));

  // Serve Next.js static files
  server.use('/_next', express.static(path.join(__dirname, '.next')));

  // Serve uploads directory
  server.use("/uploads", (req, res, next) => {
    const dirPath = path.join(__dirname, "/uploads");

    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.error(`Error reading directory: ${err}`);
      } else {
        console.log(`Directory contents: ${files}`);
      }
    });

    express.static(dirPath)(req, res, next);
  });

  const uploadDir = path.join(__dirname, "uploads");
  server.use("/file", express.static(uploadDir));

  // API Routes
  server.use("/api/user", require("./routes/userRoutes"));
  server.use("/api/blog", require("./routes/blogRoutes"));
  server.use("/api/news", require("./routes/newsRoutes"));
  server.use("/api/blogCategory", require("./routes/blogCategoryRoutes"));
  server.use("/api/newsCategory", require("./routes/newsCategoryRoutes"));
  server.use("/api/review", require("./routes/reviewRoutes"));

  // Next.js request handler
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => console.log(`Server started on port ${port}`));
});
