/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */

import {prepare}               from "App/db/utils";
import {collections}           from "App/db";
import {MongoClient, ObjectId} from 'mongodb'

export const Post = {};

export const Query    = {
	       async post( root, q ) {
		       //console.log(arguments);
		       return prepare(await collections.Posts.findOne(ObjectId(q._id)))
	       },
	       async posts() {
		       console.log("posts")
		       return [{ title: "test" }];
	       }
       }
;
export const Mutation = {
	       async createPost( root, args, context, info ) {
		       console.log("createPost")
		       return args;
	       }
       }
;

