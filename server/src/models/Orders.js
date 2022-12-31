const Orders = (sequelize, DataTypes) => {
    const definition = sequelize.define('Orders', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          orderNfId: DataTypes.STRING,
          orderNumber: DataTypes.STRING,
          orderPath: DataTypes.STRING,
          orderFileName: DataTypes.STRING,
          orderOriginalName: DataTypes.STRING,
          emissionDate: DataTypes.STRING,
          pdfFile: DataTypes.STRING,
          emitedTo: DataTypes.STRING,
          nNf: DataTypes.STRING,
          CTE: DataTypes.STRING,
          value: DataTypes.STRING,
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
          cnpjId: DataTypes.INTEGER,
          userId: DataTypes.INTEGER,
          buyerId: DataTypes.INTEGER,
          providerId: DataTypes.INTEGER,
          orderStatusBuyer: DataTypes.STRING,
          orderStatusProvider: DataTypes.STRING,
          deliveryReceipt: DataTypes.STRING,
          cargoPackingList: DataTypes.STRING,
          deliveryCtrc: DataTypes.STRING
        },
    { timestamps: false, tableName: 'orders'}
    )
    
    definition.associate = (models) => {
        definition.belongsTo(models.Cnpjs, { foreignKey: 'cnpjId', as: '_cnpjId' })
        definition.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' })
        definition.belongsTo(models.Buyers, { foreignKey: 'cnpjId', as: 'buyer' })
        definition.belongsTo(models.Providers, { foreignKey: 'cnpjId', as: 'provider' })
    };

    return definition;
}

module.exports = Orders;