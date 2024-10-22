type Fairings = {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: Array<string>;
}

type Patch = {
    small: string;
    large: string;
}

type Links = {
    patch: Patch;
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
}

type Failures = {
    time: number;
    altitude: number;
    reason: string;
}

export type LaunchDetail = {
    fairings: Fairings;
    links: Links;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    net: boolean;
    window: number;
    rocket:string;
    success: boolean;
    failures: Array<Failures>
    details: string;
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix:number;
    upcoming: boolean;
    id: string;
}
 