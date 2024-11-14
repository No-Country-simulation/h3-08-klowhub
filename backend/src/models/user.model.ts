import { Optional } from "sequelize";

import {
    Table,
    Model,
    Column,
    DataType,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';

import { Role, UserAttributes } from "../interfaces/user.interface";


interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

@Table({
    timestamps: true,
    tableName: "users",
    modelName: "User"
})

export default class User extends Model<UserAttributes, UserCreationAttributes> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare identification: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare image: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare city: string;

    @Column({
        type: DataType.ENUM(...Object.values(Role)),
        allowNull: false,
        defaultValue: Role.Explorer
    })
    declare role: Role;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}

