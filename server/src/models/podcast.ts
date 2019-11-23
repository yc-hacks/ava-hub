import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    HasMany,
    Model,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import Episode from './episode';
import Genre from './genre';

@Table({ tableName: 'Podcast' })
class Podcast extends Model<Podcast> {
    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    author: string;

    @Column
    description: string;

    @Column
    image: string;

    // MARK: Genre
    @ForeignKey(() => Genre)
    @Column
    genreId: number;

    @BelongsTo(() => Genre)
    genre: Genre;

    // MARK: Episode
    @HasMany(() => Episode)
    episodes: Episode[];

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default Podcast;
