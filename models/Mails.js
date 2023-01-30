module.exports = (sequelize, DataTypes) => {
  const Mails = sequelize.define("Mails", {
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mailBody: { type: DataTypes.STRING, allowNull: false },
  });

  return Mails;
};
