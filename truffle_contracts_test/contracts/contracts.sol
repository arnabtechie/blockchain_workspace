// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract SimpleStorage {
  uint256 private _data;

  function setData(uint256 data) public {
    _data = data;
  }

  function getData() public view returns (uint256) {
    return _data;
  }
}

contract SetName {
  string private _name;

  function setData(string memory name) public {
    _name = name;
  }

  function getData() public view returns (string memory) {
    return _name;
  }
}
