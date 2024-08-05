const sequelize = require('../../config/db.config')
const { DataTypes } = require('sequelize')
const author = require('./author.model')
const bookType = require('./bookType.model')
const book = sequelize.define(
    'books',
    {
        book_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        book_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Book name is not empty"
                },
            }
        },
        book_author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: author,
                key: 'author_id',
            },
            validate: {
                notEmpty: {
                    msg: "Author must be needed !"
                }
            }
        },
        book_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: bookType,
                key: 'book_type_id'
            }
        },
        book_edition: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        tablename: "books",
        timestamps: true,
    }
)
//  define association between author and book 
book.belongsTo(author, { foreignKey: 'book_author_id', as: "book_author" })
author.hasMany(book, { foreignKey: 'book_author_id', as: "book_authors" })

book.belongsTo(bookType, { foreignKey: 'book_type_id', as: 'book_type' })
bookType.hasMany(book, { foreignKey: 'book_type_id', as: 'book_types' })



module.exports = book