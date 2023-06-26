export interface Race {
    id: number,
    name: string,
    description: string,
    image?: string
    hp_growth: string,
    mp_growth: string,
    str_growth: string,
    int_growth: string,
    dex_growth: string,
    base_hp: Number,
    base_mp: Number,
    base_str: Number,
    base_int: Number,
    base_dex: Number,
    created_at: string,
    updated_at: string,
}