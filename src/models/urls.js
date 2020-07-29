module.exports = (sequelize, DataTypes) => {
    const Urls = sequelize.define('urls', {
        original: DataTypes.STRING,
        shortUrl: DataTypes.STRING,
        clicks: DataTypes.INTEGER,
    },{
        tableName: 'urls'
    });
    return Urls;
}