// Create script to turn off my particle internet button
import  Particle  from 'particle-api-js';

const particle = new Particle();
const access_token = process.env.particle_access_token;
const device = process.env.button_device;

const turnOffButtonLights = async () => {
    const publishEventPr = particle.publishEvent({ name: 'alloff', data: '', isPrivate: true, auth: access_token }); // isPrivate: true,
    try {
        const data = await publishEventPr;
        if (data.body.ok) { console.log("Event published succesfully") }
    } catch (err) {
        console.log(err);
    }
};

turnOffButtonLights();
