# DEAUTH Platform Backend

Welcome to the backend repository of the DEAUTH platform! This repository contains the server-side code and infrastructure that powers the core functionality of the DEAUTH platform, enabling artists to showcase their art, monetize their creations, and offer unique value-based NFTs.

## Project Overview

Nearly all of the NFTs on the market today are reportedly worthless. This marks quite the fall from grace for the NFT, which saw a meteoric rise starting in 2021. It's estimated that 23 million people bought NFTs, only to see their value plummet.

With the DEAUTH project, we aimed to achieve two key objectives:
1. Help designers and artists who create art but struggle to monetize it effectively.
2. Create NFTs that have inherent worth and value.

Introducing DEAUTH - a revolutionary platform that empowers designers to create NFTs of their art and leverage them to produce a diverse range of products such as shirts, hoodies, mugs, and more.

By creating NFTs on the DEAUTH platform, designers not only establish a unique identity for their designs but also gain the opportunity to earn monetary benefits from the actual sales of the products created from their designs on our e-commerce site.

Furthermore, designers can amplify their earning potential by dividing the ownership of their NFTs among multiple owners. This innovative approach allows for the distribution of sales benefits according to the proportion of NFT ownership, creating a new avenue for artists to monetize their creations.

"Revolutionizing artist earnings: Every design on our platform is more than art—it's a digital investment linked to product sales, unlocking new opportunities for artists to succeed in the digital landscape."

For a detailed overview of the DEAUTH platform, please watch our project video:

[Click here to watch the video](https://drive.google.com/file/d/1BrkGIdxUUgOZf7hpsGZNy4BBlWmBMWGp/view?usp=sharing)

## Backend Architecture

- **Reference NFTs**: A novel solution to manage the parent-child relationships between NFTs securely and efficiently.
- **NFT Minting**: A process that allows artists to create and mint their unique NFTs on the platform.
- **Verification Process**: A secure mechanism to ensure the availability and authenticity of NFTs during purchases.
- **Data Storage**: A reliable and scalable data storage system to store and retrieve NFT metadata and user information.

### ✅ Additional Feature: Multiple Design Submission and NFT Creation

### Challenge:

In implementing the feature allowing designers to submit multiple designs for NFT creation, we encountered a challenge ensuring the availability and authenticity of the NFTs for sale.

### Solution:

To address this challenge, we implemented a verification process during NFT purchases. We validate both the owner's ID and the associated child ID to confirm the NFT's availability for sale. This verification step adds an extra layer of security and ensures that only legitimate NFTs are available for purchase.

## Main Repository

[Main Repository.](https://github.com/deauthe/deauth_andromeda)

### Security Measures:

The data associated with this verification process is securely stored in our backend system. We retain only public addresses, ensuring the confidentiality of sensitive information while maintaining robust security measures. This approach safeguards user data and enhances the overall integrity of the platform.

### How to setup

#### Getting started

Install `Docker` and `Docker Compose` which are used to maximise the convenience of development on local machine.

When both are installed, build the backend image as follow:

```sh
docker-compose build
```

Run the app:

```sh
docker-compose up
```

Go to:

```
 http://localhost:8080/api/health
```

If you see the following response in the browser:

```
{"status":"OK","data":"2022-02-13T20:05:13.965Z"}
```

It means that everything work as expected.

#### Getting started, standard way (no containerization)

If you want to run NET.ts "standard way" using the `npm` instead of `docker-compose`.
You are free to do it just keep in mind that I develop the NET.ts project on node version 16.
Note: you need to set env variables defined in `.env.local` file.
Enviromment variables - define your envs in `.env.local` file and provide validation rules for them inside `@config/config.ts` file.
On mac OS you can use `export $(cat .env.local)` to export all env variables from the .env.local file.

Install dependencies:

```
npm install
```

Run server in dev mode:

```
npm run server:dev
```

#### Code linting

Run code quality analysis using

```sh
npm run lint
```

or insde of the container

```sh
docker-compose run web npm run lint
```

#### Fixing problems

Automatically fix linter's problems

```sh
npm run lint:fix
```

or insde of the container

```sh
docker-compose run web npm run lint:fix
```

#### Logging

```javascript
import logger from '@core/utils/logger';

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
logger.silly('message'); // level 6
```

In development mode, log messages of all severity levels will be printed to the console.
In production mode, only `info`, `warn`, and `error` logs will be printed to the console.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).



## License

The DEAUTH backend repository is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code for both commercial and non-commercial purposes.



