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
        definition.hasMany(models.Buyers, { foreignKey: 'cnpjId', as: 'cnpjs' })
    };
  
    definition.associate = (models) => {
        definition.hasMany(models.Providers, { foreignKey: 'cnpjId', as: 'cnpjs' })
        
    };


    return definition;
}

module.exports = Cnpjs;