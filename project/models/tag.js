const { DataTypes, Model } = require("sequelize");
const sequelize  = require("../config/db.config")
class Tag extends Model {}
const { Sequelize } = require("sequelize")

Tag.init(
  {
    tagName: {
      comment: "标签名称",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isDeleted: {
      comment: "是否已经删除",
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // 设置默认值为当前时间
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), // 设置默认值为当前时间并在更新时更新
    },
  },
  {
    sequelize,
    modelName: "Tag",
    timestamps: false, // 禁用自动生成的 createdAt 和 updatedAt 列
  }
);


module.exports = Tag;
