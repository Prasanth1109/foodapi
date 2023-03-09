require("dotenv").config();
import { Container } from "typedi";
import { useContainer } from "routing-controllers";
import * as http from "http";
import { graphqlHTTP } from 'express-graphql';
import { connect } from './typeorm';
import express, { Router } from "express";
import schema from './Schemas/schema';
import bodyParser from "body-parser";
import cors from "cors";

const handleCors = (router: Router) =>router.use(cors({ /*credentials: true,*/ origin: true }));

async function start() {
    try {
      await connect()
        .then(() => console.log("database connected successfully::"))
        .catch((err) =>
        console.log("failed to connect database::", JSON.stringify(err)));


        const app=express();
        handleCors(app);
        useContainer(Container); 

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // app.use(cors()) 
        // app.use(express.json()) 
        app.get('/', (req, res) => {
          return res.json({
              "message": "Hi GraphQl"
          });
      });

        app.use('/user/api/login', graphqlHTTP((req: any, res: any) => ({      
            schema: schema,
            graphiql: true,
            pretty: true,
          })))
        
        const server = http.createServer(app);
        server.timeout = 300000;
        const port = process.env.PORT ;
        app.listen(port, () => {
            console.log(`App Listening on Port ${port}`);
        });
    } catch (error) {
      throw error;
    }
  }
 
//Error catcthing  

start()
  .then(() => {
    console.log("Application started.");
  })
  .catch((err) => {
    console.log("Failed to start application", err);
  });

 
 
 
 