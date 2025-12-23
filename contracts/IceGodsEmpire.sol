// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IceGodsEmpire {
    string public name = "IceGods Empire";
    string public symbol = "ICEG";
    string public logoURI = "https://your-storage.com/iceg-logo.png"; // Your new logo link
    uint8 public decimals = 18;
    uint256 public totalSupply = 30000000000 * 10**18;
    
    address public walletETH = 0x3569846FAc7F7c1F5170a003c5a1ED9Fbf931596;
    mapping(address => uint256) public balanceOf;

    // The "Revenue Leak": 2% of every payment comes to YOU
    uint256 public empireTax = 2; 

    constructor() {
        balanceOf[walletETH] = totalSupply;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        uint256 tax = (amount * empireTax) / 100;
        uint256 finalAmount = amount - tax;
        
        require(balanceOf[msg.sender] >= amount, "Balance too low");
        
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += finalAmount;
        balanceOf[walletETH] += tax; // You earn from every move
        return true;
    }
}
