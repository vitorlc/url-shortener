module.exports = (sequelize, DataTypes) => {
    const Urls = sequelize.define('Urls', {
        original: DataTypes.STRING,
        shortUrl: DataTypes.STRING,
        clicks: DataTypes.INTEGER,
    });

    return Urls;
}