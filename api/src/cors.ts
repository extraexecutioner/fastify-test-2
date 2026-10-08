const corsConfiguration: Record <string, any> = {
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PATCH", "PUT", "HEAD", "TRACE", "CONNECT", "QUERY"],
    allowedHeaders: ["content-type"],
    origin: "*",
    credentials: true
}

export default corsConfiguration