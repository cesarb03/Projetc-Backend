import mongoose from 'mongoose';
import mongoConnection from '../../mongoDB/connection';
import userModel from '../../../models/schemas/userSchema';
import IUserDAO from './IUserDAO';
import UserDTO from '../../DTOs/UserDTO';
import Logger from '../../../utils/logger';

class UserMongoDAO extends IUserDAO {
  model: mongoose.Model<any, {}, {}, {}>;
  DTO: any;
  static instance: UserMongoDAO;

  constructor(model: mongoose.Model<any, {}, {}, {}>, DTO: IUserDAO) {
    super();
    this.model = model;
    this.DTO = DTO;
    mongoConnection();
  }

  static getInstance(userModel: mongoose.Model<any, {}, {}, {}>, DTO: any) {
    if (!this.instance) {
      this.instance = new UserMongoDAO(userModel, DTO);
    }
    return this.instance;
  }

  public async save(newUser: any) {
    const data = await this.model.create(newUser);
    return data;
  }

  public async getUser(user: any) {
    try {
      const findUser: any = await this.model.findOne({ email: user.name });

      if (!findUser) return null;
      return new this.DTO(findUser).chatUser();
    } catch (error) {
      Logger.error(`MongoAtlas getUser method error: ${error}`);
    }
  }
}

export default UserMongoDAO.getInstance(userModel, UserDTO);
