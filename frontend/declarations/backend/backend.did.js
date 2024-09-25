export const idlFactory = ({ IDL }) => {
  const Job = IDL.Record({
    'weaknesses' : IDL.Text,
    'strengths' : IDL.Text,
    'name' : IDL.Text,
    'role' : IDL.Text,
  });
  return IDL.Service({
    'addJob' : IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text], [], []),
    'getAllJobs' : IDL.Func([], [IDL.Vec(Job)], ['query']),
    'getJob' : IDL.Func([IDL.Text], [IDL.Opt(Job)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
