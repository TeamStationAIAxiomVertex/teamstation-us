const teamSize = document.querySelector("#team-size");
const teamSizeOutput = document.querySelector("#team-size-output");
const teamTopology = document.querySelector("#team-topology");
const teamRole = document.querySelector("#team-role");
const teamLevel = document.querySelector("#team-level");
const planTitle = document.querySelector("#plan-title");
const planSubtitle = document.querySelector("#plan-subtitle");

function updatePlan() {
  if (!teamSize || !teamSizeOutput || !teamTopology || !teamRole || !teamLevel || !planTitle || !planSubtitle) {
    return;
  }

  const size = teamSize.value;
  teamSizeOutput.textContent = size;
  planTitle.textContent = `${size} ${teamRole.value}`;
  planSubtitle.textContent = `${teamTopology.value} with ${teamLevel.value}.`;
}

[teamSize, teamTopology, teamRole, teamLevel].forEach((control) => {
  if (control) {
    control.addEventListener("input", updatePlan);
    control.addEventListener("change", updatePlan);
  }
});

updatePlan();
