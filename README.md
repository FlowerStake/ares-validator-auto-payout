# Ares Protocol validator auto payout

Claim and distribute validator staking rewards for your stakers automagically in Ares Protocol Substrate blockchain.

Made with ❤️ from ColmenaLabs_SVQ! Adapted to Ares Protocol by Jimi Flowers (https://flowerstake.io)

## Install NodeJS, clone repo and install modules

Needs nodejs (>= v10.20.1), check https://nodejs.org/en/download/ to install for your platform.

Clone the repository and install the needed dependencies:

```
git clone https://github.com/FlowerStake/ares-validator-auto-payout.git
cd ares-validator-auto-payout
yarn
```

#### Important: Once all modules are installed, you need to re-download type definitions from repo

```
git checkout HEAD node_modules/@ares-protocol
```

## Add KeyStore (JSON Account File)

Go to [Polkadot JS UI](https://js.aresprotocol.io/apps/#/accounts) and export the account you want to use to json format, then copy the json file/s in the `keystores` folder.

## Usage

Using parameters:

```
node autopayout.js -a keystores/account.json -p password -v validator_stash_address
```

Ask for password:

```
node autopayout.js -a keystores/account.json -v validator_stash_address
```

Or simply edit `config.js` with your data and run without any parameter (cron friendly):

```
node autopayout.js
```
Example output:

```
 Ares Protocol auto payout

 - Check source at https://github.com/FlowerStake/ares-validator-auto-payout

 - Made with love from ColmenaLabs_SVQ https://colmenalabs.org/

 - Adapted to Ares Protocol by Jimi Flowers https://flowerstake.io/

 -> Validator stash address is 4CDo1enKQhb7EXYh91yfANuxRS7VdEfuHb8SxQRvw173jpPd
 -> Importing account 4G6qCzHmfKgk9W5QBidVndsbhXQ2PvfUDu1YKuizqfDP7j3y
 -> Connecting to wss://gladios.aresprotocol.io
 -> Account 4G6qCzHmfKgk9W5QBidVndsbhXQ2PvfUDu1YKuizqfDP7j3y free balance is 10.58 kARES
 -> Current era is 730
 -> Unclaimed eras: [720,729]
 -> Paying Era: 720
         Payout Success!
 -> Paying Era: 729
         Payout Success!

```


NOTE: Set `config.js` file permissions to `600` for better security.

TODO: It doesn't take in account ongoing elections yet!

## Using multiple validators

Use `validators` array in `config_multiple.js` to add the stash address and name of your validators, then:

```
node autopayout-validators.js
```
