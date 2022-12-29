const Cnpjs = (sequelize, DataTypes) => {
    const definition = sequelize.define('Cnpjs', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        cnpj: DataTypes.STRING,
        companyType: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { timestamps: false, tableName: 'cnpjs'}
    )

    definition.associate = (models) => {
        definition.hasMany(models.Buyers, { foreignKey: 'cnpjId', as: 'buyers' })
    };
    definition.associate = (models) => {
        definition.hasMany(models.Sponsors, { foreignKey: 'cnpjId', as: 'sponsors' })
    };
    definition.associate = (models) => {
        definition.hasMany(models.Orders, { foreignKey: 'cnpjId', as: 'orders' })
    };
    
    return definition;
}

module.exports = Cnpjs;