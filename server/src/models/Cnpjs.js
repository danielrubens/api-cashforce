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
    { underscored: true, timestamps: false, tableName: 'cnpjs'}
    )

    return definition;
}

module.exports = Cnpjs;