const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/bd.json');

const readBD = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeBD = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

const getWelcomeMessage = async (ctx) => {
  ctx.body = { message: 'Bienvenido Candidato 01' };
};

const getApiVersion = async (ctx) => {
  ctx.body = { version: '1.0.0' };
};

const getProviders = async (ctx) => {
  const { page = 1, limit = 10 } = ctx.query;
  const data = readBD();
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const providers = data.providers.slice(startIndex, endIndex);
  ctx.body = {
    total: data.providers.length,
    page: Number(page),
    limit: Number(limit),
    providers,
  };
};

const addProvider = async (ctx) => {
  const { name, reason, address } = ctx.request.body;
  const data = readBD();

  const providerExist = data.providers.some(
    (provider) => provider.name.toLowerCase() === name.toLowerCase(),
  );

  if (providerExist) {
    ctx.status = 400;
    ctx.body = { message: 'El proveedor ya existe' };
    return;
  }

  const newProvider = { name, reason, address };
  data.providers.push(newProvider);
  writeBD(data);

  ctx.status = 200;
  ctx.body = { message: 'Proveedor agregado', provider: newProvider };
};

const deleteProvider = async (ctx) => {
  const { name } = ctx.params;
  const data = readBD();
  data.providers = data.providers.filter((provider) => provider.name !== name);
  writeBD(data);
  ctx.status = 200;
  ctx.body = { message: 'Proveedor eliminado' };
};

module.exports = {
  getWelcomeMessage,
  getApiVersion,
  getProviders,
  addProvider,
  deleteProvider,
};
