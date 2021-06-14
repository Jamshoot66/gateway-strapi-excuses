'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  randomExcuse: async (ctx) => {
    const excuseRaw = await strapi.models.excuses
      .query((qb) =>
        qb
          .select(['id', 'text', 'min_time', 'max_time'])
          .where('is_active', '=', true)
          .orderByRaw('RANDOM()')
          .limit(1)
      )
      .fetchAll();

    return excuseRaw.toJSON();
  }
};
