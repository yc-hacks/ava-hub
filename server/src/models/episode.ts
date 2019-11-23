import {
    AllowNull,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';
import Podcast from './podcast';

@Table({ tableName: 'Episode' })
class Episode extends Model<Episode> {
    @AllowNull(false)
    @Column
    title: string;

    @Column
    description: string;

    @Column
    pubDat: Date;

    @Column
    link: string;

    @Column
    audioLink: string;

    // MARK: One to Many Podcast
    @ForeignKey(() => Podcast)
    @Column
    podcastId: number;

    @BelongsTo(() => Podcast)
    podcast: Podcast;

    @Column
    transcript: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}

export default Episode;
