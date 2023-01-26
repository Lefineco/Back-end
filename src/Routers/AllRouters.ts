import * as routers from '../Controllers/Test/Test';
import * as middlewares from '../Middlewares/Test'


export const home: any =
    {
        method: "POST",
        url: "/",
        preHandler: [middlewares.middleware],
        handler: routers.toTest
    }
