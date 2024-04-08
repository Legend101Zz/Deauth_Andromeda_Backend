# DEAUTH Platform Backend

Welcome to the backend repository for the DEAUTH platform.

## project video link

[Click here to watch the video](https://drive.google.com/file/d/1BrkGIdxUUgOZf7hpsGZNy4BBlWmBMWGp/view?usp=sharing)

### ✅ Additional Feature: Multiple Design Submission and NFT Creation

### Challenge:

In implementing the feature allowing designers to submit multiple designs for NFT creation, we encountered a challenge ensuring the availability and authenticity of the NFTs for sale.

### Solution:

To address this challenge, we implemented a verification process during NFT purchases. We validate both the owner's ID and the associated child ID to confirm the NFT's availability for sale. This verification step adds an extra layer of security and ensures that only legitimate NFTs are available for purchase.

[Main Repository.](https://github.com/deauthe/deauth_andromeda)

### Security Measures:

The data associated with this verification process is securely stored in our backend system. We retain only public addresses, ensuring the confidentiality of sensitive information while maintaining robust security measures. This approach safeguards user data and enhances the overall integrity of the platform.

### How to setup

npm install

export $(cat .env.local)

npm run server:dev
