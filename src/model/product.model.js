const {Sequelize, Model, DataTypes} = require("sequelize");

const sequelize = new Sequelize("product_test", "postgres", "jhosephCA19.",{
    host: "localhost",
    dialect: "postgres",
    port: 5432
})

class Product extends Model{}

Product.init({
    product_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    product_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull:false,
    },
    is_stock: {
        type: DataTypes.BOOLEAN,
    }
},{
    sequelize,
    modelName:'Product',
})

module.exports = Product;

/*
async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log('conecction estable');
    } catch(error){
        console.log('conecction unable to the database',error)
    }
};

testConnection();
*/