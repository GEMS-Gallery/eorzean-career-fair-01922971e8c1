import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  const jobList = document.getElementById('jobs');
  const selectedJob = document.getElementById('selected-job');
  const jobForm = document.getElementById('job-form');

  async function loadJobs() {
    const jobs = await backend.getAllJobs();
    jobList.innerHTML = '';
    jobs.forEach(job => {
      const li = document.createElement('li');
      li.textContent = job.name;
      li.addEventListener('click', () => displayJobDetails(job));
      jobList.appendChild(li);
    });
  }

  function displayJobDetails(job) {
    selectedJob.innerHTML = `
      <h3>${job.name}</h3>
      <p><strong>Role:</strong> ${job.role}</p>
      <p><strong>Strengths:</strong> ${job.strengths}</p>
      <p><strong>Weaknesses:</strong> ${job.weaknesses}</p>
    `;
  }

  jobForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('job-name').value;
    const role = document.getElementById('job-role').value;
    const strengths = document.getElementById('job-strengths').value;
    const weaknesses = document.getElementById('job-weaknesses').value;

    await backend.addJob(name, role, strengths, weaknesses);
    jobForm.reset();
    await loadJobs();
  });

  await loadJobs();
});
