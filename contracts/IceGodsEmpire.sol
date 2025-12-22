// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IceGodsEmpire is ERC20 {
    address public owner;
    uint256 public constant RATE = 1000000; // 1M tokens per 0.01 ETH

    constructor() ERC20("IceGods Empire", "ICEG") {
        owner = msg.sender;
    }

    function buyTokens() public payable {
        require(msg.value > 0, "Send ETH to buy ICEG");
        uint256 amount = msg.value * RATE;
        _mint(msg.sender, amount);
        payable(owner).transfer(msg.value);
    }
}
