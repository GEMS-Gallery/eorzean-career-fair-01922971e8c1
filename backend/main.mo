import Bool "mo:base/Bool";
import Func "mo:base/Func";

import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Text "mo:base/Text";

actor {
  // Define the Job type
  public type Job = {
    name: Text;
    role: Text;
    strengths: Text;
    weaknesses: Text;
  };

  // Stable variable to store jobs
  stable var jobs: [Job] = [];

  // Function to add a new job
  public func addJob(name: Text, role: Text, strengths: Text, weaknesses: Text) : async () {
    let newJob: Job = {
      name = name;
      role = role;
      strengths = strengths;
      weaknesses = weaknesses;
    };
    jobs := Array.append(jobs, [newJob]);
    Debug.print("New job added: " # name);
  };

  // Function to get all jobs
  public query func getAllJobs() : async [Job] {
    jobs
  };

  // Function to get a specific job by name
  public query func getJob(name: Text) : async ?Job {
    Array.find(jobs, func (job: Job) : Bool {
      job.name == name
    })
  };
}
