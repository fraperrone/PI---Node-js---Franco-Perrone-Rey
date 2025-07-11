//creamos el servicio auth loging


import generateToken from '../utils/generateToken.js';



export const login = ({ email, password }) => {
  const correctEmail = process.env.LOGIN_EMAIL;
  const correctPassword = process.env.LOGIN_PASSWORD;

  if (email !== correctEmail || password !== correctPassword) {
    throw new Error('Credenciales inválidas');
  }

  const token = generateToken({ email }); // podés agregar más payload si querés
  return { token };
};