export type PodcastListing = {
    id: number;
    image: string;
    name: string;
    selected: boolean;
};

export const TOP_PODCASTS: PodcastListing[] = [
    {
        id: 1,
        image: 'https://i.scdn.co/image/99ef853e48c8d344ce69552d2109e9b27ee6e43e',
        name: 'The Daily',
        selected: false,
    },
    {
        id: 2,
        image: 'https://i.scdn.co/image/7ef7d3dc8d747db3d859e7fe8c65d07ce059fe99',
        name: 'Crime Junkie',
        selected: false,
    },
    {
        id: 3,
        image: 'https://i.scdn.co/image/1a57c140949a19f2b808f8517c125b1f2c93df83',
        name: 'NPR News Now',
        selected: false,
    },
    {
        id: 4,
        image: 'https://i.scdn.co/image/ce89eb319d1bae6f56a89a9a98b0c55e82c773b4',
        name: 'My Favorite Murder with Karen Kilgariff and Georgia Hardstark',
        selected: false,
    },
    {
        id: 5,
        image: 'https://i.scdn.co/image/d139b51f639268d09e0c6535791b46d277ebcdfa',
        name: 'The Joe Budden Podcast with Rory &amp; Mal',
        selected: false,
    },
    {
        id: 6,
        image: 'https://i.scdn.co/image/c5a577dc66de130fa9ebd61f475410be5fc8ada2',
        name: 'The Journal.',
        selected: false,
    },
    {
        id: 7,
        image: 'https://i.scdn.co/image/811a7fb8a17d549fa86394d328ce646e999b6017',
        name: 'Snacks Minute',
        selected: false,
    },
    {
        id: 8,
        image: 'https://i.scdn.co/image/a300e88d755f9e32048bf663d7287f5ae45d8c5b',
        name: 'Pardon My Take',
        selected: false,
    },
];
