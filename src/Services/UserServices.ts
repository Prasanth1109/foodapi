import { Service } from "typedi";
import UsersTable from "../models/userDb/Users"
import { uuidv4 } from "../utils/Utils";
import { getManager } from "typeorm-plus";


@Service()
export default class UserService extends UsersTable {
    modelName(): string {
        return UsersTable.name;
    }

    public async getEmailPass(input) {
        try {
                let entityManager = getManager();
                let result = await entityManager.query(`
                select * from tamfood_user.tbl_user tu where tu.email = "${input.email}" and tu.password = "${input.password}"
            `)                
            return result;
        } catch (error) {
            console.log("error in getUser", error)
            return error
        }
    }

    public async createOrUpdateUser(input) {
        try {
                let entityManager = getManager(); 
                let data = new UsersTable();
                data.userUniqueKey = uuidv4();
                data.userName = input.name;
                data.email = input.email;
                data.password = input.password;

                let user = await entityManager.save(data);
                return user;
        } catch (error) {
            console.log("error in create", error)
            return error
        }
    }

}