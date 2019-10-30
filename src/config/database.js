module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gogym',
  define: {
    timestramps: true,
    underscored: true,
    underscoredAll: true,
  },
};
