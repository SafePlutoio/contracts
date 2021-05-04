const SafePluto = artifacts.require('SafePluto');

const owner = '';

module.exports = async function (deployer) {
  await deployer.deploy(SafePluto, owner);
};
