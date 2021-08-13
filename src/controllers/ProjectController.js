const knex = require("../database/index");

module.exports = {
    async allResults(request, response, next) {
        try {
            const results = await knex('tb_projeto');

            return response.json(results);
        } catch (error) {
            next(error);
        }
    },

    async specificProject(request, response, next) {
        try {
            const id_projeto = request.params.id_projeto;

            const results = await knex('tb_projeto').where('id_projeto', id_projeto);

            return response.json(results);
        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const { no_projeto, ds_projeto, id_user_owner, status } = request.body;

            await knex('tb_projeto').insert({
                no_projeto,
                ds_projeto,
                id_user_owner,
                status
            });

            return response.status(200).json(request.body);
        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            const { no_projeto, ds_projeto, id_user_owner, status } = request.body;
            const id_projeto = request.params.id_projeto;

            await knex('tb_projeto').update({
                no_projeto,
                ds_projeto,
                id_user_owner,
                status,
                updated_at: knex.fn.now(),
            }).where('id_projeto', id_projeto);

            return response.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async disableStatus(request, response, next) {
        try {
            const id_projeto = request.params.id_projeto;

            await knex('tb_projeto').update({
                status: 0,
                updated_at: knex.fn.now(),
            }).where('id_projeto', id_projeto);

            return response.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    async enableStatus(request, response, next) {
        try {
            const id_projeto = request.params.id_projeto;

            await knex('tb_projeto').update({
                status: 1,
                updated_at: knex.fn.now(),
            }).where('id_projeto', id_projeto);

            return response.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
