const express = require('express');
const app = express();

const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const axios = require('axios');

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 2 minutes).
});

const PORT = 3004;

app.use(morgan('combined'));

app.use(limiter);

//Demo route.
app.get("/api/v1/demo", (req, res) => {
    res.status(200).json({
        message: "Just a Demo!!."
    });
});

//Authentication middleware.
app.use("/bookingService", async (req, res, next) => {
    console.log(req.headers['x-access-token']);
    try {
        const response = await axios.get('http://localhost:3001/api/v1/isAuthenticated', {
            headers: {
                'x-access-token': req.headers['x-access-token']
            }
        });
        console.log(response.data);
        if(response.data.success) {
            next();
        } else {
            return res.status(401).json({
                message: 'Unauthorised'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorised'
        });
    }
});

app.use("/bookingService", createProxyMiddleware({target: 'http://localhost:3002/', changeOrigin: true}));

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});

