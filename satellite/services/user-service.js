export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Danilo Silva',
            website: 'danilosilva.tk',
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
