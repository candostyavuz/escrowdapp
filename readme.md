# Decentralized Escrow Application

This is an Escrow Dapp built with [Hardhat](https://hardhat.org/).

# Recently Added Features:
1. Approved transactions are saved in local server. If user refreshes the page, transaction history will be shown.
2. Metamask authentication loading animations are added in UI.

## Project Layout

There are three top-level folders:

1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract

## Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run `npx hardhat help`.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/app` folder, which will make it available to the front-end. This path configuration can be found in the `hardhat.config.js` file.

## Front-End

To run the front-end application move into the `app` folder and run `parcel index.html`.

You can learn more about Parcel [here](https://parceljs.org/).
