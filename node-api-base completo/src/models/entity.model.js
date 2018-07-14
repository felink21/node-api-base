/**
 * @see http://docs.sequelizejs.com/manual/tutorial/models-definition.html
 * @see http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  let GasStation = sequelize.define('GasStation', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });

  return GasStation;
};
