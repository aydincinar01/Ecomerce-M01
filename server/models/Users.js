module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEN,
        value: false,
        allowNull: false,
      },
    });
  
    // Users.associate = (models) => {
    //   Users.hasMany(models.Likes, {
    //     onDelete: "cascade",
    //   });
  
    //   Users.hasMany(models.Posts, {
    //     onDelete: "cascade",
    //   });
    // };
  
    return Users;
  };