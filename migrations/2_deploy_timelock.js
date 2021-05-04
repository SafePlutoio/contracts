const Timelock = artifacts.require('Timelock');

const owner = '0xb2381a5C6d7AdA366391be61033F3fC277C0E36C';

module.exports = async function (deployer) {
  const delay = '86400';
  await deployer.deploy(Timelock, owner, delay);
};
