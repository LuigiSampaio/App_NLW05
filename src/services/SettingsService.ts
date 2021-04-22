<<<<<<< HEAD
import { getCustomRepository, Repository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { Setting } from "../entities/Setting";
=======
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
>>>>>>> a9c5b5c77ef69b68c4fa2a9a10e5bdf6f9054fbb

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {
<<<<<<< HEAD

    private settingsRepository: Repository<Setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username} : ISettingsCreate)  {
 
        const userAlreadyExists = await this.settingsRepository.findOne({
=======
    async create({ chat, username} : ISettingsCreate)  {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
>>>>>>> a9c5b5c77ef69b68c4fa2a9a10e5bdf6f9054fbb
            username
        });

        if(userAlreadyExists) {
            throw new Error("User already exists!!")
        }
    
<<<<<<< HEAD
        const settings = this.settingsRepository.create({
=======
        const settings = settingsRepository.create({
>>>>>>> a9c5b5c77ef69b68c4fa2a9a10e5bdf6f9054fbb
            chat,
            username
        })
    
<<<<<<< HEAD
        await this.settingsRepository.save(settings);
=======
        await settingsRepository.save(settings);
>>>>>>> a9c5b5c77ef69b68c4fa2a9a10e5bdf6f9054fbb

        return settings;
    }
}

export { SettingsService }
