module.exports = {
    apps: [
        {
            name: "atm",
            exec_mode: "cluster",
            instances: "1",
            script: "./dist/main.js", // your script
            args: "start",
            env: {
                REDIS_CONNECTION:"redis://127.0.0.1:6379",
                REDIS_HOST:"127.0.0.1",
                REDIS_PORT:"6379",
                WALLET_MAIN:"clinic humor torch trade section bicycle flame army warm system limit junior",
                QUERY_KEY:"asdasdfgdsfsd",
                TERMINAL_NAME:"ALPHA_BANKLESS_1",
                ATM_OWNER:"0x33b35c665496bA8E71B22373843376740401F106",
                USB_CONNECTION:"\\.\COM4",
                USB_CONNECTION_2:"\\.\COM5"
            },
        },
    ],
};