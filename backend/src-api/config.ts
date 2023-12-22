export const PIONEER_WS = process.env['PIONEER_WS'] || "wss://pioneers.dev";
export const URL_PIONEER_SPEC = process.env['URL_PIONEER_SPEC'] || "https://pioneers.dev/spec/swagger.json";

export const WALLET_MAIN = process.env['WALLET_MAIN'];
if (!WALLET_MAIN) throw Error("Missing WALLET_MAIN from ENV!");

export const TERMINAL_NAME = process.env['TERMINAL_NAME'];
if (!TERMINAL_NAME) throw Error("TERMINAL_NAME is required!");

export const QUERY_KEY = process.env['QUERY_KEY'];
if (!QUERY_KEY) throw Error("QUERY_KEY is required!");

export const NO_BROADCAST = process.env['WALLET_NO_BROADCAST'];
if (NO_BROADCAST) console.log("NERFED! wallet will not send crypto!");

export const WALLET_FAKE_PAYMENTS = process.env['WALLET_FAKE_PAYMENTS'];
if (WALLET_FAKE_PAYMENTS) console.log("WALLET_FAKE_PAYMENTS: will NOT pay crypto!");

export const WALLET_FAKE_BALANCES = process.env['WALLET_FAKE_BALANCES'];
if (WALLET_FAKE_BALANCES) console.log("WALLET_FAKE_BALANCES: will FAKE BALANCES!");

export const WALLET_FAKE_BALANCES_DAI = process.env['WALLET_FAKE_BALANCES_DAI'];
if (WALLET_FAKE_BALANCES_DAI) console.log("WALLET_FAKE_BALANCES_DAI: will FAKE BALANCES!");

export const WALLET_FAKE_BALANCES_CASH = process.env['WALLET_FAKE_BALANCES_CASH'];
if (WALLET_FAKE_BALANCES_CASH) console.log("WALLET_FAKE_BALANCES_CASH: will FAKE BALANCES!");

export const ATM_NO_HARDWARE = process.env['ATM_NO_HARDWARE'];
if (ATM_NO_HARDWARE) console.log("ATM_NO_HARDWARE: not attempting hardware!");

export const WALLET_ROTATE_ADDRESSES = process.env['WALLET_ROTATE_ADDRESSES'];
if (WALLET_ROTATE_ADDRESSES) console.log("WALLET_ROTATE_ADDRESSES: wallet will give each user a new address and sweep!");

export const USB_CONNECTION = process.env['USB_CONNECTION'];
if (!USB_CONNECTION) console.log("USB_CONNECTION: REQUIRED!");

// export const USB_CONNECTION_2 = process.env['USB_CONNECTION_2'];
// if (!USB_CONNECTION_2) console.log("USB_CONNECTION_2: REQUIRED!");

// export const DAI_CONTRACT = "0x6b175474e89094c44da98b954eedeac495271d0f"
// export const service = "https://mainnet.infura.io/v3/fb05c87983c4431baafd4600fd33de7e"

// export const DAI_CONTRACT = "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
// export const service = "https://avalanche.drpc.org"

//https://polygon.llamarpc.com
export const DAI_CONTRACT = "0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
export const service = "https://polygon.rpc.blxrbdn.com"
