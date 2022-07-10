
function relations(DB: any): void {
    const { Websites, Users, Pages, Components } = DB;
    const cascade = { onDelete: 'SET NULL', onUpdate: 'CASCADE' }

    Websites.belongsTo(Users, { as:"user", foreignKey: 'user_id', ...cascade });
    Pages.belongsTo(Websites, { as:"website", foreignKey: 'website_id', ...cascade });
}


export default relations;