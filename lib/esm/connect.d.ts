import { MobilettoConnection } from "mobiletto-base/lib/cjs/types.js";
import { Volume_subDriver } from "yuebing-model";
import { VolumeType } from "yuebing-model";
export type MobilettoConnectionConfig = {
    key: string;
    secret?: string;
    opts?: Record<string, unknown>;
};
export type MobilettoConnectionConfigResolver<T extends Volume_subDriver> = {
    key: (cfg: T) => string;
    secret: (cfg: T) => string | undefined;
    opts: (cfg: T) => Record<string, unknown> | undefined;
};
export declare const resolveConnectionConfig: (volume: VolumeType) => MobilettoConnectionConfig;
export declare const connectVolume: <T extends unknown>(volume: T) => Promise<MobilettoConnection>;
