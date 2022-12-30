const Users = (sequelize, DataTypes) => {
    const definition = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          name: DataTypes.STRING,
          email: DataTypes.STRING,
          phoneNumber: DataTypes.STRING,
          mobile: DataTypes.STRING,
          departament: DataTypes.STRING,
          verificationCode: DataTypes.STRING,
          emailChecked: DataTypes.INTEGER,
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
          cashforceAdm: DataTypes.INTEGER
        },
    { timestamps: false, tableName: 'users'}
    )
    // definition.associate = (models) => {
    //     definition.hasMany(models.Buyers, { foreignKey: 'cnpjId', as: 'cnpjs' })
    // };
    // definition.associate = (models) => {
    //     definition.hasMany(models.Orders, { foreignKey: 'userId', as: 'users' })
    // };
    definition.associate = (models) => {
        definition.hasMany(models.Buyers, { foreignKey: 'userId', as: 'users' })
    };

    return definition;
}

module.exports = Users;