const validApiKeys = ['12345', '678910']; 

const Auth = (req, res, next) => {
    // const userToken = req.header('API-TOKEN'); 

    // if (!userToken || !validApiKeys.includes(userToken)) {
    //     return res.status(403).json({
    //         status: false,
    //         error: "Invalid API key"
    //     });
    // }

    next();
};

export default Auth