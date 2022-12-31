const Buyers = (sequelize, DataTypes) => {
    const definition = sequelize.define('Buyers', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          name: DataTypes.STRING,
          tradingName: DataTypes.STRING,
          cashForceTax: DataTypes.STRING,
          responsibleName: DataTypes.STRING,
          responsibleEmail: DataTypes.STRING,
          responsiblePosition: DataTypes.STRING,
          responsiblePhone: DataTypes.STRING,
          responsibleMobile: DataTypes.STRING,
          website: DataTypes.STRING,
          postalCode: DataTypes.STRING,
          address: DataTypes.STRING,
          number: DataTypes.STRING,
          complement: DataTypes.STRING,
          neighborhood: DataTypes.STRING,
          city: DataTypes.STRING,
          state: DataTypes.STRING,
          bank: DataTypes.STRING,
          bankAgency: DataTypes.STRING,
          account: DataTypes.STRING,
          documents: DataTypes.STRING,
          phoneNumber: DataTypes.STRING,
          situation: DataTypes.STRING,
          situationDate: DataTypes.STRING,
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
          cnpjId: DataTypes.INTEGER,
          confirm: DataTypes.INTEGER,
          email: DataTypes.STRING
        },
    { timestamps: false, tableName: 'buyers'}
    )

    // definition.associate = (models) => {
    //     definition.belongsTo(models.Cnpjs, { foreignKey: 'cnpjId', as: '_cnpjId' })
    // };
    // definition.associate = (models) => {
    //     definition.hasMany(models.Orders, { foreignKey: 'buyerId', as: 'buyers' })
    // };
   
    
    return definition;
}

module.exports = Buyers;