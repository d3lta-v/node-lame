import { WriteStream } from 'fs';
import { DuplexOptions } from 'stream';

export interface DecoderOptions extends DuplexOptions {
    readonly decoder: string;
}

export interface EncoderOptions extends DuplexOptions {
    readonly float;
    readonly signed?: number;
    readonly bitDepth?: number;
    readonly channels?: number;
    readonly sampleRate?: number;
    readonly bitRate?: number;
    readonly outSampleRate?: number;
    readonly mode?: ChannelModes;
}

/**
 * The `Decoder` accepts an MP3 file and outputs raw PCM data.
 * 
 * @param opts Configurations.
 * @returns A writable stream.
 */
export function Decoder(opts?: DecoderOptions): WriteStream;

/**
 * The `Encoder` accepts raw PCM data and outputs an MP3 file.
 * 
 * @param opts Configurations.
 * @returns A writable stream.
 */
export function Encoder(opts?: EncoderOptions): WriteStream;

/*
 * Channel Modes
 */
export const enum ChannelModes {
    STEREO,
    JOINTSTEREO,
    DUALCHANNEL,
    MONO
}
