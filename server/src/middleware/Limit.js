import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 2,
  message: {
    status: false,
    error: "Too many requests, please try again later.",
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});

export default limiter;
