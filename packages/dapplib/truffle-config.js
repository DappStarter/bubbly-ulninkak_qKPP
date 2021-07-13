require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rival random snake hover force food gift'; 
let testAccounts = [
"0x378c9cf06c6a5ecd9217012fe465d9d5c7d596ef7adfa11c51ab73870cfff6c4",
"0x649baf12d385efc1ab5b9ed7f466090127f92cff31055c3ab857977f61539a80",
"0xc053f2f9d94e09da6d7d926700b27db16e7141239fe693ba0d48dd7d14f8b771",
"0xe5a5c5cb69e027c2ecae77f9b4d8541cd6f40b12b6b93f161b036a2a67fbf3ca",
"0xafa0933faffcb81db0fac35fc5050e813328cc8ae3f03734ce7c1c0a16649eb1",
"0xdaca05803072c15114c31dec06634b9115c96ca75596db1ef062a10544deff24",
"0xba37b284fa99774ed6e7b9ba22fee60bd79c162f58745f35cb2bf01149470218",
"0xf808d0b8bc2b7ed58c054c4fb61f7adbdb001201eba9dcfc9d74ef7670b062d0",
"0x9e697ae242301b2f8768e7f0a1ed1155fa6aff336a7d6642e80f9f24a29566ea",
"0x4f7ea13bd5aaca77af8113c4abbea28c85c66f4a6813ef36c6c4c7fe9ac14d40"
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
            version: '^0.8.0'
        }
    }
};

