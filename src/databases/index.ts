import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import WebsiteModel from '@/models/websites.model';
import relations from "./relations";
import PageModel from '@/models/pages.model';
import ComponentModel from '@/models/components.model';

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at'
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    // logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  Websites: WebsiteModel(sequelize),
  Pages: PageModel(sequelize),
  Components: ComponentModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

relations(DB)

export default DB;
