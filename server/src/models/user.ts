import { AllowNull, Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'User' })
class User extends Model<User> {
    @AllowNull(false)
    @Column
    username: string;

    @AllowNull(false)
    @Column
    password: string;

    @AllowNull(false)
    @Column
    firstName: string;

    @AllowNull(false)
    @Column
    lastName: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default User;
