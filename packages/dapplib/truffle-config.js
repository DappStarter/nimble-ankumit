require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan radar rifle huge hope entry army giant'; 
let testAccounts = [
"0xf08c8fa093ab5d0fe1fb4f3737ad4aba3d07fd9a115d4390a2e019811509c782",
"0x3578818a7c94761980dd4160c51532f5e649b17e1a5088d7ce0f0d1523d93895",
"0x9ea4d1e1a286a4f363eb697d8a48d592a02a4e06caaaa802ad237d1aac7bd8e8",
"0xe8792d71726fe5c6b88ead1d3669aea7f40f3fb054145b9e66d622ab6d96db77",
"0x59f31775e1fde47d86c9f5f09b5d565f1e3d286f75e9a4e73e64312b916150b0",
"0x07d5075d4744bd86c1f2df182ef62a8bbcf0a91db5287ccc01a1dca7bcc66bc0",
"0x6b1bf106ddf326d6c5f109c3597d58f3ab08545eb9dddd7a2816f3befb0b7ab6",
"0xf45b7ca8a49cd38aee88a86bf82c06a35f0a5d6c753e155549652a20e8efb99e",
"0x3093d602c9e78a25de4d994082e08d3b755030ca1ec0e24785ee2b19c1f543c6",
"0x97c5a0dc91ee41453fe36f39173e296ad0c7951cbee6c26a8b4990bdf24bd61d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
