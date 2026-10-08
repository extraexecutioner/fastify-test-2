import Server from './server'

const neededEnvFiles: string[] = ["SERVER_PORT"]

neededEnvFiles.forEach(envFile => {
    if (!process.env[envFile]) {
        console.error(`Failed to find an env: ${envFile}`)
        process.exit(1)
    }
})

const server = new Server()
server.init()