import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Job {
  'weaknesses' : string,
  'strengths' : string,
  'name' : string,
  'role' : string,
}
export interface _SERVICE {
  'addJob' : ActorMethod<[string, string, string, string], undefined>,
  'getAllJobs' : ActorMethod<[], Array<Job>>,
  'getJob' : ActorMethod<[string], [] | [Job]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
