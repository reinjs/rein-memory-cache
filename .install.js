module.exports = async (ctx, name) => {
  return {
    stdTTL: 0,
    checkperiod: 600,
    errorOnMissing: false,
    useClones: true,
    deleteOnExpire: true
  };
};