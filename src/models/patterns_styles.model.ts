import { Sequelize, DataTypes, Model } from 'sequelize';
import { PatternStyle } from '@/interfaces/patterns_styles.interface';

export class PatternStyleModel extends Model<PatternStyle> implements PatternStyle {
  pattern_id: string;
  style_id: string;
}

export default function (sequelize: Sequelize): typeof PatternStyleModel {
  PatternStyleModel.init(
    {
      style_id: {
        type: DataTypes.UUID,
        references: {
          model: 'styles',
          key: 'id',
        },
        allowNull: false,
        primaryKey: true,
      },
      pattern_id: {
        type: DataTypes.UUID,
        references: {
          model: 'patterns',
          key: 'id',
        },
        primaryKey: true,
      },
    },
    {
      tableName: 'patterns_styles',
      sequelize,
    },
  );

  return PatternStyleModel;
}
