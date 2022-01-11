module.exports = {
  nodeWS: 'wss://gladios.aresprotocol.io',
  denom: 'ARES',
  decimalPlaces: 12,
  validators: [
	['VALIDATOR1_STASH_ACCOUNT_ADDRESS', 'VALIDATOR1_NAME'],
	['VALIDATOR2_STASH_ACCOUNT_ADDRESS', 'VALIDATOR2_NAME'],
	['VALIDATOR3_STASH_ACCOUNT_ADDRESS', 'VALIDATOR3_NAME']
  ],
  password: 'YOUR_KEYSTORE_ACCOUNT_PASSWORD',
  accountJSON: './keystores/ACCOUNT_FILE.json', //JSON ACCOUNT FILE EXPORTED FROM PolkadotJS Extension
  log: true,
}
