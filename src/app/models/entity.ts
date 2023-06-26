export interface Entity {
    id: number,
    name: string,
    image?: string
    race_id: number,
    job_id: number,
    level: number,
    hp: Number,
    mp: Number,
    str: Number,
    dex: Number,
    int: Number,
    status: string
}