const models =  require('../models');

const eventControllers ={}

eventControllers.fetchAll = async (req, res) => {
    try {
        const events = await models.events.findAll();
        res.json({ events });
    } catch (error) {
        res.json({error});
    }
}

module.exports = eventControllers;