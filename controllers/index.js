const models = require('../database/models');

/* query all config and haiku data */
const getAll = async (req, res) => {
    try {
        const configs = await models.Config.findByPk(1);
        const haikus = await models.Haiku.findAll();
        return res.status( 200 )
            .json( { configs, haikus } );
    } catch ( e ) {
        return res.status( 500 )
    }
}

/* query all haikus */
const getHaikus = async (req, res) => {
    try {
        const haikus = await models.Haiku.findAll();
        return res.status( 200 )
            .json( { haikus } );
    } catch ( e ) {
        return res.status( 500 )
    }
}

/* query a haiku */
const getHaiku = async (req, res) => {
    try {
        const haiku = await models.Haiku.findOne(
            {
                where: parseInt( req.params.id )
            });
        if ( haiku ) {
            return res.status( 200 )
                .json({ haiku })
        }
        return res.status( 404 )
            .send('Haiku does not exists');
    } catch ( e ) {
        return res.status( 500 )
    }
}

/* update a haiku */
const updateHaiku = async (req, res) => {
    try {
        const haikuID = parseInt( req.params.id );
        const [ updated ] = await models.Haiku.update(
            req.body,
            { where: { id: haikuID } }
            );
        if ( updated ) {
            const updatedPost = await models.Haiku.findOne(
                { where: { id: haikuID } }
                );
            return res.status( 200 )
                .json({ post: updatedPost });
        }
    } catch ( e ) {
        return res.status( 500 )
    }
};

/* update config order */
const updateOrder = async (req, res) => {
    const indexList = req.body.order.split(',').map(Number);
    try {
        const [ updated ] = await models.Config.update(
            { order: indexList },
            { where: { id: 1 } }
            );
        if ( updated ) {
            const updatedPost = await models.Config.findOne(
                { where: { id: 1 } }
                );
            return res.status( 200 )
                .json({ post: updatedPost });
        }
    }
    catch ( e ) {
        return res.status(500)
    }
};

module.exports = {
    getAll,
    getHaiku,
    getHaikus,
    updateHaiku,
    updateOrder,
}
