import { Sequelize, DataTypes, Model } from 'sequelize';
import { Component } from '@/interfaces/components.interface';

export class ComponentModel extends Model<Component> implements Component {
  id: string;
  title: string;
  path: string;
  tags: string;
  type: string;
}

export default function (sequelize: Sequelize): typeof ComponentModel {
  ComponentModel.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      path: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM('section', 'header', 'footer', 'metadata'),
        defaultValue: 'section',
      },
    },
    {
      tableName: 'components',
      sequelize,
    },
  );

  return ComponentModel;
}
