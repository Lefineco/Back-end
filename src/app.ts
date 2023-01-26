import * as postgres_config from '../src/DB/Test/TestConfig';
import * as routers from './Routers/AllRouters';
import cors from '@fastify/cors'
import fastify from 'fastify'

const server = fastify({logger:true})

server.register(require('@fastify/formbody'))
server.register(cors, { origin:'*', methods:['POST'] })


//? Start DB area
postgres_config

//! Route add to start 
server.route(routers.home) 

server.listen({ port: 3000 }, (err, address) => 
{
    if (err) console.error(err), process.exit(1); console.log(`Server listening at ${address}`);
})