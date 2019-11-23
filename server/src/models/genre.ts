import {
    AllowNull,
    Column,
    CreatedAt,
    HasMany,
    Model,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import Podcast from './podcast';

@Table({ tableName: 'Genre' })
class Genre extends Model<Genre> {
    @AllowNull(false)
    @Column
    name: string;

    @Column
    description: string;

    @HasMany(() => Podcast)
    podcasts: Podcast[];

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default Genre;
