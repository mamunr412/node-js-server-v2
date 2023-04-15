import { getUser } from '../controlers/users';

const express = require("express");
const router = express.Router();



router.get('/',getUser)


export default router