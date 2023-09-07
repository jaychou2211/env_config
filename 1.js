console.log(process.env.a);
console.log(process.env.b);
const str = 
"The docker-compose.yml file successfully retrieves environment variables" +
"defined in the .env file, and prints them out in this location"
console.log(str);

// Development environment: 
// environment variables are provided to docker-compose.yml by .env file

// CI automated testing: 
// environment variables are obtained by the runner and github action, 
// then provided to docker-compose.yml

// CD deployment (fly.io): 
// environment variables are obtained by the runner and github action, 
// then provided to fly.toml,
// and secrets are set into the cloud platform with additional commands