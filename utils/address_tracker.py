# utils/address_tracker.py

import requests
import os

def get_wallet_status(wallet_address):
    if wallet_address.startswith("0x"):  # Ethereum wallet
        url = f"https://api.etherscan.io/api?module=account&action=balance&address={wallet_address}&tag=latest&apikey=YourApiKeyToken"
        response = requests.get(url)
        data = response.json()
        if data["status"] == "1":
            return f"ETH Balance: {int(data['result']) / 10**18:.4f} ETH"
        else:
            return "Failed to fetch ETH balance."
    elif len(wallet_address) > 30:  # Likely Solana
        url = f"https://api.mainnet-beta.solana.com"
        payload = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getBalance",
            "params": [wallet_address]
        }
        headers = {"Content-Type": "application/json"}
        response = requests.post(url, json=payload, headers=headers)
        try:
            sol = response.json()["result"]["value"] / 10**9
            return f"SOL Balance: {sol:.4f} SOL"
        except:
            return "Failed to fetch SOL balance."
    else:
        return "Invalid wallet address."